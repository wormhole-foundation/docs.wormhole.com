This section will detail the main components that make up Wormhole.

### Core Contract

Core Bridge Contracts are smart contracts deployed on each chain. These contracts have two functions that developers can take advantage of. They can emitVAA and verifyVAA. EmitVAA takes a structured binary blob of data and publishes it for the Guardian network to read and observe. VerifyVAA takes a VAA and verifies the signatures on it match the registered guardians.

[More Details](./core-contracts.md)


### Guardians

Wormhole relies upon a set of distributed nodes which monitor state on several blockchains. In Wormhole these nodes are referred to as Guardians. The current guardian set can be seen in the [Wormhole Explorer](https://wormholenetwork.com/network/).

It is the guardians role to observe messages and sign the corresponding payloads. Each guardian performs this step in isolation, later combining the resulting signatures with other guardians as a final step. The resulting collection of independent observations form a multisig which represents a proof that a state has been observed and agreed upon by a majority of the wormhole network. These multisigs are referred to as VAA's in Wormhole.

[More Details](./guardian.md)


### VAAs

Messages emitted by contracts need to be verified by the guardians before they can be sent to the target chain. Once a majority of guardians reach consensus that an observation has been made, the message is wrapped up in a structure called a VAA which combines the message with the guardian signatures to form a proof. These VAA's are ultimately what a smart contract on a receiving chain must process in order to receive a wormhole message.

[More Details](./vaa.md)


### Relayers

A relayer is a piece of software that picks up signed VAAs from the Wormhole network and submits it to the target chain. Because a relayer does not perform any cryptographic functions on the VAA it can be run in an untrusted environment and cannot forge VAAs.


Relayers may target specific applications (called "Specialized Relayers") and be run by the application’s author, or a relayer may be generic and offer a way to relay VAAs to the destination automatically (called "Automatic Relayers"). Automatic Relayers may take a fee to cover the gas cost for submitting the transaction to the target chain, as they pay gas for the transaction.

Without relayers, a user would have to manually fetch the VAA from the network and submit it on the target chain themselves, paying gas in the target chain’s currency.

[More Details](./relayer.md)

