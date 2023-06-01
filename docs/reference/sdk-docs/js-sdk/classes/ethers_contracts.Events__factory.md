[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Events\_\_factory

# Class: Events\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).Events__factory

## Hierarchy

- `ContractFactory`

  ↳ **`Events__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Events__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.Events__factory.md#bytecode)
- [interface](ethers_contracts.Events__factory.md#interface)
- [signer](ethers_contracts.Events__factory.md#signer)
- [abi](ethers_contracts.Events__factory.md#abi)
- [bytecode](ethers_contracts.Events__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.Events__factory.md#attach)
- [connect](ethers_contracts.Events__factory.md#connect)
- [deploy](ethers_contracts.Events__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.Events__factory.md#getdeploytransaction)
- [connect](ethers_contracts.Events__factory.md#connect-1)
- [createInterface](ethers_contracts.Events__factory.md#createinterface)
- [fromSolidity](ethers_contracts.Events__factory.md#fromsolidity)
- [getContract](ethers_contracts.Events__factory.md#getcontract)
- [getContractAddress](ethers_contracts.Events__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.Events__factory.md#getinterface)

## Constructors

### constructor

• **new Events__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/Events__factory.ts:60

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

▪ `Static` `Readonly` **abi**: { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "uint32"; `name`: `string` = "oldGuardianIndex"; `type`: `string` = "uint32" }[] ; `name`: `string` = "LogGuardianSetChanged"; `type`: `string` = "event" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/Events__factory.ts:87

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212208e99593b787cf1b6018d8c677e203abad47d0aa0d88eb5905250c59ff173a75964736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/Events__factory.ts:86

## Methods

### attach

▸ **attach**(`address`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/Events__factory.ts:80

___

### connect

▸ **connect**(`signer`): [`Events__factory`](ethers_contracts.Events__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`Events__factory`](ethers_contracts.Events__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/Events__factory.ts:83

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`Events`](ethers_contracts.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`Events`](ethers_contracts.Events.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/Events__factory.ts:70

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

src/ethers-contracts/factories/Events__factory.ts:75

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Defined in

src/ethers-contracts/factories/Events__factory.ts:91

___

### createInterface

▸ `Static` **createInterface**(): `EventsInterface`

#### Returns

`EventsInterface`

#### Defined in

src/ethers-contracts/factories/Events__factory.ts:88

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
