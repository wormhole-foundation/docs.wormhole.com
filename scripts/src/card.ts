import { chainIcons } from "@wormhole-foundation/sdk-icons";
import { DocChain } from "./config";
import { toChain } from "@wormhole-foundation/sdk";

const ICONS_PATH = ".gitbook/assets/chain-icons";

export function chainCard(dc: DocChain, pathToRoot: string): string {
  const { name } = dc;

  let environment = dc.chainType.toLowerCase();
  if (environment === "") environment = name;

  let title = dc.extraDetails?.title;
  if (title === undefined) title = name;

  const chain = toChain(dc.id);
  const icon = chainIcons[chain];
  const link = `${pathToRoot}/blockchain-environments/${environment}/README.md#${name}`;
  return `<tr>
    <td><strong>${title}</strong></td>
    <td><a href="${link}">${environment}</a></td>
    <td><a href="${icon}">${name}</a></td>
</tr>`;
}
