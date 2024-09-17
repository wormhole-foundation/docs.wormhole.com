# Configuration

When deploying MultiGov, several key parameters need to be set. Here are the most important configuration points:

## `HubGovernor` Key Parameters

1. `initialVotingDelay`: The delay before voting on a proposal begins.
   - Type: `uint256`
   - Measured in: Seconds
   - Example: `86400` (1 day)

2. `initialProposalThreshold`: The number of tokens needed to create a proposal.
   - Type: `uint256`
   - Measured in: Tokens

3. `initialQuorum`: The number minimum number of votes needed for a proposal to be successful.
   - Type: `uint256`
   - Measured in: Votes

4. `initialVoteWeightWindow`: A window where the minimum checkpointed voting weight is taken for a given address. The window ends at the vote start for a proposal and begins at the vote start minus the vote weight window.
   - Type: `uint256`
   - Measured in: Seconds
   - Example: `86400` (1 day)
   - Note: This helps mitigate cross-chain double voting

## `HubProposalExtender` Key Parameters

1. `extensionDuration`: Amount of time for which target proposals will be extended.
   - Type: `uint256`
   - Measured in: Seconds
   - Example: `10800` (3 hours)

2. `minimumExtensionDuration`: Lower limit for extension duration.
   - Type: `uint256`
   - Measured in: Seconds
   - Example: `3600` (1 hour)

### `SpokeVoteAggregator` Key Parameters

1. `initialVoteWindow`: The moving window for vote weight checkpoints. These checkpoints are taken whenever an address that is delegting sends or receives tokens.
   - Type: `uint256`
   - Measured in: Seconds
   - Example: `86400` (1 day)
   - Note: This is crucial for mitigating cross-chain double voting

## `HubEvmSpokeVoteAggregator` Key Parameters
1. `maxQueryTimestampOffset`: The max timestamp difference between the requested target time in the query and the current block time on the hub.
   - Type: `uint256`
   - Measure in: Seconds
   - Example: `1800` (30 minutes)

## Updateable Governance Parameters

The following key parameters can be updated through governance proposals:

1. `votingDelay`: Delay before voting starts (in seconds).
2. `votingPeriod`: Duration of the voting period (in seconds).
3. `proposalThreshold`: Threshold for creating proposals (in tokens).
4. `quorum`: Number of votes required for quorum.
5. `extensionDuration`: The amount of time for which target proposals will be extended (in seconds).
6. `voteWeightWindow`: Window for vote weight checkpoints (in seconds).
7. `maxQueryTimestampOffset`: Max timestamp difference allowed between a query's target time and the hub's block time.

These parameters can be queried using their respective getter functions on the applicable contract.

To update these parameters, a governance proposal must be created, voted on, and executed through the standard MultiGov process.