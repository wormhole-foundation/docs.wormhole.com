[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC165\_\_factory

# Class: IERC165\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IERC165__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC165__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IERC165__factory.md#abi)

### Methods

- [connect](ethers_contracts.IERC165__factory.md#connect)
- [createInterface](ethers_contracts.IERC165__factory.md#createinterface)

## Constructors

### constructor

• **new IERC165__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IERC165__factory.ts:32

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC165`](ethers_contracts.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC165`](ethers_contracts.IERC165.md)

#### Defined in

src/ethers-contracts/factories/IERC165__factory.ts:36

___

### createInterface

▸ `Static` **createInterface**(): `IERC165Interface`

#### Returns

`IERC165Interface`

#### Defined in

src/ethers-contracts/factories/IERC165__factory.ts:33
