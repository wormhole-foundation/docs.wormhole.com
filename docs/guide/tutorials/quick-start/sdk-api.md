SDK and API usage
------------------

{% hint style="danger" %}
This tutorial is incomplete
{% endhint %}

# SDK

The [Typescript SDK](../../../reference/sdk-docs/README.md) provides the base functionality any developer might need to start building.

Here we'll walk though the use of the SDK to perform a token transfer between Ethereum and Solana.

The source code for this tutorial is available [here](https://github.com/wormhole/wormhole-examples)

## Installation

Install the SDK in your project with:

```sh
npm -i @certusone/wormhole-sdk
```

## Attesting a token

In order for a token to be transferred between chains, first the wrapped version must exist on the Target Chain. This is referred to as `Attesting` the token.

Select a tab to see how a token might be `Attested` from that Origin Chain. 

{% tabs %}

{% tab title="Solana" %}
```ts
// Submit transaction - results in a Wormhole message being published
const transaction = await attestFromSolana(
  connection,               // @solana/web3.js `Connection` object
  SOL_BRIDGE_ADDRESS,       // available in `utils/consts.ts`
  SOL_TOKEN_BRIDGE_ADDRESS, // available in `utils/consts.ts`
  payerAddress,             // signing account paying for the transaction
  mintAddress               // The token we're attesting 
);
const signed = await wallet.signTransaction(transaction);
const txid = await connection.sendRawTransaction(signed.serialize());
await connection.confirmTransaction(txid);

// Get the sequence number and emitter address required to fetch the signedVAA of our message
const info = await connection.getTransaction(txid);
const sequence = parseSequenceFromLogSolana(info);
const emitterAddress = await getEmitterAddressSolana(SOL_TOKEN_BRIDGE_ADDRESS);

// Fetch the signedVAA from the Wormhole Network (this may require retries while you wait for confirmation)
// The amount of time it takes to sign a VAA is based on the chain's Finality
const { signedVAA } = await getSignedVAA(
  WORMHOLE_RPC_HOST,
  CHAIN_ID_SOLANA,
  emitterAddress,
  sequence
);

// Create the wrapped token on Ethereum and receive the wrapped token address
const { contractAddress } = await createWrappedOnEth(ETH_TOKEN_BRIDGE_ADDRESS, signer, signedVAA);
```
{% endtab %}

{% tab title="Ethereum" %}
```ts
// Submit transaction - results in a Wormhole message being published
const receipt = await attestFromEth(
  ETH_TOKEN_BRIDGE_ADDRESS, // Available in utils/consts.ts
  signer,                   // ethers.Signer object
  tokenAddress              // Token address we're attesting
);

// Get the sequence number and emitter address required to fetch the signedVAA of our message
const sequence = parseSequenceFromLogEth(receipt, ETH_BRIDGE_ADDRESS);
const emitterAddress = getEmitterAddressEth(ETH_TOKEN_BRIDGE_ADDRESS);

// Fetch the signedVAA from the Wormhole Network (this may require retries while you wait for confirmation)
const { signedVAA } = await getSignedVAA(
  WORMHOLE_RPC_HOST,
  CHAIN_ID_ETH,
  emitterAddress,
  sequence
);

// On Solana, we have to post the signedVAA ourselves
// NOTE: this _must_ happen prior to using the VAA 
await postVaaSolana(
  connection,           // @solana/web3.js Connection object
  async (transaction) => {
    transaction.partialSign(signer.keypair);
    return transaction;
  },                    // callback used to sign the transactions
  SOL_BRIDGE_ADDRESS,   // Available in utils/consts.ts
  signer.getAddress(),  // signer address, paying for the transaction
  signedVAA             // Buffer object
);

// Finally, create the wrapped token
const transaction = await createWrappedOnSolana(
  connection,
  SOL_BRIDGE_ADDRESS,
  SOL_TOKEN_BRIDGE_ADDRESS,
  signer.getAddress(),
  signedVAA
);
const signed = await wallet.signTransaction(transaction);
const txid = await connection.sendRawTransaction(signed.serialize());
await connection.confirmTransaction(txid);
```
<!-- TODO: what does the sol tx return? mint address somewhere? -->
{% endtab %}
{% endtabs %}

It may be the case that a token has already been `Attested`, that is, the wrapped version already exists on the Target Chain.

To see if a token already exists on the Target Chain: 

{% tabs %}

{% tab title="Solana" %}

```ts
// If the 
const oa = await getOriginalAssetSol(
    connection,
    tokenBridgeAddress,
    asset
);

const fa = await getForeignAssetSolana(
    this.connection,
    this.tokenBridgeAddress,
    CHAIN_ID_SOLANA,
    asset 
);

```
{% endtab %}

{% tab title="Ethereum" %}

```ts
const oa = await getOriginalAssetEth(
    tokenBridgeAddress,
    provider,
    asset,
    CHAIN_ID_ETH 
);

const fa = await getForeignAssetEth(
    ETH_TOKEN_BRIDGE_ADDRESS,
    provider,
    CHAIN_ID_ETH,
    asset
);

```
{% endtab %}

{% endtabs %}


## Transfer Tokens

Once a wrapped version of the token exists on the Target Chain, we can perform the transfer.

Here, again, the tabs are named by the Origin Chain.

{% tabs %}
{% tab title="Solana" %}

```ts
// Submit transaction - results in a Wormhole message being published
const transaction = await transferFromSolana(
  connection,
  SOL_BRIDGE_ADDRESS,
  SOL_TOKEN_BRIDGE_ADDRESS,
  payerAddress,
  fromAddress,
  mintAddress,
  amount,
  targetAddress,
  CHAIN_ID_ETH,
  sourceAddress,
  sourceChain
);

const signed = await wallet.signTransaction(transaction);
const txid = await connection.sendRawTransaction(signed.serialize());
await connection.confirmTransaction(txid);

// Get the sequence number and emitter address required to fetch the signedVAA of our message
const info = await connection.getTransaction(txid);
const sequence = parseSequenceFromLogSolana(info);
const emitterAddress = await getEmitterAddressSolana(SOL_TOKEN_BRIDGE_ADDRESS);

// Fetch the signedVAA from the Wormhole Network (this may require retries while you wait for confirmation)
const { signedVAA } = await getSignedVAA(
  WORMHOLE_RPC_HOST,
  CHAIN_ID_SOLANA,
  emitterAddress,
  sequence
);
// Redeem on Ethereum
await redeemOnEth(ETH_TOKEN_BRIDGE_ADDRESS, signer, signedVAA);
```
{% endtab %}

{% tab title="Ethereum" %}
```ts
// determine destination address - an associated token account
const solanaMintKey = new PublicKey(
  (await getForeignAssetSolana(
    connection,
    SOLANA_TOKEN_BRIDGE_ADDRESS,
    CHAIN_ID_ETH,
    hexToUint8Array(nativeToHexString(tokenAddress, CHAIN_ID_ETH) || "")
  )) || ""
);
const recipientAddress = await Token.getAssociatedTokenAddress(
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  solanaMintKey,
  walletAddress
);
// Submit transaction - results in a Wormhole message being published
const receipt = await transferFromEth(
  ETH_TOKEN_BRIDGE_ADDRESS,
  signer,
  tokenAddress,
  amount,
  CHAIN_ID_SOLANA,
  recipientAddress
);
// Get the sequence number and emitter address required to fetch the signedVAA of our message
const sequence = parseSequenceFromLogEth(receipt, ETH_BRIDGE_ADDRESS);
const emitterAddress = getEmitterAddressEth(ETH_TOKEN_BRIDGE_ADDRESS);
// Fetch the signedVAA from the Wormhole Network (this may require retries while you wait for confirmation)
const { signedVAA } = await getSignedVAA(
  WORMHOLE_RPC_HOST,
  CHAIN_ID_ETH,
  emitterAddress,
  sequence
);
// On Solana, we have to post the signedVAA ourselves
await postVaaSolana(
  connection,
  wallet,
  SOL_BRIDGE_ADDRESS,
  payerAddress,
  signedVAA
);
// Finally, redeem on Solana
const transaction = await redeemOnSolana(
  connection,
  SOL_BRIDGE_ADDRESS,
  SOL_TOKEN_BRIDGE_ADDRESS,
  payerAddress,
  signedVAA,
  isSolanaNative,
  mintAddress
);
const signed = await wallet.signTransaction(transaction);
const txid = await connection.sendRawTransaction(signed.serialize());
await connection.confirmTransaction(txid);
```
{% endtab %}
{% endtabs %}
