## Cross Chain Development 


There are two primary ways to enable communication across chains with Wormhole. 

{% hint style="info" %}
The components outlined in **blue** are those that must be implemented by the developer 
{% endhint %}

{% tabs %}
{% tab title="Automatic Relayer" %}

With Automatic Relaying, only the contracts need to be developed. Leave the message delivery to a service provider. 

![Automatic Relayer](../.gitbook/assets/auto-relayer.png)

{% endtab %}
{% tab title="Specialized Relayer" %}

With Specialized Relaying, the developer can communicate with [any blockchain Wormhole supports](../reference/environments/README.md#blockchains-supported) and has the freedom to choose a delivery strategy. 

![Specialized Relayer](../.gitbook/assets/specialized-relayer.png)

{% endtab %}
{% endtabs %}


<table data-view="cards" data-card-size="large" data-full-width="false">
   <thead>
      <tr>
         <th></th>
         <th></th>
         <th data-hidden data-card-target data-type="content-ref"></th>
         <th data-hidden data-card-cover data-type="files"></th>
      </tr>
   </thead>
    <tbody>
        <tr>
            <td><strong>Automatic Relayer</strong> - EVM only</td>
            <td>Send it and forget it</td>
            <td><a href="./automatic-relayer.md">automatic-relayer.md</a></td>
            <td><a href="../.gitbook/assets/wh-ice-planet.png">wh-ice-planet.png</a></td>
        </tr>
        <tr>
            <td><strong>Specialized Relayer</strong> - All Chains</td>
            <td>Send a message to any chain</td>
            <td><a href="./specialized-relayer.md">specialized-relayer.md</a></td>
            <td><a href="../.gitbook/assets/wh-outer-space.png">wh-outer-space.png</a></td>
        </tr>
    </tbody>
</table>

More tutorials are available [here](../tutorials/README.md).