[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TokenBridgeDerivedAccounts

# Interface: TokenBridgeDerivedAccounts

[solana](../modules/solana.md).TokenBridgeDerivedAccounts

## Hierarchy

- [`TokenBridgeNativeSenderDerivedAccounts`](solana.TokenBridgeNativeSenderDerivedAccounts.md)

- [`TokenBridgeWrappedSenderDerivedAccounts`](solana.TokenBridgeWrappedSenderDerivedAccounts.md)

- [`TokenBridgeNativeRedeemerDerivedAccounts`](solana.TokenBridgeNativeRedeemerDerivedAccounts.md)

- [`TokenBridgeWrappedRedeemerDerivedAccounts`](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md)

  ↳ **`TokenBridgeDerivedAccounts`**

## Table of contents

### Properties

- [tokenBridgeAuthoritySigner](solana.TokenBridgeDerivedAccounts.md#tokenbridgeauthoritysigner)
- [tokenBridgeConfig](solana.TokenBridgeDerivedAccounts.md#tokenbridgeconfig)
- [tokenBridgeCustodySigner](solana.TokenBridgeDerivedAccounts.md#tokenbridgecustodysigner)
- [tokenBridgeEmitter](solana.TokenBridgeDerivedAccounts.md#tokenbridgeemitter)
- [tokenBridgeMintAuthority](solana.TokenBridgeDerivedAccounts.md#tokenbridgemintauthority)
- [tokenBridgeRedeemer](solana.TokenBridgeDerivedAccounts.md#tokenbridgeredeemer)
- [tokenBridgeSender](solana.TokenBridgeDerivedAccounts.md#tokenbridgesender)
- [tokenBridgeSequence](solana.TokenBridgeDerivedAccounts.md#tokenbridgesequence)
- [wormholeBridge](solana.TokenBridgeDerivedAccounts.md#wormholebridge)
- [wormholeFeeCollector](solana.TokenBridgeDerivedAccounts.md#wormholefeecollector)

## Properties

### tokenBridgeAuthoritySigner

• **tokenBridgeAuthoritySigner**: `PublicKey`

seeds = ["authority_signer"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeWrappedSenderDerivedAccounts](solana.TokenBridgeWrappedSenderDerivedAccounts.md).[tokenBridgeAuthoritySigner](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgeauthoritysigner)

#### Defined in

[src/solana/tokenBridge/cpi.ts:56](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L56)

___

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeWrappedRedeemerDerivedAccounts](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeCustodySigner

• **tokenBridgeCustodySigner**: `PublicKey`

seeds = ["custody_signer"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeNativeRedeemerDerivedAccounts](solana.TokenBridgeNativeRedeemerDerivedAccounts.md).[tokenBridgeCustodySigner](solana.TokenBridgeNativeRedeemerDerivedAccounts.md#tokenbridgecustodysigner)

#### Defined in

[src/solana/tokenBridge/cpi.ts:48](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L48)

___

### tokenBridgeEmitter

• **tokenBridgeEmitter**: `PublicKey`

seeds = ["emitter"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeWrappedSenderDerivedAccounts](solana.TokenBridgeWrappedSenderDerivedAccounts.md).[tokenBridgeEmitter](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgeemitter)

#### Defined in

[src/solana/tokenBridge/cpi.ts:68](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L68)

___

### tokenBridgeMintAuthority

• **tokenBridgeMintAuthority**: `PublicKey`

seeds = ["mint_signer"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeWrappedRedeemerDerivedAccounts](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md).[tokenBridgeMintAuthority](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md#tokenbridgemintauthority)

#### Defined in

[src/solana/tokenBridge/cpi.ts:103](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L103)

___

### tokenBridgeRedeemer

• **tokenBridgeRedeemer**: `PublicKey`

seeds = ["redeemer"], seeds::program = cpiProgramId

#### Inherited from

[TokenBridgeWrappedRedeemerDerivedAccounts](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md).[tokenBridgeRedeemer](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md#tokenbridgeredeemer)

#### Defined in

[src/solana/tokenBridge/cpi.ts:91](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L91)

___

### tokenBridgeSender

• **tokenBridgeSender**: `PublicKey`

seeds = ["sender"], seeds::program = cpiProgramId

#### Inherited from

[TokenBridgeWrappedSenderDerivedAccounts](solana.TokenBridgeWrappedSenderDerivedAccounts.md).[tokenBridgeSender](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgesender)

#### Defined in

[src/solana/tokenBridge/cpi.ts:60](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L60)

___

### tokenBridgeSequence

• **tokenBridgeSequence**: `PublicKey`

seeds = ["Sequence", tokenBridgeEmitter], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeWrappedSenderDerivedAccounts](solana.TokenBridgeWrappedSenderDerivedAccounts.md).[tokenBridgeSequence](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgesequence)

#### Defined in

[src/solana/tokenBridge/cpi.ts:72](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L72)

___

### wormholeBridge

• **wormholeBridge**: `PublicKey`

seeds = ["Bridge"], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeWrappedSenderDerivedAccounts](solana.TokenBridgeWrappedSenderDerivedAccounts.md).[wormholeBridge](solana.TokenBridgeWrappedSenderDerivedAccounts.md#wormholebridge)

#### Defined in

[src/solana/tokenBridge/cpi.ts:64](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L64)

___

### wormholeFeeCollector

• **wormholeFeeCollector**: `PublicKey`

seeds = ["fee_collector"], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeWrappedSenderDerivedAccounts](solana.TokenBridgeWrappedSenderDerivedAccounts.md).[wormholeFeeCollector](solana.TokenBridgeWrappedSenderDerivedAccounts.md#wormholefeecollector)

#### Defined in

[src/solana/tokenBridge/cpi.ts:76](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L76)
