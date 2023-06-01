[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Getters\_\_factory

# Class: Getters\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).Getters__factory

## Hierarchy

- `ContractFactory`

  ↳ **`Getters__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Getters__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.Getters__factory.md#bytecode)
- [interface](ethers_contracts.Getters__factory.md#interface)
- [signer](ethers_contracts.Getters__factory.md#signer)
- [abi](ethers_contracts.Getters__factory.md#abi)
- [bytecode](ethers_contracts.Getters__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.Getters__factory.md#attach)
- [connect](ethers_contracts.Getters__factory.md#connect)
- [deploy](ethers_contracts.Getters__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.Getters__factory.md#getdeploytransaction)
- [connect](ethers_contracts.Getters__factory.md#connect-1)
- [createInterface](ethers_contracts.Getters__factory.md#createinterface)
- [fromSolidity](ethers_contracts.Getters__factory.md#fromsolidity)
- [getContract](ethers_contracts.Getters__factory.md#getcontract)
- [getContractAddress](ethers_contracts.Getters__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.Getters__factory.md#getinterface)

## Constructors

### constructor

• **new Getters__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/Getters__factory.ts:208

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

▪ `Static` `Readonly` **abi**: ({ `inputs`: { `internalType`: `string` = "uint32"; `name`: `string` = "index"; `type`: `string` = "uint32" }[] ; `name`: `string` = "getGuardianSet"; `outputs`: { `components`: { `internalType`: `string` = "address[]"; `name`: `string` = "keys"; `type`: `string` = "address[]" }[] ; `internalType`: `string` = "struct Structs.GuardianSet"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "hash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "governanceActionIsConsumed"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/Getters__factory.ts:235

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b506103d2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063b172b22211610071578063b172b22214610191578063d60b347f14610199578063e039f224146101c5578063eb8d3f12146101cd578063f951975a146101e3578063fbe3c2cd1461020357600080fd5b80631a90a219146100b95780631cfe7951146100d05780632c3c02a4146100ef5780634cf842b51461012257806364d42b171461016e5780639a8a059214610176575b600080fd5b6007545b6040519081526020015b60405180910390f35b60035463ffffffff165b60405163ffffffff90911681526020016100c7565b6101126100fd3660046102f5565b60009081526005602052604090205460ff1690565b60405190151581526020016100c7565b6101556101303660046102c7565b6001600160a01b031660009081526004602052604090205467ffffffffffffffff1690565b60405167ffffffffffffffff90911681526020016100c7565b6008546100bd565b60005461ffff165b60405161ffff90911681526020016100c7565b6001546100bd565b6101126101a73660046102c7565b6001600160a01b031660009081526006602052604090205460ff1690565b610112610215565b600354640100000000900463ffffffff166100da565b6101f66101f136600461030d565b610228565b6040516100c79190610331565b60005462010000900461ffff1661017e565b60004661022160085490565b1415905090565b60408051808201825260608082526000602080840182905263ffffffff861682526002815290849020845181549283028101840186529485018281529394939092849284918401828280156102a657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610288575b50505091835250506001919091015463ffffffff1660209091015292915050565b6000602082840312156102d8578081fd5b81356001600160a01b03811681146102ee578182fd5b9392505050565b600060208284031215610306578081fd5b5035919050565b60006020828403121561031e578081fd5b813563ffffffff811681146102ee578182fd5b6020808252825160408383015280516060840181905260009291820190839060808601905b8083101561037f5783516001600160a01b03168252928401926001929092019190840190610356565b5063ffffffff84880151166040870152809450505050509291505056fea2646970667358221220c23029e23aaa94bb982ed65434fe4f98b3ffd62130ec3645c860b6966391d77064736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/Getters__factory.ts:234

## Methods

### attach

▸ **attach**(`address`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/Getters__factory.ts:228

___

### connect

▸ **connect**(`signer`): [`Getters__factory`](ethers_contracts.Getters__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`Getters__factory`](ethers_contracts.Getters__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/Getters__factory.ts:231

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`Getters`](ethers_contracts.Getters.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`Getters`](ethers_contracts.Getters.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/Getters__factory.ts:218

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

src/ethers-contracts/factories/Getters__factory.ts:223

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Defined in

src/ethers-contracts/factories/Getters__factory.ts:239

___

### createInterface

▸ `Static` **createInterface**(): `GettersInterface`

#### Returns

`GettersInterface`

#### Defined in

src/ethers-contracts/factories/Getters__factory.ts:236

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
