[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TokenBridgeBaseNativeDerivedAccounts

# Interface: TokenBridgeBaseNativeDerivedAccounts

[solana](../modules/solana.md).TokenBridgeBaseNativeDerivedAccounts

## Hierarchy

- [`TokenBridgeBaseDerivedAccounts`](solana.TokenBridgeBaseDerivedAccounts.md)

  ↳ **`TokenBridgeBaseNativeDerivedAccounts`**

  ↳↳ [`TokenBridgeNativeSenderDerivedAccounts`](solana.TokenBridgeNativeSenderDerivedAccounts.md)

  ↳↳ [`TokenBridgeNativeRedeemerDerivedAccounts`](solana.TokenBridgeNativeRedeemerDerivedAccounts.md)

## Table of contents

### Properties

- [tokenBridgeConfig](solana.TokenBridgeBaseNativeDerivedAccounts.md#tokenbridgeconfig)
- [tokenBridgeCustodySigner](solana.TokenBridgeBaseNativeDerivedAccounts.md#tokenbridgecustodysigner)

## Properties

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseDerivedAccounts](solana.TokenBridgeBaseDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeBaseDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeCustodySigner

• **tokenBridgeCustodySigner**: `PublicKey`

seeds = ["custody_signer"], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:48](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L48)
