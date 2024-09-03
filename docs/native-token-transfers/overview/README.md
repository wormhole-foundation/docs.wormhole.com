## Overview

Wormhole’s Native Token Transfers (NTT) is an open source, flexible, and composable framework for transferring tokens across blockchains. Integrators have full control over how their tokens that use NTT behave on each chain, including the token standard, metadata, ownership, upgradeability, and custom features.

For existing token deployments, the framework can be used in locking mode which preserves the original token supply on a single chain. Otherwise, the framework can be used in burning mode to deploy natively multichain tokens with the supply distributed among multiple chains.

{% hint style="info" %} 
**[Deploy now](https://docs.wormhole.com/wormhole/native-token-transfers/deployment)** using the NTT CLI!
{% endhint %}

#### Key Features

*   *Unified User Experience:* Tokens retain their properties on each chain, remaining completely fungible and ensuring a consistent user experience.
*   *No Liquidity Pools:* Transfer tokens without the need for liquidity pools, avoiding fees, slippage, and MEV risk.
*   *Integrator Flexibility:* Retained ownership, upgrade authority, and complete customizability over token contracts.
*   *Advanced Rate Limiting:* Inbound and outbound rate limits are configurable per chain and over arbitrary time periods, preventing abuse while managing network congestion and allowing for controlled deployments to new chains.
*   *Global Accountant:* Ensures accounting integrity across chains by checking that the number of tokens burned and transferred out of a chain never exceeds the number of tokens minted.
*  *Access Control:* To prevent unauthorized calls to administrative functions, protocols can choose to assign certain functions, such as the pauser role, to a separate address from the owner.
*   *Maximum Composability:* Open-source and extensible for widespread adoption and integration with other protocols.
*   *Custom Attestation:* Optionally add external verifiers and configure custom message attestation thresholds.


Integrators looking to deploy their token to connected chains can use the NTT framework or the Token Bridge. Both options carry a distinct integration path and feature set depending on your requirements:

#### Native Token Transfers

Highly customizable. For example, a DeFi governance token deployed on multiple chains that wants fungible multichain liquidity, and direct integration into governance processes.

- *Mechanism:* Can entirely utilize a burn and mint mechanism or can be paired for a hub and spoke model.
- *Security:* Fully configurable rate limiting, pausing, access control and threshold attestations. Integrated with Global Accountant.
- *Contract Ownership:* Retain ownership and upgrade authority of token contracts on each chain.
- *Token Contracts:* Native contracts owned by your protocol governance.
- *Integration:* Streamlined, customizable framework allows for more sophisticated and bespoke deployments.

#### Token Bridge

A secure, low lift integration. For example, a web3 game that wants  their token to be tradable across multiple chains.

- *Mechanism:* Solely utilizes a lock and mint model.
- *Security:* Preconfigured rate limiting and integrated Global Accountant.
- *Contract Ownership:* Token Bridge contracts are upgradeable via [Wormhole Governance](https://docs.wormhole.com/wormhole/explore-wormhole/security).
- *Token Contracts:* Wrapped asset contract owned by the Wormhole Token Bridge contract, upgradeable via a 13/19 Guardian governance process.
- *Integration:* Straightforward and permissionless method to deploy on multiple chains.

{% hint style="info" %} 
**[Learn more](https://docs.wormhole.com/wormhole/explore-wormhole/vaa)** about the core messaging primitives in the Wormhole network. 
{% endhint %}

## Next Steps

Ready to dive in? Follow the [deployment instructions](https://docs.wormhole.com/wormhole/native-token-transfers/deployment) to get started.

Need some examples?

- [NTT + Wormhole Connect Demo](https://github.com/wormhole-foundation/demo-ntt-connect)
- [NTT + Wormhole SDK Demo](https://github.com/wormhole-foundation/demo-ntt-ts-sdk) 

Otherwise, read on for a in-depth look at NTT's system components, deployment models, configuration settings, and lower level architecture.

- [System Components](https://docs.wormhole.com/wormhole/native-token-transfers/overview/system-components)
- [Deployment Models](https://docs.wormhole.com/wormhole/native-token-transfers/overview/deployment-models)
- [Configuration](https://docs.wormhole.com/wormhole/native-token-transfers/configuration)
- [Security](https://docs.wormhole.com/wormhole/native-token-transfers/security)
- [Architecture](https://docs.wormhole.com/wormhole/native-token-transfers/architecture)
