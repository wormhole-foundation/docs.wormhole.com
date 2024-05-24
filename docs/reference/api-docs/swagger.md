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
### /api/v1/address/:address

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
| 200 | OK | [response.Response-address_AddressOverview](#responseresponse-address_addressoverview) |
| 400 | Bad Request |  |
| 404 | Not Found |  |
| 500 | Internal Server Error |  |

### /api/v1/global-tx/:chain_id/:emitter/:seq

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
| 200 | OK | [transactions.Tx](#transactionstx) |
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
| 200 | OK | [response.Response-governor_GovConfig](#responseresponse-governor_govconfig) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/config/:guardian_address

#### GET
##### Description

Returns governor configuration for a given guardian.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [response.Response-governor_GovConfig](#responseresponse-governor_govconfig) |
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
| 200 | OK | [response.Response-array_governor_EnqueuedVaas](#responseresponse-array_governor_enqueuedvaas) |
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
| 200 | OK | [response.Response-array_governor_EnqueuedVaaDetail](#responseresponse-array_governor_enqueuedvaadetail) |
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
| 200 | OK | [response.Response-array_governor_GovernorLimit](#responseresponse-array_governor_governorlimit) |
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
| 200 | OK | [response.Response-array_governor_NotionalAvailable](#responseresponse-array_governor_notionalavailable) |
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
| 200 | OK | [response.Response-array_governor_NotionalAvailableDetail](#responseresponse-array_governor_notionalavailabledetail) |
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
| 200 | OK | [response.Response-array_governor_NotionalLimitDetail](#responseresponse-array_governor_notionallimitdetail) |
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
| 200 | OK | [response.Response-array_governor_NotionalLimitDetail](#responseresponse-array_governor_notionallimitdetail) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/governor/notional/max_available/:chain

#### GET
##### Description

Returns the maximum amount of notional value available for a given blockchain.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [response.Response-governor_MaxNotionalAvailableRecord](#responseresponse-governor_maxnotionalavailablerecord) |
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
| 200 | OK | [response.Response-array_governor_GovStatus](#responseresponse-array_governor_govstatus) |
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
| 200 | OK | [response.Response-governor_GovStatus](#responseresponse-governor_govstatus) |
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
| 200 | OK | [ [transactions.TransactionCountResult](#transactionstransactioncountresult) ] |
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
| 200 | OK | [ [observations.ObservationDoc](#observationsobservationdoc) ] |
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
| 200 | OK | [ [observations.ObservationDoc](#observationsobservationdoc) ] |
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
| 200 | OK | [ [observations.ObservationDoc](#observationsobservationdoc) ] |
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
| 200 | OK | [ [observations.ObservationDoc](#observationsobservationdoc) ] |
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
| 200 | OK | [ [observations.ObservationDoc](#observationsobservationdoc) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/operations

#### GET
##### Description

Find all operations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| address | query | address of the emitter | No | string |
| txHash | query | hash of the transaction | No | string |
| page | query | page number | No | integer |
| pageSize | query | pageSize | No | integer |
| sourceChain | query | source chains of the operation, separated by comma | No | string |
| targetChain | query | target chains of the operation, separated by comma | No | string |
| appId | query | appID of the operation | No | string |
| exclusiveAppId | query | single appId of the operation | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [operations.OperationResponse](#operationsoperationresponse) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/operations/{chain_id}/{emitter}/{seq}

#### GET
##### Description

Find operations by ID (chainID/emitter/sequence).

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| seq | path | sequence of the VAA | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [operations.OperationResponse](#operationsoperationresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/protocols/stats

#### GET
##### Description

Returns the representative stats for the top protocols

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [protocols.ProtocolTotalValuesDTO](#protocolsprotocoltotalvaluesdto) ] |
| 500 | Internal Server Error | [ [protocols.ProtocolTotalValuesDTO](#protocolsprotocoltotalvaluesdto) ] |

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

### /api/v1/relays/:chain/:emitter/:sequence

#### GET
##### Description

Get a specific relay information by chainID, emitter address and sequence.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [relays.RelayResponse](#relaysrelayresponse) |
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
| 200 | OK | [transactions.ScorecardsResponse](#transactionsscorecardsresponse) |
| 500 | Internal Server Error |  |

### /api/v1/token/:chain_id/:token_address

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
| 200 | OK | [transactions.Token](#transactionstoken) |
| 400 | Bad Request |  |
| 404 | Not Found |  |

### /api/v1/top-100-corridors

#### GET
##### Description

Returns a list of the top 100 tokens, sorted in descending order by the number of transactions.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| timeSpan | query | Time span, supported values: 2d and 7d (default is 2d). | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [stats.TopCorridorsResult](#statstopcorridorsresult) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

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
| 200 | OK | [transactions.TopAssetsResponse](#transactionstopassetsresponse) |
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
| 200 | OK | [transactions.TopChainPairsResponse](#transactionstopchainpairsresponse) |
| 500 | Internal Server Error |  |

### /api/v1/top-symbols-by-volume

#### GET
##### Description

Returns a list of symbols by origin chain and tokens.
The volume is calculated using the notional price of the symbol at the day the VAA was emitted.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| timeSpan | query | Time span, supported values: 7d, 15d and 30d (default is 7d). | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [stats.TopSymbolByVolumeResult](#statstopsymbolbyvolumeresult) |
| 400 | Bad Request |  |
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
| sortOrder | query | Sort results in ascending or descending order. | No | string |
| address | query | Filter transactions by Address. | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [transactions.ListTransactionsResponse](#transactionslisttransactionsresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/transactions/:chain_id/:emitter/:seq

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
| 200 | OK | [transactions.TransactionDetail](#transactionstransactiondetail) |
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
| 200 | OK | [response.Response-array_vaa_VaaDoc](#responseresponse-array_vaa_vaadoc) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/:chain_id

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
| 200 | OK | [response.Response-array_vaa_VaaDoc](#responseresponse-array_vaa_vaadoc) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/:chain_id/:emitter

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
| 200 | OK | [response.Response-array_vaa_VaaDoc](#responseresponse-array_vaa_vaadoc) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/:chain_id/:emitter/:seq

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
| 200 | OK | [response.Response-array_vaa_VaaDoc](#responseresponse-array_vaa_vaadoc) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/vaas/:chain_id/:emitter/:seq/duplicated

#### GET
##### Description

Find duplicated VAA by ID.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chain_id | path | id of the blockchain | Yes | integer |
| emitter | path | address of the emitter | Yes | string |
| seq | path | sequence of the VAA | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [response.Response-array_vaa_VaaDoc](#responseresponse-array_vaa_vaadoc) |
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
| 200 | OK | [response.Response-array_vaa_VaaStats](#responseresponse-array_vaa_vaastats) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/version

#### GET
##### Description

Get version/release information.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [infrastructure.VersionResponse](#infrastructureversionresponse) |
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
| 200 | OK | [transactions.ChainActivity](#transactionschainactivity) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /api/v1/x-chain-activity/tops

#### GET
##### Description

Search for a specific period of time the number of transactions and the volume.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| timespan | query | Time span, supported values: 1d, 1mo and 1y | Yes | string |
| from | query | From date, supported format 2006-01-02T15:04:05Z07:00 | Yes | string |
| to | query | To date, supported format 2006-01-02T15:04:05Z07:00 | Yes | string |
| appId | query | Search by appId | No | string |
| sourceChain | query | Search by sourceChain | No | string |
| targetChain | query | Search by targetChain | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [transactions.ChainActivityTopResult](#transactionschainactivitytopresult) ] |
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
| 200 | OK | [governor.AvailableNotionalResponse](#governoravailablenotionalresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/governor/enqueued_vaas

#### GET
##### Description

Get enqueued VAAs

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [governor.EnqueuedVaaResponse](#governorenqueuedvaaresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/governor/is_vaa_enqueued/:chain_id/:emitter/:seq

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
| 200 | OK | [governor.EnqueuedVaaResponse](#governorenqueuedvaaresponse) |
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
| 200 | OK | [ [governor.TokenList](#governortokenlist) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/guardianset/current

#### GET
##### Description

Get current guardian set.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [guardian.GuardianSetResponse](#guardianguardiansetresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/heartbeats

#### GET
##### Description

Get heartbeats for guardians

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [heartbeats.HeartbeatsResponse](#heartbeatsheartbeatsresponse) |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### /v1/signed_batch_vaa/:chain_id/:emitter/sequence/:seq

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

### /v1/signed_vaa/:chain_id/:emitter/:seq

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

#### address.AddressOverview

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| vaas | [ [vaa.VaaDoc](#vaavaadoc) ] |  | No |

#### github_com_wormhole-foundation_wormhole-explorer_api_routes_guardian_guardian.GuardianSet

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addresses | [ string ] |  | No |
| index | integer |  | No |

#### governor.AvailableNotionalItemResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bigTransactionSize | string |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| notionalLimit | string |  | No |
| remainingAvailableNotional | string |  | No |

#### governor.AvailableNotionalResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| entries | [ [governor.AvailableNotionalItemResponse](#governoravailablenotionalitemresponse) ] |  | No |

#### governor.Emitter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddress | string |  | No |
| enqueuedVaas | [ [governor.EnqueuedVAA](#governorenqueuedvaa) ] |  | No |
| totalEnqueuedVaas | integer |  | No |

#### governor.EnqueuedVAA

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| notionalValue | integer |  | No |
| releaseTime | string |  | No |
| sequence | string |  | No |
| txHash | string |  | No |

#### governor.EnqueuedVaa

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| emitterAddress | string |  | No |
| notionalValue | integer |  | No |
| sequence | string |  | No |
| txHash | string |  | No |

#### governor.EnqueuedVaaDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| emitterAddress | string |  | No |
| notionalValue | integer |  | No |
| releaseTime | integer |  | No |
| sequence | string |  | No |
| txHash | string |  | No |

#### governor.EnqueuedVaaItemResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddress | string |  | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| notionalValue | string |  | No |
| releaseTime | integer |  | No |
| sequence | integer |  | No |
| txHash | string |  | No |

#### governor.EnqueuedVaaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| entries | [ [governor.EnqueuedVaaItemResponse](#governorenqueuedvaaitemresponse) ] |  | No |

#### governor.EnqueuedVaas

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| enqueuedVaas | [ [governor.EnqueuedVaa](#governorenqueuedvaa) ] |  | No |

#### governor.GovConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chains | [ [governor.GovConfigChains](#governorgovconfigchains) ] |  | No |
| counter | integer |  | No |
| createdAt | string |  | No |
| id | string |  | No |
| nodeName | string |  | No |
| tokens | [ [governor.GovConfigfTokens](#governorgovconfigftokens) ] |  | No |
| updatedAt | string |  | No |

#### governor.GovConfigChains

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bigTransactionSize | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| notionalLimit | integer |  | No |

#### governor.GovConfigfTokens

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| originAddress | string |  | No |
| originChainId | integer |  | No |
| price | number |  | No |

#### governor.GovStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chains | [ [governor.GovStatusChains](#governorgovstatuschains) ] |  | No |
| createdAt | string |  | No |
| id | string |  | No |
| nodeName | string |  | No |
| updatedAt | string |  | No |

#### governor.GovStatusChainEmitter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddress | string |  | No |
| enqueuedVaas |  |  | No |
| totalEnqueuedVaas | integer |  | No |

#### governor.GovStatusChains

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| emitters | [ [governor.GovStatusChainEmitter](#governorgovstatuschainemitter) ] |  | No |
| remainingAvailableNotional | integer |  | No |

#### governor.GovernorLimit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableNotional | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| maxTransactionSize | integer |  | No |
| notionalLimit | integer |  | No |

#### governor.MaxNotionalAvailableRecord

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableNotional | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| createdAt | string |  | No |
| emitters | [ [governor.Emitter](#governoremitter) ] |  | No |
| id | string |  | No |
| nodeName | string |  | No |
| updatedAt | string |  | No |

#### governor.NotionalAvailable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableNotional | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |

#### governor.NotionalAvailableDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableNotional | integer |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| createdAt | string |  | No |
| id | string |  | No |
| nodeName | string |  | No |
| updatedAt | string |  | No |

#### governor.NotionalLimitDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| createdAt | string |  | No |
| id | string |  | No |
| maxTransactionSize | integer |  | No |
| nodeName | string |  | No |
| notionalLimit | integer |  | No |
| updatedAt | string |  | No |

#### governor.TokenList

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| originAddress | string |  | No |
| originChainId | [vaa.ChainID](#vaachainid) |  | No |
| price | number |  | No |

#### guardian.GuardianSetResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| guardianSet | [github_com_wormhole-foundation_wormhole-explorer_api_routes_guardian_guardian.GuardianSet](#github_com_wormhole-foundation_wormhole-explorer_api_routes_guardian_guardianguardianset) |  | No |

#### heartbeats.HeartbeatNetworkResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contractAddress | string |  | No |
| errorCount | string |  | No |
| height | string |  | No |
| id | integer |  | No |

#### heartbeats.HeartbeatResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| p2pNodeAddr | string |  | No |
| rawHeartbeat | [heartbeats.RawHeartbeat](#heartbeatsrawheartbeat) |  | No |
| verifiedGuardianAddr | string |  | No |

#### heartbeats.HeartbeatsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| entries | [ [heartbeats.HeartbeatResponse](#heartbeatsheartbeatresponse) ] |  | No |

#### heartbeats.RawHeartbeat

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bootTimestamp | string |  | No |
| counter | string |  | No |
| features | [ string ] |  | No |
| guardianAddr | string |  | No |
| networks | [ [heartbeats.HeartbeatNetworkResponse](#heartbeatsheartbeatnetworkresponse) ] |  | No |
| nodeName | string |  | No |
| timestamp | string |  | No |
| version | string |  | No |

#### infrastructure.VersionResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| branch | string |  | No |
| build | string |  | No |
| build_date | string |  | No |
| machine | string |  | No |
| user | string |  | No |

#### observations.ObservationDoc

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

#### operations.Content

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payload | object |  | No |
| standarizedProperties | [operations.StandardizedProperties](#operationsstandardizedproperties) |  | No |

#### operations.Data

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type | string |  | No |
| value | object |  | No |

#### operations.EmitterAddress

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| hex | string |  | No |
| native | string |  | No |

#### operations.OperationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [operations.Content](#operationscontent) |  | No |
| data | object |  | No |
| emitterAddress | [operations.EmitterAddress](#operationsemitteraddress) |  | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| id | string |  | No |
| sequence | string |  | No |
| sourceChain | [operations.SourceChain](#operationssourcechain) |  | No |
| targetChain | [operations.TargetChain](#operationstargetchain) |  | No |
| vaa | [operations.Vaa](#operationsvaa) |  | No |

#### operations.SourceChain

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attribute | [operations.Data](#operationsdata) |  | No |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| from | string |  | No |
| status | string |  | No |
| timestamp | string |  | No |
| transaction | [operations.Transaction](#operationstransaction) |  | No |

#### operations.StandardizedProperties

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

#### operations.TargetChain

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| from | string |  | No |
| status | string |  | No |
| timestamp | string |  | No |
| to | string |  | No |
| transaction | [operations.Transaction](#operationstransaction) |  | No |

#### operations.Transaction

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| secondTxHash | string |  | No |
| txHash | string |  | No |

#### operations.Vaa

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| guardianSetIndex | integer |  | No |
| isDuplicated | boolean |  | No |
| raw | [ integer ] |  | No |

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

#### protocols.ProtocolTotalValuesDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error | string |  | No |
| last_day_diff_percentage | string |  | No |
| last_day_messages | integer |  | No |
| protocol | string |  | No |
| total_messages | integer |  | No |
| total_value_locked | number |  | No |
| total_value_secured | number |  | No |
| total_value_transferred | number |  | No |

#### relays.DeliveryReponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| budget | string |  | No |
| execution | [relays.ResultExecutionResponse](#relaysresultexecutionresponse) |  | No |
| maxRefund | string |  | No |
| relayGasUsed | integer |  | No |
| targetChainDecimals | integer |  | No |

#### relays.InstructionsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| encodedExecutionInfo | string |  | No |
| extraReceiverValue | { **"_hex"**: string, **"_isBigNumber"**: boolean } |  | No |
| refundAddress | string |  | No |
| refundChainId | integer |  | No |
| refundDeliveryProvider | string |  | No |
| requestedReceiverValue | { **"_hex"**: string, **"_isBigNumber"**: boolean } |  | No |
| senderAddress | string |  | No |
| sourceDeliveryProvider | string |  | No |
| targetAddress | string |  | No |
| targetChainId | integer |  | No |
| vaaKeys | [  ] |  | No |

#### relays.RelayDataResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| delivery | [relays.DeliveryReponse](#relaysdeliveryreponse) |  | No |
| fromTxHash | string |  | No |
| instructions | [relays.InstructionsResponse](#relaysinstructionsresponse) |  | No |
| maxAttempts | integer |  | No |
| toTxHash | string |  | No |

#### relays.RelayResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| completedAt | string |  | No |
| data | [relays.RelayDataResponse](#relaysrelaydataresponse) |  | No |
| failedAt | string |  | No |
| id | string |  | No |
| receivedAt | string |  | No |
| relayer | string |  | No |
| status | string |  | No |

#### relays.ResultExecutionResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| detail | string |  | No |
| gasUsed | string |  | No |
| refundStatus | string |  | No |
| revertString | string |  | No |
| status | string |  | No |
| transactionHash | string |  | No |

#### response.Response-address_AddressOverview

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [address.AddressOverview](#addressaddressoverview) |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_governor_EnqueuedVaaDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [governor.EnqueuedVaaDetail](#governorenqueuedvaadetail) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_governor_EnqueuedVaas

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [governor.EnqueuedVaas](#governorenqueuedvaas) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_governor_GovStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [governor.GovStatus](#governorgovstatus) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_governor_GovernorLimit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [governor.GovernorLimit](#governorgovernorlimit) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_governor_NotionalAvailable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [governor.NotionalAvailable](#governornotionalavailable) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_governor_NotionalAvailableDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [governor.NotionalAvailableDetail](#governornotionalavailabledetail) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_governor_NotionalLimitDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [governor.NotionalLimitDetail](#governornotionallimitdetail) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_vaa_VaaDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [vaa.VaaDoc](#vaavaadoc) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-array_vaa_VaaStats

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [vaa.VaaStats](#vaavaastats) ] |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-governor_GovConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [governor.GovConfig](#governorgovconfig) |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-governor_GovStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [governor.GovStatus](#governorgovstatus) |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.Response-governor_MaxNotionalAvailableRecord

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [governor.MaxNotionalAvailableRecord](#governormaxnotionalavailablerecord) |  | No |
| pagination | [response.ResponsePagination](#responseresponsepagination) |  | No |

#### response.ResponsePagination

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| next | string |  | No |

#### stats.TokenResult

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitter_chain | [vaa.ChainID](#vaachainid) |  | No |
| token_address | string |  | No |
| token_chain | [vaa.ChainID](#vaachainid) |  | No |
| txs | number |  | No |
| volume | number |  | No |

#### stats.TopCorridor

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitter_chain | [vaa.ChainID](#vaachainid) |  | No |
| target_chain | [vaa.ChainID](#vaachainid) |  | No |
| token_address | string |  | No |
| token_chain | [vaa.ChainID](#vaachainid) |  | No |
| txs | integer |  | No |

#### stats.TopCorridorsResult

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| corridors | [ [stats.TopCorridor](#statstopcorridor) ] |  | No |

#### stats.TopSymbolByVolumeResult

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| symbols | [ [stats.TopSymbolResult](#statstopsymbolresult) ] |  | No |

#### stats.TopSymbolResult

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| symbol | string |  | No |
| tokens | [ [stats.TokenResult](#statstokenresult) ] |  | No |
| txs | number |  | No |
| volume | number |  | No |

#### transactions.AssetWithVolume

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| symbol | string |  | No |
| tokenAddress | string |  | No |
| tokenChain | [vaa.ChainID](#vaachainid) |  | No |
| volume | string |  | No |

#### transactions.AttributeDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type | string |  | No |
| value | object |  | No |

#### transactions.ChainActivity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| txs | [ [transactions.Tx](#transactionstx) ] |  | No |

#### transactions.ChainActivityTopResult

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| destination_chain | string |  | No |
| emitter_chain | string |  | No |
| from | string |  | No |
| to | string |  | No |
| volume | integer |  | No |

#### transactions.ChainPair

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| destinationChain | [vaa.ChainID](#vaachainid) |  | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| numberOfTransfers | string |  | No |

#### transactions.Destination

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chain | integer |  | No |
| percentage | number |  | No |
| volume | number |  | No |

#### transactions.DestinationTx

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

#### transactions.GlobalTransactionDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| destinationTx | [transactions.DestinationTx](#transactionsdestinationtx) |  | No |
| id | string |  | No |
| originTx | [transactions.OriginTx](#transactionsorigintx) |  | No |

#### transactions.ListTransactionsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| transactions | [ [transactions.TransactionDetail](#transactionstransactiondetail) ] |  | No |

#### transactions.OriginTx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attribute | [transactions.AttributeDoc](#transactionsattributedoc) |  | No |
| from | string |  | No |
| status | string |  | No |
| txHash | string |  | No |

#### transactions.ScorecardsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| 24h_messages | string | Number of VAAs emitted in the last 24 hours (includes Pyth messages). | No |
| 24h_tx_count | string | Number of VAAs emitted in the last 24 hours (does not include Pyth messages). | No |
| 24h_volume | string | Volume transferred through the token bridge in the last 24 hours, in USD. | No |
| total_messages | string | Number of VAAs emitted since the creation of the network (includes Pyth messages). | No |
| total_tx_count | string | Number of VAAs emitted since the creation of the network (does not include Pyth messages) | No |
| total_volume | string |  | No |
| tvl | string | Total value locked in USD. | No |

#### transactions.Token

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| coingeckoId | string |  | No |
| decimals | integer |  | No |
| symbol | string |  | No |

#### transactions.TopAssetsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assets | [ [transactions.AssetWithVolume](#transactionsassetwithvolume) ] |  | No |

#### transactions.TopChainPairsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainPairs | [ [transactions.ChainPair](#transactionschainpair) ] |  | No |

#### transactions.TransactionCountResult

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| time | string |  | No |

#### transactions.TransactionDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emitterAddress | string | EmitterAddress contains the VAA's emitter address, encoded in hex. | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| emitterNativeAddress | string | EmitterNativeAddress contains the VAA's emitter address, encoded in the emitter chain's native format. | No |
| globalTx | [transactions.GlobalTransactionDoc](#transactionsglobaltransactiondoc) |  | No |
| id | string |  | No |
| payload | object |  | No |
| standardizedProperties | object |  | No |
| symbol | string |  | No |
| timestamp | string |  | No |
| tokenAmount | string |  | No |
| txHash | string |  | No |
| usdAmount | string |  | No |

#### transactions.Tx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chain | integer |  | No |
| destinations | [ [transactions.Destination](#transactionsdestination) ] |  | No |
| percentage | number |  | No |
| volume | number |  | No |

#### vaa.ChainID

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| vaa.ChainID | integer |  |  |

#### vaa.VaaDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appId | string | AppId is an extension field - it is not present in the guardian API. | No |
| digest | string |  | No |
| emitterAddr | string |  | No |
| emitterChain | [vaa.ChainID](#vaachainid) |  | No |
| emitterNativeAddr | string |  | No |
| guardianSetIndex | integer |  | No |
| id | string |  | No |
| indexedAt | string |  | No |
| isDuplicated | boolean |  | No |
| payload | object | Payload is an extension field - it is not present in the guardian API. | No |
| timestamp | string |  | No |
| txHash | string | TxHash is an extension field - it is not present in the guardian API. | No |
| updatedAt | string |  | No |
| vaa | [ integer ] |  | No |
| version | integer |  | No |

#### vaa.VaaStats

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chainId | [vaa.ChainID](#vaachainid) |  | No |
| count | integer |  | No |
