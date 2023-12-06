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
    --network /wormhole/testnet/2/1 \
    --bootstrap "/dns4/t-guardian-01.nodes.stable.io/udp/8999/quic/p2p/12D3KooWCW3LGUtkCVkHZmVSZHzL3C4WRKWfqAiJPz1NR7dT9Bxh,/dns4/t-guardian-02.nodes.stable.io/udp/8999/quic/p2p/12D3KooWJXA6goBCiWM8ucjzc4jVUBSqL9Rri6UpjHbkMPErz5zK"
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
    --network /wormhole/mainnet/2 \
    --bootstrap "/dns4/wormhole-v2-mainnet-bootstrap.xlabs.xyz/udp/8999/quic/p2p/12D3KooWNQ9tVrcb64tw6bNs2CaNrUGPM7yRrKvBBheQ5yCyPHKC,/dns4/wormhole.mcf.rocks/udp/8999/quic/p2p/12D3KooWDZVv7BhZ8yFLkarNdaSWaB43D6UbQwExJ8nnGAEmfHcU,/dns4/wormhole-v2-mainnet-bootstrap.staking.fund/udp/8999/quic/p2p/12D3KooWG8obDX9DNi1KUwZNu9xkGwfKqTp2GFwuuHpWZ3nQruS1"
```

{% endtab %}
{% endtabs %}

Once running, a [gRPC](https://grpc.io/) client (i.e. your program) can subscribe to a filtered stream of messages. 

To generate a client for the gRPC service use [this proto spec file](https://github.com/wormhole-foundation/wormhole/blob/main/proto/spy/v1/spy.proto).

{% hint style="info" %}
If using JavaScript/TypeScript, the [Spydk](https://www.npmjs.com/package/@certusone/wormhole-spydk) makes setting up a client easier.
{% endhint %}


## See Also


The [relayer engine](https://github.com/wormhole-foundation/relayer-engine) implements a client and persistence layer for messages received from a Spy subscription. 

