### Hello Universe

Cheeky nod to hello world, but since we're wormhole we aren't limited to a single planet.

<!-- 
[Next steps for this guide: Discuss how to get this cross-chain application deployed onto testnet, and how to run tests locally]

[Another next step for this guide: Have a section at the end about ‘what if I don’t know how much gas my contract will take’ where we talk about refunds and link to an example that uses refunds]
-->

Let’s take a simple HelloWorld solidity application, and take it cross-chain!

### Single-chain HelloWorld solidity contract

This single-chain HelloWorld smart contract allows users to send greetings, a.k.a allows them to cause an event ‘GreetingReceived’ to be emitted with their greeting!

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract HelloWorld {
    event GreetingReceived(string greeting, address sender);

    string[] public greetings;
		
    /**
     * @notice Returns the cost (in wei) of a greeting
     */
    function quoteGreeting() public view returns (uint256 cost) {
        return 0;
    }
	
    /**
     * @notice Updates the list of 'greetings'
     * and emits a 'GreetingReceived' event with 'greeting'
     */
    function sendGreeting(
        string memory greeting
    ) public payable {
        uint256 cost = quoteGreeting();
        require(msg.value == cost);
        emit GreetingReceived(greeting, msg.sender);
        greetings.push(greeting);
    }
}
```

### Taking HelloWorld cross-chain using Wormhole Automatic Relayers

Suppose we want users to be able to request through their Ethereum wallet for a greeting to be sent to Avalanche, and vice versa. Let us begin writing a contract that we can deploy onto Ethereum, Avalanche, and any number of other chains, and enable greetings to be sent freely to and from each contract irrespective of chain. 

We’d want to implement the following function: 

```solidity
/**
* @notice Updates the list of 'greetings' 
* and emits a 'GreetingReceived' event with 'greeting'
* on the HelloWormhole contract at 
* chain 'targetChain' and address 'targetAddress'
*/
function sendCrossChainGreeting(
    uint16 targetChain,
    address targetAddress,
    string memory greeting
) public payable;
```

The Wormhole Relayer contract lets us do exactly this! Let’s take a look at the Wormhole Relayer contract interface.

<details>
<summary>Docstring</summary>

```solidity
/**
* @notice Publishes an instruction for the default delivery provider
* to relay a payload to the address `targetAddress` on chain `targetChain` 
* with gas limit `gasLimit` and `msg.value` equal to `receiverValue`
* 
* `targetAddress` must implement the IWormholeReceiver interface
* 
* This function must be called with `msg.value` equal to `quoteEVMDeliveryPrice(targetChain, receiverValue, gasLimit)`
* 
* Any refunds (from leftover gas) will be paid to the delivery provider. In order to receive the refunds, use the `sendPayloadToEvm` function 
* with `refundChain` and `refundAddress` as parameters
* 
* @param targetChain in Wormhole Chain ID format
* @param targetAddress address to call on targetChain (that implements IWormholeReceiver) 
* @param payload arbitrary bytes to pass in as parameter in call to `targetAddress`
* @param receiverValue msg.value that delivery provider should pass in for call to `targetAddress` (in targetChain currency units)
* @param gasLimit gas limit with which to call `targetAddress`.
* @return sequence sequence number of published VAA containing delivery instructions
*/
```

</details>

```solidity
function sendPayloadToEvm(
    uint16 targetChain,
    address targetAddress,
    bytes memory payload,
    uint256 receiverValue,
    uint256 gasLimit
) external payable returns (uint64 sequence);
```

The Wormhole Relayer network is powered by [**Delivery Providers**](../../../reference/glossary.md#delivery-provider), who perform the service of watching for Wormhole Relayer delivery requests and performing the delivery to the intended target chain as instructed. 

In exchange for calling your contract at 'targetAddress' on 'targetChain' and paying the gas fees that your contract uses up, they charge a source chain fee of 

`(deliveryPrice,) = quoteEVMDeliveryPrice(targetChain, receiverValue, gasLimit)`

So, following this interface, we can implement `sendCrossChainGreeting` by simply calling sendPayloadToEvm with the payload being the greeting.

```solidity
uint256 constant GAS_LIMIT = 50_000;

IWormholeRelayer public immutable wormholeRelayer;

/**
* @notice Returns the cost (in wei) of a greeting
*/
function quoteCrossChainGreeting(
    uint16 targetChain
) public view returns (uint256 cost) {
    // Cost of requesting a message to be sent to
    // chain 'targetChain' with a gasLimit of 'GAS_LIMIT'
    (cost, ) = wormholeRelayer.quoteEVMDeliveryPrice(
        targetChain,
        0,
        GAS_LIMIT
    );
}

/**
* @notice Updates the list of 'greetings' 
* and emits a 'GreetingReceived' event with 'greeting'
* on the HelloWormhole contract at 
* chain 'targetChain' and address 'targetAddress'
*/
function sendCrossChainGreeting(
    uint16 targetChain,
    address targetAddress,
    string memory greeting
) public payable {
    bytes memory payload = abi.encode(greeting);
    uint256 cost = quoteCrossChainGreeting(targetChain);
        require(msg.value >= cost);
    wormholeRelayer.sendPayloadToEvm{value: cost}(
        targetChain,
        targetAddress,
        payload,
        0, // no receiver value needed
        GAS_LIMIT
    );
}
```

A key part of this system though is that ‘targetAddress’ must implement the IWormholeReceiver interface! Since we want to be able to send both to and from the HelloWormhole contract, we must implement this interface. 

<details>
<summary>Docstring</summary>

```solidity
/**
* @notice When a `send` is performed with this contract as the target, this function will be
*     invoked by the WormholeRelayer contract
*
* NOTE: This function should be restricted such that only the Wormhole Relayer contract can call it.
*
* We also recommend that this function:
*   - Stores all received `deliveryHash`s in a mapping `(bytes32 => bool)`, and
*       on every call, checks that deliveryHash has not already been stored in the
*       map (This is to prevent other users maliciously trying to relay the same message)
*   - Checks that `sourceChain` and `sourceAddress` are indeed who
*       you expect to have requested the calling of `send` or `forward` on the source chain
*
* The invocation of this function corresponding to the `send` request will have msg.value equal
*   to the receiverValue specified in the send request.
*
* If the invocation of this function reverts or exceeds the gas limit 
*   specified by the send requester, this delivery will result in a `ReceiverFailure`.
*
* @param payload - an arbitrary message which was included in the delivery by the
*     requester.
* @param additionalVaas - Additional VAAs which were requested to be included in this delivery.
*   They are guaranteed to all be included and in the same order as was specified in the
*     delivery request.
* @param sourceAddress - the (wormhole format) address on the sending chain which requested
*     this delivery.
* @param sourceChain - the wormhole chain ID where this delivery was requested.
* @param deliveryHash - the VAA hash of the deliveryVAA.
*
* NOTE: These signedVaas are NOT verified by the Wormhole core contract prior to being provided
*     to this call. Always make sure `parseAndVerify()` is called on the Wormhole core contract
*     before trusting the content of a raw VAA, otherwise the VAA may be invalid or malicious.
*/
```
</details>
    

```solidity
// SPDX-License-Identifier: Apache 2

pragma solidity ^0.8.0;

/**
 * @notice Interface for a contract which can receive Wormhole messages.
 */
interface IWormholeReceiver {
    
    function receiveWormholeMessages(
        bytes memory payload,
        bytes[] memory additionalVaas,
        bytes32 sourceAddress,
        uint16 sourceChain,
        bytes32 deliveryHash
    ) external payable;

}
```

What will happen is, when on the source chain ‘sendPayloadToEvm’ is called, the  Delivery Provider will watch the source chain and then call the ‘receiveWormholeMessages’ endpoint on the targetChain and targetAddress specified. So, in receiveWormholeMessages, we want to 

- Update the list of ‘greetings’
- Emit a 'GreetingReceived' event with the 'greeting'

```solidity
    event GreetingReceived(string greeting, uint16 senderChain, address sender);

    string[] public greetings;

    /**
     * @notice Endpoint that the Wormhole Relayer contract will call
     * to deliver the greeting
     */
    function receiveWormholeMessages(
        bytes memory payload,
        bytes[] memory, // additionalVaas
        bytes32 sourceAddress,
        uint16 sourceChain,
        bytes32 // deliveryHash
    ) public payable override {
        require(msg.sender == address(wormholeRelayer));

        address sender = fromWormholeFormat(sourceAddress);
        string memory greeting = abi.decode(payload, (string));

        emit GreetingReceived(greeting, sourceChain, sender);
        greetings.push(greeting);
	}
```

<details>
<summary>fromWormholeFormat implementation</summary>
    
```solidity
// Helper to convert 32-byte Wormhole formatted address to a standard EVM address
function fromWormholeFormat(bytes32 whFormatAddress) pure returns (address) {
    if (uint256(whFormatAddress) >> 160 != 0)
        revert NotAnEvmAddress(whFormatAddress);
    return address(uint160(uint256(whFormatAddress)));
}
```
</details>
    

And voila, we have a full contract that can be deployed to many EVM chains, and in totality would form a full cross-chain application powered by Wormhole!

Users with any wallet can request greetings to be emitted on any chain that is part of the system. 

### Full Cross-chain HelloWormhole solidity contract

**Full Github Repository with Testing infrastructure here: [https://github.com/JoeHowarth/hello-wormhole/blob/main/src/HelloWormhole.sol](https://github.com/JoeHowarth/hello-wormhole/blob/main/src/HelloWormhole.sol)**

<details>
<summary>Full Source</summary>

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IWormholeRelayer.sol";
import "./interfaces/IWormholeReceiver.sol";

contract HelloWormhole is IWormholeReceiver {
    event GreetingReceived(string greeting, uint16 senderChain, address sender);

    uint256 constant GAS_LIMIT = 50_000;
    
    IWormholeRelayer public immutable wormholeRelayer;

    string[] public greetings;

    constructor(address _wormholeRelayer) {
        wormholeRelayer = IWormholeRelayer(_wormholeRelayer);
    }

    /**
     * @notice Returns the cost (in wei) of a greeting
     */
    function quoteCrossChainGreeting(
        uint16 targetChain
    ) public view returns (uint256 cost) {
        // Cost of requesting a message to be sent to
        // chain 'targetChain' with a gasLimit of 'GAS_LIMIT'
        (cost, ) = wormholeRelayer.quoteEVMDeliveryPrice(
            targetChain,
            0,
            GAS_LIMIT
        );
    }

    /**
     * @notice Updates the list of 'greetings' 
     * and emits a 'GreetingReceived' event with 'greeting'
     * on the HelloWormhole contract at 
     * chain 'targetChain' and address 'targetAddress'
     */
    function sendCrossChainGreeting(
        uint16 targetChain,
        address targetAddress,
        string memory greeting
    ) public payable {
        bytes memory payload = abi.encode(greeting);
        uint256 cost = quoteCrossChainGreeting(targetChain);
	    require(msg.value >= cost);
        wormholeRelayer.sendPayloadToEvm{value: cost}(
            targetChain,
            targetAddress,
            payload,
            0, // no receiver value needed
            GAS_LIMIT
        );
    }

    /**
     * @notice Endpoint that the Wormhole Relayer contract will call
     * to deliver the greeting
     */
    function receiveWormholeMessages(
        bytes memory payload,
        bytes[] memory, // additionalVaas
        bytes32 sourceAddress,
        uint16 sourceChain,
        bytes32 // deliveryHash
    ) public payable override {
        require(msg.sender == address(wormholeRelayer));

        address sender = fromWormholeFormat(sourceAddress);
        string memory greeting = abi.decode(payload, (string));

        emit GreetingReceived(greeting, sourceChain, sender);
        greetings.push(greeting);
    }
}

function fromWormholeFormat(bytes32 whFormatAddress) pure returns (address) {
    if (uint256(whFormatAddress) >> 160 != 0)
        revert NotAnEvmAddress(whFormatAddress);
    return address(uint160(uint256(whFormatAddress)));
}
```

</details>