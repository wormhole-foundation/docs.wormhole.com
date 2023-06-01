#!/bin/bash

set -euo pipefail

echo "Generate docs from the sdk typedoc"
echo "UNTESTED"

mkdir tmp
cd tmp
git clone git@github.com:wormhole-foundation/wormhole.git
cd wormhole/ethereum
npm install
cd ../sdk/js
npm install
npm run build-deps
npx typedoc --plugin typedoc-plugin-markdown --out docs src/index.ts
