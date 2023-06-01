[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Governance\_\_factory

# Class: Governance\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).Governance__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.Governance__factory.md#constructor)

### Properties

- [abi](ethers_contracts.Governance__factory.md#abi)

### Methods

- [connect](ethers_contracts.Governance__factory.md#connect)
- [createInterface](ethers_contracts.Governance__factory.md#createinterface)

## Constructors

### constructor

• **new Governance__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "previousAdmin"; `type`: `string` = "address" }[] ; `name`: `string` = "AdminChanged"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "encodedVM"; `type`: `string` = "bytes" }[] ; `name`: `string` = "parseAndVerifyVM"; `outputs`: ({ `components`: ({ `components?`: `undefined` ; `internalType`: `string` = "uint8"; `name`: `string` = "version"; `type`: `string` = "uint8" } \| { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "r"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct Structs.Signature[]"; `name`: `string` = "signatures"; `type`: `string` = "tuple[]" })[] ; `internalType`: `string` = "struct Structs.VM"; `name`: `string` = "vm"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "bool"; `name`: `string` = "valid"; `type`: `string` = "bool" })[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: ({ `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "hash"; `type`: `string` = "bytes32" } \| { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "r"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct Structs.Signature[]"; `name`: `string` = "signatures"; `type`: `string` = "tuple[]" })[] ; `name`: `string` = "verifySignatures"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = "valid"; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `components`: ({ `components?`: `undefined` ; `internalType`: `string` = "uint8"; `name`: `string` = "version"; `type`: `string` = "uint8" } \| { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "r"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct Structs.Signature[]"; `name`: `string` = "signatures"; `type`: `string` = "tuple[]" })[] ; `internalType`: `string` = "struct Structs.VM"; `name`: `string` = "vm"; `type`: `string` = "tuple" }[] ; `name`: `string` = "verifyVM"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = "valid"; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/Governance__factory.ts:970

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Governance`](ethers_contracts.Governance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Governance`](ethers_contracts.Governance.md)

#### Defined in

src/ethers-contracts/factories/Governance__factory.ts:974

___

### createInterface

▸ `Static` **createInterface**(): `GovernanceInterface`

#### Returns

`GovernanceInterface`

#### Defined in

src/ethers-contracts/factories/Governance__factory.ts:971
