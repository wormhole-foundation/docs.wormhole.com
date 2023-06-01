[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC721Metadata\_\_factory

# Class: IERC721Metadata\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IERC721Metadata__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC721Metadata__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IERC721Metadata__factory.md#abi)

### Methods

- [connect](ethers_contracts.IERC721Metadata__factory.md#connect)
- [createInterface](ethers_contracts.IERC721Metadata__factory.md#createinterface)

## Constructors

### constructor

• **new IERC721Metadata__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "balance"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IERC721Metadata__factory.ts:346

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Defined in

src/ethers-contracts/factories/IERC721Metadata__factory.ts:350

___

### createInterface

▸ `Static` **createInterface**(): `IERC721MetadataInterface`

#### Returns

`IERC721MetadataInterface`

#### Defined in

src/ethers-contracts/factories/IERC721Metadata__factory.ts:347
