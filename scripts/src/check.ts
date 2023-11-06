import { ChainName, Network, chains, CONFIG as newconf, toChainId } from '@wormhole-foundation/connect-sdk'
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

(async function () {
    const idToChainName = new Map<number, ChainName>()
    for (const c of chains) {
        idToChainName.set(toChainId(c), c)
    }

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
})()