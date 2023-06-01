[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Setup\_\_factory

# Class: Setup\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).Setup__factory

## Hierarchy

- `ContractFactory`

  ↳ **`Setup__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Setup__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.Setup__factory.md#bytecode)
- [interface](ethers_contracts.Setup__factory.md#interface)
- [signer](ethers_contracts.Setup__factory.md#signer)
- [abi](ethers_contracts.Setup__factory.md#abi)
- [bytecode](ethers_contracts.Setup__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.Setup__factory.md#attach)
- [connect](ethers_contracts.Setup__factory.md#connect)
- [deploy](ethers_contracts.Setup__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.Setup__factory.md#getdeploytransaction)
- [connect](ethers_contracts.Setup__factory.md#connect-1)
- [createInterface](ethers_contracts.Setup__factory.md#createinterface)
- [fromSolidity](ethers_contracts.Setup__factory.md#fromsolidity)
- [getContract](ethers_contracts.Setup__factory.md#getcontract)
- [getContractAddress](ethers_contracts.Setup__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.Setup__factory.md#getinterface)

## Constructors

### constructor

• **new Setup__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/Setup__factory.ts:99

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

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "previousAdmin"; `type`: `string` = "address" }[] ; `name`: `string` = "AdminChanged"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "implementation"; `type`: `string` = "address" }[] ; `name`: `string` = "setup"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/Setup__factory.ts:126

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b5061055b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a712ff9914610030575b600080fd5b61004361003e3660046103db565b610045565b005b60008551116100945760405162461bcd60e51b81526020600482015260166024820152751b9bc819dd585c991a585b9cc81cdc1958da599a595960521b60448201526064015b60405180910390fd5b604080518082019091528581526000602082018190526100b590829061011c565b6000805461ffff868116620100000263ffffffff199092169088161717905560018390556100e282610205565b6100eb8761024e565b610113876001600160a01b03166000908152600660205260409020805460ff19166001179055565b50505050505050565b81515160005b818110156101af5783518051600091908390811061015057634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316141561019d5760405162461bcd60e51b815260206004820152600b60248201526a496e76616c6964206b657960a81b604482015260640161008b565b806101a7816104e8565b915050610122565b5063ffffffff821660009081526002602090815260409091208451805186936101dc928492910190610333565b50602091909101516001909101805463ffffffff191663ffffffff909216919091179055505050565b4681146102495760405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b604482015260640161008b565b600855565b6102578161028e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6102f25760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161008b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b828054828255906000526020600020908101928215610388579160200282015b8281111561038857825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610353565b50610394929150610398565b5090565b5b808211156103945760008155600101610399565b80356001600160a01b03811681146103c457600080fd5b919050565b803561ffff811681146103c457600080fd5b60008060008060008060c087890312156103f3578182fd5b6103fc876103ad565b955060208088013567ffffffffffffffff80821115610419578485fd5b818a0191508a601f83011261042c578485fd5b81358181111561043e5761043e61050f565b8060051b604051601f19603f830116810181811085821117156104635761046361050f565b604052828152858101935084860182860187018f1015610481578889fd5b8895505b838610156104aa57610496816103ad565b855260019590950194938601938601610485565b50809a505050505050506104c0604088016103c9565b93506104ce606088016103c9565b92506080870135915060a087013590509295509295509295565b600060001982141561050857634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea264697066735822122024aaf256779b25f0d16f2fc751ece98cb55a15bc9668091c7c5fe5fd27358a3264736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/Setup__factory.ts:125

## Methods

### attach

▸ **attach**(`address`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/Setup__factory.ts:119

___

### connect

▸ **connect**(`signer`): [`Setup__factory`](ethers_contracts.Setup__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`Setup__factory`](ethers_contracts.Setup__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/Setup__factory.ts:122

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`Setup`](ethers_contracts.Setup.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`Setup`](ethers_contracts.Setup.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/Setup__factory.ts:109

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

src/ethers-contracts/factories/Setup__factory.ts:114

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Defined in

src/ethers-contracts/factories/Setup__factory.ts:130

___

### createInterface

▸ `Static` **createInterface**(): `SetupInterface`

#### Returns

`SetupInterface`

#### Defined in

src/ethers-contracts/factories/Setup__factory.ts:127

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
