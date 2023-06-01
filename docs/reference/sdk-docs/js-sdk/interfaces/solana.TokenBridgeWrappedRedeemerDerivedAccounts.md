[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TokenBridgeWrappedRedeemerDerivedAccounts

# Interface: TokenBridgeWrappedRedeemerDerivedAccounts

[solana](../modules/solana.md).TokenBridgeWrappedRedeemerDerivedAccounts

## Hierarchy

- [`TokenBridgeBaseRedeemerDerivedAccounts`](solana.TokenBridgeBaseRedeemerDerivedAccounts.md)

  ↳ **`TokenBridgeWrappedRedeemerDerivedAccounts`**

  ↳↳ [`TokenBridgeDerivedAccounts`](solana.TokenBridgeDerivedAccounts.md)

  ↳↳ [`CompleteTransferWrappedWithPayloadCpiAccounts`](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md)

## Table of contents

### Properties

- [tokenBridgeConfig](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md#tokenbridgeconfig)
- [tokenBridgeMintAuthority](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md#tokenbridgemintauthority)
- [tokenBridgeRedeemer](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md#tokenbridgeredeemer)

## Properties

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseRedeemerDerivedAccounts](solana.TokenBridgeBaseRedeemerDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeBaseRedeemerDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeMintAuthority

• **tokenBridgeMintAuthority**: `PublicKey`

seeds = ["mint_signer"], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:103](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L103)

___

### tokenBridgeRedeemer

• **tokenBridgeRedeemer**: `PublicKey`

seeds = ["redeemer"], seeds::program = cpiProgramId

#### Inherited from

[TokenBridgeBaseRedeemerDerivedAccounts](solana.TokenBridgeBaseRedeemerDerivedAccounts.md).[tokenBridgeRedeemer](solana.TokenBridgeBaseRedeemerDerivedAccounts.md#tokenbridgeredeemer)

#### Defined in

[src/solana/tokenBridge/cpi.ts:91](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L91)
