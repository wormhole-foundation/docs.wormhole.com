## Access Control

#### Owner and Pauser Roles

Pausing the NTT manager contract will disallow initiating new token transfer. While the contract is paused, in-flight transfers can still be redeemed (subject to rate limits, if configured).

NTT can be paused on a particular chain by updating the `paused` parameter on the deployment to `true` via the NTT CLI, and then performing `ntt push` to sync the local configuration with the on-chain deployment.

*   **Owner:** Full control over NTT contracts, can perform administrative functions. Has the ability to un-pause contracts if they have been paused.
*   **Pauser:** Can pause NTT contracts to halt token transfers temporarily. This is crucial for responding quickly to potential risks without a prolonged governance process. Cannot un-pause contracts.

Note that while the `Pauser` has the ability to pause contracts, the ability to un-pause contracts is callable only by the `Owner`.

The contract can be paused via the contract `Owner` or the `Pauser` address. Since the contract `Owner` address is typically a multi-sig or a more complex DAO governance contract, and pausing the contract only affects the liveness of token transfers, protocols can choose set the `Pauser` address to be a different address. This can help ensure that protocols are able to respond very quickly to potential risks without going through a drawn-out process.

Consider separating `Owner` and `Pauser` roles for your multichain deployment. Owner and Pauser roles are defined directly on the `NttManager`.
