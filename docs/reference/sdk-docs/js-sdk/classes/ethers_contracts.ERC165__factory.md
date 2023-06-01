[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / ERC165\_\_factory

# Class: ERC165\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).ERC165__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.ERC165__factory.md#constructor)

### Properties

- [abi](ethers_contracts.ERC165__factory.md#abi)

### Methods

- [connect](ethers_contracts.ERC165__factory.md#connect)
- [createInterface](ethers_contracts.ERC165__factory.md#createinterface)

## Constructors

### constructor

• **new ERC165__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/ERC165__factory.ts:32

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ERC165`](ethers_contracts.ERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ERC165`](ethers_contracts.ERC165.md)

#### Defined in

src/ethers-contracts/factories/ERC165__factory.ts:36

___

### createInterface

▸ `Static` **createInterface**(): `ERC165Interface`

#### Returns

`ERC165Interface`

#### Defined in

src/ethers-contracts/factories/ERC165__factory.ts:33
