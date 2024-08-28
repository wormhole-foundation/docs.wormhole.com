## System Components

{% hint style="info" %} 
**[See Wormhole Chain IDs](https://docs.wormhole.com/wormhole/reference/constants)**
{% endhint %}

{% hint style="info" %} 
Wormhole formatted addresses are 32-byte hex representations of addresses on any chain -- whether EVM, Solana, Sui/Aptos, Cosmos, or other ecosystems.
{% endhint %}

There are two basic components to NTT.

#### Managers
Manage the token and the transceivers, handle rate limiting, and message attestation. Each `NttManager` corresponds to a single token but can control multiple transceivers. Key functions include:
- `transfer`: Initiates a token transfer process, involving token locking or burning on the source chain.
```solidity
    function transfer(
        uint256 amount, // amount (in atomic units)
        uint16 recipientChain, // chain ID (Wormhole formatted) 
        bytes32 recipient // recipient address (Wormhole formatted)
    ) external payable nonReentrant whenNotPaused returns (uint64)
```
- `quoteDeliveryPrice`: Quotes the fee for delivering a message to a specific target chain by querying and aggregating quotes from the Transceiver contracts.
```solidity
    function quoteDeliveryPrice(
        uint16 recipientChain, // chain ID (Wormhole formatted) 
        bytes memory transceiverInstructions // extra instructions for Transceivers (Transceiver-dependent on whether extra instructions are used/accepted)
    ) public view returns (uint256[] memory, uint256)
```
- `setPeer`: Establishes trust between different instances of NTT manager contracts across chains by cross-registering them as peers, ensuring secure communication.
```solidity
    function setPeer(
        uint16 peerChainId, // chain ID (Wormhole formatted) 
        bytes32 peerContract, // peer NTT Manager address (Wormhole formatted)
        uint8 decimals, // token decimals on the peer chain
        uint256 inboundLimit // inbound rate limit (in atomic units)
    ) public onlyOwner
```

#### Transceivers
Responsible for sending NTT transfers forwarded through the manager on the source chain and delivered to a corresponding peer manager on the recipient chain. These contracts are responsible for encoding, sending, receiving, and decoding messages across chains, ensuring the seamless transfer of tokens. Transceivers can be defined independently of Wormhole core and can be modified to support any verification backend. Key functions:
- `sendMessage`: This external function is used to send token transfer messages to a specified recipient chain. It encodes the token transfer details into a message format recognized by the system.
```solidity
    function sendMessage(
        uint16 recipientChain,   // chain ID (Wormhole formatted)
        TransceiverStructs.TransceiverInstruction memory instruction, // extra instruction for the Transceiver (optional, dependent on whether extra instructions are used/accepted for this Transceiver)
        bytes memory nttManagerMessage, // serialized NTT Manager message, provided by the NTT Manager
        bytes32 recipientNttManagerAddress, // NTT Manager address on the recipient chain (Wormhole formatted)
        bytes32 refundAddress // address to receive refunds on the destination chain in case of excess quotes (Wormhole formatted)
    ) external payable nonReentrant onlyNttManager
```
- `quoteDeliveryPrice`: Provides an estimation of the cost associated with delivering a message to a target chain, and gauges transaction fees.
```solidity
    function quoteDeliveryPrice(
        uint16 targetChain,  // chain ID (Wormhole formatted) 
        TransceiverStructs.TransceiverInstruction memory instruction // extra instruction for the Transceiver (optional, dependent on whether extra instructions are used/accepted for this Transceiver)
    ) external view returns (uint256) 
```

![NTT Architecture Diagram](https://i.imgur.com/jZIFiBG.png)

{% hint style="info" %} 
**[Learn more](https://docs.wormhole.com/wormhole/native-token-transfers/architecture)** about the architecture of Native Token Transfers message lifecycles.
{% endhint %}
