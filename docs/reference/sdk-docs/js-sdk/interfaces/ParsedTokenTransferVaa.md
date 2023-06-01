[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / ParsedTokenTransferVaa

# Interface: ParsedTokenTransferVaa

## Hierarchy

- [`ParsedVaa`](ParsedVaa.md)

- [`TokenTransfer`](TokenTransfer.md)

  ↳ **`ParsedTokenTransferVaa`**

## Table of contents

### Properties

- [amount](ParsedTokenTransferVaa.md#amount)
- [consistencyLevel](ParsedTokenTransferVaa.md#consistencylevel)
- [emitterAddress](ParsedTokenTransferVaa.md#emitteraddress)
- [emitterChain](ParsedTokenTransferVaa.md#emitterchain)
- [fee](ParsedTokenTransferVaa.md#fee)
- [fromAddress](ParsedTokenTransferVaa.md#fromaddress)
- [guardianSetIndex](ParsedTokenTransferVaa.md#guardiansetindex)
- [guardianSignatures](ParsedTokenTransferVaa.md#guardiansignatures)
- [hash](ParsedTokenTransferVaa.md#hash)
- [nonce](ParsedTokenTransferVaa.md#nonce)
- [payload](ParsedTokenTransferVaa.md#payload)
- [payloadType](ParsedTokenTransferVaa.md#payloadtype)
- [sequence](ParsedTokenTransferVaa.md#sequence)
- [timestamp](ParsedTokenTransferVaa.md#timestamp)
- [to](ParsedTokenTransferVaa.md#to)
- [toChain](ParsedTokenTransferVaa.md#tochain)
- [tokenAddress](ParsedTokenTransferVaa.md#tokenaddress)
- [tokenChain](ParsedTokenTransferVaa.md#tokenchain)
- [tokenTransferPayload](ParsedTokenTransferVaa.md#tokentransferpayload)
- [version](ParsedTokenTransferVaa.md#version)

## Properties

### amount

• **amount**: `bigint`

#### Inherited from

[TokenTransfer](TokenTransfer.md).[amount](TokenTransfer.md#amount)

#### Defined in

[src/vaa/tokenBridge.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L20)

___

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

### fee

• **fee**: ``null`` \| `bigint`

#### Inherited from

[TokenTransfer](TokenTransfer.md).[fee](TokenTransfer.md#fee)

#### Defined in

[src/vaa/tokenBridge.ts:25](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L25)

___

### fromAddress

• **fromAddress**: ``null`` \| `Buffer`

#### Inherited from

[TokenTransfer](TokenTransfer.md).[fromAddress](TokenTransfer.md#fromaddress)

#### Defined in

[src/vaa/tokenBridge.ts:26](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L26)

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

• **payloadType**: [`Transfer`](../enums/TokenBridgePayload.md#transfer) \| [`TransferWithPayload`](../enums/TokenBridgePayload.md#transferwithpayload)

#### Inherited from

[TokenTransfer](TokenTransfer.md).[payloadType](TokenTransfer.md#payloadtype)

#### Defined in

[src/vaa/tokenBridge.ts:17](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L17)

___

### sequence

• **sequence**: `bigint`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[sequence](ParsedVaa.md#sequence)

#### Defined in

[src/vaa/wormhole.ts:18](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L18)

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

[TokenTransfer](TokenTransfer.md).[to](TokenTransfer.md#to)

#### Defined in

[src/vaa/tokenBridge.ts:23](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L23)

___

### toChain

• **toChain**: `number`

#### Inherited from

[TokenTransfer](TokenTransfer.md).[toChain](TokenTransfer.md#tochain)

#### Defined in

[src/vaa/tokenBridge.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L24)

___

### tokenAddress

• **tokenAddress**: `Buffer`

#### Inherited from

[TokenTransfer](TokenTransfer.md).[tokenAddress](TokenTransfer.md#tokenaddress)

#### Defined in

[src/vaa/tokenBridge.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L21)

___

### tokenChain

• **tokenChain**: `number`

#### Inherited from

[TokenTransfer](TokenTransfer.md).[tokenChain](TokenTransfer.md#tokenchain)

#### Defined in

[src/vaa/tokenBridge.ts:22](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L22)

___

### tokenTransferPayload

• **tokenTransferPayload**: `Buffer`

#### Inherited from

[TokenTransfer](TokenTransfer.md).[tokenTransferPayload](TokenTransfer.md#tokentransferpayload)

#### Defined in

[src/vaa/tokenBridge.ts:27](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L27)

___

### version

• **version**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[version](ParsedVaa.md#version)

#### Defined in

[src/vaa/wormhole.ts:11](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L11)
