## Deploy to Solana 

#### Install Dependencies

Ensure you have the following dependencies installed:
1. [Rust](https://www.rust-lang.org/tools/install) 
2. [Solana](https://docs.solanalabs.com/cli/install) v1.18.10
3. [Anchor](https://www.anchor-lang.com/docs/installation) v0.29.0

#### Deploy NTT

Create a new NTT project (or use an existing NTT project):
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

#### Deploy your SPL Token

If you haven't already, deploy your SPL token to Solana.

<details>
<summary>Deploy your SPL Token</summary>
1. Generate a new Solana keypair in order to create a wallet:

```bash
solana-keygen grind --starts-with w:1 --ignore-case
```

2. Set Solana config to use the new keypair:
```bash
solana config set --keypair <PATH_TO_KEYPAIR_STEP1>
```

3. Set the Solana configuration to use the default RPC URL for devnet:
```bash
solana config set -ud
```

4. Request an airdrop of 2 SOL and check the balance:
```bash
solana airdrop 2 & solana balance
```

5. Install or update the SPL Token CLI:
```bash
cargo install spl-token-cli
```

6. Create a new token with the SPL Token CLI using the token-2022 program:
```bash
spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb 
```

7. Create a new account for the token:
```bash
spl-token create-account <ADDRESS_CREATED_TOKEN_STEP6> --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
```

8. Mint 1000 tokens to the created account:
```bash
spl-token mint <ADDRESS_CREATED_TOKEN_STEP6> 1000
```
</details>

{% hint style="info" %}
NTT versions `>=v2.0.0+solana` support SPL tokens with transfer hooks.
{% endhint %}

#### Generate NTT Program Keypair

When you deploy a Solana program, you need to hardcode the program ID (which is itself a pubkey) into the program code. The NTT CLI allows you to do this seamlessly.

Generate a new NTT program keypair using:

```bash
solana-keygen grind --starts-with ntt:1 --ignore-case
```
#### Derive the 'token-authority' PDA of the newly generated NTT Program id
```bash
ntt solana token-authority <your-ntt-program-keypair>
```

#### Set SPL token Mint Authority to newly generated 'token authority' PDA

```bash
spl-token authorize <TOKEN_ADDRESS> mint <DERIVED_PDA>
```

If deploying to Solana in `burning` mode, set the mint authority for your SPL token to the NTT program ID you generated in the previous step.

#### Deploy NTT

Generate or export your payer keypair, then run:

```bash
ntt add-chain Solana --latest --mode burning --token <your-SPL-token> --payer <your-keypair.json> --program-key <your-ntt-program-keypair.json>
```

The NTT Solana program will then compile and deploy.

#### Configure NTT

As with other deployments, run the following commands to ensure that the on-chain configuration is correct and your local `deployment.json` file is synced with the on-chain state:
- `ntt status`
- `ntt pull`

#### "Push deployment to Solana, specifying the Keypair that will cover the gas fees"

```bash
ntt push --payer <your-keypair.json>
```

{% hint style="info" %}
By default, NTT transfers to Solana support manual relaying, which requires the user to perform a transaction on Solana to complete the transfer. UI components such as Wormhole Connect support this out of the box. For automatic relaying support on Solana, **[contact](https://forms.clickup.com/45049775/f/1aytxf-10244/JKYWRUQ70AUI99F32Q)** Wormhole contributors.
{% endhint %}
