[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / ERC20\_\_factory

# Class: ERC20\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).ERC20__factory

## Hierarchy

- `ContractFactory`

  ↳ **`ERC20__factory`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.ERC20__factory.md#constructor)

### Properties

- [bytecode](ethers_contracts.ERC20__factory.md#bytecode)
- [interface](ethers_contracts.ERC20__factory.md#interface)
- [signer](ethers_contracts.ERC20__factory.md#signer)
- [abi](ethers_contracts.ERC20__factory.md#abi)
- [bytecode](ethers_contracts.ERC20__factory.md#bytecode-1)

### Methods

- [attach](ethers_contracts.ERC20__factory.md#attach)
- [connect](ethers_contracts.ERC20__factory.md#connect)
- [deploy](ethers_contracts.ERC20__factory.md#deploy)
- [getDeployTransaction](ethers_contracts.ERC20__factory.md#getdeploytransaction)
- [connect](ethers_contracts.ERC20__factory.md#connect-1)
- [createInterface](ethers_contracts.ERC20__factory.md#createinterface)
- [fromSolidity](ethers_contracts.ERC20__factory.md#fromsolidity)
- [getContract](ethers_contracts.ERC20__factory.md#getcontract)
- [getContractAddress](ethers_contracts.ERC20__factory.md#getcontractaddress)
- [getInterface](ethers_contracts.ERC20__factory.md#getinterface)

## Constructors

### constructor

• **new ERC20__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [contractInterface: ContractInterface, bytecode: BytesLike \| Object, signer?: Signer] \| [signer: Signer] |

#### Overrides

ContractFactory.constructor

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:302

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

▪ `Static` `Readonly` **abi**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "string"; `name`: `string` = "name\_"; `type`: `string` = "string" }[] ; `name?`: `undefined` = "AdminChanged"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "account"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:333

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x60806040523480156200001157600080fd5b5060405162000b4738038062000b478339810160408190526200003491620001c1565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b5050506200027b565b828054620000769062000228565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c62000265565b604051601f8301601f19908116603f0116810190828211818310171562000167576200016762000265565b8160405283815260209250868385880101111562000183578485fd5b8491505b83821015620001a6578582018301518183018401529082019062000187565b83821115620001b757848385830101525b9695505050505050565b60008060408385031215620001d4578182fd5b82516001600160401b0380821115620001eb578384fd5b620001f9868387016200010e565b935060208501519150808211156200020f578283fd5b506200021e858286016200010e565b9150509250929050565b600181811c908216806200023d57607f821691505b602082108114156200025f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6108bc806200028b6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012357806370a082311461013657806395d89b411461015f578063a457c2d714610167578063a9059cbb1461017a578063dd62ed3e1461018d57600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101c6565b6040516100c391906107d4565b60405180910390f35b6100df6100da3660046107ab565b610258565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610770565b61026e565b604051601281526020016100c3565b6100df6101313660046107ab565b61031d565b6100f361014436600461071d565b6001600160a01b031660009081526020819052604090205490565b6100b6610359565b6100df6101753660046107ab565b610368565b6100df6101883660046107ab565b610401565b6100f361019b36600461073e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101d59061084b565b80601f01602080910402602001604051908101604052809291908181526020018280546102019061084b565b801561024e5780601f106102235761010080835404028352916020019161024e565b820191906000526020600020905b81548152906001019060200180831161023157829003601f168201915b5050505050905090565b600061026533848461040e565b50600192915050565b600061027b848484610532565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103055760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610312853385840361040e565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610265918590610354908690610827565b61040e565b6060600480546101d59061084b565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103ea5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016102fc565b6103f7338585840361040e565b5060019392505050565b6000610265338484610532565b6001600160a01b0383166104705760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016102fc565b6001600160a01b0382166104d15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016102fc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105965760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016102fc565b6001600160a01b0382166105f85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016102fc565b6001600160a01b038316600090815260208190526040902054818110156106705760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016102fc565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106a7908490610827565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106f391815260200190565b60405180910390a350505050565b80356001600160a01b038116811461071857600080fd5b919050565b60006020828403121561072e578081fd5b61073782610701565b9392505050565b60008060408385031215610750578081fd5b61075983610701565b915061076760208401610701565b90509250929050565b600080600060608486031215610784578081fd5b61078d84610701565b925061079b60208501610701565b9150604084013590509250925092565b600080604083850312156107bd578182fd5b6107c683610701565b946020939093013593505050565b6000602080835283518082850152825b81811015610800578581018301518582016040015282016107e4565b818111156108115783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561084657634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061085f57607f821691505b6020821081141561088057634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122011bc2099aa5d304a3282adb69fbedd084a68ec9367dc57e280ac5d36e709f97d64736f6c63430008040033"``

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:332

## Methods

### attach

▸ **attach**(`address`): [`ERC20`](ethers_contracts.ERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ERC20`](ethers_contracts.ERC20.md)

#### Overrides

ContractFactory.attach

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:326

___

### connect

▸ **connect**(`signer`): [`ERC20__factory`](ethers_contracts.ERC20__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ERC20__factory`](ethers_contracts.ERC20__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:329

___

### deploy

▸ **deploy**(`name_`, `symbol_`, `overrides?`): `Promise`<[`ERC20`](ethers_contracts.ERC20.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_` | `string` |
| `symbol_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ERC20`](ethers_contracts.ERC20.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:312

___

### getDeployTransaction

▸ **getDeployTransaction**(`name_`, `symbol_`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_` | `string` |
| `symbol_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:319

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ERC20`](ethers_contracts.ERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ERC20`](ethers_contracts.ERC20.md)

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:337

___

### createInterface

▸ `Static` **createInterface**(): `ERC20Interface`

#### Returns

`ERC20Interface`

#### Defined in

src/ethers-contracts/factories/ERC20__factory.ts:334

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
