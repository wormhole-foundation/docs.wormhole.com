import * as cfg from './config'
import { fmtNum,fmtStr } from './util';



const SRC_BASE = "https://github.com/wormhole-foundation/wormhole/blob/main/";

export function contractTable(contracts: cfg.Contracts): string {
return `|Type|Contract|
|----|--------|
|Core|${fmtStr(contracts.core)}|
|Token Bridge|${fmtStr(contracts.token_bridge)}|
|NFT Bridge|${fmtStr(contracts.nft_bridge)}|`
}
export function chainDetailsPage(chain: cfg.DocChain): string {
    const { name, id, extraDetails } = chain;
    const { mainnet, testnet, devnet } = chain;
  
    let webpage = "No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)";
    let explorerLinks = "No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)";
    let devdocs = "No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)";
    let src = "No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)"
    let finalityOptions = "";
  
    let title = extraDetails?.title || name;
  
    if (extraDetails !== undefined) {
      const { contractSource, homepage, explorer, finality } = extraDetails;
  
      if (contractSource !== undefined) {
        src = `[${contractSource}](${SRC_BASE}${contractSource})`;
      }
  
      if (homepage !== undefined) {
        webpage = `[Web site](${homepage})`;
      }
  
      if (explorer !== undefined) {
        const explorers = [];
        for (const exp of explorer) {
          explorers.push(
            `[${exp.description ? exp.description : exp.url}](${exp.url})`
          );
        }
        explorerLinks = explorers.join(" | ");
      }
  
      if (extraDetails.developer !== undefined) {
        const docs = [];
        for (const dd of extraDetails.developer.docs) {
          docs.push(`[${dd.description ? dd.description : dd.url}](${dd.url})`);
        }
        devdocs = docs.join("\n");
      }
  
      if (finality !== undefined) {
        const { confirmed, finalized, instant, safe, otherwise } = finality;
  
        let otherwiseText = "";
        if (otherwise) {
          otherwiseText = `
If a value is passed that is _not_ in the set above it's assumed to mean ${otherwise}`;

        }
        let settingTexts = {
          Confirmed: fmtNum(confirmed),
          Instant: fmtNum(instant),
          Safe: fmtNum(safe),
          Finalized: fmtNum(finalized),
        };
  
        finalityOptions = `|Level|Value|\n|-----|-----|`;

        for (const [level, value] of Object.entries(settingTexts)) {
          if (value) finalityOptions += `\n|${level}|${value}|`;
        }
  
        finalityOptions += otherwiseText;
  
      }
    }
  
    return `
# ${title}

## Ecosystem

- ${webpage}
- ${explorerLinks}
- ${devdocs}

## Wormhole Details

- **Name**: \`${name}\`
- **Chain ID**: \`${id}\`
- **Contract Source**: ${src}

### Consistency Levels

The options for \`consistency_level\` (i.e finality) are:

${finalityOptions}

### Mainnet Contracts

${contractTable(mainnet)}

### Testnet Contracts

${contractTable(testnet)}

### Devnet Contract

${contractTable(devnet)}
  
`;
  }