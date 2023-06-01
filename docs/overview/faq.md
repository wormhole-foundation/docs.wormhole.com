---
description: This page collects and answers the most commonly asked questions.
---

# FAQ

## ？General FAQ

### How does the Portal work?

The Portal is an application built on top of Wormhole. When you bridge tokens through Portal, the origin token gets locked in a smart contract, and a new Portal wrapped token gets minted on the target chain. You can swap those for other/native tokens on the target chain. See which Portal wrapped tokens have liquid markets[ here.](https://docs.wormholenetwork.com/wormhole/overview-liquid-markets)

Here you can find an in-depth explanation from one of our contributors, Chase:

{% embed url="https://www.youtube.com/watch?feature=youtu.be&v=ngnWF5widJU" %}

### What are the liquid markets for Portal wrapped tokens?

Check out our liquid markets here: [https://docs.wormholenetwork.com/wormhole/overview-liquid-markets](https://docs.wormholenetwork.com/wormhole/overview-liquid-markets)

### What does the token register do?

The token register is to register new tokens on a chain, this is a once-off procedure.  There will be a small fee charged to register the token. This is most commonly used by projects who will transfer the token over for the first time. Normal users will rarely ever have to use this function.

### What type of NFTs does Portal NFT bridge support?

The Portal NFT bridge allows ERC721 and SPL (with a supply of 1) NFTs to be transferred between supported chains.

### What are the fees for using Portal?

Portal bridging fees are currently sub-cent. The gas fees are the most expensive aspect of the transaction.



## 🌉Portal bridge troubleshooting

### I have sent tokens to \<chain> - my tokens did not arrive in my target wallet, but have left my origin wallet. What do I do?

You either a) need to redeem them, or, if redeeming was already successful, b) add them to your wallet:

**a) Redeeming:**

* Go to [https://portalbridge.com/#/redeem](https://portalbridge.com/#/redeem)
* You need to enter your source chain and the corresponding transaction id (which you can find in your wallet, or with your address in the blockchains explorer)
* Click Recover
* Click Redeem and accept the wallet approval\


Check out our tutorial [here ](tutorial-recovery-workflow.md)

**b) Add them to your wallet:**

Metamask:

* In the Metamask assets tab, click import tokens
* The contract address can be found in the relevant block explorer transaction and clicking the token name. When you click the token name, it will open a new window and the contract address is on the right-hand side in the profile summary.
* You’ll also need a symbol - this can be anything you want to recognize the token as.
* Click add custom token

See the video tutorial - How to add a token into your Metamask wallet [here.](https://docs.wormholenetwork.com/wormhole/video-tutorial-how-to-manually-add-tokens-to-your-wallet)

Terra Station:

* Navigate to your Terra Finder transaction
* Scroll down to "show logs"
* Within **\[1] from\_contract**, you can find the token contract address as **contract\_address** (just below "amount"). Copy that contract address
* In your Terra Station wallet, navigate to **add token,** paste in the contract address, and click **add** as the final step\


See video tutorial - How to add a token into your Terra wallet [here](https://docs.wormholenetwork.com/wormhole/video-tutorial-how-to-manually-add-tokens-to-your-wallet)

### The recipient address is not my wallet address!

**(Solana only)** This is because the recipient address shows the associated token account that is created within your Solana address. Unlike other blockchains, Solana requires you to create a new address for each token you own. When you click the associated token account address, you can find your Solana address as “owner”.



### I bridged X token but cannot swap it now. No DEX has liquid markets,

You bridged a token, which has no liquidity on the target chain. You will need to use Portal bridge to bridge this one back. You can do this by pasting the token contract address (which you can find in your wallet or with your address in the blockchains explorer) into the Portal “select a token” search field.

You can find a comprehensive overview of liquid markets [here](https://docs.wormholenetwork.com/wormhole/overview-liquid-markets).

### How can I redeem my tokens on the target chain?

If you've accidentally refreshed the page during the transfer process or did not redeem your tokens, you can follow the tutorial [here](https://docs.wormholenetwork.com/wormhole/tutorial-recovery-workflow).

### I have Wormhole V1 assets; what do I do now?

Some wormhole V1 assets are eligible for migration. To check, please use our [token migration tutorial](broken-reference).

Once you have migrated your V1 assets to a Portal wrapped asset, you cannot swap them back to V1 assets.

If you still have V1 wrapped assets that are not eligible for migration, please lodge a [Github issue](https://github.com/solana-labs/oyster/issues) or reach out to our community managers on discord.

### I want to migrate my V1 assets to Portal wrapped assets; however, the pools are empty.

Please reach out to our community managers on [discord](https://discord.com/invite/wormholecrypto) if the pools are empty.



## Common error messages

### **Error message: "Cannot read properties of undefined (reading 'replace')"**

This error means that the incorrect transaction was input into the redeem source tx field. You can find the correct one by searching your wallet address in the corresponding blockchain explorer and selecting the correct transaction. 

### Error message: "Unknown error"

* Please ensure you have at least 0.01 SOL in your Solana wallet
* If you're using a ledger, ensure the software is up to date and ensure blind signing is turned on.

### Error message: "**Transaction was not confirmed in 30.04 seconds. It is unknown if it succeeded or failed. Check signature xyz using the Solana Explorer or CLI tools."**

That indicates a temporary Solana network error. Please try again in a few hours, when TPS is above 2000: [https://explorer.solana.com/](https://explorer.solana.com/) (you need to scroll down a bit). With your origin source transaction id, you can redeem at any time here: [https://wormholebridge.com/#/redeem](https://wormholebridge.com/#/redeem)

### Error message: "failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x0"

(Solana only)

* Please ensure you have 0.01 Sol in your wallet
* You'll need to create an associated token account.
  * Please open a new tab and do the redeem steps again: [https://portalbridge.com/#/redeem](https://portalbridge.com/#/redeem)
  * You just need to enter your source chain and the corresponding transaction id (which you can find in your wallet, or with your address in the blockchains explorer)
  * After completing, you can hover over the recipient’s address and click "force create account".
  * Click "redeem"

### Error message: "failed to get confirmed transaction: Invalid param: Invalid"

This error means the incorrect **source chain** was selected during the redeem process. Please double check the correct source chain was selected.

### Error message: "**404 insufficient funds or unknown error, key not found, account not found / rpc error: code = NotFound desc = rpc error: code = NotFound desc = account not found: key not found"**

(Terra only) This means that you have insufficient funds in your wallet. Please make sure you have sufficient LUNA in your wallet to pay for network fees.



## 📞 Contact

If you have any further questions or require troubleshooting, please reach out to Wormhole's community managers on [Discord](https://discord.com/invite/wormholecrypto).

{% hint style="danger" %}
Beware of scams. Admins will never DM or message you first
{% endhint %}

