import * as cfg from "./config";
import {
  ChainConfig as SdkChainConfig,
  Contracts as SdkContracts,
  chainIdToChain,
  CONFIG as newconf,
} from "@wormhole-foundation/sdk";

(async function () {
  const chains = cfg.getDocChains();
  for (const chain of chains) {
    const sdkName = chainIdToChain.get(chain.id)!;

    const { extraDetails } = chain;
    for (const network of ["Mainnet", "Testnet", "Devnet"]) {
      // @ts-ignore
      const sdkChain = newconf[network].chains[sdkName] as SdkChainConfig;
      if (!sdkChain) {
        console.log("No SDK chain for: " + sdkName + " " + network);
        continue;
      }

      const sdkContracts = sdkChain.contracts as SdkContracts;

      // @ts-ignore
      const docContracts = chain[network.toLowerCase()];

      if (sdkContracts === undefined) continue;
      if (docContracts === undefined) continue;

      if (sdkContracts.coreBridge !== docContracts.core)
        console.log(
          `Core bridge mismatch for ${sdkName} ${network}: ${sdkContracts.coreBridge} vs ${docContracts.core}`
        );
      if (sdkContracts.tokenBridge !== docContracts.token_bridge)
        console.log(
          `Token bridge mismatch for ${sdkName} ${network}: ${sdkContracts.tokenBridge} vs ${docContracts.token_bridge}`
        );
      if (sdkContracts.nftBridge !== docContracts.nft_bridge)
        console.log(
          `NFT bridge mismatch for ${sdkName} ${network}: ${sdkContracts.nftBridge} vs ${docContracts.nft_bridge}`
        );
      if (sdkContracts.relayer !== docContracts.wormholeRelayerAddress)
        console.log(
          `Relayer mismatch for ${sdkName} ${network}: ${sdkContracts.relayer} vs ${docContracts.wormholeRelayerAddress}`
        );
      if (sdkContracts.cctp?.wormhole !== docContracts.cctp)
        console.log(
          `CCTP mismatch for ${sdkName} ${network}: ${sdkContracts.cctp?.wormhole} vs ${docContracts.cctp}`
        );

      if (!extraDetails) continue;

      // @ts-ignore
      const nativeChainId = extraDetails[network.toLowerCase()];

      if (network === "Devnet") continue;

      if (!nativeChainId && !sdkName.includes("Sepolia")) {
        console.log("Missing chain id for: " + sdkName + " " + network);
        continue;
      }

      const nativeChainIdVal =
        nativeChainId && "id" in nativeChainId && nativeChainId.id !== "N/A"
          ? nativeChainId.id.toString()
          : undefined;

      const sdkNativeChainId = sdkChain.nativeChainId
        ? sdkChain.nativeChainId.toString()
        : undefined;

      if (nativeChainIdVal !== sdkNativeChainId) {
        console.log(
          `Native chain id mismatch for ${sdkName} ${network}: ${nativeChainId.id} vs ${sdkChain.nativeChainId}`
        );
      }
    }
  }
})();
