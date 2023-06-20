import fs from 'fs';
import { DocChain } from "./config"


const ICONS_PATH = "../.gitbook/assets/chain-icons"

export function chainCard(dc: DocChain): string {
    const {name} = dc

    let environment = dc.chainType.toLowerCase()
    if (environment === "") environment = name

    let title = dc.extraDetails?.title
    if(title === undefined) title = name


    let icon = `${ICONS_PATH}/${name}.svg`
    if(!fs.existsSync("../docs/overview/" + icon)){
        icon = `${ICONS_PATH}/${name}.png`
    }



return `<tr>
    <td><strong>${title}</strong></td>
    <td><a href="../reference/environments/${environment}.md#${name}">${environment}.md</a></td>
    <td><a href="${icon}">${name}</a></td>
</tr>`
}