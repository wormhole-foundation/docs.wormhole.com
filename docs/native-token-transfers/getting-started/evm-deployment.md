## EVM Deployment

#### Deploy your Token

If your token is not already deployed, deploy the token contract on destination chains, implementing the `INttToken` interface.

{% hint style="info" %} The `mint` and `setMinter` methods found in the `INttToken` interface are not part of the standard ERC20 interface. {% endhint %}

{% hint style="warning" %} Tokens integrated with the `NttManager` in `BURNING` mode require the `burn` method to be present. This method is not part of the standard ERC20 interface but is found in the `ERC20Burnable` and `INttToken` interfaces. {% endhint %}

#### Set Environment Variables

Copy the sample environment file located in `env/` into the target subdirectory of your choice (such as `testnet` or `mainnet`) and prefix the filename with your blockchain of choice:

```shell
mkdir env/testnet  
cp env/.env.sample env/testnet/sepolia.env
 ```
    
Do this for each blockchain network that the `NttManager` and `WormholeTransceiver` contracts will be deployed to. Then configure each `.env` file and set the `RPC` variables. Set the `MAX_OUTBOUND_LIMIT` to a non-zero value if you want to limit the number of outbound transfers.

#### Config Setup

Navigate to the `evm/cfg` directory and copy the sample configuration file:

```shell
cd cfg  
cp WormholeNttConfig.json.sample WormholeNttConfig.json
```
    
Customize the configuration file for each network by setting the appropriate values for rate limits, manager addresses, and other parameters. This file will be updated with the addresses of the deployed contracts later. Navigate back to the `evm` directory.
    
The per-chain `inBoundLimit` is set to zero by default. This means all inbound transfers will be queued by the rate limiter. Set this value accordingly.

#### Deploy Contracts

Deploy the `NttManager` and `WormholeTransceiver` contracts by running the following command for each target network:
    
```shell
bash sh/deploy_wormhole_ntt.sh -n NETWORK_TYPE -c CHAIN_NAME -k PRIVATE_KEY
```
    
Example arguments
    
```shell
-n testnet, mainnet  
-c avalanche, ethereum, sepolia
```

Save the deployed proxy contract addresses from the script output in the `WormholeNttConfig.json` file.

{% hint style="danger" %} Ensure that if the `NttManager` on the original hub chain is configured to be in `LOCKING` mode, the corresponding `NttManager` contracts on the destination spoke chains are configured to be in `BURNING` mode. If not, transfers will not go through successfully and user funds may be lost. {% endhint %}

#### Configure Contracts

After deploying the contracts and saving the addresses, run the following command to configure them for each target network:
    
```shell
bash sh/configure_wormhole_ntt.sh -n NETWORK_TYPE -c CHAIN_NAME -k PRIVATE_KEY
```
    
Example arguments:
    
```shell
-n testnet, mainnet  
-c avalanche, ethereum, sepolia
```
