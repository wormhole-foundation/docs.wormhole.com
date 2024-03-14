#!/bin/bash

set -euo pipefail

echo "Grab sdk README content"
FILE_PATH="../../../docs/reference/sdk-docs/README.md"
REPO_DIR="wormhole-sdk-ts"
BRANCH="main"

if [ -d $REPO_DIR ]
then
    rm -rf $REPO_DIR
fi

git clone git@github.com:wormhole-foundation/wormhole-sdk-ts.git

cd $REPO_DIR
git checkout $BRANCH 
cp README.md $FILE_PATH
cd -

rm -rf $REPO_DIR
