
Details for working with Algorand environment chains.

## Developer Tools

The recommended development tool for Algorand is [Algokit](https://developer.algorand.org/docs/get-started/algokit/).


## Addresses

Because Wormhole works with many environments, the Wormhole address format is normalized. 

For Algorand chains, this means a wormhole formatted address is the 58 character address decoded from base32 with it's checksum removed.

e.g. `M7UT7JWIVROIDGMQVJZUBQGBNNIIVOYRPC7JWMGQES4KYJIZHVCRZEGFRQ` => `0x67e93fa6c8ac5c819990aa7340c0c16b508abb1178be9b30d024b8ac25193d45`

## Emitter 

The emitter is the application address, normalized to the wormhole address format. 


<!--ALGORAND_CHAIN_DETAILS-->

# Algorand

## Ecosystem

- [Web site](https://algorand.com)
- [Algoexplorer](https://algoexplorer.io/) | [AlgoScan](https://algoscan.app)
- [Developer Docs](https://developer.algorand.org) | [Faucet](https://bank.testnet.algorand.network/)

## Wormhole Details

- **Name**: `algorand`
- **Chain ID**: `8`
- **Contract Source**: [algorand/wormhole_core.py](https://github.com/wormhole-foundation/wormhole/blob/main/algorand/wormhole_core.py)

### Consistency Levels

The options for [consistencyLevel](../components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Finalized|0|

### Mainnet Contracts

|Type|Contract|
|----|--------|
|Core|`842125965`|
|Token Bridge|`842126029`|
|NFT Bridge|**N/A**|

### Testnet Contracts

|Type|Contract|
|----|--------|
|Core|`86525623`|
|Token Bridge|`86525641`|
|NFT Bridge|**N/A**|

### Devnet Contract

|Type|Contract|
|----|--------|
|Core|`4`|
|Token Bridge|`6`|
|NFT Bridge|**N/A**|
  

<!--ALGORAND_CHAIN_DETAILS-->