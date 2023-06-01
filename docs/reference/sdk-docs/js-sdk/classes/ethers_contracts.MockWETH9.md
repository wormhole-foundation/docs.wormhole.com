[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / MockWETH9

# Class: MockWETH9

[ethers_contracts](../modules/ethers_contracts.md).MockWETH9

## Hierarchy

- `BaseContract`

  ↳ **`MockWETH9`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.MockWETH9.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.MockWETH9.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.MockWETH9.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.MockWETH9.md#_wrappedemits)
- [address](ethers_contracts.MockWETH9.md#address)
- [callStatic](ethers_contracts.MockWETH9.md#callstatic)
- [deployTransaction](ethers_contracts.MockWETH9.md#deploytransaction)
- [estimateGas](ethers_contracts.MockWETH9.md#estimategas)
- [filters](ethers_contracts.MockWETH9.md#filters)
- [functions](ethers_contracts.MockWETH9.md#functions)
- [interface](ethers_contracts.MockWETH9.md#interface)
- [populateTransaction](ethers_contracts.MockWETH9.md#populatetransaction)
- [provider](ethers_contracts.MockWETH9.md#provider)
- [resolvedAddress](ethers_contracts.MockWETH9.md#resolvedaddress)
- [signer](ethers_contracts.MockWETH9.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.MockWETH9.md#_checkrunningevents)
- [\_deployed](ethers_contracts.MockWETH9.md#_deployed)
- [\_wrapEvent](ethers_contracts.MockWETH9.md#_wrapevent)
- [allowance](ethers_contracts.MockWETH9.md#allowance)
- [approve](ethers_contracts.MockWETH9.md#approve)
- [attach](ethers_contracts.MockWETH9.md#attach)
- [balanceOf](ethers_contracts.MockWETH9.md#balanceof)
- [connect](ethers_contracts.MockWETH9.md#connect)
- [decimals](ethers_contracts.MockWETH9.md#decimals)
- [deployed](ethers_contracts.MockWETH9.md#deployed)
- [deposit](ethers_contracts.MockWETH9.md#deposit)
- [emit](ethers_contracts.MockWETH9.md#emit)
- [fallback](ethers_contracts.MockWETH9.md#fallback)
- [listenerCount](ethers_contracts.MockWETH9.md#listenercount)
- [listeners](ethers_contracts.MockWETH9.md#listeners)
- [name](ethers_contracts.MockWETH9.md#name)
- [off](ethers_contracts.MockWETH9.md#off)
- [on](ethers_contracts.MockWETH9.md#on)
- [once](ethers_contracts.MockWETH9.md#once)
- [queryFilter](ethers_contracts.MockWETH9.md#queryfilter)
- [removeAllListeners](ethers_contracts.MockWETH9.md#removealllisteners)
- [removeListener](ethers_contracts.MockWETH9.md#removelistener)
- [symbol](ethers_contracts.MockWETH9.md#symbol)
- [totalSupply](ethers_contracts.MockWETH9.md#totalsupply)
- [transfer](ethers_contracts.MockWETH9.md#transfer)
- [transferFrom](ethers_contracts.MockWETH9.md#transferfrom)
- [withdraw](ethers_contracts.MockWETH9.md#withdraw)
- [getContractAddress](ethers_contracts.MockWETH9.md#getcontractaddress)
- [getInterface](ethers_contracts.MockWETH9.md#getinterface)
- [isIndexed](ethers_contracts.MockWETH9.md#isindexed)

## Constructors

### constructor

• **new MockWETH9**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `deposit` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:248

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
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:347

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`src?`: ``null`` \| `string`, `guy?`: ``null`` \| `string`, `wad?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `guy`: `string` ; `src`: `string` ; `wad`: `BigNumber`  }\> |
| `Approval(address,address,uint256)` | (`src?`: ``null`` \| `string`, `guy?`: ``null`` \| `string`, `wad?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `guy`: `string` ; `src`: `string` ; `wad`: `BigNumber`  }\> |
| `Deposit` | (`dst?`: ``null`` \| `string`, `wad?`: ``null``) => `TypedEventFilter`<[`string`, `BigNumber`], { `dst`: `string` ; `wad`: `BigNumber`  }\> |
| `Deposit(address,uint256)` | (`dst?`: ``null`` \| `string`, `wad?`: ``null``) => `TypedEventFilter`<[`string`, `BigNumber`], { `dst`: `string` ; `wad`: `BigNumber`  }\> |
| `Transfer` | (`src?`: ``null`` \| `string`, `dst?`: ``null`` \| `string`, `wad?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `dst`: `string` ; `src`: `string` ; `wad`: `BigNumber`  }\> |
| `Transfer(address,address,uint256)` | (`src?`: ``null`` \| `string`, `dst?`: ``null`` \| `string`, `wad?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `dst`: `string` ; `src`: `string` ; `wad`: `BigNumber`  }\> |
| `Withdrawal` | (`src?`: ``null`` \| `string`, `wad?`: ``null``) => `TypedEventFilter`<[`string`, `BigNumber`], { `src`: `string` ; `wad`: `BigNumber`  }\> |
| `Withdrawal(address,uint256)` | (`src?`: ``null`` \| `string`, `wad?`: ``null``) => `TypedEventFilter`<[`string`, `BigNumber`], { `src`: `string` ; `wad`: `BigNumber`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:289

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:158

___

### interface

• **interface**: `MockWETH9Interface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:156

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:393

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

### allowance

▸ **allowance**(`arg0`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:204

___

### approve

▸ **approve**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:229

___

### attach

▸ **attach**(`addressOrName`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:117

___

### balanceOf

▸ **balanceOf**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:210

___

### connect

▸ **connect**(`signerOrProvider`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:116

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:212

___

### deployed

▸ **deployed**(): `Promise`<[`MockWETH9`](ethers_contracts.MockWETH9.md)\>

#### Returns

`Promise`<[`MockWETH9`](ethers_contracts.MockWETH9.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:118

___

### deposit

▸ **deposit**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:218

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

src/ethers-contracts/MockWETH9.d.ts:120

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

src/ethers-contracts/MockWETH9.d.ts:143

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:214

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

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

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:123

▸ **off**(`eventName`, `listener`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:144

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

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

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:127

▸ **on**(`eventName`, `listener`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:145

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

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

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:131

▸ **once**(`eventName`, `listener`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:146

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

src/ethers-contracts/MockWETH9.d.ts:150

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

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

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:139

▸ **removeAllListeners**(`eventName?`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:148

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

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

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:135

▸ **removeListener**(`eventName`, `listener`): [`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockWETH9`](ethers_contracts.MockWETH9.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:147

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:216

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:227

___

### transfer

▸ **transfer**(`dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:235

___

### transferFrom

▸ **transferFrom**(`src`, `dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:241

___

### withdraw

▸ **withdraw**(`wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockWETH9.d.ts:222

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
