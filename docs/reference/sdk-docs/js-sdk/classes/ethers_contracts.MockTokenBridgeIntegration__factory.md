[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / MockTokenBridgeIntegration\_\_factory

# Class: MockTokenBridgeIntegration\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).MockTokenBridgeIntegration__factory

## Hierarchy

- `ContractFactory`

  ↳ **`MockTokenBridgeIntegration__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.MockTokenBridgeIntegration__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.MockTokenBridgeIntegration__factory.md#bytecode)
- [interface](ethers_contracts.MockTokenBridgeIntegration__factory.md#interface)
- [signer](ethers_contracts.MockTokenBridgeIntegration__factory.md#signer)
- [abi](ethers_contracts.MockTokenBridgeIntegration__factory.md#abi)
- [bytecode](ethers_contracts.MockTokenBridgeIntegration__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.MockTokenBridgeIntegration__factory.md#attach)
- [connect](ethers_contracts.MockTokenBridgeIntegration__factory.md#connect)
- [deploy](ethers_contracts.MockTokenBridgeIntegration__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.MockTokenBridgeIntegration__factory.md#getdeploytransaction)
- [connect](ethers_contracts.MockTokenBridgeIntegration__factory.md#connect-1)
- [createInterface](ethers_contracts.MockTokenBridgeIntegration__factory.md#createinterface)
- [fromSolidity](ethers_contracts.MockTokenBridgeIntegration__factory.md#fromsolidity)
- [getContract](ethers_contracts.MockTokenBridgeIntegration__factory.md#getcontract)
- [getContractAddress](ethers_contracts.MockTokenBridgeIntegration__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.MockTokenBridgeIntegration__factory.md#getinterface)

## Constructors

### constructor

• **new MockTokenBridgeIntegration__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:45

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

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "encodedVm"; `type`: `string` = "bytes" }[] ; `name`: `string` = "completeTransferAndSwap"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:72

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b50610b1c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301c3ac6b1461003b57806366d3820314610050575b600080fd5b61004e61004936600461088b565b610080565b005b61004e61005e366004610833565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600061009a608483516100939190610a5b565b8390610479565b905060006100b6606484516100af9190610a5b565b84906104d7565b905060006100cc6000546001600160a01b031690565b604051630ff8f14360e11b815261ffff84166004820152602481018590526001600160a01b039190911690631ff1e2869060440160206040518083038186803b15801561011857600080fd5b505afa15801561012c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610150919061084f565b6040516370a0823160e01b815230600482015290915081906000906001600160a01b038316906370a082319060240160206040518083038186803b15801561019757600080fd5b505afa1580156101ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cf9190610977565b905060006101e56000546001600160a01b031690565b6001600160a01b031663c3f511c1886040518263ffffffff1660e01b815260040161021091906109d7565b600060405180830381600087803b15801561022a57600080fd5b505af115801561023e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102669190810190610904565b905060006102748282610534565b90508060ff166003146102c55760405162461bcd60e51b8152602060048201526014602482015273696e76616c6964207061796c6f6164207479706560601b60448201526064015b60405180910390fd5b60006102d2836021610479565b905080881461033c5760405162461bcd60e51b815260206004820152603060248201527f41646472657373207061727365642066726f6d2056414120616e64207061796c60448201526f0dec2c840c8de40dcdee840dac2e8c6d60831b60648201526084016102bc565b60006103498460416104d7565b90508061ffff168861ffff16146103bb5760405162461bcd60e51b815260206004820152603060248201527f436861696e4964207061727365642066726f6d2056414120616e64207061796c60448201526f0dec2c840c8de40dcdee840dac2e8c6d60831b60648201526084016102bc565b6040516370a0823160e01b81523060048201526000906001600160a01b038816906370a082319060240160206040518083038186803b1580156103fd57600080fd5b505afa158015610411573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104359190610977565b905060006104438783610a5b565b90506000610452876085610479565b9050806104696001600160a01b038b168285610590565b5050505050505050505050505050565b6000610486826020610a43565b835110156104ce5760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b60448201526064016102bc565b50016020015190565b60006104e4826002610a43565b8351101561052b5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b60448201526064016102bc565b50016002015190565b6000610541826001610a43565b835110156105875760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b60448201526064016102bc565b50016001015190565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526105e29084906105e7565b505050565b600061063c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166106b99092919063ffffffff16565b8051909150156105e2578080602001905181019061065a919061086b565b6105e25760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102bc565b60606106c884846000856106d2565b90505b9392505050565b6060824710156107335760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102bc565b843b6107815760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102bc565b600080866001600160a01b0316858760405161079d91906109bb565b60006040518083038185875af1925050503d80600081146107da576040519150601f19603f3d011682016040523d82523d6000602084013e6107df565b606091505b50915091506107ef8282866107fa565b979650505050505050565b606083156108095750816106cb565b8251156108195782518084602001fd5b8160405162461bcd60e51b81526004016102bc91906109d7565b600060208284031215610844578081fd5b81356106cb81610ace565b600060208284031215610860578081fd5b81516106cb81610ace565b60006020828403121561087c578081fd5b815180151581146106cb578182fd5b60006020828403121561089c578081fd5b813567ffffffffffffffff8111156108b2578182fd5b8201601f810184136108c2578182fd5b80356108d56108d082610a1b565b6109ea565b8181528560208385010111156108e9578384fd5b81602084016020830137908101602001929092525092915050565b600060208284031215610915578081fd5b815167ffffffffffffffff81111561092b578182fd5b8201601f8101841361093b578182fd5b80516109496108d082610a1b565b81815285602083850101111561095d578384fd5b61096e826020830160208601610a72565b95945050505050565b600060208284031215610988578081fd5b5051919050565b600081518084526109a7816020860160208601610a72565b601f01601f19169290920160200192915050565b600082516109cd818460208701610a72565b9190910192915050565b6020815260006106cb602083018461098f565b604051601f8201601f1916810167ffffffffffffffff81118282101715610a1357610a13610ab8565b604052919050565b600067ffffffffffffffff821115610a3557610a35610ab8565b50601f01601f191660200190565b60008219821115610a5657610a56610aa2565b500190565b600082821015610a6d57610a6d610aa2565b500390565b60005b83811015610a8d578181015183820152602001610a75565b83811115610a9c576000848401525b50505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610ae357600080fd5b5056fea26469706673582212208fc81437235a5d5125d8ecf80bdd4ccc053390918c8dd4bd99f1556dbec4eeef64736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:71

## Methods

### attach

▸ **attach**(`address`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:65

___

### connect

▸ **connect**(`signer`): [`MockTokenBridgeIntegration__factory`](ethers_contracts.MockTokenBridgeIntegration__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`MockTokenBridgeIntegration__factory`](ethers_contracts.MockTokenBridgeIntegration__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:68

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:55

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

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:60

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Defined in

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:76

___

### createInterface

▸ `Static` **createInterface**(): `MockTokenBridgeIntegrationInterface`

#### Returns

`MockTokenBridgeIntegrationInterface`

#### Defined in

src/ethers-contracts/factories/MockTokenBridgeIntegration__factory.ts:73

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
