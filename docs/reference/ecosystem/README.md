# Ecosystems
<!-- TODO: everything. Descriptions should highlight advantages of given chains (most used, tps, best finality, ...) -->

<!-- TODO: slurp in number and descriptions -->
At present, there are X ecosystems supported by Wormhole, though the number of supported ecosystems is always growing.


### EVM

EVM stands for Ethereum virtual machine - the execution environment to run arbitrary code and instructions on the Ethereum network. EVM as an ecosystem has the highest Value locked in decentralised finance making it the most valuable base layer in terms of blockspace and liveliness which incentivises developers to build EVM dapps and deploy them over several rollups and evm compatible to tap into the liquidity. 8/10 blockchains with the [highest DeFi TVl](https://defillama.com/chains) are EVM-based chains. 
There are several types of EVMs based on bytecode composability and backward compatibility.  

[EVM Blockchains](.docs/reference/environments/evm/README.md) that support read-writes :
- [Ethereum](docs/reference/environments/evm/README.md#ethereum)   
- [Polygon](docs/reference/environments/evm/README.md#polygon)
- [BNB Chain](docs/reference/environments/evm/README.md#bnb-smart-chain-bsc)
- [Avalanche (C Chain)](docs/reference/environments/evm/README.md#avalanche)
- [Aurora (Near Network)](docs/reference/environments/evm/README.md#aurora)
- [Karura (Polkadot Network)](docs/reference/environments/evm/README.md#karura)
- [Acala (Polkadot Network)](docs/reference/environments/evm/README.md#acala)
- [Celo](docs/reference/environments/evm/README.md#celo)
- [Fantom](docs/reference/environments/evm/README.md#fantom)
 - [Oasis (Emerald)](docs/reference/environments/evm/README.md#oasis)

### Solana

Solana is known for its low gas fee and high transaction throughput because of its different architecture that uses the [Berekely packet filter](https://www.ibm.com/docs/en/qsip/7.4?topic=queries-berkeley-packet-filters) as the execution environment allowing it to use Rust's memory management and efficiency. 
Solana uses [QUIC](https://github.com/solana-foundation/solana-improvement-documents/pull/53) as the protocol for gossip which is an improvement from the older UDP that caused the network to stress because of spam or malicious transactions. 
Solana was one of the first blockchains to introduce parallel execution, smart contracts are written in native Rust. 

- Runtime/Execution environment -> eBPF
- Block time -> 400 milliseconds
- Consensus Mechanism -> Proof of History with [Tower BFT](https://docs.solana.com/implemented-proposals/tower-bft)


### Cosmos

Cosmos is a network of blockchains that share a common ecosystem. Cosmos is a general-purpose environment, but excels in certain areas like application-specific blockchains and the use of Cosmos-wide standards via its sdk 'modules.' It uses CosmWasm for its smart contract runtime, which is based in Rust.

- Runtime/ Execution Environment -> CosmoWasm 
- Block Time -> Depends on the specific chain but BFT block times are usually >1s. 
- Consensus Mechanism -> BFT (Byzantine Fault Tolerance)

### Algorand

Algorand is a leading blockchain on the state proof front and represents the bleeding edge of trustlessness.
Smart contracts are natively written in TEAL(Transaction Execution Approval Language) which is an assembly level language that allows developers to 

- Runtime/Execution environment -> Algorand Virtual Machine
- Block Time -> 4.5 seconds
- Consensus Mechanism -> Pure proof of stake (Fork of BFT)

### Aptos

Aptos is characterized by its optimistic approach to computation parallelization to bring increased performance. These contracts are written in Move in an object-oriented model.

- Runtime/Execution environment -> Move Virtual Machine
- Block Time-> 5 seconds
- Consensus Mechanism  -> BFT (Byzantine Fault-Tolerant)

### NEAR

NEAR is one of the first execution level sharded blockchains which allows it to handle higher transaction throughput and traffic than EVM by splitting the database into several different regional chains reducing the latency and maintaining the minimum validator hardware requirements. 

- Runtime/ Execution environment -> RISC-V
- Block Time -> 1.2 seconds
- Consensus Mechanism -> [Nightshade](https://near.org/papers/nightshade)

### Read-Only Chains

Some chains in the Wormhole ecosystem are 'Read-Only.' allowing only reads and no write or state transitions unlocked by wormhole. These chains are able to verify messages emitted from other chains in the network, but are not able to emit messages themselves. For information about these chains, check the [contracts page](TODO).
