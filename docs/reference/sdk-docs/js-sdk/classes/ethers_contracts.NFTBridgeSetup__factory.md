[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / NFTBridgeSetup\_\_factory

# Class: NFTBridgeSetup\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).NFTBridgeSetup__factory

## Hierarchy

- `ContractFactory`

  ↳ **`NFTBridgeSetup__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.NFTBridgeSetup__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.NFTBridgeSetup__factory.md#bytecode)
- [interface](ethers_contracts.NFTBridgeSetup__factory.md#interface)
- [signer](ethers_contracts.NFTBridgeSetup__factory.md#signer)
- [abi](ethers_contracts.NFTBridgeSetup__factory.md#abi)
- [bytecode](ethers_contracts.NFTBridgeSetup__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.NFTBridgeSetup__factory.md#attach)
- [connect](ethers_contracts.NFTBridgeSetup__factory.md#connect)
- [deploy](ethers_contracts.NFTBridgeSetup__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.NFTBridgeSetup__factory.md#getdeploytransaction)
- [connect](ethers_contracts.NFTBridgeSetup__factory.md#connect-1)
- [createInterface](ethers_contracts.NFTBridgeSetup__factory.md#createinterface)
- [fromSolidity](ethers_contracts.NFTBridgeSetup__factory.md#fromsolidity)
- [getContract](ethers_contracts.NFTBridgeSetup__factory.md#getcontract)
- [getContractAddress](ethers_contracts.NFTBridgeSetup__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.NFTBridgeSetup__factory.md#getinterface)

## Constructors

### constructor

• **new NFTBridgeSetup__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:112

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

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:139

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b5061038d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063363ce96b14610030575b600080fd5b61004361003e3660046102c6565b610045565b005b60028054600080546001600160a01b038a166001600160a01b031990911617905561ffff878116620100000263ffffffff19909216908a1617179055600384905561008f836100ed565b6002805464ff00000000191664010000000060ff8516021790556100b28161016a565b6100bb886101b3565b6100e3886001600160a01b03166000908152600660205260409020805460ff19166001179055565b5050505050505050565b6001600160a01b0381166101485760405162461bcd60e51b815260206004820152601e60248201527f696e76616c696420696d706c656d656e746174696f6e2061646472657373000060448201526064015b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b4681146101ae5760405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b604482015260640161013f565b600b55565b6101bc816101f3565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6102575760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161013f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b03811681146102af57600080fd5b919050565b803561ffff811681146102af57600080fd5b600080600080600080600080610100898b0312156102e2578384fd5b6102eb89610298565b97506102f960208a016102b4565b965061030760408a01610298565b955061031560608a016102b4565b94506080890135935061032a60a08a01610298565b925060c089013560ff8116811461033f578283fd5b8092505060e08901359050929598509295989093965056fea26469706673582212208e10b32c9b71c525c578d97c5b4083ff7db10b7c37ec9bda0bcae1d5c83908de64736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:138

## Methods

### attach

▸ **attach**(`address`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:132

___

### connect

▸ **connect**(`signer`): [`NFTBridgeSetup__factory`](ethers_contracts.NFTBridgeSetup__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`NFTBridgeSetup__factory`](ethers_contracts.NFTBridgeSetup__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:135

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:122

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

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:127

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Defined in

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:143

___

### createInterface

▸ `Static` **createInterface**(): `NFTBridgeSetupInterface`

#### Returns

`NFTBridgeSetupInterface`

#### Defined in

src/ethers-contracts/factories/NFTBridgeSetup__factory.ts:140

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
