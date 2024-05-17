## NTT Configuration

### Rate Limits

The NTT framework provides configurable per-chain rate limits for sending and receiving token transfers. Integrators can manage limits via their own governance processes to quickly adapt to on-chain activity. If a transfer is rate limited on the source chain and queueing is enabled via `shouldQueue = true`, transfers are placed into an outbound queue and can be released after the expiry of the rate limit duration. Integrators can set the following limits on every chain they are deployed to:

*    **Sending limit:** A single outbound limit for sending tokens from the chain.
*    **Per-chain receiving limits:** For example, allowing 100 tokens to be received from Ethereum, but only 50 tokens to be received from Arbitrum.

Rate limits are replenished every second over a fixed duration. While the default duration is 24 hours, the value is configurable at contract creation. Transfers that are rate limited on the destination chain are added to an inbound queue with a similar release delay.

### Queuing Mechanism

When a transfer exceeds the rate limit it is queued and it can be released after the set rate limit duration has expired. The sending and receiving queuing behavior is as follows:

*   **Sending:** If an outbound transfer will violate rate limits, users can either revert and try again later or queue their transfer. Users will need to return after the queue duration has expired to complete sending their transfer.
*   **Receiving:** If an inbound transfer violates rate limits, it will be queued. Users or relayers will need to return after the queue duration has expired to complete receiving their transfer on the destination chain.
    
### Cancel Flows
    
If users bridge frequently between a given source chain and destination chain, the capacity could be exhausted quickly. This can leave other users rate limited, potentially delaying their transfers. To mitigate this issue, the outbound transfer cancels and refills the inbound rate limit on the source chain by an amount equal to that of the outbound transfer amount and vice-versa, with the inbound transfer cancelling and refilling the outbound rate limit on the destination chain with an amount equal to that of the inbound transfer.

### Owner and Pauser Roles

*   **Owner:** Full control over NTT contracts, can perform administrative functions.
*   **Pauser:** Can pause NTT contracts to halt token transfers temporarily. This is crucial for responding quickly to potential risks without a prolonged governance process.

### Accountant

The Global Accountant is a defense-in-depth security feature that performs accounting integrity checks on every token transfer. This feature ensures that there cannot be more tokens burned and transferred out of a chain than were ever minted.

Accounting is enforced transparently on [**Wormhole Gateway**](https://wormhole.com/gateway/) by the guardians, who will not attest to an NTT transfer if it violates integrity checks.
