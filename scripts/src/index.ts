import * as cfg from "./config";
import { fmtNum } from "./util";
import { chainDetailsPage } from "./details";
import { chainCard } from "./card";
import * as fs from "fs";

// Finality table
const finalityHeader = `
|ChainName|WormholeChainID|Confirmed|Instant|Safe|Finalized|Otherwise|
|---------|---------------|---------|-------|----|---------|---------|`;
function makeTableRow(name: string, id: number, finality: cfg.Finality) {
  const { confirmed, finalized, instant, safe, otherwise } = finality;
  return (
    `|${name}|${id}` +
    `|${fmtNum(confirmed)}|${fmtNum(instant)}` +
    `|${fmtNum(safe)}|${fmtNum(finalized)}` +
    `|${otherwise || " "}|`
  );
}

// Matches for tag search
type Match = {
  fname: string;
  start: number;
  stop: number;
};

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
  const supportedChainsEcosystem: string[] = [];
  const chainPages: Record<string, string> = {};

  for (const chain of chains) {
    if (chain.extraDetails !== undefined) {
      // Supported chains for intro page
      supportedChains.push(chainCard(chain, "."));
      supportedChainsEcosystem.push(chainCard(chain, "../.."));

      // Chain specific pages
      chainPages[chain.name] = chainDetailsPage(chain);
    }
  }

  // TODO: concurrent? will that wreck anything?
  // find tags _first_ in one pass and come back to fill them in?
  // currently this searches docs every time we call it
  await overwriteGenerated("SUPPORTED_BLOCKCHAIN_CARDS", supportedChains.join("\n"));
  await overwriteGenerated("SUPPORTED_BLOCKCHAIN_ECOSYSTEM_CARDS", supportedChainsEcosystem.join("\n"));
  for (const [chainName, chainPage] of Object.entries(chainPages)) {
    await overwriteGenerated(
      `${chainName.toUpperCase()}_CHAIN_DETAILS`,
      chainPage
    );
  }
})();
