Details for working with Aptos based chains.

## Addresses

Because Wormhole works with many environments, the Wormhole address format is normalized.

For Aptos based chains, no normalization is needed for standard addresses since they're already 32 bytes.

e.g. `0x84a5f374d29fc77e370014dce4fd6a55b58ad608de8074b0be5571701724da31` => `0x84a5f374d29fc77e370014dce4fd6a55b58ad608de8074b0be5571701724da31`

However, emitter addresses are recorded as a uint64 (8 bytes), so they're left padded with `0`s to 32 bytes.

e.g. `0x0000000000000001` => `0000000000000000000000000000000000000000000000000000000000000001`

## Emitter 

On Aptos, an emitter capability is taken from the core bridge. The core bridge generates capabilities in a sequence and the capability object ID is its index in the sequence. 

The capability object ID (uint64) is used as the emitter address after normalizing to wormhole address format.


<!--APTOS_CHAIN_DETAILS-->

# Aptos

## Ecosystem

- [Web site](https://aptosfoundation.org/)
- [Aptos Explorer](https://explorer.aptoslabs.com/) | [AptoScan](https://aptoscan.com/)
- [Developer Docs](https://aptos.dev/) | [Faucet](https://www.aptosfaucet.com/)

## Wormhole Details

- **Name**: `aptos`
- **Chain ID**: `22`
- **Contract Source**: [aptos/wormhole/sources/wormhole.move](https://github.com/wormhole-foundation/wormhole/blob/main/aptos/wormhole/sources/wormhole.move)

### Consistency Levels

The options for [consistencyLevel](../../components/core-contracts.md#consistencylevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Finalized|0|

This field is may be ignored since the chain provides instant finality.


For more information see [https://aptos.dev/reference/glossary/#byzantine-fault-tolerance-bft](https://aptos.dev/reference/glossary/#byzantine-fault-tolerance-bft)


### Mainnet Contracts (<code>1</code>)

|Type|Contract|
|----|--------|
|Core|`0x5bc11445584a763c1fa7ed39081f1b920954da14e04b32440cba863d03e19625`|
|Token Bridge|`0x576410486a2da45eee6c949c995670112ddf2fbeedab20350d506328eefc9d4f`|
|NFT Bridge|`0x1bdffae984043833ed7fe223f7af7a3f8902d04129b14f801823e64827da7130`|

### Testnet Contracts (<code>2</code>)

|Type|Contract|
|----|--------|
|Core|`0x5bc11445584a763c1fa7ed39081f1b920954da14e04b32440cba863d03e19625`|
|Token Bridge|`0x576410486a2da45eee6c949c995670112ddf2fbeedab20350d506328eefc9d4f`|
|NFT Bridge|`0x1bdffae984043833ed7fe223f7af7a3f8902d04129b14f801823e64827da7130`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|`0xde0036a9600559e295d5f6802ef6f3f802f510366e0c23912b0655d972166017`|
|Token Bridge|`0x84a5f374d29fc77e370014dce4fd6a55b58ad608de8074b0be5571701724da31`|
|NFT Bridge|`0x46da3d4c569388af61f951bdd1153f4c875f90c2991f6b2d0a38e2161a40852c`|
  

<!--APTOS_CHAIN_DETAILS-->