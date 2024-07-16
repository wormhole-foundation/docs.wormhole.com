## Rate Limiting

#### Rate Limiting

The NTT framework provides configurable per-chain rate limits for sending and receiving token transfers. Integrators can manage limits via their own governance processes to quickly adapt to on-chain activity.

If a transfer is rate limited on the source chain and queueing is enabled via `shouldQueue = true`, transfers are placed into an outbound queue and can be released after the expiry of the rate limit duration.

You can configure the following limits on every chain that NTT is deployed to directly on the Manager:

- **Sending limit:** A single outbound limit for sending tokens from the chain.
- **Per-chain receiving limits:** For example, allowing 100 tokens to be received from Ethereum, but only 50 tokens to be received from Arbitrum.

{% hint style="info" %}
Rate limits are replenished every second over a fixed duration. While the default duration is 24 hours, the value is configurable at contract creation. Transfers that are rate limited on the destination chain are added to an inbound queue with a similar release delay.
{% endhint %}

#### Queuing Mechanism

When a transfer exceeds the rate limit it is queued and it can be released after the set rate limit duration has expired. The sending and receiving queuing behavior is as follows:

*   **Sending:** If an outbound transfer will violate rate limits, users can either revert and try again later or queue their transfer. Users will need to return after the queue duration has expired to complete sending their transfer.
*   **Receiving:** If an inbound transfer violates rate limits, it will be queued. Users or relayers will need to return after the queue duration has expired to complete receiving their transfer on the destination chain.
    
#### Cancel Flows
    
If users bridge frequently between a given source chain and destination chain, the capacity could be exhausted quickly. This can leave other users rate limited, potentially delaying their transfers. To mitigate this issue, the outbound transfer cancels the inbound rate limit on the source chain, refilling the inbound rate limit by an amount equal to that of the outbound transfer amount and vice-versa with the inbound transfer cancelling the outbound rate limit on the destination chain and refilling the outbound rate limit with an amount.
