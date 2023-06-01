[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / TokenState

# Class: TokenState

[ethers_contracts](../modules/ethers_contracts.md).TokenState

## Hierarchy

- `BaseContract`

  ↳ **`TokenState`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.TokenState.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.TokenState.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.TokenState.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.TokenState.md#_wrappedemits)
- [address](ethers_contracts.TokenState.md#address)
- [callStatic](ethers_contracts.TokenState.md#callstatic)
- [deployTransaction](ethers_contracts.TokenState.md#deploytransaction)
- [estimateGas](ethers_contracts.TokenState.md#estimategas)
- [filters](ethers_contracts.TokenState.md#filters)
- [functions](ethers_contracts.TokenState.md#functions)
- [interface](ethers_contracts.TokenState.md#interface)
- [populateTransaction](ethers_contracts.TokenState.md#populatetransaction)
- [provider](ethers_contracts.TokenState.md#provider)
- [resolvedAddress](ethers_contracts.TokenState.md#resolvedaddress)
- [signer](ethers_contracts.TokenState.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.TokenState.md#_checkrunningevents)
- [\_deployed](ethers_contracts.TokenState.md#_deployed)
- [\_wrapEvent](ethers_contracts.TokenState.md#_wrapevent)
- [attach](ethers_contracts.TokenState.md#attach)
- [connect](ethers_contracts.TokenState.md#connect)
- [deployed](ethers_contracts.TokenState.md#deployed)
- [emit](ethers_contracts.TokenState.md#emit)
- [fallback](ethers_contracts.TokenState.md#fallback)
- [listenerCount](ethers_contracts.TokenState.md#listenercount)
- [listeners](ethers_contracts.TokenState.md#listeners)
- [nonces](ethers_contracts.TokenState.md#nonces)
- [off](ethers_contracts.TokenState.md#off)
- [on](ethers_contracts.TokenState.md#on)
- [once](ethers_contracts.TokenState.md#once)
- [queryFilter](ethers_contracts.TokenState.md#queryfilter)
- [removeAllListeners](ethers_contracts.TokenState.md#removealllisteners)
- [removeListener](ethers_contracts.TokenState.md#removelistener)
- [getContractAddress](ethers_contracts.TokenState.md#getcontractaddress)
- [getInterface](ethers_contracts.TokenState.md#getinterface)
- [isIndexed](ethers_contracts.TokenState.md#isindexed)

## Constructors

### constructor

• **new TokenState**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `nonces` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/TokenState.d.ts:88

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
| `nonces` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/TokenState.d.ts:97

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/TokenState.d.ts:95

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `nonces` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/TokenState.d.ts:76

___

### interface

• **interface**: `TokenStateInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/TokenState.d.ts:74

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `nonces` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/TokenState.d.ts:104

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

▸ **attach**(`addressOrName`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/TokenState.d.ts:35

___

### connect

▸ **connect**(`signerOrProvider`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/TokenState.d.ts:34

___

### deployed

▸ **deployed**(): `Promise`<[`TokenState`](ethers_contracts.TokenState.md)\>

#### Returns

`Promise`<[`TokenState`](ethers_contracts.TokenState.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/TokenState.d.ts:36

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

src/ethers-contracts/TokenState.d.ts:38

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

src/ethers-contracts/TokenState.d.ts:61

___

### nonces

▸ **nonces**(`owner_`, `overrides?`): `Promise`<`BigNumber`\>

See {IERC20Permit-nonces}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/TokenState.d.ts:86

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TokenState`](ethers_contracts.TokenState.md)

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

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/TokenState.d.ts:41

▸ **off**(`eventName`, `listener`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/TokenState.d.ts:62

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TokenState`](ethers_contracts.TokenState.md)

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

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/TokenState.d.ts:45

▸ **on**(`eventName`, `listener`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/TokenState.d.ts:63

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TokenState`](ethers_contracts.TokenState.md)

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

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/TokenState.d.ts:49

▸ **once**(`eventName`, `listener`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/TokenState.d.ts:64

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

src/ethers-contracts/TokenState.d.ts:68

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`TokenState`](ethers_contracts.TokenState.md)

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

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/TokenState.d.ts:57

▸ **removeAllListeners**(`eventName?`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/TokenState.d.ts:66

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TokenState`](ethers_contracts.TokenState.md)

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

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/TokenState.d.ts:53

▸ **removeListener**(`eventName`, `listener`): [`TokenState`](ethers_contracts.TokenState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TokenState`](ethers_contracts.TokenState.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/TokenState.d.ts:65

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
