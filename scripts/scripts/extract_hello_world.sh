#!/bin/bash

set -euo pipefail

echo "Grab hello-world tutorial content"
TUTORIAL_PATH="../../docs/tutorials/quick-start/hello-wormhole/"
REPO_DIR="hello-wormhole"

if [ -d $REPO_DIR ]
then
    rm -rf $REPO_DIR
fi

git clone git@github.com:wormhole-foundation/hello-wormhole.git

#rm  $TUTORIAL_PATH/*

cp $REPO_DIR/*.md $TUTORIAL_PATH 

rm -rf $REPO_DIR
