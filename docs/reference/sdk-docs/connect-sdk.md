
The [Connect SDK](https://wormhole-foundation.github.io/wormhole-connect/) is designed to be a higher level SDK than the base TypeScript SDK. It abstracts chain specific idiosyncracies to provide a simpler API.

## Installation

Install it with your favorite package manager:

```sh
npm -i @wormhole-foundation/wormhole-connect-sdk
```

## Use


After importing the sdk, we can intialize a `WormholeContext` object which provides functions to lookup details and issue wormhole transactions.

```ts
import {WormholeContext, TokenId} from '@wormhole-foundation/wormhole-connect-sdk'

const context = new WormholeContext('MAINNET');

const senderChain = 'ethereum'
const senderAddress =  '0x789...'

const receiverChain = 'moonbeam'
const receiverAddress = '0x789...'

// Since Wormhole deals with multiple chains, 
// a `TokenId` is specified with the contract address and the chain
const tokenId: TokenId = {
    address: '0x123...',
    chain: 'ethereum',
}

// Issue a transaction on the `sending chain` and wait for
// the result
const receipt: SendResult = await context.send(
    tokenId,
    '10', // amount
    senderChain, 
    senderAddress, 
    receiverChain, 
    receiverAddress, 
)

// Grab the details from the transaction logs including emitter address and sequence number
const parsedResult: ParsedMessage[] = await context.parseMessageFromTx(receipt.txid, senderChain)

// Get the VAA corresponding to the token transfer 
const vaa: Uint8Array = await context.getVAA(parsedResult)

// Redeem the VAA 
const redeemReceipt: RedeemResult = await context.redeem(receivingChain, vaa)

// Thats it?
console.log("lol.lmao.")

```