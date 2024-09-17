# FAQs

## General Questions

### What is MultiGov?

MultiGov is a cross-chain governance system that extends traditional DAO governance across multiple blockchain networks. It leverages Wormhole's interoperability infrastructure to enable seamless voting and proposal mechanisms across various chains.

### How does MultiGov differ from traditional DAO governance?

Unlike traditional DAO governance that typically operates on a single blockchain, MultiGov allows for coordinated decision-making and execution of proposals across multiple chains. This enables more inclusive participation from token holders on different networks and allows for more complex, cross-chain governance actions.

### What are the main components of MultiGov?

The main components of MultiGov include:

- Hub Chain: Central coordination point for governance activities
- Spoke Chains: Additional chains where token holders can participate in governance
- Wormhole Integration: Enables secure cross-chain message passing
- Governance Token: Allows holders to participate in governance across all integrated chains

## Technical Questions

### How does MultiGov ensure security in cross-chain communication?

MultiGov leverages Wormhole's robust cross-chain communication protocol. It implements several security measures:

- Message origin verification to prevent unauthorized governance actions
- Timely and consistent data checks to ensure vote aggregation is based on recent and synchronized chain states
- Authorized participant validation to maintain the integrity of the governance process
- Replay attack prevention by tracking executed messages

### Can MultiGov integrate with any blockchain?

MultiGov can potentially integrate with any blockchain supported by Wormhole. However, specific implementations may vary depending on the chain's compatibility with Ethereum Virtual Machine (EVM) and its smart contract capabilities. [Find all supported networks here](https://docs.wormhole.com/wormhole/reference/blockchain-environments). The current implementation of MultiGov supports an EVM Hub and both the EVM and SVM for spokes.

### How are votes aggregated across different chains?

Votes are collected on each spoke chain using each chain's `SpokeVoteAggregator`. These votes are then transmitted to the HubVotePool on the hub chain for aggregation and tabulation. The `HubEvmSpokeVoteDecoder` standardizes votes from different EVM chains to ensure consistent processing.

### Can governance upgrade from a single chain to MultiGov?

Yes! MultiGov can support progressively upgrading from a single-chain governance to MultiGov. Moving to MultiGov requires upgrading the token to NTT and adding Flexible Voting to the original Governor.

## Usage Questions

### How can I create a proposal in MultiGov?

Proposals are created on the hub chain using the `HubEvmSpokeAggregateProposer` contract or by calling `propose` on the `HubGovernor`. You need to prepare the proposal details including targets, values, and calldatas. The proposer's voting weight is aggregated across chains using Wormhole queries to determine eligibility.

### How do I vote on a proposal if I hold tokens on a spoke chain?

You can vote on proposals via the `SpokeVoteAggregator` contract on the respective spoke chain where you hold your tokens. The votes are then automatically forwarded to the hub chain for aggregation.

### How are approved proposals executed across multiple chains?

When a proposal is approved and the timelock period elapses, it's first executed on the hub chain. A proposal can include a cross chain message by including a call to `dispatch` on the `HubMessageDispatcher` which sends a messages to the relevant spoke chains. On each spoke chain, the `SpokeMessageExecutor` receives, verifies, and automatically executes the instructions using the `SpokeAirlock` as the `msg.sender`.

## Implementation Questions

### What do I need to set up MultiGov for my project?

Get started by filling out the below form:

https://www.tally.xyz/get-started

Tally will reach out to help get your DAO set up with MultiGov.

To set up testing MultiGov for your DAO, you'll need:

- Foundry and Git installed
- Test ETH on the testnets you plan to use (e.g., Sepolia for hub, Optimism Sepolia for spoke)
- Modify and deploy the hub and spoke contracts using the provided scripts
- Set up the necessary environment variables and configurations

### Can MultiGov be used with non-EVM chains?

The current implementation is designed for EVM-compatible chains. However, Solana (non-EVM) voting is currently in development and expected to go live after the EVM contracts.

### How can I customize voting parameters in MultiGov?

Voting parameters such as voting delay, voting period, proposal threshold, and quorum (and others) can be customized in the deployment scripts (`DeployHubContractsSepolia.s.sol` and `DeploySpokeContractsOptimismSepolia.s.sol` as examples for their respective chains). Make sure to adjust these parameters according to your DAO's specific needs before deployment.

Remember to thoroughly test your MultiGov implementation on testnets before deploying to mainnet, and have your contracts audited for additional security.

### How does MultiGov handle potential network issues or temporary chain unavailability?

MultiGov includes several mechanisms to handle network issues or temporary chain unavailability:

1. Asynchronous vote aggregation: Votes are aggregated periodically, allowing the system to continue functioning even if one chain is temporarily unavailable.
2. Proposal extension: The HubGovernorProposalExtender allows trusted actors to extend voting periods if needed, which can help mitigate issues caused by temporary network problems.
3. Wormhole retry mechanism: Wormhole's infrastructure includes retry mechanisms for failed message deliveries, helping ensure cross-chain messages eventually get through.
4. Decentralized relayer network: Wormhole's decentralized network of relayers helps maintain system availability even if some relayers are offline.

However, prolonged outages on the hub chain or critical spoke chains could potentially disrupt governance activities. It's important for projects to have contingency plans for such scenarios.