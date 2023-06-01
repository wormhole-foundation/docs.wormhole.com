[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / NFTBridgeEntrypoint

# Class: NFTBridgeEntrypoint

[ethers_contracts](../modules/ethers_contracts.md).NFTBridgeEntrypoint

## Hierarchy

- `BaseContract`

  ↳ **`NFTBridgeEntrypoint`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.NFTBridgeEntrypoint.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.NFTBridgeEntrypoint.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.NFTBridgeEntrypoint.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.NFTBridgeEntrypoint.md#_wrappedemits)
- [address](ethers_contracts.NFTBridgeEntrypoint.md#address)
- [callStatic](ethers_contracts.NFTBridgeEntrypoint.md#callstatic)
- [deployTransaction](ethers_contracts.NFTBridgeEntrypoint.md#deploytransaction)
- [estimateGas](ethers_contracts.NFTBridgeEntrypoint.md#estimategas)
- [filters](ethers_contracts.NFTBridgeEntrypoint.md#filters)
- [functions](ethers_contracts.NFTBridgeEntrypoint.md#functions)
- [interface](ethers_contracts.NFTBridgeEntrypoint.md#interface)
- [populateTransaction](ethers_contracts.NFTBridgeEntrypoint.md#populatetransaction)
- [provider](ethers_contracts.NFTBridgeEntrypoint.md#provider)
- [resolvedAddress](ethers_contracts.NFTBridgeEntrypoint.md#resolvedaddress)
- [signer](ethers_contracts.NFTBridgeEntrypoint.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.NFTBridgeEntrypoint.md#_checkrunningevents)
- [\_deployed](ethers_contracts.NFTBridgeEntrypoint.md#_deployed)
- [\_wrapEvent](ethers_contracts.NFTBridgeEntrypoint.md#_wrapevent)
- [attach](ethers_contracts.NFTBridgeEntrypoint.md#attach)
- [connect](ethers_contracts.NFTBridgeEntrypoint.md#connect)
- [deployed](ethers_contracts.NFTBridgeEntrypoint.md#deployed)
- [emit](ethers_contracts.NFTBridgeEntrypoint.md#emit)
- [fallback](ethers_contracts.NFTBridgeEntrypoint.md#fallback)
- [listenerCount](ethers_contracts.NFTBridgeEntrypoint.md#listenercount)
- [listeners](ethers_contracts.NFTBridgeEntrypoint.md#listeners)
- [off](ethers_contracts.NFTBridgeEntrypoint.md#off)
- [on](ethers_contracts.NFTBridgeEntrypoint.md#on)
- [once](ethers_contracts.NFTBridgeEntrypoint.md#once)
- [queryFilter](ethers_contracts.NFTBridgeEntrypoint.md#queryfilter)
- [removeAllListeners](ethers_contracts.NFTBridgeEntrypoint.md#removealllisteners)
- [removeListener](ethers_contracts.NFTBridgeEntrypoint.md#removelistener)
- [getContractAddress](ethers_contracts.NFTBridgeEntrypoint.md#getcontractaddress)
- [getInterface](ethers_contracts.NFTBridgeEntrypoint.md#getinterface)
- [isIndexed](ethers_contracts.NFTBridgeEntrypoint.md#isindexed)

## Constructors

### constructor

• **new NFTBridgeEntrypoint**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:87

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

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:123

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AdminChanged` | (`previousAdmin?`: ``null``, `newAdmin?`: ``null``) => `TypedEventFilter`<[`string`, `string`], { `newAdmin`: `string` ; `previousAdmin`: `string`  }\> |
| `AdminChanged(address,address)` | (`previousAdmin?`: ``null``, `newAdmin?`: ``null``) => `TypedEventFilter`<[`string`, `string`], { `newAdmin`: `string` ; `previousAdmin`: `string`  }\> |
| `BeaconUpgraded` | (`beacon?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`], { `beacon`: `string`  }\> |
| `BeaconUpgraded(address)` | (`beacon?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`], { `beacon`: `string`  }\> |
| `Upgraded` | (`implementation?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`], { `implementation`: `string`  }\> |
| `Upgraded(address)` | (`implementation?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`], { `implementation`: `string`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:89

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:85

___

### interface

• **interface**: `NFTBridgeEntrypointInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:83

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:125

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

▸ **attach**(`addressOrName`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:44

___

### connect

▸ **connect**(`signerOrProvider`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:43

___

### deployed

▸ **deployed**(): `Promise`<[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)\>

#### Returns

`Promise`<[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:45

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

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:47

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

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:70

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

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

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:50

▸ **off**(`eventName`, `listener`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:71

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

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

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:54

▸ **on**(`eventName`, `listener`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:72

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

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

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:58

▸ **once**(`eventName`, `listener`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:73

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

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:77

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

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

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:66

▸ **removeAllListeners**(`eventName?`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:75

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

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

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:62

▸ **removeListener**(`eventName`, `listener`): [`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeEntrypoint`](ethers_contracts.NFTBridgeEntrypoint.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTBridgeEntrypoint.d.ts:74

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
