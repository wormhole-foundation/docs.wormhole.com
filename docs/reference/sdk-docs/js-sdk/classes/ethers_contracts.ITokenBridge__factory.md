[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / ITokenBridge\_\_factory

# Class: ITokenBridge\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).ITokenBridge__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.ITokenBridge__factory.md#constructor)

### Properties

- [abi](ethers_contracts.ITokenBridge__factory.md#abi)

### Methods

- [connect](ethers_contracts.ITokenBridge__factory.md#connect)
- [createInterface](ethers_contracts.ITokenBridge__factory.md#createinterface)

## Constructors

### constructor

• **new ITokenBridge__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "oldContract"; `type`: `string` = "address" }[] ; `name`: `string` = "ContractUpgraded"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "encoded"; `type`: `string` = "bytes" }[] ; `name`: `string` = "\_parseTransferCommon"; `outputs`: { `components`: { `internalType`: `string` = "uint8"; `name`: `string` = "payloadID"; `type`: `string` = "uint8" }[] ; `internalType`: `string` = "struct ITokenBridge.Transfer"; `name`: `string` = "transfer"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "tokenAddress"; `type`: `string` = "address" }[] ; `name`: `string` = "attestToken"; `outputs`: { `internalType`: `string` = "uint64"; `name`: `string` = "sequence"; `type`: `string` = "uint64" }[] ; `stateMutability`: `string` = "payable"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `components`: { `internalType`: `string` = "uint8"; `name`: `string` = "payloadID"; `type`: `string` = "uint8" }[] ; `internalType`: `string` = "struct ITokenBridge.AssetMeta"; `name`: `string` = "meta"; `type`: `string` = "tuple" }[] ; `name`: `string` = "encodeAssetMeta"; `outputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "encoded"; `type`: `string` = "bytes" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/ITokenBridge__factory.ts:1167

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ITokenBridge`](ethers_contracts.ITokenBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ITokenBridge`](ethers_contracts.ITokenBridge.md)

#### Defined in

src/ethers-contracts/factories/ITokenBridge__factory.ts:1171

___

### createInterface

▸ `Static` **createInterface**(): `ITokenBridgeInterface`

#### Returns

`ITokenBridgeInterface`

#### Defined in

src/ethers-contracts/factories/ITokenBridge__factory.ts:1168
