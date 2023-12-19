# Introduction

Wormhole is a generic **message passing protocol** that enables communication between blockchains.

![Overview](.gitbook/assets/oversimplified.jpg)

{% hint style="success" %}
The above is an _oversimplified_ illustration of the protocol, details about the architecture and components are available [here](explore-wormhole/components.md)
{% endhint %}

This simple **message passing protocol** enables developers and users of [cross chain applications](reference/glossary.md#xdapps) built by developers to leverage the advantages of multiple ecosystems.

### What Isn't Wormhole?

Wormhole is _not_ a blockchain itself, it provides a means of communication between blockchains or rollups.

Wormhole is _not_ a token bridge, though there are [protocols built on Wormhole](https://www.portalbridge.com/#/transfer) that serve this purpose.

### What can Wormhole be used for?

Consider the following examples of potential applications that are now possible with Wormhole:

1. **Cross Chain Exchange**: Using [Wormhole Connect](quick-start/wh-connect.md), a developer can build an exchange that allows deposits from any Wormhole connected chain, massively increasing the liquidity their users can access.
2. **Cross Chain Governance**: If a group of NFT collections on different networks wanted their holders to vote on a combined proposal, they could pick a "voting" chain, and use Wormhole to communicate votes cast on their disparate chains to the voting chain.
3. **Cross Chain Game**: A game could be built and played on a performant network like Solana, and it's rewards issued as NFTs on a different network, for example Ethereum.

## Get Started

### Quick Start Tutorials

Tutorials are available to get started quickly and explain the concepts involved.

<table data-card-size="large" data-view="cards" data-full-width="false"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Quick Start</strong> - Off Chain</td><td>Integrate Wormhole Connect to a new or existing web UI</td><td><a href="quick-start/wh-connect.md">wh-connect.md</a></td><td><a href=".gitbook/assets/wh-connect-default.png">wh-connect-default.png</a></td></tr><tr><td><strong>Quick Start</strong> - On Chain</td><td>Send your first cross chain message</td><td><a href="quick-start/cross-chain-dev/">cross-chain-dev</a></td><td><a href=".gitbook/assets/wh-line-art.png">wh-line-art.png</a></td></tr></tbody></table>

More tutorials are available [here](quick-start/tutorials/).

### Explore

Find out more about the Wormhole ecosystem, components, and protocols.

<table data-card-size="large" data-view="cards" data-full-width="false"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Architecture</strong></td><td>Dig into the components of the protocol</td><td><a href="explore-wormhole/components.md">components.md</a></td><td><a href=".gitbook/assets/detailed-flow.jpg">detailed-flow.jpg</a></td></tr><tr><td><strong>Protocol Specifications</strong></td><td>Find out more about the protocols built on top of Wormhole</td><td><a href="https://github.com/wormhole-foundation/wormhole/tree/main/whitepapers">https://github.com/wormhole-foundation/wormhole/tree/main/whitepapers</a></td><td><a href=".gitbook/assets/protocols.png">protocols.png</a></td></tr></tbody></table>

### Demos

Demos provide more realistic implementations than Tutorials

<table data-card-size="large" data-view="cards" data-full-width="false"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Wormhole Scaffolding</strong></td><td>Quickly spin up a project with the Scaffolding repo</td><td><a href="https://github.com/wormhole-foundation/wormhole-scaffolding">https://github.com/wormhole-foundation/wormhole-scaffolding</a></td><td><a href=".gitbook/assets/scaffolding.jpg">scaffolding.jpg</a></td></tr><tr><td><strong>xDapp book projects</strong></td><td>Run and learn from example programs</td><td><a href="https://github.com/wormhole-foundation/xdapp-book/tree/main/projects">https://github.com/wormhole-foundation/xdapp-book/tree/main/projects</a></td><td><a href=".gitbook/assets/projects.png">projects.png</a></td></tr></tbody></table>

More Demos are available [here](quick-start/demos.md).

## Supported Blockchains

Wormhole supports a growing number of blockchains

<table data-view="cards" data-full-width="false"><thead><tr><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Acala</strong></td><td><a href="blockchain-environments/evm/#acala">#acala</a></td><td><a href=".gitbook/assets/acala.svg">acala.svg</a></td></tr><tr><td><strong>Algorand</strong></td><td><a href="blockchain-environments/algorand.md#algorand">#algorand</a></td><td><a href=".gitbook/assets/algorand.svg">algorand.svg</a></td></tr><tr><td><strong>Aptos</strong></td><td><a href="blockchain-environments/aptos.md#aptos">#aptos</a></td><td><a href=".gitbook/assets/aptos.svg">aptos.svg</a></td></tr><tr><td><strong>Arbitrum</strong></td><td><a href="blockchain-environments/evm/#arbitrum">#arbitrum</a></td><td><a href=".gitbook/assets/arbitrum.svg">arbitrum.svg</a></td></tr><tr><td><strong>Aurora</strong></td><td><a href="blockchain-environments/evm/#aurora">#aurora</a></td><td><a href=".gitbook/assets/aurora.svg">aurora.svg</a></td></tr><tr><td><strong>Avalanche</strong></td><td><a href="blockchain-environments/evm/#avalanche">#avalanche</a></td><td><a href=".gitbook/assets/avalanche.svg">avalanche.svg</a></td></tr><tr><td><strong>Base</strong></td><td><a href="blockchain-environments/evm/#base">#base</a></td><td><a href=".gitbook/assets/base.svg">base.svg</a></td></tr><tr><td><strong>BNB Smart Chain (BSC)</strong></td><td><a href="blockchain-environments/evm/#bsc">#bsc</a></td><td><a href=".gitbook/assets/bsc.svg">bsc.svg</a></td></tr><tr><td><strong>Celo</strong></td><td><a href="blockchain-environments/evm/#celo">#celo</a></td><td><a href=".gitbook/assets/celo.svg">celo.svg</a></td></tr><tr><td><strong>Cosmoshub</strong></td><td><a href="blockchain-environments/cosmwasm.md#cosmoshub">#cosmoshub</a></td><td><a href=".gitbook/assets/cosmoshub.svg">cosmoshub.svg</a></td></tr><tr><td><strong>Ethereum</strong></td><td><a href="blockchain-environments/evm/#ethereum">#ethereum</a></td><td><a href=".gitbook/assets/ethereum.svg">ethereum.svg</a></td></tr><tr><td><strong>Evmos</strong></td><td><a href="blockchain-environments/cosmwasm.md#evmos">#evmos</a></td><td><a href=".gitbook/assets/evmos.svg">evmos.svg</a></td></tr><tr><td><strong>Fantom</strong></td><td><a href="blockchain-environments/evm/#fantom">#fantom</a></td><td><a href=".gitbook/assets/fantom.svg">fantom.svg</a></td></tr><tr><td><strong>Gnosis</strong></td><td><a href="blockchain-environments/evm/#gnosis">#gnosis</a></td><td><a href=".gitbook/assets/gnosis.svg">gnosis.svg</a></td></tr><tr><td><strong>Injective</strong></td><td><a href="blockchain-environments/cosmwasm.md#injective">#injective</a></td><td><a href=".gitbook/assets/injective.svg">injective.svg</a></td></tr><tr><td><strong>Karura</strong></td><td><a href="blockchain-environments/evm/#karura">#karura</a></td><td><a href=".gitbook/assets/karura.svg">karura.svg</a></td></tr><tr><td><strong>Klaytn</strong></td><td><a href="blockchain-environments/evm/#klaytn">#klaytn</a></td><td><a href=".gitbook/assets/klaytn.svg">klaytn.svg</a></td></tr><tr><td><strong>Kujira</strong></td><td><a href="blockchain-environments/cosmwasm.md#kujira">#kujira</a></td><td><a href=".gitbook/assets/kujira.svg">kujira.svg</a></td></tr><tr><td><strong>Moonbeam</strong></td><td><a href="blockchain-environments/evm/#moonbeam">#moonbeam</a></td><td><a href=".gitbook/assets/moonbeam.svg">moonbeam.svg</a></td></tr><tr><td><strong>NEAR</strong></td><td><a href="blockchain-environments/near.md#near">#near</a></td><td><a href=".gitbook/assets/near.svg">near.svg</a></td></tr><tr><td><strong>Neon</strong></td><td><a href="blockchain-environments/evm/#neon">#neon</a></td><td><a href=".gitbook/assets/neon.svg">neon.svg</a></td></tr><tr><td><strong>Oasis</strong></td><td><a href="blockchain-environments/evm/#oasis">#oasis</a></td><td><a href=".gitbook/assets/oasis.svg">oasis.svg</a></td></tr><tr><td><strong>Optimism</strong></td><td><a href="blockchain-environments/evm/#optimism">#optimism</a></td><td><a href=".gitbook/assets/optimism.svg">optimism.svg</a></td></tr><tr><td><strong>Osmosis</strong></td><td><a href="blockchain-environments/cosmwasm.md#osmosis">#osmosis</a></td><td><a href=".gitbook/assets/osmosis.svg">osmosis.svg</a></td></tr><tr><td><strong>Polygon</strong></td><td><a href="blockchain-environments/evm/#polygon">#polygon</a></td><td><a href=".gitbook/assets/polygon.svg">polygon.svg</a></td></tr><tr><td><strong>pythnet</strong></td><td><a href="blockchain-environments/solana.md#pythnet">#pythnet</a></td><td><a href=".gitbook/assets/pythnet.svg">pythnet.svg</a></td></tr><tr><td><strong>Rootstock</strong></td><td><a href="blockchain-environments/evm/#rootstock">#rootstock</a></td><td><a href=".gitbook/assets/rootstock.svg">rootstock.svg</a></td></tr><tr><td><strong>Sei</strong></td><td><a href="blockchain-environments/cosmwasm.md#sei">#sei</a></td><td><a href=".gitbook/assets/sei.svg">sei.svg</a></td></tr><tr><td><strong>Sepolia</strong></td><td><a href="blockchain-environments/evm/#sepolia">#sepolia</a></td><td><a href=".gitbook/assets/sepolia.svg">sepolia.svg</a></td></tr><tr><td><strong>Solana</strong></td><td><a href="blockchain-environments/solana.md#solana">#solana</a></td><td><a href=".gitbook/assets/solana.svg">solana.svg</a></td></tr><tr><td><strong>Sui</strong></td><td><a href="blockchain-environments/sui.md#sui">#sui</a></td><td><a href=".gitbook/assets/sui.svg">sui.svg</a></td></tr><tr><td><strong>Terra</strong></td><td><a href="blockchain-environments/cosmwasm.md#terra">#terra</a></td><td><a href=".gitbook/assets/terra.svg">terra.svg</a></td></tr><tr><td><strong>Terra2</strong></td><td><a href="blockchain-environments/cosmwasm.md#terra2">#terra2</a></td><td><a href=".gitbook/assets/terra2.svg">terra2.svg</a></td></tr><tr><td><strong>Xpla</strong></td><td><a href="blockchain-environments/cosmwasm.md#xpla">#xpla</a></td><td><a href=".gitbook/assets/xpla.svg">xpla.svg</a></td></tr></tbody></table>
