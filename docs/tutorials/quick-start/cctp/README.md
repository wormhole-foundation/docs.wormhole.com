
Wormhole Connect and the Wormhole Connect SDK support fast, cheap, native USDC bridging between all networks supported by Circle's Cross chain Transfer Protocol. [Cross Chain Transfer Protocol](https://www.circle.com/en/cross-chain-transfer-protocol) is Circle's native USDC cross chain transfer attestation service.

While this protocol is wholly separate from Wormhole itself, Wormhole builds on top of CCTP and adds several useful augmentations making simpler to use and more useful for end users. These features include, automated relaying (so that user's don't need to redeem USDC transfers themselves), gas payment on the destination chain (so users can transfer USDC without paying gas on the destination chain), and gas drop off (allowing users to convert some USDC to the destination gas token upon a successful transfer). 


{% hint style="info" %}
Wormhole supports all CCTP supported chains but at the moment only a [handful of chains](https://developers.circle.com/stablecoins/docs/supported-domains) are supported by Circle.  
{% endhint %}

You can use Wormhole's CCTP Powered USDC bridging by embedding the [Connect](../../quick-start/wh-connect) Widget or by integrating the Connect [SDK](./sdk.md) directly. 


## Automatic Relaying

In order to complete a CCTP transfer, the [Circle Attestation](https://developers.circle.com/stablecoins/reference/getattestation) must be delivered to the destination chain. 

This attestation delivery may be difficult or impossible in some contexts. For example, in a browser context when the user does not wish to wait for finality to deliver the attestation.  To address this difficulty, the Wormhole CCTP Relayer may be used either with the [Wormhole Connect Widget](#wormhole-connect) or more directly with the [Connect SDK](#connect-sdk).

The [Wormhole CCTP Relayer](TODO) charges a fee to deliver the attestation and complete the transfer.

|Chain|Fee|
|---|---|
|Ethereum|1.0 USDC|
|Everything else|0.1 USDC|


Another advantage of using the Automatic Relaying feature is the opportunity to transfer some native gas to the receiver on the destination chain. This feature is referred to as `native gas dropoff`. 

The ability to perform native gas dropoff addresses the common issue where a user may hold a balance of USDC but has no native gas with which to perform subsequent transactions.

{% hint style="info" %}
Native gas dropoff is limited to TODO
{% endhint %}


<!-- TODO: explainer of how the CCTP relayer works -->

## CCTP via Wormhole Connect Widget

Supporting CCTP USDC transfers is incredibly simple using the Wormhole Connect widget. Enable USDC brdiging directly in your dapp in as few as 5 lines of code and get all the user friendly features built by Wormhole along with it. 

A full tutorial is available [here](../wormhole-connect/wh-connect.md)

## CCTP via Connect SDK

Supporting CCTP with manual transfers or automatic transfers is straight forward using the Connect SDK.

A full tutorial is available [here](./sdk.md)
