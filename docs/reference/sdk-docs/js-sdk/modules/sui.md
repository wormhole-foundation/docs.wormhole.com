[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / sui

# Namespace: sui

## Table of contents

### Functions

- [executeTransactionBlock](sui.md#executetransactionblock)
- [getCoinBuildOutput](sui.md#getcoinbuildoutput)
- [getEmitterAddressAndSequenceFromResponseSui](sui.md#getemitteraddressandsequencefromresponsesui)
- [getFieldsFromObjectResponse](sui.md#getfieldsfromobjectresponse)
- [getInnerType](sui.md#getinnertype)
- [getObjectFields](sui.md#getobjectfields)
- [getOriginalPackageId](sui.md#getoriginalpackageid)
- [getOwnedObjectId](sui.md#getownedobjectid)
- [getOwnedObjectIdPaginated](sui.md#getownedobjectidpaginated)
- [getPackageId](sui.md#getpackageid)
- [getPackageIdFromType](sui.md#getpackageidfromtype)
- [getTableKeyType](sui.md#gettablekeytype)
- [getTokenCoinType](sui.md#gettokencointype)
- [getTokenFromTokenRegistry](sui.md#gettokenfromtokenregistry)
- [getUpgradeCapObjectId](sui.md#getupgradecapobjectid)
- [getWrappedCoinType](sui.md#getwrappedcointype)
- [isSameType](sui.md#issametype)
- [isSuiError](sui.md#issuierror)
- [isValidSuiAddress](sui.md#isvalidsuiaddress)
- [isValidSuiType](sui.md#isvalidsuitype)
- [padSuiType](sui.md#padsuitype)
- [publishCoin](sui.md#publishcoin)
- [publishPackage](sui.md#publishpackage)
- [trimSuiType](sui.md#trimsuitype)
- [uint8ArrayToBCS](sui.md#uint8arraytobcs)

## Functions

### executeTransactionBlock

▸ **executeTransactionBlock**(`signer`, `transactionBlock`): `Promise`<{ `balanceChanges?`: { `amount`: `string` ; `coinType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  }  }[] ; `checkpoint?`: `string` ; `confirmedLocalExecution?`: `boolean` ; `digest`: `string` ; `effects?`: { `created?`: { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] ; `deleted?`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] ; `dependencies?`: `string`[] ; `eventsDigest?`: `string` ; `executedEpoch`: `string` ; `gasObject`: { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  } ; `gasUsed`: { `computationCost`: `string` ; `nonRefundableStorageFee`: `string` ; `storageCost`: `string` ; `storageRebate`: `string`  } ; `messageVersion`: ``"v1"`` ; `modifiedAtVersions?`: { `objectId`: `string` ; `sequenceNumber`: `string`  }[] ; `mutated?`: { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] ; `sharedObjects?`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] ; `status`: { `error?`: `string` ; `status`: ``"success"`` \| ``"failure"``  } ; `transactionDigest`: `string` ; `unwrapped?`: { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] ; `unwrapped_then_deleted?`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] ; `wrapped?`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[]  } ; `errors?`: `string`[] ; `events?`: { `bcs?`: `string` ; `id`: { `eventSeq`: `string` ; `txDigest`: `string`  } ; `packageId`: `string` ; `parsedJson?`: `Record`<`string`, `any`\> ; `sender`: `string` ; `timestampMs?`: `string` ; `transactionModule`: `string` ; `type`: `string`  }[] ; `objectChanges?`: ({ `digest`: `string` ; `modules`: `string`[] ; `packageId`: `string` ; `type`: ``"published"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `recipient`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `sender`: `string` ; `type`: ``"transferred"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `previousVersion`: `string` ; `sender`: `string` ; `type`: ``"mutated"`` ; `version`: `string`  } \| { `objectId`: `string` ; `objectType`: `string` ; `sender`: `string` ; `type`: ``"deleted"`` ; `version`: `string`  } \| { `objectId`: `string` ; `objectType`: `string` ; `sender`: `string` ; `type`: ``"wrapped"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `sender`: `string` ; `type`: ``"created"`` ; `version`: `string`  })[] ; `timestampMs?`: `string` ; `transaction?`: { `data`: { `gasData`: { `budget`: `string` ; `owner`: `string` ; `payment`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] ; `price`: `string`  } ; `messageVersion`: ``"v1"`` ; `sender`: `string` ; `transaction`: { `computation_charge`: `string` ; `epoch`: `string` ; `epoch_start_timestamp_ms?`: `string` ; `kind`: ``"ChangeEpoch"`` ; `storage_charge`: `string` ; `storage_rebate`: `string`  } \| { `commit_timestamp_ms`: `string` ; `epoch`: `string` ; `kind`: ``"ConsensusCommitPrologue"`` ; `round`: `string`  } \| { `kind`: ``"Genesis"`` ; `objects`: `string`[]  } \| { `inputs`: ({ `type`: ``"pure"`` ; `value`: `SuiJsonValue` ; `valueType?`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: ``"immOrOwnedObject"`` ; `type`: ``"object"`` ; `version`: `string`  } \| { `initialSharedVersion`: `string` ; `mutable`: `boolean` ; `objectId`: `string` ; `objectType`: ``"sharedObject"`` ; `type`: ``"object"``  })[] ; `kind`: ``"ProgrammableTransaction"`` ; `transactions`: ({ `MoveCall`: { `arguments?`: (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[] ; `function`: `string` ; `module`: `string` ; `package`: `string` ; `type_arguments?`: `string`[]  }  } \| { `TransferObjects`: [(``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[], ``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }]  } \| { `SplitCoins`: [``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  } \| { `MergeCoins`: [``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  } \| { `Publish`: [{ `disassembled`: `Record`<`string`, `string`\>  }, `string`[]]  } \| { `Upgrade`: [{ `disassembled`: `Record`<`string`, `string`\>  }, `string`[], `string`, ``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }]  } \| { `MakeMoveVec`: [``null`` \| `string`, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  })[]  }  } ; `txSignatures`: `string`[]  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `RawSigner` |
| `transactionBlock` | `TransactionBlock` |

#### Returns

`Promise`<{ `balanceChanges?`: { `amount`: `string` ; `coinType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  }  }[] ; `checkpoint?`: `string` ; `confirmedLocalExecution?`: `boolean` ; `digest`: `string` ; `effects?`: { `created?`: { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] ; `deleted?`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] ; `dependencies?`: `string`[] ; `eventsDigest?`: `string` ; `executedEpoch`: `string` ; `gasObject`: { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  } ; `gasUsed`: { `computationCost`: `string` ; `nonRefundableStorageFee`: `string` ; `storageCost`: `string` ; `storageRebate`: `string`  } ; `messageVersion`: ``"v1"`` ; `modifiedAtVersions?`: { `objectId`: `string` ; `sequenceNumber`: `string`  }[] ; `mutated?`: { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] ; `sharedObjects?`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] ; `status`: { `error?`: `string` ; `status`: ``"success"`` \| ``"failure"``  } ; `transactionDigest`: `string` ; `unwrapped?`: { `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `reference`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }  }[] ; `unwrapped_then_deleted?`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] ; `wrapped?`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[]  } ; `errors?`: `string`[] ; `events?`: { `bcs?`: `string` ; `id`: { `eventSeq`: `string` ; `txDigest`: `string`  } ; `packageId`: `string` ; `parsedJson?`: `Record`<`string`, `any`\> ; `sender`: `string` ; `timestampMs?`: `string` ; `transactionModule`: `string` ; `type`: `string`  }[] ; `objectChanges?`: ({ `digest`: `string` ; `modules`: `string`[] ; `packageId`: `string` ; `type`: ``"published"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `recipient`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `sender`: `string` ; `type`: ``"transferred"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `previousVersion`: `string` ; `sender`: `string` ; `type`: ``"mutated"`` ; `version`: `string`  } \| { `objectId`: `string` ; `objectType`: `string` ; `sender`: `string` ; `type`: ``"deleted"`` ; `version`: `string`  } \| { `objectId`: `string` ; `objectType`: `string` ; `sender`: `string` ; `type`: ``"wrapped"`` ; `version`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: `string` ; `owner`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `sender`: `string` ; `type`: ``"created"`` ; `version`: `string`  })[] ; `timestampMs?`: `string` ; `transaction?`: { `data`: { `gasData`: { `budget`: `string` ; `owner`: `string` ; `payment`: { `digest`: `string` ; `objectId`: `string` ; `version`: `string` \| `number`  }[] ; `price`: `string`  } ; `messageVersion`: ``"v1"`` ; `sender`: `string` ; `transaction`: { `computation_charge`: `string` ; `epoch`: `string` ; `epoch_start_timestamp_ms?`: `string` ; `kind`: ``"ChangeEpoch"`` ; `storage_charge`: `string` ; `storage_rebate`: `string`  } \| { `commit_timestamp_ms`: `string` ; `epoch`: `string` ; `kind`: ``"ConsensusCommitPrologue"`` ; `round`: `string`  } \| { `kind`: ``"Genesis"`` ; `objects`: `string`[]  } \| { `inputs`: ({ `type`: ``"pure"`` ; `value`: `SuiJsonValue` ; `valueType?`: `string`  } \| { `digest`: `string` ; `objectId`: `string` ; `objectType`: ``"immOrOwnedObject"`` ; `type`: ``"object"`` ; `version`: `string`  } \| { `initialSharedVersion`: `string` ; `mutable`: `boolean` ; `objectId`: `string` ; `objectType`: ``"sharedObject"`` ; `type`: ``"object"``  })[] ; `kind`: ``"ProgrammableTransaction"`` ; `transactions`: ({ `MoveCall`: { `arguments?`: (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[] ; `function`: `string` ; `module`: `string` ; `package`: `string` ; `type_arguments?`: `string`[]  }  } \| { `TransferObjects`: [(``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[], ``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }]  } \| { `SplitCoins`: [``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  } \| { `MergeCoins`: [``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  } \| { `Publish`: [{ `disassembled`: `Record`<`string`, `string`\>  }, `string`[]]  } \| { `Upgrade`: [{ `disassembled`: `Record`<`string`, `string`\>  }, `string`[], `string`, ``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  }]  } \| { `MakeMoveVec`: [``null`` \| `string`, (``"GasCoin"`` \| { `Input`: `number`  } \| { `Result`: `number`  } \| { `NestedResult`: [`number`, `number`]  })[]]  })[]  }  } ; `txSignatures`: `string`[]  }  }\>

#### Defined in

[src/sui/utils.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L24)

___

### getCoinBuildOutput

▸ **getCoinBuildOutput**(`provider`, `coreBridgePackageId`, `tokenBridgePackageId`, `tokenBridgeStateObjectId`, `decimals`): `Promise`<`SuiBuildOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `coreBridgePackageId` | `string` |
| `tokenBridgePackageId` | `string` |
| `tokenBridgeStateObjectId` | `string` |
| `decimals` | `number` |

#### Returns

`Promise`<`SuiBuildOutput`\>

#### Defined in

[src/sui/publish.ts:35](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/publish.ts#L35)

___

### getEmitterAddressAndSequenceFromResponseSui

▸ **getEmitterAddressAndSequenceFromResponseSui**(`originalCoreBridgePackageId`, `response`): `Object`

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

`Object`

| Name | Type |
| :------ | :------ |
| `emitterAddress` | `string` |
| `sequence` | `string` |

#### Defined in

[src/sui/utils.ts:44](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L44)

___

### getFieldsFromObjectResponse

▸ **getFieldsFromObjectResponse**(`object`): ``null`` \| `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.data?` | `Object` |
| `object.data.bcs?` | { `dataType`: ``"moveObject"`` ; `fields`: `Record`<`string`, `any`\> ; `hasPublicTransfer`: `boolean` ; `type`: `string`  } \| { `dataType`: ``"package"`` ; `id`: `string` ; `moduleMap`: `Record`<`string`, `string`\>  } |
| `object.data.content?` | { `dataType`: ``"moveObject"`` ; `fields`: `Record`<`string`, `any`\> ; `hasPublicTransfer`: `boolean` ; `type`: `string`  } \| { `dataType`: ``"package"`` ; `disassembled`: `Record`<`string`, `string`\>  } |
| `object.data.digest` | `string` |
| `object.data.display?` | `Record`<`string`, `string`\> \| { `data`: ``null`` \| `Record`<`string`, `string`\> ; `error`: ``null`` \| { `code`: `string` ; `digest?`: `string` ; `error?`: `string` ; `object_id?`: `string` ; `version?`: `string`  }  } |
| `object.data.objectId` | `string` |
| `object.data.owner?` | ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } |
| `object.data.previousTransaction?` | `string` |
| `object.data.storageRebate?` | `string` |
| `object.data.type?` | `string` |
| `object.data.version` | `string` |
| `object.error?` | `Object` |
| `object.error.code` | `string` |
| `object.error.digest?` | `string` |
| `object.error.error?` | `string` |
| `object.error.object_id?` | `string` |
| `object.error.version?` | `string` |

#### Returns

``null`` \| `Record`<`string`, `any`\>

#### Defined in

[src/sui/utils.ts:64](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L64)

___

### getInnerType

▸ **getInnerType**(`type`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[src/sui/utils.ts:69](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L69)

___

### getObjectFields

▸ **getObjectFields**(`provider`, `objectId`): `Promise`<``null`` \| `Record`<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `objectId` | `string` |

#### Returns

`Promise`<``null`` \| `Record`<`string`, `any`\>\>

#### Defined in

[src/sui/utils.ts:79](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L79)

___

### getOriginalPackageId

▸ **getOriginalPackageId**(`provider`, `stateObjectId`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `stateObjectId` | `string` |

#### Returns

`Promise`<`undefined` \| `string`\>

#### Defined in

[src/sui/utils.ts:96](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L96)

___

### getOwnedObjectId

▸ **getOwnedObjectId**(`provider`, `owner`, `type`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `owner` | `string` |
| `type` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/sui/utils.ts:108](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L108)

___

### getOwnedObjectIdPaginated

▸ **getOwnedObjectIdPaginated**(`provider`, `owner`, `type`, `cursor?`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `owner` | `string` |
| `type` | `string` |
| `cursor?` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/sui/utils.ts:154](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L154)

___

### getPackageId

▸ **getPackageId**(`provider`, `objectId`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `JsonRpcProvider` |  |
| `objectId` | `string` | Core or token bridge state object ID |

#### Returns

`Promise`<`string`\>

The latest package ID for the provided state object

#### Defined in

[src/sui/utils.ts:193](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L193)

___

### getPackageIdFromType

▸ **getPackageIdFromType**(`type`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[src/sui/utils.ts:222](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L222)

___

### getTableKeyType

▸ **getTableKeyType**(`tableType`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableType` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[src/sui/utils.ts:229](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L229)

___

### getTokenCoinType

▸ **getTokenCoinType**(`provider`, `tokenBridgeStateObjectId`, `tokenAddress`, `tokenChain`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `tokenBridgeStateObjectId` | `string` |
| `tokenAddress` | `Uint8Array` |
| `tokenChain` | `number` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/sui/utils.ts:238](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L238)

___

### getTokenFromTokenRegistry

▸ **getTokenFromTokenRegistry**(`provider`, `tokenBridgeStateObjectId`, `tokenType`): `Promise`<{ `data?`: { `bcs?`: { `dataType`: ``"moveObject"`` ; `fields`: `Record`<`string`, `any`\> ; `hasPublicTransfer`: `boolean` ; `type`: `string`  } \| { `dataType`: ``"package"`` ; `id`: `string` ; `moduleMap`: `Record`<`string`, `string`\>  } ; `content?`: { `dataType`: ``"moveObject"`` ; `fields`: `Record`<`string`, `any`\> ; `hasPublicTransfer`: `boolean` ; `type`: `string`  } \| { `dataType`: ``"package"`` ; `disassembled`: `Record`<`string`, `string`\>  } ; `digest`: `string` ; `display?`: `Record`<`string`, `string`\> \| { `data`: ``null`` \| `Record`<`string`, `string`\> ; `error`: ``null`` \| { `code`: `string` ; `digest?`: `string` ; `error?`: `string` ; `object_id?`: `string` ; `version?`: `string`  }  } ; `objectId`: `string` ; `owner?`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `previousTransaction?`: `string` ; `storageRebate?`: `string` ; `type?`: `string` ; `version`: `string`  } ; `error?`: { `code`: `string` ; `digest?`: `string` ; `error?`: `string` ; `object_id?`: `string` ; `version?`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `tokenBridgeStateObjectId` | `string` |
| `tokenType` | `string` |

#### Returns

`Promise`<{ `data?`: { `bcs?`: { `dataType`: ``"moveObject"`` ; `fields`: `Record`<`string`, `any`\> ; `hasPublicTransfer`: `boolean` ; `type`: `string`  } \| { `dataType`: ``"package"`` ; `id`: `string` ; `moduleMap`: `Record`<`string`, `string`\>  } ; `content?`: { `dataType`: ``"moveObject"`` ; `fields`: `Record`<`string`, `any`\> ; `hasPublicTransfer`: `boolean` ; `type`: `string`  } \| { `dataType`: ``"package"`` ; `disassembled`: `Record`<`string`, `string`\>  } ; `digest`: `string` ; `display?`: `Record`<`string`, `string`\> \| { `data`: ``null`` \| `Record`<`string`, `string`\> ; `error`: ``null`` \| { `code`: `string` ; `digest?`: `string` ; `error?`: `string` ; `object_id?`: `string` ; `version?`: `string`  }  } ; `objectId`: `string` ; `owner?`: ``"Immutable"`` \| { `AddressOwner`: `string`  } \| { `ObjectOwner`: `string`  } \| { `Shared`: { `initial_shared_version`: `number`  }  } ; `previousTransaction?`: `string` ; `storageRebate?`: `string` ; `type?`: `string` ; `version`: `string`  } ; `error?`: { `code`: `string` ; `digest?`: `string` ; `error?`: `string` ; `object_id?`: `string` ; `version?`: `string`  }  }\>

#### Defined in

[src/sui/utils.ts:285](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L285)

___

### getUpgradeCapObjectId

▸ **getUpgradeCapObjectId**(`provider`, `owner`, `packageId`): `Promise`<``null`` \| `string`\>

This function returns the object ID of the `UpgradeCap` that belongs to the
given package and owner if it exists.

Structs created by the Sui framework such as `UpgradeCap`s all have the same
type (e.g. `0x2::package::UpgradeCap`) and have a special field, `package`,
we can use to differentiate them.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `JsonRpcProvider` | Sui RPC provider |
| `owner` | `string` | Address of the current owner of the `UpgradeCap` |
| `packageId` | `string` | ID of the package that the `UpgradeCap` was created for |

#### Returns

`Promise`<``null`` \| `string`\>

The object ID of the `UpgradeCap` if it exists, otherwise `null`

#### Defined in

[src/sui/utils.ts:340](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L340)

___

### getWrappedCoinType

▸ **getWrappedCoinType**(`coinPackageId`): `string`

Get the fully qualified type of a wrapped asset published to the given
package ID.

All wrapped assets that are registered with the token bridge must satisfy
the requirement that module name is `coin` (source: https://github.com/wormhole-foundation/wormhole/blob/a1b3773ee42507122c3c4c3494898fbf515d0712/sui/token_bridge/sources/create_wrapped.move#L88).
As a result, all wrapped assets share the same module name and struct name,
since the struct name is necessarily `COIN` since it is a OTW.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinPackageId` | `string` | packageId of the wrapped asset |

#### Returns

`string`

Fully qualified type of the wrapped asset

#### Defined in

[src/sui/utils.ts:387](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L387)

___

### isSameType

▸ **isSameType**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

`boolean`

#### Defined in

[src/sui/utils.ts:395](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L395)

___

### isSuiError

▸ **isSuiError**(`error`): error is SuiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

error is SuiError

#### Defined in

[src/sui/utils.ts:403](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L403)

___

### isValidSuiAddress

▸ **isValidSuiAddress**(`address`): `boolean`

This method validates any Sui address, even if it's not 32 bytes long, i.e.
"0x2". This differs from Mysten's implementation, which requires that the
given address is 32 bytes long.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | Address to check |

#### Returns

`boolean`

If given address is a valid Sui address or not

#### Defined in

[src/sui/utils.ts:416](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L416)

___

### isValidSuiType

▸ **isValidSuiType**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/sui/utils.ts:419](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L419)

___

### padSuiType

▸ **padSuiType**(`type`): `string`

Unlike `trimSuiType`, this method does not modify nested types, it just pads
the top-level type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`string`

#### Defined in

[src/sui/utils.ts:434](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L434)

___

### publishCoin

▸ **publishCoin**(`provider`, `coreBridgeStateObjectId`, `tokenBridgeStateObjectId`, `decimals`, `signerAddress`): `Promise`<`TransactionBlock`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `coreBridgeStateObjectId` | `string` |
| `tokenBridgeStateObjectId` | `string` |
| `decimals` | `number` |
| `signerAddress` | `string` |

#### Returns

`Promise`<`TransactionBlock`\>

#### Defined in

[src/sui/publish.ts:10](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/publish.ts#L10)

___

### publishPackage

▸ **publishPackage**(`buildOutput`, `signerAddress`): `Promise`<`TransactionBlock`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildOutput` | `SuiBuildOutput` |
| `signerAddress` | `string` |

#### Returns

`Promise`<`TransactionBlock`\>

#### Defined in

[src/sui/publish.ts:70](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/publish.ts#L70)

___

### trimSuiType

▸ **trimSuiType**(`type`): `string`

This method removes leading zeroes for types in order to normalize them
since some types returned from the RPC have leading zeroes and others don't.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`string`

#### Defined in

[src/sui/utils.ts:447](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L447)

___

### uint8ArrayToBCS

▸ **uint8ArrayToBCS**(`arr`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[src/sui/utils.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/sui/utils.ts#L21)
