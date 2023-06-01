[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / NFTBridgeGetters\_\_factory

# Class: NFTBridgeGetters\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).NFTBridgeGetters__factory

## Hierarchy

- `ContractFactory`

  ↳ **`NFTBridgeGetters__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.NFTBridgeGetters__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.NFTBridgeGetters__factory.md#bytecode)
- [interface](ethers_contracts.NFTBridgeGetters__factory.md#interface)
- [signer](ethers_contracts.NFTBridgeGetters__factory.md#signer)
- [abi](ethers_contracts.NFTBridgeGetters__factory.md#abi)
- [bytecode](ethers_contracts.NFTBridgeGetters__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.NFTBridgeGetters__factory.md#attach)
- [connect](ethers_contracts.NFTBridgeGetters__factory.md#connect)
- [deploy](ethers_contracts.NFTBridgeGetters__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.NFTBridgeGetters__factory.md#getdeploytransaction)
- [connect](ethers_contracts.NFTBridgeGetters__factory.md#connect-1)
- [createInterface](ethers_contracts.NFTBridgeGetters__factory.md#createinterface)
- [fromSolidity](ethers_contracts.NFTBridgeGetters__factory.md#fromsolidity)
- [getContract](ethers_contracts.NFTBridgeGetters__factory.md#getcontract)
- [getContractAddress](ethers_contracts.NFTBridgeGetters__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.NFTBridgeGetters__factory.md#getinterface)

## Constructors

### constructor

• **new NFTBridgeGetters__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:273

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

▪ `Static` `Readonly` **abi**: ({ `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "hash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "governanceActionIsConsumed"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "tokenId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "splCache"; `outputs`: { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "name"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct NFTBridgeStorage.SPLCache"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:300

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b50610404806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806384acd1bb11610097578063b172b22211610066578063b172b222146102cd578063d60b347f146102d5578063e039f22414610301578063fbe3c2cd1461030957600080fd5b806384acd1bb1461025a5780639a8a05921461026b578063aa4efa5b14610286578063ad66a5f1146102a957600080fd5b80632f3a3d5d116100d35780632f3a3d5d146101b05780633ca64826146101c157806364d42b1714610228578063739fc8d11461023a57600080fd5b80631a2be4da146100fa5780631ff1e2861461013b5780632c3c02a41461018d575b600080fd5b610126610108366004610345565b6001600160a01b031660009081526008602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6101756101493660046103a5565b61ffff91909116600090815260076020908152604080832093835292905220546001600160a01b031690565b6040516001600160a01b039091168152602001610132565b61012661019b366004610373565b60009081526004602052604090205460ff1690565b6001546001600160a01b0316610175565b61020d6101cf366004610373565b6040805180820190915260008082526020820152506000908152600a6020908152604091829020825180840190935280548352600101549082015290565b60408051825181526020928301519281019290925201610132565b600b545b604051908152602001610132565b600254640100000000900460ff1660405160ff9091168152602001610132565b6000546001600160a01b0316610175565b60025461ffff165b60405161ffff9091168152602001610132565b610126610294366004610373565b60009081526005602052604090205460ff1690565b61022c6102b736600461038b565b61ffff1660009081526009602052604090205490565b60035461022c565b6101266102e3366004610345565b6001600160a01b031660009081526006602052604090205460ff1690565b61012661031b565b60025462010000900461ffff16610273565b600046610327600b5490565b1415905090565b803561ffff8116811461034057600080fd5b919050565b600060208284031215610356578081fd5b81356001600160a01b038116811461036c578182fd5b9392505050565b600060208284031215610384578081fd5b5035919050565b60006020828403121561039c578081fd5b61036c8261032e565b600080604083850312156103b7578081fd5b6103c08361032e565b94602093909301359350505056fea26469706673582212209bd1e5ecb5ae5e11b632cf1be89aa2d3bb3021f7970d57c1b832b46fdc6135cb64736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:299

## Methods

### attach

▸ **attach**(`address`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:293

___

### connect

▸ **connect**(`signer`): [`NFTBridgeGetters__factory`](ethers_contracts.NFTBridgeGetters__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`NFTBridgeGetters__factory`](ethers_contracts.NFTBridgeGetters__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:296

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:283

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

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:288

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Defined in

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:304

___

### createInterface

▸ `Static` **createInterface**(): `NFTBridgeGettersInterface`

#### Returns

`NFTBridgeGettersInterface`

#### Defined in

src/ethers-contracts/factories/NFTBridgeGetters__factory.ts:301

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
