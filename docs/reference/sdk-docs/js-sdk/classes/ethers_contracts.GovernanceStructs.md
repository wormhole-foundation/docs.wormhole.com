[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / GovernanceStructs

# Class: GovernanceStructs

[ethers_contracts](../modules/ethers_contracts.md).GovernanceStructs

## Hierarchy

- `BaseContract`

  ↳ **`GovernanceStructs`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.GovernanceStructs.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.GovernanceStructs.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.GovernanceStructs.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.GovernanceStructs.md#_wrappedemits)
- [address](ethers_contracts.GovernanceStructs.md#address)
- [callStatic](ethers_contracts.GovernanceStructs.md#callstatic)
- [deployTransaction](ethers_contracts.GovernanceStructs.md#deploytransaction)
- [estimateGas](ethers_contracts.GovernanceStructs.md#estimategas)
- [filters](ethers_contracts.GovernanceStructs.md#filters)
- [functions](ethers_contracts.GovernanceStructs.md#functions)
- [interface](ethers_contracts.GovernanceStructs.md#interface)
- [populateTransaction](ethers_contracts.GovernanceStructs.md#populatetransaction)
- [provider](ethers_contracts.GovernanceStructs.md#provider)
- [resolvedAddress](ethers_contracts.GovernanceStructs.md#resolvedaddress)
- [signer](ethers_contracts.GovernanceStructs.md#signer)

### Methods

- [\_checkRunningEvents](ethers_contracts.GovernanceStructs.md#_checkrunningevents)
- [\_deployed](ethers_contracts.GovernanceStructs.md#_deployed)
- [\_wrapEvent](ethers_contracts.GovernanceStructs.md#_wrapevent)
- [attach](ethers_contracts.GovernanceStructs.md#attach)
- [connect](ethers_contracts.GovernanceStructs.md#connect)
- [deployed](ethers_contracts.GovernanceStructs.md#deployed)
- [emit](ethers_contracts.GovernanceStructs.md#emit)
- [fallback](ethers_contracts.GovernanceStructs.md#fallback)
- [listenerCount](ethers_contracts.GovernanceStructs.md#listenercount)
- [listeners](ethers_contracts.GovernanceStructs.md#listeners)
- [off](ethers_contracts.GovernanceStructs.md#off)
- [on](ethers_contracts.GovernanceStructs.md#on)
- [once](ethers_contracts.GovernanceStructs.md#once)
- [parseContractUpgrade](ethers_contracts.GovernanceStructs.md#parsecontractupgrade)
- [parseGuardianSetUpgrade](ethers_contracts.GovernanceStructs.md#parseguardiansetupgrade)
- [parseRecoverChainId](ethers_contracts.GovernanceStructs.md#parserecoverchainid)
- [parseSetMessageFee](ethers_contracts.GovernanceStructs.md#parsesetmessagefee)
- [parseTransferFees](ethers_contracts.GovernanceStructs.md#parsetransferfees)
- [queryFilter](ethers_contracts.GovernanceStructs.md#queryfilter)
- [removeAllListeners](ethers_contracts.GovernanceStructs.md#removealllisteners)
- [removeListener](ethers_contracts.GovernanceStructs.md#removelistener)
- [getContractAddress](ethers_contracts.GovernanceStructs.md#getcontractaddress)
- [getInterface](ethers_contracts.GovernanceStructs.md#getinterface)
- [isIndexed](ethers_contracts.GovernanceStructs.md#isindexed)

## Constructors

### constructor

• **new GovernanceStructs**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `parseContractUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }\> |
| `parseGuardianSetUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }\> |
| `parseSetMessageFee` | (`encodedSetMessageFee`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }\> |
| `parseTransferFees` | (`encodedTransferFees`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:348

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
| `parseContractUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseGuardianSetUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseSetMessageFee` | (`encodedSetMessageFee`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parseTransferFees` | (`encodedTransferFees`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:438

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:436

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `parseContractUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }] & { `cu`: [`string`, `number`, `number`, `string`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newContract`: `string`  }  }\> |
| `parseGuardianSetUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }] & { `gsu`: [`string`, `number`, `number`, [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  }, `number`] & { `action`: `number` ; `chain`: `number` ; `module`: `string` ; `newGuardianSet`: [`string`[], `number`] & { `expirationTime`: `number` ; `keys`: `string`[]  } ; `newGuardianSetIndex`: `number`  }  }\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }] & { `rci`: [`string`, `number`, `BigNumber`, `number`] & { `action`: `number` ; `evmChainId`: `BigNumber` ; `module`: `string` ; `newChainId`: `number`  }  }\> |
| `parseSetMessageFee` | (`encodedSetMessageFee`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }] & { `smf`: [`string`, `number`, `number`, `BigNumber`] & { `action`: `number` ; `chain`: `number` ; `messageFee`: `BigNumber` ; `module`: `string`  }  }\> |
| `parseTransferFees` | (`encodedTransferFees`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }] & { `tf`: [`string`, `number`, `number`, `BigNumber`, `string`] & { `action`: `number` ; `amount`: `BigNumber` ; `chain`: `number` ; `module`: `string` ; `recipient`: `string`  }  }\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:118

___

### interface

• **interface**: `GovernanceStructsInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:116

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `parseContractUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseGuardianSetUpgrade` | (`encodedUpgrade`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseRecoverChainId` | (`encodedRecoverChainId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseSetMessageFee` | (`encodedSetMessageFee`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parseTransferFees` | (`encodedTransferFees`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:480

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

▸ **attach**(`addressOrName`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:77

___

### connect

▸ **connect**(`signerOrProvider`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:76

___

### deployed

▸ **deployed**(): `Promise`<[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)\>

#### Returns

`Promise`<[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:78

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

src/ethers-contracts/GovernanceStructs.d.ts:80

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

src/ethers-contracts/GovernanceStructs.d.ts:103

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

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

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:83

▸ **off**(`eventName`, `listener`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:104

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

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

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:87

▸ **on**(`eventName`, `listener`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:105

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

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

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:91

▸ **once**(`eventName`, `listener`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:106

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

src/ethers-contracts/GovernanceStructs.d.ts:265

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

src/ethers-contracts/GovernanceStructs.d.ts:280

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

src/ethers-contracts/GovernanceStructs.d.ts:336

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

src/ethers-contracts/GovernanceStructs.d.ts:305

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

src/ethers-contracts/GovernanceStructs.d.ts:320

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

src/ethers-contracts/GovernanceStructs.d.ts:110

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

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

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:99

▸ **removeAllListeners**(`eventName?`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:108

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

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

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:95

▸ **removeListener**(`eventName`, `listener`): [`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`GovernanceStructs`](ethers_contracts.GovernanceStructs.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/GovernanceStructs.d.ts:107

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
