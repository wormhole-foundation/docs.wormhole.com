# Governance

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

Wormhole contracts are managed via governance by the guardian set. There are currently several pre-defined governance actions that the wormhole contracts can perform ranging from contract upgrades to guardian set updates. These actions are emitted as normal wormhole messages by a governance contract, which exists at the following pseudo-location:

```
Chain:   1
Emitter: 0x0000000000000000000000000000000000000000000000000000000000000004
```

Governance messages can target any of the various wormhole modules, including the core contracts as well as all currently deployed token bridge contracts. When a guardian signs such a message, its signature implies a vote on the action in question. Once more than 2/3 of the guardians have signed, the message and governance action are considered valid.

### Action Structure

Governance messages contain pre-defined actions, which can target the various wormhole modules currently deployed on chain. The structure contains the following fields:

```rust
u8[32]  module         Contains a right-aligned module identifier
u8      action         Predefined governance action to execute
u16     chain          Chain the action is targetting, 0 = all chains
...     args           Arguments to the action
```

Here is an example message containing a governance action triggering a code upgrade to the solana core contract. The module field here is a right-aligned encoding of the ASCII "Core", represented as a 32 byte hex string.

```rust
module:       0x00000000000000000000000000000000000000000000000000000000436f7265
action:       1
chain:        1
new_contract: 0x3485672937589571623749593761923748845625222819374462348283888283
```

### Actions

The meaning of each numeric action is pre-defined and documented in the wormhole design documents. For each application, the relevant definitions can be found via these links:

* Core governance actions are documented [here](https://github.com/certusone/wormhole/blob/dev.v2/whitepapers/0002\_governance\_messaging.md).
* Token Bridge governance actions are documented [here](https://github.com/certusone/wormhole/blob/dev.v2/whitepapers/0003\_token\_bridge.md).
* NFT Bridge governance actions are documented [here](https://github.com/certusone/wormhole/blob/dev.v2/whitepapers/0006\_nft\_bridge.md).
