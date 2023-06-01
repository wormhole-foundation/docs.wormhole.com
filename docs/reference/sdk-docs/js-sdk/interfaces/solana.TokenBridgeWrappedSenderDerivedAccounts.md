[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TokenBridgeWrappedSenderDerivedAccounts

# Interface: TokenBridgeWrappedSenderDerivedAccounts

[solana](../modules/solana.md).TokenBridgeWrappedSenderDerivedAccounts

## Hierarchy

- [`TokenBridgeBaseSenderDerivedAccounts`](solana.TokenBridgeBaseSenderDerivedAccounts.md)

  ↳ **`TokenBridgeWrappedSenderDerivedAccounts`**

  ↳↳ [`TokenBridgeDerivedAccounts`](solana.TokenBridgeDerivedAccounts.md)

  ↳↳ [`TransferWrappedWithPayloadCpiAccounts`](solana.TransferWrappedWithPayloadCpiAccounts.md)

## Table of contents

### Properties

- [tokenBridgeAuthoritySigner](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgeauthoritysigner)
- [tokenBridgeConfig](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgeconfig)
- [tokenBridgeEmitter](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgeemitter)
- [tokenBridgeSender](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgesender)
- [tokenBridgeSequence](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgesequence)
- [wormholeBridge](solana.TokenBridgeWrappedSenderDerivedAccounts.md#wormholebridge)
- [wormholeFeeCollector](solana.TokenBridgeWrappedSenderDerivedAccounts.md#wormholefeecollector)

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
