# Development Setup

For developers looking to set up a local Multi-Gov environment:

1. Install prerequisites:
   - [Foundry](https://book.getfoundry.sh/getting-started/installation)
   - [Git](https://git-scm.com/downloads)

2. Clone the repository:
   ```bash
   git clone [Multi-Gov Repository URL]
   cd evm # for evm testing/deploying
   ```

3. Install dependencies:
   ```bash
   forge install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your specific configuration.

5. Compile contracts:
   ```bash
   forge build
   ```

6. Deploy contracts (example for Sepolia testnet):
   ```bash
   forge script script/DeployHubContractsSepolia.s.sol --rpc-url $SEPOLIA_RPC_URL --broadcast
   ```

   For spoke chains (e.g., Optimism Sepolia):
   ```bash
   forge script script/DeploySpokeContractsOptimismSepolia.s.sol --rpc-url $OPTIMISM_SEPOLIA_RPC_URL --broadcast
   ```