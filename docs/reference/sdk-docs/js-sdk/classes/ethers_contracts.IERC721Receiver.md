[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC721Receiver

# Class: IERC721Receiver

[ethers_contracts](../modules/ethers_contracts.md).IERC721Receiver

## Hierarchy

- `BaseContract`

  ↳ **`IERC721Receiver`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC721Receiver.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.IERC721Receiver.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.IERC721Receiver.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.IERC721Receiver.md#_wrappedemits)
- [address](ethers_contracts.IERC721Receiver.md#address)
- [callStatic](ethers_contracts.IERC721Receiver.md#callstatic)
- [deployTransaction](ethers_contracts.IERC721Receiver.md#deploytransaction)
- [estimateGas](ethers_contracts.IERC721Receiver.md#estimategas)
- [filters](ethers_contracts.IERC721Receiver.md#filters)
- [functions](ethers_contracts.IERC721Receiver.md#functions)
- [interface](ethers_contracts.IERC721Receiver.md#interface)
- [populateTransaction](ethers_contracts.IERC721Receiver.md#populatetransaction)
- [provider](ethers_contracts.IERC721Receiver.md#provider)
- [resolvedAddress](ethers_contracts.IERC721Receiver.md#resolvedaddress)
- [signer](ethers_contracts.IERC721Receiver.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.IERC721Receiver.md#_checkrunningevents)
- [\_deployed](ethers_contracts.IERC721Receiver.md#_deployed)
- [\_wrapEvent](ethers_contracts.IERC721Receiver.md#_wrapevent)
- [attach](ethers_contracts.IERC721Receiver.md#attach)
- [connect](ethers_contracts.IERC721Receiver.md#connect)
- [deployed](ethers_contracts.IERC721Receiver.md#deployed)
- [emit](ethers_contracts.IERC721Receiver.md#emit)
- [fallback](ethers_contracts.IERC721Receiver.md#fallback)
- [listenerCount](ethers_contracts.IERC721Receiver.md#listenercount)
- [listeners](ethers_contracts.IERC721Receiver.md#listeners)
- [off](ethers_contracts.IERC721Receiver.md#off)
- [on](ethers_contracts.IERC721Receiver.md#on)
- [onERC721Received](ethers_contracts.IERC721Receiver.md#onerc721received)
- [once](ethers_contracts.IERC721Receiver.md#once)
- [queryFilter](ethers_contracts.IERC721Receiver.md#queryfilter)
- [removeAllListeners](ethers_contracts.IERC721Receiver.md#removealllisteners)
- [removeListener](ethers_contracts.IERC721Receiver.md#removelistener)
- [getContractAddress](ethers_contracts.IERC721Receiver.md#getcontractaddress)
- [getInterface](ethers_contracts.IERC721Receiver.md#getinterface)
- [isIndexed](ethers_contracts.IERC721Receiver.md#isindexed)

## Constructors

### constructor

• **new IERC721Receiver**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `onERC721Received` | (`operator`: `string`, `from`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:107

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
| `onERC721Received` | (`operator`: `string`, `from`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:122

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:120

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onERC721Received` | (`operator`: `string`, `from`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:83

___

### interface

• **interface**: `IERC721ReceiverInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:81

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onERC721Received` | (`operator`: `string`, `from`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:135

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

▸ **attach**(`addressOrName`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:42

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:41

___

### deployed

▸ **deployed**(): `Promise`<[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)\>

#### Returns

`Promise`<[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:43

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

src/ethers-contracts/IERC721Receiver.d.ts:45

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

src/ethers-contracts/IERC721Receiver.d.ts:68

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

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

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:48

▸ **off**(`eventName`, `listener`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:69

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

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

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:52

▸ **on**(`eventName`, `listener`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:70

___

### onERC721Received

▸ **onERC721Received**(`operator`, `from`, `tokenId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom} by `operator` from `from`, this function is called. It must return its Solidity selector to confirm the token transfer. If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted. The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `from` | `string` |
| `tokenId` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:99

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

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

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:56

▸ **once**(`eventName`, `listener`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:71

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

src/ethers-contracts/IERC721Receiver.d.ts:75

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

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

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:64

▸ **removeAllListeners**(`eventName?`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:73

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

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

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:60

▸ **removeListener**(`eventName`, `listener`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IERC721Receiver.d.ts:72

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
