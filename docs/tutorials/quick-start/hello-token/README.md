# Building Your First Cross-Chain Token Sending and Receiving Application

This tutorial contains a [solidity contract](https://github.com/wormhole-foundation/hello-token/blob/main/src/HelloToken.sol) that can be deployed onto many EVM chains to form a fully functioning cross-chain application with the ability for users to request, from one contract, that tokens are sent to an address on a different chain.

Here is an example of a [cross-chain borrow lending application](https://github.com/wormhole-foundation/cross-chain-borrow-lend) that uses the topics covered in this tutorial!

## Summary

Included in this [repository](https://github.com/wormhole-foundation/hello-token/) is:

- Example Solidity Code
- Example Forge local testing setup
- Testnet Deploy Scripts
- Example Testnet testing setup

### Environment Setup

- Node 16.14.1 or later, npm 8.5.0 or later: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- forge 0.2.0 or later: [https://book.getfoundry.sh/getting-started/installation](https://book.getfoundry.sh/getting-started/installation)

### Testing Locally

Clone down the repo, cd into it, then build and run unit tests:

```bash
git clone https://github.com/wormhole-foundation/hello-token.git
cd hello-token
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

## Getting Started

Let's write a [HelloToken contract](https://github.com/wormhole-foundation/hello-token/blob/main/src/HelloToken.sol) that lets users send an arbitrary amount of an IERC20 token to an address of their choosing on another chain.

### Valid Tokens

Before getting started, it is important to note that we use Wormhole's **TokenBridge** to transfer tokens between chains!

So, in order to send a token using the method in this example, the token must be attested onto the Token Bridge contract that lives on our desired target blockchain.

In the test above, when you run `npm run deploy`, a mock token contract was both deployed and attested onto the target chain's Token Bridge contract.

If you wish to attest a token yourself for the TokenBridge, you may use the [attestWorkflow](https://github.com/wormhole-foundation/hello-token/blob/main/ts-scripts/deploy-mock-tokens.ts#L52) function.

To check if a token already is attested onto a TokenBridge, call the `wrappedAsset(uint16 tokenChainId, bytes32 tokenAddress)` function on the TokenBridge - this will return, if attested, the address of the wrapped token on this blockchain corresponding to the given token (from the source blockchain), and the 0 address if the input token hasn't been attested yet.

<details>
<summary>How attestWorkflow works</summary>

The 'attestWorkflow' function does the following:

1. On the Source side: Calls the TokenBridge `attestToken` function with the token we're trying to send.
   > This creates a payload containing the token details so that it may be created on the receiving side
2. Off chain: [Fetch the VAA](https://docs.wormhole.com/wormhole/reference/api-docs/swagger#v1-signed_vaa-chain_id-emitter-seq) using the Wormhole Chain ID, Emitter address (TokenBridge address) and sequence number from the `LogMessage` event.
   > This is the VAA that contains the token details with signatures from the Guardians
3. On the Receiving side: Calls the TokenBridge `createWrapped` function with the VAA from the previous step
   > This allows the TokenBridge to create a wrapped version of the token we're sending so that it may mint the tokens to the receiver.

Once this is done, the TokenBridge on the receiving side can successfully mint the token sent.

</details>

### Wormhole Solidity SDK

To ease development, we'll make use of the [Wormhole Solidity SDK](https://github.com/wormhole-foundation/wormhole-solidity-sdk).

Include this SDK in your own cross-chain application by running:

```bash
forge install wormhole-foundation/wormhole-solidity-sdk
```

and import it in your contract:

```solidity
import "wormhole-solidity-sdk/WormholeRelayerSDK.sol";
```

This SDK provides helpers that make cross-chain development with Wormhole easier, and specifically provides us with the TokenSender and TokenReceiver abstract classes with useful functionality for sending and receiving tokens using TokenBridge

### Implement Sending Function

Lets start by writing a function to send some amount of a token to a specific recipient on a target chain.

```solidity
function sendCrossChainDeposit(
        uint16 targetChain, // A wormhole chain id
        address targetHelloToken, // address of HelloToken contract on targetChain
        address recipient,
        uint256 amount,
        address token
) public payable;
```

The body of this function will send the token as well as a payload to the HelloToken contract on the target chain. For our application, the payload will contain the intended recipient of the token, so that the target chain HelloToken contract can send the token to the intended recipient.

> Note: TokenBridge only supports sending IERC20 tokens, and specifically only up to 8 decimals of a token. So, if your IERC20 token has 18 decimals, and you send `amount` of a token, you will receive `amount` rounded down to the nearest multiple of 10^10.

To send the token and payload to the HelloToken contract, we make use of the `sendTokenWithPayloadToEvm` helper from the Wormhole Solidity SDK.

For a successful transfer, several things need to happen:

- The user (or contract) who calls `sendCrossChainDeposit` should **approve** the `HelloToken` contract to use `amount` of the user's tokens.
  See how that is done in the forge test [here](https://github.com/wormhole-foundation/hello-token/blob/main/test/HelloToken.t.sol#L37)
- We must transfer `amount` of the token from the user to the `HelloToken` source contract
  `IERC20(token).transferFrom(msg.sender, address(this), amount);`
- We must encode the recipient address into a payload
  `bytes memory payload = abi.encode(recipient);`
- We must ensure the correct amount of `msg.value` was passed in to send the token and payload.
  - The cost to send a token is provided by the value returned by `wormhole.messageFee()`
    Currently this is 0 but _may_ change in the future, so don't assume it will always be 0.
  - The cost to request a relay depends on the gas amount and receiver value you will need.
    `(deliveryCost,) = wormholeRelayer.quoteEVMDeliveryPrice(targetChain, 0, GAS_LIMIT);`

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

### Implement Receiving Function

Now, we'll implement the `TokenReceiver` abstract class - which is also included in the Wormhole Solidity SDK

```solidity
struct TokenReceived {
    bytes32 tokenHomeAddress;
    uint16 tokenHomeChain;
    address tokenAddress;
    uint256 amount;
    uint256 amountNormalized;
}

function receivePayloadAndTokens(
        bytes memory payload,
        TokenReceived[] memory receivedTokens,
        bytes32 sourceAddress,
        uint16 sourceChain,
        bytes32 deliveryHash
) internal virtual {}
```

After we call `sendTokenWithPayloadToEvm` on the source chain, the message goes through the standard Wormhole message lifecycle. Once a VAA is available, the delivery provider will call `receivePayloadAndTokens` on the target chain and target address specified, with the appropriate inputs.

The arguments `payload`, `sourceAddress`, `sourceChain`, and `deliveryHash` are all the same as on the normal `receiveWormholeMessages` endpoint.

Let's delve into the fields that are provided to us in the `TokenReceived` struct:

- **tokenHomeAddress**
  The same as the `token` field in the call to `sendTokenWithPayloadToEvm`, as that is the original address of the token unless the original token sent is a wormhole-wrapped token. In the case a wrapped token is sent, this will be the address of the original version of the token (on it’s native chain) in [wormhole address format](https://docs.wormhole.com/wormhole/reference/environments/evm#addresses) - i.e. left-padded with 12 zeros
- **tokenHomeChain**
  The chain (in wormhole chain ID format) corresponding to the home address above - this will be the source chain, unless if the original token sent is a wormhole-wrapped asset, in which case it will be the chain of the unwrapped version of the token.

- **tokenAddress**
  This is the address of the IERC20 token on this chain (the target chain) that has been transferred to this contract. If tokenHomeChain == this chain, this will be the same as tokenHomeAddress; otherwise, it will be the wormhole-wrapped version of the token sent.

- **amount**
  This is the amount of the token that has been sent to you - the units being the same as the original token. Note that since TokenBridge only sends with 8 decimals of precision, if your token had 18 decimals, this will be the ‘amount’ you sent, rounded down to the nearest multiple of 10^10.

- **amountNormalized**
  This is the amount of token divided by (1 if decimals ≤ 8, else 10^(decimals - 8))

Since all we intend to do is send the received token to the recipient, our fields of interest are **payload** (containing recipient), **receivedTokens[0].tokenAddress** (token we received), and **receivedTokens[0].amount** (amount of token we received and that we must send)

We can complete the implementation as follows:

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

> Note: In this case, we don't need to prevent duplicate deliveries using the delivery hash, because TokenBridge already provides a form of duplicate prevention when redeeming sent tokens

And voila! We have a [complete working example](https://github.com/wormhole-foundation/hello-token/blob/main/src/HelloToken.sol) of a cross-chain application that uses TokenBridge to send and receive tokens!

Try [cloning and running HelloToken](https://github.com/wormhole-foundation/hello-token/tree/main#readme) to see this example work for yourself!

## How do these Solidity Helpers Work?

Let’s walk through the details of `sendTokenWithPayloadToEvm` and `receivePayloadAndTokens` to see how they make use of the IWormholeRelayer interface and IWormholeReceiver interface to send and receive tokens.

### Sending a Token

To send a token, we make use of the EVM TokenBridge contract, specifically the `transferTokensWithPayload` method ([implementation](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol#L191))

> Note: We leave the `payload` field here blank because we are using the `payload` field on the IWormholeRelayer interface instead

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

TokenBridge implements this function by publishing a wormhole message to the blockchain logs that indicates that `amount` of the `token` was sent (with the intended address being `recipient` on `recipientChain`). TokenBridge then returns the sequence number of this published wormhole message.

The `transferTokens` function in the Wormhole Solidity SDK makes use of this TokenBridge endpoint by

- approving the TokenBridge to spend `amount` of our ERC20 `token`
- calling `transferTokensWithPayload` with the appropriate inputs
- returning a `VaaKey` struct containing information about the published wormhole message for the token transfer

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

Now, it is our task to get the signed VAA corresponding to this published token bridge wormhole message to be delivered to our target chain HelloToken contract. To do this, we make use of the [sendVaasToEvm](https://github.com/wormhole-foundation/wormhole/blob/main/relayer/ethereum/contracts/interfaces/relayer/IWormholeRelayer.sol#L144) endpoint in the IWormholeRelayer interface.

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

This allows us to specify existing wormhole message(s) and get the signed VAA(s) corresponding to those messages delivered to the targetAddress (in the `additionalVaas` field of `receiveWormholeMessages`).

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

> Note: If you wish to send multiple different tokens along with the payload, the `sendTokenWithPayloadToEvm` helper as currently implemented will not help (as it sends only one token).
> However, you can still call `transferToken` twice and request delivery of both of those TokenBridge wormhole messages by providing two `VaaKey` structs in the `vaaKeys` array.
> See an example of HelloToken with more than one token [here](https://github.com/wormhole-foundation/hello-token/blob/main/src/example-extensions/HelloMultipleTokens.sol).

### Receiving a Token

We know that our `sendVaasToEvm` call will cause `receiveWormholeMessages` on `targetAddress` to be called with

- The payload as the encoded `recipient` address
- The `additionalVaas` field being an array of length 1, with the first element being the signed VAA corresponding to our token bridge transfer

Crucially, we don't have the transferred tokens yet! There are a few things that we need to do before gaining access to these tokens.

1. We parse the signed VAA, and check that

   - The emitterAddress of the VAA is a valid token bridge - i.e. the message was published by one of the TokenBridge contracts
   - The transfer was sent to this address

   > note: this step isn’t strictly necessary because the call to `completeTransferWithPayload` would fail if these were not true\*\*

2. We call `tokenBridge.completeTransferWithPayload`, passing the VAA - this completes the transfer of the tokens and causes us to receive the (potentially wormhole-wrapped) transferred token
3. We return a `TokenReceived` struct containing useful information about the transfer
4. We call `receivePayloadAndTokens` with the appropriate inputs

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

See the full implementation of the Wormhole Relayer SDK helpers [here](https://github.com/wormhole-foundation/wormhole-solidity-sdk/blob/main/src/WormholeRelayerSDK.sol)

Also, see a version of HelloToken implemented without any Wormhole Relayer SDK helpers [here](https://github.com/wormhole-foundation/hello-token/blob/main/src/example-extensions/HelloTokenWithoutSDK.sol)

as well as a version of HelloToken where native currency is deposited [here](https://github.com/wormhole-foundation/hello-token/blob/main/src/example-extensions/HelloTokenNative.sol)

{% hint style="info" %}

## Wormhole integration complete?

Let us know so we can list your project in our ecosystem directory and introduce you to our global, multichain community!

[Reach out now!](https://forms.clickup.com/45049775/f/1aytxf-10244/JKYWRUQ70AUI99F32Q)

{% endhint %}

