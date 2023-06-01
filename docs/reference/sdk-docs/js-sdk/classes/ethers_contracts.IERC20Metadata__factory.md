[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC20Metadata\_\_factory

# Class: IERC20Metadata\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IERC20Metadata__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC20Metadata__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IERC20Metadata__factory.md#abi)

### Methods

- [connect](ethers_contracts.IERC20Metadata__factory.md#connect)
- [createInterface](ethers_contracts.IERC20Metadata__factory.md#createinterface)

## Constructors

### constructor

• **new IERC20Metadata__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "allowance"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IERC20Metadata__factory.ts:238

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Defined in

src/ethers-contracts/factories/IERC20Metadata__factory.ts:242

___

### createInterface

▸ `Static` **createInterface**(): `IERC20MetadataInterface`

#### Returns

`IERC20MetadataInterface`

#### Defined in

src/ethers-contracts/factories/IERC20Metadata__factory.ts:239
