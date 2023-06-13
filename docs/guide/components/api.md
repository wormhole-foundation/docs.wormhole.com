Wormhole API
-------------


The primary API for wormhole is a read only REST server used to retrieve details about VAAs or the Guardian Network.

A playground to try out some endpoints is available [here](https://xlabs.github.io/wormscan-doc/).



{% tabs %}

{% tab title="Testnet" %}

Get the first page of VAAs for Testnet Polygon (chain id: 5)
```sh
curl -s 'https://api.testnet.wormscan.io/api/v1/vaas/5'  -H 'accept: application/json' 
```

{% endtab %}

{% tab title="Mainnet" %}

Get the first page of VAAs for Polygon (chain id: 5)
```sh
curl -s 'https://api.wormscan.io/api/v1/vaas/5'  -H 'accept: application/json' 
```

{% endtab %}


{% endtabs %}