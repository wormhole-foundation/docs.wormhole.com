### Subpage 2: For Relayers- Establish an IBC Connection

### I. Generate Gateway Address

The IBC relayer should generate an address via the `wormchaind` CLI - [here](https://github.com/wormhole-foundation/wormhole/tree/main/wormchain).

```jsx
wormchaind keys add <key-name> --keyring-backend <your-keyring-backend>
```

### II. Allowlist your Gateway Address

Fill out the [IBC relayer allowlist request template](https://www.notion.so/wormhole/explore-wormhole/gateway/onboard#ibc-relayer-allowlist-request-template). Post the request in the `#guardian-cosmos` channel.

### III. Establish the IBC Connection

Please ensure that the `trusting_period` and `trust_threshold` parameters are set to the safest values. E.g. `trust_threshold` should be 2/3 and `trusting_period` should be 2/3 the unbonding period of your chain.

See an example IBC relayer config for Wormhole Gateway [below](https://www.notion.so/wormhole/explore-wormhole/gateway/onboard#wormhole-gateway-ibc-relayer-config).

Please see docs [here](https://github.com/wormhole-foundation/wormhole/blob/main/wormchain/syncing.md) on how to set up your own Wormhole Gateway node to connect your IBC relayer to. Or, you can see available public nodes on the [cosmos chain registry](https://github.com/cosmos/chain-registry/blob/master/gateway/chain.json).
Share the IBC connection details in the `#guardian-cosmos` channel along with a request to the Wormhole Contributors to prepare governance for the IBC connection.