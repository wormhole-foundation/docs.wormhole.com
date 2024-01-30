#!/bin/bash

set -euo pipefail

echo "Grab connect-sdk README content"
FILE_PATH="../../../docs/reference/sdk-docs/connect-sdk.md"
REPO_DIR="connect-sdk"
BRANCH="main"

if [ -d $REPO_DIR ]
then
    rm -rf $REPO_DIR
fi

git clone git@github.com:wormhole-foundation/connect-sdk.git

cd $REPO_DIR
git checkout $BRANCH 
cp README.md $FILE_PATH
cd -

rm -rf $REPO_DIR
