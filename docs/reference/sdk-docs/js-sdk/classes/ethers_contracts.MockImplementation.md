[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / MockImplementation

# Class: MockImplementation

[ethers_contracts](../modules/ethers_contracts.md).MockImplementation

## Hierarchy

- `BaseContract`

  ↳ **`MockImplementation`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.MockImplementation.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.MockImplementation.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.MockImplementation.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.MockImplementation.md#_wrappedemits)
- [address](ethers_contracts.MockImplementation.md#address)
- [callStatic](ethers_contracts.MockImplementation.md#callstatic)
- [deployTransaction](ethers_contracts.MockImplementation.md#deploytransaction)
- [estimateGas](ethers_contracts.MockImplementation.md#estimategas)
- [filters](ethers_contracts.MockImplementation.md#filters)
- [functions](ethers_contracts.MockImplementation.md#functions)
- [interface](ethers_contracts.MockImplementation.md#interface)
- [populateTransaction](ethers_contracts.MockImplementation.md#populatetransaction)
- [provider](ethers_contracts.MockImplementation.md#provider)
- [resolvedAddress](ethers_contracts.MockImplementation.md#resolvedaddress)
- [signer](ethers_contracts.MockImplementation.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.MockImplementation.md#_checkrunningevents)
- [\_deployed](ethers_contracts.MockImplementation.md#_deployed)
- [\_wrapEvent](ethers_contracts.MockImplementation.md#_wrapevent)
- [attach](ethers_contracts.MockImplementation.md#attach)
- [chainId](ethers_contracts.MockImplementation.md#chainid)
- [connect](ethers_contracts.MockImplementation.md#connect)
- [deployed](ethers_contracts.MockImplementation.md#deployed)
- [emit](ethers_contracts.MockImplementation.md#emit)
- [evmChainId](ethers_contracts.MockImplementation.md#evmchainid)
- [fallback](ethers_contracts.MockImplementation.md#fallback)
- [getCurrentGuardianSetIndex](ethers_contracts.MockImplementation.md#getcurrentguardiansetindex)
- [getGuardianSet](ethers_contracts.MockImplementation.md#getguardianset)
- [getGuardianSetExpiry](ethers_contracts.MockImplementation.md#getguardiansetexpiry)
- [governanceActionIsConsumed](ethers_contracts.MockImplementation.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.MockImplementation.md#governancechainid)
- [governanceContract](ethers_contracts.MockImplementation.md#governancecontract)
- [initialize](ethers_contracts.MockImplementation.md#initialize)
- [isFork](ethers_contracts.MockImplementation.md#isfork)
- [isInitialized](ethers_contracts.MockImplementation.md#isinitialized)
- [listenerCount](ethers_contracts.MockImplementation.md#listenercount)
- [listeners](ethers_contracts.MockImplementation.md#listeners)
- [messageFee](ethers_contracts.MockImplementation.md#messagefee)
- [nextSequence](ethers_contracts.MockImplementation.md#nextsequence)
- [off](ethers_contracts.MockImplementation.md#off)
- [on](ethers_contracts.MockImplementation.md#on)
- [once](ethers_contracts.MockImplementation.md#once)
- [parseAndVerifyVM](ethers_contracts.MockImplementation.md#parseandverifyvm)
- [parseContractUpgrade](ethers_contracts.MockImplementation.md#parsecontractupgrade)
- [parseGuardianSetUpgrade](ethers_contracts.MockImplementation.md#parseguardiansetupgrade)
- [parseRecoverChainId](ethers_contracts.MockImplementation.md#parserecoverchainid)
- [parseSetMessageFee](ethers_contracts.MockImplementation.md#parsesetmessagefee)
- [parseTransferFees](ethers_contracts.MockImplementation.md#parsetransferfees)
- [parseVM](ethers_contracts.MockImplementation.md#parsevm)
- [publishMessage](ethers_contracts.MockImplementation.md#publishmessage)
- [queryFilter](ethers_contracts.MockImplementation.md#queryfilter)
- [quorum](ethers_contracts.MockImplementation.md#quorum)
- [removeAllListeners](ethers_contracts.MockImplementation.md#removealllisteners)
- [removeListener](ethers_contracts.MockImplementation.md#removelistener)
- [submitContractUpgrade](ethers_contracts.MockImplementation.md#submitcontractupgrade)
- [submitNewGuardianSet](ethers_contracts.MockImplementation.md#submitnewguardianset)
- [submitRecoverChainId](ethers_contracts.MockImplementation.md#submitrecoverchainid)
- [submitSetMessageFee](ethers_contracts.MockImplementation.md#submitsetmessagefee)
- [submitTransferFees](ethers_contracts.MockImplementation.md#submittransferfees)
- [testNewImplementationActive](ethers_contracts.MockImplementation.md#testnewimplementationactive)
- [testOverwriteEVMChainId](ethers_contracts.MockImplementation.md#testoverwriteevmchainid)
- [verifySignatures](ethers_contracts.MockImplementation.md#verifysignatures)
- [verifyVM](ethers_contracts.MockImplementation.md#verifyvm)
- [getContractAddress](ethers_contracts.MockImplementation.md#getcontractaddress)
- [getInterface](ethers_contracts.MockImplementation.md#getinterface)
- [isIndexed](ethers_contracts.MockImplementation.md#isindexed)

## Constructors

### constructor

• **new MockImplementation**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:1182

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:1624

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

src/ethers-contracts/MockImplementation.d.ts:1532

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:387

___

### interface

• **interface**: `MockImplementationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:385

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `testOverwriteEVMChainId` | (`fakeChainId`: `BigNumberish`, `fakeEvmChainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:1816

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

▸ **attach**(`addressOrName`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:346

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

src/ethers-contracts/MockImplementation.d.ts:835

___

### connect

▸ **connect**(`signerOrProvider`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:345

___

### deployed

▸ **deployed**(): `Promise`<[`MockImplementation`](ethers_contracts.MockImplementation.md)\>

#### Returns

`Promise`<[`MockImplementation`](ethers_contracts.MockImplementation.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:347

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

src/ethers-contracts/MockImplementation.d.ts:837

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

src/ethers-contracts/MockImplementation.d.ts:839

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

src/ethers-contracts/MockImplementation.d.ts:841

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

src/ethers-contracts/MockImplementation.d.ts:846

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

src/ethers-contracts/MockImplementation.d.ts:848

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

src/ethers-contracts/MockImplementation.d.ts:853

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

src/ethers-contracts/MockImplementation.d.ts:855

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

src/ethers-contracts/MockImplementation.d.ts:857

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

src/ethers-contracts/MockImplementation.d.ts:861

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

src/ethers-contracts/MockImplementation.d.ts:863

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

src/ethers-contracts/MockImplementation.d.ts:349

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

src/ethers-contracts/MockImplementation.d.ts:372

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

src/ethers-contracts/MockImplementation.d.ts:865

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

src/ethers-contracts/MockImplementation.d.ts:867

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

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

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:352

▸ **off**(`eventName`, `listener`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:373

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

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

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:356

▸ **on**(`eventName`, `listener`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:374

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

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

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:360

▸ **once**(`eventName`, `listener`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:375

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

src/ethers-contracts/MockImplementation.d.ts:872

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

src/ethers-contracts/MockImplementation.d.ts:958

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

src/ethers-contracts/MockImplementation.d.ts:973

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

src/ethers-contracts/MockImplementation.d.ts:998

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

src/ethers-contracts/MockImplementation.d.ts:1013

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

src/ethers-contracts/MockImplementation.d.ts:1028

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

src/ethers-contracts/MockImplementation.d.ts:1044

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

src/ethers-contracts/MockImplementation.d.ts:1085

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

src/ethers-contracts/MockImplementation.d.ts:379

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

src/ethers-contracts/MockImplementation.d.ts:1095

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

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

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:368

▸ **removeAllListeners**(`eventName?`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:377

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

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

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:364

▸ **removeListener**(`eventName`, `listener`): [`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockImplementation`](ethers_contracts.MockImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockImplementation.d.ts:376

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

src/ethers-contracts/MockImplementation.d.ts:1103

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

src/ethers-contracts/MockImplementation.d.ts:1111

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

src/ethers-contracts/MockImplementation.d.ts:1119

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

src/ethers-contracts/MockImplementation.d.ts:1127

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

src/ethers-contracts/MockImplementation.d.ts:1135

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

src/ethers-contracts/MockImplementation.d.ts:1174

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

src/ethers-contracts/MockImplementation.d.ts:1176

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

src/ethers-contracts/MockImplementation.d.ts:1140

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

src/ethers-contracts/MockImplementation.d.ts:1152

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
