[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / NFTBridgeGetters

# Class: NFTBridgeGetters

[ethers_contracts](../modules/ethers_contracts.md).NFTBridgeGetters

## Hierarchy

- `BaseContract`

  ↳ **`NFTBridgeGetters`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.NFTBridgeGetters.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.NFTBridgeGetters.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.NFTBridgeGetters.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.NFTBridgeGetters.md#_wrappedemits)
- [address](ethers_contracts.NFTBridgeGetters.md#address)
- [callStatic](ethers_contracts.NFTBridgeGetters.md#callstatic)
- [deployTransaction](ethers_contracts.NFTBridgeGetters.md#deploytransaction)
- [estimateGas](ethers_contracts.NFTBridgeGetters.md#estimategas)
- [filters](ethers_contracts.NFTBridgeGetters.md#filters)
- [functions](ethers_contracts.NFTBridgeGetters.md#functions)
- [interface](ethers_contracts.NFTBridgeGetters.md#interface)
- [populateTransaction](ethers_contracts.NFTBridgeGetters.md#populatetransaction)
- [provider](ethers_contracts.NFTBridgeGetters.md#provider)
- [resolvedAddress](ethers_contracts.NFTBridgeGetters.md#resolvedaddress)
- [signer](ethers_contracts.NFTBridgeGetters.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.NFTBridgeGetters.md#_checkrunningevents)
- [\_deployed](ethers_contracts.NFTBridgeGetters.md#_deployed)
- [\_wrapEvent](ethers_contracts.NFTBridgeGetters.md#_wrapevent)
- [attach](ethers_contracts.NFTBridgeGetters.md#attach)
- [bridgeContracts](ethers_contracts.NFTBridgeGetters.md#bridgecontracts)
- [chainId](ethers_contracts.NFTBridgeGetters.md#chainid)
- [connect](ethers_contracts.NFTBridgeGetters.md#connect)
- [deployed](ethers_contracts.NFTBridgeGetters.md#deployed)
- [emit](ethers_contracts.NFTBridgeGetters.md#emit)
- [evmChainId](ethers_contracts.NFTBridgeGetters.md#evmchainid)
- [fallback](ethers_contracts.NFTBridgeGetters.md#fallback)
- [finality](ethers_contracts.NFTBridgeGetters.md#finality)
- [governanceActionIsConsumed](ethers_contracts.NFTBridgeGetters.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.NFTBridgeGetters.md#governancechainid)
- [governanceContract](ethers_contracts.NFTBridgeGetters.md#governancecontract)
- [isFork](ethers_contracts.NFTBridgeGetters.md#isfork)
- [isInitialized](ethers_contracts.NFTBridgeGetters.md#isinitialized)
- [isTransferCompleted](ethers_contracts.NFTBridgeGetters.md#istransfercompleted)
- [isWrappedAsset](ethers_contracts.NFTBridgeGetters.md#iswrappedasset)
- [listenerCount](ethers_contracts.NFTBridgeGetters.md#listenercount)
- [listeners](ethers_contracts.NFTBridgeGetters.md#listeners)
- [off](ethers_contracts.NFTBridgeGetters.md#off)
- [on](ethers_contracts.NFTBridgeGetters.md#on)
- [once](ethers_contracts.NFTBridgeGetters.md#once)
- [queryFilter](ethers_contracts.NFTBridgeGetters.md#queryfilter)
- [removeAllListeners](ethers_contracts.NFTBridgeGetters.md#removealllisteners)
- [removeListener](ethers_contracts.NFTBridgeGetters.md#removelistener)
- [splCache](ethers_contracts.NFTBridgeGetters.md#splcache)
- [tokenImplementation](ethers_contracts.NFTBridgeGetters.md#tokenimplementation)
- [wormhole](ethers_contracts.NFTBridgeGetters.md#wormhole)
- [wrappedAsset](ethers_contracts.NFTBridgeGetters.md#wrappedasset)
- [getContractAddress](ethers_contracts.NFTBridgeGetters.md#getcontractaddress)
- [getInterface](ethers_contracts.NFTBridgeGetters.md#getinterface)
- [isIndexed](ethers_contracts.NFTBridgeGetters.md#isindexed)

## Constructors

### constructor

• **new NFTBridgeGetters**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isTransferCompleted` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isWrappedAsset` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `splCache` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `name`: `string` ; `symbol`: `string`  }\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:275

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
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isTransferCompleted` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isWrappedAsset` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `splCache` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:325

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:323

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isTransferCompleted` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isWrappedAsset` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `splCache` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `string`] & { `name`: `string` ; `symbol`: `string`  }]\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:178

___

### interface

• **interface**: `NFTBridgeGettersInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:176

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isTransferCompleted` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isWrappedAsset` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `splCache` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:376

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

▸ **attach**(`addressOrName`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:137

___

### bridgeContracts

▸ **bridgeContracts**(`chainId_`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId_` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:259

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

src/ethers-contracts/NFTBridgeGetters.d.ts:243

___

### connect

▸ **connect**(`signerOrProvider`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:136

___

### deployed

▸ **deployed**(): `Promise`<[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)\>

#### Returns

`Promise`<[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:138

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

src/ethers-contracts/NFTBridgeGetters.d.ts:245

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

### finality

▸ **finality**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:273

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

src/ethers-contracts/NFTBridgeGetters.d.ts:229

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

src/ethers-contracts/NFTBridgeGetters.d.ts:249

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

src/ethers-contracts/NFTBridgeGetters.d.ts:251

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

src/ethers-contracts/NFTBridgeGetters.d.ts:247

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

src/ethers-contracts/NFTBridgeGetters.d.ts:234

___

### isTransferCompleted

▸ **isTransferCompleted**(`hash`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:236

___

### isWrappedAsset

▸ **isWrappedAsset**(`token`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:266

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

src/ethers-contracts/NFTBridgeGetters.d.ts:140

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

src/ethers-contracts/NFTBridgeGetters.d.ts:163

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

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

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:143

▸ **off**(`eventName`, `listener`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:164

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

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

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:147

▸ **on**(`eventName`, `listener`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:165

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

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

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:151

▸ **once**(`eventName`, `listener`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:166

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

src/ethers-contracts/NFTBridgeGetters.d.ts:170

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

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

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:159

▸ **removeAllListeners**(`eventName?`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:168

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

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

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:155

▸ **removeListener**(`eventName`, `listener`): [`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridgeGetters`](ethers_contracts.NFTBridgeGetters.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:167

___

### splCache

▸ **splCache**(`tokenId`, `overrides?`): `Promise`<[`string`, `string`] & { `name`: `string` ; `symbol`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `string`] & { `name`: `string` ; `symbol`: `string`  }\>

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:268

___

### tokenImplementation

▸ **tokenImplementation**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:264

___

### wormhole

▸ **wormhole**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:241

___

### wrappedAsset

▸ **wrappedAsset**(`tokenChainId`, `tokenAddress`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenChainId` | `BigNumberish` |
| `tokenAddress` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/NFTBridgeGetters.d.ts:253

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
