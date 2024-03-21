
## Summary


Wormhole Connect is a React widget that lets developers offer easy, customized access to Wormhole powered bridges directly in a web application. Connect supports multiple forms of bridging including native asset bridge, Portal wrapped asset bridge, CCTP USDC bridge, and many others. Connect augments each bridge with gas dropoff (a transaction that leaves a user with extra native token so they can pay gas for subsequent on chain interactions) and gasless transactions (Connect relayers pay gas on behalf of users).

Wormhole Connect makes integration with Wormhole-powered services easier than ever. [Try out the no-code customizer now!](https://connect-in-style.wormhole.com/)

Or, check out the [Github repository](https://github.com/wormhole-foundation/wormhole-connect)

![Wormhole Connect Screenshot](https://camo.githubusercontent.com/fda29f71df76f388a4e579624e538c876f89c396d2dd6d9486657aa8f9a3a19c/68747470733a2f2f692e696d6775722e636f6d2f735a4a4b7738652e706e67)

{% hint style="success" %}
The [Wormhole Typescript SDK](../../reference/sdk-docs/README.md) allows you to implement the same functionality as the Connect widget, but in your own UI. For more information on using the SDK instead of Connect [check out the docs](../../../reference/sdk-docs/README.md).
{% endhint %}

## Demo

Wormhole Connect is deployed live in several production apps. Here are a few:

- [Portal Bridge](https://portalbridge.com/)
- [Jupiter](https://jup.ag/bridge/wormhole)
- [Pancake Swap](https://bridge.pancakeswap.finance/wormhole)

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

Read about configuring Connect and more [in the Connect docs](../../connect/overview.md#configuration)!
