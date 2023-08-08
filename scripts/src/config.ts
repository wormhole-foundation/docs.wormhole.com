import * as wh from "@certusone/wormhole-sdk";
import fs from "fs";

// Many chains have the same underlying runtime
export type ChainType =
  | "EVM"
  | "Solana"
  | "CosmWasm"
  | "Sui"
  | "Aptos"
  | "Algorand"
  | "";

export function getChainType(cid: wh.ChainId): ChainType {
  if (wh.isEVMChain(cid)) return "EVM";
  if (wh.isCosmWasmChain(cid) || wh.isTerraChain(cid)) return "CosmWasm";
  //if(wh.isSolanaChain(cid) in wh.SolanaChainName)

  const name = wh.coalesceChainName(cid);

  if (name === "osmosis") return "CosmWasm";
  if (name === "solana" || name === "pythnet") return "Solana";
  if (name === "algorand") return "Algorand";
  if (name === "aptos") return "Aptos";
  if (name === "sui") return "Sui";

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
  // CCTP
  cctpAddress?: string;
};

export interface Finality {
  // Url to get more details about finality/commitment
  details?: string;
  confirmed?: number;
  finalized?: number;
  instant?: number;
  safe?: number;
  otherwise?: string;
}

export interface SiteDescription {
  url: string;
  description?: string;
}

export interface ExtraDetails {
  notes?: string[];
  finality?: Finality;
  title?: string; // title case name of the chain
  homepage?: string; // Url to the homepage of the chain
  explorer?: SiteDescription[]; // urls to explorer sites
  developer?: SiteDescription[]; // set of sites to help devs
  contractSource?: string; // url to core contract
  examples?: SiteDescription[];
}

function getChainDetails(name: string): ExtraDetails {
  try {
    const details = fs.readFileSync(`./src/chains/${name}.json`);
    return JSON.parse(details.toString()) as ExtraDetails;
  } catch (e) {
    console.error("No detail file for ", name);
  }
  return {} as ExtraDetails;
}

export function getDocChains(): DocChain[] {
  const mainnetContracts: wh.ChainContracts = wh.CONTRACTS.MAINNET;
  const testnetContracts: wh.ChainContracts = wh.CONTRACTS.TESTNET;
  const devnetContracts: wh.ChainContracts = wh.CONTRACTS.DEVNET;

  const mainnetRelayers = wh.relayer.RELAYER_CONTRACTS.MAINNET;
  const testnetRelayers = wh.relayer.RELAYER_CONTRACTS.TESTNET;
  const devnetRelayers = wh.relayer.RELAYER_CONTRACTS.DEVNET;

  const mainnetCCTP = {
    arbitrum: { cctpAddress: "0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c" },
    avalanche: { cctpAddress: "0x09Fb06A271faFf70A651047395AaEb6265265F13" },
    ethereum: { cctpAddress: "0xAaDA05BD399372f0b0463744C09113c137636f6a" },
  };

  const testnetCCTP = {
    arbitrum: { cctpAddress: "0x2e8f5e00a9c5d450a72700546b89e2b70dfb00f2" },
    avalanche: { cctpAddress: "0x58f4c17449c90665891c42e14d34aae7a26a472e" },
    ethereum: { cctpAddress: "0x0a69146716b3a21622287efa1607424c663069a4" },
  };

  // Chains we don't want to appear on the docs
  const skipChains = {
    wormchain: true,
    btc: true,
  };

  const chains: DocChain[] = [];
  for (const [cn, cid] of Object.entries(wh.CHAINS)) {
    if (cid === 0) continue;

    const name = wh.toChainName(cid);

    if (name in skipChains) continue;

    const mContracts = {
      ...mainnetContracts[name],
      ...mainnetRelayers[name],
      // @ts-ignore
      ...mainnetCCTP[name],
    };
    const tContracts = {
      ...testnetContracts[name],
      ...testnetRelayers[name],
      // @ts-ignore
      ...testnetCCTP[name],
    };
    const dContracts = { ...devnetContracts[name], ...devnetRelayers[name] };

    const docChain = {
      name: cn,
      id: cid,
      chainType: getChainType(cid),
      mainnet: mContracts,
      testnet: tContracts,
      devnet: dContracts,
      extraDetails: getChainDetails(name),
    };

    chains.push(docChain);
  }

  return chains.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}
