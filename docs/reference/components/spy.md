Spy
----

A Spy, in the wormhole context, is a daemon that subscribes to the gossiped messages in the [Guardian Network](./guardian.md). 

The messages available on over gossip are things like 

- [VAAs](./vaa.md) 
- [Observations](../glossary.md#observation) 
- Guardian Heartbeats

The source for the Spy is available on [Github](https://github.com/wormhole-foundation/wormhole/blob/main/node/cmd/spy/spy.go)

{% hint style="info" %}
The Spy has no persistence layer built in, so typically its paired with something like Redis or a SQL database to record relevant messages
{% endhint %}


## Use

To start a Spy locally, run the following docker command.  

{% tabs %} 
{% tab title="Testnet" %} 

```sh
docker run --platform=linux/amd64 \
    -p 7073:7073 \
    --entrypoint /guardiand ghcr.io/wormhole-foundation/guardiand:latest \
    spy \
    --nodeKey /node.key \
    --spyRPC "[::]:7073" \
    --env testnet
```

Optionally, add the flags to skip any VAAs with invalid signatures

```sh
--ethRPC https://sepolia.drpc.org/
--ethContract 0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78
```

{% endtab %}
{% tab title="Mainnet" %} 

```sh
docker run --platform=linux/amd64 \
    -p 7073:7073 \
    --entrypoint /guardiand ghcr.io/wormhole-foundation/guardiand:latest \
    spy \
    --nodeKey /node.key \
    --spyRPC "[::]:7073" \
    --env mainnet
```

Optionally add the flags to skip any VAAs with invalid signatures

```sh
--ethRPC https://eth.drpc.org
--ethContract 0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B
```

{% endtab %}
{% endtabs %}

Once running, a [gRPC](https://grpc.io/) client (i.e. your program) can subscribe to a filtered stream of messages. 

To generate a client for the gRPC service use [this proto spec file](https://github.com/wormhole-foundation/wormhole/blob/main/proto/spy/v1/spy.proto).

{% hint style="info" %}
If using JavaScript/TypeScript, the [Spydk](https://www.npmjs.com/package/@certusone/wormhole-spydk) makes setting up a client easier.
{% endhint %}


## See Also

The [Pyth Beacon](https://github.com/pyth-network/beacon) provides an alternate Spy implementation that is highly available for improved performance and reliability.

The [relayer engine](https://github.com/wormhole-foundation/relayer-engine) implements a client and persistence layer for messages received from a Spy subscription. 

