[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Implementation

# Class: Implementation

[ethers_contracts](../modules/ethers_contracts.md).Implementation

## Hierarchy

- `BaseContract`

  ↳ **`Implementation`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Implementation.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.Implementation.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.Implementation.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.Implementation.md#_wrappedemits)
- [address](ethers_contracts.Implementation.md#address)
- [callStatic](ethers_contracts.Implementation.md#callstatic)
- [deployTransaction](ethers_contracts.Implementation.md#deploytransaction)
- [estimateGas](ethers_contracts.Implementation.md#estimategas)
- [filters](ethers_contracts.Implementation.md#filters)
- [functions](ethers_contracts.Implementation.md#functions)
- [interface](ethers_contracts.Implementation.md#interface)
- [populateTransaction](ethers_contracts.Implementation.md#populatetransaction)
- [provider](ethers_contracts.Implementation.md#provider)
- [resolvedAddress](ethers_contracts.Implementation.md#resolvedaddress)
- [signer](ethers_contracts.Implementation.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.Implementation.md#_checkrunningevents)
- [\_deployed](ethers_contracts.Implementation.md#_deployed)
- [\_wrapEvent](ethers_contracts.Implementation.md#_wrapevent)
- [attach](ethers_contracts.Implementation.md#attach)
- [chainId](ethers_contracts.Implementation.md#chainid)
- [connect](ethers_contracts.Implementation.md#connect)
- [deployed](ethers_contracts.Implementation.md#deployed)
- [emit](ethers_contracts.Implementation.md#emit)
- [evmChainId](ethers_contracts.Implementation.md#evmchainid)
- [fallback](ethers_contracts.Implementation.md#fallback)
- [getCurrentGuardianSetIndex](ethers_contracts.Implementation.md#getcurrentguardiansetindex)
- [getGuardianSet](ethers_contracts.Implementation.md#getguardianset)
- [getGuardianSetExpiry](ethers_contracts.Implementation.md#getguardiansetexpiry)
- [governanceActionIsConsumed](ethers_contracts.Implementation.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.Implementation.md#governancechainid)
- [governanceContract](ethers_contracts.Implementation.md#governancecontract)
- [initialize](ethers_contracts.Implementation.md#initialize)
- [isFork](ethers_contracts.Implementation.md#isfork)
- [isInitialized](ethers_contracts.Implementation.md#isinitialized)
- [listenerCount](ethers_contracts.Implementation.md#listenercount)
- [listeners](ethers_contracts.Implementation.md#listeners)
- [messageFee](ethers_contracts.Implementation.md#messagefee)
- [nextSequence](ethers_contracts.Implementation.md#nextsequence)
- [off](ethers_contracts.Implementation.md#off)
- [on](ethers_contracts.Implementation.md#on)
- [once](ethers_contracts.Implementation.md#once)
- [parseAndVerifyVM](ethers_contracts.Implementation.md#parseandverifyvm)
- [parseContractUpgrade](ethers_contracts.Implementation.md#parsecontractupgrade)
- [parseGuardianSetUpgrade](ethers_contracts.Implementation.md#parseguardiansetupgrade)
- [parseRecoverChainId](ethers_contracts.Implementation.md#parserecoverchainid)
- [parseSetMessageFee](ethers_contracts.Implementation.md#parsesetmessagefee)
- [parseTransferFees](ethers_contracts.Implementation.md#parsetransferfees)
- [parseVM](ethers_contracts.Implementation.md#parsevm)
- [publishMessage](ethers_contracts.Implementation.md#publishmessage)
- [queryFilter](ethers_contracts.Implementation.md#queryfilter)
- [quorum](ethers_contracts.Implementation.md#quorum)
- [removeAllListeners](ethers_contracts.Implementation.md#removealllisteners)
- [removeListener](ethers_contracts.Implementation.md#removelistener)
- [submitContractUpgrade](ethers_contracts.Implementation.md#submitcontractupgrade)
- [submitNewGuardianSet](ethers_contracts.Implementation.md#submitnewguardianset)
- [submitRecoverChainId](ethers_contracts.Implementation.md#submitrecoverchainid)
- [submitSetMessageFee](ethers_contracts.Implementation.md#submitsetmessagefee)
- [submitTransferFees](ethers_contracts.Implementation.md#submittransferfees)
- [verifySignatures](ethers_contracts.Implementation.md#verifysignatures)
- [verifyVM](ethers_contracts.Implementation.md#verifyvm)
- [getContractAddress](ethers_contracts.Implementation.md#getcontractaddress)
- [getInterface](ethers_contracts.Implementation.md#getinterface)
- [isIndexed](ethers_contracts.Implementation.md#isindexed)

## Constructors

### constructor

• **new Implementation**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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

src/ethers-contracts/Implementation.d.ts:1148

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

src/ethers-contracts/Implementation.d.ts:1582

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
| `GuardianSetAdded` | (`index?`: ``null`` \| `BigNumberish`) => `TypedEventFilter`<[`number`], { `index`: `number`  }\> |
| `GuardianSetAdded(uint32)` | (`index?`: ``null`` \| `BigNumberish`) => `TypedEventFilter`<[`number`], { `index`: `number`  }\> |
| `LogMessagePublished` | (`sender?`: ``null`` \| `string`, `sequence?`: ``null``, `nonce?`: ``null``, `payload?`: ``null``, `consistencyLevel?`: ``null``) => `TypedEventFilter`<[`string`, `BigNumber`, `number`, `string`, `number`], { `consistencyLevel`: `number` ; `nonce`: `number` ; `payload`: `string` ; `sender`: `string` ; `sequence`: `BigNumber`  }\> |
| `LogMessagePublished(address,uint64,uint32,bytes,uint8)` | (`sender?`: ``null`` \| `string`, `sequence?`: ``null``, `nonce?`: ``null``, `payload?`: ``null``, `consistencyLevel?`: ``null``) => `TypedEventFilter`<[`string`, `BigNumber`, `number`, `string`, `number`], { `consistencyLevel`: `number` ; `nonce`: `number` ; `payload`: `string` ; `sender`: `string` ; `sequence`: `BigNumber`  }\> |
| `Upgraded` | (`implementation?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`], { `implementation`: `string`  }\> |
| `Upgraded(address)` | (`implementation?`: ``null`` \| `string`) => `TypedEventFilter`<[`string`], { `implementation`: `string`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/Implementation.d.ts:1490

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

src/ethers-contracts/Implementation.d.ts:369

___

### interface

• **interface**: `ImplementationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/Implementation.d.ts:367

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

src/ethers-contracts/Implementation.d.ts:1766

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

▸ **attach**(`addressOrName`): [`Implementation`](ethers_contracts.Implementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/Implementation.d.ts:328

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

src/ethers-contracts/Implementation.d.ts:809

___

### connect

▸ **connect**(`signerOrProvider`): [`Implementation`](ethers_contracts.Implementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/Implementation.d.ts:327

___

### deployed

▸ **deployed**(): `Promise`<[`Implementation`](ethers_contracts.Implementation.md)\>

#### Returns

`Promise`<[`Implementation`](ethers_contracts.Implementation.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/Implementation.d.ts:329

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

src/ethers-contracts/Implementation.d.ts:811

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

src/ethers-contracts/Implementation.d.ts:813

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

src/ethers-contracts/Implementation.d.ts:815

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

src/ethers-contracts/Implementation.d.ts:820

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

src/ethers-contracts/Implementation.d.ts:822

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

src/ethers-contracts/Implementation.d.ts:827

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

src/ethers-contracts/Implementation.d.ts:829

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

src/ethers-contracts/Implementation.d.ts:1144

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

src/ethers-contracts/Implementation.d.ts:831

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

src/ethers-contracts/Implementation.d.ts:833

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

src/ethers-contracts/Implementation.d.ts:331

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

src/ethers-contracts/Implementation.d.ts:354

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

src/ethers-contracts/Implementation.d.ts:835

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

src/ethers-contracts/Implementation.d.ts:837

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Implementation`](ethers_contracts.Implementation.md)

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

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Implementation.d.ts:334

▸ **off**(`eventName`, `listener`): [`Implementation`](ethers_contracts.Implementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Implementation.d.ts:355

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Implementation`](ethers_contracts.Implementation.md)

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

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Implementation.d.ts:338

▸ **on**(`eventName`, `listener`): [`Implementation`](ethers_contracts.Implementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Implementation.d.ts:356

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Implementation`](ethers_contracts.Implementation.md)

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

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Implementation.d.ts:342

▸ **once**(`eventName`, `listener`): [`Implementation`](ethers_contracts.Implementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Implementation.d.ts:357

___

### parseAndVerifyVM

▸ **parseAndVerifyVM**(`encodedVM`, `overrides?`): `Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }, `boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean` ; `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\>

parseAndVerifyVM serves to parse an encodedVM and wholy validate it for consumption

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVM` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }, `boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean` ; `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:842

___

### parseContractUpgrade

▸ **parseContractUpgrade**(`encodedUpgrade`, `overrides?`): `Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }\>

Parse a contract upgrade (action 1) with minimal validation

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedUpgrade` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:928

___

### parseGuardianSetUpgrade

▸ **parseGuardianSetUpgrade**(`encodedUpgrade`, `overrides?`): `Promise`<[`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }\>

Parse a guardianSet upgrade (action 2) with minimal validation

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedUpgrade` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:943

___

### parseRecoverChainId

▸ **parseRecoverChainId**(`encodedRecoverChainId`, `overrides?`): `Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\>

Parse a recoverChainId (action 5) with minimal validation

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedRecoverChainId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:968

___

### parseSetMessageFee

▸ **parseSetMessageFee**(`encodedSetMessageFee`, `overrides?`): `Promise`<[`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }\>

Parse a setMessageFee (action 3) with minimal validation

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedSetMessageFee` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:983

___

### parseTransferFees

▸ **parseTransferFees**(`encodedTransferFees`, `overrides?`): `Promise`<[`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }\>

Parse a transferFees (action 4) with minimal validation

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedTransferFees` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:998

___

### parseVM

▸ **parseVM**(`encodedVM`, `overrides?`): `Promise`<[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }\>

parseVM serves to parse an encodedVM into a vm struct  - it intentionally performs no validation functions, it simply parses raw into a struct

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVM` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:1014

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

src/ethers-contracts/Implementation.d.ts:1137

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

src/ethers-contracts/Implementation.d.ts:361

___

### quorum

▸ **quorum**(`numGuardians`, `overrides?`): `Promise`<`BigNumber`\>

quorum serves solely to determine the number of signatures required to acheive quorum

#### Parameters

| Name | Type |
| :------ | :------ |
| `numGuardians` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:1058

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Implementation`](ethers_contracts.Implementation.md)

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

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Implementation.d.ts:350

▸ **removeAllListeners**(`eventName?`): [`Implementation`](ethers_contracts.Implementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Implementation.d.ts:359

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Implementation`](ethers_contracts.Implementation.md)

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

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Implementation.d.ts:346

▸ **removeListener**(`eventName`, `listener`): [`Implementation`](ethers_contracts.Implementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Implementation`](ethers_contracts.Implementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Implementation.d.ts:358

___

### submitContractUpgrade

▸ **submitContractUpgrade**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

Upgrades a contract via Governance VAA/VM

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:1066

___

### submitNewGuardianSet

▸ **submitNewGuardianSet**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

Deploys a new `guardianSet` via Governance VAA/VM

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:1074

___

### submitRecoverChainId

▸ **submitRecoverChainId**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

Updates the `chainId` and `evmChainId` on a forked chain via Governance VAA/VM

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:1082

___

### submitSetMessageFee

▸ **submitSetMessageFee**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets a `messageFee` via Governance VAA/VM

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:1090

___

### submitTransferFees

▸ **submitTransferFees**(`_vm`, `overrides?`): `Promise`<`ContractTransaction`\>

Submits transfer fees to the recipient via Governance VAA/VM

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vm` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/Implementation.d.ts:1098

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

src/ethers-contracts/Implementation.d.ts:1103

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

src/ethers-contracts/Implementation.d.ts:1115

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
