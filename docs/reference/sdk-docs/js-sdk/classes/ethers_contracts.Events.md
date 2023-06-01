[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Events

# Class: Events

[ethers_contracts](../modules/ethers_contracts.md).Events

## Hierarchy

- `BaseContract`

  ↳ **`Events`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Events.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.Events.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.Events.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.Events.md#_wrappedemits)
- [address](ethers_contracts.Events.md#address)
- [callStatic](ethers_contracts.Events.md#callstatic)
- [deployTransaction](ethers_contracts.Events.md#deploytransaction)
- [estimateGas](ethers_contracts.Events.md#estimategas)
- [filters](ethers_contracts.Events.md#filters)
- [functions](ethers_contracts.Events.md#functions)
- [interface](ethers_contracts.Events.md#interface)
- [populateTransaction](ethers_contracts.Events.md#populatetransaction)
- [provider](ethers_contracts.Events.md#provider)
- [resolvedAddress](ethers_contracts.Events.md#resolvedaddress)
- [signer](ethers_contracts.Events.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.Events.md#_checkrunningevents)
- [\_deployed](ethers_contracts.Events.md#_deployed)
- [\_wrapEvent](ethers_contracts.Events.md#_wrapevent)
- [attach](ethers_contracts.Events.md#attach)
- [connect](ethers_contracts.Events.md#connect)
- [deployed](ethers_contracts.Events.md#deployed)
- [emit](ethers_contracts.Events.md#emit)
- [fallback](ethers_contracts.Events.md#fallback)
- [listenerCount](ethers_contracts.Events.md#listenercount)
- [listeners](ethers_contracts.Events.md#listeners)
- [off](ethers_contracts.Events.md#off)
- [on](ethers_contracts.Events.md#on)
- [once](ethers_contracts.Events.md#once)
- [queryFilter](ethers_contracts.Events.md#queryfilter)
- [removeAllListeners](ethers_contracts.Events.md#removealllisteners)
- [removeListener](ethers_contracts.Events.md#removelistener)
- [getContractAddress](ethers_contracts.Events.md#getcontractaddress)
- [getInterface](ethers_contracts.Events.md#getinterface)
- [isIndexed](ethers_contracts.Events.md#isindexed)

## Constructors

### constructor

• **new Events**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/Events.d.ts:89

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

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/Events.d.ts:127

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LogGuardianSetChanged` | (`oldGuardianIndex?`: ``null``, `newGuardianIndex?`: ``null``) => `TypedEventFilter`<[`number`, `number`], { `newGuardianIndex`: `number` ; `oldGuardianIndex`: `number`  }\> |
| `LogGuardianSetChanged(uint32,uint32)` | (`oldGuardianIndex?`: ``null``, `newGuardianIndex?`: ``null``) => `TypedEventFilter`<[`number`, `number`], { `newGuardianIndex`: `number` ; `oldGuardianIndex`: `number`  }\> |
| `LogMessagePublished` | (`emitter_address?`: ``null``, `nonce?`: ``null``, `payload?`: ``null``) => `TypedEventFilter`<[`string`, `number`, `string`], { `emitter_address`: `string` ; `nonce`: `number` ; `payload`: `string`  }\> |
| `LogMessagePublished(address,uint32,bytes)` | (`emitter_address?`: ``null``, `nonce?`: ``null``, `payload?`: ``null``) => `TypedEventFilter`<[`string`, `number`, `string`], { `emitter_address`: `string` ; `nonce`: `number` ; `payload`: `string`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/Events.d.ts:91

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/Events.d.ts:87

___

### interface

• **interface**: `EventsInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/Events.d.ts:85

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/Events.d.ts:129

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

▸ **attach**(`addressOrName`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/Events.d.ts:46

___

### connect

▸ **connect**(`signerOrProvider`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/Events.d.ts:45

___

### deployed

▸ **deployed**(): `Promise`<[`Events`](ethers_contracts.Events.md)\>

#### Returns

`Promise`<[`Events`](ethers_contracts.Events.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/Events.d.ts:47

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

src/ethers-contracts/Events.d.ts:49

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

src/ethers-contracts/Events.d.ts:72

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Events`](ethers_contracts.Events.md)

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

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Events.d.ts:52

▸ **off**(`eventName`, `listener`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Events.d.ts:73

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Events`](ethers_contracts.Events.md)

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

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Events.d.ts:56

▸ **on**(`eventName`, `listener`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Events.d.ts:74

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Events`](ethers_contracts.Events.md)

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

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Events.d.ts:60

▸ **once**(`eventName`, `listener`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Events.d.ts:75

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

src/ethers-contracts/Events.d.ts:79

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Events`](ethers_contracts.Events.md)

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

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Events.d.ts:68

▸ **removeAllListeners**(`eventName?`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Events.d.ts:77

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Events`](ethers_contracts.Events.md)

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

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Events.d.ts:64

▸ **removeListener**(`eventName`, `listener`): [`Events`](ethers_contracts.Events.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Events`](ethers_contracts.Events.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Events.d.ts:76

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
