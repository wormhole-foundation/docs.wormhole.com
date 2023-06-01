[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / MockNFTBridgeImplementation

# Class: MockNFTBridgeImplementation

[ethers_contracts](../modules/ethers_contracts.md).MockNFTBridgeImplementation

## Hierarchy

- `BaseContract`

  ↳ **`MockNFTBridgeImplementation`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.MockNFTBridgeImplementation.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.MockNFTBridgeImplementation.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.MockNFTBridgeImplementation.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.MockNFTBridgeImplementation.md#_wrappedemits)
- [address](ethers_contracts.MockNFTBridgeImplementation.md#address)
- [callStatic](ethers_contracts.MockNFTBridgeImplementation.md#callstatic)
- [deployTransaction](ethers_contracts.MockNFTBridgeImplementation.md#deploytransaction)
- [estimateGas](ethers_contracts.MockNFTBridgeImplementation.md#estimategas)
- [filters](ethers_contracts.MockNFTBridgeImplementation.md#filters)
- [functions](ethers_contracts.MockNFTBridgeImplementation.md#functions)
- [interface](ethers_contracts.MockNFTBridgeImplementation.md#interface)
- [populateTransaction](ethers_contracts.MockNFTBridgeImplementation.md#populatetransaction)
- [provider](ethers_contracts.MockNFTBridgeImplementation.md#provider)
- [resolvedAddress](ethers_contracts.MockNFTBridgeImplementation.md#resolvedaddress)
- [signer](ethers_contracts.MockNFTBridgeImplementation.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.MockNFTBridgeImplementation.md#_checkrunningevents)
- [\_deployed](ethers_contracts.MockNFTBridgeImplementation.md#_deployed)
- [\_wrapEvent](ethers_contracts.MockNFTBridgeImplementation.md#_wrapevent)
- [attach](ethers_contracts.MockNFTBridgeImplementation.md#attach)
- [bridgeContracts](ethers_contracts.MockNFTBridgeImplementation.md#bridgecontracts)
- [chainId](ethers_contracts.MockNFTBridgeImplementation.md#chainid)
- [completeTransfer](ethers_contracts.MockNFTBridgeImplementation.md#completetransfer)
- [connect](ethers_contracts.MockNFTBridgeImplementation.md#connect)
- [deployed](ethers_contracts.MockNFTBridgeImplementation.md#deployed)
- [emit](ethers_contracts.MockNFTBridgeImplementation.md#emit)
- [encodeTransfer](ethers_contracts.MockNFTBridgeImplementation.md#encodetransfer)
- [evmChainId](ethers_contracts.MockNFTBridgeImplementation.md#evmchainid)
- [fallback](ethers_contracts.MockNFTBridgeImplementation.md#fallback)
- [finality](ethers_contracts.MockNFTBridgeImplementation.md#finality)
- [governanceActionIsConsumed](ethers_contracts.MockNFTBridgeImplementation.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.MockNFTBridgeImplementation.md#governancechainid)
- [governanceContract](ethers_contracts.MockNFTBridgeImplementation.md#governancecontract)
- [implementation](ethers_contracts.MockNFTBridgeImplementation.md#implementation)
- [initialize](ethers_contracts.MockNFTBridgeImplementation.md#initialize)
- [isFork](ethers_contracts.MockNFTBridgeImplementation.md#isfork)
- [isInitialized](ethers_contracts.MockNFTBridgeImplementation.md#isinitialized)
- [isTransferCompleted](ethers_contracts.MockNFTBridgeImplementation.md#istransfercompleted)
- [isWrappedAsset](ethers_contracts.MockNFTBridgeImplementation.md#iswrappedasset)
- [listenerCount](ethers_contracts.MockNFTBridgeImplementation.md#listenercount)
- [listeners](ethers_contracts.MockNFTBridgeImplementation.md#listeners)
- [off](ethers_contracts.MockNFTBridgeImplementation.md#off)
- [on](ethers_contracts.MockNFTBridgeImplementation.md#on)
- [onERC721Received](ethers_contracts.MockNFTBridgeImplementation.md#onerc721received)
- [once](ethers_contracts.MockNFTBridgeImplementation.md#once)
- [parseRecoverChainId](ethers_contracts.MockNFTBridgeImplementation.md#parserecoverchainid)
- [parseRegisterChain](ethers_contracts.MockNFTBridgeImplementation.md#parseregisterchain)
- [parseTransfer](ethers_contracts.MockNFTBridgeImplementation.md#parsetransfer)
- [parseUpgrade](ethers_contracts.MockNFTBridgeImplementation.md#parseupgrade)
- [queryFilter](ethers_contracts.MockNFTBridgeImplementation.md#queryfilter)
- [registerChain](ethers_contracts.MockNFTBridgeImplementation.md#registerchain)
- [removeAllListeners](ethers_contracts.MockNFTBridgeImplementation.md#removealllisteners)
- [removeListener](ethers_contracts.MockNFTBridgeImplementation.md#removelistener)
- [splCache](ethers_contracts.MockNFTBridgeImplementation.md#splcache)
- [submitRecoverChainId](ethers_contracts.MockNFTBridgeImplementation.md#submitrecoverchainid)
- [testNewImplementationActive](ethers_contracts.MockNFTBridgeImplementation.md#testnewimplementationactive)
- [testOverwriteEVMChainId](ethers_contracts.MockNFTBridgeImplementation.md#testoverwriteevmchainid)
- [tokenImplementation](ethers_contracts.MockNFTBridgeImplementation.md#tokenimplementation)
- [transferNFT](ethers_contracts.MockNFTBridgeImplementation.md#transfernft)
- [upgrade](ethers_contracts.MockNFTBridgeImplementation.md#upgrade)
- [wormhole](ethers_contracts.MockNFTBridgeImplementation.md#wormhole)
- [wrappedAsset](ethers_contracts.MockNFTBridgeImplementation.md#wrappedasset)
- [getContractAddress](ethers_contracts.MockNFTBridgeImplementation.md#getcontractaddress)
- [getInterface](ethers_contracts.MockNFTBridgeImplementation.md#getinterface)
- [isIndexed](ethers_contracts.MockNFTBridgeImplementation.md#isindexed)

## Constructors

### constructor

• **new MockNFTBridgeImplementation**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferNFT` | (`token`: `string`, `tokenID`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:734

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferNFT` | (`token`: `string`, `tokenID`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:951

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:901

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferNFT` | (`token`: `string`, `tokenID`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:339

___

### interface

• **interface**: `MockNFTBridgeImplementationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:337

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `tokenImplementation` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferNFT` | (`token`: `string`, `tokenID`: `BigNumberish`, `recipientChain`: `BigNumberish`, `recipient`: `BytesLike`, `nonce`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgrade` | (`encodedVM`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `wormhole` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `wrappedAsset` | (`tokenChainId`: `BigNumberish`, `tokenAddress`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:1093

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

▸ **attach**(`addressOrName`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:298

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:564

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:569

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:571

___

### connect

▸ **connect**(`signerOrProvider`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:297

___

### deployed

▸ **deployed**(): `Promise`<[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)\>

#### Returns

`Promise`<[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:299

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:576

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:590

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:592

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:594

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:599

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:601

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:603

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:722

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:605

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:607

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:609

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:614

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:301

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:324

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

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

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:304

▸ **off**(`eventName`, `listener`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:325

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

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

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:308

▸ **on**(`eventName`, `listener`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:326

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:616

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

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

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:312

▸ **once**(`eventName`, `listener`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:327

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:627

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:639

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:652

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:668

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:331

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:680

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

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

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:320

▸ **removeAllListeners**(`eventName?`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:329

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

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

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:316

▸ **removeListener**(`eventName`, `listener`): [`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockNFTBridgeImplementation`](ethers_contracts.MockNFTBridgeImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:328

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:685

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:693

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:726

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:728

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:698

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:700

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:709

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:714

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

src/ethers-contracts/MockNFTBridgeImplementation.d.ts:716

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
