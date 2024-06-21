## setMinter on Your Token

To enable NTT to mint tokens on destination chains, implement the `setMinter` function in your token contract.
    
For tokens to be compatible with the NTT framework, they should adhere to the `INttToken` interface, which specifies the `mint` and `setMinter` functions. The **[example-ntt-token](https://github.com/wormhole-foundation/example-ntt-token/tree/main)** implementation provides a standard implementation of this interface, including the ability to designate a minter and mint tokens, with safeguards to ensure only the authorized minter can perform these actions. Its key components are defined below:

- **Minter Authorization:** The `onlyMinter` modifier ensures that only the designated minter can mint new tokens, enhancing security by restricting this capability.
- **Minting Tokens:** The `mint` function allows the minter to issue new tokens to a specified account, facilitating the token bridging process by minting tokens on the destination chain.
- **Minter Management:** The `setMinter` internal function updates the minter's address, providing flexibility to change the minter if needed.
