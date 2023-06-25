
Developers building for smart contract integration will want to get a development environment setup to allow testing the full integration, possibly including VAA generation and relaying. 

# Tooling Installation 

The [Worm CLI Tool](../cli-docs/README.md) should be installed regardless of environments chosen.

Each environment has its own set of recommended tools. To begin working with a specific environment, see the recommended tools on its [environment page](../environments/README.md)

# Validator Setup

If you intend to work with signed VAAs, the bare minimum Wormhole environment is a single blockchain node and a [Validator](../../reference/glossary.md#validator) node. 

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
