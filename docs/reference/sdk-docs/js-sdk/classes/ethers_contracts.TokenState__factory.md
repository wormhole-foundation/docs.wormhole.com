[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / TokenState\_\_factory

# Class: TokenState\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).TokenState__factory

## Hierarchy

- `ContractFactory`

  ↳ **`TokenState__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.TokenState__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.TokenState__factory.md#bytecode)
- [interface](ethers_contracts.TokenState__factory.md#interface)
- [signer](ethers_contracts.TokenState__factory.md#signer)
- [abi](ethers_contracts.TokenState__factory.md#abi)
- [bytecode](ethers_contracts.TokenState__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.TokenState__factory.md#attach)
- [connect](ethers_contracts.TokenState__factory.md#connect)
- [deploy](ethers_contracts.TokenState__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.TokenState__factory.md#getdeploytransaction)
- [connect](ethers_contracts.TokenState__factory.md#connect-1)
- [createInterface](ethers_contracts.TokenState__factory.md#createinterface)
- [fromSolidity](ethers_contracts.TokenState__factory.md#fromsolidity)
- [getContract](ethers_contracts.TokenState__factory.md#getcontract)
- [getContractAddress](ethers_contracts.TokenState__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.TokenState__factory.md#getinterface)

## Constructors

### constructor

• **new TokenState__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:35

## Properties

### bytecode

• `Readonly` **bytecode**: `string`

#### Inherited from

ContractFactory.bytecode

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:139

___

### interface

• `Readonly` **interface**: `Interface`

#### Inherited from

ContractFactory.interface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:138

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

ContractFactory.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:140

___

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner\_"; `type`: `string` = "address" }[] ; `name`: `string` = "nonces"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:62

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b5060c78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637ecebe0014602d575b600080fd5b605360383660046065565b6001600160a01b03166000908152600e602052604090205490565b60405190815260200160405180910390f35b6000602082840312156075578081fd5b81356001600160a01b0381168114608a578182fd5b939250505056fea264697066735822122078df88d7ea4337649e62641e313b81030eae221fd6d08f4740654cc4483a2d6564736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:61

## Methods

### attach

▸ **attach**(`address`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:55

___

### connect

▸ **connect**(`signer`): [`TokenState__factory`](ethers_contracts.TokenState__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`TokenState__factory`](ethers_contracts.TokenState__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:58

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`TokenState`](ethers_contracts.TokenState.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`TokenState`](ethers_contracts.TokenState.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:45

___

### getDeployTransaction

▸ **getDeployTransaction**(`overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:50

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:66

___

### createInterface

▸ `Static` **createInterface**(): `TokenStateInterface`

#### Returns

`TokenStateInterface`

#### Defined in

src/ethers-contracts/factories/TokenState__factory.ts:63

___

### fromSolidity

▸ `Static` **fromSolidity**(`compilerOutput`, `signer?`): `ContractFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compilerOutput` | `any` |
| `signer?` | `Signer` |

#### Returns

`ContractFactory`

#### Inherited from

ContractFactory.fromSolidity

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:148

___

### getContract

▸ `Static` **getContract**(`address`, `contractInterface`, `signer?`): `Contract`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `contractInterface` | `ContractInterface` |
| `signer?` | `Signer` |

#### Returns

`Contract`

#### Inherited from

ContractFactory.getContract

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:154

___

### getContractAddress

▸ `Static` **getContractAddress**(`tx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.from` | `string` |
| `tx.nonce` | `number` \| `BytesLike` \| `BigNumber` |

#### Returns

`string`

#### Inherited from

ContractFactory.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:150

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

ContractFactory.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:149
