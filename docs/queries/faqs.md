# FAQs

## What libraries are available for handling queries?

The [Query TypeScript SDK](https://npmjs.com/package/@wormhole-foundation/wormhole-query-sdk) can be used to create query requests, mock query responses for testing, and parse query responses along with some utilities for posting query responses.

The [Solidity QueryResponse Abstract Contract](https://github.com/wormhole-foundation/wormhole-solidity-sdk/blob/main/src/QueryResponse.sol) can be used to parse and verify query responses on EVM chains. Simply `forge install wormhole-foundation/wormhole-solidity-sdk`. See the [Solana Stake Pool](https://github.com/wormholelabs-xyz/example-queries-solana-stake-pool) repo as an example use case. The SDK also contains [`QueryTest.sol`](https://github.com/wormhole-foundation/wormhole-solidity-sdk/blob/main/src/testing/helpers/QueryTest.sol) for mocking query requests and responses in forge tests.

The [Go query package](https://github.com/wormhole-foundation/wormhole/tree/main/node/pkg/query) can also be used to create query requests and parse query responses.

> 💡 A Rust SDK for Solana is being actively investigated by the Wormhole Contributors. See the [Solana Queries Verification](https://github.com/wormholelabs-xyz/example-queries-solana-verify) repo as a proof of concept.

## Are there any examples?

There sure are!

- [Getting Started](./getting-started.md)
- Basic Demo
  - [Contract](https://github.com/wormholelabs-xyz/example-queries-demo/blob/main/src/QueryDemo.sol)
  - [UI](https://vaa.dev/#/ccq)
- [Solana Stake Pool](https://github.com/wormholelabs-xyz/example-queries-solana-stake-pool)
- [Solana PDA / Token Account Balance](https://github.com/wormholelabs-xyz/example-queries-solana-pda)
- [Solana Queries Verification](https://github.com/wormholelabs-xyz/example-queries-solana-verify)

## What is the format of the response signature?

The guardian node calculates an ECDSA signature using [crypto.Sign](https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.21/crypto#Sign) where the digest hash is `keccak256("query_response_0000000000000000000|"+keccak256(responseBytes))`. See the [Guardian Key Usage](https://github.com/wormhole-foundation/wormhole/blob/main/whitepapers/0009_guardian_key.md) whitepaper for more background. This signature then has the guardian's index in the guardian set appended to the end.

> 💡 If you are used to `ecrecover` you will notice that the `v` byte is `0` or `1` as opposed to `27` or `28`. The `signaturesToEvmStruct` method in the [Query TypeScript SDK](https://npmjs.com/package/@wormhole-foundation/wormhole-query-sdk) accounts for this as well as structuring the signatures into an `IWormhole.SignatureStruct[]`.

## Can anyone run a Query Proxy server?

The Query Proxy is currently permissioned by the Guardians. The guardian nodes are configured to only listen to a set of allow-listed proxies. However, it is possible that this restriction may be lifted in the future and/or more proxies could be added.

It is also important to note that the proxies do not impact the verifiability the request and result - i.e. their role in the process is trustless.
