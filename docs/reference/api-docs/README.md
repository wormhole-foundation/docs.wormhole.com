Wormhole provides an HTTP API a developer can use to retrieve details about [VAAs](../glossary.md#vaa) or the [Guardian Network](../glossary.md#guardian-network), among other things.

The primary API for wormhole is a read only HTTP server used to retrieve details about VAAs or the Guardian Network.


## Documentation

See [this page](./swagger.md) for details on the paths and parameters available.


## Interactive documentation



A playground to try out some endpoints is available [here](https://doc.wormscan.io/) and is great for quick experimentation.


## Try it

### RPC endpoints

|Network|URL|
|-------|---|
|Testnet|https://api.testnet.wormscan.io/api/v1/|
|Mainnet|https://api.wormscan.io/api/v1/|

### Examples

{% tabs %}
{% tab title="Testnet" %}

Get the first page of VAAs for Testnet Polygon (chain id: 5)
```sh
curl -s 'https://api.testnet.wormscan.io/api/v1/vaas/5' \
-H 'accept: application/json' 
```

{% endtab %}
{% tab title="Mainnet" %}

Get the first page of VAAs for Polygon (chain id: 5)
```sh
curl -s 'https://api.wormscan.io/api/v1/vaas/5' \
-H 'accept: application/json' 
```

{% endtab %}
{% endtabs %}