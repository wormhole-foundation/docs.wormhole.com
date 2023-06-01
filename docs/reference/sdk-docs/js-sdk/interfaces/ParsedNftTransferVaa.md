[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / ParsedNftTransferVaa

# Interface: ParsedNftTransferVaa

## Hierarchy

- [`ParsedVaa`](ParsedVaa.md)

- [`NftTransfer`](NftTransfer.md)

  ↳ **`ParsedNftTransferVaa`**

## Table of contents

### Properties

- [consistencyLevel](ParsedNftTransferVaa.md#consistencylevel)
- [emitterAddress](ParsedNftTransferVaa.md#emitteraddress)
- [emitterChain](ParsedNftTransferVaa.md#emitterchain)
- [guardianSetIndex](ParsedNftTransferVaa.md#guardiansetindex)
- [guardianSignatures](ParsedNftTransferVaa.md#guardiansignatures)
- [hash](ParsedNftTransferVaa.md#hash)
- [name](ParsedNftTransferVaa.md#name)
- [nonce](ParsedNftTransferVaa.md#nonce)
- [payload](ParsedNftTransferVaa.md#payload)
- [payloadType](ParsedNftTransferVaa.md#payloadtype)
- [sequence](ParsedNftTransferVaa.md#sequence)
- [symbol](ParsedNftTransferVaa.md#symbol)
- [timestamp](ParsedNftTransferVaa.md#timestamp)
- [to](ParsedNftTransferVaa.md#to)
- [toChain](ParsedNftTransferVaa.md#tochain)
- [tokenAddress](ParsedNftTransferVaa.md#tokenaddress)
- [tokenChain](ParsedNftTransferVaa.md#tokenchain)
- [tokenId](ParsedNftTransferVaa.md#tokenid)
- [uri](ParsedNftTransferVaa.md#uri)
- [version](ParsedNftTransferVaa.md#version)

## Properties

### consistencyLevel

• **consistencyLevel**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[consistencyLevel](ParsedVaa.md#consistencylevel)

#### Defined in

[src/vaa/wormhole.ts:19](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L19)

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

[NftTransfer](NftTransfer.md).[name](NftTransfer.md#name)

#### Defined in

[src/vaa/nftBridge.ts:25](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L25)

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

• **payloadType**: [`Transfer`](../enums/NftBridgePayload.md#transfer)

#### Inherited from

[NftTransfer](NftTransfer.md).[payloadType](NftTransfer.md#payloadtype)

#### Defined in

[src/vaa/nftBridge.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L21)

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

[NftTransfer](NftTransfer.md).[symbol](NftTransfer.md#symbol)

#### Defined in

[src/vaa/nftBridge.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L24)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[timestamp](ParsedVaa.md#timestamp)

#### Defined in

[src/vaa/wormhole.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L14)

___

### to

• **to**: `Buffer`

#### Inherited from

[NftTransfer](NftTransfer.md).[to](NftTransfer.md#to)

#### Defined in

[src/vaa/nftBridge.ts:28](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L28)

___

### toChain

• **toChain**: `number`

#### Inherited from

[NftTransfer](NftTransfer.md).[toChain](NftTransfer.md#tochain)

#### Defined in

[src/vaa/nftBridge.ts:29](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L29)

___

### tokenAddress

• **tokenAddress**: `Buffer`

#### Inherited from

[NftTransfer](NftTransfer.md).[tokenAddress](NftTransfer.md#tokenaddress)

#### Defined in

[src/vaa/nftBridge.ts:22](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L22)

___

### tokenChain

• **tokenChain**: `number`

#### Inherited from

[NftTransfer](NftTransfer.md).[tokenChain](NftTransfer.md#tokenchain)

#### Defined in

[src/vaa/nftBridge.ts:23](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L23)

___

### tokenId

• **tokenId**: `bigint`

#### Inherited from

[NftTransfer](NftTransfer.md).[tokenId](NftTransfer.md#tokenid)

#### Defined in

[src/vaa/nftBridge.ts:26](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L26)

___

### uri

• **uri**: `string`

#### Inherited from

[NftTransfer](NftTransfer.md).[uri](NftTransfer.md#uri)

#### Defined in

[src/vaa/nftBridge.ts:27](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L27)

___

### version

• **version**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[version](ParsedVaa.md#version)

#### Defined in

[src/vaa/wormhole.ts:11](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L11)
