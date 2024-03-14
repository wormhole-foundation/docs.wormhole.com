# Wormhole Typescript SDK

Many applications using wormhole may require a frontend to interact with the underlying smart contracts. 

Wormhole provides an SDK with utilities for developers that includes:

* Tools for parsing VAAs and other Wormhole structures.
* Methods for interacting with the Token and NFT bridges.
* Methods for submitting messages and parsing Wormhole contract output.

## Installation

The SDK can currently be found in the core wormhole repository [here](https://github.com/wormhole-foundation/wormhole/tree/main/sdk/js) and is available on [npm](https://www.npmjs.com/package/@certusone/wormhole-sdk).

The SDK can be installed using npm:

```sh
npm i @certusone/wormhole-sdk
```

## Configuration

These RPC nodes are maintained by the Guardians to help fetch VAAs and query the Wormhole network.

### Mainnet Guardian RPC

```ts
const MAINNET_GUARDIAN_RPC: string[] =  [
    "https://api.wormholescan.io", // Explorer offers a guardian equivalent endpoint for fetching VAAs
    "https://wormhole-v2-mainnet-api.mcf.rocks",
    "https://wormhole-v2-mainnet-api.chainlayer.network",
    "https://wormhole-v2-mainnet-api.staking.fund",
]
```

### Testnet Guardian RPC
```ts
const TESTNET_GUARDIAN_RPC: string[] =  [
    "https://api.testnet.wormholescan.io", // Explorer offers a guardian equivalent endpoint for fetching VAAs
]
```

### Testnet Guardian Public Key

```ts
const TESTNET_GUARDIAN_PUBKEY: string = "0x13947Bd48b18E53fdAeEe77F3473391aC727C638"
```


## Documentation

The typedoc for the SDK is available [here](https://wormhole-foundation.github.io/js-wormhole-sdk/)
