# Getting Started

> 💡There is a basic demo interacting with the [QueryDemo](https://github.com/wormholelabs-xyz/example-queries-demo/blob/main/src/QueryDemo.sol) contract hosted at [https://wormholelabs-xyz.github.io/example-queries-demo/](https://wormholelabs-xyz.github.io/example-queries-demo/)

To get started, we will look at a simple `eth_call` request to get the total supply of WETH on Ethereum.

## RPC Basics

Before we dig into anything Queries specific, let’s look at how to make an [eth_call](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call) against a public Ethereum RPC. Before we can make a request, we need some information about the contract we want to call.

- **to**: the contract to call
  - WETH is [0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2)
- **data**: the method identifier and ABI-encoded parameters
  - `web3.eth.abi.encodeFunctionSignature("totalSupply()")` → `0x18160ddd`
- **block id**: the block number, hash, or tag, like `latest`, `safe`, or `finalized`

```jsx
// Request
curl https://ethereum.publicnode.com -X POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{"to":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","data":"0x18160ddd"},"latest"],"id":1}'
// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x000000000000000000000000000000000000000000029fd3d129b582d7949e71"
}
```

Converting that result from hex gets us `3172615244782286193073777`. You can compare your result to the [Read Contract](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#readContract) tab in Etherscan. Your result will be different as WETH is minted/burned over time.

## Construct a Query

For this part, we will use the [Wormhole Query SDK](https://www.npmjs.com/package/@wormhole-foundation/wormhole-query-sdk) along with [axios](https://www.npmjs.com/package/axios) for our RPC requests.

```jsx
npm i @wormhole-foundation/wormhole-query-sdk axios
```

In order to make an `EthCallQueryRequest`, we need a specific block number or hash as well as the call data to request.

To get the latest block, we can request it from a public node using `eth_getBlockByNumber`.

```jsx
const rpc = "https://ethereum.publicnode.com";
const latestBlock: string = (
  await axios.post(rpc, {
    method: "eth_getBlockByNumber",
    params: ["latest", false],
    id: 1,
    jsonrpc: "2.0",
  })
).data?.result?.number;
```

Then construct the call data

```jsx
const callData: EthCallData = {
  to: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
  data: "0x18160ddd", // web3.eth.abi.encodeFunctionSignature("totalSupply()")
};
```

Finally, put it all together in a `QueryRequest`

```jsx
const request = new QueryRequest(
  0, // nonce
  [
    new PerChainQueryRequest(
      2, // Ethereum Wormhole Chain ID
      new EthCallQueryRequest(latestBlock, [callData])
    ),
  ]
);
```

This request consists of one `PerChainQueryRequest`, which is an `EthCallQueryRequest` to Ethereum. You can log this out as JSON to see the structure.

```jsx
console.log(JSON.stringify(request, undefined, 2));
// {
//   "nonce": 0,
//   "requests": [
//     {
//       "chainId": 2,
//       "query": {
//         "callData": [
//           {
//             "to": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
//             "data": "0x18160ddd"
//           }
//         ],
//         "blockTag": "0x11e9068"
//       }
//     }
//   ],
//   "version": 1
// }
```

## Mock a Query

For easier testing, the Query SDK provides a `QueryProxyMock` which will perform the request and sign the result with the [devnet](../reference/dev-env/tilt.md) guardian key. The `mock` call returns the same format as the Query Proxy.

```jsx
const mock = new QueryProxyMock({ 2: rpc });
const mockData = await mock.mock(request);
console.log(mockData);
// {
//   signatures: ['...'],
//   bytes: '...'
// }
```

This response is suited for on-chain use, but the SDK also includes a parser so we can read the results in the client.

```jsx
const mockQueryResponse = QueryResponse.from(mockData.bytes);
const mockQueryResult = (
  mockQueryResponse.responses[0].response as EthCallQueryResponse
).results[0];
console.log(
  `Mock Query Result: ${mockQueryResult} (${BigInt(mockQueryResult)})`
);
// Mock Query Result: 0x000000000000000000000000000000000000000000029fd09d4d81addb3ccfee (3172556167631284394053614)
```

Testing this all together might look like the following

```jsx
import {
  EthCallData,
  EthCallQueryRequest,
  EthCallQueryResponse,
  PerChainQueryRequest,
  QueryProxyMock,
  QueryRequest,
  QueryResponse,
} from "@wormhole-foundation/wormhole-query-sdk";
import axios from "axios";

const rpc = "https://ethereum.publicnode.com";
const callData: EthCallData = {
  to: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
  data: "0x18160ddd", // web3.eth.abi.encodeFunctionSignature("totalSupply()")
};

(async () => {
  const latestBlock: string = (
    await axios.post(rpc, {
      method: "eth_getBlockByNumber",
      params: ["latest", false],
      id: 1,
      jsonrpc: "2.0",
    })
  ).data?.result?.number;
  if (!latestBlock) {
    console.error(`❌ Invalid block returned`);
    return;
  }
  console.log("Latest Block:     ", latestBlock, `(${BigInt(latestBlock)})`);
  const targetResponse = await axios.post(rpc, {
    method: "eth_call",
    params: [callData, latestBlock],
    id: 1,
    jsonrpc: "2.0",
  });
  // console.log(finalizedResponse.data);
  if (targetResponse.data.error) {
    console.error(`❌ ${targetResponse.data.error.message}`);
  }
  const targetResult = targetResponse.data?.result;
  console.log("Target Result:    ", targetResult, `(${BigInt(targetResult)})`);
  // form the query request
  const request = new QueryRequest(
    0, // nonce
    [
      new PerChainQueryRequest(
        2, // Ethereum Wormhole Chain ID
        new EthCallQueryRequest(latestBlock, [callData])
      ),
    ]
  );
  //   console.log(JSON.stringify(request, undefined, 2));
  const mock = new QueryProxyMock({ 2: rpc });
  const mockData = await mock.mock(request);
  //   console.log(mockData);
  const mockQueryResponse = QueryResponse.from(mockData.bytes);
  const mockQueryResult = (
    mockQueryResponse.responses[0].response as EthCallQueryResponse
  ).results[0];
  console.log(
    `Mock Query Result: ${mockQueryResult} (${BigInt(mockQueryResult)})`
  );
})();
```

### Fork Testing

It is common to test against a local fork of mainnet with something like

```jsx
anvil --fork-url https://ethereum.publicnode.com
```

In order for mock requests to verify against the mainnet Core bridge contract, we need to replace the current guardian set with the single devnet key used by the mock.

Here's an example for Ethereum mainnet, where the `-a` parameter is the [Core bridge address](../reference/constants.md#core-contracts) on that chain.

```jsx
npx @wormhole-foundation/wormhole-cli evm hijack -a 0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B -g 0xbeFA429d57cD18b7F8A4d91A2da9AB4AF05d0FBe
```

If you are using `EthCallWithFinality`, you will need to mine additional blocks (32, on Anvil) after the latest transaction in order for it to become finalized. Anvil supports [auto-mining](https://book.getfoundry.sh/reference/anvil/#mining-modes) with the `-b` flag if you want to test code that waits naturally for the chain to advance. For integration tests, you may want to simply `anvil_mine` with `0x20`.

## Make a QueryRequest

```jsx
const serialized = request.serialize();
const proxyResponse =
  (await axios.post) <
  QueryProxyQueryResponse >
  (QUERY_URL,
  {
    bytes: Buffer.from(serialized).toString("hex"),
  },
  { headers: { "X-API-Key": YOUR_API_KEY } });
```

A testnet Query Proxy is available at `https://testnet.query.wormhole.com/v1/query`

A mainnet Query Proxy is available at ` https://query.wormhole.com/v1/query`

## Verify a QueryResponse On-Chain

A [QueryResponse abstract contract](https://github.com/wormhole-foundation/wormhole-solidity-sdk/blob/main/src/QueryResponse.sol) is provided to assist with verifying query responses. Simply `forge install wormhole-foundation/wormhole-solidity-sdk`. Broadly, using a query response on-chain comes down to 3 steps.

1. Parse and verify the query response.
   1. The `parseAndVerifyQueryResponse` handles verifying the Guardian signatures against the current guardian set stored in the Core bridge contract.
2. Validate the request details. This may be different for every integrator depending on their use case, but generally checks the following.
   1. Is the request against the expected chain?
   2. Is the request of the expected type? The `parseEthCall*` helpers perform this check when parsing.
   3. Is the resulting block number and time expected? Some consumers might require that a block number be higher than the last, or the block time be within the last 5 minutes. `validateBlockNum` and `validateBlockTime` can help with the checks.
   4. Is the request for the expected contract and function signature? The `validateMultipleEthCallData` can help with non-parameter-dependent cases.
   5. Is the result of the expected length for the expected result type?
3. `abi.decode` the result.

See the [QueryDemo](https://github.com/wormholelabs-xyz/example-queries-demo/blob/main/src/QueryDemo.sol#L86-L135) contract for an example and read the docstrings of the above methods for detailed usage instructions.

## Submit a QueryResponse On-Chain

The `QueryProxyQueryResponse` result requires a slight tweak when submitting to the contract to match the format of `function parseAndVerifyQueryResponse(bytes memory response, IWormhole.Signature[] memory signatures)`. A helper function, `signaturesToEvmStruct`, is provided in the SDK for this.

For example, submitting the transaction to the demo contract:

```jsx
const tx = await contract.updateCounters(
  `0x${response.data.bytes}`,
  signaturesToEvmStruct(response.data.signatures)
);
```
