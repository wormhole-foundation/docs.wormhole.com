[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / TransferWrappedWithPayloadCpiAccounts

# Interface: TransferWrappedWithPayloadCpiAccounts

[solana](../modules/solana.md).TransferWrappedWithPayloadCpiAccounts

## Hierarchy

- [`TokenBridgeWrappedSenderDerivedAccounts`](solana.TokenBridgeWrappedSenderDerivedAccounts.md)

  ↳ **`TransferWrappedWithPayloadCpiAccounts`**

## Table of contents

### Properties

- [clock](solana.TransferWrappedWithPayloadCpiAccounts.md#clock)
- [fromTokenAccount](solana.TransferWrappedWithPayloadCpiAccounts.md#fromtokenaccount)
- [fromTokenAccountOwner](solana.TransferWrappedWithPayloadCpiAccounts.md#fromtokenaccountowner)
- [payer](solana.TransferWrappedWithPayloadCpiAccounts.md#payer)
- [rent](solana.TransferWrappedWithPayloadCpiAccounts.md#rent)
- [systemProgram](solana.TransferWrappedWithPayloadCpiAccounts.md#systemprogram)
- [tokenBridgeAuthoritySigner](solana.TransferWrappedWithPayloadCpiAccounts.md#tokenbridgeauthoritysigner)
- [tokenBridgeConfig](solana.TransferWrappedWithPayloadCpiAccounts.md#tokenbridgeconfig)
- [tokenBridgeEmitter](solana.TransferWrappedWithPayloadCpiAccounts.md#tokenbridgeemitter)
- [tokenBridgeSender](solana.TransferWrappedWithPayloadCpiAccounts.md#tokenbridgesender)
- [tokenBridgeSequence](solana.TransferWrappedWithPayloadCpiAccounts.md#tokenbridgesequence)
- [tokenBridgeWrappedMeta](solana.TransferWrappedWithPayloadCpiAccounts.md#tokenbridgewrappedmeta)
- [tokenBridgeWrappedMint](solana.TransferWrappedWithPayloadCpiAccounts.md#tokenbridgewrappedmint)
- [tokenProgram](solana.TransferWrappedWithPayloadCpiAccounts.md#tokenprogram)
- [wormholeBridge](solana.TransferWrappedWithPayloadCpiAccounts.md#wormholebridge)
- [wormholeFeeCollector](solana.TransferWrappedWithPayloadCpiAccounts.md#wormholefeecollector)
- [wormholeMessage](solana.TransferWrappedWithPayloadCpiAccounts.md#wormholemessage)
- [wormholeProgram](solana.TransferWrappedWithPayloadCpiAccounts.md#wormholeprogram)

## Properties

### clock

• **clock**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:238](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L238)

___

### fromTokenAccount

• **fromTokenAccount**: `PublicKey`

Token account where tokens reside

#### Defined in

[src/solana/tokenBridge/cpi.ts:224](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L224)

___

### fromTokenAccountOwner

• **fromTokenAccountOwner**: `PublicKey`

Token account owner (usually cpiProgramId)

#### Defined in

[src/solana/tokenBridge/cpi.ts:228](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L228)

___

### payer

• **payer**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:220](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L220)

___

### rent

• **rent**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:239](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L239)

___

### systemProgram

• **systemProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:240](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L240)

___

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

[TokenBridgeWrappedSenderDerivedAccounts](solana.TokenBridgeWrappedSenderDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeEmitter

• **tokenBridgeEmitter**: `PublicKey`

seeds = ["emitter"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeWrappedSenderDerivedAccounts](solana.TokenBridgeWrappedSenderDerivedAccounts.md).[tokenBridgeEmitter](solana.TokenBridgeWrappedSenderDerivedAccounts.md#tokenbridgeemitter)

#### Defined in

[src/solana/tokenBridge/cpi.ts:68](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L68)

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

### tokenBridgeWrappedMeta

• **tokenBridgeWrappedMeta**: `PublicKey`

seeds = ["meta", mint], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:236](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L236)

___

### tokenBridgeWrappedMint

• **tokenBridgeWrappedMint**: `PublicKey`

seeds = ["wrapped", token_chain, token_address], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:232](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L232)

___

### tokenProgram

• **tokenProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:241](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L241)

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

___

### wormholeMessage

• **wormholeMessage**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:237](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L237)

___

### wormholeProgram

• **wormholeProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:242](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L242)
