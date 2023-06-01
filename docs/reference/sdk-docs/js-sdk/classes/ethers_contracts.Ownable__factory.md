[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Ownable\_\_factory

# Class: Ownable\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).Ownable__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.Ownable__factory.md#constructor)

### Properties

- [abi](ethers_contracts.Ownable__factory.md#abi)

### Methods

- [connect](ethers_contracts.Ownable__factory.md#connect)
- [createInterface](ethers_contracts.Ownable__factory.md#createinterface)

## Constructors

### constructor

• **new Ownable__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "owner"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "newOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "transferOwnership"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/Ownable__factory.ts:65

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Ownable`](ethers_contracts.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Defined in

src/ethers-contracts/factories/Ownable__factory.ts:69

___

### createInterface

▸ `Static` **createInterface**(): `OwnableInterface`

#### Returns

`OwnableInterface`

#### Defined in

src/ethers-contracts/factories/Ownable__factory.ts:66
