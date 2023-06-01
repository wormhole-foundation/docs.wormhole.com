[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TokenBridgeBaseSenderDerivedAccounts

# Interface: TokenBridgeBaseSenderDerivedAccounts

[solana](../modules/solana.md).TokenBridgeBaseSenderDerivedAccounts

## Hierarchy

- [`TokenBridgeBaseDerivedAccounts`](solana.TokenBridgeBaseDerivedAccounts.md)

  ↳ **`TokenBridgeBaseSenderDerivedAccounts`**

  ↳↳ [`TokenBridgeNativeSenderDerivedAccounts`](solana.TokenBridgeNativeSenderDerivedAccounts.md)

  ↳↳ [`TokenBridgeWrappedSenderDerivedAccounts`](solana.TokenBridgeWrappedSenderDerivedAccounts.md)

## Table of contents

### Properties

- [tokenBridgeAuthoritySigner](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgeauthoritysigner)
- [tokenBridgeConfig](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgeconfig)
- [tokenBridgeEmitter](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgeemitter)
- [tokenBridgeSender](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgesender)
- [tokenBridgeSequence](solana.TokenBridgeBaseSenderDerivedAccounts.md#tokenbridgesequence)
- [wormholeBridge](solana.TokenBridgeBaseSenderDerivedAccounts.md#wormholebridge)
- [wormholeFeeCollector](solana.TokenBridgeBaseSenderDerivedAccounts.md#wormholefeecollector)

## Properties

### tokenBridgeAuthoritySigner

• **tokenBridgeAuthoritySigner**: `PublicKey`

seeds = ["authority_signer"], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:56](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L56)

___

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeBaseDerivedAccounts](solana.TokenBridgeBaseDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeBaseDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeEmitter

• **tokenBridgeEmitter**: `PublicKey`

seeds = ["emitter"], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:68](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L68)

___

### tokenBridgeSender

• **tokenBridgeSender**: `PublicKey`

seeds = ["sender"], seeds::program = cpiProgramId

#### Defined in

[src/solana/tokenBridge/cpi.ts:60](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L60)

___

### tokenBridgeSequence

• **tokenBridgeSequence**: `PublicKey`

seeds = ["Sequence", tokenBridgeEmitter], seeds::program = wormholeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:72](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L72)

___

### wormholeBridge

• **wormholeBridge**: `PublicKey`

seeds = ["Bridge"], seeds::program = wormholeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:64](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L64)

___

### wormholeFeeCollector

• **wormholeFeeCollector**: `PublicKey`

seeds = ["fee_collector"], seeds::program = wormholeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:76](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L76)
