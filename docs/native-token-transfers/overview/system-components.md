## System Components

There are two basic components to NTT.

### Managers
Manage the token and the transceivers, handle rate-limiting, and message attestation. Each `NttManager` corresponds to a single token but can control multiple transceivers. Key functions:
- `transfer`: Initiates a token transfer process, involving token locking or burning on the source chain.
- `quoteDeliveryPrice`: Quotes the fee for delivering a message to a specific target chain by querying and aggregating quotes from the Transceiver contracts.
- `registerPeer`: Establishes trust between different instances of NTT manager contracts across chains, ensuring secure communication.

### Transceivers
Responsible for sending NTT transfers forwarded through the manager on the source chain and delivered to a corresponding peer manager on the recipient chain. These contracts are responsible for encoding, sending, receiving, and decoding messages across chains, ensuring the seamless transfer of tokens. Transceivers can be defined independently of Wormhole core and can be modified to support any verification backend. Key functions:
- `sendMessage`: This external function is used to send messages to a specified recipient chain. It encodes the token transfer details into a message format recognized by the system.
- `quoteDeliveryPrice`: Provides an estimation of the cost associated with delivering a message to a target chain, and gauging transaction fees.

![NTT Architecture Diagram](https://images.ctfassets.net/n8aw1cra6v98/4jizzBOHn0tqPJUcz3pp1o/35bc72fe98cfa074cfc8494b44dfcf3b/Graph__1_.webp)

{% hint style="info" %} [**Learn more**](https://docs.wormhole.com/wormhole/explore-wormhole/security) about the core trust assumptions of the Wormhole network and its security model {% endhint %} 
