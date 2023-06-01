[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / ParsedVaa

# Interface: ParsedVaa

## Hierarchy

- **`ParsedVaa`**

  ↳ [`ParsedGovernanceVaa`](ParsedGovernanceVaa.md)

  ↳ [`ParsedNftTransferVaa`](ParsedNftTransferVaa.md)

  ↳ [`ParsedTokenTransferVaa`](ParsedTokenTransferVaa.md)

  ↳ [`ParsedAssetMetaVaa`](ParsedAssetMetaVaa.md)

## Table of contents

### Properties

- [consistencyLevel](ParsedVaa.md#consistencylevel)
- [emitterAddress](ParsedVaa.md#emitteraddress)
- [emitterChain](ParsedVaa.md#emitterchain)
- [guardianSetIndex](ParsedVaa.md#guardiansetindex)
- [guardianSignatures](ParsedVaa.md#guardiansignatures)
- [hash](ParsedVaa.md#hash)
- [nonce](ParsedVaa.md#nonce)
- [payload](ParsedVaa.md#payload)
- [sequence](ParsedVaa.md#sequence)
- [timestamp](ParsedVaa.md#timestamp)
- [version](ParsedVaa.md#version)

## Properties

### consistencyLevel

• **consistencyLevel**: `number`

#### Defined in

[src/vaa/wormhole.ts:19](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L19)

___

### emitterAddress

• **emitterAddress**: `Buffer`

#### Defined in

[src/vaa/wormhole.ts:17](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L17)

___

### emitterChain

• **emitterChain**: `number`

#### Defined in

[src/vaa/wormhole.ts:16](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L16)

___

### guardianSetIndex

• **guardianSetIndex**: `number`

#### Defined in

[src/vaa/wormhole.ts:12](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L12)

___

### guardianSignatures

• **guardianSignatures**: [`GuardianSignature`](GuardianSignature.md)[]

#### Defined in

[src/vaa/wormhole.ts:13](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L13)

___

### hash

• **hash**: `Buffer`

#### Defined in

[src/vaa/wormhole.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L21)

___

### nonce

• **nonce**: `number`

#### Defined in

[src/vaa/wormhole.ts:15](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L15)

___

### payload

• **payload**: `Buffer`

#### Defined in

[src/vaa/wormhole.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L20)

___

### sequence

• **sequence**: `bigint`

#### Defined in

[src/vaa/wormhole.ts:18](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L18)

___

### timestamp

• **timestamp**: `number`

#### Defined in

[src/vaa/wormhole.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L14)

___

### version

• **version**: `number`

#### Defined in

[src/vaa/wormhole.ts:11](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L11)
