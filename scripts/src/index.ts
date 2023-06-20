import * as cfg from "./config";
import { chainCard } from "./card"; 
import * as fs from "fs";

const SRC_BASE = "https://github.com/wormhole-foundation/wormhole/blob/main/";

type Match = {
  fname: string;
  start: number;
  stop: number;
};

// Finality table
const finalityHeader = `
|ChainName|WormholeChainID|Confirmed|Instant|Safe|Finalized|Otherwise|
|---------|---------------|---------|-------|----|---------|---------|`;

function fmtNum(n?: number): string {
  return n === undefined ? "" : n.toString();
}

function fmtStr(s?: string): string {
  return s === undefined ? "**N/A**" : `\`${s}\``;
}

function makeTableRow(name: string, id: number, finality: cfg.Finality) {
  const { confirmed, finalized, instant, safe, otherwise } = finality;
  return `|${name}|${id}|${fmtNum(confirmed)}|${fmtNum(instant)}|${fmtNum(
    safe
  )}|${fmtNum(finalized)}|${otherwise || ""}|`;
}

// Chain specific page

function makeChainPage(chain: cfg.DocChain): string {
  const { name, id, extraDetails } = chain;
  const { mainnet, testnet, devnet } = chain;

  let webpage = "";
  let explorerLinks = "";
  let devdocs = "";
  let src = "";
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
          `- [${exp.description ? exp.description : exp.url}](${exp.url})`
        );
      }
      explorerLinks = explorers.join("\n");
    }

    if (extraDetails.developer !== undefined) {
      const docs = [];
      for (const dd of extraDetails.developer.docs) {
        docs.push(`- [${dd.description ? dd.description : dd.url}](${dd.url})`);
      }
      devdocs = docs.join("\n");
    }

    if (finality !== undefined) {
      const { confirmed, finalized, instant, safe, otherwise } = finality;

      let otherwiseText = "";
      if (otherwise) {
        otherwiseText = `If a value is passed that is _not_ in the set above it's assumed to mean ${otherwise}`;
      }
      let settingTexts = {
        Confirmed: fmtNum(confirmed),
        Instant: fmtNum(instant),
        Safe: fmtNum(safe),
        Finalized: fmtNum(finalized),
      };

      finalityOptions = `
|Level|Value|
|-----|-----|`;
      for (const [level, value] of Object.entries(settingTexts)) {
        if (value) finalityOptions += `\n|${level}|${value}|`;
      }

      finalityOptions += `

${otherwiseText}

`;
    }
  }

  return `

# ${title}

## Wormhole Details

- **Name**: \`${name}\`
- **Chain ID**: \`${id}\`
- **Contract Source**: ${src}

### Consistency Levels

The options for \`consistency_level\` (i.e finality) are:

${finalityOptions}

### Mainnet Contracts

|Type|Contract|
|----|--------|
|Core|${fmtStr(mainnet.core)}|
|Token Bridge|${fmtStr(mainnet.token_bridge)}|
|NFT Bridge|${fmtStr(mainnet.nft_bridge)}|

### Testnet Contracts

|Type|Contract|
|----|--------|
|Core|${fmtStr(testnet.core)}|
|Token Bridge|${fmtStr(testnet.token_bridge)}|
|NFT Bridge|${fmtStr(testnet.nft_bridge)}|

### Devnet Contract

|Type|Contract|
|----|--------|
|Core|${fmtStr(devnet.core)}|
|Token Bridge|${fmtStr(devnet.token_bridge)}|
|NFT Bridge|${fmtStr(devnet.nft_bridge)}|

## Ecosystem

${webpage}

### Block Explorers

${explorerLinks}

## Developer

${devdocs}

`;
}

async function findTag(contentDir: string, tag: string): Promise<Match[]> {
  const fullTag = `<!--${tag}-->`;

  const files = fs.readdirSync(contentDir);

  const matches: Match[] = [];
  for (const file of files) {
    const path = `${contentDir}/${file}`;
    const stat = fs.statSync(path);
    if (stat.isDirectory()) {
      matches.push(...(await findTag(path, tag)));
    } else {
      const buff = fs.readFileSync(path);
      const startIdx = buff.indexOf(fullTag, 0);

      // no match
      if (startIdx <= 0) continue;

      const stopIdx = buff.indexOf(fullTag, startIdx + 1);
      matches.push({
        fname: path,
        start: startIdx + fullTag.length,
        stop: stopIdx,
      });
    }
  }

  return matches;
}

async function overwriteGenerated(tag: string, content: string) {
  // path to doc source, relative to where we run the `npm run generate` cmd
  const contentDir = "../docs";

  const matches = await findTag(contentDir, tag);

  if (matches.length === 0) {
    console.error(`no tags for ${tag}`);
    return;
  }

  for (const match of matches) {
    const oldFile = fs.readFileSync(match.fname);
    const head = oldFile.subarray(0, match.start);
    const tail = oldFile.subarray(match.stop, oldFile.length);
    const newFile = Buffer.concat([head, Buffer.from(`\n${content}\n`), tail]);
    fs.writeFileSync(match.fname, newFile);
  }
}

(async function () {
  const chains = cfg.getDocChains();

  const supportedChains: string[] = [];
  const finalityTable: string[] = [finalityHeader];

  const chainPages: Record<string, string> = {};

  for (const chain of chains) {
    if (chain.extraDetails !== undefined) {
      // Supported chains for intro page
      supportedChains.push(chainCard(chain));

      // Chain specific pages
      chainPages[chain.name] = makeChainPage(chain);

      //
      if (chain.extraDetails?.finality !== undefined) {
        finalityTable.push(
          makeTableRow(chain.name, chain.id, chain.extraDetails?.finality)
        );
      }
    }
  }

  // TODO: concurrent? will that wreck anything?
  // find tags _first_ in one pass and come back to fill them in?
  // currently this searches docs every time we call it
  await overwriteGenerated( "SUPPORTED_BLOCKCHAIN_CARDS", supportedChains.join("\n"));
  await overwriteGenerated("FINALITY_TABLE", finalityTable.join("\n"));
  for (const [chainName, chainPage] of Object.entries(chainPages)) {
    await overwriteGenerated(
      `${chainName.toUpperCase()}_CHAIN_DETAILS`,
      chainPage
    );
  }
})();
