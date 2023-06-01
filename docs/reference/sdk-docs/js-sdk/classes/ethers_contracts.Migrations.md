[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Migrations

# Class: Migrations

[ethers_contracts](../modules/ethers_contracts.md).Migrations

## Hierarchy

- `BaseContract`

  ↳ **`Migrations`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Migrations.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.Migrations.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.Migrations.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.Migrations.md#_wrappedemits)
- [address](ethers_contracts.Migrations.md#address)
- [callStatic](ethers_contracts.Migrations.md#callstatic)
- [deployTransaction](ethers_contracts.Migrations.md#deploytransaction)
- [estimateGas](ethers_contracts.Migrations.md#estimategas)
- [filters](ethers_contracts.Migrations.md#filters)
- [functions](ethers_contracts.Migrations.md#functions)
- [interface](ethers_contracts.Migrations.md#interface)
- [populateTransaction](ethers_contracts.Migrations.md#populatetransaction)
- [provider](ethers_contracts.Migrations.md#provider)
- [resolvedAddress](ethers_contracts.Migrations.md#resolvedaddress)
- [signer](ethers_contracts.Migrations.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.Migrations.md#_checkrunningevents)
- [\_deployed](ethers_contracts.Migrations.md#_deployed)
- [\_wrapEvent](ethers_contracts.Migrations.md#_wrapevent)
- [attach](ethers_contracts.Migrations.md#attach)
- [connect](ethers_contracts.Migrations.md#connect)
- [deployed](ethers_contracts.Migrations.md#deployed)
- [emit](ethers_contracts.Migrations.md#emit)
- [fallback](ethers_contracts.Migrations.md#fallback)
- [last\_completed\_migration](ethers_contracts.Migrations.md#last_completed_migration)
- [listenerCount](ethers_contracts.Migrations.md#listenercount)
- [listeners](ethers_contracts.Migrations.md#listeners)
- [off](ethers_contracts.Migrations.md#off)
- [on](ethers_contracts.Migrations.md#on)
- [once](ethers_contracts.Migrations.md#once)
- [owner](ethers_contracts.Migrations.md#owner)
- [queryFilter](ethers_contracts.Migrations.md#queryfilter)
- [removeAllListeners](ethers_contracts.Migrations.md#removealllisteners)
- [removeListener](ethers_contracts.Migrations.md#removelistener)
- [setCompleted](ethers_contracts.Migrations.md#setcompleted)
- [getContractAddress](ethers_contracts.Migrations.md#getcontractaddress)
- [getInterface](ethers_contracts.Migrations.md#getinterface)
- [isIndexed](ethers_contracts.Migrations.md#isindexed)

## Constructors

### constructor

• **new Migrations**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `last_completed_migration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setCompleted` | (`completed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/Migrations.d.ts:115

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
| `last_completed_migration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setCompleted` | (`completed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/Migrations.d.ts:128

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/Migrations.d.ts:126

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `last_completed_migration` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setCompleted` | (`completed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/Migrations.d.ts:95

___

### interface

• **interface**: `MigrationsInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/Migrations.d.ts:93

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `last_completed_migration` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setCompleted` | (`completed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/Migrations.d.ts:139

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

▸ **attach**(`addressOrName`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/Migrations.d.ts:54

___

### connect

▸ **connect**(`signerOrProvider`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/Migrations.d.ts:53

___

### deployed

▸ **deployed**(): `Promise`<[`Migrations`](ethers_contracts.Migrations.md)\>

#### Returns

`Promise`<[`Migrations`](ethers_contracts.Migrations.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/Migrations.d.ts:55

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

### last\_completed\_migration

▸ **last_completed_migration**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/Migrations.d.ts:106

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

src/ethers-contracts/Migrations.d.ts:57

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

src/ethers-contracts/Migrations.d.ts:80

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Migrations`](ethers_contracts.Migrations.md)

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

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Migrations.d.ts:60

▸ **off**(`eventName`, `listener`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Migrations.d.ts:81

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Migrations`](ethers_contracts.Migrations.md)

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

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Migrations.d.ts:64

▸ **on**(`eventName`, `listener`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Migrations.d.ts:82

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Migrations`](ethers_contracts.Migrations.md)

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

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Migrations.d.ts:68

▸ **once**(`eventName`, `listener`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Migrations.d.ts:83

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/Migrations.d.ts:108

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

src/ethers-contracts/Migrations.d.ts:87

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Migrations`](ethers_contracts.Migrations.md)

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

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Migrations.d.ts:76

▸ **removeAllListeners**(`eventName?`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Migrations.d.ts:85

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Migrations`](ethers_contracts.Migrations.md)

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

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Migrations.d.ts:72

▸ **removeListener**(`eventName`, `listener`): [`Migrations`](ethers_contracts.Migrations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Migrations`](ethers_contracts.Migrations.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Migrations.d.ts:84

___

### setCompleted

▸ **setCompleted**(`completed`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `completed` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Migrations.d.ts:110

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
