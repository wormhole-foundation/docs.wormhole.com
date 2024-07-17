## Deploy to Solana 

#### Install Dependencies

Ensure you have the following dependencies installed:
1. [Rust](https://www.rust-lang.org/tools/install) 
2. [Solana](https://docs.solanalabs.com/cli/install) v1.18.10
3. [Anchor](https://www.anchor-lang.com/docs/installation) v0.29.0

#### Deploy your SPL Token

If you haven't already, deploy your SPL token to Solana.

{% hint style="info" %}
NTT versions `>=v2.0.0+solana` support SPL tokens with transfer hooks.
{% endhint %}

#### Generate NTT Program Keypair

When you deploy a Solana program, you need to hardcode the program ID (which is itself a pubkey) into the program code. The NTT CLI allows you to do this seamlessly.

Generate a new NTT program keypair using:
```bash
solana-keygen grind --starts-with ntt:1 --ignore-case
```

#### Set SPL token Mint Authority to NTT Program

If deploying to Solana in `burning` mode, set the mint authority for your SPL token to the NTT program ID you have just generated before deploying NTT.

#### Deploy NTT

Generate or export your payer keypair, then run:
```bash
ntt add-chain Solana --latest --mode <burning or locking> --token <your-SPL-token> --payer <your-keypair.json> --program-key <your-ntt-program-keypair.json>
```

The Solana NTT program will then compile and deploy.

#### Configure NTT

As with other deployments, run the following commands to ensure that the on-chain configuration is correct and your local `deployment.json` file is synced with the on-chain state:
- `ntt status`
- `ntt pull`
- `ntt push`

{% hint style="info" %}
By default, NTT transfers to Solana support manual relaying, which requires the user to perform a transaction on Solana to complete the transfer. UI components such as Wormhole Connect support this out of the box. For automatic relaying support on Solana, **[contact](https://forms.clickup.com/45049775/f/1aytxf-10244/JKYWRUQ70AUI99F32Q)** Wormhole contributors.
{% endhint %}
