#!/bin/bash

set -euo pipefail



# This _almost_ works but its README is wrong, the npm package is just `@gitbook/openapi` 
# https://github.com/GitbookIO/openapi-autodoc

# git clone git@github.com:wormhole-foundation/wormhole-explorer.git
# npx @gitbook/openapi -f wormhole-explorer/api/docs/swagger.yaml 


# Produces this in markdown:

# {% swagger src="./.gitbook/assets/openapi.yaml" path="/v1/signed_vaa/{chain_id}/{emitter}/{seq}" method="get" %}
# [openapi.yaml](<./.gitbook/assets/openapi.yaml>)
# {% endswagger %}

