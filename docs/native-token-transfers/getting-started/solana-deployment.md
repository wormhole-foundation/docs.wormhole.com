## Solana Deployment

#### Set Environment Variables
    
```shell
# Runner Configurations:
export SOLANA_RPC_URL="" 
export WORMHOLE_PROGRAM_ID="" # wormhole core layer program id
export LEDGER_DERIVATION_PATH="" # derivation path

# Deployment configuration:
export MINT_ADDRESS="" # the program id of your spl token
```
    
#### Generate Program Key
    
    solana-keygen grind --ignore-case --starts-with ntt:1 export NTT_PROGRAM_ID=<your-generated-key>
    
    
#### Replace Program ID
    
Replace the `declare_id!` macro value in `lib.rs` with your generated program ID.

#### Build Program
    
```shell    
cd solana
anchor build --arch sbf -- --features "mainnet" # if you are deploying to testnet, you should use "solana-devnet" instead of mainnet
```

#### Deploy Program
    
```shell
solana program -k usb://ledger?key=<your derivation path> deploy --url $SOLANA_RPC_URL --program-id "$NTT_PROGRAM_ID.json" target/deploy/example_native_token_transfers.so
```

#### Initialize Program
        
```shell
make build
npx tsx ./ts/scripts/initializeNtt.ts
# The script will print the manager emitter address PDA. You can always derive this pda again, but might be easier if you take note of it at this point. You'll need it later to do cross-registrations.
```
