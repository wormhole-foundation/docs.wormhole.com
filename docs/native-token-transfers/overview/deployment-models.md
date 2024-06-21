## Deployment Models

### Hub and Spoke

The hub and spoke model involves locking tokens on a central hub chain and minting them on destination spoke chains. This model maintains the total supply on the hub chain and is backward-compatible with existing tokens. Ideal for existing token deployments that do not want to alter their existing contracts.


*   **Hub Chain:** Tokens are locked when initiating a transfer.
*    **Spoke Chains:** Equivalent tokens are minted on the destination chain.

When transferring back to the original hub chain, tokens are burned on the source spoke chain and unlocked on the hub chain. When transferring between spoke chains, tokens are burned on the source spoke chain and minted on the destination spoke chain. Best suited for new token deployments or projects willing to upgrade existing contracts.

### Burn and Mint

The burn and mint model involves burning tokens on the source chain and minting them on the destination chain. This results in a simplified multichain transfer process, distributes the total supply across multiple chains, and results in a natively multichain token.


*   **Source Chain:** Tokens are burned when initiating a transfer.
*   **Destination Chain:** Equivalent tokens are minted on the destination chain.