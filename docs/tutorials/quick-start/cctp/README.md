
Circle offers a way to transfer native USDC between blockchains through the Cirlce [Cross Chain Transfer Protocol](https://www.circle.com/en/cross-chain-transfer-protocol).

While this protocol is wholly separate from Wormhole itself, Wormhole offers several useful solutions to make using CCTP easier.


{% hint style="info" %}
At the moment only a [handful of chains](https://developers.circle.com/stablecoins/docs/supported-domains) support CCTP.  
{% endhint %}


## Automatic Relaying

In order to complete the CCTP transfer, the [Circle Attestation](https://developers.circle.com/stablecoins/reference/getattestation) must be delivered to the destination chain. 

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

## Wormhole Connect 

Supporting CCTP with manual transfers or automatic transfers is easy using the Wormhole Connect widget.

A full tutorial is available [here](./wh-connect.md)

## Connect SDK

Supporting CCTP with manual transfers or automatic transfers is straight forward using the Connect SDK.

A full tutorial is available [here](./sdk.md)