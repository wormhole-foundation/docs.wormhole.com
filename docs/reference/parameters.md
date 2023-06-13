
## Finality
<!--  https://www.notion.so/wormholefoundation/Finality-in-Wormhole-78ffa423abd44b7cbe38483a16040d83#06d9bf9521f7429aa25820b527b3686b -->

A transaction, once considered `final`, is guaranteed not to have the state changes it caused be rolled back.

The goal of Wormhole is to provide high confidence that, by default, only finalized messages are observed and attested.  Different chains use different consensus mechanisms, so there are different finality assumptions with each one.  

{% hint style="info%} 
Some advanced integrators may want to get messages _before_ finality, which is where the `consistency_level` field offers chain-specific flexibility.
{% endhint %}

The `consistency_level` can be considered as a numeric `enum` data type where the value is treated differently for different chains. See the table below for the values 

<!--FINALITY_TABLE-->

|ChainName|WormholeChainID|Confirmed|Instant|Safe|Finalized|Otherwise|
|---------|---------------|---------|-------|----|---------|---------|
|solana|1|0|||1||
|ethereum|2||200|201||finalized|
|bsc|4||200|||number of blocks|
|polygon|5||200|||finalized|
|algorand|8||||0||
|karura|11||200|||finalized|
|near|15||||0||
|sui|21||||0||
|aptos|22||||0||
|arbitrum|23||200|||finalized|
|optimism|24||200|||finalized|
|pythnet|26|0|||1||
<!--FINALITY_TABLE-->


## Payload Size

The max size of a payload will depend on the chains involved and the type of message. 

<!-- TODO: details -->

# RPC Nodes

These RPC nodes are maintained by the Guardians to help fetch VAAs and query the Wormhole network.

## Mainnet Guardian RPC

```ts
const MAINNET_GUARDIAN_RPC: string[] =  [
    "https://wormhole-v2-mainnet-api.certus.one",
    "https://wormhole.inotel.ro"
    "https://wormhole-v2-mainnet-api.mcf.rocks",
    "https://wormhole-v2-mainnet-api.chainlayer.network",
    "https://wormhole-v2-mainnet-api.staking.fund",
    "https://wormhole-v2-mainnet.01node.com",
]
```

## Testnet Guardian RPC
```ts
const TESTNET_GUARDIAN_RPC: string[] =  [
    "https://wormhole-v2-testnet-api.certus.one",
]
```

## Testnet Guardian Public Key

```ts
const TESTNET_GUARDIAN_PUBKEY: string = "0x13947Bd48b18E53fdAeEe77F3473391aC727C638"
```