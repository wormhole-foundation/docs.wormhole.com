[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / BridgeImplementation

# Class: BridgeImplementation

[ethers_contracts](../modules/ethers_contracts.md).BridgeImplementation

## Hierarchy

- `BaseContract`

  ↳ **`BridgeImplementation`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.BridgeImplementation.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.BridgeImplementation.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.BridgeImplementation.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.BridgeImplementation.md#_wrappedemits)
- [address](ethers_contracts.BridgeImplementation.md#address)
- [callStatic](ethers_contracts.BridgeImplementation.md#callstatic)
- [deployTransaction](ethers_contracts.BridgeImplementation.md#deploytransaction)
- [estimateGas](ethers_contracts.BridgeImplementation.md#estimategas)
- [filters](ethers_contracts.BridgeImplementation.md#filters)
- [functions](ethers_contracts.BridgeImplementation.md#functions)
- [interface](ethers_contracts.BridgeImplementation.md#interface)
- [populateTransaction](ethers_contracts.BridgeImplementation.md#populatetransaction)
- [provider](ethers_contracts.BridgeImplementation.md#provider)
- [resolvedAddress](ethers_contracts.BridgeImplementation.md#resolvedaddress)
- [signer](ethers_contracts.BridgeImplementation.md#signer)

### Methods

- [WETH](ethers_contracts.BridgeImplementation.md#weth)
- [\_checkRunningEvents](ethers_contracts.BridgeImplementation.md#_checkrunningevents)
- [\_deployed](ethers_contracts.BridgeImplementation.md#_deployed)
- [\_parseTransferCommon](ethers_contracts.BridgeImplementation.md#_parsetransfercommon)
- [\_wrapEvent](ethers_contracts.BridgeImplementation.md#_wrapevent)
- [attach](ethers_contracts.BridgeImplementation.md#attach)
- [attestToken](ethers_contracts.BridgeImplementation.md#attesttoken)
- [bridgeContracts](ethers_contracts.BridgeImplementation.md#bridgecontracts)
- [chainId](ethers_contracts.BridgeImplementation.md#chainid)
- [completeTransfer](ethers_contracts.BridgeImplementation.md#completetransfer)
- [completeTransferAndUnwrapETH](ethers_contracts.BridgeImplementation.md#completetransferandunwrapeth)
- [completeTransferAndUnwrapETHWithPayload](ethers_contracts.BridgeImplementation.md#completetransferandunwrapethwithpayload)
- [completeTransferWithPayload](ethers_contracts.BridgeImplementation.md#completetransferwithpayload)
- [connect](ethers_contracts.BridgeImplementation.md#connect)
- [createWrapped](ethers_contracts.BridgeImplementation.md#createwrapped)
- [deployed](ethers_contracts.BridgeImplementation.md#deployed)
- [emit](ethers_contracts.BridgeImplementation.md#emit)
- [encodeAssetMeta](ethers_contracts.BridgeImplementation.md#encodeassetmeta)
- [encodeTransfer](ethers_contracts.BridgeImplementation.md#encodetransfer)
- [encodeTransferWithPayload](ethers_contracts.BridgeImplementation.md#encodetransferwithpayload)
- [evmChainId](ethers_contracts.BridgeImplementation.md#evmchainid)
- [fallback](ethers_contracts.BridgeImplementation.md#fallback)
- [finality](ethers_contracts.BridgeImplementation.md#finality)
- [governanceActionIsConsumed](ethers_contracts.BridgeImplementation.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.BridgeImplementation.md#governancechainid)
- [governanceContract](ethers_contracts.BridgeImplementation.md#governancecontract)
- [implementation](ethers_contracts.BridgeImplementation.md#implementation)
- [initialize](ethers_contracts.BridgeImplementation.md#initialize)
- [isFork](ethers_contracts.BridgeImplementation.md#isfork)
- [isInitialized](ethers_contracts.BridgeImplementation.md#isinitialized)
- [isTransferCompleted](ethers_contracts.BridgeImplementation.md#istransfercompleted)
- [isWrappedAsset](ethers_contracts.BridgeImplementation.md#iswrappedasset)
- [listenerCount](ethers_contracts.BridgeImplementation.md#listenercount)
- [listeners](ethers_contracts.BridgeImplementation.md#listeners)
- [off](ethers_contracts.BridgeImplementation.md#off)
- [on](ethers_contracts.BridgeImplementation.md#on)
- [once](ethers_contracts.BridgeImplementation.md#once)
- [outstandingBridged](ethers_contracts.BridgeImplementation.md#outstandingbridged)
- [parseAssetMeta](ethers_contracts.BridgeImplementation.md#parseassetmeta)
- [parsePayloadID](ethers_contracts.BridgeImplementation.md#parsepayloadid)
- [parseRecoverChainId](ethers_contracts.BridgeImplementation.md#parserecoverchainid)
- [parseRegisterChain](ethers_contracts.BridgeImplementation.md#parseregisterchain)
- [parseTransfer](ethers_contracts.BridgeImplementation.md#parsetransfer)
- [parseTransferWithPayload](ethers_contracts.BridgeImplementation.md#parsetransferwithpayload)
- [parseUpgrade](ethers_contracts.BridgeImplementation.md#parseupgrade)
- [queryFilter](ethers_contracts.BridgeImplementation.md#queryfilter)
- [registerChain](ethers_contracts.BridgeImplementation.md#registerchain)
- [removeAllListeners](ethers_contracts.BridgeImplementation.md#removealllisteners)
- [removeListener](ethers_contracts.BridgeImplementation.md#removelistener)
- [submitRecoverChainId](ethers_contracts.BridgeImplementation.md#submitrecoverchainid)
- [tokenImplementation](ethers_contracts.BridgeImplementation.md#tokenimplementation)
- [transferTokens](ethers_contracts.BridgeImplementation.md#transfertokens)
- [transferTokensWithPayload](ethers_contracts.BridgeImplementation.md#transfertokenswithpayload)
- [updateWrapped](ethers_contracts.BridgeImplementation.md#updatewrapped)
- [upgrade](ethers_contracts.BridgeImplementation.md#upgrade)
- [wormhole](ethers_contracts.BridgeImplementation.md#wormhole)
- [wrapAndTransferETH](ethers_contracts.BridgeImplementation.md#wrapandtransfereth)
- [wrapAndTransferETHWithPayload](ethers_contracts.BridgeImplementation.md#wrapandtransferethwithpayload)
- [wrappedAsset](ethers_contracts.BridgeImplementation.md#wrappedasset)
- [getContractAddress](ethers_contracts.BridgeImplementation.md#getcontractaddress)
- [getInterface](ethers_contracts.BridgeImplementation.md#getinterface)
- [isIndexed](ethers_contracts.BridgeImplementation.md#isindexed)

## Constructors

### constructor

• **new BridgeImplementation**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `_parseTransferCommon` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\> |
| `attestToken` | (`tokenAddress`: `string`, `nonce`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `completeTransfer` | (`encodedVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `completeTransferAndUnwrapETH` | (`encodedVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `completeTransferAndUnwrapETHWithPayload` | (`encodedVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `completeTransferWithPayload` | (`encodedVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createWrapped` | (`encodedVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `encodeAssetMeta` | (`meta`: { `decimals`: `BigNumberish` ; `name`: `BytesLike` ; `payloadID`: `BigNumberish` ; `symbol`: `BytesLike` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `encodeTransfer` | (`transfer`: { `amount`: `BigNumberish` ; `fee`: `BigNumberish` ; `payloadID`: `BigNumberish` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `encodeTransferWithPayload` | (`transfer`: { `amount`: `BigNumberish` ; `fromAddress`: `BytesLike` ; `payload`: `BytesLike` ; `payloadID`: `BigNumberish` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialize` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isTransferCompleted` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isWrappedAsset` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `outstandingBridged` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseAssetMeta` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `string`, `number`, `number`, `string`, `string`] & { `decimals`: `number` ; `name`: `string` ; `payloadID`: `number` ; `symbol`: `string` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\> |
| `parsePayloadID` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\> |
| `parseRegisterChain` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `emitterAddress`: `string` ; `emitterChainID`: `number` ; `module`: `string`  }\> |
| `parseTransfer` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\> |
| `parseTransferWithPayload` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `string`, `string`] & { `amount`: `BigNumber` ; `fromAddress`: `string` ; `payload`: `string` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\> |
| `parseUpgrade` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `module`: `string` ; `newContract`: `string`  }\> |
| `registerChain` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitRecoverChainId` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferTokens` | (`token`: `string`, `amount`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `arbiterFee`: `BigNumberish`, `nonce`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferTokensWithPayload` | (`token`: `string`, `amount`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `payload`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `updateWrapped` | (`encodedVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `wrapAndTransferETH` | (`recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `arbiterFee`: `BigNumberish`, `nonce`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `wrapAndTransferETHWithPayload` | (`recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `payload`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1168

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
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `_parseTransferCommon` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `attestToken` | (`tokenAddress`: `string`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `completeTransfer` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `completeTransferAndUnwrapETH` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `completeTransferAndUnwrapETHWithPayload` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `completeTransferWithPayload` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `createWrapped` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `encodeAssetMeta` | (`meta`: { `decimals`: `BigNumberish` ; `name`: `BytesLike` ; `payloadID`: `BigNumberish` ; `symbol`: `BytesLike` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `encodeTransfer` | (`transfer`: { `amount`: `BigNumberish` ; `fee`: `BigNumberish` ; `payloadID`: `BigNumberish` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `encodeTransferWithPayload` | (`transfer`: { `amount`: `BigNumberish` ; `fromAddress`: `BytesLike` ; `payload`: `BytesLike` ; `payloadID`: `BigNumberish` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isTransferCompleted` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isWrappedAsset` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `outstandingBridged` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseAssetMeta` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parsePayloadID` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseRegisterChain` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseTransfer` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseTransferWithPayload` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseUpgrade` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerChain` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `submitRecoverChainId` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferTokens` | (`token`: `string`, `amount`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `arbiterFee`: `BigNumberish`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferTokensWithPayload` | (`token`: `string`, `amount`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `payload`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateWrapped` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `wrapAndTransferETH` | (`recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `arbiterFee`: `BigNumberish`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `wrapAndTransferETHWithPayload` | (`recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `payload`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1503

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
| `ContractUpgraded` | (`oldContract?`: ``null`` \| `string`, `newContract?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`, `string`], { `newContract`: `string` ; `oldContract`: `string`  }\> |
| `ContractUpgraded(address,address)` | (`oldContract?`: ``null`` \| `string`, `newContract?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`, `string`], { `newContract`: `string` ; `oldContract`: `string`  }\> |
| `Upgraded` | (`implementation?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`], { `implementation`: `string`  }\> |
| `Upgraded(address)` | (`implementation?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`], { `implementation`: `string`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1453

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `_parseTransferCommon` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }] & { `transfer`: [`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }  }\> |
| `attestToken` | (`tokenAddress`: `string`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `completeTransfer` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `completeTransferAndUnwrapETH` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `completeTransferAndUnwrapETHWithPayload` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `completeTransferWithPayload` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createWrapped` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `encodeAssetMeta` | (`meta`: { `decimals`: `BigNumberish` ; `name`: `BytesLike` ; `payloadID`: `BigNumberish` ; `symbol`: `BytesLike` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `encoded`: `string`  }\> |
| `encodeTransfer` | (`transfer`: { `amount`: `BigNumberish` ; `fee`: `BigNumberish` ; `payloadID`: `BigNumberish` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `encoded`: `string`  }\> |
| `encodeTransferWithPayload` | (`transfer`: { `amount`: `BigNumberish` ; `fromAddress`: `BytesLike` ; `payload`: `BytesLike` ; `payloadID`: `BigNumberish` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `encoded`: `string`  }\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isTransferCompleted` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isWrappedAsset` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `outstandingBridged` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `parseAssetMeta` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `string`, `number`, `number`, `string`, `string`] & { `decimals`: `number` ; `name`: `string` ; `payloadID`: `number` ; `symbol`: `string` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }] & { `meta`: [`number`, `string`, `number`, `number`, `string`, `string`] & { `decimals`: `number` ; `name`: `string` ; `payloadID`: `number` ; `symbol`: `string` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }  }\> |
| `parsePayloadID` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`number`] & { `payloadID`: `number`  }\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }] & { `rci`: [`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }  }\> |
| `parseRegisterChain` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `emitterAddress`: `string` ; `emitterChainID`: `number` ; `module`: `string`  }] & { `chain`: [`string`, `number`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `emitterAddress`: `string` ; `emitterChainID`: `number` ; `module`: `string`  }  }\> |
| `parseTransfer` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }] & { `transfer`: [`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }  }\> |
| `parseTransferWithPayload` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `string`, `string`] & { `amount`: `BigNumber` ; `fromAddress`: `string` ; `payload`: `string` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }] & { `transfer`: [`number`, `BigNumber`, `string`, `number`, `string`, `number`, `string`, `string`] & { `amount`: `BigNumber` ; `fromAddress`: `string` ; `payload`: `string` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }  }\> |
| `parseUpgrade` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `module`: `string` ; `newContract`: `string`  }] & { `chain`: [`string`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `module`: `string` ; `newContract`: `string`  }  }\> |
| `registerChain` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitRecoverChainId` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferTokens` | (`token`: `string`, `amount`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `arbiterFee`: `BigNumberish`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferTokensWithPayload` | (`token`: `string`, `amount`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `payload`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateWrapped` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `wrapAndTransferETH` | (`recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `arbiterFee`: `BigNumberish`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `wrapAndTransferETHWithPayload` | (`recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `payload`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:486

___

### interface

• **interface**: `BridgeImplementationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:484

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `_parseTransferCommon` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `attestToken` | (`tokenAddress`: `string`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `completeTransfer` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `completeTransferAndUnwrapETH` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `completeTransferAndUnwrapETHWithPayload` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `completeTransferWithPayload` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createWrapped` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `encodeAssetMeta` | (`meta`: { `decimals`: `BigNumberish` ; `name`: `BytesLike` ; `payloadID`: `BigNumberish` ; `symbol`: `BytesLike` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `encodeTransfer` | (`transfer`: { `amount`: `BigNumberish` ; `fee`: `BigNumberish` ; `payloadID`: `BigNumberish` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `encodeTransferWithPayload` | (`transfer`: { `amount`: `BigNumberish` ; `fromAddress`: `BytesLike` ; `payload`: `BytesLike` ; `payloadID`: `BigNumberish` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isTransferCompleted` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isWrappedAsset` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `outstandingBridged` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseAssetMeta` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parsePayloadID` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseRegisterChain` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseTransfer` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseTransferWithPayload` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseUpgrade` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerChain` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitRecoverChainId` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferTokens` | (`token`: `string`, `amount`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `arbiterFee`: `BigNumberish`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferTokensWithPayload` | (`token`: `string`, `amount`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `payload`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateWrapped` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `wrapAndTransferETH` | (`recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `arbiterFee`: `BigNumberish`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `wrapAndTransferETHWithPayload` | (`recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `payload`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1734

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

### WETH

▸ **WETH**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:880

___

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

### \_parseTransferCommon

▸ **_parseTransferCommon**(`encoded`, `overrides?`): `Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:882

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

▸ **attach**(`addressOrName`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:445

___

### attestToken

▸ **attestToken**(`tokenAddress`, `nonce`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |
| `nonce` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:897

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

src/ethers-contracts/BridgeImplementation.d.ts:903

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

src/ethers-contracts/BridgeImplementation.d.ts:908

___

### completeTransfer

▸ **completeTransfer**(`encodedVm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:910

___

### completeTransferAndUnwrapETH

▸ **completeTransferAndUnwrapETH**(`encodedVm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:915

___

### completeTransferAndUnwrapETHWithPayload

▸ **completeTransferAndUnwrapETHWithPayload**(`encodedVm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:920

___

### completeTransferWithPayload

▸ **completeTransferWithPayload**(`encodedVm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:925

___

### connect

▸ **connect**(`signerOrProvider`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:444

___

### createWrapped

▸ **createWrapped**(`encodedVm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:930

___

### deployed

▸ **deployed**(): `Promise`<[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)\>

#### Returns

`Promise`<[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:446

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

### encodeAssetMeta

▸ **encodeAssetMeta**(`meta`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | `Object` |
| `meta.decimals` | `BigNumberish` |
| `meta.name` | `BytesLike` |
| `meta.payloadID` | `BigNumberish` |
| `meta.symbol` | `BytesLike` |
| `meta.tokenAddress` | `BytesLike` |
| `meta.tokenChain` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:935

___

### encodeTransfer

▸ **encodeTransfer**(`transfer`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transfer` | `Object` |
| `transfer.amount` | `BigNumberish` |
| `transfer.fee` | `BigNumberish` |
| `transfer.payloadID` | `BigNumberish` |
| `transfer.to` | `BytesLike` |
| `transfer.toChain` | `BigNumberish` |
| `transfer.tokenAddress` | `BytesLike` |
| `transfer.tokenChain` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:947

___

### encodeTransferWithPayload

▸ **encodeTransferWithPayload**(`transfer`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transfer` | `Object` |
| `transfer.amount` | `BigNumberish` |
| `transfer.fromAddress` | `BytesLike` |
| `transfer.payload` | `BytesLike` |
| `transfer.payloadID` | `BigNumberish` |
| `transfer.to` | `BytesLike` |
| `transfer.toChain` | `BigNumberish` |
| `transfer.tokenAddress` | `BytesLike` |
| `transfer.tokenChain` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:960

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

src/ethers-contracts/BridgeImplementation.d.ts:974

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

src/ethers-contracts/BridgeImplementation.d.ts:976

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

src/ethers-contracts/BridgeImplementation.d.ts:978

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

src/ethers-contracts/BridgeImplementation.d.ts:983

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

src/ethers-contracts/BridgeImplementation.d.ts:985

___

### implementation

▸ **implementation**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1162

___

### initialize

▸ **initialize**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1164

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

src/ethers-contracts/BridgeImplementation.d.ts:987

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

src/ethers-contracts/BridgeImplementation.d.ts:989

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

src/ethers-contracts/BridgeImplementation.d.ts:991

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

src/ethers-contracts/BridgeImplementation.d.ts:996

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

src/ethers-contracts/BridgeImplementation.d.ts:448

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

src/ethers-contracts/BridgeImplementation.d.ts:471

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

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

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:451

▸ **off**(`eventName`, `listener`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:472

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

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

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:455

▸ **on**(`eventName`, `listener`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:473

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

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

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:459

▸ **once**(`eventName`, `listener`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:474

___

### outstandingBridged

▸ **outstandingBridged**(`token`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:998

___

### parseAssetMeta

▸ **parseAssetMeta**(`encoded`, `overrides?`): `Promise`<[`number`, `string`, `number`, `number`, `string`, `string`] & { `decimals`: `number` ; `name`: `string` ; `payloadID`: `number` ; `symbol`: `string` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `string`, `number`, `number`, `string`, `string`] & { `decimals`: `number` ; `name`: `string` ; `payloadID`: `number` ; `symbol`: `string` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1003

___

### parsePayloadID

▸ **parsePayloadID**(`encoded`, `overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1017

___

### parseRecoverChainId

▸ **parseRecoverChainId**(`encodedRecoverChainId`, `overrides?`): `Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\>

Parse a recoverChainId (action 3) with minimal validation

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedRecoverChainId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1025

___

### parseRegisterChain

▸ **parseRegisterChain**(`encoded`, `overrides?`): `Promise`<[`string`, `number`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `emitterAddress`: `string` ; `emitterChainID`: `number` ; `module`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `emitterAddress`: `string` ; `emitterChainID`: `number` ; `module`: `string`  }\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1037

___

### parseTransfer

▸ **parseTransfer**(`encoded`, `overrides?`): `Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `BigNumber`] & { `amount`: `BigNumber` ; `fee`: `BigNumber` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1050

___

### parseTransferWithPayload

▸ **parseTransferWithPayload**(`encoded`, `overrides?`): `Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `string`, `string`] & { `amount`: `BigNumber` ; `fromAddress`: `string` ; `payload`: `string` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `string`, `number`, `string`, `number`, `string`, `string`] & { `amount`: `BigNumber` ; `fromAddress`: `string` ; `payload`: `string` ; `payloadID`: `number` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number`  }\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1065

___

### parseUpgrade

▸ **parseUpgrade**(`encoded`, `overrides?`): `Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `module`: `string` ; `newContract`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `module`: `string` ; `newContract`: `string`  }\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1081

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

src/ethers-contracts/BridgeImplementation.d.ts:478

___

### registerChain

▸ **registerChain**(`encodedVM`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVM` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1093

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

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

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:467

▸ **removeAllListeners**(`eventName?`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:476

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

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

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:463

▸ **removeListener**(`eventName`, `listener`): [`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`BridgeImplementation`](ethers_contracts.BridgeImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:475

___

### submitRecoverChainId

▸ **submitRecoverChainId**(`encodedVM`, `overrides?`): `Promise`<`ContractTransaction`\>

Updates the `chainId` and `evmChainId` on a forked chain via Governance VAA/VM

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVM` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1101

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

src/ethers-contracts/BridgeImplementation.d.ts:1106

___

### transferTokens

▸ **transferTokens**(`token`, `amount`, `recipientChain`, `recipient`, `arbiterFee`, `nonce`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `amount` | `BigNumberish` |
| `recipientChain` | `BigNumberish` |
| `recipient` | `BytesLike` |
| `arbiterFee` | `BigNumberish` |
| `nonce` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1108

___

### transferTokensWithPayload

▸ **transferTokensWithPayload**(`token`, `amount`, `recipientChain`, `recipient`, `nonce`, `payload`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `amount` | `BigNumberish` |
| `recipientChain` | `BigNumberish` |
| `recipient` | `BytesLike` |
| `nonce` | `BigNumberish` |
| `payload` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1118

___

### updateWrapped

▸ **updateWrapped**(`encodedVm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1128

___

### upgrade

▸ **upgrade**(`encodedVM`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVM` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1133

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

src/ethers-contracts/BridgeImplementation.d.ts:1138

___

### wrapAndTransferETH

▸ **wrapAndTransferETH**(`recipientChain`, `recipient`, `arbiterFee`, `nonce`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipientChain` | `BigNumberish` |
| `recipient` | `BytesLike` |
| `arbiterFee` | `BigNumberish` |
| `nonce` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1140

___

### wrapAndTransferETHWithPayload

▸ **wrapAndTransferETHWithPayload**(`recipientChain`, `recipient`, `nonce`, `payload`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipientChain` | `BigNumberish` |
| `recipient` | `BytesLike` |
| `nonce` | `BigNumberish` |
| `payload` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/BridgeImplementation.d.ts:1148

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

src/ethers-contracts/BridgeImplementation.d.ts:1156

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
