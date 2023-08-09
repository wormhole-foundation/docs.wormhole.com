import * as cfg from "./config";
import { fmtNum, fmtStr } from "./util";

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

export function chainDetailsPage(chain: cfg.DocChain): string {
  const { name, id, extraDetails } = chain;
  const { mainnet, testnet, devnet } = chain;

  let webpage =
    "No webpage, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)";
  let explorerLinks =
    "No explorer, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)";
  let devdocs =
    "No dev docs, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)";
  let src =
    "No source file, update [here](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main/scripts/src/chains)";

  let noteHints = "";

  let finalityOptions = "";
  let finalityDetails = "";

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

    if (finality !== undefined) {
      const { confirmed, finalized, instant, safe, otherwise, details } =
        finality;
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

      finalityOptions = `|Level|Value|\n|-----|-----|`;

      for (const [level, value] of Object.entries(settingTexts)) {
        if (value !== " ") finalityOptions += `\n|${level}|${value}|`;
      }

      finalityOptions += otherwiseText;
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

The options for [consistencyLevel](../../components/core-contracts.md#consistencylevel) (i.e finality) are:`
}

${finalityOptions}

${finalityDetails}

### Mainnet Contracts

${contractTable(mainnet)}

### Testnet Contracts

${contractTable(testnet)}

### Devnet Contract

${contractTable(devnet)}
  
`;
}

export function generateAllContractsTable(
  dc: cfg.DocChain[],
  module: string
): string {
  let mainnetTable: string[] = [
    `|Chain Name|Wormhole Chain Id|Address|`,
    `|---|---|------------|`,
  ];
  let testnetTable: string[] = [
    `|Chain Name|Wormhole Chain Id|Address|`,
    `|---|---|------------|`,
  ];
  let devnetTable: string[] = [
    `|Chain Name|Wormhole Chain Id|Address|`,
    `|---|---|------------|`,
  ];

  const orderedDc = dc.sort((a, b) => {
    return a.id - b.id;
  });

  for (const c of orderedDc) {
    switch (module) {
      case "core":
        if (c.mainnet.core !== undefined)
          mainnetTable.push(`|${c.name}|${c.id}|\`${c.mainnet.core}\`|`);
        if (c.testnet.core !== undefined)
          testnetTable.push(`|${c.name}|${c.id}|\`${c.testnet.core}\`|`);
        if (c.devnet.core !== undefined)
          devnetTable.push(`|${c.name}|${c.id}|\`${c.devnet.core}\`|`);
        continue;
      case "token_bridge":
        if (c.mainnet.token_bridge !== undefined)
          mainnetTable.push(
            `|${c.name}|${c.id}|\`${c.mainnet.token_bridge}\`|`
          );
        if (c.testnet.token_bridge !== undefined)
          testnetTable.push(
            `|${c.name}|${c.id}|\`${c.testnet.token_bridge}\`|`
          );
        if (c.devnet.token_bridge !== undefined)
          devnetTable.push(`|${c.name}|${c.id}|\`${c.devnet.token_bridge}\`|`);
        continue;
      case "nft_bridge":
        if (c.mainnet.nft_bridge !== undefined)
          mainnetTable.push(`|${c.name}|${c.id}|\`${c.mainnet.nft_bridge}\`|`);
        if (c.testnet.nft_bridge !== undefined)
          testnetTable.push(`|${c.name}|${c.id}|\`${c.testnet.nft_bridge}\`|`);
        if (c.devnet.nft_bridge !== undefined)
          devnetTable.push(`|${c.name}|${c.id}|\`${c.devnet.nft_bridge}\`|`);
        continue;
      case "cctp":
        if (c.mainnet.cctp !== undefined)
          mainnetTable.push(`|${c.name}|${c.id}|\`${c.mainnet.cctp}\`|`);
        if (c.testnet.cctp !== undefined)
          testnetTable.push(`|${c.name}|${c.id}|\`${c.testnet.cctp}\`|`);
        if (c.devnet.cctp !== undefined)
          devnetTable.push(`|${c.name}|${c.id}|\`${c.devnet.cctp}\`|`);
        continue;
      case "relayer":
        if (c.mainnet.wormholeRelayerAddress !== undefined)
          mainnetTable.push(
            `|${c.name}|${c.id}|\`${c.mainnet.wormholeRelayerAddress}\`|`
          );
        if (c.testnet.wormholeRelayerAddress !== undefined)
          testnetTable.push(
            `|${c.name}|${c.id}|\`${c.testnet.wormholeRelayerAddress}\`|`
          );
        if (c.devnet.wormholeRelayerAddress !== undefined)
          devnetTable.push(
            `|${c.name}|${c.id}|\`${c.devnet.wormholeRelayerAddress}\`|`
          );
        continue;
    }
  }

  return `
### Mainnet 

${mainnetTable.join("\n")}

### Testnet

${testnetTable.length > 2 ? testnetTable.join("\n") : ""}

### Devnet

${devnetTable.length > 2 ? devnetTable.join("\n") : ""}

`;
}
