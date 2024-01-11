
## Summary

Wormhole Connect is a frontend-embeddable widget that lets developers support easy, customized access to Wormhole powered bridges directly from within a platform or Dapp. Connect supports multiple forms of bridging including native asset bridge, Portal wrapped asset bridge, CCTP USDC bridge, and many others. Connect augments each bridge with gas dropoff (a transaction that leaves a user with extra native token so they can pay gas for subsequent on chain interactions) and gasless transactions (Connect relayers pay gas on behalf of users).

Wormhole Connect makes integration with Wormhole-powered services easier than ever. [Try out the no-code customizer now!](https://connect-in-style.wormhole.com/)

Or, check out the [Github repository](https://github.com/wormhole-foundation/wormhole-connect)

{% hint style="success" %}
The Wormhole SDK (a separate product from the embeddable Connect Widget) allows you to custom integrate the same functionality that the Connect widget offers you with just a bit more work. For more information on using the SDK instead of Connect check out the docs [here](../../../reference/sdk-docs/connect-sdk)
{% endhint %}

## Functionality in Connect

1. **Gasless Txns:** Users can bridge without paying gas on the destination chain. 
    1. ETH on Ethereum → whETH on Solana, only pays gas in ETH on Ethereum (covers both send and redeem)

2. **Gas Dropoff:** User can bridge while only paying gas on the source chain and swap some of the transferred asset into the destination gas token. 
    1. ETH on Ethereum → whETH on Avalanche + AVAX on Avalanche, only pays gas in ETH on Ethereum (covers both send and redeem)


## Bridges in Connect

Connect and the corresponding SDK will have 4 primary routes:

- USDC Bridge - USDC gaslessly and quickly bridged between any CCTP supported chains
- Portal - WH wrapped asset bridging
    - Users can bridge any token between WH supported chains via the TokenBridge contracts that power Portal bridge today
- **NEW** CCTP Based Liquidity Bridge - New price-efficient, fast transfer solution built atop CCTP x WH Messaging
- **NEW** Uni V3 Based Liquidity Bridge - New solution built atop seeded liquidity for WH wrapped assets against native assets in Uni V3 pools


Connect can be integrated directly as a customizable, drop-in widget or a developer can choose to utilize all or some of the functionality via a fully customized integration through the Wormhole SDK.

- **Connect UI**: A customizable frontend that takes in the necessary input from the user, integrated via an NPM package
- **Wormhole SDK**: Typescript SDK to directly call the functions powering the Connect widget, all connect functionality will live in a specific interface within the general WH SDK
    - The routing logic and contract calls will be built into the Connect Interface in the Wormhole SDK (formerly, this was a distinct, Connect SDK, the interface has been merged in to maintain a single WH SDK).


## Ultra Quick Start

For the zero config quick start, simply include the script and style tags in the HTML of your web app.

1) Include the following html tags in the `<head>` of the html

```html
<script src="https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.0.1-beta.2/dist/main.js" defer></script>
<link rel="https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.0.1-beta.2/dist/main.css" />
```

2) Include the following div tag in the `<body>` of the html where the plugin should be rendered:

```html
<div id="wormhole-connect"></div>
```

3) **(Optional)** Touch Grass


## React App Integration 


Getting Wormhole Connect added to your existing React app is straight forward.

First, install the npm package

```sh
npm install @wormhole-foundation/wormhole-connect
```

Next, import the component

```ts
import WormholeBridge from '@wormhole-foundation/wormhole-connect';
```

Finally, add the component to your app

```tsx
function App() {
    return (
        <WormholeBridge />
    )
}
```

If your app is running, you should see something like this

![Wormhole Connect Screenshot](../../.gitbook/assets/wh-connect-default.png)


## Configuration

The default configuration of Wormhole Connect may not be what you want to use.  You may want to provide custom styles or restrict the chains that you allow in your app.

One important set of configuration parameters you should consider changing are the RPC URLs. By default public RPCs are used but they're heavily throttled, so for best user experience, these should be set to custom URLs.

More details on configuration options available is [here](https://github.com/wormhole-foundation/wormhole-connect/blob/development/wormhole-connect-loader/README.md)

{% tabs %}
{% tab title="React" %}

Configure the Wormhole Connect React component by passing a `WormholeConnectConfig` object as the `config` attribute

```tsx
import { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';

const config: WormholeConnectConfig = {
  env: "mainnet",
  networks: ["ethereum", "polygon", "solana"],
  tokens: ["ETH", "WETH", "MATIC", "WMATIC"],
  rpc: {
    ethereum: "https://rpc.ankr.com/eth",
    solana: "https://rpc.ankr.com/solana",
  }
}

// ...

<WormholeBridge config={config} />

```
{% endtab %}

{% tab title="HTML Tags" %}

The same config parameters that are available for the React component can be passed as a json string to the `config` attribute of the `wormhole-connect` container.

```html
<div id="wormhole-connect" config='{"env":"mainnet","tokens":["ETH","WETH","WBTC","USDCeth"]}' />
```
{% endtab %}

{% endtabs %}


<details>
<summary>Theme Options</summary>

More [here](https://github.com/wormhole-foundation/wormhole-connect/blob/development/wormhole-connect-loader/src/theme.ts)

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

More [here](https://github.com/wormhole-foundation/wormhole-connect/blob/development/wormhole-connect-loader/src/types.ts)

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
