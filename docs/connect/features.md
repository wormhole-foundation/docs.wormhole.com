WIP

## Functionality in Connect

1. **Gasless Txns:** Users can bridge without paying gas on the destination chain. 
    1. ETH on Ethereum → whETH on Solana, only pays gas in ETH on Ethereum (covers both send and redeem)

2. **Gas Dropoff:** User can bridge while only paying gas on the source chain and swap some of the transferred asset into the destination gas token. 
    1. ETH on Ethereum → whETH on Avalanche + AVAX on Avalanche, only pays gas in ETH on Ethereum (covers both send and redeem)


## Bridges in Connect

Connect offers multiple bridging routes:

- Token bridge - wrapped asset bridging
- USDC Bridge - USDC gaslessly and quickly bridged between any CCTP supported chains
- Portal - WH wrapped asset bridging
    - Users can bridge any token between WH supported chains via the TokenBridge contracts that power Portal bridge today
- **NEW** CCTP Based Liquidity Bridge - New price-efficient, fast transfer solution built atop CCTP x WH Messaging
- **NEW** Uni V3 Based Liquidity Bridge - New solution built atop seeded liquidity for WH wrapped assets against native assets in Uni V3 pools

## Feature Support Matrix

| **Network** | **Native Asset Bridge** | **Portal Wrapped Asset Bridge** | **0 Slippage CCTP USDC Bridge** | **Gas Dropoff** | **Gasless Transactions**|
| --- | --- | --- | --- | --- | --- |
| Ethereum | 11/30 | ✅​ | ✅​ | ✅​ | ✅​ |
| Arbitrum | 11/30 | ✅​ | ✅​ | ✅ | ✅ (USDC Bridge) |
| Optimism | 11/30 | ✅​ | ✅​ | ✅ | ✅ (USDC Bridge)|
| Avalanche | 1/30 | ✅​ | ✅​ | ✅​ | ✅​|
| Base | 11/30 | ✅​ | ✅​ | ✅​ | ✅​|
| Solana | 1/30 | ✅​ | 12/30​ | ✅​ | ✅​|
| BSC | 1/30 | ✅​ | N | ✅​ | ✅​|
| Polygon | 1/30 | ✅​ | N | ✅​ | ✅​|
| Fantom | TBD | ✅​ | N | ✅​ | ✅​ | 
| Celo | TBD | ✅​ | N | ✅​ | ✅​ |
| Moonbeam | TBD | ✅​ | N | ✅​ | ✅​ |
| Sui | TBD | ✅​ | N | ✅​ | ✅​|
| Aptos | TBD | ✅​ | N | N | N|
| Sei | TBD | ✅​ | N | N | N|
| Osmosis | TBD | ✅​ | N | N | Y (only destination)|
| Evmos | TBD | ✅​ | N | N | Y (only destination)|
| Kujira | TBD | ✅​ | N | N | Y (only destination)|
| CosmosHub | TBD | ✅​ | N | N | Y (only destination)|
