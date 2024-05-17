## Deployment Overview

### EVM
- Install necessary tools and dependencies, set up environment variables, and configure the deployment settings.
- Deploy token contracts on all target chains, ensuring they implement the `INttToken` interface.
- If deploying Hub and Spoke, deploy the `NttManager` in **LOCKING** mode on the hub chain, and in **BURNING** mode on all spoke chains.
- If deploying Burn and Mint, deploy the `NttManager` in **BURNING** mode on all chains.
- Deploy `WormholeTransceiver` contracts on each chain to facilitate cross-chain communication.
- Cross-register NTT manager and transceiver contracts on each chain with each other to secure your deployment.
- Configure security settings such as rate limits and owner/pauser roles.

### Solana 

- Install Solana and Anchor CLI tools, configure the environment, and set up necessary parameters. 
- Build and deploy the NTT program using Solana and Anchor CLI tools.
- If deploying in **BURNING** mode, set the mint authority of the token contracts to the NTT program on Solana.
- Initialize the NTT program on Solana to set up necessary configurations and parameters.
- Cross-register NTT program against deployments on every other chain to secure your deployment.
- Configure security settings such as rate limits and owner/pauser roles.
