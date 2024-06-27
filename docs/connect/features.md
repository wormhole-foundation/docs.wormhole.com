## Feature Support Matrix
*Scroll down for details about each column.*

| **Network** | **Token bridge** | **Token Bridge Relayer** | **Circle CCTP**| **ETH Bridge** | **Gas Dropoff**
| --- | --- | --- | --- | --- | --- |
| Solana    | ✔️ | ✔️​ | ✔️​ | ❌ | ✔️ |
| Ethereum  | ✔️ | ✔️​ | ✔️ | ✔️ | ✔️ |
| BSC       | ✔️ | ✔️​ | ❌ | ✔️ | ✔️ |
| Polygon   | ✔️ | ✔️​ | ✔️ | ✔️ ​| ✔️ |
| Avalanche | ✔️ | ✔️​ | ✔️ | ​✔️ | ✔️ |
| Fantom    | ✔️ | ✔️​ | ❌​ | ❌ ​| ✔️ |
| Klaytn    | ✔️ | ❌ | ❌​ | ❌ ​| ❌ |
| Celo      | ✔️ | ✔️ | ❌ ​| ❌ ​| ✔️ |
| Moonbeam  | ✔️ | ✔️ | ❌​ | ❌​ | ✔️ |
| Injective | ✔️ | ❌ | ❌​ | ❌​ | ❌ |
| Sui       | ✔️ | ✔️ | ❌​ | ❌​ | ✔️ |
| Aptos     | ​✔️ | ❌ | ❌​ | ❌ ​| ❌ |
| Arbitrum  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| Optimism  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| Base      | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| Sei       | ✔️ | ❌ | ❌ | ❌ | ❌ |
| Scroll    | ✔️ | ❌ | ❌ | ❌ | ❌ |
| Blast     | ✔️ | ❌ | ❌ | ❌ | ❌ |
| X Layer   | ✔️ | ❌ | ❌ | ❌ | ❌ |
| Osmosis   | ✔️ (Gateway) | ✔️ (IBC) | ❌ | ❌ | ❌ |
| CosmosHub | ✔️ (Gateway) | ✔️ (IBC) | ❌ | ❌ | ❌ |
| Evmos     | ✔️ (Gateway) | ✔️ (IBC) | ❌ | ❌ | ❌ |
| Kujira    | ✔️ (Gateway) | ✔️ (IBC) | ❌ | ❌ | ❌ |

## Feature Explanation

**Token Bridge**

This is the transfer method that Wormhole is best known for. It locks assets on the source chain, and mints wormhole-wrapped "IOU" tokens on the destination chain. To transfer the assets back, the wormhole-wrapped tokens are burned, which unlocks the tokens on their original chain.

This route appears if 
- both the origin and destination chains support Token Bridge 
- and if no non-Token Bridge routes are available for the selected token

**Token Bridge Relayer**

{% hint style="info" %}
On the [routes](../connect/routes.md) page, this is referred to the "automatic route" in the Token Bridge section.
{% endhint %}

Trustless relayers are able to execute the second transaction on behalf of the user, so that the user only needs to execute 1 transaction on the origin chain to have the tokens delivered to the destination automatically - for a small fee.

This route appears if
- both the origin and destination chains support Token Bridge
- both the origin and destination chains support Token Bridge Relayer
- if no non-Token Bridge routes are available for the selected token
- the selected token on the origin chain is supported by the relayer

**Circle CCTP**

[Circle](https://www.circle.com/en/), issuer of USDC, provides a native way by which native USDC can be transferred between [CCTP enabled](https://www.circle.com/en/cross-chain-transfer-protocol) chains.

This route appears if
- both the origin and destination chains support Circle CCTP
- the selected token is native Circle-issued USDC

**ETH Bridge**

[Powered by Uniswap liquidity pools](https://github.com/wormhole-foundation/example-uniswap-liquidity-layer), this route can transfer native ETH or wstETH between certain EVMs without going through the native bridges.

This route appears if
- both the origin and destination chains support the ETH Bridge
- the selected token is native ETH or wstETH, or canonical wETH

**Gas Dropoff**

Relayers are able to drop off some gas tokens on the destination chain by swapping some of the assets transferred to the native gas token. Useful if the user wishes to transfer assets to a chain where they don't already have gas. This way, they don't need to onboard into the ecosystem from a CEX.

This option appears if
- both the origin and destination chains support Gas Dropoff
- an automatic route is selected
- the selected token is accepted by the relayer to swap into the gas token