#!/bin/bash

set -euo pipefail

echo "Grab hello-world tutorial content"
TUTORIAL_PATH="../../docs/tutorials/quick-start/hello-wormhole/"


if [ -d "./wormhole" ]
then
    rm -rf hello-wormhole
fi

git clone git@github.com:wormhole-foundation/hello-wormhole.git

rm  $TUTORIAL_PATH/*

cp hello-wormhole/*.md ../../docs/tutorials/quick-start/hello-wormhole/

rm -rf hello-wormhole 
