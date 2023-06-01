[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / Secp256k1SignatureOffsets

# Class: Secp256k1SignatureOffsets

[solana](../modules/solana.md).Secp256k1SignatureOffsets

Secp256k1SignatureOffsets serializer

See [https://docs.solana.com/developing/runtime-facilities/programs#secp256k1-program](https://docs.solana.com/developing/runtime-facilities/programs#secp256k1-program) for more info.

## Table of contents

### Constructors

- [constructor](solana.Secp256k1SignatureOffsets.md#constructor)

### Methods

- [serialize](solana.Secp256k1SignatureOffsets.md#serialize)

## Constructors

### constructor

• **new Secp256k1SignatureOffsets**()

## Methods

### serialize

▸ `Static` **serialize**(`signatures`, `keys`, `message`): `Buffer`

Serialize multiple signatures, ethereum public keys and message as Secp256k1 instruction data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signatures` | `Buffer`[] | 65-byte signatures (64 + 1 recovery id) |
| `keys` | `Buffer`[] | ethereum public keys |
| `message` | `Buffer` | 32-byte hash |

#### Returns

`Buffer`

serialized Secp256k1 instruction data

#### Defined in

[src/solana/utils/secp256k1.ts:71](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/secp256k1.ts#L71)
