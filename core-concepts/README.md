# Core Concepts

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

### **Core Bridge Contract**

Core Bridge Contracts are smart contracts deployed on each chain. These contracts have two functions that developers can take advantage of. They can emitVAA and verifyVAA. EmitVAA takes a structured binary blob of data and publishes it for the Guardian network to read and observe. VerifyVAA takes a VAA and verifies the signatures on it match the registered guardians.

### **Portal Token Bridge**

The Portal Token Bridge is a set of smart contracts that are custody funds on source chains and issue the corresponding wrapped assets on the target chain. Portal is built on top of the Wormhole protcol, and has specific structured payloads that it sends as VAAs.

Learn more about [Portal Payloads](portal-payloads.md)

### **VAA - Verifiable Action Approval**

Messages emitted by contracts need to be verified by the guardians before they can be sent to the target chain. Once a majority of guardians reach consensus that an observation has been made, the message is wrapped up in a structure called a VAA which combines the message with the guardian signatures to form a proof. These VAA's are ultimately what a smart contract on a receiving chain must process in order to receive a wormhole message.

Check out the VAA format

### **Guardian**

Wormhole relies upon a set of distributed nodes which monitor state on several blockchains. In Wormhole these nodes are referred to as Guardians. The current guardian set can be seen in the [Wormhole Explorer](https://wormholenetwork.com/network/).

It is the guardians role to observe messages and sign the corresponding payloads. Each guardian performs this step in isolation, later combining the resulting signatures with other guardians as a final step. The resulting collection of independent observations form a multisig which represents a proof that a state has been observed and agreed upon by a majority of the wormhole network. These multisigs are referred to as VAA's in Wormhole.

### **Relayer**

A relayer is a piece of software that picks up signed VAAs from the Wormhole network and submits it to the target chain. Relayers generally take a fee to cover the gas cost for submitting the transaction to the target chain, as they pay gas for the transaction. Because a relayer does not perform any cryptographic functions on the VAA it can be run in an untrusted environment and cannot forge VAAs.

Relayers are usually run to target specific applications (called “Application Specific Relayers”) and can be run by the application’s author, or an open market of relayers that compete to shuttle messages for fees. An example is the Certus One “Relayer 1” that is shuttling transactions for the Portal Token Bridge that you can interact with directly on [portalbridge.com](http://portalbridge.com)

Without relayers, a user would have to manually fetch the VAA from the network and submit it on the target chain themselves, paying gas in the target chain’s currency.
