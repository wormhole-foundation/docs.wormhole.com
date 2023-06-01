[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC721\_\_factory

# Class: IERC721\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IERC721__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC721__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IERC721__factory.md#abi)

### Methods

- [connect](ethers_contracts.IERC721__factory.md#connect)
- [createInterface](ethers_contracts.IERC721__factory.md#createinterface)

## Constructors

### constructor

• **new IERC721__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IERC721__factory.ts:298

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC721`](ethers_contracts.IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC721`](ethers_contracts.IERC721.md)

#### Defined in

src/ethers-contracts/factories/IERC721__factory.ts:302

___

### createInterface

▸ `Static` **createInterface**(): `IERC721Interface`

#### Returns

`IERC721Interface`

#### Defined in

src/ethers-contracts/factories/IERC721__factory.ts:299
