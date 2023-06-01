[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / NFTImplementation

# Class: NFTImplementation

[ethers_contracts](../modules/ethers_contracts.md).NFTImplementation

## Hierarchy

- `BaseContract`

  ↳ **`NFTImplementation`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.NFTImplementation.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.NFTImplementation.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.NFTImplementation.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.NFTImplementation.md#_wrappedemits)
- [address](ethers_contracts.NFTImplementation.md#address)
- [callStatic](ethers_contracts.NFTImplementation.md#callstatic)
- [deployTransaction](ethers_contracts.NFTImplementation.md#deploytransaction)
- [estimateGas](ethers_contracts.NFTImplementation.md#estimategas)
- [filters](ethers_contracts.NFTImplementation.md#filters)
- [functions](ethers_contracts.NFTImplementation.md#functions)
- [interface](ethers_contracts.NFTImplementation.md#interface)
- [populateTransaction](ethers_contracts.NFTImplementation.md#populatetransaction)
- [provider](ethers_contracts.NFTImplementation.md#provider)
- [resolvedAddress](ethers_contracts.NFTImplementation.md#resolvedaddress)
- [signer](ethers_contracts.NFTImplementation.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.NFTImplementation.md#_checkrunningevents)
- [\_deployed](ethers_contracts.NFTImplementation.md#_deployed)
- [\_wrapEvent](ethers_contracts.NFTImplementation.md#_wrapevent)
- [approve](ethers_contracts.NFTImplementation.md#approve)
- [attach](ethers_contracts.NFTImplementation.md#attach)
- [balanceOf](ethers_contracts.NFTImplementation.md#balanceof)
- [burn](ethers_contracts.NFTImplementation.md#burn)
- [chainId](ethers_contracts.NFTImplementation.md#chainid)
- [connect](ethers_contracts.NFTImplementation.md#connect)
- [deployed](ethers_contracts.NFTImplementation.md#deployed)
- [emit](ethers_contracts.NFTImplementation.md#emit)
- [fallback](ethers_contracts.NFTImplementation.md#fallback)
- [getApproved](ethers_contracts.NFTImplementation.md#getapproved)
- [initialize](ethers_contracts.NFTImplementation.md#initialize)
- [isApprovedForAll](ethers_contracts.NFTImplementation.md#isapprovedforall)
- [listenerCount](ethers_contracts.NFTImplementation.md#listenercount)
- [listeners](ethers_contracts.NFTImplementation.md#listeners)
- [mint](ethers_contracts.NFTImplementation.md#mint)
- [name](ethers_contracts.NFTImplementation.md#name)
- [nativeContract](ethers_contracts.NFTImplementation.md#nativecontract)
- [off](ethers_contracts.NFTImplementation.md#off)
- [on](ethers_contracts.NFTImplementation.md#on)
- [once](ethers_contracts.NFTImplementation.md#once)
- [owner](ethers_contracts.NFTImplementation.md#owner)
- [ownerOf](ethers_contracts.NFTImplementation.md#ownerof)
- [queryFilter](ethers_contracts.NFTImplementation.md#queryfilter)
- [removeAllListeners](ethers_contracts.NFTImplementation.md#removealllisteners)
- [removeListener](ethers_contracts.NFTImplementation.md#removelistener)
- [safeTransferFrom(address,address,uint256)](ethers_contracts.NFTImplementation.md#safetransferfrom(address,address,uint256))
- [safeTransferFrom(address,address,uint256,bytes)](ethers_contracts.NFTImplementation.md#safetransferfrom(address,address,uint256,bytes))
- [setApprovalForAll](ethers_contracts.NFTImplementation.md#setapprovalforall)
- [supportsInterface](ethers_contracts.NFTImplementation.md#supportsinterface)
- [symbol](ethers_contracts.NFTImplementation.md#symbol)
- [tokenURI](ethers_contracts.NFTImplementation.md#tokenuri)
- [transferFrom](ethers_contracts.NFTImplementation.md#transferfrom)
- [getContractAddress](ethers_contracts.NFTImplementation.md#getcontractaddress)
- [getInterface](ethers_contracts.NFTImplementation.md#getinterface)
- [isIndexed](ethers_contracts.NFTImplementation.md#isindexed)

## Constructors

### constructor

• **new NFTImplementation**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `balanceOf` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialize` | (`name_`: `string`, `symbol_`: `string`, `owner_`: `string`, `chainId_`: `BigNumberish`, `nativeContract_`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isApprovedForAll` | (`owner_`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `mint` | (`to`: `string`, `tokenId`: `BigNumberish`, `uri`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nativeContract` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `tokenURI` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:443

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
| `balanceOf` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`name_`: `string`, `symbol_`: `string`, `owner_`: `string`, `chainId_`: `BigNumberish`, `nativeContract_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isApprovedForAll` | (`owner_`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint` | (`to`: `string`, `tokenId`: `BigNumberish`, `uri`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nativeContract` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tokenURI` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:609

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

src/ethers-contracts/NFTImplementation.d.ts:553

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `burn` | (`tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialize` | (`name_`: `string`, `symbol_`: `string`, `owner_`: `string`, `chainId_`: `BigNumberish`, `nativeContract_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isApprovedForAll` | (`owner_`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `mint` | (`to`: `string`, `tokenId`: `BigNumberish`, `uri`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nativeContract` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `tokenURI` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:213

___

### interface

• **interface**: `NFTImplementationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:211

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burn` | (`tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`name_`: `string`, `symbol_`: `string`, `owner_`: `string`, `chainId_`: `BigNumberish`, `nativeContract_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll` | (`owner_`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`to`: `string`, `tokenId`: `BigNumberish`, `uri`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nativeContract` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tokenURI` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:728

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

src/ethers-contracts/NFTImplementation.d.ts:377

___

### attach

▸ **attach**(`addressOrName`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:172

___

### balanceOf

▸ **balanceOf**(`owner_`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:346

___

### burn

▸ **burn**(`tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:438

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

src/ethers-contracts/NFTImplementation.d.ts:368

___

### connect

▸ **connect**(`signerOrProvider`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:171

___

### deployed

▸ **deployed**(): `Promise`<[`NFTImplementation`](ethers_contracts.NFTImplementation.md)\>

#### Returns

`Promise`<[`NFTImplementation`](ethers_contracts.NFTImplementation.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:173

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

src/ethers-contracts/NFTImplementation.d.ts:386

___

### initialize

▸ **initialize**(`name_`, `symbol_`, `owner_`, `chainId_`, `nativeContract_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_` | `string` |
| `symbol_` | `string` |
| `owner_` | `string` |
| `chainId_` | `BigNumberish` |
| `nativeContract_` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:332

___

### isApprovedForAll

▸ **isApprovedForAll**(`owner_`, `operator`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `operator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:397

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

src/ethers-contracts/NFTImplementation.d.ts:175

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

src/ethers-contracts/NFTImplementation.d.ts:198

___

### mint

▸ **mint**(`to`, `tokenId`, `uri`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `uri` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:431

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

src/ethers-contracts/NFTImplementation.d.ts:356

___

### nativeContract

▸ **nativeContract**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:370

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

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

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:178

▸ **off**(`eventName`, `listener`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:199

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

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

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:182

▸ **on**(`eventName`, `listener`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:200

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

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

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:186

▸ **once**(`eventName`, `listener`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:201

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:372

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

src/ethers-contracts/NFTImplementation.d.ts:351

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

src/ethers-contracts/NFTImplementation.d.ts:205

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

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

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:194

▸ **removeAllListeners**(`eventName?`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:203

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

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

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:190

▸ **removeListener**(`eventName`, `listener`): [`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTImplementation`](ethers_contracts.NFTImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:202

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

src/ethers-contracts/NFTImplementation.d.ts:416

___

### safeTransferFrom(address,address,uint256,bytes)

▸ **safeTransferFrom(address,address,uint256,bytes)**(`from`, `to`, `tokenId`, `_data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `_data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:423

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `approved` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:391

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/NFTImplementation.d.ts:341

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

src/ethers-contracts/NFTImplementation.d.ts:361

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

src/ethers-contracts/NFTImplementation.d.ts:366

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

src/ethers-contracts/NFTImplementation.d.ts:406

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
