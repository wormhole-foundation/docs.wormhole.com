[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / algorand

# Namespace: algorand

## Table of contents

### Type Aliases

- [LogicSigAccountInfo](algorand.md#logicsigaccountinfo)
- [OptInResult](algorand.md#optinresult)
- [ParsedVAA](algorand.md#parsedvaa)
- [TransactionSignerPair](algorand.md#transactionsignerpair)

### Variables

- [BITS\_PER\_KEY](algorand.md#bits_per_key)
- [MAX\_BITS](algorand.md#max_bits)
- [METADATA\_REPLACE](algorand.md#metadata_replace)

### Functions

- [\_parseNFTAlgorand](algorand.md#_parsenftalgorand)
- [\_parseVAAAlgorand](algorand.md#_parsevaaalgorand)
- [\_submitVAAAlgorand](algorand.md#_submitvaaalgorand)
- [accountExists](algorand.md#accountexists)
- [assetOptinCheck](algorand.md#assetoptincheck)
- [calcLogicSigAccount](algorand.md#calclogicsigaccount)
- [decodeLocalState](algorand.md#decodelocalstate)
- [getMessageFee](algorand.md#getmessagefee)
- [hexToNativeAssetBigIntAlgorand](algorand.md#hextonativeassetbigintalgorand)
- [hexToNativeAssetStringAlgorand](algorand.md#hextonativeassetstringalgorand)
- [hexToNativeStringAlgorand](algorand.md#hextonativestringalgorand)
- [nativeStringToHexAlgorand](algorand.md#nativestringtohexalgorand)
- [optin](algorand.md#optin)
- [signSendAndConfirmAlgorand](algorand.md#signsendandconfirmalgorand)
- [submitVAAHeader](algorand.md#submitvaaheader)
- [uint8ArrayToNativeStringAlgorand](algorand.md#uint8arraytonativestringalgorand)

## Type Aliases

### LogicSigAccountInfo

Ƭ **LogicSigAccountInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `doesExist` | `boolean` |
| `lsa` | `LogicSigAccount` |

#### Defined in

[src/algorand/Algorand.ts:137](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L137)

___

### OptInResult

Ƭ **OptInResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addr` | `string` |
| `txs` | [`TransactionSignerPair`](algorand.md#transactionsignerpair)[] |

#### Defined in

[src/algorand/Algorand.ts:75](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L75)

___

### ParsedVAA

Ƭ **ParsedVAA**: `Object`

Parses the VAA into a Map

**`Param`**

The VAA to be parsed

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Amount?` | `Uint8Array` |
| `Body?` | `Uint8Array` |
| `Contract?` | `string` |
| `Decimals?` | `number` |
| `EmitterChainID?` | `number` |
| `Fee?` | `Uint8Array` |
| `FromAddress?` | `Uint8Array` |
| `FromChain?` | `number` |
| `Meta` | ``"Unknown"`` \| ``"TokenBridge"`` \| ``"TokenBridge RegisterChain"`` \| ``"TokenBridge UpgradeContract"`` \| ``"CoreGovernance"`` \| ``"TokenBridge Attest"`` \| ``"TokenBridge Transfer"`` \| ``"TokenBridge Transfer With Payload"`` |
| `Name?` | `Uint8Array` |
| `NewGuardianSetIndex?` | `number` |
| `Payload?` | `Uint8Array` |
| `Symbol?` | `Uint8Array` |
| `ToAddress?` | `Uint8Array` |
| `ToChain?` | `number` |
| `TokenId?` | `Uint8Array` |
| `Type?` | `number` |
| `action?` | `number` |
| `chain` | `number` |
| `chainRaw` | `string` |
| `consistency` | `number` |
| `digest` | `Uint8Array` |
| `emitter` | `string` |
| `index` | `number` |
| `module?` | `Uint8Array` |
| `newContract?` | `Uint8Array` |
| `nonce` | `number` |
| `sequence` | `bigint` |
| `siglen` | `number` |
| `signatures` | `Uint8Array` |
| `sigs` | `Uint8Array`[] |
| `targetChain?` | `number` |
| `targetEmitter?` | `Uint8Array` |
| `timestamp` | `number` |
| `uri?` | `string` |
| `version` | `number` |

#### Defined in

[src/algorand/Algorand.ts:245](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L245)

___

### TransactionSignerPair

Ƭ **TransactionSignerPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` \| ``null`` |
| `tx` | `Transaction` |

#### Defined in

[src/algorand/Algorand.ts:70](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L70)

## Variables

### BITS\_PER\_KEY

• `Const` **BITS\_PER\_KEY**: `number`

#### Defined in

[src/algorand/Algorand.ts:45](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L45)

___

### MAX\_BITS

• `Const` **MAX\_BITS**: `number`

#### Defined in

[src/algorand/Algorand.ts:47](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L47)

___

### METADATA\_REPLACE

• `Const` **METADATA\_REPLACE**: `RegExp`

#### Defined in

[src/algorand/Algorand.ts:439](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L439)

## Functions

### \_parseNFTAlgorand

▸ **_parseNFTAlgorand**(`vaa`): [`ParsedVAA`](algorand.md#parsedvaa)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | `Uint8Array` |

#### Returns

[`ParsedVAA`](algorand.md#parsedvaa)

#### Defined in

[src/algorand/Algorand.ts:441](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L441)

___

### \_parseVAAAlgorand

▸ **_parseVAAAlgorand**(`vaa`): [`ParsedVAA`](algorand.md#parsedvaa)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | `Uint8Array` |

#### Returns

[`ParsedVAA`](algorand.md#parsedvaa)

#### Defined in

[src/algorand/Algorand.ts:293](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L293)

___

### \_submitVAAAlgorand

▸ **_submitVAAAlgorand**(`client`, `tokenBridgeId`, `bridgeId`, `vaa`, `senderAddr`): `Promise`<[`TransactionSignerPair`](algorand.md#transactionsignerpair)[]\>

Submits the VAA to the application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `default` | AlgodV2 client |
| `tokenBridgeId` | `bigint` | Application ID of the token bridge |
| `bridgeId` | `bigint` | Application ID of the core bridge |
| `vaa` | `Uint8Array` | The VAA to be submitted |
| `senderAddr` | `string` | Sending account address |

#### Returns

`Promise`<[`TransactionSignerPair`](algorand.md#transactionsignerpair)[]\>

Confirmation log

#### Defined in

[src/algorand/Algorand.ts:697](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L697)

___

### accountExists

▸ **accountExists**(`client`, `appId`, `acctAddr`): `Promise`<`boolean`\>

Checks to see it the account exists for the application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `default` | An Algodv2 client |
| `appId` | `bigint` | Application ID |
| `acctAddr` | `string` | Account address to check |

#### Returns

`Promise`<`boolean`\>

true, if account exists for application.  Otherwise, returns false

#### Defined in

[src/algorand/Algorand.ts:112](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L112)

___

### assetOptinCheck

▸ **assetOptinCheck**(`client`, `asset`, `receiver`): `Promise`<`boolean`\>

Checks if the asset has been opted in by the receiver

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `default` | Algodv2 client |
| `asset` | `bigint` | Algorand asset index |
| `receiver` | `string` | Account address |

#### Returns

`Promise`<`boolean`\>

True if the asset was opted in, else false

#### Defined in

[src/algorand/Algorand.ts:521](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L521)

___

### calcLogicSigAccount

▸ **calcLogicSigAccount**(`client`, `appId`, `appIndex`, `emitterId`): `Promise`<[`LogicSigAccountInfo`](algorand.md#logicsigaccountinfo)\>

Calculates the logic sig account for the application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `default` | An Algodv2 client |
| `appId` | `bigint` | Application ID |
| `appIndex` | `bigint` | Application index |
| `emitterId` | `string` | Emitter address |

#### Returns

`Promise`<[`LogicSigAccountInfo`](algorand.md#logicsigaccountinfo)\>

LogicSigAccountInfo

#### Defined in

[src/algorand/Algorand.ts:150](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L150)

___

### decodeLocalState

▸ **decodeLocalState**(`client`, `appId`, `address`): `Promise`<`Uint8Array`\>

Returns the local data for an application ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `default` | Algodv2 client |
| `appId` | `bigint` | Application ID of interest |
| `address` | `string` | Address of the account |

#### Returns

`Promise`<`Uint8Array`\>

Uint8Array of data squirreled away

#### Defined in

[src/algorand/Algorand.ts:470](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L470)

___

### getMessageFee

▸ **getMessageFee**(`client`, `bridgeId`): `Promise`<`bigint`\>

Return the message fee for the core bridge

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `default` | An Algodv2 client |
| `bridgeId` | `bigint` | The application ID of the core bridge |

#### Returns

`Promise`<`bigint`\>

The message fee for the core bridge

#### Defined in

[src/algorand/Algorand.ts:86](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L86)

___

### hexToNativeAssetBigIntAlgorand

▸ **hexToNativeAssetBigIntAlgorand**(`s`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`bigint`

#### Defined in

[src/algorand/Algorand.ts:993](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L993)

___

### hexToNativeAssetStringAlgorand

▸ **hexToNativeAssetStringAlgorand**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

[src/algorand/Algorand.ts:997](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L997)

___

### hexToNativeStringAlgorand

▸ **hexToNativeStringAlgorand**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

[src/algorand/Algorand.ts:985](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L985)

___

### nativeStringToHexAlgorand

▸ **nativeStringToHexAlgorand**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

[src/algorand/Algorand.ts:989](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L989)

___

### optin

▸ **optin**(`client`, `senderAddr`, `appId`, `appIndex`, `emitterId`): `Promise`<[`OptInResult`](algorand.md#optinresult)\>

Calculates the logic sig account for the application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `default` | An Algodv2 client |
| `senderAddr` | `string` | Sender address |
| `appId` | `bigint` | Application ID |
| `appIndex` | `bigint` | Application index |
| `emitterId` | `string` | Emitter address |

#### Returns

`Promise`<[`OptInResult`](algorand.md#optinresult)\>

Address and array of TransactionSignerPairs

#### Defined in

[src/algorand/Algorand.ts:183](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L183)

___

### signSendAndConfirmAlgorand

▸ **signSendAndConfirmAlgorand**(`algodClient`, `txs`, `wallet`): `Promise`<`Record`<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algodClient` | `default` |
| `txs` | [`TransactionSignerPair`](algorand.md#transactionsignerpair)[] |
| `wallet` | `default` |

#### Returns

`Promise`<`Record`<`string`, `any`\>\>

#### Defined in

[src/algorand/Algorand.ts:1001](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L1001)

___

### submitVAAHeader

▸ **submitVAAHeader**(`client`, `bridgeId`, `vaa`, `senderAddr`, `appid`): `Promise`<`SubmitVAAState`\>

Submits just the header of the VAA

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `default` | AlgodV2 client |
| `bridgeId` | `bigint` | Application ID of the core bridge |
| `vaa` | `Uint8Array` | The VAA (Just the header is used) |
| `senderAddr` | `string` | Sending account address |
| `appid` | `bigint` | Application ID |

#### Returns

`Promise`<`SubmitVAAState`\>

Current VAA state

#### Defined in

[src/algorand/Algorand.ts:567](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L567)

___

### uint8ArrayToNativeStringAlgorand

▸ **uint8ArrayToNativeStringAlgorand**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[src/algorand/Algorand.ts:981](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/algorand/Algorand.ts#L981)
