The Core Contracts are the mechanism by which all Wormhole messages are emitted. All xDapps either interact directly with the Core Contract or interact with another contract that does. There is one Core Contract on each blockchain in the ecosystem, and this is the contract which the Guardians are required to observe. The Core Contract is the contract that ultimately emits the messages the [Guardians](./guardian.md) pick up as an [Observation](../../reference/glossary.md#observation).

In general, Core Contracts are simple and can be broken down to a **sending** and **receiving** side, which we'll define next.

### Sending

{% hint style="warning" %}
Currently there are no fees to publish a message (with the exception of publishing on Solana) but this is not guaranteed to always be the case in the future.
{% hint style="warning" %}

The implementation strategy for publishMessage differs by chain, but the general strategy consists of the Core Contract posting the emitterAddress (the contract which called publishMessage), sequenceNumber, and consistencyLevel into the blockchain logs. Once the desired consistencyLevel has been reached and the message passes all of the Guardians' optional checks, the Guardian Network will produce the requested VAAs.

The method signature for publishing messages 

```
    publishMessage(
        int nonce,
        byte[] payload,
        int consistencyLevel
    ) returns int sequenceNumber
```



#### Parameters 

- **payload** - The content of the emitted message, an arbitrary byte array. It may be capped to a certain maximum length due to the constraints of individual blockchains.

- **consistencyLevel** - The level of finality to reach before emitting the Wormhole VAA. This is a defense against reorgs and rollbacks. See [this table](../../reference/parameters.md#finality) for specific settings.

- **nonce** - An index number for the message that is used to produce Batch VAAs.

#### Returns

- **sequenceNumber** - A unique number that increments for every message for a given emitter (and implicitly chain). This combined with the emitter address and emitter chain ID allows the VAA for this message to be queried from the [APIs](./api.md)



### Receiving

The method signature for receiving messages, encoded as a VAA

```
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

This does not mean an application _cannot_ specify a destination address or chain. For example the Token Bridge and Automatic Relayer contracts require that some destination details are passed and verified on the destination chain. 

Lastly, because the VAA creation is separate from relaying, there is _no additional cost_ to the multicast model when a single chain is being targeted. If the data isn't needed on a certain blockchain, don't relay it there, and it won't cost anything.