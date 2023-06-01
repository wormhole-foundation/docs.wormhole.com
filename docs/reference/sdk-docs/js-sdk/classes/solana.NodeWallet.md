[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / NodeWallet

# Class: NodeWallet

[solana](../modules/solana.md).NodeWallet

Wrapper for Keypair resembling Solana web3 browser wallet

## Table of contents

### Constructors

- [constructor](solana.NodeWallet.md#constructor)

### Properties

- [payer](solana.NodeWallet.md#payer)
- [signTransaction](solana.NodeWallet.md#signtransaction)

### Methods

- [key](solana.NodeWallet.md#key)
- [keypair](solana.NodeWallet.md#keypair)
- [pubkey](solana.NodeWallet.md#pubkey)
- [publicKey](solana.NodeWallet.md#publickey)
- [signer](solana.NodeWallet.md#signer)
- [toString](solana.NodeWallet.md#tostring)
- [fromSecretKey](solana.NodeWallet.md#fromsecretkey)

## Constructors

### constructor

• **new NodeWallet**(`payer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payer` | `Keypair` |

#### Defined in

[src/solana/utils/transaction.ts:66](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L66)

## Properties

### payer

• **payer**: `Keypair`

#### Defined in

[src/solana/utils/transaction.ts:63](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L63)

___

### signTransaction

• **signTransaction**: [`SignTransaction`](../modules/solana.md#signtransaction)

#### Defined in

[src/solana/utils/transaction.ts:64](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L64)

## Methods

### key

▸ **key**(): `PublicKey`

#### Returns

`PublicKey`

#### Defined in

[src/solana/utils/transaction.ts:90](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L90)

___

### keypair

▸ **keypair**(): `Keypair`

#### Returns

`Keypair`

#### Defined in

[src/solana/utils/transaction.ts:98](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L98)

___

### pubkey

▸ **pubkey**(): `PublicKey`

#### Returns

`PublicKey`

#### Defined in

[src/solana/utils/transaction.ts:86](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L86)

___

### publicKey

▸ **publicKey**(): `PublicKey`

#### Returns

`PublicKey`

#### Defined in

[src/solana/utils/transaction.ts:82](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L82)

___

### signer

▸ **signer**(): `Signer`

#### Returns

`Signer`

#### Defined in

[src/solana/utils/transaction.ts:102](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L102)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/solana/utils/transaction.ts:94](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L94)

___

### fromSecretKey

▸ `Static` **fromSecretKey**(`secretKey`, `options?`): [`NodeWallet`](solana.NodeWallet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `Uint8Array` |
| `options?` | `Object` |
| `options.skipValidation?` | `boolean` |

#### Returns

[`NodeWallet`](solana.NodeWallet.md)

#### Defined in

[src/solana/utils/transaction.ts:71](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L71)
