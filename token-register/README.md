# Token Register

Portal bridge allows protocols to permissionlessly send their tokens cross-chain, allowing access to more markets and users! Using Portal bridge as the canonical bridge to send your token cross-chain ensures there is no double wrapping of your asset when sending it between multiple chains. \
\
Following the guide below ensures that the token name and symbols appear correctly on the explorers.

{% hint style="info" %}
By adding your token into [Wormhole's token list](https://github.com/certusone/wormhole-token-list), your token will appear in the Portal bridge's token selector UI
{% endhint %}

## 📖 Terminology

Origin chain: The chain the tokens are minted on

Target chain: The chain you want to send the tokens to

## ⛓ Origin chain: Solana, Target chain: EVM chain

**Before registering:**

* Add [on-chain metadata](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/program) for the token

**Registering:**

* Register the token using Portal bridge [token register](tutorial-token-register.md#token-registration-process)
* Send tokens to target chain via Portal bridge
* Add token to the token list (Coingecko, Coinmarketcap etc)
* (Optional): Add token to [Wormhole's token list ](https://github.com/certusone/wormhole-token-list)

## ⛓ Origin chain: EVM chain, Target chain: Solana

**Before registering:**

* Ensure the token contract’s name and symbol are correct on the EVM chain

**Registering**

* Register the token using Portal bridge [token register](tutorial-token-register.md#token-registration-process)
* Send tokens to Solana via the Portal bridge
* (Optional): Add token to [Wormhole's token list ](https://github.com/certusone/wormhole-token-list)

## ⛓ Origin chain: EVM chain, Target chain: EVM chain

**Before registering:**

* Ensure the token contract’s name and symbol are correct on the origin EVM chain

**Registering**

* Register the token using Portal bridge [token register](tutorial-token-register.md#token-registration-process)
* Send tokens to target chain via the Portal bridge
* Add token to token list (Coingecko, Coinmarketcap etc)
* (Optional): Add token to [Wormhole's token list ](https://github.com/certusone/wormhole-token-list)

## ⛓ Origin chain: Solana, Target chain: Move chain

**Before registering:**

* Add [on-chain metadata](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/program) for the token

**Registering:**

* Register the token using Portal bridge [token register](https://www.notion.so/wormhole/token-register/tutorial-token-register#token-registration-process)
* Send tokens to target chain via Portal bridge
* Add token to the token list (Coingecko, Coinmarketcap etc)
* (Optional): Add token to [Wormhole's token list](https://github.com/certusone/wormhole-token-list)
* If target chain is Aptos, add to [Hippo’s token list](https://github.com/hippospace/aptos-coin-list)

## ⛓Origin chain: Move chain, Target chain: EVM chain

**Registering:**

* Register the token using Portal bridge [token register](https://www.notion.so/wormhole/token-register/tutorial-token-register#token-registration-process)
* Send tokens to target chain via the Portal bridge
* Add token to token list (Coingecko, Coinmarketcap etc)
* (Optional): Add token to [Wormhole's token list](https://github.com/certusone/wormhole-token-list)

## ⛓Origin chain: Move chain, Target chain: Solana

**Registering:**

* Register the token using Portal bridge [token register](https://www.notion.so/wormhole/token-register/tutorial-token-register#token-registration-process)
* Send tokens to Solana via the Portal bridge
* Add token to [Wormhole's token list](https://github.com/certusone/wormhole-token-list)

## ⛓Origin chain: EVM chain, Target chain: Move chain

**Before registering:**

* Ensure the token contract’s name and symbol are correct on the origin EVM chain

**Registering**

* Register the token using Portal bridge [token register](https://www.notion.so/wormhole/token-register/tutorial-token-register#token-registration-process)
* Send tokens to target chain via the Portal bridge
* (Optional): Add token to [Wormhole's token list](https://github.com/certusone/wormhole-token-list)
* (Optional) If target chain is Aptos, add to [Hippo’s token list](https://github.com/hippospace/aptos-coin-list)

\
❓Frequently asked questions
---------------------------------

### How do I check if my token’s metadata is registered on-chain?

**Using the token origin verifier:**

1. Head to [https://portalbridge.com/#/token-origin-verifier](https://portalbridge.com/#/token-origin-verifier)
2. Select chain as Solana, paste in the token contract address
3. In Bridge Results, select the target chain
4. Hover on top of the token name in bridge results, it will show the correct name on the target chain \<token name> (Wormhole)

![](<../.gitbook/assets/Screen Shot 2022-05-18 at 8.46.04 pm.png>)

**Using Solana explorer:**

On Solana, you’ll be able to see if your token has on-chain metadata by searching the token on the Solana explorer and details in the metadata tab**.**

![](<../.gitbook/assets/Screen Shot 2021-12-30 at 2.10.38 pm.png>)

**Example of a token with no on-chain meta data:**

![](<../.gitbook/assets/Screen Shot 2022-05-18 at 8.54.18 pm.png>)



### **My token’s name doesn’t show up correctly on the explorer.**

![](<../.gitbook/assets/Screen Shot 2021-12-30 at 3.46.56 pm.png>)

* If the token is originally from Solana, ensure the token has on-chain meta data
* Update the token using the  Portal bridge [token register](https://www.portalbridge.com/#/register)
* Once updated, You’ll need to contact the relevant explorer to update their on-chain data.

### My token logo does not appear on the explorer or any of the properly.

The token logo is retrieved from token lists such as Coingecko and Coinmarketcap. Please contact the token lists and add your token to their list.



### My token cannot be searched on \<dex/protocol>, I can only search for it via the token contract code, not the name.

The token name is retrieved from token lists such as Coingecko and Coinmarketcap. Please contact the token lists and add your token to their list.\


### I registered my token without adding the on-chain metadata from Solana and sent the token cross chain.

* Add [on-chain metadata](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/program) for the token
* Update the token using the[ token register ](https://www.portalbridge.com/#/register)
* If the name on the target chain explorer appears as (Wormhole), please contact the explorer to update the name.

### **How do I verify my token on \<chain> ?**

For Ethereum and most EVM chains, please check out this doc here[https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/docs/token\_verification.md](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/docs/token\_verification.md)\
