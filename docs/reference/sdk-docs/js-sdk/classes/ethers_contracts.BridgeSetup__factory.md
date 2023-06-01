[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / BridgeSetup\_\_factory

# Class: BridgeSetup\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).BridgeSetup__factory

## Hierarchy

- `ContractFactory`

  ↳ **`BridgeSetup__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.BridgeSetup__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.BridgeSetup__factory.md#bytecode)
- [interface](ethers_contracts.BridgeSetup__factory.md#interface)
- [signer](ethers_contracts.BridgeSetup__factory.md#signer)
- [abi](ethers_contracts.BridgeSetup__factory.md#abi)
- [bytecode](ethers_contracts.BridgeSetup__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.BridgeSetup__factory.md#attach)
- [connect](ethers_contracts.BridgeSetup__factory.md#connect)
- [deploy](ethers_contracts.BridgeSetup__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.BridgeSetup__factory.md#getdeploytransaction)
- [connect](ethers_contracts.BridgeSetup__factory.md#connect-1)
- [createInterface](ethers_contracts.BridgeSetup__factory.md#createinterface)
- [fromSolidity](ethers_contracts.BridgeSetup__factory.md#fromsolidity)
- [getContract](ethers_contracts.BridgeSetup__factory.md#getcontract)
- [getContractAddress](ethers_contracts.BridgeSetup__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.BridgeSetup__factory.md#getinterface)

## Constructors

### constructor

• **new BridgeSetup__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/BridgeSetup__factory.ts:114

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

src/ethers-contracts/factories/BridgeSetup__factory.ts:141

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b506103ba806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b5d93f2614610030575b600080fd5b61004361003e3660046102e2565b610045565b005b60028054600080546001600160a01b038b166001600160a01b031990911617905561ffff888116620100000263ffffffff19909216908b1617179055600385905561008f84610109565b600480546001600160a01b0319166001600160a01b0385161790556002805464ff00000000191664010000000060ff8516021790556100cd81610186565b6100d6896101cf565b6100fe896001600160a01b03166000908152600760205260409020805460ff19166001179055565b505050505050505050565b6001600160a01b0381166101645760405162461bcd60e51b815260206004820152601e60248201527f696e76616c696420696d706c656d656e746174696f6e2061646472657373000060448201526064015b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b4681146101ca5760405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b604482015260640161015b565b600c55565b6101d88161020f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6102735760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161015b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b03811681146102cb57600080fd5b919050565b803561ffff811681146102cb57600080fd5b60008060008060008060008060006101208a8c031215610300578485fd5b6103098a6102b4565b985061031760208b016102d0565b975061032560408b016102b4565b965061033360608b016102d0565b955060808a0135945061034860a08b016102b4565b935061035660c08b016102b4565b925060e08a013560ff8116811461036b578283fd5b809250506101008a01359050929598509295985092959856fea264697066735822122046a18ae9f2a08b2131fc312841f70ed46c21ff488158114436bede59708b925c64736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/BridgeSetup__factory.ts:140

## Methods

### attach

▸ **attach**(`address`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/BridgeSetup__factory.ts:134

___

### connect

▸ **connect**(`signer`): [`BridgeSetup__factory`](ethers_contracts.BridgeSetup__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`BridgeSetup__factory`](ethers_contracts.BridgeSetup__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/BridgeSetup__factory.ts:137

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`BridgeSetup`](ethers_contracts.BridgeSetup.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`BridgeSetup`](ethers_contracts.BridgeSetup.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/BridgeSetup__factory.ts:124

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

src/ethers-contracts/factories/BridgeSetup__factory.ts:129

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Defined in

src/ethers-contracts/factories/BridgeSetup__factory.ts:145

___

### createInterface

▸ `Static` **createInterface**(): `BridgeSetupInterface`

#### Returns

`BridgeSetupInterface`

#### Defined in

src/ethers-contracts/factories/BridgeSetup__factory.ts:142

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
