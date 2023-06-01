[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / INFTBridge\_\_factory

# Class: INFTBridge\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).INFTBridge__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.INFTBridge__factory.md#constructor)

### Properties

- [abi](ethers_contracts.INFTBridge__factory.md#abi)

### Methods

- [connect](ethers_contracts.INFTBridge__factory.md#connect)
- [createInterface](ethers_contracts.INFTBridge__factory.md#createinterface)

## Constructors

### constructor

• **new INFTBridge__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "oldContract"; `type`: `string` = "address" }[] ; `name`: `string` = "ContractUpgraded"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "token"; `type`: `string` = "address" }[] ; `name`: `string` = "transferNFT"; `outputs`: { `internalType`: `string` = "uint64"; `name`: `string` = "sequence"; `type`: `string` = "uint64" }[] ; `stateMutability`: `string` = "payable"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "tokenAddress"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct INFTBridge.Transfer"; `name`: `string` = "transfer"; `type`: `string` = "tuple" }[] ; `name`: `string` = "encodeTransfer"; `outputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "encoded"; `type`: `string` = "bytes" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "encoded"; `type`: `string` = "bytes" }[] ; `name`: `string` = "parseTransfer"; `outputs`: { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "tokenAddress"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct INFTBridge.Transfer"; `name`: `string` = "transfer"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/INFTBridge__factory.ts:681

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Defined in

src/ethers-contracts/factories/INFTBridge__factory.ts:685

___

### createInterface

▸ `Static` **createInterface**(): `INFTBridgeInterface`

#### Returns

`INFTBridgeInterface`

#### Defined in

src/ethers-contracts/factories/INFTBridge__factory.ts:682
