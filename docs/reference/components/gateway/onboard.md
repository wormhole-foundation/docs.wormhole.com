# Wormhole Gateway Onboarding Instructions

{% hint style="info" %}
This page is for any Cosmos chain developer that wants to enable bridging from Gateway, a Wormhole Cosmos chain that leverages the Wormhole Guardian network for easy bridging from Ethereum to Cosmos. 

See here for more details on Gateway: [The Gateway to Cosmos](https://wormhole.com/gateway/)
{% endhint %}

# Step 1. Propose Adding Your Chain to the Wormhole Guardians

1. Open a new GitHub governance discussion under Wormhole Gateway by filling out the Cosmos Chain Governance Proposal Template - [here](https://github.com/wormhole-foundation/wormhole/discussions/new?category=gateway).
2. Allow 96 hours for discussion and governance vote.

# Step 2. Join the Wormhole Discord

1. Join the wormhole discord ([link](https://discord.gg/wormholecrypto)).
2. Ping the moderator, Susu (`susu.wormhole`), to get added to the `#guardian-cosmos` channel.

# Step 3. Establish an IBC Connection

1. Allowlist your IBC relayer(s) on Wormhole Gateway

    1. The IBC relayer should generate an address via the `wormchaind` CLI - [here](https://github.com/wormhole-foundation/wormhole/tree/main/wormchain).
    2. Fill out the [IBC relayer allowlist request template](#ibc-relayer-allowlist-request-template).
    3. Post the request in the `#guardian-cosmos` channel.

2. Establish the IBC connection.

    1. Please ensure that the `trusting_period` and `trust_threshold` parameters are set to the safest values. E.g. `trust_threshold` should be 2/3 and `trusting_period` should be 2/3 the unbonding period of your chain.

3. Share the IBC connection details in the `#guardian-cosmos` channel along with a request to the Wormhole Contributors to prepare governance for the IBC connection.

    1. Allow 48 hours for governance vote on accepting this IBC channel.

# Step 4. [Optional] UI Integration with Wormhole Connect

[Wormhole Connect](https://wormhole.com/connect/) is a seamless way to embed bridging directly to your app with 3 lines of code. [Integrating Connect](https://wormhole-connect-builder.netlify.app/) is fast, customizable, and brings all the functionality and utility of Wormhole right into your own application. 


Please refer to these reference PRs to add your Cosmos chain into Wormhole Connect. Your PRs will need to be reviewed and merged by Wormhole Core Contributors.

1. Add your Cosmos chain ID to the Wormhole SDK: [[sdk/js] Add Kujira chain id by M-Picco · Pull Request #3381 · wormhole-foundation/wormhole (github.com)](https://github.com/wormhole-foundation/wormhole/pull/3381/files)
2. Add your Cosmos chain to Wormhole Connect: [Add kujira chain by M-Picco · Pull Request #1009 · wormhole-foundation/wormhole-connect (github.com)](https://github.com/wormhole-foundation/wormhole-connect/pull/1009/files)

# Step 5. Add bridged assets to the Cosmos Chain Registry and other relevant wallet and frontend registries

1. Permissionlessly attest the assets you would like to bridge into your chain (if not already attested) to Wormhole Gateway.
2. Raise relevant PRs to ensure that explorers, wallets, and other UIs recognize the Wormhole assets when they are bridged to your chain.
    1. Example PR adding Wormhole assets to Osmosis Mintscan ([example](https://github.com/cosmostation/chainlist/pull/865)).

{% hint style="success" %}
🎉 Congratulations! You’ve successfully connected your Cosmos chain to Gateway. If you have any questions or concerns, please reach out to Susu on the Wormhole Discord.
{% endhint %}


# IBC Relayer Allowlist Request Template

```
Hey @Guardians! Thank you for passing governance to support **[Cosmos Chain]** via Wormhole Gateway. We are very excited to integrate with Wormhole!

We will be using **[Relayer Provider]** as our IBC relayer to support the connection to Wormhole Gateway. Their address is **[Wormhole Gateway address].** 

Could one of the Guardians please allowlist this address so that it can submit transactions to Wormhole Gateway?

We understand that if this address misbehaves, the sponsoring Guardian can remove it from the allowlist at any time, which would effectively shut down IBC bridging to/from our chain and Gateway.

Thank you!
```
