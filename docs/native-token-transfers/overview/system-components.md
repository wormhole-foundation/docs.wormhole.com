## System Components

There are two basic components to NTT.

#### Managers
Manage the token and the transceivers, handle rate limiting, and message attestation. Each `NttManager` corresponds to a single token but can control multiple transceivers. Key functions include:
- `transfer`: Initiates a token transfer process, involving token locking or burning on the source chain.
- `quoteDeliveryPrice`: Quotes the fee for delivering a message to a specific target chain by querying and aggregating quotes from the Transceiver contracts.
- `setPeer`: Establishes trust between different instances of NTT manager contracts across chains by cross-registering them as peers, ensuring secure communication.

#### Transceivers
Responsible for sending NTT transfers forwarded through the manager on the source chain and delivered to a corresponding peer manager on the recipient chain. These contracts are responsible for encoding, sending, receiving, and decoding messages across chains, ensuring the seamless transfer of tokens. Transceivers can be defined independently of Wormhole core and can be modified to support any verification backend. Key functions:
- `sendMessage`: This external function is used to send messages to a specified recipient chain. It encodes the token transfer details into a message format recognized by the system.
- `quoteDeliveryPrice`: Provides an estimation of the cost associated with delivering a message to a target chain, and gauges transaction fees.

![NTT Architecture Diagram](https://i.imgur.com/jZIFiBG.png)

{% hint style="info" %} 
**[Learn more](https://docs.wormhole.com/wormhole/native-token-transfers/architecture)** about the architecture of Native Token Transfers message lifecycles.
{% endhint %}
