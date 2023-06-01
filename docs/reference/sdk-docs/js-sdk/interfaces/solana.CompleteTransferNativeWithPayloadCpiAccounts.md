[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / CompleteTransferNativeWithPayloadCpiAccounts

# Interface: CompleteTransferNativeWithPayloadCpiAccounts

[solana](../modules/solana.md).CompleteTransferNativeWithPayloadCpiAccounts

## Hierarchy

- [`TokenBridgeNativeRedeemerDerivedAccounts`](solana.TokenBridgeNativeRedeemerDerivedAccounts.md)

  ↳ **`CompleteTransferNativeWithPayloadCpiAccounts`**

## Table of contents

### Properties

- [mint](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#mint)
- [payer](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#payer)
- [rent](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#rent)
- [systemProgram](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#systemprogram)
- [toFeesTokenAccount](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#tofeestokenaccount)
- [toTokenAccount](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#totokenaccount)
- [tokenBridgeClaim](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#tokenbridgeclaim)
- [tokenBridgeConfig](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#tokenbridgeconfig)
- [tokenBridgeCustody](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#tokenbridgecustody)
- [tokenBridgeCustodySigner](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#tokenbridgecustodysigner)
- [tokenBridgeForeignEndpoint](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#tokenbridgeforeignendpoint)
- [tokenBridgeRedeemer](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#tokenbridgeredeemer)
- [tokenProgram](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#tokenprogram)
- [vaa](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#vaa)
- [wormholeProgram](solana.CompleteTransferNativeWithPayloadCpiAccounts.md#wormholeprogram)

## Properties

### mint

• **mint**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:328](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L328)

___

### payer

• **payer**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:306](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L306)

___

### rent

• **rent**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:329](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L329)

___

### systemProgram

• **systemProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:330](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L330)

___

### toFeesTokenAccount

• **toFeesTokenAccount**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:323](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L323)

___

### toTokenAccount

• **toTokenAccount**: `PublicKey`

Token account to receive tokens

#### Defined in

[src/solana/tokenBridge/cpi.ts:322](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L322)

___

### tokenBridgeClaim

• **tokenBridgeClaim**: `PublicKey`

seeds = [emitter_address, emitter_chain, sequence], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:314](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L314)

___

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeNativeRedeemerDerivedAccounts](solana.TokenBridgeNativeRedeemerDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeNativeRedeemerDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeCustody

• **tokenBridgeCustody**: `PublicKey`

seeds = [mint], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:327](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L327)

___

### tokenBridgeCustodySigner

• **tokenBridgeCustodySigner**: `PublicKey`

seeds = ["custody_signer"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeNativeRedeemerDerivedAccounts](solana.TokenBridgeNativeRedeemerDerivedAccounts.md).[tokenBridgeCustodySigner](solana.TokenBridgeNativeRedeemerDerivedAccounts.md#tokenbridgecustodysigner)

#### Defined in

[src/solana/tokenBridge/cpi.ts:48](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L48)

___

### tokenBridgeForeignEndpoint

• **tokenBridgeForeignEndpoint**: `PublicKey`

seeds = [emitter_chain, emitter_address], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:318](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L318)

___

### tokenBridgeRedeemer

• **tokenBridgeRedeemer**: `PublicKey`

seeds = ["redeemer"], seeds::program = cpiProgramId

#### Inherited from

[TokenBridgeNativeRedeemerDerivedAccounts](solana.TokenBridgeNativeRedeemerDerivedAccounts.md).[tokenBridgeRedeemer](solana.TokenBridgeNativeRedeemerDerivedAccounts.md#tokenbridgeredeemer)

#### Defined in

[src/solana/tokenBridge/cpi.ts:91](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L91)

___

### tokenProgram

• **tokenProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:331](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L331)

___

### vaa

• **vaa**: `PublicKey`

seeds = ["PostedVAA", vaa_hash], seeds::program = wormholeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:310](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L310)

___

### wormholeProgram

• **wormholeProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:332](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L332)
