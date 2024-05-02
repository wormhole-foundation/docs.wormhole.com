import { CHAINS } from "@certusone/wormhole-sdk";
import { encoding, toChain } from "@wormhole-foundation/sdk";
import { chainToIcon } from "@wormhole-foundation/sdk-icons";
import * as fs from "fs";

const ICONS_PATH = `${__dirname}/../../docs/.gitbook/assets/chain-icons`;
const prefix = "data:image/svg+xml;base64,";
for (const [name, chainId] of Object.entries(CHAINS)) {
  if (chainId === 0) continue;
  const svg = encoding.bytes.decode(
    encoding.b64.decode(chainToIcon(toChain(chainId)).slice(prefix.length))
  );
  fs.writeFileSync(`${ICONS_PATH}/${name}.svg`, svg);
}
