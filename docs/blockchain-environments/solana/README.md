
Details for working with the Solana environment chains

## Developer Tools

To develop contracts for Solana, you'll need to have the following tools installed:

1) [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) - Rust build tool and package manager
2) [Solana CLI tools](https://docs.solana.com/cli/install-solana-cli-tools) - CLI tools for working with Solana
3) [Anchor](https://www.anchor-lang.com/docs/installation) - Smart contract development framework

Install [Wormhole rust crates](https://lib.rs/crates/wormhole-token-bridge-solana) to interact with solana onchain programs and token bridge.

<!-- TODO: still? -->
{% hint style="warning" %}
Known issues exist with Solana version 1.15 - downgrade to Solana 1.14.14
{% endhint %}

## Addresses

Because Wormhole works with many environments, the Wormhole address format is normalized.

For Solana based chains, this means a wormhole formatted address is the base58 decoded address.

e.g. `worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth` => `0x0e0a589a41a55fbd66c52a475f2d92a6d3dc9b4747114cb9af825a98b545d3ce`

## Emitter 

The emitter address on Solana chains is a Program Derived Address which is derived by the application, normalized to the wormhole address format. 

{% hint style="info" %}
The application dev chooses whether this is a consistent address over time or changes. We strongly recommend making it consistent.
{% endhint %}


<!--SOLANA_CHAIN_DETAILS-->

# Solana

{% hint style='info' %}
The contract addresess for `testnet` are on the Solana `devnet`
{% endhint %}

## Ecosystem

- [Web site](https://solana.com/)
- [https://explorer.solana.com/](https://explorer.solana.com/)
- [Developer docs](https://solana.com/developers)

## Wormhole Details

- **Name**: `solana`
- **Chain ID**: `1`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/solana.json)

### Consistency Levels

The options for [consistencyLevel](../../components/core-contracts.md#consistencylevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Confirmed|0|
|Finalized|1|


For more information see [https://docs.solana.com/cluster/commitments](https://docs.solana.com/cluster/commitments)


### Mainnet Contracts (<code>Mainnet Beta</code> - <code>5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d</code>)

|Type|Contract|
|----|--------|
|Core|`worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth`|
|Token Bridge|`wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb`|
|NFT Bridge|`WnFt12ZrnzZrFZkt2xsNsaNWoQribnuQ5B5FrDbwDhD`|

### Testnet Contracts (<code>Devnet</code> - <code>EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG</code>)

|Type|Contract|
|----|--------|
|Core|`3u8hJUVTA4jH1wYAyUur7FFZVQ8H635K3tSHHF4ssjQ5`|
|Token Bridge|`DZnkkTmCiFWfYTfT41X3Rd1kDgozqzxWaHqsw6W4x2oe`|
|NFT Bridge|`2rHhojZ7hpu1zA91nvZmT8TqWWvMcKmmNBCr2mKTtMq4`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|`Bridge1p5gheXUvJ6jGWGeCsgPKgnE3YgdGKRVCMY9o`|
|Token Bridge|`B6RHG3mfcckmrYN1UhmJzyS1XX3fZKbkeUcpJe9Sy3FE`|
|NFT Bridge|`NFTWqJR8YnRVqPDvTJrYuLrQDitTG5AScqbeghi4zSA`|
  

<!--SOLANA_CHAIN_DETAILS-->

<!--PYTHNET_CHAIN_DETAILS-->

# pythnet

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/pythnet.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/pythnet.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/pythnet.json)

## Wormhole Details

- **Name**: `pythnet`
- **Chain ID**: `26`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/pythnet.json)







### Mainnet Contracts 

|Type|Contract|
|----|--------|
|Core|`H3fxXJ86ADW2PNuDDmZJg6mzTtPxkYCpNuQUTgmJ7AjU`|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts 

|Type|Contract|
|----|--------|
|Core|`EUrRARh92Cdc54xrDn6qzaqjA77NRrCcfbr8kPwoTL4z`|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--PYTHNET_CHAIN_DETAILS-->
