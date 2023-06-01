[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / NFTBridgeSetup

# Class: NFTBridgeSetup

[ethers_contracts](../modules/ethers_contracts.md).NFTBridgeSetup

## Hierarchy

- `BaseContract`

  ↳ **`NFTBridgeSetup`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.NFTBridgeSetup.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.NFTBridgeSetup.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.NFTBridgeSetup.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.NFTBridgeSetup.md#_wrappedemits)
- [address](ethers_contracts.NFTBridgeSetup.md#address)
- [callStatic](ethers_contracts.NFTBridgeSetup.md#callstatic)
- [deployTransaction](ethers_contracts.NFTBridgeSetup.md#deploytransaction)
- [estimateGas](ethers_contracts.NFTBridgeSetup.md#estimategas)
- [filters](ethers_contracts.NFTBridgeSetup.md#filters)
- [functions](ethers_contracts.NFTBridgeSetup.md#functions)
- [interface](ethers_contracts.NFTBridgeSetup.md#interface)
- [populateTransaction](ethers_contracts.NFTBridgeSetup.md#populatetransaction)
- [provider](ethers_contracts.NFTBridgeSetup.md#provider)
- [resolvedAddress](ethers_contracts.NFTBridgeSetup.md#resolvedaddress)
- [signer](ethers_contracts.NFTBridgeSetup.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.NFTBridgeSetup.md#_checkrunningevents)
- [\_deployed](ethers_contracts.NFTBridgeSetup.md#_deployed)
- [\_wrapEvent](ethers_contracts.NFTBridgeSetup.md#_wrapevent)
- [attach](ethers_contracts.NFTBridgeSetup.md#attach)
- [connect](ethers_contracts.NFTBridgeSetup.md#connect)
- [deployed](ethers_contracts.NFTBridgeSetup.md#deployed)
- [emit](ethers_contracts.NFTBridgeSetup.md#emit)
- [fallback](ethers_contracts.NFTBridgeSetup.md#fallback)
- [listenerCount](ethers_contracts.NFTBridgeSetup.md#listenercount)
- [listeners](ethers_contracts.NFTBridgeSetup.md#listeners)
- [off](ethers_contracts.NFTBridgeSetup.md#off)
- [on](ethers_contracts.NFTBridgeSetup.md#on)
- [once](ethers_contracts.NFTBridgeSetup.md#once)
- [queryFilter](ethers_contracts.NFTBridgeSetup.md#queryfilter)
- [removeAllListeners](ethers_contracts.NFTBridgeSetup.md#removealllisteners)
- [removeListener](ethers_contracts.NFTBridgeSetup.md#removelistener)
- [setup](ethers_contracts.NFTBridgeSetup.md#setup)
- [getContractAddress](ethers_contracts.NFTBridgeSetup.md#getcontractaddress)
- [getInterface](ethers_contracts.NFTBridgeSetup.md#getinterface)
- [isIndexed](ethers_contracts.NFTBridgeSetup.md#isindexed)

## Constructors

### constructor

• **new NFTBridgeSetup**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `setup` | (`implementation`: `string`, `chainId`: `BigNumberish`, `wormhole`: `string`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `tokenImplementation`: `string`, `finality`: `BigNumberish`, `evmChainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:131

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
| `setup` | (`implementation`: `string`, `chainId`: `BigNumberish`, `wormhole`: `string`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `tokenImplementation`: `string`, `finality`: `BigNumberish`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:179

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

src/ethers-contracts/NFTBridgeSetup.d.ts:145

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setup` | (`implementation`: `string`, `chainId`: `BigNumberish`, `wormhole`: `string`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `tokenImplementation`: `string`, `finality`: `BigNumberish`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:105

___

### interface

• **interface**: `NFTBridgeSetupInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:103

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setup` | (`implementation`: `string`, `chainId`: `BigNumberish`, `wormhole`: `string`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `tokenImplementation`: `string`, `finality`: `BigNumberish`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:193

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

▸ **attach**(`addressOrName`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:64

___

### connect

▸ **connect**(`signerOrProvider`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:63

___

### deployed

▸ **deployed**(): `Promise`<[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)\>

#### Returns

`Promise`<[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:65

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

src/ethers-contracts/NFTBridgeSetup.d.ts:67

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

src/ethers-contracts/NFTBridgeSetup.d.ts:90

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

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

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:70

▸ **off**(`eventName`, `listener`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:91

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

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

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:74

▸ **on**(`eventName`, `listener`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:92

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

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

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:78

▸ **once**(`eventName`, `listener`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:93

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

src/ethers-contracts/NFTBridgeSetup.d.ts:97

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

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

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:86

▸ **removeAllListeners**(`eventName?`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:95

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

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

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:82

▸ **removeListener**(`eventName`, `listener`): [`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeSetup`](ethers_contracts.NFTBridgeSetup.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:94

___

### setup

▸ **setup**(`implementation`, `chainId`, `wormhole`, `governanceChainId`, `governanceContract`, `tokenImplementation`, `finality`, `evmChainId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `implementation` | `string` |
| `chainId` | `BigNumberish` |
| `wormhole` | `string` |
| `governanceChainId` | `BigNumberish` |
| `governanceContract` | `BytesLike` |
| `tokenImplementation` | `string` |
| `finality` | `BigNumberish` |
| `evmChainId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/NFTBridgeSetup.d.ts:119

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
