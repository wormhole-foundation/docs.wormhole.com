Details for working with the NEAR environment chains

## Addresses

Because Wormhole works with many environments, the Wormhole address format is normalized.

For NEAR based chains, because NEAR addresses are arbitrary-length strings, this means a wormhole formatted address is the sha256 hash of the address.

e.g. `contract.portalbridge.near` => `0x148410499d3fcda4dcfd68a1ebfcdddda16ab28326448d4aae4d2f0465cdfcb7`

## Emitter 

The emitter address on NEAR chains is the sha256 digest of the program address string, normalized to wormhole address format.


<!--NEAR_CHAIN_DETAILS-->

# NEAR

## Ecosystem

- [Web site](https://near.org/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)

## Wormhole Details

- **Name**: `near`
- **Chain ID**: `15`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)

### Consistency Levels

The options for [consistencyLevel](../components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Finalized|0|


For more information see [https://nomicon.io/ChainSpec/Consensus](https://nomicon.io/ChainSpec/Consensus)


### Mainnet Contracts

|Type|Contract|
|----|--------|
|Core|`contract.wormhole_crypto.near`|
|Token Bridge|`contract.portalbridge.near`|
|NFT Bridge|**N/A**|

### Testnet Contracts

|Type|Contract|
|----|--------|
|Core|`wormhole.wormhole.testnet`|
|Token Bridge|`token.wormhole.testnet`|
|NFT Bridge|**N/A**|

### Devnet Contract

|Type|Contract|
|----|--------|
|Core|`wormhole.test.near`|
|Token Bridge|`token.test.near`|
|NFT Bridge|**N/A**|
  

<!--NEAR_CHAIN_DETAILS-->
