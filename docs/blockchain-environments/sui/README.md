Details for working with Sui chains.

## Developer Tools

Install the Sui dev tools using cargo install

```sh
cargo install --locked \
    --git https://github.com/MystenLabs/sui.git \
    --rev 09b2081498366df936abae26eea4b2d5cafb2788 \
    sui sui-faucet
```

## Addresses

Because Wormhole works with many environments, the Wormhole address format is normalized.

For Sui based chains, no normalization is needed for standard addresses since they're already 32 bytes.

e.g. `0x84a5f374d29fc77e370014dce4fd6a55b58ad608de8074b0be5571701724da31` => `0x84a5f374d29fc77e370014dce4fd6a55b58ad608de8074b0be5571701724da31`


## Emitter 

On sui the emitter is the object id of the emitter capability.


<!--SUI_CHAIN_DETAILS-->

# Sui

## Ecosystem

- [Web site](https://sui.io/)
- [suiexplorer](https://suiexplorer.com/) | [suiscan](https://suiscan.xyz/)
- [Developer docs](https://docs.sui.io/) | [Faucet](https://docs.sui.io/build/faucet)

## Wormhole Details

- **Name**: `sui`
- **Chain ID**: `21`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/sui.json)

### Consistency Levels

The options for [consistencyLevel](../../components/core-contracts.md#consistencylevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Finalized|0|

This field is may be ignored since the chain provides instant finality.


For more information see [https://docs.sui.io/learn/architecture/consensus](https://docs.sui.io/learn/architecture/consensus)


### Mainnet Contracts (<code>35834a8a</code>)

|Type|Contract|
|----|--------|
|Core|`0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c`|
|Token Bridge|`0xc57508ee0d4595e5a8728974a4a93a787d38f339757230d441e895422c07aba9`|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>4c78adac</code>)

|Type|Contract|
|----|--------|
|Core|`0x31358d198147da50db32eda2562951d53973a0c0ad5ed738e9b17d88b213d790`|
|Token Bridge|`0x6fb10cdb7aa299e9a4308752dadecb049ff55a892de92992a1edbd7912b3d6da`|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|`0x5a5160ca3c2037f4b4051344096ef7a48ebf4400b3f385e57ea90e1628a8bde0`|
|Token Bridge|`0xa6a3da85bbe05da5bfd953708d56f1a3a023e7fb58e5a824a3d4de3791e8f690`|
|NFT Bridge|**N/A**|
  

<!--SUI_CHAIN_DETAILS-->