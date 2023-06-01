[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IWormhole\_\_factory

# Class: IWormhole\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IWormhole__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IWormhole__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IWormhole__factory.md#abi)

### Methods

- [connect](ethers_contracts.IWormhole__factory.md#connect)
- [createInterface](ethers_contracts.IWormhole__factory.md#createinterface)

## Constructors

### constructor

• **new IWormhole__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "oldContract"; `type`: `string` = "address" }[] ; `name`: `string` = "ContractUpgraded"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "encodedVM"; `type`: `string` = "bytes" }[] ; `name`: `string` = "parseAndVerifyVM"; `outputs`: ({ `components`: ({ `components?`: `undefined` ; `internalType`: `string` = "uint8"; `name`: `string` = "version"; `type`: `string` = "uint8" } \| { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "r"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IWormhole.Signature[]"; `name`: `string` = "signatures"; `type`: `string` = "tuple[]" })[] ; `internalType`: `string` = "struct IWormhole.VM"; `name`: `string` = "vm"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "bool"; `name`: `string` = "valid"; `type`: `string` = "bool" })[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `components`: ({ `components?`: `undefined` ; `internalType`: `string` = "uint8"; `name`: `string` = "version"; `type`: `string` = "uint8" } \| { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "r"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IWormhole.Signature[]"; `name`: `string` = "signatures"; `type`: `string` = "tuple[]" })[] ; `internalType`: `string` = "struct IWormhole.VM"; `name`: `string` = "vm"; `type`: `string` = "tuple" }[] ; `name`: `string` = "verifyVM"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = "valid"; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: ({ `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "hash"; `type`: `string` = "bytes32" } \| { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "r"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IWormhole.Signature[]"; `name`: `string` = "signatures"; `type`: `string` = "tuple[]" })[] ; `name`: `string` = "verifySignatures"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = "valid"; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IWormhole__factory.ts:998

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IWormhole`](ethers_contracts.IWormhole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Defined in

src/ethers-contracts/factories/IWormhole__factory.ts:1002

___

### createInterface

▸ `Static` **createInterface**(): `IWormholeInterface`

#### Returns

`IWormholeInterface`

#### Defined in

src/ethers-contracts/factories/IWormhole__factory.ts:999
