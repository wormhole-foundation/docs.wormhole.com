[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / PostMessageCpiAccounts

# Interface: PostMessageCpiAccounts

[solana](../modules/solana.md).PostMessageCpiAccounts

## Hierarchy

- [`WormholeDerivedAccounts`](solana.WormholeDerivedAccounts.md)

  ↳ **`PostMessageCpiAccounts`**

## Table of contents

### Properties

- [clock](solana.PostMessageCpiAccounts.md#clock)
- [payer](solana.PostMessageCpiAccounts.md#payer)
- [rent](solana.PostMessageCpiAccounts.md#rent)
- [systemProgram](solana.PostMessageCpiAccounts.md#systemprogram)
- [wormholeBridge](solana.PostMessageCpiAccounts.md#wormholebridge)
- [wormholeEmitter](solana.PostMessageCpiAccounts.md#wormholeemitter)
- [wormholeFeeCollector](solana.PostMessageCpiAccounts.md#wormholefeecollector)
- [wormholeMessage](solana.PostMessageCpiAccounts.md#wormholemessage)
- [wormholeSequence](solana.PostMessageCpiAccounts.md#wormholesequence)

## Properties

### clock

• **clock**: `PublicKey`

#### Defined in

[src/solana/wormhole/cpi.ts:54](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L54)

___

### payer

• **payer**: `PublicKey`

#### Defined in

[src/solana/wormhole/cpi.ts:52](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L52)

___

### rent

• **rent**: `PublicKey`

#### Defined in

[src/solana/wormhole/cpi.ts:55](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L55)

___

### systemProgram

• **systemProgram**: `PublicKey`

#### Defined in

[src/solana/wormhole/cpi.ts:56](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L56)

___

### wormholeBridge

• **wormholeBridge**: `PublicKey`

seeds = ["Bridge"], seeds::program = wormholeProgram

#### Inherited from

[WormholeDerivedAccounts](solana.WormholeDerivedAccounts.md).[wormholeBridge](solana.WormholeDerivedAccounts.md#wormholebridge)

#### Defined in

[src/solana/wormhole/cpi.ts:15](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L15)

___

### wormholeEmitter

• **wormholeEmitter**: `PublicKey`

seeds = ["emitter"], seeds::program = cpiProgramId

#### Inherited from

[WormholeDerivedAccounts](solana.WormholeDerivedAccounts.md).[wormholeEmitter](solana.WormholeDerivedAccounts.md#wormholeemitter)

#### Defined in

[src/solana/wormhole/cpi.ts:19](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L19)

___

### wormholeFeeCollector

• **wormholeFeeCollector**: `PublicKey`

seeds = ["fee_collector"], seeds::program = wormholeProgram

#### Inherited from

[WormholeDerivedAccounts](solana.WormholeDerivedAccounts.md).[wormholeFeeCollector](solana.WormholeDerivedAccounts.md#wormholefeecollector)

#### Defined in

[src/solana/wormhole/cpi.ts:27](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L27)

___

### wormholeMessage

• **wormholeMessage**: `PublicKey`

#### Defined in

[src/solana/wormhole/cpi.ts:53](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L53)

___

### wormholeSequence

• **wormholeSequence**: `PublicKey`

seeds = ["Sequence", wormholeEmitter], seeds::program = wormholeProgram

#### Inherited from

[WormholeDerivedAccounts](solana.WormholeDerivedAccounts.md).[wormholeSequence](solana.WormholeDerivedAccounts.md#wormholesequence)

#### Defined in

[src/solana/wormhole/cpi.ts:23](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L23)
