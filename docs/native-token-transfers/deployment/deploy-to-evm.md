## Deploy to EVM

#### Deploy your Token and Ensure Compatibility

If your token is not already deployed, deploy the token contract to the destination or spoke chains.

Tokens integrated with `NttManager` in `burning` mode requre the following two functions to be present:
1. `burn(uint256 amount)`
2. `mint(address account, uint256 amount)`

These functions are not part of the standard ERC20 interface.

The [INttToken interface](https://github.com/wormhole-foundation/example-native-token-transfers/blob/main/evm/src/interfaces/INttToken.sol) documents the required functions and convenience methods, errors, and events.

Later on, we will demonstrate setting mint authority to the corresponding `NttManager` contract.

You can also follow the scripts in the [example NTT token](https://github.com/wormhole-foundation/example-ntt-token) repository to deploy a token contract.

#### Deploy NTT

Create a new NTT project:
```bash
ntt new my-ntt-deployment
cd my-ntt-deployment
```

Initialize a new `deployment.json` file, specifying the network.
```bash
# Testnet Deployment
ntt init Testnet
# Or, Mainnet Deployment
ntt init Mainnet
```

Ensure your environment is set up:
```bash
export ETH_PRIVATE_KEY=<your-evm-private-key>
```

Add each chain you'll be deploying to. The following example demonstrates configuring NTT in burn and mint mode on Ethereum Sepolia and Arbitrum Sepolia:

```bash
# Set scanner API Keys as environment variables
export SEPOLIA_SCAN_API_KEY=<your-etherscan-sepolia-api-key>
export ARBITRUMSEPOLIA_SCAN_API_KEY=<your-arbiscan-sepolia-api-key>

# Add each chain
# The contracts will be automatically verified using the scanner API keys above
ntt add-chain Sepolia --latest --mode burning --token <your-token-address>
ntt add-chain ArbitrumSepolia --latest --mode burning --token <your-token-address>
```

{% hint style="info" %}
While not recommended, if you would like to skip contract verification, you can pass the `--skip-verify` flag to the `ntt add-chain` command.
{% endhint %}

The `ntt add-chain` command takes the following parameters:
- Name of each chain
- Version of NTT to deploy (use `--latest` for the latest contract versions)
- Mode (either `burning` or `locking`)
- Your Token Contract Address

{% hint style="info" %}
The NTT CLI prints detailed logs and transaction hashes, so you can see exactly what's happening under the hood.
{% endhint %}

#### Configure NTT

The NTT CLI takes inspiration from [git](https://git-scm.com/). You can run:
- `ntt status` to check whether your `deployment.json` file is consistent with what's actually on-chain
- `ntt pull` to sync your `deployment.json` file with the on-chain configuration and set up rate limits with the appropriate number of decimals, depending on the specific chain. For example:

  For Solana, the limits are set with 9 decimal places:
    ```bash
        "inbound": {
            "Sepolia": "1000.000000000"  # inbound limit from Sepolia to Solana
        }
    ```

  For Sepolia (Ethereum testnet), the limits are set with 18 decimal places:
    ```bash
        "inbound": {
          "Solana": "1000.000000000000000000" # inbound limit from Solana to Sepolia
        }
    ```
This initial configuration ensures that the rate limits are correctly represented for each chain's token precision

- `ntt push` to sync the on-chain configuration with local changes made to your `deployment.json` file

After you deploy the NTT contracts, make sure that the deployment is properly configured and your local representation is consistent with the actual on-chain state by running `ntt status` and following the instructions shown on the screen.

#### Set Token Minter to NTT Manager

The final step in the deployment process is to set the NTT Manager as a minter of your token on all chains you have deployed to in `burning` mode. When performing a hub and spoke deployment, it is only necessary to set the NTT Manager as a minter of the token on each spoke chain.


- If you followed the [INttToken](https://github.com/wormhole-foundation/example-native-token-transfers/blob/main/evm/src/interfaces/INttToken.sol) interface, you can execute the `setMinter(address newMinter)` function.
- If you have a custom process to manage your token minter(s), you should now follow that process to add the corresponding NTT Manager as a minter.

{% hint style="info" %}
By default, NTT transfers to EVM blockchains support automatic relaying, which does not require the user to perform a transaction on the destination chain to complete the transfer.
{% endhint %}
