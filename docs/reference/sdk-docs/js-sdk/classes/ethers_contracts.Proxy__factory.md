[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Proxy\_\_factory

# Class: Proxy\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).Proxy__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.Proxy__factory.md#constructor)

### Properties

- [abi](ethers_contracts.Proxy__factory.md#abi)

### Methods

- [connect](ethers_contracts.Proxy__factory.md#connect)
- [createInterface](ethers_contracts.Proxy__factory.md#createinterface)

## Constructors

### constructor

• **new Proxy__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `stateMutability`: `string` = "payable"; `type`: `string` = "fallback" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/Proxy__factory.ts:21

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Proxy`](ethers_contracts.Proxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Proxy`](ethers_contracts.Proxy.md)

#### Defined in

src/ethers-contracts/factories/Proxy__factory.ts:25

___

### createInterface

▸ `Static` **createInterface**(): `ProxyInterface`

#### Returns

`ProxyInterface`

#### Defined in

src/ethers-contracts/factories/Proxy__factory.ts:22
