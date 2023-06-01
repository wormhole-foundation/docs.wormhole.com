[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TransferNativeWithPayloadCpiAccounts

# Interface: TransferNativeWithPayloadCpiAccounts

[solana](../modules/solana.md).TransferNativeWithPayloadCpiAccounts

## Hierarchy

- [`TokenBridgeNativeSenderDerivedAccounts`](solana.TokenBridgeNativeSenderDerivedAccounts.md)

  ↳ **`TransferNativeWithPayloadCpiAccounts`**

## Table of contents

### Properties

- [clock](solana.TransferNativeWithPayloadCpiAccounts.md#clock)
- [fromTokenAccount](solana.TransferNativeWithPayloadCpiAccounts.md#fromtokenaccount)
- [mint](solana.TransferNativeWithPayloadCpiAccounts.md#mint)
- [payer](solana.TransferNativeWithPayloadCpiAccounts.md#payer)
- [rent](solana.TransferNativeWithPayloadCpiAccounts.md#rent)
- [systemProgram](solana.TransferNativeWithPayloadCpiAccounts.md#systemprogram)
- [tokenBridgeAuthoritySigner](solana.TransferNativeWithPayloadCpiAccounts.md#tokenbridgeauthoritysigner)
- [tokenBridgeConfig](solana.TransferNativeWithPayloadCpiAccounts.md#tokenbridgeconfig)
- [tokenBridgeCustody](solana.TransferNativeWithPayloadCpiAccounts.md#tokenbridgecustody)
- [tokenBridgeCustodySigner](solana.TransferNativeWithPayloadCpiAccounts.md#tokenbridgecustodysigner)
- [tokenBridgeEmitter](solana.TransferNativeWithPayloadCpiAccounts.md#tokenbridgeemitter)
- [tokenBridgeSender](solana.TransferNativeWithPayloadCpiAccounts.md#tokenbridgesender)
- [tokenBridgeSequence](solana.TransferNativeWithPayloadCpiAccounts.md#tokenbridgesequence)
- [tokenProgram](solana.TransferNativeWithPayloadCpiAccounts.md#tokenprogram)
- [wormholeBridge](solana.TransferNativeWithPayloadCpiAccounts.md#wormholebridge)
- [wormholeFeeCollector](solana.TransferNativeWithPayloadCpiAccounts.md#wormholefeecollector)
- [wormholeMessage](solana.TransferNativeWithPayloadCpiAccounts.md#wormholemessage)
- [wormholeProgram](solana.TransferNativeWithPayloadCpiAccounts.md#wormholeprogram)

## Properties

### clock

• **clock**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:158](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L158)

___

### fromTokenAccount

• **fromTokenAccount**: `PublicKey`

Token account where tokens reside

#### Defined in

[src/solana/tokenBridge/cpi.ts:155](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L155)

___

### mint

• **mint**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:156](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L156)

___

### payer

• **payer**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:147](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L147)

___

### rent

• **rent**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:159](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L159)

___

### systemProgram

• **systemProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:160](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L160)

___

### tokenBridgeAuthoritySigner

• **tokenBridgeAuthoritySigner**: `PublicKey`

seeds = ["authority_signer"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeNativeSenderDerivedAccounts](solana.TokenBridgeNativeSenderDerivedAccounts.md).[tokenBridgeAuthoritySigner](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgeauthoritysigner)

#### Defined in

[src/solana/tokenBridge/cpi.ts:56](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L56)

___

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeNativeSenderDerivedAccounts](solana.TokenBridgeNativeSenderDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeCustody

• **tokenBridgeCustody**: `PublicKey`

seeds = [mint], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:151](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L151)

___

### tokenBridgeCustodySigner

• **tokenBridgeCustodySigner**: `PublicKey`

seeds = ["custody_signer"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeNativeSenderDerivedAccounts](solana.TokenBridgeNativeSenderDerivedAccounts.md).[tokenBridgeCustodySigner](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgecustodysigner)

#### Defined in

[src/solana/tokenBridge/cpi.ts:48](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L48)

___

### tokenBridgeEmitter

• **tokenBridgeEmitter**: `PublicKey`

seeds = ["emitter"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeNativeSenderDerivedAccounts](solana.TokenBridgeNativeSenderDerivedAccounts.md).[tokenBridgeEmitter](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgeemitter)

#### Defined in

[src/solana/tokenBridge/cpi.ts:68](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L68)

___

### tokenBridgeSender

• **tokenBridgeSender**: `PublicKey`

seeds = ["sender"], seeds::program = cpiProgramId

#### Inherited from

[TokenBridgeNativeSenderDerivedAccounts](solana.TokenBridgeNativeSenderDerivedAccounts.md).[tokenBridgeSender](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgesender)

#### Defined in

[src/solana/tokenBridge/cpi.ts:60](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L60)

___

### tokenBridgeSequence

• **tokenBridgeSequence**: `PublicKey`

seeds = ["Sequence", tokenBridgeEmitter], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeNativeSenderDerivedAccounts](solana.TokenBridgeNativeSenderDerivedAccounts.md).[tokenBridgeSequence](solana.TokenBridgeNativeSenderDerivedAccounts.md#tokenbridgesequence)

#### Defined in

[src/solana/tokenBridge/cpi.ts:72](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L72)

___

### tokenProgram

• **tokenProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:161](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L161)

___

### wormholeBridge

• **wormholeBridge**: `PublicKey`

seeds = ["Bridge"], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeNativeSenderDerivedAccounts](solana.TokenBridgeNativeSenderDerivedAccounts.md).[wormholeBridge](solana.TokenBridgeNativeSenderDerivedAccounts.md#wormholebridge)

#### Defined in

[src/solana/tokenBridge/cpi.ts:64](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L64)

___

### wormholeFeeCollector

• **wormholeFeeCollector**: `PublicKey`

seeds = ["fee_collector"], seeds::program = wormholeProgram

#### Inherited from

[TokenBridgeNativeSenderDerivedAccounts](solana.TokenBridgeNativeSenderDerivedAccounts.md).[wormholeFeeCollector](solana.TokenBridgeNativeSenderDerivedAccounts.md#wormholefeecollector)

#### Defined in

[src/solana/tokenBridge/cpi.ts:76](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L76)

___

### wormholeMessage

• **wormholeMessage**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:157](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L157)

___

### wormholeProgram

• **wormholeProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:162](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L162)
