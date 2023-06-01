[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IBeacon\_\_factory

# Class: IBeacon\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IBeacon__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IBeacon__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IBeacon__factory.md#abi)

### Methods

- [connect](ethers_contracts.IBeacon__factory.md#connect)
- [createInterface](ethers_contracts.IBeacon__factory.md#createinterface)

## Constructors

### constructor

• **new IBeacon__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: `never`[] = []; `name`: `string` = "implementation"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IBeacon__factory.ts:26

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IBeacon`](ethers_contracts.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Defined in

src/ethers-contracts/factories/IBeacon__factory.ts:30

___

### createInterface

▸ `Static` **createInterface**(): `IBeaconInterface`

#### Returns

`IBeaconInterface`

#### Defined in

src/ethers-contracts/factories/IBeacon__factory.ts:27
