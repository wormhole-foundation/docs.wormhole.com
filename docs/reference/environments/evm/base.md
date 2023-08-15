# Wormhole

Wormhole is a generic messaging protocol that provides secure communication between blockchains. 

By integrating Wormhole, an application and it's users have access to users and liquidity on > 30 chains and > 7 different platforms.

# Usage

Using Wormhole on Base is straightforward and can take the form of generic [messaging](#messaging) or a [token transfer](#token-transfers).

## Messaging

A full tutorial is available [here](https://docs.wormhole.com/wormhole/quick-start/tutorials/hello-wormhole)

### Sending

To send a message across Wormhole, invoke the wormhole relayer contract with the message.

```solidity
// get the cost for delivery on the other chain 
uint256 cost = quoteCrossChainGreeting(targetChain);
require(msg.value == cost);

// invoke the `sendPayloadToEvm` method of the `WormholeRelayer` contract
wormholeRelayer.sendPayloadToEvm{value: cost}(
    targetChain,
    targetAddress,
    abi.encode(message, msg.sender), // payload
    0, // no receiver value needed since we're just passing a message
    GAS_LIMIT
);
```

[Snippet Source](https://github.com/wormhole-foundation/hello-wormhole/blob/main/src/HelloWormhole.sol#L24-L34)

### Receiving

To receive a message through Wormhole, implement the [`IWormholeReceiver` interface](https://github.com/wormhole-foundation/wormhole-solidity-sdk/blob/main/src/interfaces/IWormholeReceiver.sol).

```solidity
function receiveWormholeMessages(
    bytes memory payload, // the incoming message
    bytes[] memory,       // additional VAAs 
    bytes32,              // address that called 'sendPayloadToEvm' (HelloWormhole contract address)
    uint16 sourceChain,   // The _wormhole_ chain id
    bytes32 deliveryHash  // hash of delivery data, useful to prevent duplicate deliveries
) public payable override
```

[Snippet Source](https://github.com/wormhole-foundation/hello-wormhole/blob/main/src/HelloWormhole.sol#L38-L55)


## Token Transfers

A full tutorial is available [here](https://docs.wormhole.com/wormhole/quick-start/tutorials/hello-token)

### Sending

To send tokens through Wormhole, extend the [TokenSender](https://github.com/wormhole-foundation/wormhole-solidity-sdk/blob/main/src/WormholeRelayerSDK.sol#L79) contract.


```solidity

// Transfer the tokens
IERC20(token).transferFrom(msg.sender, address(this), amount);

// Encode the payload 
bytes memory payload = abi.encode(recipient);
sendTokenWithPayloadToEvm(
    targetChain,        // The _wormhole_ chain id 
    targetHelloToken,   // The address (on targetChain) to send token and payload to
    payload,            // A message to pass along with the token transfer
    0,                  // receiver value
    GAS_LIMIT, 
    token,              // address of IERC20 token contract
    amount              
);

```

[Snippet Source](https://github.com/wormhole-foundation/hello-token/blob/main/src/HelloToken.sol#L22-L44)


### Receiving

To receive tokens through Wormhole, extend the [TokenReceiver](https://github.com/wormhole-foundation/wormhole-solidity-sdk/blob/main/src/WormholeRelayerSDK.sol#L186) contract.

Override the method 

```solidity
function receivePayloadAndTokens(
    bytes memory payload,                   // A generic message sent with the tokens 
    TokenReceived[] memory receivedTokens,  // array of tokens received
    bytes32 sourceAddress                   // The original sender
    uint16 sourceChain,                     // The _wormhole_ chain id of the sender
    bytes32 deliveryHash                    // hash of delivery data, useful to prevent duplicate deliveries
) internal override onlyWormholeRelayer
```

[Snippet Source](https://github.com/wormhole-foundation/hello-token/blob/main/src/HelloToken.sol#L46-L58)


# See also

Source for the [Wormhole Solidity SDK](https://github.com/wormhole-foundation/wormhole-solidity-sdk).

For more information, see the [Wormhole Docs](https://docs.wormhole.com/wormhole/).

For relevant constants like contract addresses on Base, see the [Base Constants](https://docs.wormhole.com/wormhole/blockchain-environments/evm#base).

For a complete example running on Base, see this [Example App](https://github.com/gmimnoah/happy-birthday-base-wormhole).