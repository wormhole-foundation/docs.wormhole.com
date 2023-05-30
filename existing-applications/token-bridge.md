# Token Bridge

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

Tokens are transferred from one chain to another using a lockup/mint and burn/unlock mechanism. While many bridges work on this basic premise, this implementation achieves this by relying on the generic message passing protocol provided by Wormhole to support routing the lock and burn events from one chain to another.

This makes Wormhole's token bridge completely chain agnostic. As long as a wormhole contract exists on the chain we wish to transfer to, an implementation can be quickly incorporated into the network. Due to the generic message passing nature of Wormhole, programs emitting messages do not need to know anything about the implementation details of any other chain.

### Transfers

In order to transfer tokens from A to B, we must lock the tokens on A and mint them on B.

It is important that the tokens on A have been proven to be locked before the minting can occur on B. To facilitate this process, chain A first locks the tokens and emits a message indicating that the locking has been completed. This message has the following structure, and is referred to as a transfer message:

```rust
u8      payload_id = 1          Transfer
u256    amount                  Amount of tokens being transferred.
u8[32]  token_address           Address on the origin chain.
u16     token_chain             Numeric ID for the origin chain.
u8[32]  to                      Address on the destination chain.
u16     to_chain                Numeric ID for the destination chain.
u256    fee                     Portion of amount paid to a relayer.
```

This structure contains contains everything needed for the receiving chain to learn about a lockup event. Once Chain B receives this payload it can mint the corresponding asset.

Note that Chain B is agnostic as to how the tokens on the sending side were locked. They could have been burned by a mint or locked in a custody account. The protocol simply relays the event once a sufficient amount of guardians have attested its existence.

### Attestation

The Transfer event above is missing an important detail. While the program on Chain B can trust the message to inform it of token lockup events, it has no way to know what the token being locked up actually is. The address alone is a meaningless value to most users.

To solve this, the Token Bridge supports token attestation. Chain A emits a message containing metadata about an address, which Chain B can store in order to learn the name, symbol, and decimal precision of a token address.

The message format for this action is as so:

```rust
u8         payload_id = 2
[32]byte   token_address
u16        token_chain
u8         decimals
[32]byte   symbol
[32]byte   name
```

An important detail of the token bridge is that an attestation is in fact required before a token can be transferred. This is because without knowing a tokens decimal precision, it is not possible for Chain B to correctly mint the correct amount of tokens when processing a transfer.

### Relayers

Token bridge transfers must be completed on the target chain, which will require a transaction fee to be paid in the native currency of that chain. As many users performing transfers may not have any currency, wormhole provides a mechanism to allow relayers to perform the final step and pay the fees on the users behalf.

This mechanism works by allowing users to specify a portion of the tokens being transferred as a fee. When the transfer VAA is submitted, the contract will pay the fee portion to the relayer instead of the user.

Currently there are no public relayers for Wormhole.
