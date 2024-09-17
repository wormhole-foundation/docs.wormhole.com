# Guides

## Example: Cross-Chain Treasury Management Proposal

This guide walks through creating and executing a cross-chain governance proposal to mint W token to the Optimism and Arbitrum treasuries.

### 1. Create a Proposal (Hub Chain - Ethereum Mainnet)

```solidity
HubGovernor governor = HubGovernor(GOVERNOR_ADDRESS);


// Prepare proposal details
address[] memory targets = new address[](2);
targets[0] = HUB_MESSAGE_DISPATCHER_ADDRESS;
targets[1] = HUB_MESSAGE_DISPATCHER_ADDRESS;

uint256[] memory values = new uint256[](2);
values[0] = 0;
values[1] = 0;

bytes[] memory calldatas = new bytes[](2);
// Prepare message for Optimism to mint 10 W tokens
// bytes created using abi.encodeWithSignature("mint(address,uint256)", 0xB0fFa8000886e57F86dd5264b9582b2Ad87b2b91, 10e18)
calldatas[0] = abi.encodeWithSignature(
    "dispatch(bytes)", 
    abi.encode(
        OPTIMISM_WORMHOLE_CHAIN_ID,
        [OPTIMISM_WORMHOLE_TREASURY_ADDRESS],
        [uint256(10 ether)],
        [hex"0x40c10f19000000000000000000000000b0ffa8000886e57f86dd5264b9582b2ad87b2b910000000000000000000000000000000000000000000000008ac7230489e8000000000000000000000000000000000000000000000000000000000000"] 

    )
);
// Prepare message for Arbitrum to receive 15 ETH
calldatas[1] = abi.encodeWithSignature(
    "dispatch(bytes)", 
    abi.encode(
        ARBITRUM_WORMHOLE_CHAIN_ID,
        [ARBITRUM_WORMHOLE_TREASURY_ADDRESS],
        [uint256(15 ether)],
        [hex"0x40c10f19000000000000000000000000b0ffa8000886e57f86dd5264b9582b2ad87b2b910000000000000000000000000000000000000000000000008ac7230489e8000000000000000000000000000000000000000000000000000000000000"] 
    )
);

string memory description = "Mint 10 W to Optimism treasury and 10 W to Arbitrum treasury via Wormhole";

// Create the proposal
uint256 proposalId = governor.propose(
    targets, values, calldatas, description
)
```

### 2. Vote on the Proposal via Spoke

```solidity
// Connect to the SpokeVoteAggregator contract of the desired chain
SpokeVoteAggregator voteAggregator = SpokeVoteAggregator(VOTE_AGGREGATOR_ADDRESS);

// Cast a vote
uint8 support = 1; // 1 for 'For'
uint256 weight = voteAggregator.castVote(proposalId, support);
```

### 3. Vote Aggregation (Background Process)

```solidity
// Aggregate votes sent to Hub (this would typically be done by a "crank turner" off-chain)
hubVotePool.crossChainVote(queryResponseRaw, signatures);
```

### 4. Execute Proposal and Dispatch Cross-Chain Messages

```solidity
HubGovernor governor = HubGovernor(GOVERNOR_ADDRESS);

// Standard timelock execution
governor.execute(targets, values, calldatas, descriptionHash);
```