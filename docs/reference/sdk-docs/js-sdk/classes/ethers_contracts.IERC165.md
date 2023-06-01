[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC165

# Class: IERC165

[ethers_contracts](../modules/ethers_contracts.md).IERC165

## Hierarchy

- `BaseContract`

  ↳ **`IERC165`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC165.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.IERC165.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.IERC165.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.IERC165.md#_wrappedemits)
- [address](ethers_contracts.IERC165.md#address)
- [callStatic](ethers_contracts.IERC165.md#callstatic)
- [deployTransaction](ethers_contracts.IERC165.md#deploytransaction)
- [estimateGas](ethers_contracts.IERC165.md#estimategas)
- [filters](ethers_contracts.IERC165.md#filters)
- [functions](ethers_contracts.IERC165.md#functions)
- [interface](ethers_contracts.IERC165.md#interface)
- [populateTransaction](ethers_contracts.IERC165.md#populatetransaction)
- [provider](ethers_contracts.IERC165.md#provider)
- [resolvedAddress](ethers_contracts.IERC165.md#resolvedaddress)
- [signer](ethers_contracts.IERC165.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.IERC165.md#_checkrunningevents)
- [\_deployed](ethers_contracts.IERC165.md#_deployed)
- [\_wrapEvent](ethers_contracts.IERC165.md#_wrapevent)
- [attach](ethers_contracts.IERC165.md#attach)
- [connect](ethers_contracts.IERC165.md#connect)
- [deployed](ethers_contracts.IERC165.md#deployed)
- [emit](ethers_contracts.IERC165.md#emit)
- [fallback](ethers_contracts.IERC165.md#fallback)
- [listenerCount](ethers_contracts.IERC165.md#listenercount)
- [listeners](ethers_contracts.IERC165.md#listeners)
- [off](ethers_contracts.IERC165.md#off)
- [on](ethers_contracts.IERC165.md#on)
- [once](ethers_contracts.IERC165.md#once)
- [queryFilter](ethers_contracts.IERC165.md#queryfilter)
- [removeAllListeners](ethers_contracts.IERC165.md#removealllisteners)
- [removeListener](ethers_contracts.IERC165.md#removelistener)
- [supportsInterface](ethers_contracts.IERC165.md#supportsinterface)
- [getContractAddress](ethers_contracts.IERC165.md#getcontractaddress)
- [getInterface](ethers_contracts.IERC165.md#getinterface)
- [isIndexed](ethers_contracts.IERC165.md#isindexed)

## Constructors

### constructor

• **new IERC165**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/IERC165.d.ts:100

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
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/IERC165.d.ts:112

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/IERC165.d.ts:110

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/IERC165.d.ts:82

___

### interface

• **interface**: `IERC165Interface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/IERC165.d.ts:80

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/IERC165.d.ts:122

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

▸ **attach**(`addressOrName`): [`IERC165`](ethers_contracts.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/IERC165.d.ts:41

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC165`](ethers_contracts.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/IERC165.d.ts:40

___

### deployed

▸ **deployed**(): `Promise`<[`IERC165`](ethers_contracts.IERC165.md)\>

#### Returns

`Promise`<[`IERC165`](ethers_contracts.IERC165.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/IERC165.d.ts:42

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

src/ethers-contracts/IERC165.d.ts:44

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

src/ethers-contracts/IERC165.d.ts:67

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165`](ethers_contracts.IERC165.md)

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

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IERC165.d.ts:47

▸ **off**(`eventName`, `listener`): [`IERC165`](ethers_contracts.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IERC165.d.ts:68

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165`](ethers_contracts.IERC165.md)

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

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IERC165.d.ts:51

▸ **on**(`eventName`, `listener`): [`IERC165`](ethers_contracts.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IERC165.d.ts:69

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165`](ethers_contracts.IERC165.md)

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

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IERC165.d.ts:55

▸ **once**(`eventName`, `listener`): [`IERC165`](ethers_contracts.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IERC165.d.ts:70

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

src/ethers-contracts/IERC165.d.ts:74

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC165`](ethers_contracts.IERC165.md)

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

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IERC165.d.ts:63

▸ **removeAllListeners**(`eventName?`): [`IERC165`](ethers_contracts.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IERC165.d.ts:72

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165`](ethers_contracts.IERC165.md)

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

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IERC165.d.ts:59

▸ **removeListener**(`eventName`, `listener`): [`IERC165`](ethers_contracts.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC165`](ethers_contracts.IERC165.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IERC165.d.ts:71

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/IERC165.d.ts:95

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
