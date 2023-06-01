[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / BridgeGetters\_\_factory

# Class: BridgeGetters\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).BridgeGetters__factory

## Hierarchy

- `ContractFactory`

  ↳ **`BridgeGetters__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.BridgeGetters__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.BridgeGetters__factory.md#bytecode)
- [interface](ethers_contracts.BridgeGetters__factory.md#interface)
- [signer](ethers_contracts.BridgeGetters__factory.md#signer)
- [abi](ethers_contracts.BridgeGetters__factory.md#abi)
- [bytecode](ethers_contracts.BridgeGetters__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.BridgeGetters__factory.md#attach)
- [connect](ethers_contracts.BridgeGetters__factory.md#connect)
- [deploy](ethers_contracts.BridgeGetters__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.BridgeGetters__factory.md#getdeploytransaction)
- [connect](ethers_contracts.BridgeGetters__factory.md#connect-1)
- [createInterface](ethers_contracts.BridgeGetters__factory.md#createinterface)
- [fromSolidity](ethers_contracts.BridgeGetters__factory.md#fromsolidity)
- [getContract](ethers_contracts.BridgeGetters__factory.md#getcontract)
- [getContractAddress](ethers_contracts.BridgeGetters__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.BridgeGetters__factory.md#getinterface)

## Constructors

### constructor

• **new BridgeGetters__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/BridgeGetters__factory.ts:271

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

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "hash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "governanceActionIsConsumed"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/BridgeGetters__factory.ts:298

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b506103e2806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063aa4efa5b11610097578063b96c7e4d11610066578063b96c7e4d1461028a578063d60b347f146102b3578063e039f224146102df578063fbe3c2cd146102e757600080fd5b8063aa4efa5b1461022a578063ad5c46481461024d578063ad66a5f11461025e578063b172b2221461028257600080fd5b806364d42b17116100d357806364d42b17146101cc578063739fc8d1146101de57806384acd1bb146101fe5780639a8a05921461020f57600080fd5b80631a2be4da146101055780631ff1e286146101465780632c3c02a4146101985780632f3a3d5d146101bb575b600080fd5b610131610113366004610323565b6001600160a01b031660009081526009602052604090205460ff1690565b60405190151581526020015b60405180910390f35b610180610154366004610383565b61ffff91909116600090815260086020908152604080832093835292905220546001600160a01b031690565b6040516001600160a01b03909116815260200161013d565b6101316101a6366004610351565b60009081526005602052604090205460ff1690565b6001546001600160a01b0316610180565b600c545b60405190815260200161013d565b600254640100000000900460ff1660405160ff909116815260200161013d565b6000546001600160a01b0316610180565b60025461ffff165b60405161ffff909116815260200161013d565b610131610238366004610351565b60009081526006602052604090205460ff1690565b6004546001600160a01b0316610180565b6101d061026c366004610369565b61ffff166000908152600b602052604090205490565b6003546101d0565b6101d0610298366004610323565b6001600160a01b03166000908152600a602052604090205490565b6101316102c1366004610323565b6001600160a01b031660009081526007602052604090205460ff1690565b6101316102f9565b60025462010000900461ffff16610217565b600046610305600c5490565b1415905090565b803561ffff8116811461031e57600080fd5b919050565b600060208284031215610334578081fd5b81356001600160a01b038116811461034a578182fd5b9392505050565b600060208284031215610362578081fd5b5035919050565b60006020828403121561037a578081fd5b61034a8261030c565b60008060408385031215610395578081fd5b61039e8361030c565b94602093909301359350505056fea2646970667358221220ce5d3801b79b5ad97571fd636faaba6a7934733f29449845248df719f638c43a64736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/BridgeGetters__factory.ts:297

## Methods

### attach

▸ **attach**(`address`): [`BridgeGetters`](ethers_contracts.BridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`BridgeGetters`](ethers_contracts.BridgeGetters.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/BridgeGetters__factory.ts:291

___

### connect

▸ **connect**(`signer`): [`BridgeGetters__factory`](ethers_contracts.BridgeGetters__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`BridgeGetters__factory`](ethers_contracts.BridgeGetters__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/BridgeGetters__factory.ts:294

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`BridgeGetters`](ethers_contracts.BridgeGetters.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`BridgeGetters`](ethers_contracts.BridgeGetters.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/BridgeGetters__factory.ts:281

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

src/ethers-contracts/factories/BridgeGetters__factory.ts:286

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`BridgeGetters`](ethers_contracts.BridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`BridgeGetters`](ethers_contracts.BridgeGetters.md)

#### Defined in

src/ethers-contracts/factories/BridgeGetters__factory.ts:302

___

### createInterface

▸ `Static` **createInterface**(): `BridgeGettersInterface`

#### Returns

`BridgeGettersInterface`

#### Defined in

src/ethers-contracts/factories/BridgeGetters__factory.ts:299

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
