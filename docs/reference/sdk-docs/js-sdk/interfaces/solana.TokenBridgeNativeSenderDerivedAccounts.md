[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TokenBridgeNativeSenderDerivedAccounts

# Interface: TokenBridgeNativeSenderDerivedAccounts

[solana](../modules/solana.md).TokenBridgeNativeSenderDerivedAccounts

## Hierarchy

- [`TokenBridgeBaseNativeDerivedAccounts`](solana.TokenBridgeBaseNativeDerivedAccounts.md)

- [`TokenBridgeBaseSenderDerivedAccounts`](solana.TokenBridgeBaseSenderDerivedAccounts.md)

  ↳ **`TokenBridgeNativeSenderDerivedAccounts`**

  ↳↳ [`TokenBridgeDerivedAccounts`](solana.TokenBridgeDerivedAccounts.md)

  ↳↳ [`TransferNativeWithPayloadCpiAccounts`](solana.TransferNativeWithPayloadCpiAccounts.md)

## Table of contents

### Properties

- [tokenBridgeAuthoritySigner](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgeauthoritysigner)
- [tokenBridgeConfig](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgeconfig)
- [tokenBridgeCustodySigner](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgecustodysigner)
- [tokenBridgeEmitter](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgeemitter)
- [tokenBridgeSender](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgesender)
- [tokenBridgeSequence](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgesequence)
- [wormholeBridge](solana.TokenBridgeNativeSenderDerivedAccounts.md#wormholebridge)
- [wormholeFeeCollector](solana.TokenBridgeNativeSenderDerivedAccounts.md#wormholefeecollector)

## Properties

### tokenBridgeAuthoritySigner

• **tokenBridgeAuthoritySigner**: `PublicKey`

seeds = ["authority_signer"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseSenderDerivedAccounts](solana.TokenBridgeBaseSenderDerivedAccounts.md).[tokenBridgeAuthoritySigner](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgeauthoritysigner)

#### Defined in

[src/solana/tokenBridge/cpi.ts:56](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L56)

___

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseSenderDerivedAccounts](solana.TokenBridgeBaseSenderDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgeconfig)

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

### tokenBridgeEmitter

• **tokenBridgeEmitter**: `PublicKey`

seeds = ["emitter"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseSenderDerivedAccounts](solana.TokenBridgeBaseSenderDerivedAccounts.md).[tokenBridgeEmitter](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgeemitter)

#### Defined in

[src/solana/tokenBridge/cpi.ts:68](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L68)

___

### tokenBridgeSender

• **tokenBridgeSender**: `PublicKey`

seeds = ["sender"], seeds::program = cpiProgramId

#### Inherited from

[TokenBridgeBaseSenderDerivedAccounts](solana.TokenBridgeBaseSenderDerivedAccounts.md).[tokenBridgeSender](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgesender)

#### Defined in

[src/solana/tokenBridge/cpi.ts:60](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L60)

___

### tokenBridgeSequence

• **tokenBridgeSequence**: `PublicKey`

seeds = ["Sequence", tokenBridgeEmitter], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeBaseSenderDerivedAccounts](solana.TokenBridgeBaseSenderDerivedAccounts.md).[tokenBridgeSequence](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgesequence)

#### Defined in

[src/solana/tokenBridge/cpi.ts:72](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L72)

___

### wormholeBridge

• **wormholeBridge**: `PublicKey`

seeds = ["Bridge"], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeBaseSenderDerivedAccounts](solana.TokenBridgeBaseSenderDerivedAccounts.md).[wormholeBridge](solana.TokenBridgeBaseSenderDerivedAccounts.md#wormholebridge)

#### Defined in

[src/solana/tokenBridge/cpi.ts:64](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L64)

___

### wormholeFeeCollector

• **wormholeFeeCollector**: `PublicKey`

seeds = ["fee_collector"], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeBaseSenderDerivedAccounts](solana.TokenBridgeBaseSenderDerivedAccounts.md).[wormholeFeeCollector](solana.TokenBridgeBaseSenderDerivedAccounts.md#wormholefeecollector)

#### Defined in

[src/solana/tokenBridge/cpi.ts:76](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L76)
