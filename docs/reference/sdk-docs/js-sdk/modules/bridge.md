[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / bridge

# Namespace: bridge

## Table of contents

### Functions

- [getClaimAddressSolana](bridge.md#getclaimaddresssolana)
- [getEmitterAddressAlgorand](bridge.md#getemitteraddressalgorand)
- [getEmitterAddressEth](bridge.md#getemitteraddresseth)
- [getEmitterAddressInjective](bridge.md#getemitteraddressinjective)
- [getEmitterAddressNear](bridge.md#getemitteraddressnear)
- [getEmitterAddressSolana](bridge.md#getemitteraddresssolana)
- [getEmitterAddressTerra](bridge.md#getemitteraddressterra)
- [getEmitterAddressXpla](bridge.md#getemitteraddressxpla)
- [getSignedVAAHash](bridge.md#getsignedvaahash)
- [parseSequenceFromLogAlgorand](bridge.md#parsesequencefromlogalgorand)
- [parseSequenceFromLogAptos](bridge.md#parsesequencefromlogaptos)
- [parseSequenceFromLogEth](bridge.md#parsesequencefromlogeth)
- [parseSequenceFromLogInjective](bridge.md#parsesequencefromloginjective)
- [parseSequenceFromLogNear](bridge.md#parsesequencefromlognear)
- [parseSequenceFromLogSolana](bridge.md#parsesequencefromlogsolana)
- [parseSequenceFromLogSui](bridge.md#parsesequencefromlogsui)
- [parseSequenceFromLogTerra](bridge.md#parsesequencefromlogterra)
- [parseSequenceFromLogXpla](bridge.md#parsesequencefromlogxpla)
- [parseSequencesFromLogEth](bridge.md#parsesequencesfromlogeth)
- [parseSequencesFromLogSolana](bridge.md#parsesequencesfromlogsolana)
- [parseSequencesFromLogTerra](bridge.md#parsesequencesfromlogterra)

## Functions

### getClaimAddressSolana

▸ **getClaimAddressSolana**(`programAddress`, `signedVaa`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `programAddress` | `PublicKeyInitData` |
| `signedVaa` | [`SignedVaa`](../modules.md#signedvaa) |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/bridge/getClaimAddress.ts:5](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getClaimAddress.ts#L5)

___

### getEmitterAddressAlgorand

▸ **getEmitterAddressAlgorand**(`appId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appId` | `bigint` |

#### Returns

`string`

#### Defined in

[src/bridge/getEmitterAddress.ts:34](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getEmitterAddress.ts#L34)

___

### getEmitterAddressEth

▸ **getEmitterAddressEth**(`contractAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAddress` | `number` \| `BytesLike` \| `Hexable` |

#### Returns

`string`

#### Defined in

[src/bridge/getEmitterAddress.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getEmitterAddress.ts#L14)

___

### getEmitterAddressInjective

▸ **getEmitterAddressInjective**(`programAddress`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `programAddress` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/bridge/getEmitterAddress.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getEmitterAddress.ts#L24)

___

### getEmitterAddressNear

▸ **getEmitterAddressNear**(`programAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `programAddress` | `string` |

#### Returns

`string`

#### Defined in

[src/bridge/getEmitterAddress.ts:41](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getEmitterAddress.ts#L41)

___

### getEmitterAddressSolana

▸ **getEmitterAddressSolana**(`programAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `programAddress` | `PublicKeyInitData` |

#### Returns

`string`

#### Defined in

[src/bridge/getEmitterAddress.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getEmitterAddress.ts#L20)

___

### getEmitterAddressTerra

▸ **getEmitterAddressTerra**(`programAddress`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `programAddress` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/bridge/getEmitterAddress.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getEmitterAddress.ts#L24)

___

### getEmitterAddressXpla

▸ **getEmitterAddressXpla**(`programAddress`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `programAddress` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/bridge/getEmitterAddress.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getEmitterAddress.ts#L24)

___

### getSignedVAAHash

▸ **getSignedVAAHash**(`signedVaa`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedVaa` | [`SignedVaa`](../modules.md#signedvaa) |

#### Returns

`string`

#### Defined in

[src/bridge/getSignedVAAHash.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/getSignedVAAHash.ts#L4)

___

### parseSequenceFromLogAlgorand

▸ **parseSequenceFromLogAlgorand**(`result`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

[src/bridge/parseSequenceFromLog.ts:126](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L126)

___

### parseSequenceFromLogAptos

▸ **parseSequenceFromLogAptos**(`coreBridgeAddress`, `result`): `string` \| ``null``

Given a transaction result, return the first WormholeMessage event sequence

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coreBridgeAddress` | `string` | Wormhole Core bridge address |
| `result` | `UserTransaction$1` | the result of client.waitForTransactionWithResult(txHash) |

#### Returns

`string` \| ``null``

sequence

#### Defined in

[src/bridge/parseSequenceFromLog.ts:171](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L171)

___

### parseSequenceFromLogEth

▸ **parseSequenceFromLogEth**(`receipt`, `bridgeAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `receipt` | `ContractReceipt` |
| `bridgeAddress` | `string` |

#### Returns

`string`

#### Defined in

[src/bridge/parseSequenceFromLog.ts:10](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L10)

___

### parseSequenceFromLogInjective

▸ **parseSequenceFromLogInjective**(`info`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `any` |

#### Returns

`string`

#### Defined in

[src/bridge/parseSequenceFromLog.ts:91](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L91)

___

### parseSequenceFromLogNear

▸ **parseSequenceFromLogNear**(`outcome`): `string` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `outcome` | `FinalExecutionOutcome` |

#### Returns

`string` \| ``null``

#### Defined in

[src/bridge/parseSequenceFromLog.ts:149](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L149)

___

### parseSequenceFromLogSolana

▸ **parseSequenceFromLogSolana**(`info`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `TransactionResponse` |

#### Returns

`string`

#### Defined in

[src/bridge/parseSequenceFromLog.ts:108](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L108)

___

### parseSequenceFromLogSui

▸ **parseSequenceFromLogSui**(`originalCoreBridgePackageId`, `response`): `string` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalCoreBridgePackageId` | `string` |
| `response` | `Object` |
| `response.balanceChanges?` | { `amount`: `string` ; `coinType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  }  }[] |
| `response.checkpoint?` | `string` |
| `response.confirmedLocalExecution?` | `boolean` |
| `response.digest` | `string` |
| `response.effects?` | `Object` |
| `response.effects.created?` | { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] |
| `response.effects.deleted?` | { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] |
| `response.effects.dependencies?` | `string`[] |
| `response.effects.eventsDigest?` | `string` |
| `response.effects.executedEpoch` | `string` |
| `response.effects.gasObject` | `Object` |
| `response.effects.gasObject.owner` | ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } |
| `response.effects.gasObject.reference` | `Object` |
| `response.effects.gasObject.reference.digest` | `string` |
| `response.effects.gasObject.reference.objectId` | `string` |
| `response.effects.gasObject.reference.version` | `string` \| `number` |
| `response.effects.gasUsed` | `Object` |
| `response.effects.gasUsed.computationCost` | `string` |
| `response.effects.gasUsed.nonRefundableStorageFee` | `string` |
| `response.effects.gasUsed.storageCost` | `string` |
| `response.effects.gasUsed.storageRebate` | `string` |
| `response.effects.messageVersion` | ``"v1"`` |
| `response.effects.modifiedAtVersions?` | { `objectId`: `string` ; `sequenceNumber`: `string`  }[] |
| `response.effects.mutated?` | { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] |
| `response.effects.sharedObjects?` | { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] |
| `response.effects.status` | `Object` |
| `response.effects.status.error?` | `string` |
| `response.effects.status.status` | ``"success"`` \| ``"failure"`` |
| `response.effects.transactionDigest` | `string` |
| `response.effects.unwrapped?` | { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] |
| `response.effects.unwrapped_then_deleted?` | { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] |
| `response.effects.wrapped?` | { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] |
| `response.errors?` | `string`[] |
| `response.events?` | { `bcs?`: `string` ; `id`: { `eventSeq`: `string` ; `txDigest`: `string`  } ; `packageId`: `string` ; `parsedJson?`: `Record`<`string`, `any`\> ; `sender`: `string` ; `timestampMs?`: `string` ; `transactionModule`: `string` ; `type`: `string`  }[] |
| `response.objectChanges?` | ({ `digest`: `string` ; `modules`: `string`[] ; `packageId`: `string` ; `type`: ``"published"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `recipient`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `sender`: `string` ; `type`: ``"transferred"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `previousVersion`: `string` ; `sender`: `string` ; `type`: ``"mutated"`` ; `version`: `string`  } \| { `objectId`: `string` ; `objectType`: `string` ; `sender`: `string` ; `type`: ``"deleted"`` ; `version`: `string`  } \| { `objectId`: `string` ; `objectType`: `string` ; `sender`: `string` ; `type`: ``"wrapped"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `sender`: `string` ; `type`: ``"created"`` ; `version`: `string`  })[] |
| `response.timestampMs?` | `string` |
| `response.transaction?` | `Object` |
| `response.transaction.data` | `Object` |
| `response.transaction.data.gasData` | `Object` |
| `response.transaction.data.gasData.budget` | `string` |
| `response.transaction.data.gasData.owner` | `string` |
| `response.transaction.data.gasData.payment` | { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] |
| `response.transaction.data.gasData.price` | `string` |
| `response.transaction.data.messageVersion` | ``"v1"`` |
| `response.transaction.data.sender` | `string` |
| `response.transaction.data.transaction` | { `computation_charge`: `string` ; `epoch`: `string` ; `epoch_start_timestamp_ms?`: `string` ; `kind`: ``"ChangeEpoch"`` ; `storage_charge`: `string` ; `storage_rebate`: `string`  } \| { `commit_timestamp_ms`: `string` ; `epoch`: `string` ; `kind`: ``"ConsensusCommitPrologue"`` ; `round`: `string`  } \| { `kind`: ``"Genesis"`` ; `objects`: `string`[]  } \| { `inputs`: ({ `type`: ``"pure"`` ; `value`: `SuiJsonValue` ; `valueType?`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: ``"immOrOwnedObject"`` ; `type`: ``"object"`` ; `version`: `string`  } \| { `initialSharedVersion`: `string` ; `mutable`: `boolean` ; `objectId`: `string` ; `objectType`: ``"sharedObject"`` ; `type`: ``"object"``  })[] ; `kind`: ``"ProgrammableTransaction"`` ; `transactions`: ({ `MoveCall`: { `arguments?`: (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[] ; `function`: `string` ; `module`: `string` ; `package`: `string` ; `type_arguments?`: `string`[]  }  } \| { `TransferObjects`: [(``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[], ``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }]  } \| { `SplitCoins`: [``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  } \| { `MergeCoins`: [``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  } \| { `Publish`: [{ `disassembled`: `Record`<`string`, `string`\>  }, `string`[]]  } \| { `Upgrade`: [{ `disassembled`: `Record`<`string`, `string`\>  }, `string`[], `string`, ``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }]  } \| { `MakeMoveVec`: [``null`` \| `string`, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  })[]  } |
| `response.transaction.txSignatures` | `string`[] |

#### Returns

`string` \| ``null``

#### Defined in

[src/bridge/parseSequenceFromLog.ts:185](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L185)

___

### parseSequenceFromLogTerra

▸ **parseSequenceFromLogTerra**(`info`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `TxInfo` |

#### Returns

`string`

#### Defined in

[src/bridge/parseSequenceFromLog.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L40)

___

### parseSequenceFromLogXpla

▸ **parseSequenceFromLogXpla**(`info`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `TxInfo` |

#### Returns

`string`

#### Defined in

[src/bridge/parseSequenceFromLog.ts:57](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L57)

___

### parseSequencesFromLogEth

▸ **parseSequencesFromLogEth**(`receipt`, `bridgeAddress`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `receipt` | `ContractReceipt` |
| `bridgeAddress` | `string` |

#### Returns

`string`[]

#### Defined in

[src/bridge/parseSequenceFromLog.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L24)

___

### parseSequencesFromLogSolana

▸ **parseSequencesFromLogSolana**(`info`): `undefined` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `TransactionResponse` |

#### Returns

`undefined` \| `string`[]

#### Defined in

[src/bridge/parseSequenceFromLog.ts:119](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L119)

___

### parseSequencesFromLogTerra

▸ **parseSequencesFromLogTerra**(`info`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `TxInfo` |

#### Returns

`string`[]

#### Defined in

[src/bridge/parseSequenceFromLog.ts:74](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/bridge/parseSequenceFromLog.ts#L74)
