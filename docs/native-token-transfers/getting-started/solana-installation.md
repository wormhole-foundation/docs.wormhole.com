## Solana Installation

#### Install Solana and Anchor

Ensure you have the correct versions of Solana and Anchor CLI tools installed. Install necessary dependencies as listed in `rust-toolchain` and other setup files (`forge`, `anvil`, `cast`).
    
```shell
solana-install-init
```
    
#### Check versions
    
```shell
[toolchain] anchor_version = "0.29.0" solana_version = "1.17.2"`
```
Ensure the versions match those specified in `Anchor.toml`.
    
#### Build
    
```shell
anchor build
```
