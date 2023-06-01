[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / GovernanceStructs\_\_factory

# Class: GovernanceStructs\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).GovernanceStructs__factory

## Hierarchy

- `ContractFactory`

  ↳ **`GovernanceStructs__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.GovernanceStructs__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.GovernanceStructs__factory.md#bytecode)
- [interface](ethers_contracts.GovernanceStructs__factory.md#interface)
- [signer](ethers_contracts.GovernanceStructs__factory.md#signer)
- [abi](ethers_contracts.GovernanceStructs__factory.md#abi)
- [bytecode](ethers_contracts.GovernanceStructs__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.GovernanceStructs__factory.md#attach)
- [connect](ethers_contracts.GovernanceStructs__factory.md#connect)
- [deploy](ethers_contracts.GovernanceStructs__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.GovernanceStructs__factory.md#getdeploytransaction)
- [connect](ethers_contracts.GovernanceStructs__factory.md#connect-1)
- [createInterface](ethers_contracts.GovernanceStructs__factory.md#createinterface)
- [fromSolidity](ethers_contracts.GovernanceStructs__factory.md#fromsolidity)
- [getContract](ethers_contracts.GovernanceStructs__factory.md#getcontract)
- [getContractAddress](ethers_contracts.GovernanceStructs__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.GovernanceStructs__factory.md#getinterface)

## Constructors

### constructor

• **new GovernanceStructs__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/GovernanceStructs__factory.ts:246

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

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "encodedUpgrade"; `type`: `string` = "bytes" }[] ; `name`: `string` = "parseGuardianSetUpgrade"; `outputs`: { `components`: ({ `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "module"; `type`: `string` = "bytes32" } \| { `components`: { `internalType`: `string` = "address[]"; `name`: `string` = "keys"; `type`: `string` = "address[]" }[] ; `internalType`: `string` = "struct Structs.GuardianSet"; `name`: `string` = "newGuardianSet"; `type`: `string` = "tuple" })[] ; `internalType`: `string` = "struct GovernanceStructs.GuardianSetUpgrade"; `name`: `string` = "gsu"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/GovernanceStructs__factory.ts:273

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x608060405234801561001057600080fd5b50610d76806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630319e59c1461005c57806304ca84cf146100c15780634fdc60fa146100e1578063515f324714610137578063cb4cfea814610184575b600080fd5b61006f61006a366004610b84565b6101d1565b6040516100b89190600060a0820190508251825260ff602084015116602083015261ffff6040840151166040830152606083015160608301526080830151608083015292915050565b60405180910390f35b6100d46100cf366004610b84565b61032c565b6040516100b89190610c2e565b6100f46100ef366004610b84565b610560565b6040516100b891908151815260208083015160ff169082015260408083015161ffff16908201526060918201516001600160a01b03169181019190915260800190565b61014a610145366004610b84565b61069c565b6040516100b891908151815260208083015160ff169082015260408083015161ffff16908201526060918201519181019190915260800190565b610197610192366004610b84565b6107cb565b6040516100b891908151815260208083015160ff16908201526040808301519082015260609182015161ffff169181019190915260800190565b6040805160a08101825260008082526020820181905291810182905260608101829052608081018290529061020683826108fc565b8252610213602082610ce1565b905061021f838261095a565b60ff166020830152610232600182610ce1565b9050816020015160ff166004146102875760405162461bcd60e51b8152602060048201526014602482015273696e76616c6964205472616e736665724665657360601b60448201526064015b60405180910390fd5b61029183826109b6565b61ffff1660408301526102a5600282610ce1565b90506102b18382610a13565b60608301526102c1602082610ce1565b90506102cd83826108fc565b60808301526102dd602082610ce1565b9050808351146103265760405162461bcd60e51b8152602060048201526014602482015273696e76616c6964205472616e736665724665657360601b604482015260640161027e565b50919050565b610334610b2a565b600061034083826108fc565b825261034d602082610ce1565b9050610359838261095a565b60ff16602083015261036c600182610ce1565b9050816020015160ff166002146103c55760405162461bcd60e51b815260206004820152601a60248201527f696e76616c696420477561726469616e53657455706772616465000000000000604482015260640161027e565b6103cf83826109b6565b61ffff1660408301526103e3600282610ce1565b90506103ef8382610a68565b63ffffffff166080830152610405600482610ce1565b90506000610413848361095a565b9050610420600183610ce1565b915060405180604001604052808260ff1667ffffffffffffffff81111561045757634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610480578160200160208202803683370190505b5081526000602090910181905260608501919091525b8160ff16811015610508576104ab8584610ac5565b6060850151518051839081106104d157634e487b7160e01b600052603260045260246000fd5b6001600160a01b03909216602092830291909101909101526104f4601484610ce1565b92508061050081610cf9565b915050610496565b50818451146105595760405162461bcd60e51b815260206004820152601a60248201527f696e76616c696420477561726469616e53657455706772616465000000000000604482015260640161027e565b5050919050565b60408051608081018252600080825260208201819052918101829052606081018290529061058e83826108fc565b825261059b602082610ce1565b90506105a7838261095a565b60ff1660208301526105ba600182610ce1565b9050816020015160ff1660011461060d5760405162461bcd60e51b8152602060048201526017602482015276696e76616c696420436f6e74726163745570677261646560481b604482015260640161027e565b61061783826109b6565b61ffff16604083015261062b600282610ce1565b905061063783826108fc565b6001600160a01b03166060830152610650602082610ce1565b9050808351146103265760405162461bcd60e51b8152602060048201526017602482015276696e76616c696420436f6e74726163745570677261646560481b604482015260640161027e565b6040805160808101825260008082526020820181905291810182905260608101829052906106ca83826108fc565b82526106d7602082610ce1565b90506106e3838261095a565b60ff1660208301526106f6600182610ce1565b9050816020015160ff166003146107475760405162461bcd60e51b8152602060048201526015602482015274696e76616c6964205365744d65737361676546656560581b604482015260640161027e565b61075183826109b6565b61ffff166040830152610765600282610ce1565b90506107718382610a13565b6060830152610781602082610ce1565b9050808351146103265760405162461bcd60e51b8152602060048201526015602482015274696e76616c6964205365744d65737361676546656560581b604482015260640161027e565b6040805160808101825260008082526020820181905291810182905260608101829052906107f983826108fc565b8252610806602082610ce1565b9050610812838261095a565b60ff166020830152610825600182610ce1565b9050816020015160ff166005146108775760405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a5908149958dbdd995c90da185a5b925960521b604482015260640161027e565b6108818382610a13565b6040830152610891602082610ce1565b905061089d83826109b6565b61ffff1660608301526108b1600282610ce1565b9050808351146103265760405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a5908149958dbdd995c90da185a5b925960521b604482015260640161027e565b6000610909826020610ce1565b835110156109515760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b604482015260640161027e565b50016020015190565b6000610967826001610ce1565b835110156109ad5760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b604482015260640161027e565b50016001015190565b60006109c3826002610ce1565b83511015610a0a5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b604482015260640161027e565b50016002015190565b6000610a20826020610ce1565b835110156109515760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b604482015260640161027e565b6000610a75826004610ce1565b83511015610abc5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7433325f6f75744f66426f756e647360601b604482015260640161027e565b50016004015190565b6000610ad2826014610ce1565b83511015610b1a5760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b604482015260640161027e565b500160200151600160601b900490565b6040518060a0016040528060008019168152602001600060ff168152602001600061ffff168152602001610b77604051806040016040528060608152602001600063ffffffff1681525090565b8152600060209091015290565b600060208284031215610b95578081fd5b813567ffffffffffffffff80821115610bac578283fd5b818401915084601f830112610bbf578283fd5b813581811115610bd157610bd1610d2a565b604051601f8201601f19908116603f01168101908382118183101715610bf957610bf9610d2a565b81604052828152876020848701011115610c11578586fd5b826020860160208301379182016020019490945295945050505050565b6000602080835283518184015260ff8185015116604084015261ffff6040850151166060840152606084015160a0608085015261010084018151604060c08701528181518084526101208801915085830193508692505b80831015610cae5783516001600160a01b03168252928501926001929092019190850190610c85565b509383015163ffffffff1660e0870152608087015193610cd660a088018663ffffffff169052565b979650505050505050565b60008219821115610cf457610cf4610d14565b500190565b6000600019821415610d0d57610d0d610d14565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ebcf6dde2298ac1bc9dfd467ce5a3b4b213364aee86187770abe0e493434fb5b64736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/GovernanceStructs__factory.ts:272

## Methods

### attach

▸ **attach**(`address`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/GovernanceStructs__factory.ts:266

___

### connect

▸ **connect**(`signer`): [`GovernanceStructs__factory`](ethers_contracts.GovernanceStructs__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`GovernanceStructs__factory`](ethers_contracts.GovernanceStructs__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/GovernanceStructs__factory.ts:269

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/GovernanceStructs__factory.ts:256

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

src/ethers-contracts/factories/GovernanceStructs__factory.ts:261

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Defined in

src/ethers-contracts/factories/GovernanceStructs__factory.ts:277

___

### createInterface

▸ `Static` **createInterface**(): `GovernanceStructsInterface`

#### Returns

`GovernanceStructsInterface`

#### Defined in

src/ethers-contracts/factories/GovernanceStructs__factory.ts:274

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
