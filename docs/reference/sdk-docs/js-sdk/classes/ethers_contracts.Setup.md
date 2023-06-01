[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Setup

# Class: Setup

[ethers_contracts](../modules/ethers_contracts.md).Setup

## Hierarchy

- `BaseContract`

  ↳ **`Setup`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Setup.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.Setup.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.Setup.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.Setup.md#_wrappedemits)
- [address](ethers_contracts.Setup.md#address)
- [callStatic](ethers_contracts.Setup.md#callstatic)
- [deployTransaction](ethers_contracts.Setup.md#deploytransaction)
- [estimateGas](ethers_contracts.Setup.md#estimategas)
- [filters](ethers_contracts.Setup.md#filters)
- [functions](ethers_contracts.Setup.md#functions)
- [interface](ethers_contracts.Setup.md#interface)
- [populateTransaction](ethers_contracts.Setup.md#populatetransaction)
- [provider](ethers_contracts.Setup.md#provider)
- [resolvedAddress](ethers_contracts.Setup.md#resolvedaddress)
- [signer](ethers_contracts.Setup.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.Setup.md#_checkrunningevents)
- [\_deployed](ethers_contracts.Setup.md#_deployed)
- [\_wrapEvent](ethers_contracts.Setup.md#_wrapevent)
- [attach](ethers_contracts.Setup.md#attach)
- [connect](ethers_contracts.Setup.md#connect)
- [deployed](ethers_contracts.Setup.md#deployed)
- [emit](ethers_contracts.Setup.md#emit)
- [fallback](ethers_contracts.Setup.md#fallback)
- [listenerCount](ethers_contracts.Setup.md#listenercount)
- [listeners](ethers_contracts.Setup.md#listeners)
- [off](ethers_contracts.Setup.md#off)
- [on](ethers_contracts.Setup.md#on)
- [once](ethers_contracts.Setup.md#once)
- [queryFilter](ethers_contracts.Setup.md#queryfilter)
- [removeAllListeners](ethers_contracts.Setup.md#removealllisteners)
- [removeListener](ethers_contracts.Setup.md#removelistener)
- [setup](ethers_contracts.Setup.md#setup)
- [getContractAddress](ethers_contracts.Setup.md#getcontractaddress)
- [getInterface](ethers_contracts.Setup.md#getinterface)
- [isIndexed](ethers_contracts.Setup.md#isindexed)

## Constructors

### constructor

• **new Setup**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `setup` | (`implementation`: `string`, `initialGuardians`: `string`[], `chainId`: `BigNumberish`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `evmChainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/Setup.d.ts:125

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
| `setup` | (`implementation`: `string`, `initialGuardians`: `string`[], `chainId`: `BigNumberish`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/Setup.d.ts:171

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

src/ethers-contracts/Setup.d.ts:137

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setup` | (`implementation`: `string`, `initialGuardians`: `string`[], `chainId`: `BigNumberish`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/Setup.d.ts:103

___

### interface

• **interface**: `SetupInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/Setup.d.ts:101

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setup` | (`implementation`: `string`, `initialGuardians`: `string`[], `chainId`: `BigNumberish`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/Setup.d.ts:183

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

▸ **attach**(`addressOrName`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/Setup.d.ts:62

___

### connect

▸ **connect**(`signerOrProvider`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/Setup.d.ts:61

___

### deployed

▸ **deployed**(): `Promise`<[`Setup`](ethers_contracts.Setup.md)\>

#### Returns

`Promise`<[`Setup`](ethers_contracts.Setup.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/Setup.d.ts:63

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

src/ethers-contracts/Setup.d.ts:65

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

src/ethers-contracts/Setup.d.ts:88

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Setup`](ethers_contracts.Setup.md)

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

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Setup.d.ts:68

▸ **off**(`eventName`, `listener`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Setup.d.ts:89

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Setup`](ethers_contracts.Setup.md)

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

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Setup.d.ts:72

▸ **on**(`eventName`, `listener`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Setup.d.ts:90

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Setup`](ethers_contracts.Setup.md)

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

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Setup.d.ts:76

▸ **once**(`eventName`, `listener`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Setup.d.ts:91

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

src/ethers-contracts/Setup.d.ts:95

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Setup`](ethers_contracts.Setup.md)

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

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Setup.d.ts:84

▸ **removeAllListeners**(`eventName?`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Setup.d.ts:93

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Setup`](ethers_contracts.Setup.md)

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

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Setup.d.ts:80

▸ **removeListener**(`eventName`, `listener`): [`Setup`](ethers_contracts.Setup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Setup`](ethers_contracts.Setup.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Setup.d.ts:92

___

### setup

▸ **setup**(`implementation`, `initialGuardians`, `chainId`, `governanceChainId`, `governanceContract`, `evmChainId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `implementation` | `string` |
| `initialGuardians` | `string`[] |
| `chainId` | `BigNumberish` |
| `governanceChainId` | `BigNumberish` |
| `governanceContract` | `BytesLike` |
| `evmChainId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Setup.d.ts:115

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
