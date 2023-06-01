[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / nft\_bridge

# Namespace: nft\_bridge

## Table of contents

### Interfaces

- [WormholeWrappedNFTInfo](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)

### Functions

- [createMetaOnSolana](nft_bridge.md#createmetaonsolana)
- [getForeignAssetAptos](nft_bridge.md#getforeignassetaptos)
- [getForeignAssetEth](nft_bridge.md#getforeignasseteth)
- [getForeignAssetSol](nft_bridge.md#getforeignassetsol)
- [getForeignAssetSolana](nft_bridge.md#getforeignassetsolana)
- [getForeignAssetTerra](nft_bridge.md#getforeignassetterra)
- [getIsTransferCompletedAptos](nft_bridge.md#getistransfercompletedaptos)
- [getIsTransferCompletedEth](nft_bridge.md#getistransfercompletedeth)
- [getIsTransferCompletedSolana](nft_bridge.md#getistransfercompletedsolana)
- [getIsTransferCompletedTerra](nft_bridge.md#getistransfercompletedterra)
- [getIsWrappedAssetAptos](nft_bridge.md#getiswrappedassetaptos)
- [getIsWrappedAssetEth](nft_bridge.md#getiswrappedasseteth)
- [getIsWrappedAssetSol](nft_bridge.md#getiswrappedassetsol)
- [getIsWrappedAssetSolana](nft_bridge.md#getiswrappedassetsolana)
- [getOriginalAssetAptos](nft_bridge.md#getoriginalassetaptos)
- [getOriginalAssetEth](nft_bridge.md#getoriginalasseteth)
- [getOriginalAssetSol](nft_bridge.md#getoriginalassetsol)
- [getOriginalAssetSolana](nft_bridge.md#getoriginalassetsolana)
- [getOriginalAssetTerra](nft_bridge.md#getoriginalassetterra)
- [isNFTVAASolanaNative](nft_bridge.md#isnftvaasolananative)
- [redeemOnAptos](nft_bridge.md#redeemonaptos)
- [redeemOnEth](nft_bridge.md#redeemoneth)
- [redeemOnSolana](nft_bridge.md#redeemonsolana)
- [redeemOnTerra](nft_bridge.md#redeemonterra)
- [transferFromAptos](nft_bridge.md#transferfromaptos)
- [transferFromEth](nft_bridge.md#transferfrometh)
- [transferFromSolana](nft_bridge.md#transferfromsolana)
- [transferFromTerra](nft_bridge.md#transferfromterra)

## Functions

### createMetaOnSolana

▸ **createMetaOnSolana**(`connection`, `bridgeAddress`, `nftBridgeAddress`, `payerAddress`, `signedVaa`, `commitment?`): `Promise`<`Transaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `bridgeAddress` | `PublicKeyInitData` |
| `nftBridgeAddress` | `PublicKeyInitData` |
| `payerAddress` | `PublicKeyInitData` |
| `signedVaa` | [`SignedVaa`](../modules.md#signedvaa) |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<`Transaction`\>

#### Defined in

[src/nft_bridge/redeem.ts:68](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/redeem.ts#L68)

___

### getForeignAssetAptos

▸ **getForeignAssetAptos**(`client`, `nftBridgeAddress`, `originChain`, `originAddress`, `tokenId?`): `Promise`<`TokenTypes.TokenId` \| ``null``\>

Get the token id of a foreign asset on Aptos. Tokens on Aptos are identified
by the tuple (creatorAddress, collectionName, tokenName, propertyVersion),
which this method returns as an object.

This method also supports native assets, in which case it expects the token
hash (which can be obtained from `deriveTokenHashFromTokenId`).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `AptosClient` |  |
| `nftBridgeAddress` | `string` |  |
| `originChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |  |
| `originAddress` | `Uint8Array` | External address of token on origin chain, or token hash if origin chain is Aptos |
| `tokenId?` | `bigint` \| `Uint8Array` \| `Buffer` | Token id of token on origin chain, unnecessary if origin chain is Aptos |

#### Returns

`Promise`<`TokenTypes.TokenId` \| ``null``\>

Unique token identifier on Aptos

#### Defined in

[src/nft_bridge/getForeignAsset.ts:136](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getForeignAsset.ts#L136)

___

### getForeignAssetEth

▸ **getForeignAssetEth**(`nftBridgeAddress`, `provider`, `originChain`, `originAsset`): `Promise`<`string` \| ``null``\>

Returns a foreign asset address on Ethereum for a provided native chain and asset address, AddressZero if it does not exist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftBridgeAddress` | `string` |  |
| `provider` | `Signer` \| `Provider` |  |
| `originChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |  |
| `originAsset` | `Uint8Array` | zero pad to 32 bytes |

#### Returns

`Promise`<`string` \| ``null``\>

#### Defined in

[src/nft_bridge/getForeignAsset.ts:37](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getForeignAsset.ts#L37)

___

### getForeignAssetSol

▸ **getForeignAssetSol**(`nftBridgeAddress`, `originChain`, `originAsset`, `tokenId`): `Promise`<`string`\>

Returns a foreign asset address on Solana for a provided native chain and asset address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftBridgeAddress` | `PublicKeyInitData` |  |
| `originChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |  |
| `originAsset` | `string` \| `Uint8Array` \| `Buffer` | zero pad to 32 bytes |
| `tokenId` | `bigint` \| `Uint8Array` \| `Buffer` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/nft_bridge/getForeignAsset.ts:103](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getForeignAsset.ts#L103)

___

### getForeignAssetSolana

▸ **getForeignAssetSolana**(`nftBridgeAddress`, `originChain`, `originAsset`, `tokenId`): `Promise`<`string`\>

Returns a foreign asset address on Solana for a provided native chain and asset address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftBridgeAddress` | `PublicKeyInitData` |  |
| `originChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |  |
| `originAsset` | `string` \| `Uint8Array` \| `Buffer` | zero pad to 32 bytes |
| `tokenId` | `bigint` \| `Uint8Array` \| `Buffer` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/nft_bridge/getForeignAsset.ts:103](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getForeignAsset.ts#L103)

___

### getForeignAssetTerra

▸ **getForeignAssetTerra**(`nftBridgeAddress`, `client`, `originChain`, `originAsset`): `Promise`<`string` \| ``null``\>

Returns a foreign asset address on Terra for a provided native chain and asset address

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `client` | `LCDClient` |
| `originChain` | [`ChainId`](utils.md#chainid) |
| `originAsset` | `Uint8Array` |

#### Returns

`Promise`<`string` \| ``null``\>

#### Defined in

[src/nft_bridge/getForeignAsset.ts:69](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getForeignAsset.ts#L69)

___

### getIsTransferCompletedAptos

▸ **getIsTransferCompletedAptos**(`client`, `nftBridgeAddress`, `transferVaa`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `AptosClient` |
| `nftBridgeAddress` | `string` |
| `transferVaa` | `Uint8Array` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/nft_bridge/getIsTransferCompleted.ts:79](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getIsTransferCompleted.ts#L79)

___

### getIsTransferCompletedEth

▸ **getIsTransferCompletedEth**(`nftBridgeAddress`, `provider`, `signedVAA`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `provider` | `Signer` \| `Provider` |
| `signedVAA` | `Uint8Array` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/nft_bridge/getIsTransferCompleted.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getIsTransferCompleted.ts#L14)

___

### getIsTransferCompletedSolana

▸ **getIsTransferCompletedSolana**(`nftBridgeAddress`, `signedVAA`, `connection`, `commitment?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `PublicKeyInitData` |
| `signedVAA` | [`SignedVaa`](../modules.md#signedvaa) |
| `connection` | `Connection` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/nft_bridge/getIsTransferCompleted.ts:62](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getIsTransferCompleted.ts#L62)

___

### getIsTransferCompletedTerra

▸ **getIsTransferCompletedTerra**(`nftBridgeAddress`, `signedVAA`, `client`, `gasPriceUrl`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `signedVAA` | `Uint8Array` |
| `client` | `LCDClient` |
| `gasPriceUrl` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/nft_bridge/getIsTransferCompleted.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getIsTransferCompleted.ts#L24)

___

### getIsWrappedAssetAptos

▸ **getIsWrappedAssetAptos**(`client`, `nftBridgeAddress`, `creatorAddress`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `AptosClient` |
| `nftBridgeAddress` | `string` |
| `creatorAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/nft_bridge/getIsWrappedAsset.ts:48](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getIsWrappedAsset.ts#L48)

___

### getIsWrappedAssetEth

▸ **getIsWrappedAssetEth**(`nftBridgeAddress`, `provider`, `assetAddress`): `Promise`<`boolean`\>

Returns whether or not an asset address on Ethereum is a wormhole wrapped asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `provider` | `Signer` \| `Provider` |
| `assetAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/nft_bridge/getIsWrappedAsset.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getIsWrappedAsset.ts#L14)

___

### getIsWrappedAssetSol

▸ **getIsWrappedAssetSol**(`connection`, `nftBridgeAddress`, `mintAddress`, `commitment?`): `Promise`<`boolean`\>

Returns whether or not an asset on Solana is a wormhole wrapped asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `nftBridgeAddress` | `PublicKeyInitData` |
| `mintAddress` | `PublicKeyInitData` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/nft_bridge/getIsWrappedAsset.ts:32](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getIsWrappedAsset.ts#L32)

___

### getIsWrappedAssetSolana

▸ **getIsWrappedAssetSolana**(`connection`, `nftBridgeAddress`, `mintAddress`, `commitment?`): `Promise`<`boolean`\>

Returns whether or not an asset on Solana is a wormhole wrapped asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `nftBridgeAddress` | `PublicKeyInitData` |
| `mintAddress` | `PublicKeyInitData` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/nft_bridge/getIsWrappedAsset.ts:32](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getIsWrappedAsset.ts#L32)

___

### getOriginalAssetAptos

▸ **getOriginalAssetAptos**(`client`, `nftBridgeAddress`, `tokenId`): `Promise`<[`WormholeWrappedNFTInfo`](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)\>

Given a token ID, returns the original asset chain and address. If this is a
native asset, the asset address will be the collection hash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `AptosClient` |  |
| `nftBridgeAddress` | `string` |  |
| `tokenId` | `TokenId` | An object containing creator address, collection name, token name, and property version, which together uniquely identify a token on Aptos. For wrapped assets, property version will be 0. |

#### Returns

`Promise`<[`WormholeWrappedNFTInfo`](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)\>

Object containing origin chain and Wormhole compatible 32-byte asset
address.

#### Defined in

[src/nft_bridge/getOriginalAsset.ts:200](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getOriginalAsset.ts#L200)

___

### getOriginalAssetEth

▸ **getOriginalAssetEth**(`nftBridgeAddress`, `provider`, `wrappedAddress`, `tokenId`, `lookupChain`): `Promise`<[`WormholeWrappedNFTInfo`](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)\>

Returns a origin chain and asset address on {originChain} for a provided Wormhole wrapped address

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `provider` | `Signer` \| `Provider` |
| `wrappedAddress` | `string` |
| `tokenId` | `string` |
| `lookupChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

`Promise`<[`WormholeWrappedNFTInfo`](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)\>

#### Defined in

[src/nft_bridge/getOriginalAsset.ts:46](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getOriginalAsset.ts#L46)

___

### getOriginalAssetSol

▸ **getOriginalAssetSol**(`connection`, `nftBridgeAddress`, `mintAddress`, `commitment?`): `Promise`<[`WormholeWrappedNFTInfo`](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)\>

Returns a origin chain and asset address on {originChain} for a provided Wormhole wrapped address

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `nftBridgeAddress` | `PublicKeyInitData` |
| `mintAddress` | `PublicKeyInitData` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<[`WormholeWrappedNFTInfo`](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)\>

#### Defined in

[src/nft_bridge/getOriginalAsset.ts:91](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getOriginalAsset.ts#L91)

___

### getOriginalAssetSolana

▸ **getOriginalAssetSolana**(`connection`, `nftBridgeAddress`, `mintAddress`, `commitment?`): `Promise`<[`WormholeWrappedNFTInfo`](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)\>

Returns a origin chain and asset address on {originChain} for a provided Wormhole wrapped address

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `nftBridgeAddress` | `PublicKeyInitData` |
| `mintAddress` | `PublicKeyInitData` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<[`WormholeWrappedNFTInfo`](../interfaces/nft_bridge.WormholeWrappedNFTInfo.md)\>

#### Defined in

[src/nft_bridge/getOriginalAsset.ts:91](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getOriginalAsset.ts#L91)

___

### getOriginalAssetTerra

▸ **getOriginalAssetTerra**(`client`, `wrappedAddress`, `lookupChain`): `Promise`<[`WormholeWrappedInfo`](../interfaces/token_bridge.WormholeWrappedInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `LCDClient` |
| `wrappedAddress` | `string` |
| `lookupChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

`Promise`<[`WormholeWrappedInfo`](../interfaces/token_bridge.WormholeWrappedInfo.md)\>

#### Defined in

[src/nft_bridge/getOriginalAsset.ts:159](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/getOriginalAsset.ts#L159)

___

### isNFTVAASolanaNative

▸ **isNFTVAASolanaNative**(`signedVAA`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedVAA` | `Uint8Array` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/nft_bridge/redeem.ts:33](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/redeem.ts#L33)

___

### redeemOnAptos

▸ **redeemOnAptos**(`nftBridgeAddress`, `transferVAA`): `Promise`<`Types.EntryFunctionPayload`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `transferVAA` | `Uint8Array` |

#### Returns

`Promise`<`Types.EntryFunctionPayload`\>

#### Defined in

[src/nft_bridge/redeem.ts:106](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/redeem.ts#L106)

___

### redeemOnEth

▸ **redeemOnEth**(`nftBridgeAddress`, `signer`, `signedVAA`, `overrides?`): `Promise`<`ethers.ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `signer` | `Signer` |
| `signedVAA` | `Uint8Array` |
| `overrides` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ethers.ContractReceipt`\>

#### Defined in

[src/nft_bridge/redeem.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/redeem.ts#L21)

___

### redeemOnSolana

▸ **redeemOnSolana**(`connection`, `bridgeAddress`, `nftBridgeAddress`, `payerAddress`, `signedVaa`, `toAuthorityAddress?`, `commitment?`): `Promise`<`Transaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `bridgeAddress` | `PublicKeyInitData` |
| `nftBridgeAddress` | `PublicKeyInitData` |
| `payerAddress` | `PublicKeyInitData` |
| `signedVaa` | [`SignedVaa`](../modules.md#signedvaa) |
| `toAuthorityAddress?` | `PublicKeyInitData` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<`Transaction`\>

#### Defined in

[src/nft_bridge/redeem.ts:39](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/redeem.ts#L39)

___

### redeemOnTerra

▸ **redeemOnTerra**(`nftBridgeAddress`, `walletAddress`, `signedVAA`): `Promise`<`MsgExecuteContract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `walletAddress` | `string` |
| `signedVAA` | `Uint8Array` |

#### Returns

`Promise`<`MsgExecuteContract`\>

#### Defined in

[src/nft_bridge/redeem.ts:94](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/redeem.ts#L94)

___

### transferFromAptos

▸ **transferFromAptos**(`nftBridgeAddress`, `creatorAddress`, `collectionName`, `tokenName`, `propertyVersion`, `recipientChain`, `recipient`): `Types.EntryFunctionPayload`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `creatorAddress` | `string` |
| `collectionName` | `string` |
| `tokenName` | `string` |
| `propertyVersion` | `number` |
| `recipientChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |
| `recipient` | `Uint8Array` |

#### Returns

`Types.EntryFunctionPayload`

#### Defined in

[src/nft_bridge/transfer.ts:173](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/transfer.ts#L173)

___

### transferFromEth

▸ **transferFromEth**(`nftBridgeAddress`, `signer`, `tokenAddress`, `tokenID`, `recipientChain`, `recipientAddress`, `overrides?`): `Promise`<`ethers.ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftBridgeAddress` | `string` |
| `signer` | `Signer` |
| `tokenAddress` | `string` |
| `tokenID` | `BigNumberish` |
| `recipientChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |
| `recipientAddress` | `Uint8Array` |
| `overrides` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ethers.ContractReceipt`\>

#### Defined in

[src/nft_bridge/transfer.ts:32](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/transfer.ts#L32)

___

### transferFromSolana

▸ **transferFromSolana**(`connection`, `bridgeAddress`, `nftBridgeAddress`, `payerAddress`, `fromAddress`, `mintAddress`, `targetAddress`, `targetChain`, `originAddress?`, `originChain?`, `originTokenId?`, `commitment?`): `Promise`<`Transaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `bridgeAddress` | `PublicKeyInitData` |
| `nftBridgeAddress` | `PublicKeyInitData` |
| `payerAddress` | `PublicKeyInitData` |
| `fromAddress` | `PublicKeyInitData` |
| `mintAddress` | `PublicKeyInitData` |
| `targetAddress` | `Uint8Array` \| `Buffer` |
| `targetChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |
| `originAddress?` | `Uint8Array` \| `Buffer` |
| `originChain?` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |
| `originTokenId?` | `number` \| `bigint` \| `Uint8Array` \| `Buffer` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<`Transaction`\>

#### Defined in

[src/nft_bridge/transfer.ts:58](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/transfer.ts#L58)

___

### transferFromTerra

▸ **transferFromTerra**(`walletAddress`, `nftBridgeAddress`, `tokenAddress`, `tokenID`, `recipientChain`, `recipientAddress`): `Promise`<`MsgExecuteContract`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |
| `nftBridgeAddress` | `string` |
| `tokenAddress` | `string` |
| `tokenID` | `string` |
| `recipientChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |
| `recipientAddress` | `Uint8Array` |

#### Returns

`Promise`<`MsgExecuteContract`[]\>

#### Defined in

[src/nft_bridge/transfer.ts:134](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/nft_bridge/transfer.ts#L134)
