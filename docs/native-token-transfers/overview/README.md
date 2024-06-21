## Overview

Wormhole’s Native Token Transfers (NTT) is an open-source, flexible, and composable framework for transferring tokens across blockchains without liquidity pools. Integrators have full control over how their tokens that use NTT behave on each chain, including the token standard, metadata, ownership, upgradeability, and custom features.

For existing token deployments, the framework can be used in locking mode which preserves the original token supply on a single chain. Otherwise, the framework can be used in burning mode to deploy natively multichain tokens with the supply distributed among multiple chains.

### Key Features

*   **Unified User Experience:** Tokens retain their properties on each chain, ensuring a consistent user experience.
*   **No Liquidity Pools:** Transfer tokens without the need for liquidity pools, avoiding fees, slippage, and MEV risk.
*   **Integrator Flexibility:** Retained ownership, upgrade authority, and complete customizability over token contracts.
*   **Rate Limiting:** Configurable limits for secure transfers, preventing abuse and managing network congestion.
*  **Access Control:** To prevent unauthorized calls to administrative functions, protocols can choose to assign certain functions (such as the pauser role) to a separate address from the owner.
*   **Global Accountant:** Ensures accounting integrity across chains by checking that the number of tokens burned and transferred out of a chain never exceeds the number of tokens minted.
*   **Composability:** Open-source and extensible for widespread adoption and integration with other protocols.
*   **Custom Attestation:** Optionally add external verifiers and configure message verification thresholds based on security requirements.

### NTT vs Token Bridge

*   **NTT:** Ideal for projects needing a native, flexible solution offering significant customization and control, with the entire framework directly integrated into integrator governance processes.
*   **Token Bridge:** Suited for straightforward multichain deployments, the Token Bridge allows multichain transfers through a pure lock and mint mechanism. Integrators do not need to deploy transfer contracts, instead attesting token details onto a target chain. When transferring, tokens are locked in the Token Bridge contract controlled by the Wormhole guardian network on the source chain and minted on the destination chain. The Token Bridge also supports sending tokens with some additional data in the form of arbitrary byte payload attached to the token transfer.

{% hint style="info" %} 
[Learn more](https://docs.wormhole.com/wormhole/explore-wormhole/vaa) about VAAs, the core messaging primitive in the Wormhole network 
{% endhint %}
