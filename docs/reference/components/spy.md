Spy
----

A Spy in the wormhole ecosystem is a daemon that eavesdrops on the gossiped messages in the [Guardian Network](./guardian.md) to pick up [VAAs](./vaa.md)

It is essentially just a socket that listens to and understands the messages passed across the guardian network. It has no built in persistence layer.

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
    --bootstrap /dns4/wormhole-testnet-v2-bootstrap.certus.one/udp/8999/quic/p2p/12D3KooWAkB9ynDur1Jtoa97LBUp8RXdhzS5uHgAfdTquJbrbN7i
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
    --bootstrap /dns4/wormhole-mainnet-v2-bootstrap.certus.one/udp/8999/quic/p2p/12D3KooWQp644DK27fd3d4Km3jr7gHiuJJ5ZGmy8hH4py7fP4FP7,/dns4/wormhole-v2-mainnet-bootstrap.xlabs.xyz/udp/8999/quic/p2p/12D3KooWNQ9tVrcb64tw6bNs2CaNrUGPM7yRrKvBBheQ5yCyPHKC
```

{% endtab %}

{% endtabs %}