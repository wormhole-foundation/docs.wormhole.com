
The [Wormhole Local Validator](https://github.com/wormhole-foundation/xdapp-book/tree/main/projects/wormhole-local-validator) is meant to be a simple custom environment. It consists only of a Dockerized Guardian image, and some utility tooling to aid with contract management. 

Follow the pattern in existing chain setup scripts to set it up with any blockchain you'd like.

### Is WLV Right for You?

Here's a succinct list of the pros and cons of the environment, so you can decide if it's the right fit for you.

**Pros**

- Lightweight, low system resource demand.
- Fast iteration times.
- Can be added into an existing blockchain development setup.

**Cons**

- You may end up reinventing the tilt/testnet environment as you add more components.

## Setting up Wormhole Local Validator

You will need Docker running in order to set up WLV. If you're on desktop, [Docker Desktop](https://docs.docker.com/get-docker/) is generally the best choice, though [Docker Engine](https://docs.docker.com/engine/) works fine too.

From there, you just need nodes for the blockchains you're interested in developing on. Included in the tool are EVM and Solana local validators, as well as scripts to deploy the necessary Wormhole contracts to your local instances.

Further information can be found in the project's [README](https://github.com/wormhole-foundation/xdapp-book/blob/main/projects/wormhole-local-validator/README.md).

## Dependencies

You will need Docker; if you're developing on your computer you should get [Docker Desktop](https://docs.docker.com/get-docker/), but if you're in a headless VM, install [Docker Engine](https://docs.docker.com/engine/). Make sure to have Docker running before you run any of the following commands.

To run EVM chains you will need [Ganache](https://github.com/trufflesuite/ganache#command-line-use).  
To run Solana chains you will need [Solana](https://docs.solana.com/cli/install-solana-cli-tools) installed.

## Run EVM Chains

In the terminal, run

```sh
npm run evm
``` 

This will start up two EVM chains, one with Wormhole Chain ID 2 (like ETH) and one with Wormhole Chain ID 4 (like BSC).

It will then deploy the contracts for

  - The Wormhole Core Bridge (`0xC89Ce4735882C9F0f0FE26686c53074E09B0D550`)
  - The Token Bridge (`0x0290FB167208Af455bB137780163b7B7a9a10C16`)
  - The NFT Bridge (`0x26b4afb60d6c903165150c6f0aa14f8016be4aec`)  

It will also take care of deploying

  - A Test Token (TKN at `0x2D8BE6BF0baA74e0A907016679CaE9190e80dD0A`)
  - A Test NFT (`0x5b9b42d6e4B2e4Bf8d42Eba32D46918e10899B66`)
  - A  WETH Contract (`0xDDb64fE46a91D46ee29420539FC25FD07c5FEa3E`)

They'll use the standard Wormhole test mnemonic and the first key for deployment and payment.

- **Mnemonic**: `myth like bonus scare over problem client lizard pioneer submit female collect`
- **Public Key**: `0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1` 
- **Private Key**: `0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d`

## Run Solana Chain

In the terminal, run

```sh
npm run solana
``` 
This will start up a Solana chain and (chain id 1).

<!-- 
TODO: Add emitter registrations for token bridge.
-->

It will then deploy 
- The Core Bridge (`Bridge1p5gheXUvJ6jGWGeCsgPKgnE3YgdGKRVCMY9o`)
- The Token Bridge (`B6RHG3mfcckmrYN1UhmJzyS1XX3fZKbkeUcpJe9Sy3FE`)


## Run Wormhole

After you have the dependencies installed and the chains running, you can run Wormhole.

To pull down and start the Wormhole Guardian image, run

```sh
npm run wormhole
```

## Troubleshooting

- Anvil isn't working  

  While we recommend Foundry's Forge tool for compiling and deploying code elsewhere in these docs, we do not at this time recommend using anvil for guardiand; this is because guardiand is spec'd against go-ethereum, and anvil is out of spec for how it reports block headers (non left padding to normalize length), which means go-ethereum reacts abnormally and can't read anvil headers.
