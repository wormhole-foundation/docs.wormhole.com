# Core Contract

The Core Contracts are the mechanism by which all Wormhole messages are emitted. All cross chain applications either interact directly with the Core Contract or interact with another contract that does. There is one Core Contract on each blockchain in the ecosystem, and this is the contract which the Guardians are required to observe. The Core Contract is the contract that ultimately emits the messages the [Guardians](./guardian.md) pick up as an [Observation](../glossary.md#observation).

In general, Core Contracts are simple and can be broken down to a **sending** and **receiving** side, which we'll define next.

## Sending

{% hint style="warning" %}
Currently there are no fees to publish a message (with the exception of publishing on Solana) but this is not guaranteed to always be the case in the future.
{% hint style="warning" %}

The implementation strategy for publishMessage differs by chain, but the general strategy consists of the Core Contract posting the emitterAddress (the contract which called publishMessage), sequenceNumber, and consistencyLevel into the blockchain logs. Once the desired consistencyLevel has been reached and the message passes all of the Guardians' optional checks, the Guardian Network will produce the requested VAAs.

The method signature for publishing messages 

```solidity
publishMessage(
    int nonce,
    byte[] payload,
    int consistencyLevel
) returns int sequenceNumber
```


### Parameters 

#### payload 

The content of the emitted message, an arbitrary byte array. It may be capped to a certain maximum length due to the constraints of individual blockchains.

#### consistencyLevel

{% hint style="info%} 
Some advanced integrators may want to get messages _before_ finality, which is where the `consistency_level` field offers chain-specific flexibility.
{% endhint %}

The `consistency_level` can be considered as a numeric `enum` data type where the value is treated differently for different chains.

It describes the level of finality to reach before the guardians will observe and attest the emitted event. This is a defense against reorgs and rollbacks since a transaction, once considered `final`, is guaranteed not to have the state changes it caused be rolled back.

Different chains use different consensus mechanisms, so there are different finality assumptions with each one, see the options for finality in the [Environments](../environments/README.md) pages.  

#### nonce

A free integer field that can be used however the developer would like. Note that a different `nonce` will result in a different digest.

### Returns

#### sequenceNumber

A unique number that increments for every message for a given emitter (and implicitly chain). This combined with the emitter address and emitter chain ID allows the VAA for this message to be queried from the [APIs](../api-docs/README.md)


## Receiving

The method signature for receiving messages, encoded as a VAA

```solidity
parseAndVerifyVAA(byte[] VAA)
```

When passed a VAA, this function will either return the payload and associated metadata for the VAA or throw an exception. An exception should only ever throw if the VAA fails signature verification, indicating the VAA is invalid or inauthentic in some form.

{% hint info="warning" %}
A developer should take care to make sure this method is called during the execution of a transaction where a VAA is passed to ensure the signatures are checked and verified.
{% endhint %}


## Multicast

Please notice that there is no destination address or chain in these functions.

VAAs simply attest that "this contract on this chain said this thing." Therefore, VAAs are multicast by default and will be verified as authentic on any chain they are brought to.

This multicast-by-default model is integral to the design. Having this multicast capacity makes it easy to synchronize state across the entire ecosystem, because a single blockchain can make its data available to every chain in a single action with low latency. This reduces the complexity of the n^2 problems encountered by routing data to a large number of blockchains.

This does not mean an application _cannot_ specify a destination address or chain. For example the Token Bridge and Standard Relayer contracts require that some destination details are passed and verified on the destination chain. 

Because the VAA creation is separate from relaying, there is _no additional cost_ to the multicast model when a single chain is being targeted. If the data isn't needed on a certain blockchain, don't relay it there, and it won't cost anything.

# Other provided contracts 

## Token Bridge

{% hint style="info" %}
Before a token transfer can be made, the token being transfered must exist as a wrapped asset on the target chain. This is done by [Attesting](./vaa.md) the token details on the target chain. 
{% endhint %}

The Token Bridge contract allows token transfers between blockchains through a lock and mint mechanism, using the [Core Contract](#core-contract) with a [specific payload](./vaa.md#transfer) to pass information about the transfer.

The Token Bridge also supports sending tokens with some additional data in the form of arbitrary byte payload attached to the token transfer. This type of transfer is referred to as a [Contract Controlled Transfer](./vaa.md#token--message).

While the [Core Contract](#core-contract) has no specific receiver by default, transfers sent through the token bridge _do_ have a specific receiver chain and address to ensure the tokens are minted to the expected recipient. 


## NFT Bridge

The NFT Bridge functions similarly to the [Token Bridge](#token-bridge) but with special rules for what may be transferred and how the wrapped version is created on the destination chain.

<!-- TODO: more -->