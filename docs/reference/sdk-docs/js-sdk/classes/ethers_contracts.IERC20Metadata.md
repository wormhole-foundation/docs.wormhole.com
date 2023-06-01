[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC20Metadata

# Class: IERC20Metadata

[ethers_contracts](../modules/ethers_contracts.md).IERC20Metadata

## Hierarchy

- `BaseContract`

  ↳ **`IERC20Metadata`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC20Metadata.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.IERC20Metadata.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.IERC20Metadata.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.IERC20Metadata.md#_wrappedemits)
- [address](ethers_contracts.IERC20Metadata.md#address)
- [callStatic](ethers_contracts.IERC20Metadata.md#callstatic)
- [deployTransaction](ethers_contracts.IERC20Metadata.md#deploytransaction)
- [estimateGas](ethers_contracts.IERC20Metadata.md#estimategas)
- [filters](ethers_contracts.IERC20Metadata.md#filters)
- [functions](ethers_contracts.IERC20Metadata.md#functions)
- [interface](ethers_contracts.IERC20Metadata.md#interface)
- [populateTransaction](ethers_contracts.IERC20Metadata.md#populatetransaction)
- [provider](ethers_contracts.IERC20Metadata.md#provider)
- [resolvedAddress](ethers_contracts.IERC20Metadata.md#resolvedaddress)
- [signer](ethers_contracts.IERC20Metadata.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.IERC20Metadata.md#_checkrunningevents)
- [\_deployed](ethers_contracts.IERC20Metadata.md#_deployed)
- [\_wrapEvent](ethers_contracts.IERC20Metadata.md#_wrapevent)
- [allowance](ethers_contracts.IERC20Metadata.md#allowance)
- [approve](ethers_contracts.IERC20Metadata.md#approve)
- [attach](ethers_contracts.IERC20Metadata.md#attach)
- [balanceOf](ethers_contracts.IERC20Metadata.md#balanceof)
- [connect](ethers_contracts.IERC20Metadata.md#connect)
- [decimals](ethers_contracts.IERC20Metadata.md#decimals)
- [deployed](ethers_contracts.IERC20Metadata.md#deployed)
- [emit](ethers_contracts.IERC20Metadata.md#emit)
- [fallback](ethers_contracts.IERC20Metadata.md#fallback)
- [listenerCount](ethers_contracts.IERC20Metadata.md#listenercount)
- [listeners](ethers_contracts.IERC20Metadata.md#listeners)
- [name](ethers_contracts.IERC20Metadata.md#name)
- [off](ethers_contracts.IERC20Metadata.md#off)
- [on](ethers_contracts.IERC20Metadata.md#on)
- [once](ethers_contracts.IERC20Metadata.md#once)
- [queryFilter](ethers_contracts.IERC20Metadata.md#queryfilter)
- [removeAllListeners](ethers_contracts.IERC20Metadata.md#removealllisteners)
- [removeListener](ethers_contracts.IERC20Metadata.md#removelistener)
- [symbol](ethers_contracts.IERC20Metadata.md#symbol)
- [totalSupply](ethers_contracts.IERC20Metadata.md#totalsupply)
- [transfer](ethers_contracts.IERC20Metadata.md#transfer)
- [transferFrom](ethers_contracts.IERC20Metadata.md#transferfrom)
- [getContractAddress](ethers_contracts.IERC20Metadata.md#getcontractaddress)
- [getInterface](ethers_contracts.IERC20Metadata.md#getinterface)
- [isIndexed](ethers_contracts.IERC20Metadata.md#isindexed)

## Constructors

### constructor

• **new IERC20Metadata**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:266

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
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:368

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `owner`: `string` ; `spender`: `string` ; `value`: `BigNumber`  }\> |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `owner`: `string` ; `spender`: `string` ; `value`: `BigNumber`  }\> |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:330

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:140

___

### interface

• **interface**: `IERC20MetadataInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:138

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:432

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

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:207

___

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:216

___

### attach

▸ **attach**(`addressOrName`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:99

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

Returns the amount of tokens owned by `account`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:225

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:98

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

Returns the decimals places of the token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:264

___

### deployed

▸ **deployed**(): `Promise`<[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)\>

#### Returns

`Promise`<[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:100

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

src/ethers-contracts/IERC20Metadata.d.ts:102

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

src/ethers-contracts/IERC20Metadata.d.ts:125

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

Returns the name of the token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:254

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

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

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:105

▸ **off**(`eventName`, `listener`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:126

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

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

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:109

▸ **on**(`eventName`, `listener`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:127

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

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

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:113

▸ **once**(`eventName`, `listener`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:128

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

src/ethers-contracts/IERC20Metadata.d.ts:132

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

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

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:121

▸ **removeAllListeners**(`eventName?`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:130

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

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

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:117

▸ **removeListener**(`eventName`, `listener`): [`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC20Metadata`](ethers_contracts.IERC20Metadata.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:129

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

Returns the symbol of the token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:259

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

Returns the amount of tokens in existence.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:230

___

### transfer

▸ **transfer**(`recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:235

___

### transferFrom

▸ **transferFrom**(`sender`, `recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC20Metadata.d.ts:244

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
