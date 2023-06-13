import * as wh from "@certusone/wormhole-sdk";

import _details from './configuration.json';

const mainnetContracts: wh.ChainContracts = wh.CONTRACTS.MAINNET;
const testnetContracts: wh.ChainContracts = wh.CONTRACTS.TESTNET;
const devnetContracts: wh.ChainContracts = wh.CONTRACTS.DEVNET;

// Many chains have the same underlying runtime
export type ChainType = "EVM" | "Solana" | "CosmWasm" | "Terra" | "";

export function getChainType(cid: wh.ChainId): ChainType {
  if (wh.isEVMChain(cid)) return "EVM";
  if (wh.isTerraChain(cid)) return "CosmWasm";
  if (wh.isTerraChain(cid)) return "Terra";
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

//export const EXTRA_DETAILS: Record<string, ExtraDetails> = 

export function getDocChains(): DocChain[] {

  const details = _details as Record<string, ExtraDetails>

  const chains: DocChain[] = [];
  for (const [cn, cid] of Object.entries(wh.CHAINS)) {
    if (cid === 0) continue;

    const name = wh.toChainName(cid);

    const docChain = {
      name: cn,
      id: cid,
      chainType: getChainType(cid),
      mainnet: mainnetContracts[name] || {},
      testnet: testnetContracts[name] || {},
      devnet: devnetContracts[name] || {},
      extraDetails: details[name],
    }


    chains.push(docChain);
  }

  return chains;
}
