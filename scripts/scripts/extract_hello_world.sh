#!/bin/bash

set -euo pipefail

echo "Grab hello-world tutorial content"

git clone git@github.com:wormhole-foundation/hello-wormhole.git

cp hello-wormhole/README.md ../../docs/tutorials/quick-start/hello-wormhole.md
cp hello-wormhole/HOW_DOES_IT_WORK.md ../../docs/tutorials/quick-start/hello-wormhole-explainer.md

rm -rf hello-wormhole 
