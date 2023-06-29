# Building Your First Cross-Chain Token Sending and Receiving Application

This repository contains a [solidity contract](./src/HelloToken.sol) that can be deployed onto many EVM chains to form a fully functioning cross-chain application with the ability for users to request, from one contract, that tokens are sent to a user on a different chain.

Here is an example of a [cross-chain borrow lending application](https://github.com/wormhole-foundation/cross-chain-borrow-lend) that uses the topics covered in this tutorial!

## Getting Started

Included in this [repository](https://github.com/wormhole-foundation/hello-token/) is:

- Example Solidity Code
- Example Forge local testing setup
- Testnet Deploy Scripts
- Example Testnet testing setup

### Environment Setup

- Node 18.9.1 or later, npm 8.19.1 or later: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- forge 0.2.0 or later: [https://book.getfoundry.sh/getting-started/installation](https://book.getfoundry.sh/getting-started/installation)

### Testing Locally

```bash
npm run build
forge test
```

Expected output is

```bash
Running 1 test for test/HelloToken.t.sol:HelloTokenTest
[PASS] testCrossChainDeposit() (gas: 1338038)
Test result: ok. 1 passed; 0 failed; finished in 5.64s
```

### Deploying to Testnet

You will need a wallet with at least 0.05 Testnet AVAX and 0.01 Testnet CELO. 

- [Obtain testnet AVAX here](https://core.app/tools/testnet-faucet/?token=C)
- [Obtain testnet CELO here](https://faucet.celo.org/alfajores)

```bash
EVM_PRIVATE_KEY=your_wallet_private_key npm run deploy
```

### Testing on Testnet

You will need a wallet with at least 0.02 Testnet AVAX. [Obtain testnet AVAX here](https://core.app/tools/testnet-faucet/?token=C)

You must have also deployed contracts onto testnet (as described in the above section).

To test sending and receiving a message on testnet, execute the test as such:

```bash
EVM_PRIVATE_KEY=your_wallet_private_key npm run test
```

Specifically, we will write and deploy a contract onto many chains that allows users to request, from one contract, that tokens are sent to a user on a *different chain*.

## Let’s write [HelloToken](https://github.com/wormhole-foundation/hello-token), a cross-chain application using TokenBridge

Let’s write a [HelloToken contract](https://github.com/wormhole-foundation/hello-token/blob/main/src/HelloToken.sol) that lets users send an arbitrary amount of an IERC20 token to an address of their choosing on another chain.

```solidity
import "wormhole-solidity-sdk/WormholeRelayerSDK.sol";
```

First thing to note is we will make use of the [Wormhole Solidity SDK](https://github.com/wormhole-foundation/wormhole-solidity-sdk). You can include this in your own cross-chain application by simply running `forge install wormhole-foundation/wormhole-solidity-sdk`. 

This solidity SDK provides helpers that make cross-chain development with Wormhole easier, and specifically provides us with the TokenSender and TokenReceiver abstract classes with useful functionality for sending and receiving tokens using TokenBridge

Lets start by writing a function to send some amount of a token to a specific recipient on a target chain. 

```solidity
function sendCrossChainDeposit(
        uint16 targetChain,
        address targetHelloToken,//address of HelloToken contract on targetChain
        address recipient,
        uint256 amount,
        address token
) public payable;
```

We do this by sending the token as well as a payload to the HelloToken contract on the target chain. The payload will contain the intended recipient of the token, so that the target chain HelloToken contract can send the token to the intended recipient. 

> TokenBridge only supports sending IERC20 tokens, and specifically only up to 8 decimals of a token. So, if your IERC20 token has 18 decimals, and you send ‘amount’ of a token, you will receive ‘amount’ rounded down to the nearest multiple of 10^10.


To send the token and payload to the HelloToken contract, we make use of the ‘sendTokenWithPayloadToEvm’ helper from the Wormhole Solidity SDK. 

To do this, a few things need to happen:

- The user (or contract) who calls ‘sendCrossChainDeposit’ should **************approve************** the HelloWorld contract to use ‘amount’ of the user’s tokens. [See how that is done in the forge test here](https://github.com/wormhole-foundation/hello-token/blob/main/test/HelloToken.t.sol#L37)
- We must transfer ‘amount’ of the token from the user to the HelloToken source contract
    
    `IERC20(token).transferFrom(msg.sender, address(this), amount);`
    
- We must encode the recipient address into a payload
    
    `bytes memory payload = abi.encode(recipient);`
    
- We must make sure that the correct amount of msg.value was passed in to send the token and payload.
    - The cost to send a token is `wormhole.messageFee()` (which is currently free!)
    - The cost to request a relay depends on the gas amount and receiver value you will need. For our case, this is `(deliveryCost,) = 
        wormholeRelayer.quoteEVMDeliveryPrice(targetChain, 0, GAS_LIMIT);`

```solidity
function sendCrossChainDeposit(
        uint16 targetChain,
        address targetHelloToken,
        address recipient,
        uint256 amount,
        address token
) public payable {
    uint256 cost = quoteCrossChainDeposit(targetChain);
    require(msg.value == cost, 
    "msg.value != quoteCrossChainDeposit(targetChain)");

    IERC20(token).transferFrom(msg.sender, address(this), amount);

    bytes memory payload = abi.encode(recipient);
    sendTokenWithPayloadToEvm(
       targetChain, 
       targetHelloToken, // address (on targetChain) to send token and payload
       payload, 
       0, // receiver value
       GAS_LIMIT, 
       token, // address of IERC20 token contract
       amount
    );
}

function quoteCrossChainDeposit(uint16 targetChain) 
public view returns (uint256 cost) {
    // Cost of delivering token and payload to targetChain
    uint256 deliveryCost;
    (deliveryCost,) = 
    wormholeRelayer.quoteEVMDeliveryPrice(targetChain, 0, GAS_LIMIT);

    // Total cost: delivery cost + 
    // cost of publishing the 'sending token' wormhole message
    cost = deliveryCost + wormhole.messageFee();
}
```

Now, we just have to implement the TokenReceiver abstract class - which is also included in the Wormhole Solidity SDK

```solidity
struct TokenReceived {
    bytes32 tokenHomeAddress;
    uint16 tokenHomeChain;
    address tokenAddress; // wrapped address if tokenHomeChain !== this chain, 
													// else tokenHomeAddress (in evm address format)
    uint256 amount;
    uint256 amountNormalized; // if decimals > 8, normalized to 8 decimal places
}

function receivePayloadAndTokens(
        bytes memory payload,
        TokenReceived[] memory receivedTokens,
        bytes32 sourceAddress,
        uint16 sourceChain,
        bytes32 deliveryHash
) internal virtual {}
```

When `sendTokenWithPayloadToEvm` is called, this results in `receivePayloadAndTokens` being called on the target chain and target address specified, with the appropriate inputs.

payload, sourceAddress, sourceChain, and deliveryHash are all the same as on the normal `receiveWormholeMessages` endpoint. Let’s delve into the fields that are provided to us in the TokenReceived struct

- ********************************tokenHomeAddress********************************: This will be the same as the ‘token’ field in the call to sendTokenWithPayloadToEvm, as that is the original address of the token.
    
    *******However*******, if the original token sent is a wormhole-wrapped token, this will be the address of the original/native/unwrapped version of the token (on it’s native chain)
    
    This will be given to you in bytes32 format - i.e. left-padded with 12 zeros
    
- **tokenHomeChain**: The chain (in wormhole chain ID format) corresponding to the home address above - this will be the source chain, unless if the original token sent is a wormhole-wrapped asset, in which case it will be the chain of the unwrapped version of the token.
- ************************tokenAddress************************: This is the address of the IERC20 token on this chain (the target chain) that has been transferred to this contract. If tokenHomeChain == this chain, this will be the same as tokenHomeAddress; otherwise, it will be the wormhole-wrapped version of the token sent.
- ************amount************: This is the amount of the token that has been sent to you - the units being the same as the original token. Note that since TokenBridge only sends with 8 decimals of precision, if your token had 18 decimals, this will be the ‘amount’ you sent, rounded down to the nearest multiple of 10^10.
- ******************amountNormalized******************: This is the amount of token divided by (1 if decimals ≤ 8, else 10^(decimals - 8))

Since all we intend to do is send the received token to the recipient, our fields of interest are **************payload************** (which tells us the recipient), ************************************************************receivedTokens[0].tokenAddress************************************************************ (which tells us the address of the token we received), and ************************************************receivedTokens[0].amount************************************************ (which tells us the amount of token we received and that we must send)

So, we can complete the implementation as follows:

```solidity
function receivePayloadAndTokens(
        bytes memory payload,
        TokenReceived[] memory receivedTokens,
        bytes32, // sourceAddress
        uint16,
        bytes32 // deliveryHash
) internal override onlyWormholeRelayer {
    require(receivedTokens.length == 1, "Expected 1 token transfers");

    address recipient = abi.decode(payload, (address));

    IERC20(receivedTokens[0].tokenAddress).transfer(recipient, receivedTokens[0].amount);
}
```

******Note:****** We don’t need to prevent duplicate deliveries using the delivery hash, because TokenBridge already has a form of duplicate prevention when redeeming sent tokens

And voila! We have a [complete working example](https://github.com/wormhole-foundation/hello-token/blob/main/src/HelloToken.sol) of a cross-chain application that uses TokenBridge to send and receive tokens!

Try [cloning and running HelloToken](https://github.com/wormhole-foundation/hello-token/tree/main#readme) to see this example work for yourself! 

## How do these Solidity Helpers Work?

Let’s walk through the details of `sendTokenWithPayloadToEvm` and `receivePayloadAndTokens` to see how they make use of the IWormholeRelayer interface and IWormholeReceiver interface to send and receive tokens.

### Sending a Token

To send a token, we make use of the EVM TokenBridge contract, specifically the ‘transferTokensWithPayload’ method ([implemented here](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol#L191))

**************************************************************Note: We leave the ‘payload’ field here blank because we are using the ‘payload’ field on the IWormholeRelayer interface instead**************************************************************

```solidity
    /*
     *  @notice Send ERC20 token through portal.
     *
     *  @dev This type of transfer is called a "contract-controlled transfer".
     *  There are three differences from a regular token transfer:
     *  1) Additional arbitrary payload can be attached to the message
     *  2) Only the recipient (typically a contract) can redeem the transaction
     *  3) The sender's address (msg.sender) is also included in the transaction payload
     *
     *  With these three additional components, xDapps can implement cross-chain
     *  composable interactions.
     */
    function transferTokensWithPayload(
        address token,
        uint256 amount,
        uint16 recipientChain,
        bytes32 recipient,
        uint32 nonce,
        bytes memory payload
    ) public payable nonReentrant returns (uint64 sequence)
```

TokenBridge implements this function by publishing a wormhole message to the blockchain logs that indicates that ‘amount’ of the ‘token’ was sent (with the intended address being ‘recipient’ on ‘recipientChain’). TokenBridge then returns us the sequence number of this published wormhole message.

The `transferTokens` function in the Wormhole Solidity SDK makes use of this TokenBridge endpoint by 

- approving the TokenBridge to spend ‘amount’ of our ERC20 ‘token’
- calling transferTokensWithPayload with the appropriate inputs
- returning us a ‘VaaKey’ struct containing information about the published wormhole message for the token transfer

```solidity
function transferTokens(
        address token,
        uint256 amount,
        uint16 targetChain,
        address targetAddress
) internal returns (VaaKey memory) {
    IERC20(token).approve(address(tokenBridge), amount);

    uint64 sequence = tokenBridge.transferTokensWithPayload
    {value: wormhole.messageFee()}(
       token, amount, targetChain, toWormholeFormat(targetAddress), 0, bytes("")
    );

    return VaaKey({
        emitterAddress: toWormholeFormat(address(tokenBridge)),
        chainId: wormhole.chainId(),
        sequence: sequence
    });
}
```

Now, it is our task to get the signed VAA corresponding to this published token bridge wormhole message to be delivered to our target chain HelloToken contract. To do this, we make use of the [sendVaasToEvm](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/interfaces/relayer/IWormholeRelayer.sol#L149) endpoint in the IWormholeRelayer interface. 

```solidity
function sendVaasToEvm(
        uint16 targetChain,
        address targetAddress,
        bytes memory payload,
        uint256 receiverValue,
        uint256 gasLimit,
        VaaKey[] memory vaaKeys
) external payable returns (uint64 sequence);
```

This allows us to specify existing wormhole message(s) and get the signed VAA(s) corresponding to those messages delivered to the targetAddress (in the ‘additionalVaas’ field of receiveWormholeMessages). 

```solidity
function sendTokenWithPayloadToEvm(
        uint16 targetChain,
        address targetAddress,
        bytes memory payload,
        uint256 receiverValue,
        uint256 gasLimit,
        address token,
        uint256 amount
) internal returns (uint64) {
    VaaKey[] memory vaaKeys = new VaaKey[](1);
    vaaKeys[0] = transferTokens(token, amount, targetChain, targetAddress);

    (uint256 cost,) = 
		wormholeRelayer.quoteEVMDeliveryPrice(targetChain, receiverValue, gasLimit);

    return wormholeRelayer.sendVaasToEvm{value: cost}(
        targetChain, targetAddress, payload, receiverValue, gasLimit, vaaKeys
    );
}
```

Note: If you wish to send multiple different tokens along with the payload, the `sendTokenWithPayloadToEvm` helper as currently implemented will not help (as it sends only one token). However, you can still simply call `transferToken` twice and request delivery of both of those TokenBridge wormhole messages by providing two VaaKey structs in the 'vaaKeys' array. [See an example of HelloToken with more than one token here](https://github.com/wormhole-foundation/hello-token/blob/main/src/example-extensions/HelloMultipleTokens.sol). 

### Receiving a Token

We know that our ‘sendVaasToEvm’ call will cause `receiveWormholeMessages` on ‘targetAddress’ to be called with

- payload being the encoded ‘recipient’ address (which is what we passed in as ‘payload’ to sendTokenWithPayloadToEvm)
- the additionalVaas field being an array of length 1, with the first element being the signed VAA corresponding to our token bridge transfer

However, crucially we don’t have the transferred tokens yet! There are a few things that we need to do before gaining access to these tokens.

1. We parse the signed VAA, and check that
    - The emitterAddress of the VAA is a valid token bridge - i.e. the message was published by one of the TokenBridge contracts
    - The transfer was sent to this address
    
    ********note: this step isn’t strictly necessary because the call to ‘completeTransferWithPayload’ would fail if these were not true********
    
2. We call tokenBridge.completeTransferWithPayload on the VAA - this completes the transfer of the tokens and causes us to receive the (potentially wormhole-wrapped) transferred token
3. We return a TokenReceived struct containing useful information about the transfer
4. We call receivePayloadAndTokens with the appropriate inputs!

```solidity
function receiveWormholeMessages(
        bytes memory payload,
        bytes[] memory additionalVaas,
        bytes32 sourceAddress,
        uint16 sourceChain,
        bytes32 deliveryHash
    ) external payable {
    TokenReceived[] memory receivedTokens = 
    new TokenReceived[](additionalVaas.length);

    for (uint256 i = 0; i < additionalVaas.length; ++i) {
        IWormhole.VM memory parsed = wormhole.parseVM(additionalVaas[i]);
        require(
            parsed.emitterAddress == tokenBridge.bridgeContracts(parsed.emitterChainId), "Not a Token Bridge VAA"
        );
        ITokenBridge.TransferWithPayload memory transfer = tokenBridge.parseTransferWithPayload(parsed.payload);
        require(
            transfer.to == toWormholeFormat(address(this)) && transfer.toChain == wormhole.chainId(),
            "Token was not sent to this address"
        );

        tokenBridge.completeTransferWithPayload(additionalVaas[i]);

        address thisChainTokenAddress = getTokenAddressOnThisChain(transfer.tokenChain, transfer.tokenAddress);
        uint8 decimals = getDecimals(thisChainTokenAddress);
        uint256 denormalizedAmount = transfer.amount;
        if (decimals > 8) denormalizedAmount *= uint256(10) ** (decimals - 8);

        receivedTokens[i] = TokenReceived({
            tokenHomeAddress: transfer.tokenAddress,
            tokenHomeChain: transfer.tokenChain,
            tokenAddress: thisChainTokenAddress,
            amount: denormalizedAmount,
            amountNormalized: transfer.amount
        });
    }

    // call into overriden method
    receivePayloadAndTokens(payload, receivedTokens, sourceAddress, sourceChain, deliveryHash);
}
```

See the [full implementation of the Wormhole Relayer SDK helpers here](https://github.com/wormhole-foundation/wormhole-solidity-sdk/blob/main/src/WormholeRelayerSDK.sol)

Also, see a [version of HelloToken implemented without any Wormhole Relayer SDK helpers here](https://github.com/wormhole-foundation/hello-token/blob/main/src/example-extensions/HelloTokenWithoutSDK.sol)