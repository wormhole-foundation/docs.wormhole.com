[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TokenBridgeNativeRedeemerDerivedAccounts

# Interface: TokenBridgeNativeRedeemerDerivedAccounts

[solana](../modules/solana.md).TokenBridgeNativeRedeemerDerivedAccounts

## Hierarchy

- [`TokenBridgeBaseNativeDerivedAccounts`](solana.TokenBridgeBaseNativeDerivedAccounts.md)

- [`TokenBridgeBaseRedeemerDerivedAccounts`](solana.TokenBridgeBaseRedeemerDerivedAccounts.md)

  ↳ **`TokenBridgeNativeRedeemerDerivedAccounts`**

  ↳↳ [`TokenBridgeDerivedAccounts`](solana.TokenBridgeDerivedAccounts.md)

  ↳↳ [`CompleteTransferNativeWithPayloadCpiAccounts`](solana.CompleteTransferNativeWithPayloadCpiAccounts.md)

## Table of contents

### Properties

- [tokenBridgeConfig](solana.TokenBridgeNativeRedeemerDerivedAccounts.md#tokenbridgeconfig)
- [tokenBridgeCustodySigner](solana.TokenBridgeNativeRedeemerDerivedAccounts.md#tokenbridgecustodysigner)
- [tokenBridgeRedeemer](solana.TokenBridgeNativeRedeemerDerivedAccounts.md#tokenbridgeredeemer)

## Properties

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseRedeemerDerivedAccounts](solana.TokenBridgeBaseRedeemerDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeBaseRedeemerDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeCustodySigner

• **tokenBridgeCustodySigner**: `PublicKey`

seeds = ["custody_signer"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseNativeDerivedAccounts](solana.TokenBridgeBaseNativeDerivedAccounts.md).[tokenBridgeCustodySigner](solana.TokenBridgeBaseNativeDerivedAccounts.md#tokenbridgecustodysigner)

#### Defined in

[src/solana/tokenBridge/cpi.ts:48](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L48)

___

### tokenBridgeRedeemer

• **tokenBridgeRedeemer**: `PublicKey`

seeds = ["redeemer"], seeds::program = cpiProgramId

#### Inherited from

[TokenBridgeBaseRedeemerDerivedAccounts](solana.TokenBridgeBaseRedeemerDerivedAccounts.md).[tokenBridgeRedeemer](solana.TokenBridgeBaseRedeemerDerivedAccounts.md#tokenbridgeredeemer)

#### Defined in

[src/solana/tokenBridge/cpi.ts:91](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L91)
