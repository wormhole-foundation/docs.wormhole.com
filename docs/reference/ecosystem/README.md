# Ecosystems
<!-- TODO: everything. Descriptions should highlight advantages of given chains (most used, tps, best finality, ...) -->

<!-- TODO: slurp in number and descriptions -->
At present, there are X ecosystems supported by Wormhole, though the number of supported ecosystems is always growing.


### EVM

EVM stands for Ethereum virtual machine - the execution environment to run arbitrary code and instructions on the Ethereum network. EVM as an ecosystem has the highest Value locked in decentralised finance making it the most valuable base layer in terms of blockspace and liveliness which incentivises developers to build EVM dapps and deploy them over several rollups and evm compatible to tap into the liquidity.
There are several types of EVMs based on bytecode composability and backward compatibility.  

[EVM Blockchains](https://docs.wormhole.com/wormhole/blockchain-environments/evm) that support read-writes :

<!-- TODO: Dont list these here, instead link off to chains -->
    - [Ethereum](https://docs.wormhole.com/wormhole/blockchain-environments/evm#ethereum)
    - [Polygon](https://docs.wormhole.com/wormhole/blockchain-environments/evm#polygon)
    - BNB Chain](https://docs.wormhole.com/wormhole/blockchain-environments/evm#bnb-smart-chain-bsc)
    - [Avalanche (C Chain)](https://docs.wormhole.com/wormhole/blockchain-environments/evm#avalanche)
    - [Aurora (Near Network)](https://docs.wormhole.com/wormhole/blockchain-environments/evm#aurora)
    - [Karura (Polkadot Network)](https://docs.wormhole.com/wormhole/blockchain-environments/evm#karura)
    - [Acala (Polkadot Network)](https://docs.wormhole.com/wormhole/blockchain-environments/evm#acala)
    - [Celo](https://docs.wormhole.com/wormhole/blockchain-environments/evm#celo)
    - [Fantom](https://docs.wormhole.com/wormhole/blockchain-environments/evm#fantom)
    - [Oasis (Emerald)](https://docs.wormhole.com/wormhole/blockchain-environments/evm#oasis)

### Solana

Solana is known for its low gas fee and high transaction throughput because of its different architecture that uses the Berekely packet filter as the execution environment allowing it to use Rust's memory management and efficiency.

### Cosmos

Cosmos is a network of blockchains that share a common ecosystem. Cosmos is a general purpose environment, but excels in certain areas like application-specific blockchains and the use of Cosmos-wide standards via its sdk 'modules.' It uses CosmWasm for its smart contract runtime, which is based in Rust.

### Algorand

Algorand is a leading blockchain on the state proof front and represents the bleeding edge of trustlessness. These contracts are written in Python.

### Aptos

Aptos is characterized by its optimistic approach to computation parallelization to bring increased performance. These contracts are written in Move.] in an object-oriented model.

### NEAR

NEAR is characterized by its sharding technology that may allow for greater transaction capacity and security. These contracts are written in Rust.

### Read-Only Chains

Some chains in the Wormhole ecosystem are 'Read-Only.' These chains are able to verify messages emitted from other chains in the network, but are not able to emit messages themselves. For information about these chains, check the [contracts page](TODO).
