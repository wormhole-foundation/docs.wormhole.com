#!/bin/bash

set -euo pipefail

echo "Gather relevant files from Explorer repo"

# TODO: check out from branch?

mkdir tmp
cd tmp
git clone git@github.com:wormhole-foundation/wormhole-explorer.git

npx swagger-markdown -i wormhole-explorer/api/docs/swagger.yaml -o ../../../docs/reference/api-docs/swagger.md


cd ..
rm -rf tmp
