[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IBeacon

# Class: IBeacon

[ethers_contracts](../modules/ethers_contracts.md).IBeacon

## Hierarchy

- `BaseContract`

  ↳ **`IBeacon`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.IBeacon.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.IBeacon.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.IBeacon.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.IBeacon.md#_wrappedemits)
- [address](ethers_contracts.IBeacon.md#address)
- [callStatic](ethers_contracts.IBeacon.md#callstatic)
- [deployTransaction](ethers_contracts.IBeacon.md#deploytransaction)
- [estimateGas](ethers_contracts.IBeacon.md#estimategas)
- [filters](ethers_contracts.IBeacon.md#filters)
- [functions](ethers_contracts.IBeacon.md#functions)
- [interface](ethers_contracts.IBeacon.md#interface)
- [populateTransaction](ethers_contracts.IBeacon.md#populatetransaction)
- [provider](ethers_contracts.IBeacon.md#provider)
- [resolvedAddress](ethers_contracts.IBeacon.md#resolvedaddress)
- [signer](ethers_contracts.IBeacon.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.IBeacon.md#_checkrunningevents)
- [\_deployed](ethers_contracts.IBeacon.md#_deployed)
- [\_wrapEvent](ethers_contracts.IBeacon.md#_wrapevent)
- [attach](ethers_contracts.IBeacon.md#attach)
- [connect](ethers_contracts.IBeacon.md#connect)
- [deployed](ethers_contracts.IBeacon.md#deployed)
- [emit](ethers_contracts.IBeacon.md#emit)
- [fallback](ethers_contracts.IBeacon.md#fallback)
- [implementation](ethers_contracts.IBeacon.md#implementation)
- [listenerCount](ethers_contracts.IBeacon.md#listenercount)
- [listeners](ethers_contracts.IBeacon.md#listeners)
- [off](ethers_contracts.IBeacon.md#off)
- [on](ethers_contracts.IBeacon.md#on)
- [once](ethers_contracts.IBeacon.md#once)
- [queryFilter](ethers_contracts.IBeacon.md#queryfilter)
- [removeAllListeners](ethers_contracts.IBeacon.md#removealllisteners)
- [removeListener](ethers_contracts.IBeacon.md#removelistener)
- [getContractAddress](ethers_contracts.IBeacon.md#getcontractaddress)
- [getInterface](ethers_contracts.IBeacon.md#getinterface)
- [isIndexed](ethers_contracts.IBeacon.md#isindexed)

## Constructors

### constructor

• **new IBeacon**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/IBeacon.d.ts:94

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
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/IBeacon.d.ts:103

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/IBeacon.d.ts:101

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/IBeacon.d.ts:82

___

### interface

• **interface**: `IBeaconInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/IBeacon.d.ts:80

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/IBeacon.d.ts:110

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

▸ **attach**(`addressOrName`): [`IBeacon`](ethers_contracts.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/IBeacon.d.ts:41

___

### connect

▸ **connect**(`signerOrProvider`): [`IBeacon`](ethers_contracts.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/IBeacon.d.ts:40

___

### deployed

▸ **deployed**(): `Promise`<[`IBeacon`](ethers_contracts.IBeacon.md)\>

#### Returns

`Promise`<[`IBeacon`](ethers_contracts.IBeacon.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/IBeacon.d.ts:42

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

### implementation

▸ **implementation**(`overrides?`): `Promise`<`string`\>

Must return an address that can be used as a delegate call target. {BeaconProxy} will check that this address is a contract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/IBeacon.d.ts:92

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

src/ethers-contracts/IBeacon.d.ts:44

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

src/ethers-contracts/IBeacon.d.ts:67

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IBeacon`](ethers_contracts.IBeacon.md)

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

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IBeacon.d.ts:47

▸ **off**(`eventName`, `listener`): [`IBeacon`](ethers_contracts.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IBeacon.d.ts:68

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IBeacon`](ethers_contracts.IBeacon.md)

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

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IBeacon.d.ts:51

▸ **on**(`eventName`, `listener`): [`IBeacon`](ethers_contracts.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IBeacon.d.ts:69

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IBeacon`](ethers_contracts.IBeacon.md)

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

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IBeacon.d.ts:55

▸ **once**(`eventName`, `listener`): [`IBeacon`](ethers_contracts.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IBeacon.d.ts:70

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

src/ethers-contracts/IBeacon.d.ts:74

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IBeacon`](ethers_contracts.IBeacon.md)

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

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IBeacon.d.ts:63

▸ **removeAllListeners**(`eventName?`): [`IBeacon`](ethers_contracts.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IBeacon.d.ts:72

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IBeacon`](ethers_contracts.IBeacon.md)

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

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IBeacon.d.ts:59

▸ **removeListener**(`eventName`, `listener`): [`IBeacon`](ethers_contracts.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IBeacon`](ethers_contracts.IBeacon.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IBeacon.d.ts:71

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
