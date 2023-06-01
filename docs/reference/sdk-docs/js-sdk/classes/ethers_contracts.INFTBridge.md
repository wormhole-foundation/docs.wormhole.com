[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / INFTBridge

# Class: INFTBridge

[ethers_contracts](../modules/ethers_contracts.md).INFTBridge

## Hierarchy

- `BaseContract`

  ↳ **`INFTBridge`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.INFTBridge.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.INFTBridge.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.INFTBridge.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.INFTBridge.md#_wrappedemits)
- [address](ethers_contracts.INFTBridge.md#address)
- [callStatic](ethers_contracts.INFTBridge.md#callstatic)
- [deployTransaction](ethers_contracts.INFTBridge.md#deploytransaction)
- [estimateGas](ethers_contracts.INFTBridge.md#estimategas)
- [filters](ethers_contracts.INFTBridge.md#filters)
- [functions](ethers_contracts.INFTBridge.md#functions)
- [interface](ethers_contracts.INFTBridge.md#interface)
- [populateTransaction](ethers_contracts.INFTBridge.md#populatetransaction)
- [provider](ethers_contracts.INFTBridge.md#provider)
- [resolvedAddress](ethers_contracts.INFTBridge.md#resolvedaddress)
- [signer](ethers_contracts.INFTBridge.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.INFTBridge.md#_checkrunningevents)
- [\_deployed](ethers_contracts.INFTBridge.md#_deployed)
- [\_wrapEvent](ethers_contracts.INFTBridge.md#_wrapevent)
- [attach](ethers_contracts.INFTBridge.md#attach)
- [bridgeContracts](ethers_contracts.INFTBridge.md#bridgecontracts)
- [chainId](ethers_contracts.INFTBridge.md#chainid)
- [completeTransfer](ethers_contracts.INFTBridge.md#completetransfer)
- [connect](ethers_contracts.INFTBridge.md#connect)
- [deployed](ethers_contracts.INFTBridge.md#deployed)
- [emit](ethers_contracts.INFTBridge.md#emit)
- [encodeTransfer](ethers_contracts.INFTBridge.md#encodetransfer)
- [evmChainId](ethers_contracts.INFTBridge.md#evmchainid)
- [fallback](ethers_contracts.INFTBridge.md#fallback)
- [finality](ethers_contracts.INFTBridge.md#finality)
- [governanceActionIsConsumed](ethers_contracts.INFTBridge.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.INFTBridge.md#governancechainid)
- [governanceContract](ethers_contracts.INFTBridge.md#governancecontract)
- [implementation](ethers_contracts.INFTBridge.md#implementation)
- [initialize](ethers_contracts.INFTBridge.md#initialize)
- [isFork](ethers_contracts.INFTBridge.md#isfork)
- [isInitialized](ethers_contracts.INFTBridge.md#isinitialized)
- [isTransferCompleted](ethers_contracts.INFTBridge.md#istransfercompleted)
- [isWrappedAsset](ethers_contracts.INFTBridge.md#iswrappedasset)
- [listenerCount](ethers_contracts.INFTBridge.md#listenercount)
- [listeners](ethers_contracts.INFTBridge.md#listeners)
- [off](ethers_contracts.INFTBridge.md#off)
- [on](ethers_contracts.INFTBridge.md#on)
- [onERC721Received](ethers_contracts.INFTBridge.md#onerc721received)
- [once](ethers_contracts.INFTBridge.md#once)
- [parseRecoverChainId](ethers_contracts.INFTBridge.md#parserecoverchainid)
- [parseRegisterChain](ethers_contracts.INFTBridge.md#parseregisterchain)
- [parseTransfer](ethers_contracts.INFTBridge.md#parsetransfer)
- [parseUpgrade](ethers_contracts.INFTBridge.md#parseupgrade)
- [queryFilter](ethers_contracts.INFTBridge.md#queryfilter)
- [registerChain](ethers_contracts.INFTBridge.md#registerchain)
- [removeAllListeners](ethers_contracts.INFTBridge.md#removealllisteners)
- [removeListener](ethers_contracts.INFTBridge.md#removelistener)
- [splCache](ethers_contracts.INFTBridge.md#splcache)
- [submitRecoverChainId](ethers_contracts.INFTBridge.md#submitrecoverchainid)
- [tokenImplementation](ethers_contracts.INFTBridge.md#tokenimplementation)
- [transferNFT](ethers_contracts.INFTBridge.md#transfernft)
- [upgrade](ethers_contracts.INFTBridge.md#upgrade)
- [wormhole](ethers_contracts.INFTBridge.md#wormhole)
- [wrappedAsset](ethers_contracts.INFTBridge.md#wrappedasset)
- [getContractAddress](ethers_contracts.INFTBridge.md#getcontractaddress)
- [getInterface](ethers_contracts.INFTBridge.md#getinterface)
- [isIndexed](ethers_contracts.INFTBridge.md#isindexed)

## Constructors

### constructor

• **new INFTBridge**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `completeTransfer` | (`encodeVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `encodeTransfer` | (`transfer`: { `name`: `BytesLike` ; `symbol`: `BytesLike` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish` ; `tokenID`: `BigNumberish` ; `uri`: `string`  }, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
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
| `onERC721Received` | (`operator`: `string`, `arg1`: `string`, `arg2`: `BigNumberish`, `arg3`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\> |
| `parseRegisterChain` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `emitterAddress`: `string` ; `emitterChainID`: `number` ; `module`: `string`  }\> |
| `parseTransfer` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `string`, `string`, `BigNumber`, `string`, `string`, `number`] & { `name`: `string` ; `symbol`: `string` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number` ; `tokenID`: `BigNumber` ; `uri`: `string`  }\> |
| `parseUpgrade` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `module`: `string` ; `newContract`: `string`  }\> |
| `registerChain` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `splCache` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `name`: `string` ; `symbol`: `string`  }\> |
| `submitRecoverChainId` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferNFT` | (`token`: `string`, `tokenID`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:674

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
| `completeTransfer` | (`encodeVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `encodeTransfer` | (`transfer`: { `name`: `BytesLike` ; `symbol`: `BytesLike` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish` ; `tokenID`: `BigNumberish` ; `uri`: `string`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
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
| `onERC721Received` | (`operator`: `string`, `arg1`: `string`, `arg2`: `BigNumberish`, `arg3`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseRegisterChain` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseTransfer` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseUpgrade` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerChain` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `splCache` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `submitRecoverChainId` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferNFT` | (`token`: `string`, `tokenID`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:845

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ContractUpgraded` | (`oldContract?`: ``null`` \| `string`, `newContract?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`, `string`], { `newContract`: `string` ; `oldContract`: `string`  }\> |
| `ContractUpgraded(address,address)` | (`oldContract?`: ``null`` \| `string`, `newContract?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`, `string`], { `newContract`: `string` ; `oldContract`: `string`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:827

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `completeTransfer` | (`encodeVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `encodeTransfer` | (`transfer`: { `name`: `BytesLike` ; `symbol`: `BytesLike` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish` ; `tokenID`: `BigNumberish` ; `uri`: `string`  }, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `encoded`: `string`  }\> |
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
| `onERC721Received` | (`operator`: `string`, `arg1`: `string`, `arg2`: `BigNumberish`, `arg3`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }] & { `rci`: [`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }  }\> |
| `parseRegisterChain` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `emitterAddress`: `string` ; `emitterChainID`: `number` ; `module`: `string`  }] & { `chain`: [`string`, `number`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `emitterAddress`: `string` ; `emitterChainID`: `number` ; `module`: `string`  }  }\> |
| `parseTransfer` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `string`, `string`, `BigNumber`, `string`, `string`, `number`] & { `name`: `string` ; `symbol`: `string` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number` ; `tokenID`: `BigNumber` ; `uri`: `string`  }] & { `transfer`: [`string`, `number`, `string`, `string`, `BigNumber`, `string`, `string`, `number`] & { `name`: `string` ; `symbol`: `string` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number` ; `tokenID`: `BigNumber` ; `uri`: `string`  }  }\> |
| `parseUpgrade` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `module`: `string` ; `newContract`: `string`  }] & { `chain`: [`string`, `number`, `number`, `string`] & { `action`: `number` ; `chainId`: `number` ; `module`: `string` ; `newContract`: `string`  }  }\> |
| `registerChain` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `splCache` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `string`] & { `name`: `string` ; `symbol`: `string`  }]\> |
| `submitRecoverChainId` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferNFT` | (`token`: `string`, `tokenID`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:307

___

### interface

• **interface**: `INFTBridgeInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:305

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `completeTransfer` | (`encodeVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `encodeTransfer` | (`transfer`: { `name`: `BytesLike` ; `symbol`: `BytesLike` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish` ; `tokenID`: `BigNumberish` ; `uri`: `string`  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
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
| `onERC721Received` | (`operator`: `string`, `arg1`: `string`, `arg2`: `BigNumberish`, `arg3`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseRegisterChain` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseTransfer` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseUpgrade` | (`encoded`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerChain` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `splCache` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `submitRecoverChainId` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferNFT` | (`token`: `string`, `tokenID`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:973

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

▸ **attach**(`addressOrName`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:266

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

src/ethers-contracts/INFTBridge.d.ts:600

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

src/ethers-contracts/INFTBridge.d.ts:584

___

### completeTransfer

▸ **completeTransfer**(`encodeVm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeVm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:527

___

### connect

▸ **connect**(`signerOrProvider`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:265

___

### deployed

▸ **deployed**(): `Promise`<[`INFTBridge`](ethers_contracts.INFTBridge.md)\>

#### Returns

`Promise`<[`INFTBridge`](ethers_contracts.INFTBridge.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:267

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

### encodeTransfer

▸ **encodeTransfer**(`transfer`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transfer` | `Object` |
| `transfer.name` | `BytesLike` |
| `transfer.symbol` | `BytesLike` |
| `transfer.to` | `BytesLike` |
| `transfer.toChain` | `BigNumberish` |
| `transfer.tokenAddress` | `BytesLike` |
| `transfer.tokenChain` | `BigNumberish` |
| `transfer.tokenID` | `BigNumberish` |
| `transfer.uri` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:532

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

src/ethers-contracts/INFTBridge.d.ts:586

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

src/ethers-contracts/INFTBridge.d.ts:614

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

src/ethers-contracts/INFTBridge.d.ts:570

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

src/ethers-contracts/INFTBridge.d.ts:590

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

src/ethers-contracts/INFTBridge.d.ts:592

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

src/ethers-contracts/INFTBridge.d.ts:620

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

src/ethers-contracts/INFTBridge.d.ts:616

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

src/ethers-contracts/INFTBridge.d.ts:588

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

src/ethers-contracts/INFTBridge.d.ts:575

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

src/ethers-contracts/INFTBridge.d.ts:577

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

src/ethers-contracts/INFTBridge.d.ts:607

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

src/ethers-contracts/INFTBridge.d.ts:269

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

src/ethers-contracts/INFTBridge.d.ts:292

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

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

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:272

▸ **off**(`eventName`, `listener`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:293

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

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

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:276

▸ **on**(`eventName`, `listener`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:294

___

### onERC721Received

▸ **onERC721Received**(`operator`, `arg1`, `arg2`, `arg3`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `arg1` | `string` |
| `arg2` | `BigNumberish` |
| `arg3` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:562

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

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

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:280

▸ **once**(`eventName`, `listener`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:295

___

### parseRecoverChainId

▸ **parseRecoverChainId**(`encodedRecoverChainId`, `overrides?`): `Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedRecoverChainId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\>

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:662

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

src/ethers-contracts/INFTBridge.d.ts:637

___

### parseTransfer

▸ **parseTransfer**(`encoded`, `overrides?`): `Promise`<[`string`, `number`, `string`, `string`, `BigNumber`, `string`, `string`, `number`] & { `name`: `string` ; `symbol`: `string` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number` ; `tokenID`: `BigNumber` ; `uri`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `string`, `string`, `BigNumber`, `string`, `string`, `number`] & { `name`: `string` ; `symbol`: `string` ; `to`: `string` ; `toChain`: `number` ; `tokenAddress`: `string` ; `tokenChain`: `number` ; `tokenID`: `BigNumber` ; `uri`: `string`  }\>

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:546

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

src/ethers-contracts/INFTBridge.d.ts:650

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

src/ethers-contracts/INFTBridge.d.ts:299

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

src/ethers-contracts/INFTBridge.d.ts:622

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

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

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:288

▸ **removeAllListeners**(`eventName?`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:297

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

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

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:284

▸ **removeListener**(`eventName`, `listener`): [`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`INFTBridge`](ethers_contracts.INFTBridge.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:296

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

src/ethers-contracts/INFTBridge.d.ts:609

___

### submitRecoverChainId

▸ **submitRecoverChainId**(`encodedVM`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVM` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:632

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

src/ethers-contracts/INFTBridge.d.ts:605

___

### transferNFT

▸ **transferNFT**(`token`, `tokenID`, `recipientChain`, `recipient`, `nonce`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `tokenID` | `BigNumberish` |
| `recipientChain` | `BigNumberish` |
| `recipient` | `BytesLike` |
| `nonce` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/INFTBridge.d.ts:518

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

src/ethers-contracts/INFTBridge.d.ts:627

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

src/ethers-contracts/INFTBridge.d.ts:582

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

src/ethers-contracts/INFTBridge.d.ts:594

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
