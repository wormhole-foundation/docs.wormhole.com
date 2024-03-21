The Connect SDK enables fast, cheap, native USDC bridging powered by Circle's Cross Chain Transfer Protocol. Using [CCTP](./README.md) to transfer native USDC across chains with the [Connect SDK](../../../reference/sdk-docs/README.md) works very much like a standard Token Transfer with the SDK.

## Installation 

First install the SDK package 

```sh
npm install @wormhole-foundation/sdk
```


## Usage

To use the CCTP bridge, the platform must be imported and registered 

```ts
import { Wormhole } from "@wormhole-foundation/sdk";
import evm from "@wormhole-foundation/sdk/evm";

// ...

const wh = await wormhole("Testnet", [evm]);
```

## Manual Transfer

```ts
  const srcAddress = Wormhole.chainAddress("Ethereum", "0xdeadbeef...") 
  const dstAddress = Wormhole.chainAddress("Avalanche", "0xbeefdead...") 

  const xfer = await wh.circleTransfer(
    1_000_000n, // 
    srcAddress,
    dstAddress
  );
  console.log(xfer);
```

A Manual transfer has 3 steps:

1) Initiate The transfer by calling `initiateTransfer` and passing a [Signer](../../../reference/sdk-docs/README.md#signers) to sign the transactions. 

```ts
  console.log("Starting Transfer");
  const srcTxids = await xfer.initiateTransfer(src.signer);
  console.log(`Started Transfer: `, srcTxids);
```

2) Wait for the Circle Attestation to be available, optionally passing a 

```ts
  // See https://developers.circle.com/stablecoins/docs/required-block-confirmations for reasonable timeout settings
  // based on origin chain
  const timeout = 60 * 1000;

  console.log("Waiting for Attestation");
  const attestIds = await xfer.fetchAttestation(timeout);
  console.log(`Got Attestation: `, attestIds);
```

3) Complete the transfer by calling, you guessed it, `completeTransfer` and again passing a Signer for the destination chain

```ts
  console.log("Completing Transfer");
  const dstTxids = await xfer.completeTransfer(dst.signer);
  console.log(`Completed Transfer: `, dstTxids);
```

## Automatic Transfer

Using the Automatic Relaying feature is even easier and only involves initiating the transfer. The Relayer infrastructure will handle fetching and delivering the Attestation for you.

```ts
  const xfer = await wh.circleTransfer(
    amount,  
    srcAddress, 
    dstAddress,
    true,       // automatic transfer plz
    undefined,  // An arbitrary bytes payload if one is necessary
    0n,         // no native gas dropoff for this demo
  );
  console.log(xfer);

  console.log("Starting Transfer");
  const srcTxids = await xfer.initiateTransfer(src.signer);
  console.log(`Started Transfer: `, srcTxids);

```

## Complete Partial Transfer

In the case that a manual transfer is started but not finished, the transfer object can be reconstituted from only the source chain and transaction hash. 

This is especially useful in cases where a user has terminated their session prior to completing the transfer or even for debugging.

```ts
  const timeout = 60 * 1000

  // Rebuild the transfer from the source txid
  const xfer = await CircleTransfer.from(wh, {
    chain: "Avalanche",
    txid: "0x6b6d5f101a32aa6d2f7bf0bf14d72bfbf76a640e1b2fdbbeeac5b82069cda4dd",
  }, timeout);

  const dstTxIds = await xfer.completeTransfer(signer);
  console.log("Completed transfer: ", dstTxIds);
```

The full source of a working example is available [here](https://github.com/wormhole-foundation/wormhole-sdk-ts/blob/develop/examples/src/cctp.ts)
