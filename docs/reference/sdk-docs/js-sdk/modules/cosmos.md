[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / cosmos

# Namespace: cosmos

## Table of contents

### Functions

- [canonicalAddress](cosmos.md#canonicaladdress)
- [humanAddress](cosmos.md#humanaddress)

## Functions

### canonicalAddress

▸ **canonicalAddress**(`humanAddress`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `humanAddress` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[src/cosmos/address.ts:3](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/cosmos/address.ts#L3)

___

### humanAddress

▸ **humanAddress**(`hrp`, `canonicalAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hrp` | `string` |
| `canonicalAddress` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[src/cosmos/address.ts:6](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/cosmos/address.ts#L6)
