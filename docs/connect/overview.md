
## Overview


Wormhole Connect is a React widget that lets developers offer easy, customized access to Wormhole powered bridges directly in a web application. Connect supports multiple forms of bridging including native asset bridge, Portal wrapped asset bridge, CCTP USDC bridge, and many others. Connect augments each bridge with gas dropoff (a transaction that leaves a user with extra native token so they can pay gas for subsequent on chain interactions) and gasless transactions (Connect relayers pay gas on behalf of users).

Check out the [Github repository](https://github.com/wormhole-foundation/wormhole-connect)!

![Wormhole Connect Screenshot](https://camo.githubusercontent.com/fda29f71df76f388a4e579624e538c876f89c396d2dd6d9486657aa8f9a3a19c/68747470733a2f2f692e696d6775722e636f6d2f735a4a4b7738652e706e67)

{% hint style="success" %}
The [Wormhole Typescript SDK](../../../reference/sdk-docs/README.md) allows you to implement the same functionality as the Connect widget, but in your own UI. For more information on using the SDK instead of Connect [check out the docs](../../../reference/sdk-docs/README.md).
{% endhint %}

## Demo

Wormhole Connect is deployed live in several production apps. Here are a few:

- [Portal Bridge](https://portalbridge.com/)
- [Jupiter](https://jup.ag/bridge/wormhole)
- [Pancake Swap](https://bridge.pancakeswap.finance/wormhole)

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

## Getting Started

It's very easy to add Wormhole Connect to an existing React app.

First, install the npm package.

[![npm version](https://img.shields.io/npm/v/@wormhole-foundation/wormhole-connect.svg)](https://www.npmjs.com/package/@wormhole-foundation/wormhole-connect) 

```bash
npm i @wormhole-foundation/wormhole-connect
```

Now you can use the React component:

```javascript
import WormholeConnect from '@wormhole-foundation/wormhole-connect';

function App() {
  return (
    <WormholeConnect />
  );
}
```

### Alternative: hosted version via CDN (for any website)

If you're not using React, you can still embed Connect on your website by using the hosted version. Simply copy and paste the following code into your HTML body:

```html
<!-- Mounting point. Include in <body> -->
<div id="wormhole-connect"></div>

<!-- Dependencies -->
<script type="module" src="https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.3.0/dist/main.js" defer></script>
<link rel="https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.3.0/dist/main.css" />
```

## Configuration

The default configuration of Wormhole Connect may not be what you want to use.  You may want to provide custom styles or restrict the chains that you allow in your app.

One important set of configuration parameters you should consider changing are the RPC URLs. By default public RPCs are used but they're heavily throttled, so for best user experience, these should be set to custom URLs.

More details on configuration options available is [here](https://github.com/wormhole-foundation/wormhole-connect/blob/development/wormhole-connect-loader/README.md)

{% tabs %}
{% tab title="React" %}

Configure the Wormhole Connect React component by passing a `WormholeConnectConfig` object as the `config` attribute

```tsx
import WormholeConnect, { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';

const config: WormholeConnectConfig = {
  networks: ["ethereum", "polygon", "solana"],
  tokens: ["ETH", "WETH", "MATIC", "WMATIC"],
  rpcs: {
    ethereum: "https://rpc.ankr.com/eth",
    solana: "https://rpc.ankr.com/solana",
  }
}

// ...

<WormholeConnect config={config} />

```
{% endtab %}

{% tab title="HTML Tags" %}

If using the hosted version, provide `config` and `theme` as JSON-serialized strings on the mount point:

```html
<div
  id="wormhole-connect"
  data-config='{"tokens":["ETH","WETH","WBTC","USDCeth"]}'
  data-theme='{"background":{"default": "#81c784"}}'
/>
```
{% endtab %}

{% endtabs %}


<details>
<summary>Theme Options</summary>

More [here](https://github.com/wormhole-foundation/wormhole-connect/blob/development/wormhole-connect/src/theme.ts)

```ts
export type Theme = {
  primary: PaletteColor;
  secondary: PaletteColor;
  divider: string;
  background: {
    default: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  error: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  warning: PaletteColor;
  button: {
    primary: string;
    primaryText: string;
    disabled: string;
    disabledText: string;
    action: string;
    actionText: string;
    hover: string;
  };
  options: {
    hover: string;
    select: string;
  };
  card: {
    background: string;
    elevation: string;
    secondary: string;
  };
  popover: {
    background: string;
    elevation: string;
    secondary: string;
  };
  modal: {
    background: string;
  };
  font: {
    primary: string;
    header: string;
  };
};

```

</details>

<details>
<summary>Configuration Options</summary>

More [here](https://github.com/wormhole-foundation/wormhole-connect/blob/development/wormhole-connect/src/config/types.ts)

```ts
export type Rpcs = {
  [chain in ChainName]?: string;
};

export interface BridgeDefaults {
  fromNetwork?: ChainName;
  toNetwork?: ChainName;
  token?: string;
  requiredNetwork?: ChainName;
}

export interface WormholeConnectConfig {
  env?: 'mainnet' | 'testnet';
  rpcs?: Rpcs;
  networks?: ChainName[];
  tokens?: string[];
  mode?: 'dark' | 'light';
  customTheme?: Theme;
  cta?: {
    text: string;
    link: string;
  };
  bridgeDefaults?: BridgeDefaults;
}
```

</details>


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
