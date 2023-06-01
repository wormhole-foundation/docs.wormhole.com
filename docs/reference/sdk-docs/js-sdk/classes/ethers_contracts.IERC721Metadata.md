[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC721Metadata

# Class: IERC721Metadata

[ethers_contracts](../modules/ethers_contracts.md).IERC721Metadata

## Hierarchy

- `BaseContract`

  ↳ **`IERC721Metadata`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC721Metadata.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.IERC721Metadata.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.IERC721Metadata.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.IERC721Metadata.md#_wrappedemits)
- [address](ethers_contracts.IERC721Metadata.md#address)
- [callStatic](ethers_contracts.IERC721Metadata.md#callstatic)
- [deployTransaction](ethers_contracts.IERC721Metadata.md#deploytransaction)
- [estimateGas](ethers_contracts.IERC721Metadata.md#estimategas)
- [filters](ethers_contracts.IERC721Metadata.md#filters)
- [functions](ethers_contracts.IERC721Metadata.md#functions)
- [interface](ethers_contracts.IERC721Metadata.md#interface)
- [populateTransaction](ethers_contracts.IERC721Metadata.md#populatetransaction)
- [provider](ethers_contracts.IERC721Metadata.md#provider)
- [resolvedAddress](ethers_contracts.IERC721Metadata.md#resolvedaddress)
- [signer](ethers_contracts.IERC721Metadata.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.IERC721Metadata.md#_checkrunningevents)
- [\_deployed](ethers_contracts.IERC721Metadata.md#_deployed)
- [\_wrapEvent](ethers_contracts.IERC721Metadata.md#_wrapevent)
- [approve](ethers_contracts.IERC721Metadata.md#approve)
- [attach](ethers_contracts.IERC721Metadata.md#attach)
- [balanceOf](ethers_contracts.IERC721Metadata.md#balanceof)
- [connect](ethers_contracts.IERC721Metadata.md#connect)
- [deployed](ethers_contracts.IERC721Metadata.md#deployed)
- [emit](ethers_contracts.IERC721Metadata.md#emit)
- [fallback](ethers_contracts.IERC721Metadata.md#fallback)
- [getApproved](ethers_contracts.IERC721Metadata.md#getapproved)
- [isApprovedForAll](ethers_contracts.IERC721Metadata.md#isapprovedforall)
- [listenerCount](ethers_contracts.IERC721Metadata.md#listenercount)
- [listeners](ethers_contracts.IERC721Metadata.md#listeners)
- [name](ethers_contracts.IERC721Metadata.md#name)
- [off](ethers_contracts.IERC721Metadata.md#off)
- [on](ethers_contracts.IERC721Metadata.md#on)
- [once](ethers_contracts.IERC721Metadata.md#once)
- [ownerOf](ethers_contracts.IERC721Metadata.md#ownerof)
- [queryFilter](ethers_contracts.IERC721Metadata.md#queryfilter)
- [removeAllListeners](ethers_contracts.IERC721Metadata.md#removealllisteners)
- [removeListener](ethers_contracts.IERC721Metadata.md#removelistener)
- [safeTransferFrom(address,address,uint256)](ethers_contracts.IERC721Metadata.md#safetransferfrom(address,address,uint256))
- [safeTransferFrom(address,address,uint256,bytes)](ethers_contracts.IERC721Metadata.md#safetransferfrom(address,address,uint256,bytes))
- [setApprovalForAll](ethers_contracts.IERC721Metadata.md#setapprovalforall)
- [supportsInterface](ethers_contracts.IERC721Metadata.md#supportsinterface)
- [symbol](ethers_contracts.IERC721Metadata.md#symbol)
- [tokenURI](ethers_contracts.IERC721Metadata.md#tokenuri)
- [transferFrom](ethers_contracts.IERC721Metadata.md#transferfrom)
- [getContractAddress](ethers_contracts.IERC721Metadata.md#getcontractaddress)
- [getInterface](ethers_contracts.IERC721Metadata.md#getinterface)
- [isIndexed](ethers_contracts.IERC721Metadata.md#isindexed)

## Constructors

### constructor

• **new IERC721Metadata**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `tokenURI` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:392

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
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tokenURI` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:549

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `approved?`: ``null`` \| `string`, `tokenId?`: ``null`` \| `BigNumberish`) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `approved`: `string` ; `owner`: `string` ; `tokenId`: `BigNumber`  }\> |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `approved?`: ``null`` \| `string`, `tokenId?`: ``null`` \| `BigNumberish`) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `approved`: `string` ; `owner`: `string` ; `tokenId`: `BigNumber`  }\> |
| `ApprovalForAll` | (`owner?`: ``null`` \| `string`, `operator?`: ``null`` \| `string`, `approved?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `boolean`], { `approved`: `boolean` ; `operator`: `string` ; `owner`: `string`  }\> |
| `ApprovalForAll(address,address,bool)` | (`owner?`: ``null`` \| `string`, `operator?`: ``null`` \| `string`, `approved?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `boolean`], { `approved`: `boolean` ; `operator`: `string` ; `owner`: `string`  }\> |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| `BigNumberish`) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `tokenId`: `BigNumber`  }\> |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| `BigNumberish`) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `tokenId`: `BigNumber`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:493

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `operator`: `string`  }\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `owner`: `string`  }\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `tokenURI` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:183

___

### interface

• **interface**: `IERC721MetadataInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:181

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tokenURI` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:656

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

### approve

▸ **approve**(`to`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:296

___

### attach

▸ **attach**(`addressOrName`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:142

___

### balanceOf

▸ **balanceOf**(`owner`, `overrides?`): `Promise`<`BigNumber`\>

Returns the number of tokens in ``owner``'s account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:305

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:141

___

### deployed

▸ **deployed**(): `Promise`<[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)\>

#### Returns

`Promise`<[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:143

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

### getApproved

▸ **getApproved**(`tokenId`, `overrides?`): `Promise`<`string`\>

Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:310

___

### isApprovedForAll

▸ **isApprovedForAll**(`owner`, `operator`, `overrides?`): `Promise`<`boolean`\>

Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `operator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:318

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

src/ethers-contracts/IERC721Metadata.d.ts:145

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

src/ethers-contracts/IERC721Metadata.d.ts:168

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

Returns the token collection name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:380

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

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

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:148

▸ **off**(`eventName`, `listener`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:169

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

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

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:152

▸ **on**(`eventName`, `listener`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:170

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

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

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:156

▸ **once**(`eventName`, `listener`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:171

___

### ownerOf

▸ **ownerOf**(`tokenId`, `overrides?`): `Promise`<`string`\>

Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:327

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

src/ethers-contracts/IERC721Metadata.d.ts:175

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

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

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:164

▸ **removeAllListeners**(`eventName?`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:173

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

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

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:160

▸ **removeListener**(`eventName`, `listener`): [`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC721Metadata`](ethers_contracts.IERC721Metadata.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:172

___

### safeTransferFrom(address,address,uint256)

▸ **safeTransferFrom(address,address,uint256)**(`from`, `to`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:332

___

### safeTransferFrom(address,address,uint256,bytes)

▸ **safeTransferFrom(address,address,uint256,bytes)**(`from`, `to`, `tokenId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:342

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `_approved`, `overrides?`): `Promise`<`ContractTransaction`\>

Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `_approved` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:353

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

src/ethers-contracts/IERC721Metadata.d.ts:362

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

Returns the token collection symbol.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:385

___

### tokenURI

▸ **tokenURI**(`tokenId`, `overrides?`): `Promise`<`string`\>

Returns the Uniform Resource Identifier (URI) for `tokenId` token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:390

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IERC721Metadata.d.ts:370

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
