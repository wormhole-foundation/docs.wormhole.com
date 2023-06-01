[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / MockBatchedVAASender\_\_factory

# Class: MockBatchedVAASender\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).MockBatchedVAASender__factory

## Hierarchy

- `ContractFactory`

  ↳ **`MockBatchedVAASender__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.MockBatchedVAASender__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.MockBatchedVAASender__factory.md#bytecode)
- [interface](ethers_contracts.MockBatchedVAASender__factory.md#interface)
- [signer](ethers_contracts.MockBatchedVAASender__factory.md#signer)
- [abi](ethers_contracts.MockBatchedVAASender__factory.md#abi)
- [bytecode](ethers_contracts.MockBatchedVAASender__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.MockBatchedVAASender__factory.md#attach)
- [connect](ethers_contracts.MockBatchedVAASender__factory.md#connect)
- [deploy](ethers_contracts.MockBatchedVAASender__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.MockBatchedVAASender__factory.md#getdeploytransaction)
- [connect](ethers_contracts.MockBatchedVAASender__factory.md#connect-1)
- [createInterface](ethers_contracts.MockBatchedVAASender__factory.md#createinterface)
- [fromSolidity](ethers_contracts.MockBatchedVAASender__factory.md#fromsolidity)
- [getContract](ethers_contracts.MockBatchedVAASender__factory.md#getcontract)
- [getContractAddress](ethers_contracts.MockBatchedVAASender__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.MockBatchedVAASender__factory.md#getinterface)

## Constructors

### constructor

• **new MockBatchedVAASender__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:71

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

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "uint32"; `name`: `string` = "nonce"; `type`: `string` = "uint32" }[] ; `name`: `string` = "sendMultipleMessages"; `outputs`: { `internalType`: `string` = "uint64"; `name`: `string` = "messageSequence0"; `type`: `string` = "uint64" }[] ; `stateMutability`: `string` = "payable"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:98

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b50610476806100206000396000f3fe6080604052600436106100295760003560e01c806311d48db91461002e57806366d382031461006d575b600080fd5b61004161003c3660046102c0565b6100ac565b6040805167ffffffffffffffff9485168152928416602084015292168183015290519081900360600190f35b34801561007957600080fd5b506100aa610088366004610292565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b005b60008060006100c36000546001600160a01b031690565b6001600160a01b031663b19a437e348888886040518563ffffffff1660e01b81526004016100f3939291906103be565b6020604051808303818588803b15801561010c57600080fd5b505af1158015610120573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906101459190610396565b92506101596000546001600160a01b031690565b6001600160a01b031663b19a437e348888886040518563ffffffff1660e01b8152600401610189939291906103be565b6020604051808303818588803b1580156101a257600080fd5b505af11580156101b6573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906101db9190610396565b91506101ef6000546001600160a01b031690565b6001600160a01b031663b19a437e348888886040518563ffffffff1660e01b815260040161021f939291906103be565b6020604051808303818588803b15801561023857600080fd5b505af115801561024c573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906102719190610396565b905093509350939050565b803560ff8116811461028d57600080fd5b919050565b6000602082840312156102a3578081fd5b81356001600160a01b03811681146102b9578182fd5b9392505050565b6000806000606084860312156102d4578182fd5b833563ffffffff811681146102e7578283fd5b9250602084013567ffffffffffffffff80821115610303578384fd5b818601915086601f830112610316578384fd5b8135818111156103285761032861042a565b604051601f8201601f19908116603f011681019083821181831017156103505761035061042a565b81604052828152896020848701011115610368578687fd5b8260208601602083013791820160200195909552935061038d9150506040850161027c565b90509250925092565b6000602082840312156103a7578081fd5b815167ffffffffffffffff811681146102b9578182fd5b63ffffffff84168152600060206060818401528451806060850152825b818110156103f7578681018301518582016080015282016103db565b818111156104085783608083870101525b5060ff9490941660408401525050601f91909101601f19160160800192915050565b634e487b7160e01b600052604160045260246000fdfea264697066735822122003d90d00f4a35ab34ebdff8710684c58dfecbf029e27b3851d23955e9994701964736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:97

## Methods

### attach

▸ **attach**(`address`): [`MockBatchedVAASender`](ethers_contracts.MockBatchedVAASender.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`MockBatchedVAASender`](ethers_contracts.MockBatchedVAASender.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:91

___

### connect

▸ **connect**(`signer`): [`MockBatchedVAASender__factory`](ethers_contracts.MockBatchedVAASender__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`MockBatchedVAASender__factory`](ethers_contracts.MockBatchedVAASender__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:94

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`MockBatchedVAASender`](ethers_contracts.MockBatchedVAASender.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`MockBatchedVAASender`](ethers_contracts.MockBatchedVAASender.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:81

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

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:86

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`MockBatchedVAASender`](ethers_contracts.MockBatchedVAASender.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`MockBatchedVAASender`](ethers_contracts.MockBatchedVAASender.md)

#### Defined in

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:102

___

### createInterface

▸ `Static` **createInterface**(): `MockBatchedVAASenderInterface`

#### Returns

`MockBatchedVAASenderInterface`

#### Defined in

src/ethers-contracts/factories/MockBatchedVAASender__factory.ts:99

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
