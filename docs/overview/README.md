# Overview

Higher level introduction of the concepts and motivation. Readable by all audiences.


# Overview

<mark style="color:red;">**Check out the new**</mark> [<mark style="color:blue;">**xDapp Development Book**</mark>](https://book.wormholenetwork.com/) <mark style="color:red;">**for a much more updated set of docs.**</mark>

Wormhole at its core is a decentralized notary. Wormhole works by monitoring a set of chains for messages emitted by smart contracts on those chains. The resulting messages are then routed to target chains, allowing a form of cross chain message passing.

This single primitive is enough to enable cross-chain communication protocols such as token and NFT bridges, cross-chain oracles, and all kinds of other messaging applications no one has even thought of yet. Wormhole's simplicity allows it to be faster, more efficient, and more secure than other bridge implementations due to the small scope of its design.

Currently, wormhole is secured by a guardian set of 19 nodes consisting of professional validators in the space. A list of the current set can be seen [here](https://wormholenetwork.com/en/network/).

### Design Documents

Wormhole's components are designed via specifications that can be found [here](https://github.com/certusone/wormhole/tree/dev.v2/whitepapers). These outline the reasoning behind design decisions and details specifics in more technical depth.
