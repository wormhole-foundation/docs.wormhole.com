
Details for working with EVM environment chains.

## Developer tools

The recommended development tool for EVM environments is [Foundry](https://book.getfoundry.sh/getting-started/installation).


## Addresses

Because Wormhole works with many environments, the Wormhole address format is normalized. 

For EVM chains, this means a wormhole formatted address is the 20 byte EVM standard address left padded with `0`s.

e.g. `0xd8da6bf26964af9d7eed9e03e53415d37aa96045` => `0x000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045`

## Emitter 

The emitter address on EVM chains is the contract address, normalized to the wormhole address format.

<!--ETHEREUM_CHAIN_DETAILS-->

# Ethereum

{% hint style='info' %}
Deployed contracts are also available on the [Sepolia](#sepolia) testnet.
{% endhint %}

## Ecosystem

- [Web site](https://ethereum.org/)
- [https://etherscan.io/](https://etherscan.io/)
- [https://ethereum.org/en/developers/docs/](https://ethereum.org/en/developers/docs/)

## Wormhole Details

- **Name**: `ethereum`
- **Chain ID**: `2`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
|Safe|201|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://www.alchemy.com/overviews/ethereum-commitment-levels](https://www.alchemy.com/overviews/ethereum-commitment-levels)


### Mainnet Contracts (<code>1</code>)

|Type|Contract|
|----|--------|
|Core|`0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B`|
|Token Bridge|`0x3ee18B2214AFF97000D974cf647E7C347E8fa585`|
|NFT Bridge|`0x6FFd7EdE62328b3Af38FCD61461Bbfc52F5651fE`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|
|CCTP|`0xAaDA05BD399372f0b0463744C09113c137636f6a`|

### Testnet Contracts (<code>Goerli</code> - <code>5</code>)

|Type|Contract|
|----|--------|
|Core|`0x706abc4E45D419950511e474C7B9Ed348A4a716c`|
|Token Bridge|`0xF890982f9310df57d00f659cf4fd87e65adEd8d7`|
|NFT Bridge|`0xD8E4C2DbDd2e2bd8F1336EA691dBFF6952B1a6eB`|
|Relayer|`0x28D8F1Be96f97C1387e94A53e00eCcFb4E75175a`|
|MockProvider|`0xD1463B4fe86166768d2ff51B1A928beBB5c9f375`|
|MockIntegration|`0xb81bc199b73AB34c393a4192C163252116a03370`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|`0xC89Ce4735882C9F0f0FE26686c53074E09B0D550`|
|Token Bridge|`0x0290FB167208Af455bB137780163b7B7a9a10C16`|
|NFT Bridge|`0x26b4afb60d6c903165150c6f0aa14f8016be4aec`|
|Relayer|`0xb98F46E96cb1F519C333FdFB5CCe0B13E0300ED4`|
|MockProvider|`0x1ef9e15c3bbf0555860b5009B51722027134d53a`|
|MockIntegration|`0x0eb0dD3aa41bD15C706BC09bC03C002b7B85aeAC`|
  

<!--ETHEREUM_CHAIN_DETAILS-->

# Other EVM Chains

Besides Ethereum, a number of EVM chains are supported.


<!--ACALA_CHAIN_DETAILS-->

# Acala

## Ecosystem

- [Web site](https://acala.network/)
- [https://acala.subscan.io/](https://acala.subscan.io/) | [https://blockscout.acala.network/](https://blockscout.acala.network/)
- [Developer docs](https://evmdocs.acala.network/) | [Faucet](https://evmdocs.acala.network/tooling/faucet)

## Wormhole Details

- **Name**: `acala`
- **Chain ID**: `12`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized



### Mainnet Contracts (<code>787</code>)

|Type|Contract|
|----|--------|
|Core|`0xa321448d90d4e5b0A732867c18eA198e75CAC48E`|
|Token Bridge|`0xae9d7fe007b3327AA64A32824Aaac52C42a6E624`|
|NFT Bridge|`0xb91e3638F82A1fACb28690b37e3aAE45d2c33808`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>597</code>)

|Type|Contract|
|----|--------|
|Core|`0x4377B49d559c0a9466477195C6AdC3D433e265c0`|
|Token Bridge|`0xebA00cbe08992EdD08ed7793E07ad6063c807004`|
|NFT Bridge|`0x96f1335e0AcAB3cfd9899B30b2374e25a2148a6E`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--ACALA_CHAIN_DETAILS-->
<!--ARBITRUM_CHAIN_DETAILS-->

# Arbitrum

## Ecosystem

- [Web site](https://arbitrum.io/)
- [Arbitrum Explorer](https://arbiscan.io/)
- [Developer Docs](https://developer.arbitrum.io/getting-started-devs)

## Wormhole Details

- **Name**: `arbitrum`
- **Chain ID**: `23`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/arbitrum.json)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://developer.arbitrum.io/tx-lifecycle](https://developer.arbitrum.io/tx-lifecycle)


### Mainnet Contracts (<code>Arbitrum One</code> - <code>42161</code>)

|Type|Contract|
|----|--------|
|Core|`0xa5f208e072434bC67592E4C49C1B991BA79BCA46`|
|Token Bridge|`0x0b2402144Bb366A632D14B83F244D2e0e21bD39c`|
|NFT Bridge|`0x3dD14D553cFD986EAC8e3bddF629d82073e188c8`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|
|CCTP|`0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c`|

### Testnet Contracts (<code>Goerli</code> - <code>421613</code>)

|Type|Contract|
|----|--------|
|Core|`0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e`|
|Token Bridge|`0x23908A62110e21C04F3A4e011d24F901F911744A`|
|NFT Bridge|`0xEe3dB83916Ccdc3593b734F7F2d16D630F39F1D0`|
|Relayer|`0xAd753479354283eEE1b86c9470c84D42f229FF43`|
|MockProvider|`0x90995DBd1aae85872451b50A569dE947D34ac4ee`|
|MockIntegration|`0x0de48f34E14d08934DA1eA2286Be1b2BED5c062a`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--ARBITRUM_CHAIN_DETAILS-->
<!--AURORA_CHAIN_DETAILS-->

# Aurora

## Ecosystem

- [Web site](https://aurora.dev/)
- [Block Explorer](https://explorer.aurora.dev/)
- [Developer docs](https://doc.aurora.dev/) | [Faucet](https://aurora.dev/faucet)

## Wormhole Details

- **Name**: `aurora`
- **Chain ID**: `9`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)







### Mainnet Contracts (<code>1313161554</code>)

|Type|Contract|
|----|--------|
|Core|`0xa321448d90d4e5b0A732867c18eA198e75CAC48E`|
|Token Bridge|`0x51b5123a7b0F9b2bA265f9c4C8de7D78D52f510F`|
|NFT Bridge|`0x6dcC0484472523ed9Cdc017F711Bcbf909789284`|

### Testnet Contracts (<code>1313161555</code>)

|Type|Contract|
|----|--------|
|Core|`0xBd07292de7b505a4E803CEe286184f7Acf908F5e`|
|Token Bridge|`0xD05eD3ad637b890D68a854d607eEAF11aF456fba`|
|NFT Bridge|`0x8F399607E9BA2405D87F5f3e1B78D950b44b2e24`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--AURORA_CHAIN_DETAILS-->
<!--AVALANCHE_CHAIN_DETAILS-->

# Avalanche

## Ecosystem

- [Web site](https://www.avax.network/)
- [C-Chain Block Explorer](https://snowtrace.io/) | [https://subnets.avax.network/](https://subnets.avax.network/)
- [Developer docs](https://docs.avax.network/) | [Faucet](https://core.app/tools/testnet-faucet/?subnet=c&token=c)

## Wormhole Details

- **Name**: `avalanche`
- **Chain ID**: `6`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Finalized|0|

This field is may be ignored since the chain provides instant finality.


For more information see [https://docs.avax.network/build/dapp/advanced/integrate-exchange#determining-finality](https://docs.avax.network/build/dapp/advanced/integrate-exchange#determining-finality)


### Mainnet Contracts (<code>C-Chain</code> - <code>43114</code>)

|Type|Contract|
|----|--------|
|Core|`0x54a8e5f9c4CbA08F9943965859F6c34eAF03E26c`|
|Token Bridge|`0x0e082F06FF657D94310cB8cE8B0D9a04541d8052`|
|NFT Bridge|`0xf7B6737Ca9c4e08aE573F75A97B73D7a813f5De5`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|
|CCTP|`0x09Fb06A271faFf70A651047395AaEb6265265F13`|

### Testnet Contracts (<code>Fuji</code> - <code>43113</code>)

|Type|Contract|
|----|--------|
|Core|`0x7bbcE28e64B3F8b84d876Ab298393c38ad7aac4C`|
|Token Bridge|`0x61E44E506Ca5659E6c0bba9b678586fA2d729756`|
|NFT Bridge|`0xD601BAf2EEE3C028344471684F6b27E789D9075D`|
|Relayer|`0xA3cF45939bD6260bcFe3D66bc73d60f19e49a8BB`|
|MockProvider|`0x60a86b97a7596eBFd25fb769053894ed0D9A8366`|
|MockIntegration|`0x5E52f3eB0774E5e5f37760BD3Fca64951D8F74Ae`|
|CCTP|`0x58f4c17449c90665891c42e14d34aae7a26a472e`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--AVALANCHE_CHAIN_DETAILS-->
<!--BASE_CHAIN_DETAILS-->

# Base

## Ecosystem

- [Web site](https://base.org/)
- [Etherscan](https://goerli.basescan.org/) | [Blockscout](https://base-goerli.blockscout.com/)
- [Developer docs](https://docs.base.org/)

## Wormhole Details

- **Name**: `base`
- **Chain ID**: `30`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)







### Mainnet Contracts (<code>Base</code> - <code>8453</code>)

|Type|Contract|
|----|--------|
|Core|`0xbebdb6C8ddC678FfA9f8748f85C815C556Dd8ac6`|
|Token Bridge|`0x8d2de8d2f73F1F4cAB472AC9A881C9b123C79627`|
|NFT Bridge|`0xDA3adC6621B2677BEf9aD26598e6939CF0D92f88`|
|Relayer|`0x706f82e9bb5b0813501714ab5974216704980e31`|
|CCTP|`0x03faBB06Fa052557143dC28eFCFc63FC12843f1D`|

### Testnet Contracts (<code>Base Goerli</code> - <code>84531</code>)

|Type|Contract|
|----|--------|
|Core|`0x23908A62110e21C04F3A4e011d24F901F911744A`|
|Token Bridge|`0xA31aa3FDb7aF7Db93d18DDA4e19F811342EDF780`|
|NFT Bridge|`0xF681d1cc5F25a3694E348e7975d7564Aa581db59`|
|Relayer|`0xea8029CD7FCAEFFcD1F53686430Db0Fc8ed384E1`|
|MockProvider|`0x60a86b97a7596eBFd25fb769053894ed0D9A8366`|
|MockIntegration|`0x9Ee656203B0DC40cc1bA3f4738527779220e3998`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--BASE_CHAIN_DETAILS-->
<!--BSC_CHAIN_DETAILS-->

# BNB Smart Chain

## Ecosystem

- [Web site](https://www.bnbchain.org/en/smartChain)
- [Etherscan](https://bscscan.com/)
- [Developer docs](https://docs.bnbchain.org/docs/learn/intro) | [Faucet](https://testnet.binance.org/faucet-smart/)

## Wormhole Details

- **Name**: `bsc`
- **Chain ID**: `4`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
|Safe|201|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://docs.bnbchain.org/docs/learn/consensus](https://docs.bnbchain.org/docs/learn/consensus)


### Mainnet Contracts (<code>56</code>)

|Type|Contract|
|----|--------|
|Core|`0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B`|
|Token Bridge|`0xB6F6D86a8f9879A9c87f643768d9efc38c1Da6E7`|
|NFT Bridge|`0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>97</code>)

|Type|Contract|
|----|--------|
|Core|`0x68605AD7b15c732a30b1BbC62BE8F2A509D74b4D`|
|Token Bridge|`0x9dcF9D205C9De35334D646BeE44b2D2859712A09`|
|NFT Bridge|`0xcD16E5613EF35599dc82B24Cb45B5A93D779f1EE`|
|Relayer|`0x80aC94316391752A193C1c47E27D382b507c93F3`|
|MockProvider|`0x60a86b97a7596eBFd25fb769053894ed0D9A8366`|
|MockIntegration|`0xb6A04D6672F005787147472Be20d39741929Aa03`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|`0xC89Ce4735882C9F0f0FE26686c53074E09B0D550`|
|Token Bridge|`0x0290FB167208Af455bB137780163b7B7a9a10C16`|
|NFT Bridge|`0x26b4afb60d6c903165150c6f0aa14f8016be4aec`|
|Relayer|`0xb98F46E96cb1F519C333FdFB5CCe0B13E0300ED4`|
|MockProvider|`0x1ef9e15c3bbf0555860b5009B51722027134d53a`|
|MockIntegration|`0x0eb0dD3aa41bD15C706BC09bC03C002b7B85aeAC`|
  

<!--BSC_CHAIN_DETAILS-->
<!--CELO_CHAIN_DETAILS-->

# Celo

## Ecosystem

- [Web site](https://celo.org/)
- [https://explorer.celo.org/mainnet/](https://explorer.celo.org/mainnet/) | [https://celoscan.io/](https://celoscan.io/)
- [Developer docs](https://docs.celo.org/) | [Faucet](https://faucet.celo.org/alfajores)

## Wormhole Details

- **Name**: `celo`
- **Chain ID**: `14`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized



### Mainnet Contracts (<code>42220</code>)

|Type|Contract|
|----|--------|
|Core|`0xa321448d90d4e5b0A732867c18eA198e75CAC48E`|
|Token Bridge|`0x796Dff6D74F3E27060B71255Fe517BFb23C93eed`|
|NFT Bridge|`0xA6A377d75ca5c9052c9a77ED1e865Cc25Bd97bf3`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>Alfajores</code> - <code>44787</code>)

|Type|Contract|
|----|--------|
|Core|`0x88505117CA88e7dd2eC6EA1E13f0948db2D50D56`|
|Token Bridge|`0x05ca6037eC51F8b712eD2E6Fa72219FEaE74E153`|
|NFT Bridge|`0xaCD8190F647a31E56A656748bC30F69259f245Db`|
|Relayer|`0x306B68267Deb7c5DfCDa3619E22E9Ca39C374f84`|
|MockProvider|`0x60a86b97a7596eBFd25fb769053894ed0D9A8366`|
|MockIntegration|`0x7f1d8E809aBB3F6Dc9B90F0131C3E8308046E190`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--CELO_CHAIN_DETAILS-->
<!--FANTOM_CHAIN_DETAILS-->

# Fantom

## Ecosystem

- [Web site](https://fantom.foundation/)
- [https://ftmscan.com/](https://ftmscan.com/)
- [Developer docs](https://docs.fantom.foundation/) | [Faucet](https://faucet.fantom.network/)

## Wormhole Details

- **Name**: `fantom`
- **Chain ID**: `10`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized



### Mainnet Contracts (<code>250</code>)

|Type|Contract|
|----|--------|
|Core|`0x126783A6Cb203a3E35344528B26ca3a0489a1485`|
|Token Bridge|`0x7C9Fc5741288cDFdD83CeB07f3ea7e22618D79D2`|
|NFT Bridge|`0xA9c7119aBDa80d4a4E0C06C8F4d8cF5893234535`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>4002</code>)

|Type|Contract|
|----|--------|
|Core|`0x1BB3B4119b7BA9dfad76B0545fb3F531383c3bB7`|
|Token Bridge|`0x599CEa2204B4FaECd584Ab1F2b6aCA137a0afbE8`|
|NFT Bridge|`0x63eD9318628D26BdCB15df58B53BB27231D1B227`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--FANTOM_CHAIN_DETAILS-->
<!--GNOSIS_CHAIN_DETAILS-->

# Gnosis

## Ecosystem

- [Web site](https://www.gnosis.io/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/gnosis.json)
- [Developer docs](https://docs.gnosischain.com/developers/overview) | [Faucet](https://faucet.gnosischain.com/)

## Wormhole Details

- **Name**: `gnosis`
- **Chain ID**: `25`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)







### Mainnet Contracts (<code>100</code>)

|Type|Contract|
|----|--------|
|Core|`0xa321448d90d4e5b0A732867c18eA198e75CAC48E`|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>Chaido</code> - <code>10200</code>)

|Type|Contract|
|----|--------|
|Core|`0xE4eacc10990ba3308DdCC72d985f2a27D20c7d03`|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--GNOSIS_CHAIN_DETAILS-->
<!--KARURA_CHAIN_DETAILS-->

# Karura

## Ecosystem

- [Web site](https://acala.network/karura)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/karura.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/karura.json)

## Wormhole Details

- **Name**: `karura`
- **Chain ID**: `11`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://wiki.polkadot.network/docs/learn-consensus](https://wiki.polkadot.network/docs/learn-consensus)


### Mainnet Contracts (<code>686</code>)

|Type|Contract|
|----|--------|
|Core|`0xa321448d90d4e5b0A732867c18eA198e75CAC48E`|
|Token Bridge|`0xae9d7fe007b3327AA64A32824Aaac52C42a6E624`|
|NFT Bridge|`0xb91e3638F82A1fACb28690b37e3aAE45d2c33808`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>596</code>)

|Type|Contract|
|----|--------|
|Core|`0xE4eacc10990ba3308DdCC72d985f2a27D20c7d03`|
|Token Bridge|`0xd11De1f930eA1F7Dd0290Fe3a2e35b9C91AEFb37`|
|NFT Bridge|`0x0A693c2D594292B6Eb89Cb50EFe4B0b63Dd2760D`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--KARURA_CHAIN_DETAILS-->
<!--KLAYTN_CHAIN_DETAILS-->

# Klaytn

## Ecosystem

- [Web site](https://klaytn.foundation/)
- [Klaytnfinder](https://www.klaytnfinder.io/) | [Klaytnscope](https://scope.klaytn.com/)
- [Developer docs](https://docs.klaytn.foundation/) | [Faucet](https://baobab.wallet.klaytn.foundation/faucet)

## Wormhole Details

- **Name**: `klaytn`
- **Chain ID**: `13`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized



### Mainnet Contracts (<code>8217</code>)

|Type|Contract|
|----|--------|
|Core|`0x0C21603c4f3a6387e241c0091A7EA39E43E90bb7`|
|Token Bridge|`0x5b08ac39EAED75c0439FC750d9FE7E1F9dD0193F`|
|NFT Bridge|`0x3c3c561757BAa0b78c5C025CdEAa4ee24C1dFfEf`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>Baobab</code> - <code>1001</code>)

|Type|Contract|
|----|--------|
|Core|`0x1830CC6eE66c84D2F177B94D544967c774E624cA`|
|Token Bridge|`0xC7A13BE098720840dEa132D860fDfa030884b09A`|
|NFT Bridge|`0x94c994fC51c13101062958b567e743f1a04432dE`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--KLAYTN_CHAIN_DETAILS-->
<!--MOONBEAM_CHAIN_DETAILS-->

# Moonbeam

## Ecosystem

- [Web site](https://moonbeam.network/)
- [Moonbeam EVM Block Explorer](https://moonscan.io/)
- [Developer docs](https://docs.moonbeam.network/) | [Faucet](https://faucet.moonbeam.network/)

## Wormhole Details

- **Name**: `moonbeam`
- **Chain ID**: `16`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://docs.moonbeam.network/builders/build/moonbeam-custom-api/#finality-rpc-endpoints](https://docs.moonbeam.network/builders/build/moonbeam-custom-api/#finality-rpc-endpoints)


### Mainnet Contracts (<code>1284</code>)

|Type|Contract|
|----|--------|
|Core|`0xC8e2b0cD52Cf01b0Ce87d389Daa3d414d4cE29f3`|
|Token Bridge|`0xb1731c586ca89a23809861c6103f0b96b3f57d92`|
|NFT Bridge|`0x453cfbe096c0f8d763e8c5f24b441097d577bde2`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>Moonbase-Alphanet</code> - <code>1287</code>)

|Type|Contract|
|----|--------|
|Core|`0xa5B7D85a8f27dd7907dc8FdC21FA5657D5E2F901`|
|Token Bridge|`0xbc976D4b9D57E57c3cA52e1Fd136C45FF7955A96`|
|NFT Bridge|`0x98A0F4B96972b32Fcb3BD03cAeB66A44a6aB9Edb`|
|Relayer|`0x0591C25ebd0580E0d4F27A82Fc2e24E7489CB5e0`|
|MockProvider|`0x60a86b97a7596eBFd25fb769053894ed0D9A8366`|
|MockIntegration|`0x3bF0c43d88541BBCF92bE508ec41e540FbF28C56`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--MOONBEAM_CHAIN_DETAILS-->
<!--NEON_CHAIN_DETAILS-->

# Neon

## Ecosystem

- [Web site](https://neon-labs.org/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/neon.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/neon.json)

## Wormhole Details

- **Name**: `neon`
- **Chain ID**: `17`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)







### Mainnet Contracts (<code>245022934</code>)

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>245022940</code>)

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--NEON_CHAIN_DETAILS-->
<!--OASIS_CHAIN_DETAILS-->

# Oasis

## Ecosystem

- [Web site](https://oasisprotocol.org/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/oasis.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/oasis.json)

## Wormhole Details

- **Name**: `oasis`
- **Chain ID**: `7`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)







### Mainnet Contracts (<code>42262</code>)

|Type|Contract|
|----|--------|
|Core|`0xfE8cD454b4A1CA468B57D79c0cc77Ef5B6f64585`|
|Token Bridge|`0x5848C791e09901b40A9Ef749f2a6735b418d7564`|
|NFT Bridge|`0x04952D522Ff217f40B5Ef3cbF659EcA7b952a6c1`|

### Testnet Contracts (<code>42261</code>)

|Type|Contract|
|----|--------|
|Core|`0xc1C338397ffA53a2Eb12A7038b4eeb34791F8aCb`|
|Token Bridge|`0x88d8004A9BdbfD9D28090A02010C19897a29605c`|
|NFT Bridge|`0xC5c25B41AB0b797571620F5204Afa116A44c0ebA`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--OASIS_CHAIN_DETAILS-->
<!--OPTIMISM_CHAIN_DETAILS-->

# Optimism

## Ecosystem

- [Web site](https://www.optimism.io/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/optimism.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/optimism.json)

## Wormhole Details

- **Name**: `optimism`
- **Chain ID**: `24`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://community.optimism.io/docs/developers/bridge/comm-strategies/](https://community.optimism.io/docs/developers/bridge/comm-strategies/)


### Mainnet Contracts (<code>10</code>)

|Type|Contract|
|----|--------|
|Core|`0xEe91C335eab126dF5fDB3797EA9d6aD93aeC9722`|
|Token Bridge|`0x1D68124e65faFC907325e3EDbF8c4d84499DAa8b`|
|NFT Bridge|`0xfE8cD454b4A1CA468B57D79c0cc77Ef5B6f64585`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|
|CCTP|`0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c`|

### Testnet Contracts (<code>Optimism Goerli</code> - <code>420</code>)

|Type|Contract|
|----|--------|
|Core|`0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35`|
|Token Bridge|`0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e`|
|NFT Bridge|`0x23908A62110e21C04F3A4e011d24F901F911744A`|
|Relayer|`0x01A957A525a5b7A72808bA9D10c389674E459891`|
|MockProvider|`0xfCe1Df3EF22fe5Cb7e2f5988b7d58fF633a313a7`|
|MockIntegration|`0x421e0bb71dDeeC727Af79766423d33D8FD7dB963`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--OPTIMISM_CHAIN_DETAILS-->
<!--POLYGON_CHAIN_DETAILS-->

# Polygon

## Ecosystem

- [Web site](https://polygon.technology/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/polygon.json)
- [Developer docs](https://wiki.polygon.technology/) | [Faucet](https://faucet.polygon.technology/)

## Wormhole Details

- **Name**: `polygon`
- **Chain ID**: `5`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://docs.polygon.technology/pos/architecture/heimdall/checkpoints/](https://docs.polygon.technology/pos/architecture/heimdall/checkpoints/)


### Mainnet Contracts (<code>137</code>)

|Type|Contract|
|----|--------|
|Core|`0x7A4B5a56256163F07b2C80A7cA55aBE66c4ec4d7`|
|Token Bridge|`0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE`|
|NFT Bridge|`0x90BBd86a6Fe93D3bc3ed6335935447E75fAb7fCf`|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|
|CCTP|`0x0FF28217dCc90372345954563486528aa865cDd6`|

### Testnet Contracts (<code>Mumbai</code> - <code>80001</code>)

|Type|Contract|
|----|--------|
|Core|`0x0CBE91CF822c73C2315FB05100C2F714765d5c20`|
|Token Bridge|`0x377D55a7928c046E18eEbb61977e714d2a76472a`|
|NFT Bridge|`0x51a02d0dcb5e52F5b92bdAA38FA013C91c7309A9`|
|Relayer|`0x0591C25ebd0580E0d4F27A82Fc2e24E7489CB5e0`|
|MockProvider|`0x60a86b97a7596eBFd25fb769053894ed0D9A8366`|
|MockIntegration|`0x3bF0c43d88541BBCF92bE508ec41e540FbF28C56`|
|CCTP|`0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--POLYGON_CHAIN_DETAILS-->

<!--ROOTSTOCK_CHAIN_DETAILS-->

# Rootstock

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/rootstock.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/rootstock.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/rootstock.json)

## Wormhole Details

- **Name**: `rootstock`
- **Chain ID**: `33`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/rootstock.json)







### Mainnet Contracts (<code>30</code>)

|Type|Contract|
|----|--------|
|Core|`0xbebdb6C8ddC678FfA9f8748f85C815C556Dd8ac6`|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>31</code>)

|Type|Contract|
|----|--------|
|Core|`0xbebdb6C8ddC678FfA9f8748f85C815C556Dd8ac6`|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--ROOTSTOCK_CHAIN_DETAILS-->

<!--SEPOLIA_CHAIN_DETAILS-->

# Ethereum Sepolia

{% hint style='info' %}
Sepolia is a testnet only chain and can be used as an alternative to Goerli
{% endhint %}
{% hint style='info' %}
Note that a different chain id is used for Sepolia
{% endhint %}

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/sepolia.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/sepolia.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/sepolia.json)

## Wormhole Details

- **Name**: `sepolia`
- **Chain ID**: `10002`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)







### Mainnet Contracts (<code>N/A</code>)

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>Sepolia</code> - <code>11155111</code>)

|Type|Contract|
|----|--------|
|Core|`0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78`|
|Token Bridge|`0xDB5492265f6038831E89f495670FF909aDe94bd9`|
|NFT Bridge|`0x6a0B52ac198e4870e5F3797d5B403838a5bbFD99`|
|Relayer|`0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470`|
|MockProvider|`0x7A0a53847776f7e94Cc35742971aCb2217b0Db81`|
|MockIntegration|`0x68b7Cd0d27a6F04b2F65e11DD06182EFb255c9f0`|
|CCTP|`0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--SEPOLIA_CHAIN_DETAILS-->

<!--HOLESKY_CHAIN_DETAILS-->

# Ethereum Holesky

{% hint style='info' %}
Holesky is a testnet only chain and can be used as an alternative to Goerli
{% endhint %}
{% hint style='info' %}
Note that a different chain id is used for Holesky
{% endhint %}

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/holesky.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/holesky.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/holesky.json)

## Wormhole Details

- **Name**: `holesky`
- **Chain ID**: `10006`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)







### Mainnet Contracts (<code>N/A</code>)

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>Holesky</code> - <code>17000</code>)

|Type|Contract|
|----|--------|
|Core|`0xa10f2eF61dE1f19f586ab8B6F2EbA89bACE63F7a`|
|Token Bridge|`0x76d093BbaE4529a342080546cAFEec4AcbA59EC6`|
|NFT Bridge|`0xc8941d483c45eF8FB72E4d1F9dDE089C95fF8171`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--HOLESKY_CHAIN_DETAILS-->

<!--ARBITRUM_SEPOLIA_CHAIN_DETAILS-->

# Arbitrum Sepolia

## Ecosystem

- [Web site](https://arbitrum.io/)
- [Arbitrum Explorer](https://sepolia.arbiscan.io/)
- 

## Wormhole Details

- **Name**: `arbitrum_sepolia`
- **Chain ID**: `10003`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/arbitrum_sepolia.json)







### Mainnet Contracts 

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>Sepolia</code> - <code>421614</code>)

|Type|Contract|
|----|--------|
|Core|`0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35`|
|Token Bridge|`0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e`|
|NFT Bridge|`0x23908A62110e21C04F3A4e011d24F901F911744A`|
|Relayer|`0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470`|
|MockProvider|`0x7A0a53847776f7e94Cc35742971aCb2217b0Db81`|
|MockIntegration|`0x2B1502Ffe717817A0A101a687286bE294fe495f7`|
|CCTP|`0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--ARBITRUM_SEPOLIA_CHAIN_DETAILS-->

<!--OPTIMISM_SEPOLIA_CHAIN_DETAILS-->

# Optimism Sepolia

## Ecosystem

- [Web site](https://www.optimism.io/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/optimism_sepolia.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/optimism_sepolia.json)

## Wormhole Details

- **Name**: `optimism_sepolia`
- **Chain ID**: `10005`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://community.optimism.io/docs/developers/bridge/comm-strategies/](https://community.optimism.io/docs/developers/bridge/comm-strategies/)


### Mainnet Contracts 

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>Optimism Sepolia</code> - <code>11155420</code>)

|Type|Contract|
|----|--------|
|Core|`0x31377888146f3253211EFEf5c676D41ECe7D58Fe`|
|Token Bridge|`0x99737Ec4B815d816c49A385943baf0380e75c0Ac`|
|NFT Bridge|`0x27812285fbe85BA1DF242929B906B31EE3dd1b9f`|
|Relayer|`0x93BAD53DDfB6132b0aC8E37f6029163E63372cEE`|
|MockProvider|`0x7A0a53847776f7e94Cc35742971aCb2217b0Db81`|
|MockIntegration|`0xA404B69582bac287a7455FFf315938CCd92099c1`|
|CCTP|`0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--OPTIMISM_SEPOLIA_CHAIN_DETAILS-->

<!--BASE_SEPOLIA_CHAIN_DETAILS-->

# Base Sepolia

## Ecosystem

- [Web site](https://base.org/)
- [Etherscan](https://sepolia.basescan.org/)
- [Developer docs](https://docs.base.org/)

## Wormhole Details

- **Name**: `base_sepolia`
- **Chain ID**: `10004`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)







### Mainnet Contracts 

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>Base Sepolia</code> - <code>84532</code>)

|Type|Contract|
|----|--------|
|Core|`0x79A1027a6A159502049F10906D333EC57E95F083`|
|Token Bridge|`0x86F55A04690fd7815A3D802bD587e83eA888B239`|
|NFT Bridge|`0x268557122Ffd64c85750d630b716471118F323c8`|
|Relayer|`0x93BAD53DDfB6132b0aC8E37f6029163E63372cEE`|
|MockProvider|`0x7A0a53847776f7e94Cc35742971aCb2217b0Db81`|
|MockIntegration|`0xA404B69582bac287a7455FFf315938CCd92099c1`|
|CCTP|`0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--BASE_SEPOLIA_CHAIN_DETAILS-->

<!--SCROLL_CHAIN_DETAILS-->

# Scroll

## Ecosystem

- [Web site](https://scroll.io/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/scroll.json)
- [Developer docs](https://docs.scroll.io/en/home/)

## Wormhole Details

- **Name**: `scroll`
- **Chain ID**: `34`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/scroll.json)







### Mainnet Contracts (<code>534352</code>)

|Type|Contract|
|----|--------|
|Core|`0xbebdb6C8ddC678FfA9f8748f85C815C556Dd8ac6`|
|Token Bridge|`0x24850c6f61C438823F01B7A3BF2B89B72174Fa9d`|
|NFT Bridge|**N/A**|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>Sepolia</code> - <code>534351</code>)

|Type|Contract|
|----|--------|
|Core|`0x055F47F1250012C6B20c436570a76e52c17Af2D5`|
|Token Bridge|`0x22427d90B7dA3fA4642F7025A854c7254E4e45BF`|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--SCROLL_CHAIN_DETAILS-->

<!--MANTLE_CHAIN_DETAILS-->

# Mantle

## Ecosystem

- [Web site](https://www.mantle.xyz/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/mantle.json)
- [Developer docs](https://docs.mantle.xyz/network/introduction/overview)

## Wormhole Details

- **Name**: `mantle`
- **Chain ID**: `35`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/mantle.json)







### Mainnet Contracts (<code>5000</code>)

|Type|Contract|
|----|--------|
|Core|`0xbebdb6C8ddC678FfA9f8748f85C815C556Dd8ac6`|
|Token Bridge|`0x24850c6f61C438823F01B7A3BF2B89B72174Fa9d`|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>Sepolia</code> - <code>5003</code>)

|Type|Contract|
|----|--------|
|Core|`0x376428e7f26D5867e69201b275553C45B09EE090`|
|Token Bridge|`0x75Bfa155a9D7A3714b0861c8a8aF0C4633c45b5D`|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--MANTLE_CHAIN_DETAILS-->

<!--POLYGON_SEPOLIA_CHAIN_DETAILS-->

# Polygon Sepolia

## Ecosystem

- [Web site](https://polygon.technology/)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/polygon_sepolia.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/polygon_sepolia.json)

## Wormhole Details

- **Name**: `polygon_sepolia`
- **Chain ID**: `10007`
- **Contract Source**: [ethereum/contracts/bridge/Bridge.sol](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/bridge/Bridge.sol)

### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:

|Level|Value|
|-----|-----|
|Instant|200|
If a value is passed that is _not_ in the set above it's assumed to mean finalized


For more information see [https://docs.polygon.technology/pos/architecture/heimdall/checkpoints/](https://docs.polygon.technology/pos/architecture/heimdall/checkpoints/)


### Mainnet Contracts 

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>Sepolia</code> - <code>80002</code>)

|Type|Contract|
|----|--------|
|Core|`0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35`|
|Token Bridge|`0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e`|
|NFT Bridge|`0x23908A62110e21C04F3A4e011d24F901F911744A`|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--POLYGON_SEPOLIA_CHAIN_DETAILS-->

<!--BERACHAIN_CHAIN_DETAILS-->

# Berachain

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/berachain.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/berachain.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/berachain.json)

## Wormhole Details

- **Name**: `berachain`
- **Chain ID**: `39`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/berachain.json)







### Mainnet Contracts 

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>80085</code>)

|Type|Contract|
|----|--------|
|Core|`0xBB73cB66C26740F31d1FabDC6b7A46a038A300dd`|
|Token Bridge|`0xa10f2eF61dE1f19f586ab8B6F2EbA89bACE63F7a`|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--BERACHAIN_CHAIN_DETAILS-->

<!--BLAST_CHAIN_DETAILS-->

# Blast

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/blast.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/blast.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/blast.json)

## Wormhole Details

- **Name**: `blast`
- **Chain ID**: `36`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/blast.json)







### Mainnet Contracts (<code>81457</code>)

|Type|Contract|
|----|--------|
|Core|`0xbebdb6C8ddC678FfA9f8748f85C815C556Dd8ac6`|
|Token Bridge|`0x24850c6f61C438823F01B7A3BF2B89B72174Fa9d`|
|NFT Bridge|**N/A**|
|Relayer|`0x27428DD2d3DD32A4D7f7C497eAaa23130d894911`|

### Testnet Contracts (<code>168587773</code>)

|Type|Contract|
|----|--------|
|Core|`0x473e002D7add6fB67a4964F13bFd61280Ca46886`|
|Token Bridge|`0x430855B4D43b8AEB9D2B9869B74d58dda79C0dB2`|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--BLAST_CHAIN_DETAILS-->

<!--LINEA_CHAIN_DETAILS-->

# Linea

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/linea.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/linea.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/linea.json)

## Wormhole Details

- **Name**: `linea`
- **Chain ID**: `38`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/linea.json)







### Mainnet Contracts (<code>59144</code>)

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>59141</code>)

|Type|Contract|
|----|--------|
|Core|`0x79A1027a6A159502049F10906D333EC57E95F083`|
|Token Bridge|`0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e`|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--LINEA_CHAIN_DETAILS-->

<!--SEIEVM_CHAIN_DETAILS-->

# Seievm

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/seievm.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/seievm.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/seievm.json)

## Wormhole Details

- **Name**: `seievm`
- **Chain ID**: `40`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/seievm.json)







### Mainnet Contracts 

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Testnet Contracts 

|Type|Contract|
|----|--------|
|Core|`0x07782FCe991dAb4DE7a3124032E534A0D059B4d8`|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--SEIEVM_CHAIN_DETAILS-->

<!--XLAYER_CHAIN_DETAILS-->

# Xlayer

## Ecosystem

- No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/xlayer.json)
- No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/xlayer.json)
- No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/xlayer.json)

## Wormhole Details

- **Name**: `xlayer`
- **Chain ID**: `37`
- **Contract Source**: No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/xlayer.json)







### Mainnet Contracts 

|Type|Contract|
|----|--------|
|Core|`0x194B123c5E96B9b2E49763619985790Dc241CAC0`|
|Token Bridge|`0x5537857664B0f9eFe38C9f320F75fEf23234D904`|
|NFT Bridge|**N/A**|

### Testnet Contracts (<code>195</code>)

|Type|Contract|
|----|--------|
|Core|`0xA31aa3FDb7aF7Db93d18DDA4e19F811342EDF780`|
|Token Bridge|`0xdA91a06299BBF302091B053c6B9EF86Eff0f930D`|
|NFT Bridge|**N/A**|

### Local Network Contract

|Type|Contract|
|----|--------|
|Core|**N/A**|
|Token Bridge|**N/A**|
|NFT Bridge|**N/A**|
  

<!--XLAYER_CHAIN_DETAILS-->