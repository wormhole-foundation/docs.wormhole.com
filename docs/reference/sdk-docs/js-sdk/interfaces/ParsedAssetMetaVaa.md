[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / ParsedAssetMetaVaa

# Interface: ParsedAssetMetaVaa

## Hierarchy

- [`ParsedVaa`](ParsedVaa.md)

- [`AssetMeta`](AssetMeta.md)

  ↳ **`ParsedAssetMetaVaa`**

## Table of contents

### Properties

- [consistencyLevel](ParsedAssetMetaVaa.md#consistencylevel)
- [decimals](ParsedAssetMetaVaa.md#decimals)
- [emitterAddress](ParsedAssetMetaVaa.md#emitteraddress)
- [emitterChain](ParsedAssetMetaVaa.md#emitterchain)
- [guardianSetIndex](ParsedAssetMetaVaa.md#guardiansetindex)
- [guardianSignatures](ParsedAssetMetaVaa.md#guardiansignatures)
- [hash](ParsedAssetMetaVaa.md#hash)
- [name](ParsedAssetMetaVaa.md#name)
- [nonce](ParsedAssetMetaVaa.md#nonce)
- [payload](ParsedAssetMetaVaa.md#payload)
- [payloadType](ParsedAssetMetaVaa.md#payloadtype)
- [sequence](ParsedAssetMetaVaa.md#sequence)
- [symbol](ParsedAssetMetaVaa.md#symbol)
- [timestamp](ParsedAssetMetaVaa.md#timestamp)
- [tokenAddress](ParsedAssetMetaVaa.md#tokenaddress)
- [tokenChain](ParsedAssetMetaVaa.md#tokenchain)
- [version](ParsedAssetMetaVaa.md#version)

## Properties

### consistencyLevel

• **consistencyLevel**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[consistencyLevel](ParsedVaa.md#consistencylevel)

#### Defined in

[src/vaa/wormhole.ts:19](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L19)

___

### decimals

• **decimals**: `number`

#### Inherited from

[AssetMeta](AssetMeta.md).[decimals](AssetMeta.md#decimals)

#### Defined in

[src/vaa/tokenBridge.ts:76](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L76)

___

### emitterAddress

• **emitterAddress**: `Buffer`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[emitterAddress](ParsedVaa.md#emitteraddress)

#### Defined in

[src/vaa/wormhole.ts:17](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L17)

___

### emitterChain

• **emitterChain**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[emitterChain](ParsedVaa.md#emitterchain)

#### Defined in

[src/vaa/wormhole.ts:16](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L16)

___

### guardianSetIndex

• **guardianSetIndex**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[guardianSetIndex](ParsedVaa.md#guardiansetindex)

#### Defined in

[src/vaa/wormhole.ts:12](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L12)

___

### guardianSignatures

• **guardianSignatures**: [`GuardianSignature`](GuardianSignature.md)[]

#### Inherited from

[ParsedVaa](ParsedVaa.md).[guardianSignatures](ParsedVaa.md#guardiansignatures)

#### Defined in

[src/vaa/wormhole.ts:13](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L13)

___

### hash

• **hash**: `Buffer`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[hash](ParsedVaa.md#hash)

#### Defined in

[src/vaa/wormhole.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L21)

___

### name

• **name**: `string`

#### Inherited from

[AssetMeta](AssetMeta.md).[name](AssetMeta.md#name)

#### Defined in

[src/vaa/tokenBridge.ts:78](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L78)

___

### nonce

• **nonce**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[nonce](ParsedVaa.md#nonce)

#### Defined in

[src/vaa/wormhole.ts:15](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L15)

___

### payload

• **payload**: `Buffer`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[payload](ParsedVaa.md#payload)

#### Defined in

[src/vaa/wormhole.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L20)

___

### payloadType

• **payloadType**: [`AttestMeta`](../enums/TokenBridgePayload.md#attestmeta)

#### Inherited from

[AssetMeta](AssetMeta.md).[payloadType](AssetMeta.md#payloadtype)

#### Defined in

[src/vaa/tokenBridge.ts:73](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L73)

___

### sequence

• **sequence**: `bigint`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[sequence](ParsedVaa.md#sequence)

#### Defined in

[src/vaa/wormhole.ts:18](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L18)

___

### symbol

• **symbol**: `string`

#### Inherited from

[AssetMeta](AssetMeta.md).[symbol](AssetMeta.md#symbol)

#### Defined in

[src/vaa/tokenBridge.ts:77](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L77)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[timestamp](ParsedVaa.md#timestamp)

#### Defined in

[src/vaa/wormhole.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L14)

___

### tokenAddress

• **tokenAddress**: `Buffer`

#### Inherited from

[AssetMeta](AssetMeta.md).[tokenAddress](AssetMeta.md#tokenaddress)

#### Defined in

[src/vaa/tokenBridge.ts:74](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L74)

___

### tokenChain

• **tokenChain**: `number`

#### Inherited from

[AssetMeta](AssetMeta.md).[tokenChain](AssetMeta.md#tokenchain)

#### Defined in

[src/vaa/tokenBridge.ts:75](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L75)

___

### version

• **version**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[version](ParsedVaa.md#version)

#### Defined in

[src/vaa/wormhole.ts:11](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L11)
