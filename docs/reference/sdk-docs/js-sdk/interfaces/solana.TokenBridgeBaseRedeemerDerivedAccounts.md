[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TokenBridgeBaseRedeemerDerivedAccounts

# Interface: TokenBridgeBaseRedeemerDerivedAccounts

[solana](../modules/solana.md).TokenBridgeBaseRedeemerDerivedAccounts

## Hierarchy

- [`TokenBridgeBaseDerivedAccounts`](solana.TokenBridgeBaseDerivedAccounts.md)

  ↳ **`TokenBridgeBaseRedeemerDerivedAccounts`**

  ↳↳ [`TokenBridgeNativeRedeemerDerivedAccounts`](solana.TokenBridgeNativeRedeemerDerivedAccounts.md)

  ↳↳ [`TokenBridgeWrappedRedeemerDerivedAccounts`](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md)

## Table of contents

### Properties

- [tokenBridgeConfig](solana.TokenBridgeBaseRedeemerDerivedAccounts.md#tokenbridgeconfig)
- [tokenBridgeRedeemer](solana.TokenBridgeBaseRedeemerDerivedAccounts.md#tokenbridgeredeemer)

## Properties

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseDerivedAccounts](solana.TokenBridgeBaseDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeBaseDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeRedeemer

• **tokenBridgeRedeemer**: `PublicKey`

seeds = ["redeemer"], seeds::program = cpiProgramId

#### Defined in

[src/solana/tokenBridge/cpi.ts:91](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L91)
