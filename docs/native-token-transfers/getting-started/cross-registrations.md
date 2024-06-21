## Cross Registrations

### EVM
Create or update evm/config/<env>/peers.json with the addresses of your EVM managers and transceivers. If adding a Solana manager, add two new properties `managerAddress` and `transceiverAddress`. These correspond to the Solana NTT deployment program-id and the manager-emitter-address PDA (printed when initializing the program).
    
Once complete, run update peers script:

```shell
bash -c ./ts-scripts/shell/update-peer-addresses.sh
```

### Solana
Update `evmNttDeployments` on solana/ts/scripts/env.ts with the addresses of your EVM managers and transceivers. Then run the cross registrations script:

```shell
npx tsx ./ts/scripts/updatePeers.ts
```