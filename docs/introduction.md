
Wormhole is a generic **message passing protocol** that enables communication between blockchains.

![Overview](.gitbook/assets/introduction/oversimplified.png)

{% hint style="success" %}
The above is an _oversimplified_ illustration of the protocol, details about the architecture and components are available [here](./reference/components/README.md)
{% endhint %}

This simple **message passing protocol** enables developers and users of [cross chain applications](./reference/glossary.md#xdapps) built by developers to leverage the advantages of multiple ecosystems. 

## What Isn't Wormhole?

Wormhole is _not_ a blockchain itself, it provides a means of communication between blockchains or rollups.

Wormhole is _not_ a token bridge, though there are [protocols built on Wormhole](https://www.portalbridge.com/#/transfer) that serve this purpose.

## What can Wormhole be used for?

Consider the following examples of potential applications that are now possible with Wormhole:

1. **Cross Chain Exchange**: Using [Wormhole Connect](./tutorials/quick-start/wh-connect.md), a developer can build an exchange that allows deposits from any Wormhole connected chain, massively increasing the liquidity their users can access.
2. **Cross Chain Governance**: If a group of NFT collections on different networks wanted their holders to vote on a combined proposal, they could pick a "voting" chain, and use Wormhole to communicate votes cast on their disparate chains to the voting chain.
3. **Cross Chain Game**: A game could be built and played on a performant network like Solana, and it's rewards issued as NFTs on a different network, for example Ethereum.


# Get Started 

## Quick Start Tutorials

Tutorials are available to get started quickly and explain the concepts involved.

<table data-view="cards" data-card-size="large" data-full-width="false">
   <thead>
      <tr>
         <th></th>
         <th></th>
         <th data-hidden data-card-target data-type="content-ref"></th>
         <th data-hidden data-card-cover data-type="files"></th>
      </tr>
   </thead>
    <tbody>
        <tr>
            <td><strong>Quick Start</strong> - Off Chain</td>
            <td>Integrate Wormhole Connect to a new or existing web UI</td>
            <td><a href="./tutorials/quick-start/wh-connect.md">wh-connect.md</a></td>
            <td><a href=".gitbook/assets/wh-connect-default.png">wh-connect-default.png</a></td>
        </tr>
        <tr>
            <td><strong>Quick Start</strong> - On Chain</td>
            <td>Send your first cross chain message</td>
            <td><a href="./quick-start/cross-chain-dev.md">cross-chain-dev.md</a></td>
            <td><a href=".gitbook/assets/wh-line-art.png">wh-line-art.png</a></td>
        </tr>
    </tbody>
</table>

More tutorials are available [here](./tutorials/README.md).

## Explore 

Find out more about the Wormhole ecosystem, components, and protocols.

<table data-view="cards" data-card-size="large" data-full-width="false">
   <thead>
      <tr>
         <th></th>
         <th></th>
         <th data-hidden data-card-target data-type="content-ref"></th>
         <th data-hidden data-card-cover data-type="files"></th>
      </tr>
   </thead>
    <tbody>
        <tr>
            <td><strong>Architecture</strong></td>
            <td>Dig into the components of the protocol</td>
            <td><a href="./reference/components/README.md">components</a></td>
            <td><a href=".gitbook/assets/core-concepts/detailed-flow.png">detailed-flow.png</a></td>
        </tr>
        <tr>
            <td><strong>Protocol Specifications</strong></td>
            <td>Find out more about the protocols built on top of Wormhole</td>
            <td><a href="https://github.com/wormhole-foundation/wormhole/tree/main/whitepapers">white papers</a></td>
            <td><a href=".gitbook/assets/protocols.png">wormhole-blue.svg</a></td>
        </tr>
    </tbody>
</table>


## Demos

Demos provide more realistic implementations than Tutorials

<table data-view="cards" data-card-size="large" data-full-width="false">
   <thead>
      <tr>
         <th></th>
         <th></th>
         <th data-hidden data-card-target data-type="content-ref"></th>
         <th data-hidden data-card-cover data-type="files"></th>
      </tr>
   </thead>
    <tbody>
        <tr>
            <td><strong>Wormhole Scaffolding</strong></td>
            <td>Quickly spin up a project with the Scaffolding repo</td>
            <td><a href="https://github.com/wormhole-foundation/wormhole-scaffolding">wormhole-scaffolding</a></td>
            <td><a href=".gitbook/assets/scaffolding.jpg">scaffolding.jpg</a></td>
        </tr>
        <tr>
            <td><strong>xDapp book projects</strong></td>
            <td>Run and learn from example programs</td>
            <td><a href="https://github.com/wormhole-foundation/xdapp-book/tree/main/projects">xdapp-projects</a></td>
            <td><a href=".gitbook/assets/projects.png">project.png</a></td>
        </tr>
    </tbody>
</table>

More Demos are available [here](./demos.md).

# Supported Blockchains

Wormhole supports a growing number of blockchains

<table data-view="cards" data-full-width="false">
   <thead>
      <tr>
         <th></th>
         <th data-hidden data-card-target data-type="content-ref"></th>
         <th data-hidden data-card-cover data-type="files"></th>
      </tr>
   </thead>
   <tbody>
<!--SUPPORTED_BLOCKCHAIN_CARDS-->
<tr>
    <td><strong>Acala</strong></td>
    <td><a href="./reference/environments/evm.md#acala">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/acala.svg">acala</a></td>
</tr>
<tr>
    <td><strong>Algorand</strong></td>
    <td><a href="./reference/environments/algorand.md#algorand">algorand.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/algorand.svg">algorand</a></td>
</tr>
<tr>
    <td><strong>Aptos</strong></td>
    <td><a href="./reference/environments/aptos.md#aptos">aptos.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/aptos.svg">aptos</a></td>
</tr>
<tr>
    <td><strong>Arbitrum</strong></td>
    <td><a href="./reference/environments/evm.md#arbitrum">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/arbitrum.svg">arbitrum</a></td>
</tr>
<tr>
    <td><strong>Aurora</strong></td>
    <td><a href="./reference/environments/evm.md#aurora">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/aurora.svg">aurora</a></td>
</tr>
<tr>
    <td><strong>Avalanche</strong></td>
    <td><a href="./reference/environments/evm.md#avalanche">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/avalanche.svg">avalanche</a></td>
</tr>
<tr>
    <td><strong>Base</strong></td>
    <td><a href="./reference/environments/evm.md#base">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/base.svg">base</a></td>
</tr>
<tr>
    <td><strong>BNB Smart Chain (BSC)</strong></td>
    <td><a href="./reference/environments/evm.md#bsc">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/bsc.svg">bsc</a></td>
</tr>
<tr>
    <td><strong>Celo</strong></td>
    <td><a href="./reference/environments/evm.md#celo">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/celo.svg">celo</a></td>
</tr>
<tr>
    <td><strong>Ethereum</strong></td>
    <td><a href="./reference/environments/evm.md#ethereum">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/ethereum.svg">ethereum</a></td>
</tr>
<tr>
    <td><strong>Fantom</strong></td>
    <td><a href="./reference/environments/evm.md#fantom">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/fantom.svg">fantom</a></td>
</tr>
<tr>
    <td><strong>Gnosis</strong></td>
    <td><a href="./reference/environments/evm.md#gnosis">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/gnosis.svg">gnosis</a></td>
</tr>
<tr>
    <td><strong>Injective</strong></td>
    <td><a href="./reference/environments/cosmwasm.md#injective">cosmwasm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/injective.svg">injective</a></td>
</tr>
<tr>
    <td><strong>Karura</strong></td>
    <td><a href="./reference/environments/evm.md#karura">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/karura.svg">karura</a></td>
</tr>
<tr>
    <td><strong>Klaytn</strong></td>
    <td><a href="./reference/environments/evm.md#klaytn">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/klaytn.svg">klaytn</a></td>
</tr>
<tr>
    <td><strong>Moonbeam</strong></td>
    <td><a href="./reference/environments/evm.md#moonbeam">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/moonbeam.svg">moonbeam</a></td>
</tr>
<tr>
    <td><strong>NEAR</strong></td>
    <td><a href="./reference/environments/near.md#near">near.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/near.svg">near</a></td>
</tr>
<tr>
    <td><strong>Neon</strong></td>
    <td><a href="./reference/environments/evm.md#neon">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/neon.svg">neon</a></td>
</tr>
<tr>
    <td><strong>Oasis</strong></td>
    <td><a href="./reference/environments/evm.md#oasis">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/oasis.svg">oasis</a></td>
</tr>
<tr>
    <td><strong>Optimisim</strong></td>
    <td><a href="./reference/environments/evm.md#optimism">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/optimism.svg">optimism</a></td>
</tr>
<tr>
    <td><strong>Osmosis</strong></td>
    <td><a href="./reference/environments/cosmwasm.md#osmosis">cosmwasm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/osmosis.svg">osmosis</a></td>
</tr>
<tr>
    <td><strong>Polygon</strong></td>
    <td><a href="./reference/environments/evm.md#polygon">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/polygon.svg">polygon</a></td>
</tr>
<tr>
    <td><strong>pythnet</strong></td>
    <td><a href="./reference/environments/solana.md#pythnet">solana.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/pythnet.svg">pythnet</a></td>
</tr>
<tr>
    <td><strong>Sei</strong></td>
    <td><a href="./reference/environments/cosmwasm.md#sei">cosmwasm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/sei.svg">sei</a></td>
</tr>
<tr>
    <td><strong>Sepolia</strong></td>
    <td><a href="./reference/environments/evm.md#sepolia">evm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/sepolia.svg">sepolia</a></td>
</tr>
<tr>
    <td><strong>Solana</strong></td>
    <td><a href="./reference/environments/solana.md#solana">solana.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/solana.svg">solana</a></td>
</tr>
<tr>
    <td><strong>Sui</strong></td>
    <td><a href="./reference/environments/sui.md#sui">sui.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/sui.svg">sui</a></td>
</tr>
<tr>
    <td><strong>Terra</strong></td>
    <td><a href="./reference/environments/cosmwasm.md#terra">cosmwasm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/terra.svg">terra</a></td>
</tr>
<tr>
    <td><strong>Terra2</strong></td>
    <td><a href="./reference/environments/cosmwasm.md#terra2">cosmwasm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/terra2.svg">terra2</a></td>
</tr>
<tr>
    <td><strong>xpla</strong></td>
    <td><a href="./reference/environments/cosmwasm.md#xpla">cosmwasm.md</a></td>
    <td><a href="./.gitbook/assets/chain-icons/xpla.svg">xpla</a></td>
</tr>
<!--SUPPORTED_BLOCKCHAIN_CARDS-->
</tbody></table>
