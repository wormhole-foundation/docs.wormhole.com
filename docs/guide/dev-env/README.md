
Developers building for smart contract integration will want to get a development environment setup to allow testing the full integration, possibly including VAA generation and relaying. 


## Environment Setup

The bare minimum Wormhole environment is a single blockchain node and a [Validator](../../reference/glossary.md#validator) node. 

However, as you get deeper into cross-chain development, you'll likely find yourself with a growing number of components, dependencies, and teammates in the picture making your development environment more complex. Here are some of the considerations you should have in mind when choosing a development environment which will be well suited for your xDapp.

### What components do I need now? What components will I need in the future?

- You may be able to get a lot done with just an EVM chain and a Guardian. However, as your application gets more sophisticated, components like relayers, front ends, automated tests, databases, explorers, and other blockchains are likely to get added into the environment.

### What are my dependencies?

- If your smart contracts have no dependencies, it may be possible for you to develop in a vacuum.

- If your smart contracts does have dependencies, there are several options that range from deploying your dependencies in [Tilt](/guide/dev-env/tilt.md) to simulating an existing testnet/mainnet in [Foundry](https://github.com/foundry-rs/foundry) to working directly in testnet alongside other teams.

### How am I going to collaborate?

- You should consider how your teammates or collaborators are going to work in this environment from the start. There are some basic considerations like "how will they access it", but also some subtler points such as ensuring that contracts will deploy deterministically and that automated tests can be trusted to run reliably. The two paths to accomplish this are to use a public environment (testnet), or to ensure the local environment is well controlled (like tilt).



## Wormhole Local Validator

This is the simplest custom environment. It's BYOB (Bring your own Blockchain) with the ability to run your own local validator nodes and connect them to a single Guardian running on docker. Initial setup can take upwards of 500 seconds, but after the image is built, bringing it up and down should take less than a minute. This environment requires installing the software for the validator nodes locally.

[Full setup guide for Wormhole Local Validator](./wormhole-local-validator.md)

## Tilt

A full-fledged Kubernetes deployment of every chain connected to Wormhole, along with a Guardian node. Usually takes 30 min to spin up fully, but comes with all chains running out of the box. 

[Full setup guide for Tilt](./tilt.md)



# Deploying to public networks

## Testnet

If you want to test on the various test and devnets of existing connected chains, there's a single Guardian node watching for transactions on various test networks. You can find the contracts and RPC configuration in the [Reference](../../reference/environments/README.md) section.

Because testnet only has a single Guardian, there's a small chance that your VAAs will not be processed. This rate is not indicative of performance on mainnet, where there are 19 Guardians watching for transactions.

## Mainnet

When you're ready to deploy to mainnet, you can find the mainnet contracts in the [Reference](../../reference/environments/README.md) section.
