### Rate Limiting Overview

The NTT framework provides configurable per-chain rate limits for sending and receiving token transfers. Integrators can manage these limits via their own governance processes to quickly adapt to on-chain activity. The framework supports a queuing mechanism to handle transactions that exceed the set rate limits.

If a transfer is rate limited on the source chain and queueing is enabled via `shouldQueue = true`, transfers are placed into an outbound queue and can be released after the expiry of the rate limit duration.

### Quick Reference Guide

- **Sending Limit:** Defines the maximum amount of tokens that can be sent from a chain.
- **Receiving Limit:** Defines the maximum amount of tokens that can be received from a specific chain.
- **Queueing:** Transfers that exceed limits are queued and released after the rate limit duration expires.
- **Rate Limit Replenishment:** Limits are replenished every second over a configurable duration, typically set to 24 hours by default.

### Configuring Rate Limits

To configure rate limits on a chain where NTT is deployed, follow these steps:

1. **Set Sending Limits:**
   - The sending limit defines the total tokens allowed to be sent from the chain over the rate limit duration.
   - Example configuration for `<Chain>`:
     ``` "limits": {
       "outbound": "184467440737.095516150000000000",
       "inbound": {
         "Chain": "1000.000000000000000000"
       }
     },

     ```
   - This sets a sending limit of `184467440737.095516150000000000` tokens from `<Chain>`.

### Key Concepts

- **Rate Limits Replenishment:**
  - Rate limits are replenished every second over a fixed duration, typically set to 24 hours.
  - Example: If the rate limit duration is 24 hours and the total limit is 2400 tokens, the rate limit will replenish at a rate of `2400 / 86400` tokens per second.

### Best Practices for Setting Up Rate Limits

1. **Monitor On-Chain Activity:**
   - Regularly analyze the volume of transactions to adjust rate limits accordingly.

2. **Set Appropriate Queue Durations:**
   - Ensure the queue duration aligns with expected transaction volumes and network congestion levels.

3. **Implement Governance Controls:**
   - Use governance mechanisms to adjust limits dynamically based on network conditions and user needs.

#### Queuing Mechanism

When a transfer exceeds the rate limit it is queued and it can be released after the set rate limit duration has expired. The sending and receiving queuing behavior is as follows:

*   **Sending:** If an outbound transfer will violate rate limits, users can either revert and try again later or queue their transfer. Users will need to return after the queue duration has expired to complete sending their transfer.
*   **Receiving:** If an inbound transfer violates rate limits, it will be queued. Users or relayers will need to return after the queue duration has expired to complete receiving their transfer on the destination chain.
    
#### Cancel Flows
    
If users bridge frequently between a given source chain and destination chain, the capacity could be exhausted quickly. This can leave other users rate limited, potentially delaying their transfers. To mitigate this issue, the outbound transfer cancels the inbound rate limit on the source chain, refilling the inbound rate limit by an amount equal to that of the outbound transfer amount and vice-versa with the inbound transfer cancelling the outbound rate limit on the destination chain and refilling the outbound rate limit with an amount.


### Additional Resources

- **Walkthrough on NTT Implementation:** [YouTube Tutorial](https://www.youtube.com/watch?v=J77hhlq2A8E&t=4881s)
- **Connecting NTT to Frontend:** [GitHub Example](https://github.com/evgeniko/example-connect/blob/main/src/App.tsx#L5C23-L81C4)

### Feedback

To help us improve, please fill out our ([feedback-form](https://docs.google.com/forms/u/0/d/e/1FAIpQLSe1dFhFmar3J4KcxCpKbQJQly0Uv2nzRguTdxSsyLx6PWhv3A/formResponse)

By following these instructions and best practices, you can effectively manage rate limits within the NTT framework to ensure smooth and secure token transfers across different chains.

