[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / BridgeSetup

# Class: BridgeSetup

[ethers_contracts](../modules/ethers_contracts.md).BridgeSetup

## Hierarchy

- `BaseContract`

  ↳ **`BridgeSetup`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.BridgeSetup.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.BridgeSetup.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.BridgeSetup.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.BridgeSetup.md#_wrappedemits)
- [address](ethers_contracts.BridgeSetup.md#address)
- [callStatic](ethers_contracts.BridgeSetup.md#callstatic)
- [deployTransaction](ethers_contracts.BridgeSetup.md#deploytransaction)
- [estimateGas](ethers_contracts.BridgeSetup.md#estimategas)
- [filters](ethers_contracts.BridgeSetup.md#filters)
- [functions](ethers_contracts.BridgeSetup.md#functions)
- [interface](ethers_contracts.BridgeSetup.md#interface)
- [populateTransaction](ethers_contracts.BridgeSetup.md#populatetransaction)
- [provider](ethers_contracts.BridgeSetup.md#provider)
- [resolvedAddress](ethers_contracts.BridgeSetup.md#resolvedaddress)
- [signer](ethers_contracts.BridgeSetup.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.BridgeSetup.md#_checkrunningevents)
- [\_deployed](ethers_contracts.BridgeSetup.md#_deployed)
- [\_wrapEvent](ethers_contracts.BridgeSetup.md#_wrapevent)
- [attach](ethers_contracts.BridgeSetup.md#attach)
- [connect](ethers_contracts.BridgeSetup.md#connect)
- [deployed](ethers_contracts.BridgeSetup.md#deployed)
- [emit](ethers_contracts.BridgeSetup.md#emit)
- [fallback](ethers_contracts.BridgeSetup.md#fallback)
- [listenerCount](ethers_contracts.BridgeSetup.md#listenercount)
- [listeners](ethers_contracts.BridgeSetup.md#listeners)
- [off](ethers_contracts.BridgeSetup.md#off)
- [on](ethers_contracts.BridgeSetup.md#on)
- [once](ethers_contracts.BridgeSetup.md#once)
- [queryFilter](ethers_contracts.BridgeSetup.md#queryfilter)
- [removeAllListeners](ethers_contracts.BridgeSetup.md#removealllisteners)
- [removeListener](ethers_contracts.BridgeSetup.md#removelistener)
- [setup](ethers_contracts.BridgeSetup.md#setup)
- [getContractAddress](ethers_contracts.BridgeSetup.md#getcontractaddress)
- [getInterface](ethers_contracts.BridgeSetup.md#getinterface)
- [isIndexed](ethers_contracts.BridgeSetup.md#isindexed)

## Constructors

### constructor

• **new BridgeSetup**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `setup` | (`implementation`: `string`, `chainId`: `BigNumberish`, `wormhole`: `string`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `tokenImplementation`: `string`, `WETH`: `string`, `finality`: `BigNumberish`, `evmChainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:134

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
| `setup` | (`implementation`: `string`, `chainId`: `BigNumberish`, `wormhole`: `string`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `tokenImplementation`: `string`, `WETH`: `string`, `finality`: `BigNumberish`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:183

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

src/ethers-contracts/BridgeSetup.d.ts:149

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setup` | (`implementation`: `string`, `chainId`: `BigNumberish`, `wormhole`: `string`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `tokenImplementation`: `string`, `WETH`: `string`, `finality`: `BigNumberish`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:106

___

### interface

• **interface**: `BridgeSetupInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:104

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setup` | (`implementation`: `string`, `chainId`: `BigNumberish`, `wormhole`: `string`, `governanceChainId`: `BigNumberish`, `governanceContract`: `BytesLike`, `tokenImplementation`: `string`, `WETH`: `string`, `finality`: `BigNumberish`, `evmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:198

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

▸ **attach**(`addressOrName`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:65

___

### connect

▸ **connect**(`signerOrProvider`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:64

___

### deployed

▸ **deployed**(): `Promise`<[`BridgeSetup`](ethers_contracts.BridgeSetup.md)\>

#### Returns

`Promise`<[`BridgeSetup`](ethers_contracts.BridgeSetup.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:66

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

src/ethers-contracts/BridgeSetup.d.ts:68

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

src/ethers-contracts/BridgeSetup.d.ts:91

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

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

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:71

▸ **off**(`eventName`, `listener`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:92

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

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

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:75

▸ **on**(`eventName`, `listener`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:93

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

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

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:79

▸ **once**(`eventName`, `listener`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:94

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

src/ethers-contracts/BridgeSetup.d.ts:98

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

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

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:87

▸ **removeAllListeners**(`eventName?`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:96

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

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

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:83

▸ **removeListener**(`eventName`, `listener`): [`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`BridgeSetup`](ethers_contracts.BridgeSetup.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:95

___

### setup

▸ **setup**(`implementation`, `chainId`, `wormhole`, `governanceChainId`, `governanceContract`, `tokenImplementation`, `WETH`, `finality`, `evmChainId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `implementation` | `string` |
| `chainId` | `BigNumberish` |
| `wormhole` | `string` |
| `governanceChainId` | `BigNumberish` |
| `governanceContract` | `BytesLike` |
| `tokenImplementation` | `string` |
| `WETH` | `string` |
| `finality` | `BigNumberish` |
| `evmChainId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeSetup.d.ts:121

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
