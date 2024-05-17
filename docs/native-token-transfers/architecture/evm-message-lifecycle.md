## EVM Message Lifecycle

#### 1. Transfer
    
A client calls the `transfer` function to initiate an NTT transfer. The client must specify the amount, recipient chain, and recipient address. The `transfer` function also supports a flag to queue rate limited transfers or revert. Clients can also include additional instructions to forward along to the transceiver on the source chain. The `NttManager` emits the `TransferSent` event upon forwarding the transfer to the transceiver.

#### 2. Rate Limit
    
Transfers can be rate limited on both source and destination chains. If rate limited and the `shouldQueue` flag is enabled, the transfer is added to an outbound queue.
    
The transfer can be released after the configured `rateLimitDuration` has expired via the `completeOutboundQueuedTransfer` method. The `OutboundTransferQueued` and `OutboundTransferRateLimited` events are emitted.

If the client attempts to release the transfer from the queue before the expiry of the `rateLimitDuration` the contract reverts with an `OutboundQueuedTransferStillQueued` error.

Similarly, transfers that are rate limited on the destination chain are added to an inbound queue and are designed to behave in the corresponding way to outbound rate limited transfers.

To disable the rate limiter, set `rateLimitDuration` to 0 and enable the `skipRateLimiting` field in the `NttManager` constructor. Configuring this incorrectly will throw an error. If the rate limiter is disabled, the inbound and outbound rate limits can be set to 0.


#### 3. Send
    
The `NttManager` forwards the message to the transceiver, which transmits the message using the `sendMessage` method. The `SendTransceiverMessage` event is emitted.
    
The method signature is enforced by the transceiver but it is free to determine its own implementation for transmitting messages. For example, message routed through the `WormholeTransceiver` can be sent via standard relaying, a specialized or custom relayer, or manually published via the core bridge. 

#### 4. Receive
    
An off-chain process (such as a relayer) forwards the message to the corresponding transceiver on the destination chain. The transceiver is interacted with via an entrypoint for receiving messages. For example, a relayer will call the `receiveWormholeMessage` method if utilizing the `WormholeTransceiver` to execute the message. The `ReceiveRelayedMessage` event is emitted during this process. The transceiver processes and forwards the message to the `NttManager`.
    
The transceiver interface does not declare a signature for this method because receiving messages is specific to each transceiver.
    
The `NttManager` contract allows an *M* of *N* threshold for transceiver attestations to determine whether a message can be safely executed. For example, if the threshold requirement is 1, the message will be executed after a single transceiver delivers a valid attestation. If the threshold requirement is 2, the message will only be executed after two transceivers deliver valid attestations. When a message is attested to by a transceiver, the contract emits the `MessageAttestedTo` event.

NTT implements replay protection, so if a given transceiver attempts to deliver a message attestation twice, the contract reverts with `TransceiverAlreadyAttestedToMessage` error. NTT also implements replay protection against re-executing messages, which also acts as reentrancy protection.

If a message had already been executed, the contract ends execution early and emits the `MessageAlreadyExecuted` event instead of reverting via an error. This mitigates the possibility of race conditions from transceivers attempting to deliver the same message when the threshold is less than the total number of available of transceivers (threshold `totalTransceivers`) and notifies the client so they don't attempt redundant message delivery.

#### 5. Mint or Unlock
    
Once a transfer has been verified, `NttManager` mints (in burning mode) or unlocks (in locking mode) the tokens to the recipient the destination chain, completing the transfer and emitting the `TransferRedeemed` event.
    
Note that the source token decimals are bounded betweeen 0 and `TRIMMED_DECIMALS` as enforced in the wire format. The transfer amount is untrimmed (scaled-up) if the destination chain token decimals exceed `TRIMMED_DECIMALS`.
