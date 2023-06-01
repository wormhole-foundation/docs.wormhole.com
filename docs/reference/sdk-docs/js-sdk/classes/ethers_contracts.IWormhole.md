[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IWormhole

# Class: IWormhole

[ethers_contracts](../modules/ethers_contracts.md).IWormhole

## Hierarchy

- `BaseContract`

  ↳ **`IWormhole`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.IWormhole.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.IWormhole.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.IWormhole.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.IWormhole.md#_wrappedemits)
- [address](ethers_contracts.IWormhole.md#address)
- [callStatic](ethers_contracts.IWormhole.md#callstatic)
- [deployTransaction](ethers_contracts.IWormhole.md#deploytransaction)
- [estimateGas](ethers_contracts.IWormhole.md#estimategas)
- [filters](ethers_contracts.IWormhole.md#filters)
- [functions](ethers_contracts.IWormhole.md#functions)
- [interface](ethers_contracts.IWormhole.md#interface)
- [populateTransaction](ethers_contracts.IWormhole.md#populatetransaction)
- [provider](ethers_contracts.IWormhole.md#provider)
- [resolvedAddress](ethers_contracts.IWormhole.md#resolvedaddress)
- [signer](ethers_contracts.IWormhole.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.IWormhole.md#_checkrunningevents)
- [\_deployed](ethers_contracts.IWormhole.md#_deployed)
- [\_wrapEvent](ethers_contracts.IWormhole.md#_wrapevent)
- [attach](ethers_contracts.IWormhole.md#attach)
- [chainId](ethers_contracts.IWormhole.md#chainid)
- [connect](ethers_contracts.IWormhole.md#connect)
- [deployed](ethers_contracts.IWormhole.md#deployed)
- [emit](ethers_contracts.IWormhole.md#emit)
- [evmChainId](ethers_contracts.IWormhole.md#evmchainid)
- [fallback](ethers_contracts.IWormhole.md#fallback)
- [getCurrentGuardianSetIndex](ethers_contracts.IWormhole.md#getcurrentguardiansetindex)
- [getGuardianSet](ethers_contracts.IWormhole.md#getguardianset)
- [getGuardianSetExpiry](ethers_contracts.IWormhole.md#getguardiansetexpiry)
- [governanceActionIsConsumed](ethers_contracts.IWormhole.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.IWormhole.md#governancechainid)
- [governanceContract](ethers_contracts.IWormhole.md#governancecontract)
- [initialize](ethers_contracts.IWormhole.md#initialize)
- [isFork](ethers_contracts.IWormhole.md#isfork)
- [isInitialized](ethers_contracts.IWormhole.md#isinitialized)
- [listenerCount](ethers_contracts.IWormhole.md#listenercount)
- [listeners](ethers_contracts.IWormhole.md#listeners)
- [messageFee](ethers_contracts.IWormhole.md#messagefee)
- [nextSequence](ethers_contracts.IWormhole.md#nextsequence)
- [off](ethers_contracts.IWormhole.md#off)
- [on](ethers_contracts.IWormhole.md#on)
- [once](ethers_contracts.IWormhole.md#once)
- [parseAndVerifyVM](ethers_contracts.IWormhole.md#parseandverifyvm)
- [parseContractUpgrade](ethers_contracts.IWormhole.md#parsecontractupgrade)
- [parseGuardianSetUpgrade](ethers_contracts.IWormhole.md#parseguardiansetupgrade)
- [parseRecoverChainId](ethers_contracts.IWormhole.md#parserecoverchainid)
- [parseSetMessageFee](ethers_contracts.IWormhole.md#parsesetmessagefee)
- [parseTransferFees](ethers_contracts.IWormhole.md#parsetransferfees)
- [parseVM](ethers_contracts.IWormhole.md#parsevm)
- [publishMessage](ethers_contracts.IWormhole.md#publishmessage)
- [queryFilter](ethers_contracts.IWormhole.md#queryfilter)
- [quorum](ethers_contracts.IWormhole.md#quorum)
- [removeAllListeners](ethers_contracts.IWormhole.md#removealllisteners)
- [removeListener](ethers_contracts.IWormhole.md#removelistener)
- [submitContractUpgrade](ethers_contracts.IWormhole.md#submitcontractupgrade)
- [submitNewGuardianSet](ethers_contracts.IWormhole.md#submitnewguardianset)
- [submitRecoverChainId](ethers_contracts.IWormhole.md#submitrecoverchainid)
- [submitSetMessageFee](ethers_contracts.IWormhole.md#submitsetmessagefee)
- [submitTransferFees](ethers_contracts.IWormhole.md#submittransferfees)
- [verifySignatures](ethers_contracts.IWormhole.md#verifysignatures)
- [verifyVM](ethers_contracts.IWormhole.md#verifyvm)
- [getContractAddress](ethers_contracts.IWormhole.md#getcontractaddress)
- [getInterface](ethers_contracts.IWormhole.md#getinterface)
- [isIndexed](ethers_contracts.IWormhole.md#isindexed)

## Constructors

### constructor

• **new IWormhole**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentGuardianSetIndex` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getGuardianSet` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }\> |
| `getGuardianSetExpiry` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialize` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseAndVerifyVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }, `boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean` ; `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\> |
| `parseContractUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }\> |
| `parseGuardianSetUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\> |
| `parseSetMessageFee` | (`encodedSetMessageFee`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }\> |
| `parseTransferFees` | (`encodedTransferFees`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }\> |
| `parseVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }\> |
| `publishMessage` | (`nonce`: `BigNumberish`, `payload`: `BytesLike`, `consistencyLevel`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `quorum` | (`numGuardians`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `submitContractUpgrade` | (`_vm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitNewGuardianSet` | (`_vm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitRecoverChainId` | (`_vm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitSetMessageFee` | (`_vm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitTransferFees` | (`_vm`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1056

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
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentGuardianSetIndex` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGuardianSet` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGuardianSetExpiry` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseAndVerifyVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseContractUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseGuardianSetUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseSetMessageFee` | (`encodedSetMessageFee`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseTransferFees` | (`encodedTransferFees`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `publishMessage` | (`nonce`: `BigNumberish`, `payload`: `BytesLike`, `consistencyLevel`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `quorum` | (`numGuardians`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `submitContractUpgrade` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `submitNewGuardianSet` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `submitRecoverChainId` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `submitSetMessageFee` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `submitTransferFees` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1419

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ContractUpgraded` | (`oldContract?`: ``null`` \| `string`, `newContract?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`, `string`], { `newContract`: `string` ; `oldContract`: `string`  }\> |
| `ContractUpgraded(address,address)` | (`oldContract?`: ``null`` \| `string`, `newContract?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`, `string`], { `newContract`: `string` ; `oldContract`: `string`  }\> |
| `GuardianSetAdded` | (`index?`: ``null`` \| `BigNumberish`) => `TypedEventFilter`<[`number`], { `index`: `number`  }\> |
| `GuardianSetAdded(uint32)` | (`index?`: ``null`` \| `BigNumberish`) => `TypedEventFilter`<[`number`], { `index`: `number`  }\> |
| `LogMessagePublished` | (`sender?`: ``null`` \| `string`, `sequence?`: ``null``, `nonce?`: ``null``, `payload?`: ``null``, `consistencyLevel?`: ``null``) => `TypedEventFilter`<[`string`, `BigNumber`, `number`, `string`, `number`], { `consistencyLevel`: `number` ; `nonce`: `number` ; `payload`: `string` ; `sender`: `string` ; `sequence`: `BigNumber`  }\> |
| `LogMessagePublished(address,uint64,uint32,bytes,uint8)` | (`sender?`: ``null`` \| `string`, `sequence?`: ``null``, `nonce?`: ``null``, `payload?`: ``null``, `consistencyLevel?`: ``null``) => `TypedEventFilter`<[`string`, `BigNumber`, `number`, `string`, `number`], { `consistencyLevel`: `number` ; `nonce`: `number` ; `payload`: `string` ; `sender`: `string` ; `sequence`: `BigNumber`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1359

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getCurrentGuardianSetIndex` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `getGuardianSet` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }]\> |
| `getGuardianSetExpiry` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `parseAndVerifyVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }, `boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean` ; `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\> |
| `parseContractUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }] & { `cu`: [`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }  }\> |
| `parseGuardianSetUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }] & { `gsu`: [`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }  }\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }] & { `rci`: [`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }  }\> |
| `parseSetMessageFee` | (`encodedSetMessageFee`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }] & { `smf`: [`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }  }\> |
| `parseTransferFees` | (`encodedTransferFees`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }] & { `tf`: [`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }  }\> |
| `parseVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }] & { `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\> |
| `publishMessage` | (`nonce`: `BigNumberish`, `payload`: `BytesLike`, `consistencyLevel`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `quorum` | (`numGuardians`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numSignaturesRequiredForQuorum`: `BigNumber`  }\> |
| `submitContractUpgrade` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitNewGuardianSet` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitRecoverChainId` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitSetMessageFee` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitTransferFees` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/IWormhole.d.ts:355

___

### interface

• **interface**: `IWormholeInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/IWormhole.d.ts:353

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `evmChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentGuardianSetIndex` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getGuardianSet` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getGuardianSetExpiry` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceActionIsConsumed` | (`hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `governanceContract` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseAndVerifyVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseContractUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseGuardianSetUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseSetMessageFee` | (`encodedSetMessageFee`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseTransferFees` | (`encodedTransferFees`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `publishMessage` | (`nonce`: `BigNumberish`, `payload`: `BytesLike`, `consistencyLevel`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `quorum` | (`numGuardians`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `submitContractUpgrade` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitNewGuardianSet` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitRecoverChainId` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitSetMessageFee` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitTransferFees` | (`_vm`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1564

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

▸ **attach**(`addressOrName`): [`IWormhole`](ethers_contracts.IWormhole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/IWormhole.d.ts:314

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

src/ethers-contracts/IWormhole.d.ts:946

___

### connect

▸ **connect**(`signerOrProvider`): [`IWormhole`](ethers_contracts.IWormhole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/IWormhole.d.ts:313

___

### deployed

▸ **deployed**(): `Promise`<[`IWormhole`](ethers_contracts.IWormhole.md)\>

#### Returns

`Promise`<[`IWormhole`](ethers_contracts.IWormhole.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/IWormhole.d.ts:315

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

### evmChainId

▸ **evmChainId**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:956

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

### getCurrentGuardianSetIndex

▸ **getCurrentGuardianSetIndex**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:935

___

### getGuardianSet

▸ **getGuardianSet**(`index`, `overrides?`): `Promise`<[`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:930

___

### getGuardianSetExpiry

▸ **getGuardianSetExpiry**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:937

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

src/ethers-contracts/IWormhole.d.ts:939

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

src/ethers-contracts/IWormhole.d.ts:950

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

src/ethers-contracts/IWormhole.d.ts:952

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

src/ethers-contracts/IWormhole.d.ts:763

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

src/ethers-contracts/IWormhole.d.ts:948

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

src/ethers-contracts/IWormhole.d.ts:944

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

src/ethers-contracts/IWormhole.d.ts:317

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

src/ethers-contracts/IWormhole.d.ts:340

___

### messageFee

▸ **messageFee**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:954

___

### nextSequence

▸ **nextSequence**(`emitter`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:958

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IWormhole`](ethers_contracts.IWormhole.md)

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

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IWormhole.d.ts:320

▸ **off**(`eventName`, `listener`): [`IWormhole`](ethers_contracts.IWormhole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/IWormhole.d.ts:341

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IWormhole`](ethers_contracts.IWormhole.md)

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

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IWormhole.d.ts:324

▸ **on**(`eventName`, `listener`): [`IWormhole`](ethers_contracts.IWormhole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/IWormhole.d.ts:342

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IWormhole`](ethers_contracts.IWormhole.md)

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

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IWormhole.d.ts:328

▸ **once**(`eventName`, `listener`): [`IWormhole`](ethers_contracts.IWormhole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/IWormhole.d.ts:343

___

### parseAndVerifyVM

▸ **parseAndVerifyVM**(`encodedVM`, `overrides?`): `Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }, `boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean` ; `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVM` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }, `boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean` ; `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:767

___

### parseContractUpgrade

▸ **parseContractUpgrade**(`encodedUpgrade`, `overrides?`): `Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedUpgrade` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:960

___

### parseGuardianSetUpgrade

▸ **parseGuardianSetUpgrade**(`encodedUpgrade`, `overrides?`): `Promise`<[`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedUpgrade` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:972

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

src/ethers-contracts/IWormhole.d.ts:1019

___

### parseSetMessageFee

▸ **parseSetMessageFee**(`encodedSetMessageFee`, `overrides?`): `Promise`<[`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedSetMessageFee` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:994

___

### parseTransferFees

▸ **parseTransferFees**(`encodedTransferFees`, `overrides?`): `Promise`<[`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedTransferFees` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1006

___

### parseVM

▸ **parseVM**(`encodedVM`, `overrides?`): `Promise`<[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVM` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:884

___

### publishMessage

▸ **publishMessage**(`nonce`, `payload`, `consistencyLevel`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonce` | `BigNumberish` |
| `payload` | `BytesLike` |
| `consistencyLevel` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:756

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

src/ethers-contracts/IWormhole.d.ts:347

___

### quorum

▸ **quorum**(`numGuardians`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `numGuardians` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:925

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IWormhole`](ethers_contracts.IWormhole.md)

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

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IWormhole.d.ts:336

▸ **removeAllListeners**(`eventName?`): [`IWormhole`](ethers_contracts.IWormhole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/IWormhole.d.ts:345

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IWormhole`](ethers_contracts.IWormhole.md)

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

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IWormhole.d.ts:332

▸ **removeListener**(`eventName`, `listener`): [`IWormhole`](ethers_contracts.IWormhole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IWormhole`](ethers_contracts.IWormhole.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/IWormhole.d.ts:344

___

### submitContractUpgrade

▸ **submitContractUpgrade**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1031

___

### submitNewGuardianSet

▸ **submitNewGuardianSet**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1041

___

### submitRecoverChainId

▸ **submitRecoverChainId**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1051

___

### submitSetMessageFee

▸ **submitSetMessageFee**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1036

___

### submitTransferFees

▸ **submitTransferFees**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:1046

___

### verifySignatures

▸ **verifySignatures**(`hash`, `signatures`, `guardianSet`, `overrides?`): `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `BytesLike` |
| `signatures` | { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] |
| `guardianSet` | `Object` |
| `guardianSet.expirationTime` | `BigNumberish` |
| `guardianSet.keys` | `string`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:872

___

### verifyVM

▸ **verifyVM**(`vm`, `overrides?`): `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vm` | `Object` |
| `vm.consistencyLevel` | `BigNumberish` |
| `vm.emitterAddress` | `BytesLike` |
| `vm.emitterChainId` | `BigNumberish` |
| `vm.guardianSetIndex` | `BigNumberish` |
| `vm.hash` | `BytesLike` |
| `vm.nonce` | `BigNumberish` |
| `vm.payload` | `BytesLike` |
| `vm.sequence` | `BigNumberish` |
| `vm.signatures` | { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] |
| `vm.timestamp` | `BigNumberish` |
| `vm.version` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\>

#### Defined in

src/ethers-contracts/IWormhole.d.ts:850

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
