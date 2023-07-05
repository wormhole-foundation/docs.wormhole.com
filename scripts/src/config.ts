import * as wh from "@certusone/wormhole-sdk";
import fs from 'fs';






// Many chains have the same underlying runtime
export type ChainType = "EVM" | "Solana" | "CosmWasm" | "Sui" | "Aptos" | "Algorand" | "";

export function getChainType(cid: wh.ChainId): ChainType {
  if(wh.isEVMChain(cid)) return "EVM";
  if(wh.isCosmWasmChain(cid) || wh.isTerraChain(cid)) return "CosmWasm"
  //if(wh.isSolanaChain(cid) in wh.SolanaChainName)

  const name = wh.coalesceChainName(cid);

  if(name === "osmosis") return "CosmWasm"
  if(name === "solana"  || name === "pythnet") return "Solana"
  if(name === "algorand") return "Algorand"
  if(name === "aptos") return "Aptos"
  if(name === "sui") return "Sui"

  return "";
}

export type DocChain = {
  name: string;
  id: number;
  chainType: ChainType;
  mainnet: Contracts;
  testnet: Contracts;
  devnet: Contracts;
  extraDetails?: ExtraDetails;
};

export type Contracts = {
  // core
  core?: string;
  token_bridge?: string;
  nft_bridge?: string;
  // relayer
  wormholeRelayerAddress?: string;
  mockDeliveryProviderAddress?: string;
  mockIntegrationAddress?: string;
};


export interface Finality {
  // Url to get more details about finality/commitment
  details?:string;
  confirmed?: number
  finalized?: number
  instant?: number
  safe?: number
  otherwise?: string
};

export interface SiteDescription {
  url: string
  description?: string
};

export interface ExtraDetails {
  finality?: Finality;
  title?: string // title case name of the chain
  homepage?: string // Url to the homepage of the chain
  explorer?: SiteDescription[] // urls to explorer sites
  developer?: SiteDescription[] // set of sites to help devs
  contractSource?: string // url to core contract
  examples?:SiteDescription[]
};

function getChainDetails(name: string): ExtraDetails {
  try {
    const details = fs.readFileSync(`./src/chains/${name}.json`)
    return JSON.parse(details.toString()) as ExtraDetails
  }catch(e){
    console.error("No detail file for ", name)
  }
  return {} as ExtraDetails
}


export function getDocChains(): DocChain[] {

  const mainnetContracts: wh.ChainContracts = wh.CONTRACTS.MAINNET;
  const testnetContracts: wh.ChainContracts = wh.CONTRACTS.TESTNET;
  const devnetContracts: wh.ChainContracts = wh.CONTRACTS.DEVNET;

  const mainnetRelayers = wh.relayer.RELAYER_CONTRACTS.MAINNET;
  const testnetRelayers = wh.relayer.RELAYER_CONTRACTS.TESTNET;
  const devnetRelayers = wh.relayer.RELAYER_CONTRACTS.DEVNET;

  // Chains we don't want to appear on the docs 
  const skipChains = {
    "wormchain":true,
    "sepolia":true,
    "btc":true,
  }



  const chains: DocChain[] = [];
  for (const [cn, cid] of Object.entries(wh.CHAINS)) {
    if (cid === 0) continue;

    const name = wh.toChainName(cid);

    if(name in skipChains) continue;


    const mContracts = {...mainnetContracts[name], ...mainnetRelayers[name]}
    const tContracts = {...testnetContracts[name], ...testnetRelayers[name]}
    const dContracts = {...devnetContracts[name], ...devnetRelayers[name]}

    const docChain = {
      name: cn,
      id: cid,
      chainType: getChainType(cid),
      mainnet: mContracts,
      testnet: tContracts,
      devnet: dContracts,
      extraDetails: getChainDetails(name),
    }


    chains.push(docChain);
  }

  return chains.sort((a, b)=>{ return a.name.localeCompare(b.name) });

}