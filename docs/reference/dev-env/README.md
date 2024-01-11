# Development Environment

Developers building for smart contract integration will want to get a development environment setup to allow testing the full integration, possibly including VAA generation and relaying.

## Tooling Installation

The [Worm CLI Tool](../cli-docs.md) should be installed regardless of environments chosen.

Each environment has its own set of recommended tools. To begin working with a specific environment, see the recommended tools on its [environment page](../../blockchain-environments/environments.md)

## Development Stages

Different approaches to development and testing are recommended at different stages of application development.

### Initial Development

During initial development of an on-chain application, the best option is to use the _native tools_ available in the environment.

{% hint style="info" %}
For the specific native tools recommended, see the page for the [Environment](../../blockchain-environments/environments.md) you're interested in.
{% endhint %}

For any methods the program that require some message be sent or received, it's recommended to set up some Mock Guardian or Emitter to provide signed VAAs.

{% hint style="info" %}
A Mock utility is available [here](https://github.com/wormhole-foundation/wormhole/blob/main/sdk/js/src/mock/wormhole.ts) and an example of its use can be found in the [Wormhole Scaffolding repo](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/evm/ts-test/01\_hello\_world.ts#L3)
{% endhint %}

This approach allows for more rapid prototyping and iteration without waiting for, or debugging issues related to, Wormhole.

### Integration

For integration to Wormhole and with multiple chains, the simplest option is to use the chains' testnets.

{% hint style="info" %}
In choosing which chains to use for integration testing, consider which chains in a given environment provide easy access to testnet tokens and where block times are fast.

Find links for testnet faucets in the [blockchain details section](../../blockchain-environments/environments.md)
{% endhint %}

A developer may prefer standing up a set of local validators instead of using the testnet. For this option, [Tilt](./#tilt) is available to run local instances of all the chains Wormhole supports.

{% hint style="warning" %}
The variation in host environments causing unique issues and the computational intensity of multiple simultaneous local validators can make it difficult or time consuming to setup. Prefer testnets for the simplest integration testing.
{% endhint %}

### Prepare for Deployment

Once you've finished initial development of the application and performed integration testing, you may want to set up some CI test environment.

For that, the best option is likely to be [Tilt](./#tilt) since it allows you to spin up any of the chains supported by Wormhole in a consistent environment.

## Validator Setup

If you'd like to set up a local validator environment, follow the setup guide for Tilt.

### Tilt

A full-fledged Kubernetes deployment of every chain connected to Wormhole, along with a Guardian node. Usually takes 30 min to spin up fully, but comes with all chains running out of the box.

[Full setup guide for Tilt](tilt.md)

## Deploying to public networks

### Testnet

When doing integration testing on testnets, keep in mind that there is a single Guardian node watching for transactions on various test networks. Because testnet only has a single Guardian, there's a small chance that your VAAs will not be processed. This rate is not indicative of performance on mainnet, where there are 19 Guardians watching for transactions.

The testnet contract addresses are available on the page for the each [environment](../../blockchain-environments/environments.md).

The testnet Guardian RPC configuration is available on the [SDK page](../sdk-docs/#testnet-guardian-rpc).

### Mainnet

The mainnet contract addresses are available on the page for each [environment](../../blockchain-environments/environments.md).

The mainnet Guardian RPC configuration is available on the [SDK page](../sdk-docs/#mainnet-guardian-rpc).
