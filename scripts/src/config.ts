import * as wh from "@certusone/wormhole-sdk";
import fs from 'fs';

const mainnetContracts: wh.ChainContracts = wh.CONTRACTS.MAINNET;
const testnetContracts: wh.ChainContracts = wh.CONTRACTS.TESTNET;
const devnetContracts: wh.ChainContracts = wh.CONTRACTS.DEVNET;

// Many chains have the same underlying runtime
export type ChainType = "EVM" | "Solana" | "CosmWasm" | "Sui" | "Aptos" | "Algorand" | "";

export function getChainType(cid: wh.ChainId): ChainType {
  if (wh.isEVMChain(cid)) return "EVM";
  if (wh.isTerraChain(cid)) return "CosmWasm";
  //if (wh.isTerraChain(cid)) return "Terra";
  //if(wh.isSolanaChain(cid) in wh.SolanaChainName)
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
  core?: string;
  token_bridge?: string;
  nft_bridge?: string;
};


export interface Finality {
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

export interface DeveloperDetails {
  docs: SiteDescription[] // urls to dev docs
};

export interface ExtraDetails {
  finality?: Finality;
  title?: string // title case name of the chain
  homepage?: string // Url to the homepage of the chain
  explorer?: SiteDescription[] // urls to explorer sites
  developer?: DeveloperDetails // set of sites to help devs
  contractSource?: string // url to core contract
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

    const details = getChainDetails(name);

    if(name in skipChains) continue

    const docChain = {
      name: cn,
      id: cid,
      chainType: getChainType(cid),
      mainnet: mainnetContracts[name] || {},
      testnet: testnetContracts[name] || {},
      devnet: devnetContracts[name] || {},
      extraDetails: details,
    }


    chains.push(docChain);
  }

  return chains.sort((a, b)=>{ return a.name.localeCompare(b.name) });

}