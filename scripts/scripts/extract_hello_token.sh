#!/bin/bash

set -euo pipefail

echo "Grab hello-token tutorial content"
TUTORIAL_PATH="../../docs/tutorials/quick-start/hello-token"


if [ -d "./hello-token" ]
then
    rm -rf hello-token
fi

git clone git@github.com:wormhole-foundation/hello-token.git

#rm  $TUTORIAL_PATH/*

cp hello-token/*.md ../../docs/tutorials/quick-start/hello-token/

rm -rf hello-token
