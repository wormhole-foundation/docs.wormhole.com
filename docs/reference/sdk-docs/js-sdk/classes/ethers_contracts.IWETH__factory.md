[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IWETH\_\_factory

# Class: IWETH\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IWETH__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IWETH__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IWETH__factory.md#abi)

### Methods

- [connect](ethers_contracts.IWETH__factory.md#connect)
- [createInterface](ethers_contracts.IWETH__factory.md#createinterface)

## Constructors

### constructor

• **new IWETH__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "allowance"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IWETH__factory.ts:216

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IWETH`](ethers_contracts.IWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IWETH`](ethers_contracts.IWETH.md)

#### Defined in

src/ethers-contracts/factories/IWETH__factory.ts:220

___

### createInterface

▸ `Static` **createInterface**(): `IWETHInterface`

#### Returns

`IWETHInterface`

#### Defined in

src/ethers-contracts/factories/IWETH__factory.ts:217
