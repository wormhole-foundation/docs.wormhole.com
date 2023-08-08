
![Automatic Relayer](../.gitbook/assets/auto-relayer.png)

The Automatic Relayer provides a mechanism for a contract on one chain to send a message to a contract on a different chain without the developer dealing with any off chain deployments. 

{% hint style="warning" %}
Currently the Automatic Relayer feature is limited to EVM environments.

Find the complete list of EVM environment blockchains [here](../reference/environments/evm/README.md).
{% endhint %}

<!-- 
    If you're working with the EVM exclusively, a number of simplifying architectural decisions can be made.  

    With EVM only cross chain applications, a developer can:

    1) Take advantage of a service that will [automatically relay](../reference/components/relayer.md#automatic-relayers) the [VAAs](../reference/components/vaa.md) to the target chain for you. 
    2) Take advantage of testing tools like Forge's [fork testing](https://book.getfoundry.sh/forge/fork-testing) for rapid iteration on the core business logic.
    3) Use other features restricted to EVM only environments, like [forwarding](#forwarding) to compose more complex application logic.
-->


# Tutorials

- [Hello Wormhole](../tutorials/quick-start/hello-wormhole/README.md)
    A tutorial that covers message passing across EVM environments 
- [Hello Token](../tutorials/quick-start/hello-token/README.md)
    A tutorial that covers token transfer across EVM environments 

# On Chain 

On chain, a smart contract interacts with the [IWormholeRelayer](https://github.com/wormhole-foundation/wormhole-relayer-solidity-sdk/blob/main/src/interfaces/IWormholeRelayer.sol) to send and receive messages.

## Sending a message

To send a message to a contract on another EVM chain, we can call the `sendPayloadToEvm` method, provided by the `IWormholeRelayer` interface.

```solidity
function sendPayloadToEvm(
    // Chain ID in Wormhole format
    uint16 targetChain,     
    // Contract Address on target chain we're sending a message to
    address targetAddress,  
    // The payload, encoded as bytes
    bytes memory payload,   
    // How much value to attach to the delivery transaction 
    uint256 receiverValue,  
    // The gas limit to set on the delivery transaction
    uint256 gasLimit        
) external payable returns (
    // Unique, incrementing ID, used to identify a message
    uint64 sequence
);
```

The `sendPayloadToEvm` method is marked `payable` so we can pay for our transaction to be submitted. 


The value to attach to the invocation is determined by calling the `quoteEVMDeliveryPrice`, which provides an estimate of the cost of gas on the target chain.

```solidity
function quoteEVMDeliveryPrice(
    // Chain ID in Wormhole format
    uint16 targetChain,
    // How much value to attach to delivery transaction 
    uint256 receiverValue,
    // The gas limit to attach to the delivery transaction
    uint256 gasLimit
) external view returns (
    // How much value to attach to the send call
    uint256 nativePriceQuote, 
    // 
    uint256 targetChainRefundPerGasUnused
);
```

This method should be called prior to sending a message and the value returned for `nativePriceQuote` should be attached to the call to send the payload in order to cover the cost of the transaction on the target chain.  


In total, sending a message across EVM chains can be as simple as:
```solidity
// Get a quote for the cost of gas for delivery
(cost, ) = wormholeRelayer.quoteEVMDeliveryPrice(
    targetChain,
    valueToSend,
    GAS_LIMIT
);

// Send the message
wormholeRelayer.sendPayloadToEvm{value: cost}(
    targetChain,
    targetAddress,
    abi.encode(payload),
    valueToSend, 
    GAS_LIMIT
);
```


## Receiving a message

To receive a message using the `Automatic Relayer` feature, the target contract must implement the [IWormholeReceiver](https://github.com/wormhole-foundation/wormhole-relayer-solidity-sdk/blob/main/src/interfaces/IWormholeReceiver.sol) interface.

```solidity
function receiveWormholeMessages(
    bytes memory payload,           // Message passed by source contract 
    bytes[] memory additionalVaas,  // Any additional VAAs that are needed (Note: these are unverified) 
    bytes32 sourceAddress,          // The address of the source contract
    uint16 sourceChain,             // The Wormhole chain ID
    bytes32 deliveryHash            // A hash of contents, useful for replay protection
) external payable;
```

The logic inside the function body may be whatever business logic is required to take action on the specific payload.


## Other Considerations

Some implementation details should be considered during development to ensure safety and improve UX.

<!-- TODO: Joe -->
- Receiving a message from relayer 
    - Check for expected emitter 
    - call parseAndVerify on any additionalVAAs

- Replay protection

- Message Ordering
    - no guarantees on order of messages delivered

- Fowarding/Call Chaining

- Refunding overpayment of gasLimit

- Refunding overpayment of value sent


# Off Chain

If taking advantage of Automatic Relaying, no off chain logic need be implemented. 

While no off chain programs are required, a developer may want to track the progress of messages in flight. To track the progress of messages in flight, use the worm CLI tool's `status` subcommand.

```sh
$ worm status mainnet ethereum 0xdeadbeef
```

See the [CLI tool docs](../reference/cli-docs/README.md) for installation and usage.

# See Also

Reference documentation for EVM chains is available [here](../reference/environments/evm/README.md)
