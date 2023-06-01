[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / solana

# Namespace: solana

## Table of contents

### Classes

- [BpfLoaderUpgradeable](../classes/solana.BpfLoaderUpgradeable.md)
- [NodeWallet](../classes/solana.NodeWallet.md)
- [Secp256k1SignatureOffsets](../classes/solana.Secp256k1SignatureOffsets.md)

### Interfaces

- [CompleteTransferNativeWithPayloadCpiAccounts](../interfaces/solana.CompleteTransferNativeWithPayloadCpiAccounts.md)
- [CompleteTransferWrappedWithPayloadCpiAccounts](../interfaces/solana.CompleteTransferWrappedWithPayloadCpiAccounts.md)
- [PostMessageCpiAccounts](../interfaces/solana.PostMessageCpiAccounts.md)
- [PreparedTransactions](../interfaces/solana.PreparedTransactions.md)
- [TokenBridgeBaseDerivedAccounts](../interfaces/solana.TokenBridgeBaseDerivedAccounts.md)
- [TokenBridgeBaseNativeDerivedAccounts](../interfaces/solana.TokenBridgeBaseNativeDerivedAccounts.md)
- [TokenBridgeBaseRedeemerDerivedAccounts](../interfaces/solana.TokenBridgeBaseRedeemerDerivedAccounts.md)
- [TokenBridgeBaseSenderDerivedAccounts](../interfaces/solana.TokenBridgeBaseSenderDerivedAccounts.md)
- [TokenBridgeDerivedAccounts](../interfaces/solana.TokenBridgeDerivedAccounts.md)
- [TokenBridgeNativeRedeemerDerivedAccounts](../interfaces/solana.TokenBridgeNativeRedeemerDerivedAccounts.md)
- [TokenBridgeNativeSenderDerivedAccounts](../interfaces/solana.TokenBridgeNativeSenderDerivedAccounts.md)
- [TokenBridgeWrappedRedeemerDerivedAccounts](../interfaces/solana.TokenBridgeWrappedRedeemerDerivedAccounts.md)
- [TokenBridgeWrappedSenderDerivedAccounts](../interfaces/solana.TokenBridgeWrappedSenderDerivedAccounts.md)
- [TransactionSignatureAndResponse](../interfaces/solana.TransactionSignatureAndResponse.md)
- [TransferNativeWithPayloadCpiAccounts](../interfaces/solana.TransferNativeWithPayloadCpiAccounts.md)
- [TransferWrappedWithPayloadCpiAccounts](../interfaces/solana.TransferWrappedWithPayloadCpiAccounts.md)
- [WormholeDerivedAccounts](../interfaces/solana.WormholeDerivedAccounts.md)

### Type Aliases

- [SignTransaction](solana.md#signtransaction)

### Variables

- [ETHEREUM\_KEY\_LENGTH](solana.md#ethereum_key_length)
- [SIGNATURE\_LENGTH](solana.md#signature_length)
- [TOKEN\_METADATA\_PROGRAM\_ID](solana.md#token_metadata_program_id)

### Functions

- [createBridgeFeeTransferInstruction](solana.md#createbridgefeetransferinstruction)
- [createPostVaaInstructionSolana](solana.md#createpostvaainstructionsolana)
- [createReadOnlyProvider](solana.md#createreadonlyprovider)
- [createSecp256k1Instruction](solana.md#createsecp256k1instruction)
- [createVerifySignaturesInstructionsSolana](solana.md#createverifysignaturesinstructionssolana)
- [deriveAddress](solana.md#deriveaddress)
- [deriveTokenMetadataKey](solana.md#derivetokenmetadatakey)
- [deriveUpgradeableProgramKey](solana.md#deriveupgradeableprogramkey)
- [getAccountData](solana.md#getaccountdata)
- [getCompleteTransferNativeWithPayloadCpiAccounts](solana.md#getcompletetransfernativewithpayloadcpiaccounts)
- [getCompleteTransferWrappedWithPayloadCpiAccounts](solana.md#getcompletetransferwrappedwithpayloadcpiaccounts)
- [getPostMessageCpiAccounts](solana.md#getpostmessagecpiaccounts)
- [getTokenBridgeDerivedAccounts](solana.md#gettokenbridgederivedaccounts)
- [getTransferNativeWithPayloadCpiAccounts](solana.md#gettransfernativewithpayloadcpiaccounts)
- [getTransferWrappedWithPayloadCpiAccounts](solana.md#gettransferwrappedwithpayloadcpiaccounts)
- [getWormholeCpiAccounts](solana.md#getwormholecpiaccounts)
- [getWormholeDerivedAccounts](solana.md#getwormholederivedaccounts)
- [modifySignTransaction](solana.md#modifysigntransaction)
- [newAccountMeta](solana.md#newaccountmeta)
- [newReadOnlyAccountMeta](solana.md#newreadonlyaccountmeta)
- [postVaaSolana](solana.md#postvaasolana)
- [postVaaSolanaWithRetry](solana.md#postvaasolanawithretry)
- [sendAndConfirmTransactionsWithRetry](solana.md#sendandconfirmtransactionswithretry)
- [signSendAndConfirmTransaction](solana.md#signsendandconfirmtransaction)
- [signTransactionFactory](solana.md#signtransactionfactory)

## Type Aliases

### SignTransaction

Ƭ **SignTransaction**: (`transaction`: `Transaction`) => `Promise`<`Transaction`\>

#### Type declaration

▸ (`transaction`): `Promise`<`Transaction`\>

Resembles WalletContextState and Anchor's NodeWallet's signTransaction function signature

##### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Transaction` |

##### Returns

`Promise`<`Transaction`\>

#### Defined in

[src/solana/utils/transaction.ts:31](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L31)

## Variables

### ETHEREUM\_KEY\_LENGTH

• `Const` **ETHEREUM\_KEY\_LENGTH**: ``20``

#### Defined in

[src/solana/utils/secp256k1.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/secp256k1.ts#L4)

___

### SIGNATURE\_LENGTH

• `Const` **SIGNATURE\_LENGTH**: ``65``

#### Defined in

[src/solana/utils/secp256k1.ts:3](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/secp256k1.ts#L3)

___

### TOKEN\_METADATA\_PROGRAM\_ID

• `Const` **TOKEN\_METADATA\_PROGRAM\_ID**: `PublicKey`

#### Defined in

[src/solana/utils/tokenMetadata.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/tokenMetadata.ts#L4)

## Functions

### createBridgeFeeTransferInstruction

▸ **createBridgeFeeTransferInstruction**(`connection`, `wormholeProgramId`, `payer`, `commitment?`): `Promise`<`TransactionInstruction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `wormholeProgramId` | `PublicKeyInitData` |
| `payer` | `PublicKeyInitData` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[src/solana/wormhole/instructions/feeTransfer.ts:11](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/instructions/feeTransfer.ts#L11)

___

### createPostVaaInstructionSolana

▸ **createPostVaaInstructionSolana**(`wormholeProgramId`, `payer`, `vaa`, `signatureSet`): `TransactionInstruction`

Make TransactionInstruction for `post_vaa` instruction.

This is used in createPostSignedVaaTransactions's last transaction.
`signatureSet` is a web3.Keypair generated outside of this method, which was used
to write signatures and the message hash to.

https://github.com/certusone/wormhole/blob/main/solana/bridge/program/src/api/post_vaa.rs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wormholeProgramId` | `PublicKeyInitData` | wormhole program address |
| `payer` | `PublicKeyInitData` | transaction signer address |
| `vaa` | [`ParsedVaa`](../interfaces/ParsedVaa.md) \| [`SignedVaa`](../modules.md#signedvaa) | either signed VAA bytes or parsed VAA (use [parseVaa](../modules.md#parsevaa) on signed VAA) |
| `signatureSet` | `PublicKeyInitData` | key for signature set account |

#### Returns

`TransactionInstruction`

#### Defined in

[src/solana/wormhole/instructions/postVaa.ts:32](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/instructions/postVaa.ts#L32)

___

### createReadOnlyProvider

▸ **createReadOnlyProvider**(`connection?`): `Provider` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection?` | `Connection` |

#### Returns

`Provider` \| `undefined`

#### Defined in

[src/solana/utils/connection.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/connection.ts#L4)

___

### createSecp256k1Instruction

▸ **createSecp256k1Instruction**(`signatures`, `keys`, `message`): `TransactionInstruction`

Create TransactionInstruction for Secp256k1Program.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signatures` | `Buffer`[] | 65-byte signatures (64 bytes + 1 byte recovery id) |
| `keys` | `Buffer`[] | 20-byte ethereum public keys |
| `message` | `Buffer` | 32-byte hash |

#### Returns

`TransactionInstruction`

Solana instruction for Secp256k1 program

#### Defined in

[src/solana/utils/secp256k1.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/secp256k1.ts#L14)

___

### createVerifySignaturesInstructionsSolana

▸ **createVerifySignaturesInstructionsSolana**(`connection`, `wormholeProgramId`, `payer`, `vaa`, `signatureSet`, `commitment?`): `Promise`<`TransactionInstruction`[]\>

This is used in createPostSignedVaaTransactions's initial transactions.

Signatures are batched in groups of 7 due to instruction
data limits. These signatures are passed through to the Secp256k1
program to verify that the guardian public keys can be recovered.
This instruction is paired with `verify_signatures` to validate the
pubkey recovery.

There are at most three pairs of instructions created.

https://github.com/certusone/wormhole/blob/main/solana/bridge/program/src/api/verify_signature.rs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | `Connection` | Solana web3 connection |
| `wormholeProgramId` | `PublicKeyInitData` | wormhole program address |
| `payer` | `PublicKeyInitData` | transaction signer address |
| `vaa` | [`ParsedVaa`](../interfaces/ParsedVaa.md) \| [`SignedVaa`](../modules.md#signedvaa) | either signed VAA bytes or parsed VAA (use [parseVaa](../modules.md#parsevaa) on signed VAA) |
| `signatureSet` | `PublicKeyInitData` | address to account of verified signatures |
| `commitment?` | `Commitment` | - |

#### Returns

`Promise`<`TransactionInstruction`[]\>

#### Defined in

[src/solana/wormhole/instructions/verifySignature.ts:43](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/instructions/verifySignature.ts#L43)

___

### deriveAddress

▸ **deriveAddress**(`seeds`, `programId`): `PublicKey`

Find valid program address. See PublicKey.findProgramAddressSync for details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seeds` | (`Uint8Array` \| `Buffer`)[] | seeds for PDA |
| `programId` | `PublicKeyInitData` | program address |

#### Returns

`PublicKey`

PDA

#### Defined in

[src/solana/utils/account.ts:15](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/account.ts#L15)

___

### deriveTokenMetadataKey

▸ **deriveTokenMetadataKey**(`mint`): `PublicKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mint` | `PublicKeyInitData` |

#### Returns

`PublicKey`

#### Defined in

[src/solana/utils/tokenMetadata.ts:8](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/tokenMetadata.ts#L8)

___

### deriveUpgradeableProgramKey

▸ **deriveUpgradeableProgramKey**(`programId`): `PublicKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | `PublicKeyInitData` |

#### Returns

`PublicKey`

#### Defined in

[src/solana/utils/bpfLoaderUpgradeable.ts:18](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/bpfLoaderUpgradeable.ts#L18)

___

### getAccountData

▸ **getAccountData**(`info`): `Buffer`

Get serialized data from account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | ``null`` \| `AccountInfo`<`Buffer`\> | Solana AccountInfo |

#### Returns

`Buffer`

serialized data as Buffer

#### Defined in

[src/solana/utils/account.ts:64](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/account.ts#L64)

___

### getCompleteTransferNativeWithPayloadCpiAccounts

▸ **getCompleteTransferNativeWithPayloadCpiAccounts**(`tokenBridgeProgramId`, `wormholeProgramId`, `payer`, `vaa`, `toTokenAccount`): [`CompleteTransferNativeWithPayloadCpiAccounts`](../interfaces/solana.CompleteTransferNativeWithPayloadCpiAccounts.md)

Generate accounts needed to perform `complete_native_with_payload` instruction
as cross-program invocation.

Note: `toFeesTokenAccount` is the same as `toTokenAccount`. For your program,
you only need to pass your `toTokenAccount` into the complete transfer
instruction for the `toFeesTokenAccount`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenBridgeProgramId` | `PublicKeyInitData` |
| `wormholeProgramId` | `PublicKeyInitData` |
| `payer` | `PublicKeyInitData` |
| `vaa` | [`SignedVaa`](../modules.md#signedvaa) \| [`ParsedTokenTransferVaa`](../interfaces/ParsedTokenTransferVaa.md) |
| `toTokenAccount` | `PublicKeyInitData` |

#### Returns

[`CompleteTransferNativeWithPayloadCpiAccounts`](../interfaces/solana.CompleteTransferNativeWithPayloadCpiAccounts.md)

#### Defined in

[src/solana/tokenBridge/cpi.ts:350](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L350)

___

### getCompleteTransferWrappedWithPayloadCpiAccounts

▸ **getCompleteTransferWrappedWithPayloadCpiAccounts**(`tokenBridgeProgramId`, `wormholeProgramId`, `payer`, `vaa`, `toTokenAccount`): [`CompleteTransferWrappedWithPayloadCpiAccounts`](../interfaces/solana.CompleteTransferWrappedWithPayloadCpiAccounts.md)

Generate accounts needed to perform `complete_wrapped_with_payload` instruction
as cross-program invocation.

Note: `toFeesTokenAccount` is the same as `toTokenAccount`. For your program,
you only need to pass your `toTokenAccount` into the complete transfer
instruction for the `toFeesTokenAccount`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenBridgeProgramId` | `PublicKeyInitData` |
| `wormholeProgramId` | `PublicKeyInitData` |
| `payer` | `PublicKeyInitData` |
| `vaa` | [`SignedVaa`](../modules.md#signedvaa) \| [`ParsedTokenTransferVaa`](../interfaces/ParsedTokenTransferVaa.md) |
| `toTokenAccount` | `PublicKeyInitData` |

#### Returns

[`CompleteTransferWrappedWithPayloadCpiAccounts`](../interfaces/solana.CompleteTransferWrappedWithPayloadCpiAccounts.md)

#### Defined in

[src/solana/tokenBridge/cpi.ts:438](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L438)

___

### getPostMessageCpiAccounts

▸ **getPostMessageCpiAccounts**(`cpiProgramId`, `wormholeProgramId`, `payer`, `message`): [`PostMessageCpiAccounts`](../interfaces/solana.PostMessageCpiAccounts.md)

Generate accounts needed to perform `post_message` instruction
as cross-program invocation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpiProgramId` | `PublicKeyInitData` |
| `wormholeProgramId` | `PublicKeyInitData` |
| `payer` | `PublicKeyInitData` |
| `message` | `PublicKeyInitData` |

#### Returns

[`PostMessageCpiAccounts`](../interfaces/solana.PostMessageCpiAccounts.md)

#### Defined in

[src/solana/wormhole/cpi.ts:69](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L69)

___

### getTokenBridgeDerivedAccounts

▸ **getTokenBridgeDerivedAccounts**(`cpiProgramId`, `tokenBridgeProgramId`, `wormholeProgramId`): [`TokenBridgeDerivedAccounts`](../interfaces/solana.TokenBridgeDerivedAccounts.md)

Generate Token Bridge PDAs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpiProgramId` | `PublicKeyInitData` |
| `tokenBridgeProgramId` | `PublicKeyInitData` |
| `wormholeProgramId` | `PublicKeyInitData` |

#### Returns

[`TokenBridgeDerivedAccounts`](../interfaces/solana.TokenBridgeDerivedAccounts.md)

#### Defined in

[src/solana/tokenBridge/cpi.ts:120](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L120)

___

### getTransferNativeWithPayloadCpiAccounts

▸ **getTransferNativeWithPayloadCpiAccounts**(`cpiProgramId`, `tokenBridgeProgramId`, `wormholeProgramId`, `payer`, `message`, `fromTokenAccount`, `mint`): [`TransferNativeWithPayloadCpiAccounts`](../interfaces/solana.TransferNativeWithPayloadCpiAccounts.md)

Generate accounts needed to perform `transfer_wrapped_with_payload` instruction
as cross-program invocation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpiProgramId` | `PublicKeyInitData` |
| `tokenBridgeProgramId` | `PublicKeyInitData` |
| `wormholeProgramId` | `PublicKeyInitData` |
| `payer` | `PublicKeyInitData` |
| `message` | `PublicKeyInitData` |
| `fromTokenAccount` | `PublicKeyInitData` |
| `mint` | `PublicKeyInitData` |

#### Returns

[`TransferNativeWithPayloadCpiAccounts`](../interfaces/solana.TransferNativeWithPayloadCpiAccounts.md)

#### Defined in

[src/solana/tokenBridge/cpi.ts:178](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L178)

___

### getTransferWrappedWithPayloadCpiAccounts

▸ **getTransferWrappedWithPayloadCpiAccounts**(`cpiProgramId`, `tokenBridgeProgramId`, `wormholeProgramId`, `payer`, `message`, `fromTokenAccount`, `tokenChain`, `tokenAddress`, `fromTokenAccountOwner?`): [`TransferWrappedWithPayloadCpiAccounts`](../interfaces/solana.TransferWrappedWithPayloadCpiAccounts.md)

Generate accounts needed to perform `transfer_wrapped_with_payload` instruction
as cross-program invocation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpiProgramId` | `PublicKeyInitData` |
| `tokenBridgeProgramId` | `PublicKeyInitData` |
| `wormholeProgramId` | `PublicKeyInitData` |
| `payer` | `PublicKeyInitData` |
| `message` | `PublicKeyInitData` |
| `fromTokenAccount` | `PublicKeyInitData` |
| `tokenChain` | `number` |
| `tokenAddress` | `Uint8Array` \| `Buffer` |
| `fromTokenAccountOwner?` | `PublicKeyInitData` |

#### Returns

[`TransferWrappedWithPayloadCpiAccounts`](../interfaces/solana.TransferWrappedWithPayloadCpiAccounts.md)

#### Defined in

[src/solana/tokenBridge/cpi.ts:260](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L260)

___

### getWormholeCpiAccounts

▸ **getWormholeCpiAccounts**(`wormholeProgramId`, `payer`, `emitterProgramId`, `message`): `PostMessageAccounts`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wormholeProgramId` | `PublicKeyInitData` |
| `payer` | `PublicKeyInitData` |
| `emitterProgramId` | `PublicKeyInitData` |
| `message` | `PublicKeyInitData` |

#### Returns

`PostMessageAccounts`

#### Defined in

[src/solana/wormhole/instructions/postMessage.ts:27](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/instructions/postMessage.ts#L27)

___

### getWormholeDerivedAccounts

▸ **getWormholeDerivedAccounts**(`cpiProgramId`, `wormholeProgramId`): [`WormholeDerivedAccounts`](../interfaces/solana.WormholeDerivedAccounts.md)

Generate Wormhole PDAs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpiProgramId` | `PublicKeyInitData` |
| `wormholeProgramId` | `PublicKeyInitData` |

#### Returns

[`WormholeDerivedAccounts`](../interfaces/solana.WormholeDerivedAccounts.md)

#### Defined in

[src/solana/wormhole/cpi.ts:37](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L37)

___

### modifySignTransaction

▸ **modifySignTransaction**(`signTransaction`, `...payers`): [`SignTransaction`](solana.md#signtransaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signTransaction` | [`SignTransaction`](solana.md#signtransaction) |
| `...payers` | `Signer`[] |

#### Returns

[`SignTransaction`](solana.md#signtransaction)

#### Defined in

[src/solana/utils/transaction.ts:47](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L47)

___

### newAccountMeta

▸ **newAccountMeta**(`pubkey`, `isSigner`): `AccountMeta`

Factory to create AccountMeta with `isWritable` set to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubkey` | `PublicKeyInitData` | account address |
| `isSigner` | `boolean` | whether account authorized transaction |

#### Returns

`AccountMeta`

metadata for writable account

#### Defined in

[src/solana/utils/account.ts:29](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/account.ts#L29)

___

### newReadOnlyAccountMeta

▸ **newReadOnlyAccountMeta**(`pubkey`, `isSigner`): `AccountMeta`

Factory to create AccountMeta with `isWritable` set to `false`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubkey` | `PublicKeyInitData` | account address |
| `isSigner` | `boolean` | whether account authorized transaction |

#### Returns

`AccountMeta`

metadata for read-only account

#### Defined in

[src/solana/utils/account.ts:47](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/account.ts#L47)

___

### postVaaSolana

▸ **postVaaSolana**(`connection`, `signTransaction`, `wormholeProgramId`, `payer`, `vaa`, `options?`, `asyncVerifySignatures?`): `Promise`<[`TransactionSignatureAndResponse`](../interfaces/solana.TransactionSignatureAndResponse.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `connection` | `Connection` | `undefined` |
| `signTransaction` | [`SignTransaction`](solana.md#signtransaction) | `undefined` |
| `wormholeProgramId` | `PublicKeyInitData` | `undefined` |
| `payer` | `PublicKeyInitData` | `undefined` |
| `vaa` | `Buffer` | `undefined` |
| `options?` | `ConfirmOptions` | `undefined` |
| `asyncVerifySignatures` | `boolean` | `true` |

#### Returns

`Promise`<[`TransactionSignatureAndResponse`](../interfaces/solana.TransactionSignatureAndResponse.md)[]\>

#### Defined in

[src/solana/sendAndConfirmPostVaa.ts:63](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/sendAndConfirmPostVaa.ts#L63)

___

### postVaaSolanaWithRetry

▸ **postVaaSolanaWithRetry**(`connection`, `signTransaction`, `wormholeProgramId`, `payer`, `vaa`, `maxRetries?`, `commitment?`): `Promise`<[`TransactionSignatureAndResponse`](../interfaces/solana.TransactionSignatureAndResponse.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `signTransaction` | [`SignTransaction`](solana.md#signtransaction) |
| `wormholeProgramId` | `PublicKeyInitData` |
| `payer` | `PublicKeyInitData` |
| `vaa` | `Buffer` |
| `maxRetries?` | `number` |
| `commitment?` | `Commitment` |

#### Returns

`Promise`<[`TransactionSignatureAndResponse`](../interfaces/solana.TransactionSignatureAndResponse.md)[]\>

#### Defined in

[src/solana/sendAndConfirmPostVaa.ts:23](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/sendAndConfirmPostVaa.ts#L23)

___

### sendAndConfirmTransactionsWithRetry

▸ **sendAndConfirmTransactionsWithRetry**(`connection`, `signTransaction`, `payer`, `unsignedTransactions`, `maxRetries?`, `options?`): `Promise`<[`TransactionSignatureAndResponse`](../interfaces/solana.TransactionSignatureAndResponse.md)[]\>

**`Deprecated`**

Please use [signSendAndConfirmTransaction](solana.md#signsendandconfirmtransaction) instead, which allows
retries to be configured in ConfirmOptions.

The transactions provided to this function should be ready to send.
This function will do the following:
1. Add the {@param payer} as the feePayer and latest blockhash to the Transaction.
2. Sign using {@param signTransaction}.
3. Send raw transaction.
4. Confirm transaction.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `connection` | `Connection` | `undefined` |
| `signTransaction` | [`SignTransaction`](solana.md#signtransaction) | `undefined` |
| `payer` | `string` | `undefined` |
| `unsignedTransactions` | `Transaction`[] | `undefined` |
| `maxRetries` | `number` | `0` |
| `options?` | `ConfirmOptions` | `undefined` |

#### Returns

`Promise`<[`TransactionSignatureAndResponse`](../interfaces/solana.TransactionSignatureAndResponse.md)[]\>

#### Defined in

[src/solana/utils/transaction.ts:156](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L156)

___

### signSendAndConfirmTransaction

▸ **signSendAndConfirmTransaction**(`connection`, `payer`, `signTransaction`, `unsignedTransaction`, `options?`): `Promise`<[`TransactionSignatureAndResponse`](../interfaces/solana.TransactionSignatureAndResponse.md)\>

The transactions provided to this function should be ready to send.
This function will do the following:
1. Add the {@param payer} as the feePayer and latest blockhash to the Transaction.
2. Sign using {@param signTransaction}.
3. Send raw transaction.
4. Confirm transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `payer` | `PublicKeyInitData` |
| `signTransaction` | [`SignTransaction`](solana.md#signtransaction) |
| `unsignedTransaction` | `Transaction` |
| `options?` | `ConfirmOptions` |

#### Returns

`Promise`<[`TransactionSignatureAndResponse`](../interfaces/solana.TransactionSignatureAndResponse.md)\>

#### Defined in

[src/solana/utils/transaction.ts:115](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L115)

___

### signTransactionFactory

▸ **signTransactionFactory**(`...payers`): [`SignTransaction`](solana.md#signtransaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...payers` | `Signer`[] |

#### Returns

[`SignTransaction`](solana.md#signtransaction)

#### Defined in

[src/solana/utils/transaction.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L40)
