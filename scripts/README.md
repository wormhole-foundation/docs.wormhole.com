Documentation Generation Scripts
--------------------------------

Config files for chain specific details are [here](./src/chains)

### Generating chain specific content

Builds markdown for 

- supported chains
- finality/consistency level table
- chain/env specific pages

from root: 

```sh
cd scripts
npm i
npm run generate
```


### Generating API docs from swagger

from root: 

```sh
cd scripts/scripts
./extract_api_docs.sh
```


### Pulling in cli docs from mono repo 

from root: 

```sh
cd scripts/scripts
./extract_cli_docs.sh
```
