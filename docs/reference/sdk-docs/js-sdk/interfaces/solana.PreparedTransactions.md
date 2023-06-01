[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / PreparedTransactions

# Interface: PreparedTransactions

[solana](../modules/solana.md).PreparedTransactions

Object that holds list of unsigned Transactions and Keypairs
required to sign for each transaction.

## Table of contents

### Properties

- [signers](solana.PreparedTransactions.md#signers)
- [unsignedTransactions](solana.PreparedTransactions.md#unsignedtransactions)

## Properties

### signers

• **signers**: `Signer`[]

#### Defined in

[src/solana/utils/transaction.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L20)

___

### unsignedTransactions

• **unsignedTransactions**: `Transaction`[]

#### Defined in

[src/solana/utils/transaction.ts:19](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/utils/transaction.ts#L19)
