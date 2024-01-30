import * as cfg from "./config";

import { ChainConfig as SdkChainConfig, Contracts as SdkContracts, ChainName, Network, chains, CONFIG as newconf, toChainId } from '@wormhole-foundation/connect-sdk'
import { CHAINS as whchains, relayer, CONTRACTS as whcontracts } from '@certusone/wormhole-sdk'


function mapnet(network: string): Network {
    switch (network) {
        case 'MAINNET':
            return 'Mainnet'
        case 'TESTNET':
            return 'Testnet'
        case 'DEVNET':
            return 'Devnet'
        default:
            throw new Error('Invalid network')
    }
}

const idToChainName = new Map<number, ChainName>()
for (const c of chains) {
    idToChainName.set(toChainId(c), c)
}

function checkWhSdk() {
    for (const [network, chainContracts] of Object.entries(whcontracts)) {
        const net = mapnet(network);
        for (const [chain, contracts] of Object.entries(chainContracts)) {
            // @ts-ignore
            const id = whchains[chain]

            if (id === 0) continue

            const newContracts = newconf[net].chains[idToChainName.get(id)!]?.contracts
            if (newContracts === undefined) {
                console.log(`Chain ${id} not found in new config`)
                continue
            }

            if (contracts.core !== newContracts.coreBridge)
                console.log(`Core bridge mismatch for ${id} ${net} ${chain}: ${contracts.core} vs ${newContracts.coreBridge}`)

            if (contracts.token_bridge !== newContracts.tokenBridge)
                console.log(`Token bridge mismatch for ${id} ${net} ${chain}: ${contracts.token_bridge} vs ${newContracts.tokenBridge}`)

            if (contracts.nft_bridge !== newContracts.nftBridge)
                console.log(`NFT bridge mismatch for ${id} ${net} ${chain}: ${contracts.nft_bridge} vs ${newContracts.nftBridge}`)
        }
    }

    for (const [network, chainContracts] of Object.entries(relayer.RELAYER_CONTRACTS)) {
        const net = mapnet(network);
        for (const [chain, contracts] of Object.entries(chainContracts)) {
            // @ts-ignore
            const id = whchains[chain]

            if (id === 0) continue

            const newContracts = newconf[net].chains[idToChainName.get(id)!]?.contracts
            if (newContracts === undefined) {
                console.log(`Chain ${id} not found in new config`)
                continue
            }

            if (contracts.wormholeRelayerAddress !== newContracts.relayer)
                console.log(`Relayer mismatch for ${id} ${net} ${chain}: ${contracts.wormholeRelayerAddress} vs ${newContracts.relayer}`)
        }
    }
}


(async function () {
    const chains = cfg.getDocChains();
    for (const chain of chains) {
        const sdkName = idToChainName.get(chain.id)!

        const { extraDetails } = chain
        for (const network of ["Mainnet", "Testnet", "Devnet"]) {

            // @ts-ignore
            const sdkChain = newconf[network].chains[sdkName] as SdkChainConfig;

            const sdkContracts = sdkChain.contracts as SdkContracts

            // @ts-ignore
            const docContracts = chain[network.toLowerCase()]

            if (sdkContracts === undefined) continue
            if (docContracts === undefined) continue

            if (sdkContracts.coreBridge !== docContracts.core)
                console.log(`Core bridge mismatch for ${sdkName} ${network}: ${sdkContracts.coreBridge} vs ${docContracts.core}`)
            if (sdkContracts.tokenBridge !== docContracts.token_bridge)
                console.log(`Token bridge mismatch for ${sdkName} ${network}: ${sdkContracts.tokenBridge} vs ${docContracts.token_bridge}`)
            if (sdkContracts.nftBridge !== docContracts.nft_bridge)
                console.log(`NFT bridge mismatch for ${sdkName} ${network}: ${sdkContracts.nftBridge} vs ${docContracts.nft_bridge}`)
            if (sdkContracts.relayer !== docContracts.wormholeRelayerAddress)
                console.log(`Relayer mismatch for ${sdkName} ${network}: ${sdkContracts.relayer} vs ${docContracts.wormholeRelayerAddress}`)
            if (sdkContracts.cctp?.wormhole !== docContracts.cctp)
                console.log(`CCTP mismatch for ${sdkName} ${network}: ${sdkContracts.cctp?.wormhole} vs ${docContracts.cctp}`)

            if (!extraDetails) continue

            // @ts-ignore
            const nativeChainId = extraDetails[network.toLowerCase()]

            if (network === "Devnet") continue;

            if (!nativeChainId) {
                console.log("Missing chain id for: " + sdkName + " " + network)
                continue
            }

            if (nativeChainId.id !== "N/A" && nativeChainId.id !== sdkChain.nativeChainId)
                console.log(`Native chain id mismatch for ${sdkName} ${network}: ${nativeChainId.id} vs ${sdkChain.nativeChainId}`)
        }



    }

})()

