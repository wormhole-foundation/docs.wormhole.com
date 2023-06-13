#!/bin/bash

set -euo pipefail


echo "Gather relevant files from wormhole repo"

# TODO: checkout branch?

mkdir tmp
cd tmp
git clone git@github.com:wormhole-foundation/wormhole.git

cp wormhole/clients/js/README.md ../../../docs/reference/cli-docs


cd ..
rm -rf tmp
