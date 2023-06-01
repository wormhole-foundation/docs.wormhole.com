[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Ownable

# Class: Ownable

[ethers_contracts](../modules/ethers_contracts.md).Ownable

## Hierarchy

- `BaseContract`

  ↳ **`Ownable`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Ownable.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.Ownable.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.Ownable.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.Ownable.md#_wrappedemits)
- [address](ethers_contracts.Ownable.md#address)
- [callStatic](ethers_contracts.Ownable.md#callstatic)
- [deployTransaction](ethers_contracts.Ownable.md#deploytransaction)
- [estimateGas](ethers_contracts.Ownable.md#estimategas)
- [filters](ethers_contracts.Ownable.md#filters)
- [functions](ethers_contracts.Ownable.md#functions)
- [interface](ethers_contracts.Ownable.md#interface)
- [populateTransaction](ethers_contracts.Ownable.md#populatetransaction)
- [provider](ethers_contracts.Ownable.md#provider)
- [resolvedAddress](ethers_contracts.Ownable.md#resolvedaddress)
- [signer](ethers_contracts.Ownable.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.Ownable.md#_checkrunningevents)
- [\_deployed](ethers_contracts.Ownable.md#_deployed)
- [\_wrapEvent](ethers_contracts.Ownable.md#_wrapevent)
- [attach](ethers_contracts.Ownable.md#attach)
- [connect](ethers_contracts.Ownable.md#connect)
- [deployed](ethers_contracts.Ownable.md#deployed)
- [emit](ethers_contracts.Ownable.md#emit)
- [fallback](ethers_contracts.Ownable.md#fallback)
- [listenerCount](ethers_contracts.Ownable.md#listenercount)
- [listeners](ethers_contracts.Ownable.md#listeners)
- [off](ethers_contracts.Ownable.md#off)
- [on](ethers_contracts.Ownable.md#on)
- [once](ethers_contracts.Ownable.md#once)
- [owner](ethers_contracts.Ownable.md#owner)
- [queryFilter](ethers_contracts.Ownable.md#queryfilter)
- [removeAllListeners](ethers_contracts.Ownable.md#removealllisteners)
- [removeListener](ethers_contracts.Ownable.md#removelistener)
- [renounceOwnership](ethers_contracts.Ownable.md#renounceownership)
- [transferOwnership](ethers_contracts.Ownable.md#transferownership)
- [getContractAddress](ethers_contracts.Ownable.md#getcontractaddress)
- [getInterface](ethers_contracts.Ownable.md#getinterface)
- [isIndexed](ethers_contracts.Ownable.md#isindexed)

## Constructors

### constructor

• **new Ownable**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | `ContractInterface` |
| `signerOrProvider?` | `Signer` \| `Provider` |

#### Inherited from

BaseContract.constructor

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:107

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/Ownable.d.ts:145

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/Ownable.d.ts:183

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OwnershipTransferred` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/Ownable.d.ts:165

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/Ownable.d.ts:103

___

### interface

• **interface**: `OwnableInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/Ownable.d.ts:101

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/Ownable.d.ts:205

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

### attach

▸ **attach**(`addressOrName`): [`Ownable`](ethers_contracts.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/Ownable.d.ts:62

___

### connect

▸ **connect**(`signerOrProvider`): [`Ownable`](ethers_contracts.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/Ownable.d.ts:61

___

### deployed

▸ **deployed**(): `Promise`<[`Ownable`](ethers_contracts.Ownable.md)\>

#### Returns

`Promise`<[`Ownable`](ethers_contracts.Ownable.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/Ownable.d.ts:63

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:115

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

___

### listeners

▸ **listeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter?`): `TypedListener`<`EventArgsArray`, `EventArgsObject`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

`TypedListener`<`EventArgsArray`, `EventArgsObject`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

src/ethers-contracts/Ownable.d.ts:65

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

src/ethers-contracts/Ownable.d.ts:88

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Ownable`](ethers_contracts.Ownable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Ownable.d.ts:68

▸ **off**(`eventName`, `listener`): [`Ownable`](ethers_contracts.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Ownable.d.ts:89

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Ownable`](ethers_contracts.Ownable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Ownable.d.ts:72

▸ **on**(`eventName`, `listener`): [`Ownable`](ethers_contracts.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Ownable.d.ts:90

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Ownable`](ethers_contracts.Ownable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Ownable.d.ts:76

▸ **once**(`eventName`, `listener`): [`Ownable`](ethers_contracts.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Ownable.d.ts:91

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

Returns the address of the current owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/Ownable.d.ts:128

___

### queryFilter

▸ **queryFilter**<`EventArgsArray`, `EventArgsObject`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TypedEvent`<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TypedEvent`<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

src/ethers-contracts/Ownable.d.ts:95

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Ownable`](ethers_contracts.Ownable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Ownable.d.ts:84

▸ **removeAllListeners**(`eventName?`): [`Ownable`](ethers_contracts.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Ownable.d.ts:93

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Ownable`](ethers_contracts.Ownable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Ownable.d.ts:80

▸ **removeListener**(`eventName`, `listener`): [`Ownable`](ethers_contracts.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Ownable`](ethers_contracts.Ownable.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Ownable.d.ts:92

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Ownable.d.ts:133

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Ownable.d.ts:140

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | `BigNumberish` |

#### Returns

`string`

#### Inherited from

BaseContract.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:108

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

BaseContract.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

BaseContract.isIndexed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:118
