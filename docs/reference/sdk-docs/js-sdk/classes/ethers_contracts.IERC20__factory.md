[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC20\_\_factory

# Class: IERC20\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IERC20__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC20__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IERC20__factory.md#abi)

### Methods

- [connect](ethers_contracts.IERC20__factory.md#connect)
- [createInterface](ethers_contracts.IERC20__factory.md#createinterface)

## Constructors

### constructor

• **new IERC20__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "account"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IERC20__factory.ts:196

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC20`](ethers_contracts.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC20`](ethers_contracts.IERC20.md)

#### Defined in

src/ethers-contracts/factories/IERC20__factory.ts:200

___

### createInterface

▸ `Static` **createInterface**(): `IERC20Interface`

#### Returns

`IERC20Interface`

#### Defined in

src/ethers-contracts/factories/IERC20__factory.ts:197
