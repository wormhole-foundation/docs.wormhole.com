# Introduction to Wormhole

Wormhole is **_a cross-chain messaging protocol_** designed to connect different blockchain networks, allowing for the transfer of data, tokens, and other assets across them. It aims to solve the problem of blockchain interoperability, enabling users and developers to move assets and execute functions between various blockchains seamlessly.

Wormhole provides a solution to the fragmentation of the blockchain world. It enables different blockchains to work together, allowing assets and data to flow freely between them. This is critical for the growth and maturity of the decentralized web (Web3), where the goal is to create an **open**, **interconnected**, and **user-controlled internet**.

By providing a robust and secure cross-chain messaging protocol, Wormhole empowers both **users** and **developers** to leverage the strengths of multiple blockchains, unlocking new possibilities for decentralized finance, NFTs, and other blockchain applications.

![Overview](.gitbook/assets/oversimplified.jpg)

{% hint style="success" %}
The above is an _oversimplified_ illustration of the protocol, details about the architecture and components are available [here](./reference/components/README.md)
{% endhint %}

### What Isn't Wormhole?

**Wormhole is _not_ a blockchain itself;** it provides a means of communication between blockchains or rollups. It acts as a cross-chain messaging protocol that facilitates interoperability between different blockchain networks. By using a network of nodes called "Guardians," Wormhole observes events on one blockchain and relays them to another, ensuring secure and efficient data transfer.

While **Wormhole is not a token bridge,** it provides the necessary infrastructure for building token bridges and other cross-chain applications, enabling seamless asset transfers and communication across various blockchains.

### Benefits of Using Wormhole for Cross-Chain Communication

Wormhole offers a robust solution for cross-chain communication, enabling seamless interaction between different blockchain networks. By leveraging Wormhole, developers can unlock a multitude of benefits that enhance the functionality, security, and user experience of decentralized applications (dApps). From increased liquidity and interoperability to improved scalability and cost efficiency, Wormhole provides the essential infrastructure needed to build innovative and interconnected blockchain solutions.

Below are some of the key benefits of using Wormhole for cross-chain communication.

1. **Interoperability:** Wormhole enables different blockchain networks to communicate and interact with each other, allowing for the seamless transfer of assets and data across chains. This interoperability is essential for creating decentralized applications (dApps) that can leverage the unique features of multiple blockchains.

2. **Increased Liquidity:** By connecting various blockchains, Wormhole allows for the aggregation of liquidity from different networks. This is particularly beneficial for decentralized exchanges (DEXs) and other financial applications, as it provides users with access to a larger pool of assets.

3. **Enhanced User Experience:** Wormhole's cross-chain capabilities enable developers to create more versatile and user-friendly applications. Users can interact with dApps on one blockchain while holding assets on another, without needing to manually transfer tokens between chains.

4. **Decentralized Governance:** Wormhole facilitates cross-chain governance by allowing voting and decision-making processes to occur across multiple blockchains. This ensures that all stakeholders, regardless of the blockchain they are on, can participate in governance activities.

5. **Scalability:** By enabling applications to operate across multiple blockchains, Wormhole helps to distribute the load and improve scalability. For instance, a game can run on a high-performance blockchain like Solana while issuing rewards on Ethereum, balancing the computational load and optimizing performance.

6. **Security:** Wormhole employs a network of Guardians to validate and relay messages between blockchains, ensuring the integrity and authenticity of the data being transferred. This decentralized approach enhances the security of cross-chain communication.

7. **Flexibility:** Developers can use Wormhole to build a wide range of cross-chain applications, from token bridges and exchanges to games and governance platforms. This flexibility allows for innovative use cases and the creation of more complex and feature-rich dApps.

8. **Cost Efficiency:** By leveraging the strengths of different blockchains, Wormhole can help reduce transaction costs. For example, computationally intensive operations can be performed on a low-cost blockchain, while high-value transactions can be secured on a more robust network.

These benefits make Wormhole a powerful tool for developers looking to create interconnected, efficient, and user-friendly blockchain applications. By leveraging Wormhole's cross-chain communication capabilities, developers can build applications that seamlessly interact with multiple blockchain networks.

This interoperability allows for the aggregation of liquidity, enhanced user experiences, and decentralized governance across different chains. Additionally, Wormhole's flexibility and cost efficiency enable developers to optimize performance and reduce transaction costs by utilizing the strengths of various blockchains. Overall, Wormhole empowers developers to innovate and create more complex, feature-rich, and accessible decentralized applications.

### What can Wormhole be used for?

Wormhole enables a wide range of cross-chain applications by facilitating seamless communication between different blockchain networks. Here are some potential applications that are now possible with Wormhole:

1. **Cross Chain Exchange**: Using [Wormhole Connect](./tutorials/quick-start/wh-connect.md), developers can build an exchange that allows deposits from any Wormhole-connected chain.

   This significantly increases the liquidity available to users, as they can access assets from multiple blockchains. By leveraging Wormhole, exchanges can offer a more diverse and liquid trading environment, enhancing the overall user experience.

2. **Cross Chain Governance**: If a group of NFT collections on different networks wants their holders to vote on a combined proposal, they can designate a "voting" chain. Wormhole can be used to communicate votes cast on the various disparate chains to the designated voting chain.

   This enables decentralized governance across multiple blockchain networks, ensuring that all stakeholders have a voice in the decision-making process.

3. **Cross Chain Game**: A game could be developed and played on a high-performance network like Solana, while its rewards are issued as NFTs on a different network, such as Ethereum.

   This allows game developers to take advantage of Solana's fast transaction speeds and low costs for gameplay, while leveraging Ethereum's robust NFT ecosystem for rewards. Wormhole facilitates the seamless transfer of rewards between the two networks, providing a smooth and integrated gaming experience.

4. **Cross-Chain DeFi** Decentralized Finance (DeFi) applications can use Wormhole to offer services that span multiple blockchains, such as lending and borrowing platforms that accept collateral from different networks. By leveraging Wormhole's cross-chain communication capabilities, DeFi platforms can enable users to deposit assets from one blockchain as collateral and borrow assets on another blockchain.

   **For example,** a user could use their Ethereum-based tokens as collateral to borrow Solana-based tokens, facilitating more diverse and efficient financial interactions across the blockchain ecosystem.

## Get Started

### Quick Start Tutorials

Tutorials are available to get started quickly and explain the concepts involved.

<table data-card-size="large" data-view="cards" data-full-width="false"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Quick Start</strong> - Off Chain</td><td>Integrate Wormhole Connect to a new or existing web UI</td><td><a href="./tutorials/quick-start/wh-connect.md">wh-connect.md</a></td><td><a href=".gitbook/assets/wh-connect-default.png">wh-connect-default.png</a></td></tr><tr><td><strong>Quick Start</strong> - On Chain</td><td>Send your first cross chain message</td><td><a href="./tutorials/quick-start/cross-chain-dev/README.md">cross-chain-dev</a></td><td><a href=".gitbook/assets/wh-line-art.png">wh-line-art.png</a></td></tr></tbody></table>

More tutorials are available [here](./tutorials/quick-start).

### Explore

Find out more about the Wormhole ecosystem, components, and protocols.

<table data-card-size="large" data-view="cards" data-full-width="false"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Architecture</strong></td><td>Dig into the components of the protocol</td><td><a href="./reference/components/README.md">components.md</a></td><td><a href=".gitbook/assets/detailed-flow.jpg">detailed-flow.jpg</a></td></tr><tr><td><strong>Protocol Specifications</strong></td><td>Find out more about the protocols built on top of Wormhole</td><td><a href="https://github.com/wormhole-foundation/wormhole/tree/main/whitepapers">https://github.com/wormhole-foundation/wormhole/tree/main/whitepapers</a></td><td><a href=".gitbook/assets/protocols.png">protocols.png</a></td></tr></tbody></table>

### Demos

Demos provide more realistic implementations than Tutorials

<table data-card-size="large" data-view="cards" data-full-width="false"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Wormhole Scaffolding</strong></td><td>Quickly spin up a project with the Scaffolding repo</td><td><a href="https://github.com/wormhole-foundation/wormhole-scaffolding">https://github.com/wormhole-foundation/wormhole-scaffolding</a></td><td><a href=".gitbook/assets/scaffolding.jpg">scaffolding.jpg</a></td></tr><tr><td><strong>xDapp book projects</strong></td><td>Run and learn from example programs</td><td><a href="https://github.com/wormhole-foundation/xdapp-book/tree/main/projects">https://github.com/wormhole-foundation/xdapp-book/tree/main/projects</a></td><td><a href=".gitbook/assets/projects.png">projects.png</a></td></tr></tbody></table>

More Demos are available [here](./tutorials/demos.md).

{% hint style="info" %}

## Wormhole integration complete?

Let us know so we can list your project in our ecosystem directory and introduce you to our global, multichain community!

[Reach out now!](https://forms.clickup.com/45049775/f/1aytxf-10244/JKYWRUQ70AUI99F32Q)

{% endhint %}

## Supported Blockchains

Wormhole supports a growing number of blockchains

<table data-view="cards" data-full-width="false"><thead><tr><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody>

<!--SUPPORTED_BLOCKCHAIN_CARDS-->
<tr>
    <td><strong>Acala</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#acala">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/acala.svg">acala</a></td>
</tr>
<tr>
    <td><strong>Algorand</strong></td>
    <td><a href="./blockchain-environments/algorand/README.md#algorand">algorand</a></td>
    <td><a href="./.gitbook/assets/chain-icons/algorand.svg">algorand</a></td>
</tr>
<tr>
    <td><strong>Aptos</strong></td>
    <td><a href="./blockchain-environments/aptos/README.md#aptos">aptos</a></td>
    <td><a href="./.gitbook/assets/chain-icons/aptos.svg">aptos</a></td>
</tr>
<tr>
    <td><strong>Arbitrum</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#arbitrum">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/arbitrum.svg">arbitrum</a></td>
</tr>
<tr>
    <td><strong>Arbitrum Sepolia</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#arbitrum_sepolia">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/arbitrum_sepolia.svg">arbitrum_sepolia</a></td>
</tr>
<tr>
    <td><strong>Avalanche</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#avalanche">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/avalanche.svg">avalanche</a></td>
</tr>
<tr>
    <td><strong>Base</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#base">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/base.svg">base</a></td>
</tr>
<tr>
    <td><strong>Base Sepolia</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#base_sepolia">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/base_sepolia.svg">base_sepolia</a></td>
</tr>
<tr>
    <td><strong>Berachain</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#berachain">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/berachain.svg">berachain</a></td>
</tr>
<tr>
    <td><strong>Blast</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#blast">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/blast.svg">blast</a></td>
</tr>
<tr>
    <td><strong>BNB Smart Chain</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#bsc">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/bsc.svg">bsc</a></td>
</tr>
<tr>
    <td><strong>Celestia</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#celestia">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/celestia.svg">celestia</a></td>
</tr>
<tr>
    <td><strong>Celo</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#celo">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/celo.svg">celo</a></td>
</tr>
<tr>
    <td><strong>Cosmoshub</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#cosmoshub">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/cosmoshub.svg">cosmoshub</a></td>
</tr>
<tr>
    <td><strong>Dymension</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#dymension">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/dymension.svg">dymension</a></td>
</tr>
<tr>
    <td><strong>Ethereum</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#ethereum">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/ethereum.svg">ethereum</a></td>
</tr>
<tr>
    <td><strong>Evmos</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#evmos">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/evmos.svg">evmos</a></td>
</tr>
<tr>
    <td><strong>Fantom</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#fantom">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/fantom.svg">fantom</a></td>
</tr>
<tr>
    <td><strong>Gnosis</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#gnosis">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/gnosis.svg">gnosis</a></td>
</tr>
<tr>
    <td><strong>Ethereum Holesky</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#holesky">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/holesky.svg">holesky</a></td>
</tr>
<tr>
    <td><strong>Injective</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#injective">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/injective.svg">injective</a></td>
</tr>
<tr>
    <td><strong>Karura</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#karura">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/karura.svg">karura</a></td>
</tr>
<tr>
    <td><strong>Klaytn</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#klaytn">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/klaytn.svg">klaytn</a></td>
</tr>
<tr>
    <td><strong>Kujira</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#kujira">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/kujira.svg">kujira</a></td>
</tr>
<tr>
    <td><strong>Linea</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#linea">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/linea.svg">linea</a></td>
</tr>
<tr>
    <td><strong>Mantle</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#mantle">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/mantle.svg">mantle</a></td>
</tr>
<tr>
    <td><strong>Moonbeam</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#moonbeam">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/moonbeam.svg">moonbeam</a></td>
</tr>
<tr>
    <td><strong>NEAR</strong></td>
    <td><a href="./blockchain-environments/near/README.md#near">near</a></td>
    <td><a href="./.gitbook/assets/chain-icons/near.svg">near</a></td>
</tr>
<tr>
    <td><strong>Neon</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#neon">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/neon.svg">neon</a></td>
</tr>
<tr>
    <td><strong>Neutron</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#neutron">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/neutron.svg">neutron</a></td>
</tr>
<tr>
    <td><strong>Oasis</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#oasis">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/oasis.svg">oasis</a></td>
</tr>
<tr>
    <td><strong>Optimism</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#optimism">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/optimism.svg">optimism</a></td>
</tr>
<tr>
    <td><strong>Optimism Sepolia</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#optimism_sepolia">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/optimism_sepolia.svg">optimism_sepolia</a></td>
</tr>
<tr>
    <td><strong>Osmosis</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#osmosis">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/osmosis.svg">osmosis</a></td>
</tr>
<tr>
    <td><strong>Polygon</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#polygon">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/polygon.svg">polygon</a></td>
</tr>
<tr>
    <td><strong>Polygon Sepolia</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#polygon_sepolia">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/polygon_sepolia.svg">polygon_sepolia</a></td>
</tr>
<tr>
    <td><strong>Provenance</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#provenance">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/provenance.svg">provenance</a></td>
</tr>
<tr>
    <td><strong>Pythnet</strong></td>
    <td><a href="./blockchain-environments/solana/README.md#pythnet">solana</a></td>
    <td><a href="./.gitbook/assets/chain-icons/pythnet.svg">pythnet</a></td>
</tr>
<tr>
    <td><strong>Rootstock</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#rootstock">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/rootstock.svg">rootstock</a></td>
</tr>
<tr>
    <td><strong>Scroll</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#scroll">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/scroll.svg">scroll</a></td>
</tr>
<tr>
    <td><strong>Seda</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#seda">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/seda.svg">seda</a></td>
</tr>
<tr>
    <td><strong>Sei</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#sei">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/sei.svg">sei</a></td>
</tr>
<tr>
    <td><strong>Seievm</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#seievm">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/seievm.svg">seievm</a></td>
</tr>
<tr>
    <td><strong>Ethereum Sepolia</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#sepolia">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/sepolia.svg">sepolia</a></td>
</tr>
<tr>
    <td><strong>Solana</strong></td>
    <td><a href="./blockchain-environments/solana/README.md#solana">solana</a></td>
    <td><a href="./.gitbook/assets/chain-icons/solana.svg">solana</a></td>
</tr>
<tr>
    <td><strong>Stargaze</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#stargaze">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/stargaze.svg">stargaze</a></td>
</tr>
<tr>
    <td><strong>Sui</strong></td>
    <td><a href="./blockchain-environments/sui/README.md#sui">sui</a></td>
    <td><a href="./.gitbook/assets/chain-icons/sui.svg">sui</a></td>
</tr>
<tr>
    <td><strong>Terra</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#terra">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/terra.svg">terra</a></td>
</tr>
<tr>
    <td><strong>Terra2</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#terra2">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/terra2.svg">terra2</a></td>
</tr>
<tr>
    <td><strong>Xlayer</strong></td>
    <td><a href="./blockchain-environments/evm/README.md#xlayer">evm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/xlayer.svg">xlayer</a></td>
</tr>
<tr>
    <td><strong>Xpla</strong></td>
    <td><a href="./blockchain-environments/cosmwasm/README.md#xpla">cosmwasm</a></td>
    <td><a href="./.gitbook/assets/chain-icons/xpla.svg">xpla</a></td>
</tr>
<!--SUPPORTED_BLOCKCHAIN_CARDS-->

</tbody></table>
