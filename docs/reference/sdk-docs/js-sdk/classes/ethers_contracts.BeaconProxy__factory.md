[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / BeaconProxy\_\_factory

# Class: BeaconProxy\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).BeaconProxy__factory

## Hierarchy

- `ContractFactory`

  ↳ **`BeaconProxy__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.BeaconProxy__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.BeaconProxy__factory.md#bytecode)
- [interface](ethers_contracts.BeaconProxy__factory.md#interface)
- [signer](ethers_contracts.BeaconProxy__factory.md#signer)
- [abi](ethers_contracts.BeaconProxy__factory.md#abi)
- [bytecode](ethers_contracts.BeaconProxy__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.BeaconProxy__factory.md#attach)
- [connect](ethers_contracts.BeaconProxy__factory.md#connect)
- [deploy](ethers_contracts.BeaconProxy__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.BeaconProxy__factory.md#getdeploytransaction)
- [connect](ethers_contracts.BeaconProxy__factory.md#connect-1)
- [createInterface](ethers_contracts.BeaconProxy__factory.md#createinterface)
- [fromSolidity](ethers_contracts.BeaconProxy__factory.md#fromsolidity)
- [getContract](ethers_contracts.BeaconProxy__factory.md#getcontract)
- [getContractAddress](ethers_contracts.BeaconProxy__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.BeaconProxy__factory.md#getinterface)

## Constructors

### constructor

• **new BeaconProxy__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [signer: Signer] \| [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:92

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

▪ `Static` `Readonly` **abi**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "beacon"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "AdminChanged"; `stateMutability`: `string` = "payable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "previousAdmin"; `type`: `string` = "address" }[] ; `name`: `string` = "AdminChanged"; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs?`: `undefined` ; `name?`: `undefined` = "AdminChanged"; `stateMutability`: `string` = "payable"; `type`: `string` = "fallback" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:123

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x60806040526040516109823803806109828339810160408190526100229161047d565b61004d60017fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d51610588565b60008051602061093b8339815191521461007757634e487b7160e01b600052600160045260246000fd5b6100838282600061008a565b50506105ed565b61009383610164565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a26000825111806100d45750805b1561015f5761015d836001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561011557600080fd5b505afa158015610129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014d9190610463565b8361030460201b6100291760201c565b505b505050565b6101778161033060201b6100551760201c565b6101d65760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b610259816001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561021257600080fd5b505afa158015610226573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024a9190610463565b61033060201b6100551760201c565b6102be5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b60648201526084016101cd565b806102e360008051602061093b83398151915260001b61033660201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060610329838360405180606001604052806027815260200161095b60279139610339565b9392505050565b3b151590565b90565b6060833b6103985760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101cd565b600080856001600160a01b0316856040516103b39190610539565b600060405180830381855af49150503d80600081146103ee576040519150601f19603f3d011682016040523d82523d6000602084013e6103f3565b606091505b50909250905061040482828661040e565b9695505050505050565b6060831561041d575081610329565b82511561042d5782518084602001fd5b8160405162461bcd60e51b81526004016101cd9190610555565b80516001600160a01b038116811461045e57600080fd5b919050565b600060208284031215610474578081fd5b61032982610447565b6000806040838503121561048f578081fd5b61049883610447565b60208401519092506001600160401b03808211156104b4578283fd5b818501915085601f8301126104c7578283fd5b8151818111156104d9576104d96105d7565b604051601f8201601f19908116603f01168101908382118183101715610501576105016105d7565b81604052828152886020848701011115610519578586fd5b61052a8360208301602088016105ab565b80955050505050509250929050565b6000825161054b8184602087016105ab565b9190910192915050565b60208152600082518060208401526105748160408501602087016105ab565b601f01601f19169190910160400192915050565b6000828210156105a657634e487b7160e01b81526011600452602481fd5b500390565b60005b838110156105c65781810151838201526020016105ae565b8381111561015d5750506000910152565b634e487b7160e01b600052604160045260246000fd5b61033f806105fc6000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610106565b565b606061004e83836040518060600160405280602781526020016102e36027913961012a565b9392505050565b3b151590565b90565b60006100917fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50546001600160a01b031690565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156100c957600080fd5b505afa1580156100dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610101919061023c565b905090565b3660008037600080366000845af43d6000803e808015610125573d6000f35b3d6000fd5b6060833b61018e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b0316856040516101a99190610263565b600060405180830381855af49150503d80600081146101e4576040519150601f19603f3d011682016040523d82523d6000602084013e6101e9565b606091505b50915091506101f9828286610203565b9695505050505050565b6060831561021257508161004e565b8251156102225782518084602001fd5b8160405162461bcd60e51b8152600401610185919061027f565b60006020828403121561024d578081fd5b81516001600160a01b038116811461004e578182fd5b600082516102758184602087016102b2565b9190910192915050565b602081526000825180602084015261029e8160408501602087016102b2565b601f01601f19169190910160400192915050565b60005b838110156102cd5781810151838201526020016102b5565b838111156102dc576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212207874c9cc490fb37818e4bc4fd6b88eb07b2db65b8baa62c9aa03d317ad11a10964736f6c63430008040033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564"``

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:122

## Methods

### attach

▸ **attach**(`address`): [`BeaconProxy`](ethers_contracts.BeaconProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`BeaconProxy`](ethers_contracts.BeaconProxy.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:116

___

### connect

▸ **connect**(`signer`): [`BeaconProxy__factory`](ethers_contracts.BeaconProxy__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`BeaconProxy__factory`](ethers_contracts.BeaconProxy__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:119

___

### deploy

▸ **deploy**(`beacon`, `data`, `overrides?`): `Promise`<[`BeaconProxy`](ethers_contracts.BeaconProxy.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `beacon` | `string` |
| `data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`BeaconProxy`](ethers_contracts.BeaconProxy.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:102

___

### getDeployTransaction

▸ **getDeployTransaction**(`beacon`, `data`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beacon` | `string` |
| `data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:109

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`BeaconProxy`](ethers_contracts.BeaconProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`BeaconProxy`](ethers_contracts.BeaconProxy.md)

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:127

___

### createInterface

▸ `Static` **createInterface**(): `BeaconProxyInterface`

#### Returns

`BeaconProxyInterface`

#### Defined in

src/ethers-contracts/factories/BeaconProxy__factory.ts:124

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
