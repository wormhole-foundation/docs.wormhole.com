[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / Messages

# Class: Messages

[ethers_contracts](../modules/ethers_contracts.md).Messages

## Hierarchy

- `BaseContract`

  ↳ **`Messages`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.Messages.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.Messages.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.Messages.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.Messages.md#_wrappedemits)
- [address](ethers_contracts.Messages.md#address)
- [callStatic](ethers_contracts.Messages.md#callstatic)
- [deployTransaction](ethers_contracts.Messages.md#deploytransaction)
- [estimateGas](ethers_contracts.Messages.md#estimategas)
- [filters](ethers_contracts.Messages.md#filters)
- [functions](ethers_contracts.Messages.md#functions)
- [interface](ethers_contracts.Messages.md#interface)
- [populateTransaction](ethers_contracts.Messages.md#populatetransaction)
- [provider](ethers_contracts.Messages.md#provider)
- [resolvedAddress](ethers_contracts.Messages.md#resolvedaddress)
- [signer](ethers_contracts.Messages.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.Messages.md#_checkrunningevents)
- [\_deployed](ethers_contracts.Messages.md#_deployed)
- [\_wrapEvent](ethers_contracts.Messages.md#_wrapevent)
- [attach](ethers_contracts.Messages.md#attach)
- [chainId](ethers_contracts.Messages.md#chainid)
- [connect](ethers_contracts.Messages.md#connect)
- [deployed](ethers_contracts.Messages.md#deployed)
- [emit](ethers_contracts.Messages.md#emit)
- [evmChainId](ethers_contracts.Messages.md#evmchainid)
- [fallback](ethers_contracts.Messages.md#fallback)
- [getCurrentGuardianSetIndex](ethers_contracts.Messages.md#getcurrentguardiansetindex)
- [getGuardianSet](ethers_contracts.Messages.md#getguardianset)
- [getGuardianSetExpiry](ethers_contracts.Messages.md#getguardiansetexpiry)
- [governanceActionIsConsumed](ethers_contracts.Messages.md#governanceactionisconsumed)
- [governanceChainId](ethers_contracts.Messages.md#governancechainid)
- [governanceContract](ethers_contracts.Messages.md#governancecontract)
- [isFork](ethers_contracts.Messages.md#isfork)
- [isInitialized](ethers_contracts.Messages.md#isinitialized)
- [listenerCount](ethers_contracts.Messages.md#listenercount)
- [listeners](ethers_contracts.Messages.md#listeners)
- [messageFee](ethers_contracts.Messages.md#messagefee)
- [nextSequence](ethers_contracts.Messages.md#nextsequence)
- [off](ethers_contracts.Messages.md#off)
- [on](ethers_contracts.Messages.md#on)
- [once](ethers_contracts.Messages.md#once)
- [parseAndVerifyVM](ethers_contracts.Messages.md#parseandverifyvm)
- [parseVM](ethers_contracts.Messages.md#parsevm)
- [queryFilter](ethers_contracts.Messages.md#queryfilter)
- [quorum](ethers_contracts.Messages.md#quorum)
- [removeAllListeners](ethers_contracts.Messages.md#removealllisteners)
- [removeListener](ethers_contracts.Messages.md#removelistener)
- [verifySignatures](ethers_contracts.Messages.md#verifysignatures)
- [verifyVM](ethers_contracts.Messages.md#verifyvm)
- [getContractAddress](ethers_contracts.Messages.md#getcontractaddress)
- [getInterface](ethers_contracts.Messages.md#getinterface)
- [isIndexed](ethers_contracts.Messages.md#isindexed)

## Constructors

### constructor

• **new Messages**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseAndVerifyVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }, `boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean` ; `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\> |
| `parseVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }\> |
| `quorum` | (`numGuardians`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/Messages.d.ts:673

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
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseAndVerifyVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `quorum` | (`numGuardians`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/Messages.d.ts:882

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/Messages.d.ts:880

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
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `parseAndVerifyVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }, `boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean` ; `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\> |
| `parseVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }] & { `vm`: [`number`, `number`, `number`, `number`, `string`, `BigNumber`, `number`, `string`, `number`, [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[], `string`] & { `consistencyLevel`: `number` ; `emitterAddress`: `string` ; `emitterChainId`: `number` ; `guardianSetIndex`: `number` ; `hash`: `string` ; `nonce`: `number` ; `payload`: `string` ; `sequence`: `BigNumber` ; `signatures`: [`string`, `string`, `number`, `number`] & { `guardianIndex`: `number` ; `r`: `string` ; `s`: `string` ; `v`: `number`  }[] ; `timestamp`: `number` ; `version`: `number`  }  }\> |
| `quorum` | (`numGuardians`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numSignaturesRequiredForQuorum`: `BigNumber`  }\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `reason`: `string` ; `valid`: `boolean`  }\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/Messages.d.ts:224

___

### interface

• **interface**: `MessagesInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/Messages.d.ts:222

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
| `isFork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInitialized` | (`impl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `messageFee` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nextSequence` | (`emitter`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseAndVerifyVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseVM` | (`encodedVM`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `quorum` | (`numGuardians`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifySignatures` | (`hash`: `BytesLike`, `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[], `guardianSet`: { `expirationTime`: `BigNumberish` ; `keys`: `string`[]  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifyVM` | (`vm`: { `consistencyLevel`: `BigNumberish` ; `emitterAddress`: `BytesLike` ; `emitterChainId`: `BigNumberish` ; `guardianSetIndex`: `BigNumberish` ; `hash`: `BytesLike` ; `nonce`: `BigNumberish` ; `payload`: `BytesLike` ; `sequence`: `BigNumberish` ; `signatures`: { `guardianIndex`: `BigNumberish` ; `r`: `BytesLike` ; `s`: `BytesLike` ; `v`: `BigNumberish`  }[] ; `timestamp`: `BigNumberish` ; `version`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/Messages.d.ts:975

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

▸ **attach**(`addressOrName`): [`Messages`](ethers_contracts.Messages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/Messages.d.ts:183

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

src/ethers-contracts/Messages.d.ts:471

___

### connect

▸ **connect**(`signerOrProvider`): [`Messages`](ethers_contracts.Messages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/Messages.d.ts:182

___

### deployed

▸ **deployed**(): `Promise`<[`Messages`](ethers_contracts.Messages.md)\>

#### Returns

`Promise`<[`Messages`](ethers_contracts.Messages.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/Messages.d.ts:184

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

src/ethers-contracts/Messages.d.ts:473

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

src/ethers-contracts/Messages.d.ts:475

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

src/ethers-contracts/Messages.d.ts:477

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

src/ethers-contracts/Messages.d.ts:482

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

src/ethers-contracts/Messages.d.ts:484

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

src/ethers-contracts/Messages.d.ts:489

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

src/ethers-contracts/Messages.d.ts:491

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

src/ethers-contracts/Messages.d.ts:493

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

src/ethers-contracts/Messages.d.ts:495

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

src/ethers-contracts/Messages.d.ts:186

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

src/ethers-contracts/Messages.d.ts:209

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

src/ethers-contracts/Messages.d.ts:497

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

src/ethers-contracts/Messages.d.ts:499

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Messages`](ethers_contracts.Messages.md)

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

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Messages.d.ts:189

▸ **off**(`eventName`, `listener`): [`Messages`](ethers_contracts.Messages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/Messages.d.ts:210

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Messages`](ethers_contracts.Messages.md)

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

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Messages.d.ts:193

▸ **on**(`eventName`, `listener`): [`Messages`](ethers_contracts.Messages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/Messages.d.ts:211

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Messages`](ethers_contracts.Messages.md)

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

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Messages.d.ts:197

▸ **once**(`eventName`, `listener`): [`Messages`](ethers_contracts.Messages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/Messages.d.ts:212

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

src/ethers-contracts/Messages.d.ts:504

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

src/ethers-contracts/Messages.d.ts:624

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

src/ethers-contracts/Messages.d.ts:216

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

src/ethers-contracts/Messages.d.ts:668

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Messages`](ethers_contracts.Messages.md)

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

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Messages.d.ts:205

▸ **removeAllListeners**(`eventName?`): [`Messages`](ethers_contracts.Messages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/Messages.d.ts:214

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Messages`](ethers_contracts.Messages.md)

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

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Messages.d.ts:201

▸ **removeListener**(`eventName`, `listener`): [`Messages`](ethers_contracts.Messages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Messages`](ethers_contracts.Messages.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/Messages.d.ts:213

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

src/ethers-contracts/Messages.d.ts:609

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

src/ethers-contracts/Messages.d.ts:587

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
