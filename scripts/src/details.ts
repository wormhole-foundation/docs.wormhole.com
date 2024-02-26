import { Chain, finality, toChain } from "@wormhole-foundation/connect-sdk";
import * as cfg from "./config";
import { fmtNum, fmtStr, fmtCodeStr } from "./util";

const SRC_BASE = "https://github.com/wormhole-foundation/wormhole/blob/main/";

export function contractTable(contracts: cfg.Contracts): string {
  let core = `|Type|Contract|
|----|--------|
|Core|${fmtStr(contracts.core)}|
|Token Bridge|${fmtStr(contracts.token_bridge)}|
|NFT Bridge|${fmtStr(contracts.nft_bridge)}|`;

  if (contracts.wormholeRelayerAddress !== undefined) {
    core += `\n|Relayer|${fmtStr(contracts.wormholeRelayerAddress)}|`;
    if (contracts.mockDeliveryProviderAddress)
      core += `\n|MockProvider|${fmtStr(
        contracts.mockDeliveryProviderAddress
      )}|`;
    if (contracts.mockIntegrationAddress)
      core += `\n|MockIntegration|${fmtStr(contracts.mockIntegrationAddress)}|`;
  }

  if (contracts.cctp !== undefined) {
    core += `\n|CCTP|${fmtStr(contracts.cctp)}|`;
  }

  return core;
}

export function finalityOptionTable(
  finality: cfg.Finality | undefined
): [string, string] {
  let finalityOptions = "";
  let finalityDetails = "";

  if (finality === undefined) return [finalityOptions, finalityDetails];

  const { confirmed, finalized, instant, safe, otherwise, details } = finality;

  if (details !== undefined) {
    finalityDetails = `\nFor more information see [${details}](${details})\n`;
  }

  let otherwiseText = "";
  if (otherwise) {
    otherwiseText = `\nIf a value is passed that is _not_ in the set above it's assumed to mean ${otherwise}`;
  }

  let settingTexts = {
    Confirmed: fmtNum(confirmed),
    Instant: fmtNum(instant),
    Safe: fmtNum(safe),
    Finalized: fmtNum(finalized),
  };

  if (finalized === 0) {
    otherwiseText += `\n\nThis field is may be ignored since the chain provides instant finality.`;
  }

  finalityOptions = `|Level|Value|\n|-----|-----|`;
  for (const [level, value] of Object.entries(settingTexts)) {
    if (value !== " ") finalityOptions += `\n|${level}|${value}|`;
  }

  finalityOptions += otherwiseText;

  return [finalityOptions, finalityDetails];
}

export function chainDetailsPage(chain: cfg.DocChain): string {
  const { name, id, extraDetails } = chain;
  const { mainnet, testnet, devnet } = chain;

  const updateLink = `https://github.com/wormhole-foundation/docs.wormhole.com/blob/main/scripts/src/chains/${name}.json`;

  let webpage = `No webpage, update [here](${updateLink})`;
  let explorerLinks = `No explorer, update [here](${updateLink})`;
  let devdocs = `No dev docs, update [here](${updateLink})`;
  let src = `No source file, update [here](${updateLink})`;

  let mainnetAlias = "";
  let testnetAlias = "";

  let noteHints = "";

  const [finalityOptions, finalityDetails] = finalityOptionTable(
    extraDetails?.finality
  );

  let title = extraDetails?.title || name;

  if (extraDetails !== undefined) {
    const { contractSource, homepage, explorer, finality, notes } =
      extraDetails;

    if (notes !== undefined) {
      noteHints = `\n${notes
        .map((n) => {
          return `{% hint style='info' %}\n${n}\n{% endhint %}`;
        })
        .join("\n")}\n`;
    }

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
      for (const dd of extraDetails.developer) {
        docs.push(`[${dd.description ? dd.description : dd.url}](${dd.url})`);
      }
      devdocs = docs.join(" | ");
    }

    if (extraDetails.mainnet !== undefined) {
      mainnetAlias = `(${cfg.networkString(extraDetails.mainnet)})`;
    }

    if (extraDetails.testnet !== undefined) {
      testnetAlias = `(${cfg.networkString(extraDetails.testnet)})`;
    }
  }

  return `
# ${title}
${noteHints}
## Ecosystem

- ${webpage}
- ${explorerLinks}
- ${devdocs}

## Wormhole Details

- **Name**: \`${name}\`
- **Chain ID**: \`${id}\`
- **Contract Source**: ${src}

${
  finalityOptions === ""
    ? ""
    : `### Consistency Levels

The options for [consistencyLevel](../../reference/components/core-contracts.md#consistencyLevel) (i.e finality) are:`
}

${finalityOptions}

${finalityDetails}

### Mainnet Contracts ${mainnetAlias}

${contractTable(mainnet)}

### Testnet Contracts ${testnetAlias}

${contractTable(testnet)}

### Local Network Contract

${contractTable(devnet)}
  
`;
}

export function generateAllChainIdsTable(dc: cfg.DocChain[]): string {
  const orderedDc = dc.sort((a, b) => {
    return a.id - b.id;
  });

  const header = `<thead><td>Chain Name</td><td>Wormhole Chain Id</td><td>Mainnet Id</td><td>Testnet Id</td></thead>`;
  let rows: string[] = [];

  for (const c of orderedDc) {
    const mainnetAlias = cfg.networkString(c.extraDetails?.mainnet);
    const testnetAlias = cfg.networkString(c.extraDetails?.testnet);
    rows.push(
      `<tr><td>${c.name}</td><td>${c.id}</td><td>${mainnetAlias}</td><td>${testnetAlias}</td></tr>`
    );
  }

  return `<table data-full-width="true">
${header}
<tbody>
${rows.join("\n")}
</tbody>
</table>`;
}

export function generateAllConsistencyLevelsTable(dc: cfg.DocChain[]): string {
  const orderedDc = dc.sort((a, b) => {
    return a.id - b.id;
  });

  const header = `
<thead>
  <td>Chain</td>
  <td>Instant</td>
  <td>Safe</td>
  <td>Finalized</td>
  <td>Otherwise</td>
  <td>Time to Finalize</td>
  <td>Details</td>
</thead>`;

  const rows: string[] = [];
  for (const c of orderedDc) {
    if (!c.extraDetails) {
      console.log("No extra details for: ", c.name);
      continue;
    }

    const f =
      c.extraDetails?.finality === undefined
        ? {
            instant: 201,
            safe: 200,
            otherwise: "finalized",
          }
        : c.extraDetails.finality;

    const header = c.extraDetails.title ? c.extraDetails.title : c.name;

    const instant = fmtNum(f.instant);
    const safe = fmtNum(
      f.safe !== undefined
        ? f.safe
        : f.confirmed !== undefined
        ? f.confirmed
        : undefined
    );
    const finalized = fmtNum(f.finalized);
    const otherwise = f.otherwise ? f.otherwise : "-";
    const details = f.details ? `<a href="${f.details}">Details</a>` : "-";

    let sdkChain: Chain;
    try {
      sdkChain = toChain(c.id);
    } catch {
      console.log("No sdk chain for ", c.name, " with id ", c.id);
      continue;
    }

    const finalizationBlocks = finality.finalityThreshold.get(sdkChain);
    const blockTime = finality.blockTime.get(toChain(c.id));

    let finalizationTime = " ";
    if (finalizationBlocks !== undefined && blockTime !== undefined) {
      finalizationTime = `~ ${((finalizationBlocks + 1) * blockTime) / 1000}s`;
    }

    rows.push(`
<tr>
  <td>${header}</td>
  <td>${instant}</td>
  <td>${safe}</td>
  <td>${finalized}</td>
  <td>${otherwise}</td>
  <td>${finalizationTime}</td>
  <td>${details}</td>
</tr>
`);
  }

  return `<table data-full-width="true">
${header}
<tbody>
${rows.join("\n")}
</tbody>
</table>`;
}

export function generateAllContractsTable(
  dc: cfg.DocChain[],
  module: string
): string {
  let tableHeader = `<thead>
  <td>Chain Name</td>
  <td>Mainnet</td>
  <td>Testnet</td>
  <td>Local development</td>
</thead>`;

  const orderedDc = dc.sort((a, b) => {
    return a.id - b.id;
  });

  const m = module as keyof cfg.Contracts;

  let rows: string[] = [];
  for (const c of orderedDc) {
    rows.push(`<tr>
      <td>${c.name}</td>
      <td>${fmtCodeStr(c.mainnet[m])}</td>
      <td>${fmtCodeStr(c.testnet[m])}</td>
      <td>${fmtCodeStr(c.devnet[m])}</td> 
    </tr>`);
  }

  return `<table data-full-width="true">
${tableHeader} 
<tbody>
  ${rows.join("\n")}
</tbody>
</table>`;
}
