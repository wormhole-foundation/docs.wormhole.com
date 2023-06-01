[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / NFTBridge

# Class: NFTBridge

[ethers_contracts](../modules/ethers_contracts.md).NFTBridge

## Hierarchy

- `BaseContract`

  ↳ **`NFTBridge`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.NFTBridge.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.NFTBridge.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.NFTBridge.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.NFTBridge.md#_wrappedemits)
- [address](ethers_contracts.NFTBridge.md#address)
- [callStatic](ethers_contracts.NFTBridge.md#callstatic)
- [deployTransaction](ethers_contracts.NFTBridge.md#deploytransaction)
- [estimateGas](ethers_contracts.NFTBridge.md#estimategas)
- [filters](ethers_contracts.NFTBridge.md#filters)
- [functions](ethers_contracts.NFTBridge.md#functions)
- [interface](ethers_contracts.NFTBridge.md#interface)
- [populateTransaction](ethers_contracts.NFTBridge.md#populatetransaction)
- [provider](ethers_contracts.NFTBridge.md#provider)
- [resolvedAddress](ethers_contracts.NFTBridge.md#resolvedaddress)
- [signer](ethers_contracts.NFTBridge.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.NFTBridge.md#_checkrunningevents)
- [\_deployed](ethers_contracts.NFTBridge.md#_deployed)
- [\_wrapEvent](ethers_contracts.NFTBridge.md#_wrapevent)
- [attach](ethers_contracts.NFTBridge.md#attach)
- [bridgeContracts](ethers_contracts.NFTBridge.md#bridgecontracts)
- [chainId](ethers_contracts.NFTBridge.md#chainid)
- [completeTransfer](ethers_contracts.NFTBridge.md#completetransfer)
- [connect](ethers_contracts.NFTBridge.md#connect)
- [deployed](ethers_contracts.NFTBridge.md#deployed)
- [emit](ethers_contracts.NFTBridge.md#emit)
- [encodeTransfer](ethers_contracts.NFTBridge.md#encodetransfer)
- [evmChainId](ethers_contracts.NFTBridge.md#evmchainid)
- [fallback](ethers_contracts.NFTBridge.md#fallback)
- [finality](ethers_contracts.NFTBridge.md#finality)
- [governanceActionIsConsumed](ethers_contracts.NFTBridge.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.NFTBridge.md#governancechainid)
- [governanceContract](ethers_contracts.NFTBridge.md#governancecontract)
- [isFork](ethers_contracts.NFTBridge.md#isfork)
- [isInitialized](ethers_contracts.NFTBridge.md#isinitialized)
- [isTransferCompleted](ethers_contracts.NFTBridge.md#istransfercompleted)
- [isWrappedAsset](ethers_contracts.NFTBridge.md#iswrappedasset)
- [listenerCount](ethers_contracts.NFTBridge.md#listenercount)
- [listeners](ethers_contracts.NFTBridge.md#listeners)
- [off](ethers_contracts.NFTBridge.md#off)
- [on](ethers_contracts.NFTBridge.md#on)
- [onERC721Received](ethers_contracts.NFTBridge.md#onerc721received)
- [once](ethers_contracts.NFTBridge.md#once)
- [parseRecoverChainId](ethers_contracts.NFTBridge.md#parserecoverchainid)
- [parseRegisterChain](ethers_contracts.NFTBridge.md#parseregisterchain)
- [parseTransfer](ethers_contracts.NFTBridge.md#parsetransfer)
- [parseUpgrade](ethers_contracts.NFTBridge.md#parseupgrade)
- [queryFilter](ethers_contracts.NFTBridge.md#queryfilter)
- [registerChain](ethers_contracts.NFTBridge.md#registerchain)
- [removeAllListeners](ethers_contracts.NFTBridge.md#removealllisteners)
- [removeListener](ethers_contracts.NFTBridge.md#removelistener)
- [splCache](ethers_contracts.NFTBridge.md#splcache)
- [submitRecoverChainId](ethers_contracts.NFTBridge.md#submitrecoverchainid)
- [tokenImplementation](ethers_contracts.NFTBridge.md#tokenimplementation)
- [transferNFT](ethers_contracts.NFTBridge.md#transfernft)
- [upgrade](ethers_contracts.NFTBridge.md#upgrade)
- [wormhole](ethers_contracts.NFTBridge.md#wormhole)
- [wrappedAsset](ethers_contracts.NFTBridge.md#wrappedasset)
- [getContractAddress](ethers_contracts.NFTBridge.md#getcontractaddress)
- [getInterface](ethers_contracts.NFTBridge.md#getinterface)
- [isIndexed](ethers_contracts.NFTBridge.md#isindexed)

## Constructors

### constructor

• **new NFTBridge**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `completeTransfer` | (`encodedVm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `encodeTransfer` | (`transfer`: { `name`: `BytesLike` ; `symbol`: `BytesLike` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish` ; `tokenID`: `BigNumberish` ; `uri`: `string`  }, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
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

src/ethers-contracts/NFTBridge.d.ts:673

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
| `completeTransfer` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `encodeTransfer` | (`transfer`: { `name`: `BytesLike` ; `symbol`: `BytesLike` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish` ; `tokenID`: `BigNumberish` ; `uri`: `string`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
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

src/ethers-contracts/NFTBridge.d.ts:878

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

src/ethers-contracts/NFTBridge.d.ts:828

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `completeTransfer` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `encodeTransfer` | (`transfer`: { `name`: `BytesLike` ; `symbol`: `BytesLike` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish` ; `tokenID`: `BigNumberish` ; `uri`: `string`  }, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `encoded`: `string`  }\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
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

src/ethers-contracts/NFTBridge.d.ts:306

___

### interface

• **interface**: `NFTBridgeInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:304

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bridgeContracts` | (`chainId_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `completeTransfer` | (`encodedVm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `encodeTransfer` | (`transfer`: { `name`: `BytesLike` ; `symbol`: `BytesLike` ; `to`: `BytesLike` ; `toChain`: `BigNumberish` ; `tokenAddress`: `BytesLike` ; `tokenChain`: `BigNumberish` ; `tokenID`: `BigNumberish` ; `uri`: `string`  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `finality` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
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

src/ethers-contracts/NFTBridge.d.ts:1006

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

▸ **attach**(`addressOrName`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:265

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

src/ethers-contracts/NFTBridge.d.ts:517

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

src/ethers-contracts/NFTBridge.d.ts:522

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

src/ethers-contracts/NFTBridge.d.ts:630

___

### connect

▸ **connect**(`signerOrProvider`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:264

___

### deployed

▸ **deployed**(): `Promise`<[`NFTBridge`](ethers_contracts.NFTBridge.md)\>

#### Returns

`Promise`<[`NFTBridge`](ethers_contracts.NFTBridge.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:266

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

src/ethers-contracts/NFTBridge.d.ts:635

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

src/ethers-contracts/NFTBridge.d.ts:524

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

src/ethers-contracts/NFTBridge.d.ts:526

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

src/ethers-contracts/NFTBridge.d.ts:528

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

src/ethers-contracts/NFTBridge.d.ts:533

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

src/ethers-contracts/NFTBridge.d.ts:535

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

src/ethers-contracts/NFTBridge.d.ts:537

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

src/ethers-contracts/NFTBridge.d.ts:539

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

src/ethers-contracts/NFTBridge.d.ts:541

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

src/ethers-contracts/NFTBridge.d.ts:546

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

src/ethers-contracts/NFTBridge.d.ts:268

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

src/ethers-contracts/NFTBridge.d.ts:291

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

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

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:271

▸ **off**(`eventName`, `listener`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:292

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

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

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:275

▸ **on**(`eventName`, `listener`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:293

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

src/ethers-contracts/NFTBridge.d.ts:665

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

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

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:279

▸ **once**(`eventName`, `listener`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:294

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

src/ethers-contracts/NFTBridge.d.ts:551

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

src/ethers-contracts/NFTBridge.d.ts:563

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

src/ethers-contracts/NFTBridge.d.ts:649

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

src/ethers-contracts/NFTBridge.d.ts:576

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

src/ethers-contracts/NFTBridge.d.ts:298

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

src/ethers-contracts/NFTBridge.d.ts:588

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

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

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:287

▸ **removeAllListeners**(`eventName?`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:296

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

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

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:283

▸ **removeListener**(`eventName`, `listener`): [`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NFTBridge`](ethers_contracts.NFTBridge.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/NFTBridge.d.ts:295

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

src/ethers-contracts/NFTBridge.d.ts:593

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

src/ethers-contracts/NFTBridge.d.ts:601

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

src/ethers-contracts/NFTBridge.d.ts:606

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

src/ethers-contracts/NFTBridge.d.ts:621

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

src/ethers-contracts/NFTBridge.d.ts:608

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

src/ethers-contracts/NFTBridge.d.ts:613

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

src/ethers-contracts/NFTBridge.d.ts:615

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
