import { coalesceChainName, ChainName } from "@certusone/wormhole-sdk";
import { encoding, toChainId } from "@wormhole-foundation/sdk";
import { chainIcons } from "@wormhole-foundation/sdk-icons";
import * as fs from "fs";

const ICONS_PATH = `${__dirname}/../../docs/.gitbook/assets/chain-icons`;

const prefix = "data:image/svg+xml;base64,";
for (const [chain, icon] of Object.entries(chainIcons)) {
  const svg = encoding.bytes.decode(
    encoding.b64.decode(icon.slice(prefix.length))
  );
  const name = coalesceChainName(toChainId(chain));

  //console.log(`Writing ${name}.svg ${ICONS_PATH}/${name}.svg`);
  fs.writeFileSync(`${ICONS_PATH}/${name}.svg`, svg);
}
