[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Getters

# Class: Getters

[ethers_contracts](../modules/ethers_contracts.md).Getters

## Hierarchy

- `BaseContract`

  ↳ **`Getters`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Getters.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.Getters.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.Getters.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.Getters.md#_wrappedemits)
- [address](ethers_contracts.Getters.md#address)
- [callStatic](ethers_contracts.Getters.md#callstatic)
- [deployTransaction](ethers_contracts.Getters.md#deploytransaction)
- [estimateGas](ethers_contracts.Getters.md#estimategas)
- [filters](ethers_contracts.Getters.md#filters)
- [functions](ethers_contracts.Getters.md#functions)
- [interface](ethers_contracts.Getters.md#interface)
- [populateTransaction](ethers_contracts.Getters.md#populatetransaction)
- [provider](ethers_contracts.Getters.md#provider)
- [resolvedAddress](ethers_contracts.Getters.md#resolvedaddress)
- [signer](ethers_contracts.Getters.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.Getters.md#_checkrunningevents)
- [\_deployed](ethers_contracts.Getters.md#_deployed)
- [\_wrapEvent](ethers_contracts.Getters.md#_wrapevent)
- [attach](ethers_contracts.Getters.md#attach)
- [chainId](ethers_contracts.Getters.md#chainid)
- [connect](ethers_contracts.Getters.md#connect)
- [deployed](ethers_contracts.Getters.md#deployed)
- [emit](ethers_contracts.Getters.md#emit)
- [evmChainId](ethers_contracts.Getters.md#evmchainid)
- [fallback](ethers_contracts.Getters.md#fallback)
- [getCurrentGuardianSetIndex](ethers_contracts.Getters.md#getcurrentguardiansetindex)
- [getGuardianSet](ethers_contracts.Getters.md#getguardianset)
- [getGuardianSetExpiry](ethers_contracts.Getters.md#getguardiansetexpiry)
- [governanceActionIsConsumed](ethers_contracts.Getters.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.Getters.md#governancechainid)
- [governanceContract](ethers_contracts.Getters.md#governancecontract)
- [isFork](ethers_contracts.Getters.md#isfork)
- [isInitialized](ethers_contracts.Getters.md#isinitialized)
- [listenerCount](ethers_contracts.Getters.md#listenercount)
- [listeners](ethers_contracts.Getters.md#listeners)
- [messageFee](ethers_contracts.Getters.md#messagefee)
- [nextSequence](ethers_contracts.Getters.md#nextsequence)
- [off](ethers_contracts.Getters.md#off)
- [on](ethers_contracts.Getters.md#on)
- [once](ethers_contracts.Getters.md#once)
- [queryFilter](ethers_contracts.Getters.md#queryfilter)
- [removeAllListeners](ethers_contracts.Getters.md#removealllisteners)
- [removeListener](ethers_contracts.Getters.md#removelistener)
- [getContractAddress](ethers_contracts.Getters.md#getcontractaddress)
- [getInterface](ethers_contracts.Getters.md#getinterface)
- [isIndexed](ethers_contracts.Getters.md#isindexed)

## Constructors

### constructor

• **new Getters**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentGuardianSetIndex` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getGuardianSet` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }\> |
| `getGuardianSetExpiry` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/Getters.d.ts:230

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
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentGuardianSetIndex` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGuardianSet` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGuardianSetExpiry` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/Getters.d.ts:267

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/Getters.d.ts:265

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getCurrentGuardianSetIndex` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `getGuardianSet` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }]\> |
| `getGuardianSetExpiry` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/Getters.d.ts:163

___

### interface

• **interface**: `GettersInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/Getters.d.ts:161

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentGuardianSetIndex` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getGuardianSet` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getGuardianSetExpiry` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/Getters.d.ts:302

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

▸ **attach**(`addressOrName`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/Getters.d.ts:122

___

### chainId

▸ **chainId**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:216

___

### connect

▸ **connect**(`signerOrProvider`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/Getters.d.ts:121

___

### deployed

▸ **deployed**(): `Promise`<[`Getters`](ethers_contracts.Getters.md)\>

#### Returns

`Promise`<[`Getters`](ethers_contracts.Getters.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/Getters.d.ts:123

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

### evmChainId

▸ **evmChainId**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:218

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

### getCurrentGuardianSetIndex

▸ **getCurrentGuardianSetIndex**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:205

___

### getGuardianSet

▸ **getGuardianSet**(`index`, `overrides?`): `Promise`<[`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }\>

#### Defined in

src/ethers-contracts/Getters.d.ts:200

___

### getGuardianSetExpiry

▸ **getGuardianSetExpiry**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:207

___

### governanceActionIsConsumed

▸ **governanceActionIsConsumed**(`hash`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:209

___

### governanceChainId

▸ **governanceChainId**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:222

___

### governanceContract

▸ **governanceContract**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:224

___

### isFork

▸ **isFork**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:220

___

### isInitialized

▸ **isInitialized**(`impl`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `impl` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:214

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

src/ethers-contracts/Getters.d.ts:125

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

src/ethers-contracts/Getters.d.ts:148

___

### messageFee

▸ **messageFee**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:226

___

### nextSequence

▸ **nextSequence**(`emitter`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/Getters.d.ts:228

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Getters`](ethers_contracts.Getters.md)

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

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Getters.d.ts:128

▸ **off**(`eventName`, `listener`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Getters.d.ts:149

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Getters`](ethers_contracts.Getters.md)

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

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Getters.d.ts:132

▸ **on**(`eventName`, `listener`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Getters.d.ts:150

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Getters`](ethers_contracts.Getters.md)

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

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Getters.d.ts:136

▸ **once**(`eventName`, `listener`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Getters.d.ts:151

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

src/ethers-contracts/Getters.d.ts:155

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Getters`](ethers_contracts.Getters.md)

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

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Getters.d.ts:144

▸ **removeAllListeners**(`eventName?`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Getters.d.ts:153

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Getters`](ethers_contracts.Getters.md)

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

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Getters.d.ts:140

▸ **removeListener**(`eventName`, `listener`): [`Getters`](ethers_contracts.Getters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Getters`](ethers_contracts.Getters.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Getters.d.ts:152

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
