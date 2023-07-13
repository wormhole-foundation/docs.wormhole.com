#!/bin/bash

set -euo pipefail

echo "Grab hello-token tutorial content"
TUTORIAL_PATH="../../docs/tutorials/quick-start/hello-token"
REPO_DIR="./hello-token"

if [ -d $REPO_DIR ]
then
    rm -rf $REPO_DIR 
fi

git clone git@github.com:wormhole-foundation/hello-token.git

#rm  $TUTORIAL_PATH/*

cp $REPO_DIR/*.md $TUTORIAL_PATH

rm -rf $REPO_DIR 
