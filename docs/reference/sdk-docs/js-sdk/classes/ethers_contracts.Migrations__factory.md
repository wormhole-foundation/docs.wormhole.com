[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Migrations\_\_factory

# Class: Migrations\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).Migrations__factory

## Hierarchy

- `ContractFactory`

  ↳ **`Migrations__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Migrations__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.Migrations__factory.md#bytecode)
- [interface](ethers_contracts.Migrations__factory.md#interface)
- [signer](ethers_contracts.Migrations__factory.md#signer)
- [abi](ethers_contracts.Migrations__factory.md#abi)
- [bytecode](ethers_contracts.Migrations__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.Migrations__factory.md#attach)
- [connect](ethers_contracts.Migrations__factory.md#connect)
- [deploy](ethers_contracts.Migrations__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.Migrations__factory.md#getdeploytransaction)
- [connect](ethers_contracts.Migrations__factory.md#connect-1)
- [createInterface](ethers_contracts.Migrations__factory.md#createinterface)
- [fromSolidity](ethers_contracts.Migrations__factory.md#fromsolidity)
- [getContract](ethers_contracts.Migrations__factory.md#getcontract)
- [getContractAddress](ethers_contracts.Migrations__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.Migrations__factory.md#getinterface)

## Constructors

### constructor

• **new Migrations__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/Migrations__factory.ts:55

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

▪ `Static` `Readonly` **abi**: ({ `inputs`: `never`[] = []; `name`: `string` = "last\_completed\_migration"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "completed"; `type`: `string` = "uint256" }[] ; `name`: `string` = "setCompleted"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/Migrations__factory.ts:82

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x6080604052600080546001600160a01b0319163317905534801561002257600080fd5b5061016f806100326000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610062578063fdacd5761461008d575b600080fd5b61004f60015481565b6040519081526020015b60405180910390f35b600054610075906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6100a061009b366004610121565b6100a2565b005b6000546001600160a01b0316331461011c5760405162461bcd60e51b815260206004820152603360248201527f546869732066756e6374696f6e206973207265737472696374656420746f207460448201527234329031b7b73a3930b1ba13b99037bbb732b960691b606482015260840160405180910390fd5b600155565b600060208284031215610132578081fd5b503591905056fea264697066735822122098760e95ecee9757125787c83deb04126a6b1815d1813d8a5f58be99167b44c664736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/Migrations__factory.ts:81

## Methods

### attach

▸ **attach**(`address`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/Migrations__factory.ts:75

___

### connect

▸ **connect**(`signer`): [`Migrations__factory`](ethers_contracts.Migrations__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`Migrations__factory`](ethers_contracts.Migrations__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/Migrations__factory.ts:78

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`Migrations`](ethers_contracts.Migrations.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`Migrations`](ethers_contracts.Migrations.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/Migrations__factory.ts:65

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

src/ethers-contracts/factories/Migrations__factory.ts:70

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Defined in

src/ethers-contracts/factories/Migrations__factory.ts:86

___

### createInterface

▸ `Static` **createInterface**(): `MigrationsInterface`

#### Returns

`MigrationsInterface`

#### Defined in

src/ethers-contracts/factories/Migrations__factory.ts:83

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
