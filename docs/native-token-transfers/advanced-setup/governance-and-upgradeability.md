## Governance and Upgradeability

Integrators should implement governance mechanisms to manage the addition and removal of transceivers and to upgrade contracts using proxy patterns as demonstrated in the `upgrade` functions in the `NttManager` contracts. These processes can also set thresholds and rules for attestation and message approval.
    
The registry component of the NTT system is crucial for maintaining a trusted list of transceivers and managing their status. Governance processes for the following actions can be submitted directly to the corresponding contract on-chain:

*    Registering or deregistering a transceiver address.
*    Setting contract addresses such as Wormhole core contracts, token contracts, or manager contracts.

 
This governance model ensures that the system remains secure while adaptable in response to new requirements in any environment it is deployed.
