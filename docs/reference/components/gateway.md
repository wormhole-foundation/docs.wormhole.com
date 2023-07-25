
{% hint style="info" %}
Note: This page is a work in progress, check back for updates
{% endhint %}

## Overview

_Wormhole Gateway_ is a Cosmos-SDK chain that provides a way to bridge non-native assets into the Cosmos ecosystem and serves as a source for unified liquidity across Cosmos chains.

{% hint style="success" %}
Because IBC is used to bridge assets from Gateway to Cosmos chains, liquidity fragmentation is avoided and liquidity for foreign assets bridged via Wormhole into Cosmos is unified across Cosmos chains.
{% endhint %}

In addition to facilitating asset transfers, the _Wormhole Gateway_ (FKA `wormchain`, AKA `Shai Hulud`) allows Wormhole to ensure proper accounting with the [accountant](https://github.com/wormhole-foundation/wormhole/blob/main/whitepapers/0011_accountant.md) as well as limit transfer volume with the [governor](https://github.com/wormhole-foundation/wormhole/blob/main/whitepapers/0007_governor.md).


## Details

The Wormhole Gateway is implemented as a set of contracts and modules.

### Wormhole Core Contracts

The [core contracts](./core-contracts.md) to emit messages and verify [Guardian](./guardian.md) signatures are still required on each Cosmos chain.

### IBC Shim Contract

A CosmWasm contract that handles bridging into and out of the Cosmos ecosystem by translating between Wormhole and IBC message formats. It maintains a mapping of `chainId -> channelId` for whitelisted IBC channels to send packets over and accept packets from.

The contract supports transfers _into_ the Cosmos ecosystem by receiving [Contract Controlled Transfer VAAs](./vaa.md#token--message).

- Redeems the VAA against the [Token Bridge](./core-contracts.md#token-bridge)
- Mints [Token Factory](#token-factory-module) tokens
- Decodes the additional payload as a [`GatewayIbcTokenBridgePayload`](#gatewayibctokenbridgepayload)
- Sends tokens via IBC to destination cosmos chains

The contract also supports transfers _out of_ the Cosmos ecosystem by implementing an `execute` handler which accepts a `GatewayIbcTokenBridgePayload` and an amount of tokenfactory tokens in `info.funds` (which are the tokens to be bridged out). 

- Burn the [Token Factory](#token-factory-module) tokens 
- Send the corresponding CW20 tokens to the [Token Bridge](./core-contracts.md#token-bridge) via IBC  
<!-- TODO: what calls this? TokenBridge or source contract? -->
- Calls `InitiateTransfer` or `InitiateTransferWithPayload` based on whether the [`GatewayIbcTokenBridgePayload`](#gatewayibctokenbridgepayload) is of type `Simple` or `ContractControlled`


### Token Factory Module

A deployment of the canonical [Token Factory](https://github.com/osmosis-labs/osmosis/tree/main/x/tokenfactory) module on Wormchain.


### IBC Composability Middleware

The IBC Composability Middleware sits on top of the [PFM (Packet Forwarding Module)](https://github.com/strangelove-ventures/packet-forward-middleware) and IBC Hooks middleware to compose the two together. It enables integrators on Cosmos chains to support both the `Cosmos -> Cosmos` and `Cosmos -> External` flows with a single payload structure.

It accepts a payload of [`GatewayIbcTokenBridgePayload`](#gatewayibctokenbridgepayload) and determines whether to call the PFM or IBC Hooks middleware by looking up the `chainId` in the payload.

1. If the `chainId` is an IBC-enabled chain, it formats a payload for the PFM to forward the ICS20 transfer to the IBC-enabled destination chain. 
2. If the `chainId` is an external chain, it will format a payload for the IBC Hooks middleware to call the IBC Shim contract’s `execute` handler to bridge out.

### IBC Hooks Middleware

A deployment of the [IBC Hooks Middleware](https://github.com/osmosis-labs/osmosis/commits/main/x/ibc-hooks) on Wormchain.

## Integration

Integration with Wormhole Gateway can be accomplished with a few lines of code and supports 

- Transfers from an **External Chain** to any supported **Cosmos Chain**, see [Into Cosmos](#into-cosmos)
- Transfers from any supported **Cosmos Chain** to an **External Chain**, see [Out of Comsos](#out-of-cosmos)
- Transfers between any supported **Cosmos Chains**, see [Between Cosmos Chains](#between-cosmos-chains)

### Into Cosmos

To bridge assets into a Cosmos chain, an asset transfer is initiated on the foreign chain with a [payload](#gatewayibctokenbridgepayload) that is understood by the Gateway, or more specifically, the [IBC Shim Contract](#ibc-shim-contract). 

Once received on the Gateway, the asset's CW20 representation is sent to the destination chain through IBC using the well established [ICS20 protocol](https://github.com/cosmos/ibc/tree/main/spec/app/ics-020-fungible-token-transfer).


<!-- TODO: need ibc translator addr -->
An example using the [SDK](../sdk-docs/README.md):
```ts
import * as wh from '@certusone/wormhole-sdk';

// ...

const transferDetails = {
  simple: {                                         // This is a simple transfer, no additional payload 
    chain: 4000,                                    // Chain Id of the Cosmos chain we're sending to
    recipient: "<cosmos-chain-recipient-address>",  // Address of recipient, TODO: fill in once deployed
    fee: 0,                                         // Fee for transfer (0 for now)
    nonce: 0,                                        
  }
}

// Convert the transfer details to a Uint8Array for sending
const payload = new Uint8Array(Buffer.from(JSON.stringify(transferDetails)))

// Send transfer transaction on Ethereum
await txReceipt = wh.transferFromEth(
  wh.consts.TESTNET.eth.token_bridge    // source chain token bridge address
  wallet,                               // signer for eth tx
  "0xdeadbeef...",                      // address of token being transferred
  10000000n,                            // amount of token in it's base units
  wh.consts.CHAINS.wormchain,           // chain id we're sending to
  "<ibc-translator-contract-addr>",     // The address of the ibc-translator contract on the Gateway, TODO: fill in once deployed
  0,                                    // relayer fee, 0 for now
  {},                                   // tx overrides (gas fees, etc...)
  payload                               // The payload Gateway uses to route transfers
);

// ...
```
### Out of Cosmos

To bridge assets out of the Cosmos ecosystem or between Cosmos chains, an IBC transfer is initiated on the source chain to the Gateway with a payload containing details about the transfer in the `memo` field.

For example, using [cosmjs](https://github.com/cosmos/cosmjs):
```ts
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic);
const client = await SigningStargateClient.connectWithSigner(
  simapp.tendermintUrl,
  wallet,
  defaultSigningClientOptions
);

const memo = JSON.stringify({
    gateway_ibc_token_bridge_payload:{
        simple:{
            chain:     0,   // chain id of receiver
            recipient: "",  // address of receiver
            fee:       0,   // fee to cover transfer
            nonce:     0,   // 
        }
    }
})

const result = await client.sendIbcTokens(
  faucet.address0,                      // sender address
  "<ibc-translator-contract-addr>",     // receiver address, TODO: fill in once deployed
  coin(1234, "ucosm"),                  // amount and coin
  "<port>",                             // source port, TODO: fill in once deployed
  "<channel>",                          // source channel, TODO: fill in once deployed
  timeoutHeight,                        // 
  timeoutTimestamp,                     // 
  0,                                    // fee to cover transaction 
  memo                                  // formatted payload with details about transfer
);
```

### Between Cosmos Chains

Transfers between Cosmos chains work exactly the same as [bridging out of Cosmos](#out-of-cosmos) from an implementation perspective. The exception being that the `chain` id passed is a Cosmos chain.

## Datastructures

Core datastructures that are used by the Gateway protocol.

### GatewayIbcTokenBridgePayload

The core datastructure of Gateway token transfers is the `GatewayIbcTokenBridgePayload`, containing details about the transfer that the Gateway uses to perform the transfer. 

```rust
#[cw_serde]
pub enum GatewayIbcTokenBridgePayload {
    Simple {
				chain: u16,
				recipient: Binary,
				fee: Uint128,
				nonce: u32
		},
		ContractControlled {
				chain: u16,
				contract: Binary,
				payload: Binary,
				nonce: u32
		}
}
```

## See Also 

The _Wormhole Gateway_ is, of course, open source and the source is available [here](https://github.com/wormhole-foundation/wormhole/tree/main/wormchain)

<!-- TODO: change branch to `main` once merged -->

The contracts that make this possible are available [here](https://github.com/wormhole-foundation/wormhole/tree/gateway-integration/cosmwasm/contracts)

<!-- TODO: outdated?
A protocol description for generic message passing using the Gateway is available [here](https://github.com/wormhole-foundation/wormhole/blob/mainnet/whitepapers/0012_ibc_generic_messaging.md).

For more details about the design, see the [design document](https://github.com/wormhole-foundation/wormhole/blob/gateway-integration/wormchain/design/design.md).

Also, the [roadmap](https://github.com/wormhole-foundation/wormhole/blob/gateway-integration/wormchain/design/roadmap.md) document provides information on future feature implementations.
-->
