[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / CompleteTransferWrappedWithPayloadCpiAccounts

# Interface: CompleteTransferWrappedWithPayloadCpiAccounts

[solana](../modules/solana.md).CompleteTransferWrappedWithPayloadCpiAccounts

## Hierarchy

- [`TokenBridgeWrappedRedeemerDerivedAccounts`](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md)

  ↳ **`CompleteTransferWrappedWithPayloadCpiAccounts`**

## Table of contents

### Properties

- [payer](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#payer)
- [rent](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#rent)
- [systemProgram](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#systemprogram)
- [toFeesTokenAccount](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tofeestokenaccount)
- [toTokenAccount](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#totokenaccount)
- [tokenBridgeClaim](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tokenbridgeclaim)
- [tokenBridgeConfig](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tokenbridgeconfig)
- [tokenBridgeForeignEndpoint](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tokenbridgeforeignendpoint)
- [tokenBridgeMintAuthority](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tokenbridgemintauthority)
- [tokenBridgeRedeemer](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tokenbridgeredeemer)
- [tokenBridgeWrappedMeta](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tokenbridgewrappedmeta)
- [tokenBridgeWrappedMint](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tokenbridgewrappedmint)
- [tokenProgram](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#tokenprogram)
- [vaa](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#vaa)
- [wormholeProgram](solana.CompleteTransferWrappedWithPayloadCpiAccounts.md#wormholeprogram)

## Properties

### payer

• **payer**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:391](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L391)

___

### rent

• **rent**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:417](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L417)

___

### systemProgram

• **systemProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:418](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L418)

___

### toFeesTokenAccount

• **toFeesTokenAccount**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:408](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L408)

___

### toTokenAccount

• **toTokenAccount**: `PublicKey`

Token account to receive tokens

#### Defined in

[src/solana/tokenBridge/cpi.ts:407](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L407)

___

### tokenBridgeClaim

• **tokenBridgeClaim**: `PublicKey`

seeds = [emitter_address, emitter_chain, sequence], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:399](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L399)

___

### tokenBridgeConfig

• **tokenBridgeConfig**: `PublicKey`

seeds = ["config"], seeds::program = tokenBridgeProgram

#### Inherited from

[TokenBridgeWrappedRedeemerDerivedAccounts](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md).[tokenBridgeConfig](solana.TokenBridgeWrappedRedeemerDerivedAccounts.md#tokenbridgeconfig)

#### Defined in

[src/solana/tokenBridge/cpi.ts:40](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L40)

___

### tokenBridgeForeignEndpoint

• **tokenBridgeForeignEndpoint**: `PublicKey`

seeds = [emitter_chain, emitter_address], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:403](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L403)

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

### tokenBridgeWrappedMeta

• **tokenBridgeWrappedMeta**: `PublicKey`

seeds = ["meta", mint], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:416](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L416)

___

### tokenBridgeWrappedMint

• **tokenBridgeWrappedMint**: `PublicKey`

seeds = ["wrapped", token_chain, token_address], seeds::program = tokenBridgeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:412](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L412)

___

### tokenProgram

• **tokenProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:419](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L419)

___

### vaa

• **vaa**: `PublicKey`

seeds = ["PostedVAA", vaa_hash], seeds::program = wormholeProgram

#### Defined in

[src/solana/tokenBridge/cpi.ts:395](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L395)

___

### wormholeProgram

• **wormholeProgram**: `PublicKey`

#### Defined in

[src/solana/tokenBridge/cpi.ts:420](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/tokenBridge/cpi.ts#L420)
