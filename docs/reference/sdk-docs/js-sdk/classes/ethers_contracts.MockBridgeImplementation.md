[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / MockBridgeImplementation

# Class: MockBridgeImplementation

[ethers_contracts](../modules/ethers_contracts.md).MockBridgeImplementation

## Hierarchy

- `BaseContract`

  ↳ **`MockBridgeImplementation`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.MockBridgeImplementation.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.MockBridgeImplementation.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.MockBridgeImplementation.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.MockBridgeImplementation.md#_wrappedemits)
- [address](ethers_contracts.MockBridgeImplementation.md#address)
- [callStatic](ethers_contracts.MockBridgeImplementation.md#callstatic)
- [deployTransaction](ethers_contracts.MockBridgeImplementation.md#deploytransaction)
- [estimateGas](ethers_contracts.MockBridgeImplementation.md#estimategas)
- [filters](ethers_contracts.MockBridgeImplementation.md#filters)
- [functions](ethers_contracts.MockBridgeImplementation.md#functions)
- [interface](ethers_contracts.MockBridgeImplementation.md#interface)
- [populateTransaction](ethers_contracts.MockBridgeImplementation.md#populatetransaction)
- [provider](ethers_contracts.MockBridgeImplementation.md#provider)
- [resolvedAddress](ethers_contracts.MockBridgeImplementation.md#resolvedaddress)
- [signer](ethers_contracts.MockBridgeImplementation.md#signer)

### Methods

- [WETH](ethers_contracts.MockBridgeImplementation.md#weth)
- [\_checkRunningEvents](ethers_contracts.MockBridgeImplementation.md#_checkrunningevents)
- [\_deployed](ethers_contracts.MockBridgeImplementation.md#_deployed)
- [\_parseTransferCommon](ethers_contracts.MockBridgeImplementation.md#_parsetransfercommon)
- [\_wrapEvent](ethers_contracts.MockBridgeImplementation.md#_wrapevent)
- [attach](ethers_contracts.MockBridgeImplementation.md#attach)
- [attestToken](ethers_contracts.MockBridgeImplementation.md#attesttoken)
- [bridgeContracts](ethers_contracts.MockBridgeImplementation.md#bridgecontracts)
- [chainId](ethers_contracts.MockBridgeImplementation.md#chainid)
- [completeTransfer](ethers_contracts.MockBridgeImplementation.md#completetransfer)
- [completeTransferAndUnwrapETH](ethers_contracts.MockBridgeImplementation.md#completetransferandunwrapeth)
- [completeTransferAndUnwrapETHWithPayload](ethers_contracts.MockBridgeImplementation.md#completetransferandunwrapethwithpayload)
- [completeTransferWithPayload](ethers_contracts.MockBridgeImplementation.md#completetransferwithpayload)
- [connect](ethers_contracts.MockBridgeImplementation.md#connect)
- [createWrapped](ethers_contracts.MockBridgeImplementation.md#createwrapped)
- [deployed](ethers_contracts.MockBridgeImplementation.md#deployed)
- [emit](ethers_contracts.MockBridgeImplementation.md#emit)
- [encodeAssetMeta](ethers_contracts.MockBridgeImplementation.md#encodeassetmeta)
- [encodeTransfer](ethers_contracts.MockBridgeImplementation.md#encodetransfer)
- [encodeTransferWithPayload](ethers_contracts.MockBridgeImplementation.md#encodetransferwithpayload)
- [evmChainId](ethers_contracts.MockBridgeImplementation.md#evmchainid)
- [fallback](ethers_contracts.MockBridgeImplementation.md#fallback)
- [finality](ethers_contracts.MockBridgeImplementation.md#finality)
- [governanceActionIsConsumed](ethers_contracts.MockBridgeImplementation.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.MockBridgeImplementation.md#governancechainid)
- [governanceContract](ethers_contracts.MockBridgeImplementation.md#governancecontract)
- [implementation](ethers_contracts.MockBridgeImplementation.md#implementation)
- [initialize](ethers_contracts.MockBridgeImplementation.md#initialize)
- [isFork](ethers_contracts.MockBridgeImplementation.md#isfork)
- [isInitialized](ethers_contracts.MockBridgeImplementation.md#isinitialized)
- [isTransferCompleted](ethers_contracts.MockBridgeImplementation.md#istransfercompleted)
- [isWrappedAsset](ethers_contracts.MockBridgeImplementation.md#iswrappedasset)
- [listenerCount](ethers_contracts.MockBridgeImplementation.md#listenercount)
- [listeners](ethers_contracts.MockBridgeImplementation.md#listeners)
- [off](ethers_contracts.MockBridgeImplementation.md#off)
- [on](ethers_contracts.MockBridgeImplementation.md#on)
- [once](ethers_contracts.MockBridgeImplementation.md#once)
- [outstandingBridged](ethers_contracts.MockBridgeImplementation.md#outstandingbridged)
- [parseAssetMeta](ethers_contracts.MockBridgeImplementation.md#parseassetmeta)
- [parsePayloadID](ethers_contracts.MockBridgeImplementation.md#parsepayloadid)
- [parseRecoverChainId](ethers_contracts.MockBridgeImplementation.md#parserecoverchainid)
- [parseRegisterChain](ethers_contracts.MockBridgeImplementation.md#parseregisterchain)
- [parseTransfer](ethers_contracts.MockBridgeImplementation.md#parsetransfer)
- [parseTransferWithPayload](ethers_contracts.MockBridgeImplementation.md#parsetransferwithpayload)
- [parseUpgrade](ethers_contracts.MockBridgeImplementation.md#parseupgrade)
- [queryFilter](ethers_contracts.MockBridgeImplementation.md#queryfilter)
- [registerChain](ethers_contracts.MockBridgeImplementation.md#registerchain)
- [removeAllListeners](ethers_contracts.MockBridgeImplementation.md#removealllisteners)
- [removeListener](ethers_contracts.MockBridgeImplementation.md#removelistener)
- [submitRecoverChainId](ethers_contracts.MockBridgeImplementation.md#submitrecoverchainid)
- [testNewImplementationActive](ethers_contracts.MockBridgeImplementation.md#testnewimplementationactive)
- [testOverwriteEVMChainId](ethers_contracts.MockBridgeImplementation.md#testoverwriteevmchainid)
- [testUpdateWETHAddress](ethers_contracts.MockBridgeImplementation.md#testupdatewethaddress)
- [tokenImplementation](ethers_contracts.MockBridgeImplementation.md#tokenimplementation)
- [transferTokens](ethers_contracts.MockBridgeImplementation.md#transfertokens)
- [transferTokensWithPayload](ethers_contracts.MockBridgeImplementation.md#transfertokenswithpayload)
- [updateWrapped](ethers_contracts.MockBridgeImplementation.md#updatewrapped)
- [upgrade](ethers_contracts.MockBridgeImplementation.md#upgrade)
- [wormhole](ethers_contracts.MockBridgeImplementation.md#wormhole)
- [wrapAndTransferETH](ethers_contracts.MockBridgeImplementation.md#wrapandtransfereth)
- [wrapAndTransferETHWithPayload](ethers_contracts.MockBridgeImplementation.md#wrapandtransferethwithpayload)
- [wrappedAsset](ethers_contracts.MockBridgeImplementation.md#wrappedasset)
- [getContractAddress](ethers_contracts.MockBridgeImplementation.md#getcontractaddress)
- [getInterface](ethers_contracts.MockBridgeImplementation.md#getinterface)
- [isIndexed](ethers_contracts.MockBridgeImplementation.md#isindexed)

## Constructors

### constructor

• **new MockBridgeImplementation**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `testUpdateWETHAddress` | (`WETH`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
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

src/ethers-contracts/MockBridgeImplementation.d.ts:1221

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `testUpdateWETHAddress` | (`WETH`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
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

src/ethers-contracts/MockBridgeImplementation.d.ts:1569

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1519

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `testUpdateWETHAddress` | (`WETH`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
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

src/ethers-contracts/MockBridgeImplementation.d.ts:513

___

### interface

• **interface**: `MockBridgeImplementationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:511

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `testUpdateWETHAddress` | (`WETH`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
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

src/ethers-contracts/MockBridgeImplementation.d.ts:1813

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

src/ethers-contracts/MockBridgeImplementation.d.ts:920

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

src/ethers-contracts/MockBridgeImplementation.d.ts:922

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

▸ **attach**(`addressOrName`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:472

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

src/ethers-contracts/MockBridgeImplementation.d.ts:937

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

src/ethers-contracts/MockBridgeImplementation.d.ts:943

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

src/ethers-contracts/MockBridgeImplementation.d.ts:948

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

src/ethers-contracts/MockBridgeImplementation.d.ts:950

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

src/ethers-contracts/MockBridgeImplementation.d.ts:955

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

src/ethers-contracts/MockBridgeImplementation.d.ts:960

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

src/ethers-contracts/MockBridgeImplementation.d.ts:965

___

### connect

▸ **connect**(`signerOrProvider`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:471

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

src/ethers-contracts/MockBridgeImplementation.d.ts:970

___

### deployed

▸ **deployed**(): `Promise`<[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)\>

#### Returns

`Promise`<[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:473

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

src/ethers-contracts/MockBridgeImplementation.d.ts:975

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

src/ethers-contracts/MockBridgeImplementation.d.ts:987

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1000

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1014

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1016

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1018

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1023

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1025

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1027

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1204

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1029

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1031

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1033

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1038

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

src/ethers-contracts/MockBridgeImplementation.d.ts:475

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

src/ethers-contracts/MockBridgeImplementation.d.ts:498

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

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

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:478

▸ **off**(`eventName`, `listener`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:499

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

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

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:482

▸ **on**(`eventName`, `listener`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:500

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

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

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:486

▸ **once**(`eventName`, `listener`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:501

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1040

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1045

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1059

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1067

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1079

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1092

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1107

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1123

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

src/ethers-contracts/MockBridgeImplementation.d.ts:505

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1135

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

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

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:494

▸ **removeAllListeners**(`eventName?`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:503

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

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

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:490

▸ **removeListener**(`eventName`, `listener`): [`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockBridgeImplementation`](ethers_contracts.MockBridgeImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:502

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1143

___

### testNewImplementationActive

▸ **testNewImplementationActive**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:1208

___

### testOverwriteEVMChainId

▸ **testOverwriteEVMChainId**(`fakeChainId`, `fakeEvmChainId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fakeChainId` | `BigNumberish` |
| `fakeEvmChainId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:1215

___

### testUpdateWETHAddress

▸ **testUpdateWETHAddress**(`WETH`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `WETH` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/MockBridgeImplementation.d.ts:1210

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1148

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1150

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1160

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1170

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1175

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1180

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1182

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1190

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

src/ethers-contracts/MockBridgeImplementation.d.ts:1198

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
