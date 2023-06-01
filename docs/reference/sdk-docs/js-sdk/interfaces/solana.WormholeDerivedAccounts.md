[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [solana](../modules/solana.md) / WormholeDerivedAccounts

# Interface: WormholeDerivedAccounts

[solana](../modules/solana.md).WormholeDerivedAccounts

## Hierarchy

- **`WormholeDerivedAccounts`**

  ↳ [`PostMessageCpiAccounts`](solana.PostMessageCpiAccounts.md)

## Table of contents

### Properties

- [wormholeBridge](solana.WormholeDerivedAccounts.md#wormholebridge)
- [wormholeEmitter](solana.WormholeDerivedAccounts.md#wormholeemitter)
- [wormholeFeeCollector](solana.WormholeDerivedAccounts.md#wormholefeecollector)
- [wormholeSequence](solana.WormholeDerivedAccounts.md#wormholesequence)

## Properties

### wormholeBridge

• **wormholeBridge**: `PublicKey`

seeds = ["Bridge"], seeds::program = wormholeProgram

#### Defined in

[src/solana/wormhole/cpi.ts:15](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L15)

___

### wormholeEmitter

• **wormholeEmitter**: `PublicKey`

seeds = ["emitter"], seeds::program = cpiProgramId

#### Defined in

[src/solana/wormhole/cpi.ts:19](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L19)

___

### wormholeFeeCollector

• **wormholeFeeCollector**: `PublicKey`

seeds = ["fee_collector"], seeds::program = wormholeProgram

#### Defined in

[src/solana/wormhole/cpi.ts:27](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L27)

___

### wormholeSequence

• **wormholeSequence**: `PublicKey`

seeds = ["Sequence", wormholeEmitter], seeds::program = wormholeProgram

#### Defined in

[src/solana/wormhole/cpi.ts:23](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/solana/wormhole/cpi.ts#L23)
