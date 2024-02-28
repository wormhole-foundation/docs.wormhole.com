#!/bin/bash

set -euo pipefail
source ./append_cta.sh

echo "Grab relayer engine tutorial content"

TUTORIAL_PATH="../../docs/tutorials/quick-start/relayer/"
REPO_DIR="relayer-engine"

if [ -d $REPO_DIR ]
then
    rm -rf $REPO_DIR
fi


git clone git@github.com:wormhole-foundation/relayer-engine.git

# Copy files and then append the text to each copied file
for FILE in $REPO_DIR/*.md; do
    cp "$FILE" $TUTORIAL_PATH 
    # Extract filename from path
    FILENAME=$(basename "$FILE")
    # Append the text to the copied file
    echo "$CTA" >> "${TUTORIAL_PATH}/${FILENAME}"
done


rm -rf $REPO_DIR 
