#!/bin/bash

set -euo pipefail

echo "Grab hello-world tutorial content"

git clone git@github.com:wormhole-foundation/hello-wormhole.git

cp hello-wormhole/README.md ../../docs/tutorials/quick-start/hello-wormhole/
cp hello-wormhole/HOW_DOES_IT_WORK.md ../../docs/tutorials/quick-start/hello-wormhole/hello-wormhole-explained.md

rm -rf hello-wormhole 
