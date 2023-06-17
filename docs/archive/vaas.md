# VAAs

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

Messages emitted by contracts need to be verified by the guardians before they can be sent to the target chain. Once a majority of guardians reach consensus that an observation has been made, the message is wrapped up in a structure called a VAA which combines the message with the guardian signatures to form a proof.

These VAA's are ultimately what a smart contract on a receiving chain must process in order to receive a wormhole message.

### VAA Format

VAA's contain two sections of data. The header section metadata about the current VAA and are mutated as the signatures are aggregated. The lower section second contains data that is deterministically derived from the message and therefore immutable.

This second section is the data that a guardian must sign. As this data is deterministically derived, each guardian is able to produce signatures without communicating with other guardians. Over time the signatures will accumulate until a consensus threshold is reached and the resulting VAA can be submitted on chain.

#### Header

```rust
byte        version                  (VAA Version)
u32         guardian_set_index       (Indicates which guardian set is signing)
u8          len_signatures           (Number of signatures stored)
[][66]byte  signatures               (Collection of ecdsa signatures)
```

#### Body

The body is deterministically derived from an on chain message. Any two guardians must derive the exact same body. This requirement exists so that there is always a one to one relationship between VAA's and messages to avoid double processing of messages.

```rust
u32         timestamp
u32         nonce
u16         emitter_chain
[32]byte    emitter_address
u64         sequence
u8          consistency_level
[]byte      payload 
```
