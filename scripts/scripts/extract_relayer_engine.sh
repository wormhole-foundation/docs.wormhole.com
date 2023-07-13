#!/bin/bash

set -euo pipefail

echo "Grab relayer engine tutorial content"

TUTORIAL_PATH="../../docs/tutorials/quick-start/relayer/"
REPO_DIR="relayer-engine"

if [ -d $REPO_DIR ]
then
    rm -rf $REPO_DIR
fi


git clone git@github.com:wormhole-foundation/relayer-engine.git

#rm  $TUTORIAL_PATH/*

cp $REPO_DIR/*.md $TUTORIAL_PATH 

rm -rf $REPO_DIR 
