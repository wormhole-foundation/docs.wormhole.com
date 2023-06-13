# What Is Wormhole?

Wormhole is a generic **message passing protocol** that enables communication between blockchains.  

![Overview](../.gitbook/assets/introduction/high-level-flow-dark.png)

At a high level, this is accomplished in a few phases:

1) On **Source Chain** a contract calls the [**Wormhole Core Contract**](../guide/components/core-contracts.md) which emits a message.
2) From **Off chain**

   a) The nodes in the **[Guardian](../guide/components/guardian.md) Network** validate the message and sign an attestation (or [**VAA**](../guide/components/vaa.md)).

   b) A [**Relayer**](../guide/components/relayer.md) picks up the **VAA** and relays it to the **Target Chain**.

3) On the **Target Chain**, the **VAA** is verified and some action is taken based on the payload.


This simple message passing protocol enables developers and users of [xDapps](../reference/glossary.md#xdapps) built by developers to escape the confines of a single ecosystem. 


## What Isn't Wormhole?

- Wormhole is *not* a blockchain itself, it provides a means of commination between blockchains or rollups. 
- Wormhole is *not* a token bridge, though there are [protocols built on Wormhole](./ecosystem/token-bridge.md) that service this purpose.  
- Wormhole is *not* an actual wormhole, its just software. Plus you'd need a supply of [Negative Energy](https://en.wikipedia.org/wiki/Negative_energy#Wormholes) to keep it open.


# The Case For blockchain Interoperability

Because blockchains are siloed by nature, dapps built on a single chain will be constrained by the resources, features, and scale available within that single ecosystem. 

With Wormhole, dapps can take advantage of the features and resources of any chain supported by Wormhole. The dapps that integrate wormhole are referred to as xDapps.


## Advantages of xDapps

Users interacting with xDapps to transfer xAssets (cross chain assets) or pass xData (cross chain data) are able to take advantage of the best attributes of each chain they're connected to.

Consider the following list describing some of the advantages of xDapps:

- **Expanded User Base** - Rather than being limited to the users of one blockchain, any user on any blockchain in the ecosystem can interact with an xDapp.
- **Unified Liquidity** - Liquidity fragmentation is a major problem in the current ecosystem. Unlike traditional tokens, xAssets can be pooled and moved anywhere.
- **Decentralization** - Cross-chain solutions today usually involve centralized exchanges or bridges. However, Wormhole has been designed to be decentralized from day one, and eventually totally trustless.
- **Increased Performance** - xDapps are able to utilize the strengths of each blockchain. With xDapps, expensive computations can be offloaded onto high-performance platforms, final settlement can take place on a preferred chain, and data can be stored wherever is cheapest.
- **Broader Market Reach** - Because xAssets move freely through the ecosystem, they can be listed on a variety of exchanges and custodied on any blockchain.
- **Increased Extensibility and Composability** - xDapps can utilize anything across the ecosystem, including other xDapps, expanding upon the composability and openness of smart contracts. 
- **Future proofing** - As new environments and protocols join the decentralized ecosystem, the connected nature of the Wormhole ecosystem allows existing protocols to expand and support them.

<!-- TODO: can we say exponential? reword -->

With Wormhole and xDapps, the design space and scale possible for decentralized applications grows as each new chain is connected. 

<!-- TODO: credit for wikipedia image -->
![Network Effect](../.gitbook/assets/network-effect.png)

Consider the following examples of potential applications that are now possible with Wormhole: 

1. Cross chain exchange: Using [Wormhole Connect](../guide/tutorials/quick-start/wh-connect.md), a developer can build an exchange that allows deposits from any Wormhole connected chain, massively increasing the liquidity their users can access. 
2. Cross chain governance: If a group of NFT collections on different networks wanted their holders to vote on a combined proposal, they could pick a "voting" chain, and use Wormhole communicate votes from cast on their disparate chains to the voting chain.
3. Cross chain game: A game could be built and played on a performant network like Solana, and it’s rewards issued as NFTs on a different network, for example Ethereum.


## Supported Blockchains 

Wormhole already supports a number of Blockchain [Environments](../reference/environments/README.md)

### Currently Supported Blockchains

<!--SUPPORTED_BLOCKCHAIN_LIST-->
 - [Solana](https://solana.com/)
 - [Ethereum](https://ethereum.org/)
 - [BNB Smart Chain (BSC)](https://www.bnbchain.org/en/smartChain)
 - [Polygon](https://polygon.technology/)
 - [Avalanche](https://www.avax.network/)
 - [Oasis](https://oasisprotocol.org/)
 - [Algorand](https://algorand.com)
 - [Aurora](https://aurora.dev/)
 - [Fantom](https://fantom.foundation/)
 - [Karura](https://acala.network/karura)
 - [Acala](https://acala.network/)
 - [Klaytn](https://klaytn.foundation/)
 - [Celo](https://celo.org/)
 - [NEAR](https://near.org/)
 - [Moonbeam](https://moonbeam.network/)
 - [Neon](https://neon-labs.org/)
 - [Injective](https://injective.com/)
 - [Sui](https://sui.io/)
 - [Aptos](https://aptosfoundation.org/)
 - [Arbitrum](https://arbitrum.io/)
 - [Optimisim](https://www.optimism.io/)
 - [Gnosis](https://www.gnosis.io/)
 - [Base](https://base.org/)
 - [Sei](https://www.sei.io/)
<!--SUPPORTED_BLOCKCHAIN_LIST-->


# Design Documents

Wormhole's components are designed via specifications that can be found [here](https://github.com/wormhole-foundation/wormhole/tree/main/whitepapers). These outline the reasoning behind design decisions and details specifics in more technical depth.