## Summary

Wormhole Connect is a React widget that lets developers offer an easy to use interface to facilitate cross-chain asset transfers via Wormhole, directly in a web application.

Check out the [Github repository](https://github.com/wormhole-foundation/wormhole-connect)!

![Wormhole Connect Screenshot](https://camo.githubusercontent.com/fda29f71df76f388a4e579624e538c876f89c396d2dd6d9486657aa8f9a3a19c/68747470733a2f2f692e696d6775722e636f6d2f735a4a4b7738652e706e67)

{% hint style="success" %}
The [Wormhole Typescript SDK](../reference/sdk-docs/README.md) allows you to implement the same functionality as the Connect widget, but in your own UI. For more information on using the SDK instead of Connect [check out the docs](../reference/sdk-docs/README.md).
{% endhint %}

## Features
{% hint style="info" %}
This is just an overview of what features are available. For details about each, check [here](../connect/features.md).
{% endhint %}

- multiple ways to bridge assets ("[routes](./routes.md)")
- extensive ways to style the UI (also try the [codeless styler interface](https://connect-in-style.wormhole.com/)!)
- ways to [configure](./configuration.md) what feature set to offer
- ability to configure any token to bridge via Wormhole
- [drop off some gas](./features.md) at the destination

## Demo

Wormhole Connect is deployed live in several production apps. Here are a few:

- [Portal Bridge](https://portalbridge.com/)
- [Jupiter](https://jup.ag/bridge/wormhole)
- [Pancake Swap](https://bridge.pancakeswap.finance/wormhole)

## Integrate Connect

### Option 1: import directly into a React app

First, install the npm package.

[![npm version](https://img.shields.io/npm/v/@wormhole-foundation/wormhole-connect.svg)](https://www.npmjs.com/package/@wormhole-foundation/wormhole-connect) 

```bash
npm i @wormhole-foundation/wormhole-connect
```

Now you can import the React component:

```javascript
import WormholeConnect from '@wormhole-foundation/wormhole-connect';

function App() {
  return (
    <WormholeConnect />
  );
}
```

### Option 2: hosted version via CDN (for any website)

If you're not using React, you can still embed Connect on your website by using the hosted version. The sample code below uses the popular and free unpkg.com CDN from which your app will load the widget.

Simply copy and paste the following into your HTML body, and replace the ```{WORMHOLE_CONNECT_VERSION}``` in the links with the most recent production version of Wormhole Connect. You can check what the most recent version is on [NPM](https://www.npmjs.com/package/@wormhole-foundation/wormhole-connect/v/latest).

```html
<!-- Mounting point. Include in <body> -->
<div id="wormhole-connect"></div>

<!-- Dependencies -->
<script type="module" src="https://www.unpkg.com/@wormhole-foundation/wormhole-connect@{WORMHOLE_CONNECT_VERSION}/dist/main.js" defer></script>
<link rel="https://www.unpkg.com/@wormhole-foundation/wormhole-connect@{WORMHOLE_CONNECT_VERSION}/dist/main.css" />
```

For example, for [0.3.13](https://www.npmjs.com/package/@wormhole-foundation/wormhole-connect/v/0.3.13):

```html
<!-- Mounting point. Include in <body> -->
<div id="wormhole-connect"></div>

<!-- Dependencies -->
<script type="module" src="https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.3.13/dist/main.js" defer></script>
<link rel="https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.3.13/dist/main.css" />
```

{% hint style="info" %}
It is important to periodically update your Wormhole Connect instance to the latest version, as there are frequent functionality and security releases.
{% endhint %}

## Configuration
{% hint style="info" %}
This is just an overview of what's possible. For details about all the configuration options, check [here](../connect/configuration.md).
{% endhint %}

The default configuration of Wormhole Connect may not be what you want to use.  You may want to:

- use custom styles 
- restrict the chains that you allow in your app
- add support for your project's token, and eliminate tokens you don't want to reduce "noise"
- configuring custom RPC URLs (do this - default public RPCs are heavily throttled)
- restrict the [routes](./routes.md) that are available

Check the [configuration options](./configuration.md) and customize your widget however you like!