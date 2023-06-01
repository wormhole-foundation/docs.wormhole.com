# Guardians

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

Wormhole relies upon a set of distributed nodes which monitor state on several blockchains. In Wormhole these nodes are referred to as Guardians. The current guardian set can be seen in the [Wormhole Explorer](https://wormhole.com/network/).

It is the guardians role to observe messages and sign the corresponding payloads. Each guardian performs this step in isolation, later combining the resulting signatures with other guardians as a final step. The resulting collection of independent observations form a multisig which represents a proof that a state has been observed and agreed upon by a majority of the wormhole network. These multisigs are referred to as VAA's in Wormhole.
