# Architecture

Wormhole is a sophisticated cross-chain messaging protocol designed to facilitate seamless communication between disparate blockchain networks. Its architecture is composed of several key components, both on-chain and off-chain, that work together to enable secure and efficient cross-chain interactions. By understanding the roles and interactions of these components, developers can leverage Wormhole to build innovative decentralized applications (dApps) that operate across multiple blockchains.

In this section, we will introduce the major components of Wormhole's architecture and explain how they fit together to provide a robust framework for cross-chain communication.


![Detailed Flow](../../.gitbook/assets/core-concepts/detailed-flow.jpg)


## Components

Wormhole's architecture is divided into on-chain and off-chain components, each playing a crucial role in enabling cross-chain communication.

The on-chain components include the **Emitter**, **Wormhole Core Contract**, and **Transaction Logs**. The Emitter is a contract that initiates the process by calling the publish message method on the Core Contract, which then writes an event to the Transaction Logs. These logs contain details about the emitter and sequence number, allowing Guardians to observe and validate the messages.

The Wormhole Core Contract is the primary contract that facilitates cross-chain communication by emitting messages that are observed by the Guardians.

On the other hand, the off-chain components consist of the **Guardian Network**, **Guardians**, **Spy**, **API**, **VAAs (Verifiable Action Approvals)**, and **Relayers**.

Together, these on-chain and off-chain components create a robust and secure framework for cross-chain communication.

## A, On-Chain Components

The on-chain components of Wormhole are integral to its ability to facilitate cross-chain communication. These components operate directly on the blockchain and are responsible for initiating, recording, and managing the messages that enable interoperability between different blockchain networks.

By understanding the roles and interactions of these on-chain components, developers can effectively leverage Wormhole to build decentralized applications (dApps) that seamlessly interact across multiple blockchains. Below, we provide an overview of the key on-chain components and their functions within the Wormhole architecture.

1. **Emitter** - A contract that calls the publish message method on the Core Contract. The core contract will write an event to the Transaction Logs with details about the emitter and sequence number to identify the message. This may be your [xDapp](../glossary.md#xdapp) or an existing ecosystem protocol.

2. **Wormhole Core Contract**(./core-contracts.md) - Primary contract, this is the contract which the Guardians observe and which fundamentally allow for cross-chain communication.

3. **Transaction Logs** - Blockchain specific logs that allow the Guardians to observe messages emitted by the core contract.

## B, Off-Chain Components

1.  **Guardian Network** - The Guardian Network is a group of validators operating in a peer-to-peer network, responsible for observing and validating messages from the Core Contract to produce VAAs. Each Guardian contributes to the VAA multisig, ensuring the integrity of the messages.

    This validators are exist in their own P2P network. Guardians observe and validate the messages emitted by the Core Contract on each supported chain to produce **VAAs** (signed messages).

2.  [**Guardian**](./guardian.md) - One of 19 validators in the Guardian Network that contributes to the VAA multisig.

3.  [**Spy**](./spy.md) - A daemon that subscribes to messages published within the Guardian Network. A Spy can observe and forward network traffic, which helps scale up VAA distribution.

4.  [**API**](../api-docs/README.md) - A REST server to retrieve details for a VAA or the guardian network.

    The API provides a REST server to retrieve details about VAAs and the Guardian Network. Relayers, which can be either standard or specialized, are off-chain processes that relay VAAs to the target chain, ensuring that cross-chain messages are delivered accurately and efficiently.

5.  **VAAs** - Verifiable Action Approvals (VAAs) are the signed attestations of observed messages from the Wormhole Core Contract. When a message is emitted by the Core Contract, it is observed by the Guardian Network.

    Each Guardian validates the message and collectively signs it to create a VAA. This signed VAA serves as proof that the message was observed and validated by the Guardians, ensuring its integrity and authenticity. VAAs are then used to relay the message to the target blockchain, enabling secure and reliable cross-chain communication.

6.  [**Relayer**](./relayer.md) - Any off-chain process that relays a VAA to the target chain. Relayers play a crucial role in the Wormhole architecture by ensuring that the validated messages (VAAs) are delivered to their intended blockchain destinations. There are two main types of relayers:

    - [**Standard Relayers**](./relayer.md#standard-relayers): These are part of a decentralized relayer network that delivers messages requested on-chain via the Wormhole Relay Contract. They are also referred to as Generic Relayers and are designed to handle a wide range of cross-chain messages.

    - [**Specialized Relayers**](./relayer.md#specialized-relayers): These relayers are tailored to handle VAAs for specific protocols or cross-chain applications. They can execute custom logic off-chain, which can reduce gas costs and increase cross-chain compatibility. Specialized relayers are typically developed and hosted by cross-chain application developers to meet the unique requirements of their applications.

Relayers ensure the smooth and efficient transfer of messages across different blockchain networks, making them a vital component of the Wormhole ecosystem.

### Conclusion

The architecture of Wormhole is designed to provide a robust and secure framework for cross-chain communication, leveraging both **on-chain** and **off-chain** components to ensure seamless interoperability between different blockchain networks. By understanding the roles and interactions of these components, developers can harness the full potential of Wormhole to build innovative and efficient decentralized applications (dApps).

Whether it's facilitating cross-chain exchanges, enabling decentralized governance, or supporting complex DeFi services, Wormhole's architecture offers the flexibility and scalability needed to drive the next generation of blockchain solutions.

As the ecosystem continues to evolve, Wormhole remains a critical infrastructure component, empowering developers to create interconnected and user-friendly blockchain applications.
