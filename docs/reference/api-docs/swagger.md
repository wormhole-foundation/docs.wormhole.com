# Wormholescan API
Wormhole Guardian API
This is the API for the Wormhole Guardian and Explorer.
The API has two namespaces: wormholescan and guardian.
wormholescan is the namespace for the explorer and the new endpoints. The prefix is /api/v1.
guardian is the legacy namespace backguard compatible with guardian node API. The prefix is /v1.
This API is public and does not require authentication although some endpoints are rate limited.
Check each endpoint documentation for more information.

## Version: 1.0

### Terms of service
<https://wormhole.com/>

**Contact information:**  
API Support  
<https://discord.com/invite/wormholecrypto>  
info@wormhole.com  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

---
### /api/v1/address/{address}

#### GET
##### Description

Lookup an address

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| address | path | address | Yes | string |
| page | query | Page number. Starts at 0. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_address_AddressOverview](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-github_com_wormhole-foundation_wormhole-explorer_api_handlers_address_addressoverview) |
| 400 | Bad Request |  |
| 404 | Not Found |  |
| 500 | Internal Server Error |  |

### /api/v1/global-tx/{chain_id}/{emitter}/{seq}

#### GET
##### Description

Find a global transaction by VAA ID
Global transactions is a logical association of two transactions that are related to each other by a unique VAA ID.
The first transaction is created on the origin chain when the VAA is emitted.
The second transaction is created on the destination chain when the VAA is redeemed.
If the response only contains an origin tx the VAA was not redeemed.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| seq | path | sequence of the VAA | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_wormscan_transactions.Tx](#routes_wormscan_transactionstx) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/config

#### GET
##### Description

Returns governor configuration for all guardians.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovConfig](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_govconfig) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/config/:guardian_address

#### GET
##### Description

Returns governor configuration for a given guardian.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovConfig](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_govconfig) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/enqueued_vaas/

#### GET
##### Description

Returns enqueued VAAs for each blockchain.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_EnqueuedVaas](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_enqueuedvaas) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/enqueued_vaas/:chain

#### GET
##### Description

Returns all enqueued VAAs for a given blockchain.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_EnqueuedVaaDetail](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_enqueuedvaadetail) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/limit

#### GET
##### Description

Returns the governor limit for all blockchains.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovernorLimit](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_governorlimit) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/notional/available

#### GET
##### Description

Returns the amount of notional value available for each blockchain.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_NotionalAvailable](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_notionalavailable) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/notional/available/:chain

#### GET
##### Description

Returns the amount of notional value available for a given blockchain.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_NotionalAvailableDetail](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_notionalavailabledetail) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/notional/limit

#### GET
##### Description

Returns the detailed notional limit for all blockchains.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_NotionalLimitDetail](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_notionallimitdetail) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/notional/limit/:chain

#### GET
##### Description

Returns the detailed notional limit available for a given blockchain.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_NotionalLimitDetail](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_notionallimitdetail) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/notional/max_available/:chain

#### GET
##### Description

Returns the maximum amount of notional value available for a given blockchain.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_MaxNotionalAvailableRecord](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_maxnotionalavailablerecord) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/status

#### GET
##### Description

Returns the governor status for all guardians.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovStatus](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_govstatus) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/status/:guardian_address

#### GET
##### Description

Returns the governor status for a given guardian.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovStatus](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_govstatus) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/health

#### GET
##### Description

Health check

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | { **"status"**: string } |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/last-txs

#### GET
##### Description

Returns the number of transactions by a defined time span and sample rate.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| timeSpan | query | Time Span, default: 1d, supported values: [1d, 1w, 1mo]. 1mo ​​is 30 days. | No | string |
| sampleRate | query | Sample Rate, default: 1h, supported values: [1h, 1d]. Valid configurations with timeSpan: 1d/1h, 1w/1d, 1mo/1d | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.TransactionCountResult](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactionstransactioncountresult) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/observations

#### GET
##### Description

Returns all observations, sorted in descending timestamp order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_observations.ObservationDoc](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_observationsobservationdoc) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/observations/:chain

#### GET
##### Description

Returns all observations for a given blockchain, sorted in descending timestamp order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_observations.ObservationDoc](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_observationsobservationdoc) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/observations/:chain/:emitter

#### GET
##### Description

Returns all observations for a specific emitter address, sorted in descending timestamp order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_observations.ObservationDoc](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_observationsobservationdoc) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/observations/:chain/:emitter/:sequence

#### GET
##### Description

Find observations identified by emitter chain, emitter address and sequence.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_observations.ObservationDoc](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_observationsobservationdoc) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/observations/:chain/:emitter/:sequence/:signer/:hash

#### GET
##### Description

Find a specific observation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_observations.ObservationDoc](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_observationsobservationdoc) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/ready

#### GET
##### Description

Ready check

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | { **"ready"**: string } |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/scorecards

#### GET
##### Description

Returns a list of KPIs for Wormhole.
TVL is total value locked by token bridge contracts in USD.
Volume is the all-time total volume transferred through the token bridge in USD.
24h volume is the volume transferred through the token bridge in the last 24 hours, in USD.
Total Tx count is the number of transaction bridging assets since the creation of the network (does not include Pyth or other messages).
24h tx count is the number of transaction bridging assets in the last 24 hours (does not include Pyth or other messages).
Total messages is the number of VAAs emitted since the creation of the network (includes Pyth messages).

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_wormscan_transactions.ScorecardsResponse](#routes_wormscan_transactionsscorecardsresponse) |
| 500 | Internal Server Error |  |

### /api/v1/token/{chain_id}/{token_address}

#### GET
##### Description

Returns a token symbol, coingecko id and address by chain and token address.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| token_address | path | token address | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.Token](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactionstoken) |
| 400 | Bad Request |  |
| 404 | Not Found |  |

### /api/v1/top-assets-by-volume

#### GET
##### Description

Returns a list of emitter_chain and asset pairs with ordered by volume.
The volume is calculated using the notional price of the symbol at the day the VAA was emitted.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| timeSpan | query | Time span, supported values: 7d, 15d, 30d. | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_wormscan_transactions.TopAssetsResponse](#routes_wormscan_transactionstopassetsresponse) |
| 500 | Internal Server Error |  |

### /api/v1/top-chain-pairs-by-num-transfers

#### GET
##### Description

Returns a list of the emitter_chain and destination_chain pair ordered by transfer count.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| timeSpan | query | Time span, supported values: 7d, 15d, 30d. | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_wormscan_transactions.TopChainPairsResponse](#routes_wormscan_transactionstopchainpairsresponse) |
| 500 | Internal Server Error |  |

### /api/v1/transactions/

#### GET
##### Description

Returns transactions. Output is paginated.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. Starts at 0. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_wormscan_transactions.ListTransactionsResponse](#routes_wormscan_transactionslisttransactionsresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/transactions/{chain_id}/{emitter}/{seq}

#### GET
##### Description

Find VAA metadata by ID.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| seq | path | sequence of the VAA | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_wormscan_transactions.TransactionDetail](#routes_wormscan_transactionstransactiondetail) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/

#### GET
##### Description

Returns all VAAs. Output is paginated and can also be be sorted.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |
| txHash | query | Transaction hash of the VAA | No | string |
| parsedPayload | query | include the parsed contents of the VAA, if available | No | boolean |
| appId | query | filter by application ID | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_VaaDoc](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_vaadoc) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/{chain_id}

#### GET
##### Description

Returns all the VAAs generated in specific blockchain.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_VaaDoc](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_vaadoc) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/{chain_id}/{emitter}

#### GET
##### Description

Returns all all the VAAs generated by a specific emitter address.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| toChain | query | destination chain | No | integer |
| page | query | Page number. | No | integer |
| pageSize | query | Number of elements per page. | No | integer |
| sortOrder | query | Sort results in ascending or descending order. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_VaaDoc](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_vaadoc) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/{chain_id}/{emitter}/{seq}

#### GET
##### Description

Find a VAA by ID.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| seq | path | sequence of the VAA | Yes | integer |
| parsedPayload | query | include the parsed contents of the VAA, if available | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_VaaDoc](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_vaadoc) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/parse

#### POST
##### Description

Parse a VAA.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [parser.ParseVaaWithStandarizedPropertiesdResponse](#parserparsevaawithstandarizedpropertiesdresponse) |
| 400 | Bad Request |  |
| 404 | Not Found |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/vaa-counts

#### GET
##### Description

Returns the total number of VAAs emitted for each blockchain.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_VaaStats](#github_com_wormhole-foundation_wormhole-explorer_api_responseresponse-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_vaastats) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/version

#### GET
##### Description

Get version/release information.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_wormscan_infrastructure.VersionResponse](#routes_wormscan_infrastructureversionresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/x-chain-activity

#### GET
##### Description

Returns a list of chain pairs by origin chain and destination chain.
The list could be rendered by notional or transaction count.
The volume is calculated using the notional price of the symbol at the day the VAA was emitted.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| timeSpan | query | Time span, supported values: 7d, 30d, 90d, 1y and all-time (default is 7d). | No | string |
| by | query | Renders the results using notional or tx count (default is notional). | No | string |
| apps | query | List of apps separated by comma (default is all apps). | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_wormscan_transactions.ChainActivity](#routes_wormscan_transactionschainactivity) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /swagger.json

#### GET
##### Description

Returns the swagger specification for this API.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | object |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

---
### /v1/governor/available_notional_by_chain

#### GET
##### Description

Get available notional by chainID
Since from the wormhole-explorer point of view it is not a node, but has the information of all nodes,
in order to build the endpoints it was assumed:
There are N number of remainingAvailableNotional values in the GovernorConfig collection. N = number of guardians
for a chainID. The smallest remainingAvailableNotional value for a chainID is used for the endpoint response.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_guardian_governor.AvailableNotionalResponse](#routes_guardian_governoravailablenotionalresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/governor/enqueued_vaas

#### GET
##### Description

Get enqueued VAAs

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_guardian_governor.EnqueuedVaaResponse](#routes_guardian_governorenqueuedvaaresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/governor/is_vaa_enqueued/{chain_id}/{emitter}/{seq}

#### GET
##### Description

Check if vaa is enqueued

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| seq | path | sequence of the vaa | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_guardian_governor.EnqueuedVaaResponse](#routes_guardian_governorenqueuedvaaresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/governor/token_list

#### GET
##### Description

Get token list
Since from the wormhole-explorer point of view it is not a node, but has the information of all nodes,
in order to build the endpoints it was assumed:
For tokens with the same originChainId and originAddress and different price values for each node,
the price that has most occurrences in all the nodes for an originChainId and originAddress is returned.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.TokenList](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governortokenlist) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/guardianset/current

#### GET
##### Description

Get current guardian set.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_guardian_guardian.GuardianSetResponse](#routes_guardian_guardianguardiansetresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/heartbeats

#### GET
##### Description

Get heartbeats for guardians

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [routes_guardian_heartbeats.HeartbeatsResponse](#routes_guardian_heartbeatsheartbeatsresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/signed_batch_vaa/{chain_id}/{emitter}/sequence/{seq}

#### GET
##### Description

get a batch of VAA []byte from a chainID, emitter address and sequence.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| seq | path | sequence of the VAA | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | { **"vaaBytes"**: [ integer ] } |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/signed_vaa/{chain_id}/{emitter}/{seq}

#### GET
##### Description

get a VAA []byte from a chainID, emitter address and sequence.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| seq | path | sequence of the VAA | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | { **"vaaBytes"**: [ integer ] } |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

---
### Models

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_address.AddressOverview

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| vaas | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa.VaaDoc](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaavaadoc) ] |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.Emitter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddress | string |  | No |
| enqueuedVaas | integer |  | No |
| totalEnqueuedVaas | integer |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.EnqueuedVaa

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| emitterAddress | string |  | No |
| notionalValue | integer |  | No |
| sequence | string |  | No |
| txHash | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.EnqueuedVaaDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| emitterAddress | string |  | No |
| notionalValue | integer |  | No |
| releaseTime | integer |  | No |
| sequence | string |  | No |
| txHash | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.EnqueuedVaas

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| enqueuedVaas | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.EnqueuedVaa](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorenqueuedvaa) ] |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chains | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovConfigChains](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorgovconfigchains) ] |  | No |
| counter | integer |  | No |
| createdAt | string |  | No |
| id | string |  | No |
| nodeName | string |  | No |
| tokens | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovConfigfTokens](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorgovconfigftokens) ] |  | No |
| updatedAt | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovConfigChains

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bigTransactionSize | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| notionalLimit | integer |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovConfigfTokens

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| originAddress | string |  | No |
| originChainId | integer |  | No |
| price | number |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chains | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovStatusChains](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorgovstatuschains) ] |  | No |
| createdAt | string |  | No |
| id | string |  | No |
| nodeName | string |  | No |
| updatedAt | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovStatusChainEmitter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddress | string |  | No |
| enqueuedVaas |  |  | No |
| totalEnqueuedVaas | integer |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovStatusChains

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| emitters | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovStatusChainEmitter](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorgovstatuschainemitter) ] |  | No |
| remainingAvailableNotional | integer |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovernorLimit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableNotional | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| maxTransactionSize | integer |  | No |
| notionalLimit | integer |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.MaxNotionalAvailableRecord

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableNotional | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| createdAt | string |  | No |
| emitters | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.Emitter](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governoremitter) ] |  | No |
| id | string |  | No |
| nodeName | string |  | No |
| updatedAt | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.NotionalAvailable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableNotional | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.NotionalAvailableDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableNotional | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| createdAt | string |  | No |
| id | string |  | No |
| nodeName | string |  | No |
| updatedAt | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.NotionalLimitDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| createdAt | string |  | No |
| id | string |  | No |
| maxTransactionSize | integer |  | No |
| nodeName | string |  | No |
| notionalLimit | integer |  | No |
| updatedAt | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.TokenList

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| originAddress | string |  | No |
| originChainId | [vaa.ChainID](#vaachainid) |  | No |
| price | number |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_observations.ObservationDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddr | string |  | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| guardianAddr | string |  | No |
| hash | [ integer ] |  | No |
| id | string |  | No |
| indexedAt | string |  | No |
| sequence | string |  | No |
| signature | [ integer ] |  | No |
| txHash | [ integer ] |  | No |
| updatedAt | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.DestinationTx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| blockNumber | string |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| from | string |  | No |
| method | string |  | No |
| status | string |  | No |
| timestamp | string |  | No |
| to | string |  | No |
| txHash | string |  | No |
| updatedAt | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.GlobalTransactionDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| destinationTx | [github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.DestinationTx](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactionsdestinationtx) |  | No |
| id | string |  | No |
| originTx | [github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.OriginTx](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactionsorigintx) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.OriginTx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| from | string |  | No |
| status | string |  | No |
| txHash | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.Token

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| coingeckoId | string |  | No |
| decimals | integer |  | No |
| symbol | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.TransactionCountResult

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| time | string |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa.VaaDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appId | string | AppId is an extension field - it is not present in the guardian API. | No |
| emitterAddr | string |  | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| emitterNativeAddr | string |  | No |
| guardianSetIndex | integer |  | No |
| id | string |  | No |
| indexedAt | string |  | No |
| payload | object | Payload is an extension field - it is not present in the guardian API. | No |
| timestamp | string |  | No |
| txHash | string | TxHash is an extension field - it is not present in the guardian API. | No |
| updatedAt | string |  | No |
| vaa | [ integer ] |  | No |
| version | integer |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa.VaaStats

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| count | integer |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_EnqueuedVaaDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.EnqueuedVaaDetail](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorenqueuedvaadetail) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_EnqueuedVaas

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.EnqueuedVaas](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorenqueuedvaas) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovStatus](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorgovstatus) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovernorLimit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovernorLimit](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorgovernorlimit) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_NotionalAvailable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.NotionalAvailable](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governornotionalavailable) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_NotionalAvailableDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.NotionalAvailableDetail](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governornotionalavailabledetail) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_NotionalLimitDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.NotionalLimitDetail](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governornotionallimitdetail) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_VaaDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa.VaaDoc](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaavaadoc) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-array_github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa_VaaStats

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaa.VaaStats](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_vaavaastats) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_address_AddressOverview

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [github_com_wormhole-foundation_wormhole-explorer_api_handlers_address.AddressOverview](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_addressaddressoverview) |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovConfig](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorgovconfig) |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_GovStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.GovStatus](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governorgovstatus) |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_response.Response-github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor_MaxNotionalAvailableRecord

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [github_com_wormhole-foundation_wormhole-explorer_api_handlers_governor.MaxNotionalAvailableRecord](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_governormaxnotionalavailablerecord) |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### parser.ParseVaaWithStandarizedPropertiesdResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| parsedPayload |  |  | No |
| standardizedProperties | [parser.StandardizedProperties](#parserstandardizedproperties) |  | No |

#### parser.StandardizedProperties

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | No |
| appIds | [ string ] |  | No |
| fee | string |  | No |
| feeAddress | string |  | No |
| feeChain | [vaa.ChainID](#vaachainid) |  | No |
| fromAddress | string |  | No |
| fromChain | [vaa.ChainID](#vaachainid) |  | No |
| toAddress | string |  | No |
| toChain | [vaa.ChainID](#vaachainid) |  | No |
| tokenAddress | string |  | No |
| tokenChain | [vaa.ChainID](#vaachainid) |  | No |

#### response.ResponsePagination

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| next | string |  | No |

#### routes_guardian_governor.AvailableNotionalItemResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bigTransactionSize | string |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| notionalLimit | string |  | No |
| remainingAvailableNotional | string |  | No |

#### routes_guardian_governor.AvailableNotionalResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| entries | [ [routes_guardian_governor.AvailableNotionalItemResponse](#routes_guardian_governoravailablenotionalitemresponse) ] |  | No |

#### routes_guardian_governor.EnqueuedVaaItemResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddress | string |  | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| notionalValue | string |  | No |
| releaseTime | integer |  | No |
| sequence | integer |  | No |
| txHash | string |  | No |

#### routes_guardian_governor.EnqueuedVaaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| entries | [ [routes_guardian_governor.EnqueuedVaaItemResponse](#routes_guardian_governorenqueuedvaaitemresponse) ] |  | No |

#### routes_guardian_guardian.GuardianSet

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addresses | [ string ] |  | No |
| index | integer |  | No |

#### routes_guardian_guardian.GuardianSetResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| guardianSet | [routes_guardian_guardian.GuardianSet](#routes_guardian_guardianguardianset) |  | No |

#### routes_guardian_heartbeats.HeartbeatNetworkResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contractAddress | string |  | No |
| errorCount | string |  | No |
| height | string |  | No |
| id | integer |  | No |

#### routes_guardian_heartbeats.HeartbeatResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| p2pNodeAddr | string |  | No |
| rawHeartbeat | [routes_guardian_heartbeats.RawHeartbeat](#routes_guardian_heartbeatsrawheartbeat) |  | No |
| verifiedGuardianAddr | string |  | No |

#### routes_guardian_heartbeats.HeartbeatsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| entries | [ [routes_guardian_heartbeats.HeartbeatResponse](#routes_guardian_heartbeatsheartbeatresponse) ] |  | No |

#### routes_guardian_heartbeats.RawHeartbeat

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bootTimestamp | string |  | No |
| counter | string |  | No |
| features | [ string ] |  | No |
| guardianAddr | string |  | No |
| networks | [ [routes_guardian_heartbeats.HeartbeatNetworkResponse](#routes_guardian_heartbeatsheartbeatnetworkresponse) ] |  | No |
| nodeName | string |  | No |
| timestamp | string |  | No |
| version | string |  | No |

#### routes_wormscan_infrastructure.VersionResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| branch | string |  | No |
| build | string |  | No |
| build_date | string |  | No |
| machine | string |  | No |
| user | string |  | No |

#### routes_wormscan_transactions.AssetWithVolume

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| symbol | string |  | No |
| tokenAddress | string |  | No |
| tokenChain | [vaa.ChainID](#vaachainid) |  | No |
| volume | string |  | No |

#### routes_wormscan_transactions.ChainActivity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| txs | [ [routes_wormscan_transactions.Tx](#routes_wormscan_transactionstx) ] |  | No |

#### routes_wormscan_transactions.ChainPair

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| destinationChain | [vaa.ChainID](#vaachainid) |  | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| numberOfTransfers | string |  | No |

#### routes_wormscan_transactions.Destination

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chain | integer |  | No |
| percentage | number |  | No |
| volume | number |  | No |

#### routes_wormscan_transactions.ListTransactionsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| transactions | [ [routes_wormscan_transactions.TransactionDetail](#routes_wormscan_transactionstransactiondetail) ] |  | No |

#### routes_wormscan_transactions.ScorecardsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| 24h_messages | string | Number of VAAs emitted in the last 24 hours (includes Pyth messages). | No |
| 24h_tx_count | string | Number of VAAs emitted in the last 24 hours (does not include Pyth messages). | No |
| 24h_volume | string | Volume transferred through the token bridge in the last 24 hours, in USD. | No |
| total_tx_count | string | Number of VAAs emitted since the creation of the network (does not include Pyth messages) | No |
| total_volume | string |  | No |
| tvl | string | Total value locked in USD. | No |

#### routes_wormscan_transactions.TopAssetsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assets | [ [routes_wormscan_transactions.AssetWithVolume](#routes_wormscan_transactionsassetwithvolume) ] |  | No |

#### routes_wormscan_transactions.TopChainPairsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainPairs | [ [routes_wormscan_transactions.ChainPair](#routes_wormscan_transactionschainpair) ] |  | No |

#### routes_wormscan_transactions.TransactionDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddress | string | EmitterAddress contains the VAA's emitter address, encoded in hex. | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| emitterNativeAddress | string | EmitterNativeAddress contains the VAA's emitter address, encoded in the emitter chain's native format. | No |
| globalTx | [github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactions.GlobalTransactionDoc](#github_com_wormhole-foundation_wormhole-explorer_api_handlers_transactionsglobaltransactiondoc) |  | No |
| id | string |  | No |
| payload | object |  | No |
| standardizedProperties | object |  | No |
| symbol | string |  | No |
| timestamp | string |  | No |
| tokenAmount | string |  | No |
| txHash | string |  | No |
| usdAmount | string |  | No |

#### routes_wormscan_transactions.Tx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chain | integer |  | No |
| destinations | [ [routes_wormscan_transactions.Destination](#routes_wormscan_transactionsdestination) ] |  | No |
| percentage | number |  | No |
| volume | number |  | No |

#### vaa.ChainID

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| vaa.ChainID | integer |  |  |
