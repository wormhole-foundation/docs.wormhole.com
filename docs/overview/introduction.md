Introduction
------------


A single (not *too* long) page to introduce wormhole and motivate its use.

It should highlight both what it is (message passing, tooling, base layer) and what it is not (token bridge, ... what else do people think? )

It should mention cost to send messages but link off to details

It should list the currently connected chains but link off to details

Simple Diagrams to show the flow of message passing


# Introduction

{% hint style="danger" %}
## Developers please refer to the [Wormhole Book](https://book.wormhole.com) for more in-depth and technical documentation! :book:
{% endhint %}


## 📖What is Wormhole?

Wormhole is a generic message passing protocol that connects to multiple chains including Ethereum, Solana, Binance Smart Chain, Polygon, Avalanche, Algorand, Fantom, Karura, Celo, Acala, Aptos and Arbitrum.

Wormhole does this through emitting messages from one chain which are observed by a Guardian network of nodes and verified. After verification, this message is submitted to the target chain for processing.

This simple message passing primitive enables cross chain functionality. Users interact with xDapps (cross chain decentralized applications) to transfer xAssets (cross chain assets) between networks or access their xData (cross chain data) to provide them services on their current network.

On top of the Wormhole message protocol, there’s two specific applications that help concentrate liquidity for xAssets. The Portal Token Bridge and Portal NFT Bridge provide a standard message format for token and NFT transfers across the Wormhole bridge.

**What can Wormhole be used for?**

Wormhole can be used by developers to build xDapps, a new type of chain agnostic application that can take advantage of xAssets and xData. This allows for access to increased liquidity, communities, and user identity.

Some prominent examples of xDapps:

1. Cross chain exchange
   1. Using Portal, the Token Bridge built on Wormhole, a developer can build an exchange that allows deposits from any Wormhole connected chain, massively increasing the liquidity their users can interact with. A user could directly deposit ETH from Ethereum into an app running on Solana! All the developer has to do is integrate Wormhole SDK into their frontend and that deposit will get picked up by the Portal Token Bridge, and taken over to target chain.
2. Cross chain governance app
   1. Consider all the NFT collections on various networks. If a group of these collections on different networks wanted their holders to vote on a combined proposal, they could pick a “Voting” chain, and use Wormhole to shuttle all the votes from cast on their various chains to the voting chain.
3. Cross chain game
   1. A game could be built and played on a performant network like Solana, and it’s rewards issued as NFTs on a different network, for example Ethereum.

**How does Wormhole work?**

Wormhole has a Core Bridge contract deployed on all the connected networks. Wormhole Guardians run a full node for each of the connected chains, specifically listening to any events from the Core Contracts. The core contracts emit a message, which is picked up by the Guardians. The Guardians verify the message and sign it, creating a VAA (Verified Action Approval). This VAA then sits on the Guardians network where it can be retrieved by the user or by a relayer to be submitted to the target chain to process the message. Unlike other bridges, a relayer in Wormhole has no special privileges, it’s just a piece of software that shuttles messages between the Guardian network to the target chain, and is not a trusted entity.

To learn more, follow us on Twitter [@wormholecrypto.](https://twitter.com/wormholecrypto)

{% embed url="https://youtu.be/ngnWF5widJU" %}

## 🌏Join our community

* [Discord](https://discord.gg/hJfuptmg6b)
* [Twitter](https://twitter.com/wormholecrypto)
* [Medium ](https://wormholecrypto.medium.com/)
* [Telegram ](https://t.me/wormholecrypto)
