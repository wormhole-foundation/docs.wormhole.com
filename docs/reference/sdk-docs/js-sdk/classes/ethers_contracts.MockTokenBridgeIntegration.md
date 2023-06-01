[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / MockTokenBridgeIntegration

# Class: MockTokenBridgeIntegration

[ethers_contracts](../modules/ethers_contracts.md).MockTokenBridgeIntegration

## Hierarchy

- `BaseContract`

  ↳ **`MockTokenBridgeIntegration`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.MockTokenBridgeIntegration.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.MockTokenBridgeIntegration.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.MockTokenBridgeIntegration.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.MockTokenBridgeIntegration.md#_wrappedemits)
- [address](ethers_contracts.MockTokenBridgeIntegration.md#address)
- [callStatic](ethers_contracts.MockTokenBridgeIntegration.md#callstatic)
- [deployTransaction](ethers_contracts.MockTokenBridgeIntegration.md#deploytransaction)
- [estimateGas](ethers_contracts.MockTokenBridgeIntegration.md#estimategas)
- [filters](ethers_contracts.MockTokenBridgeIntegration.md#filters)
- [functions](ethers_contracts.MockTokenBridgeIntegration.md#functions)
- [interface](ethers_contracts.MockTokenBridgeIntegration.md#interface)
- [populateTransaction](ethers_contracts.MockTokenBridgeIntegration.md#populatetransaction)
- [provider](ethers_contracts.MockTokenBridgeIntegration.md#provider)
- [resolvedAddress](ethers_contracts.MockTokenBridgeIntegration.md#resolvedaddress)
- [signer](ethers_contracts.MockTokenBridgeIntegration.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.MockTokenBridgeIntegration.md#_checkrunningevents)
- [\_deployed](ethers_contracts.MockTokenBridgeIntegration.md#_deployed)
- [\_wrapEvent](ethers_contracts.MockTokenBridgeIntegration.md#_wrapevent)
- [attach](ethers_contracts.MockTokenBridgeIntegration.md#attach)
- [completeTransferAndSwap](ethers_contracts.MockTokenBridgeIntegration.md#completetransferandswap)
- [connect](ethers_contracts.MockTokenBridgeIntegration.md#connect)
- [deployed](ethers_contracts.MockTokenBridgeIntegration.md#deployed)
- [emit](ethers_contracts.MockTokenBridgeIntegration.md#emit)
- [fallback](ethers_contracts.MockTokenBridgeIntegration.md#fallback)
- [listenerCount](ethers_contracts.MockTokenBridgeIntegration.md#listenercount)
- [listeners](ethers_contracts.MockTokenBridgeIntegration.md#listeners)
- [off](ethers_contracts.MockTokenBridgeIntegration.md#off)
- [on](ethers_contracts.MockTokenBridgeIntegration.md#on)
- [once](ethers_contracts.MockTokenBridgeIntegration.md#once)
- [queryFilter](ethers_contracts.MockTokenBridgeIntegration.md#queryfilter)
- [removeAllListeners](ethers_contracts.MockTokenBridgeIntegration.md#removealllisteners)
- [removeListener](ethers_contracts.MockTokenBridgeIntegration.md#removelistener)
- [setup](ethers_contracts.MockTokenBridgeIntegration.md#setup)
- [getContractAddress](ethers_contracts.MockTokenBridgeIntegration.md#getcontractaddress)
- [getInterface](ethers_contracts.MockTokenBridgeIntegration.md#getinterface)
- [isIndexed](ethers_contracts.MockTokenBridgeIntegration.md#isindexed)

## Constructors

### constructor

• **new MockTokenBridgeIntegration**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `completeTransferAndSwap` | (`encodedVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setup` | (`_tokenBridge`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:108

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
| `completeTransferAndSwap` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setup` | (`_tokenBridge`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:119

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:117

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `completeTransferAndSwap` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setup` | (`_tokenBridge`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:86

___

### interface

• **interface**: `MockTokenBridgeIntegrationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:84

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `completeTransferAndSwap` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setup` | (`_tokenBridge`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:131

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

▸ **attach**(`addressOrName`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:45

___

### completeTransferAndSwap

▸ **completeTransferAndSwap**(`encodedVm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:98

___

### connect

▸ **connect**(`signerOrProvider`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:44

___

### deployed

▸ **deployed**(): `Promise`<[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)\>

#### Returns

`Promise`<[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:46

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

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:48

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

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:71

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

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

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:51

▸ **off**(`eventName`, `listener`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:72

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

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

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:55

▸ **on**(`eventName`, `listener`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:73

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

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

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:59

▸ **once**(`eventName`, `listener`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:74

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

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:78

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

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

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:67

▸ **removeAllListeners**(`eventName?`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:76

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

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

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:63

▸ **removeListener**(`eventName`, `listener`): [`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTokenBridgeIntegration`](ethers_contracts.MockTokenBridgeIntegration.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:75

___

### setup

▸ **setup**(`_tokenBridge`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_tokenBridge` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockTokenBridgeIntegration.d.ts:103

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
