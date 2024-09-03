
# 🪐 Wormhole Tutorial Program 

Congratulations to all our dear Hackathon participants 🎉

Your incredible projects and dedication have truly impressed us. As a token of appreciation and to encourage knowledge sharing within our community, we're excited to introduce the **Wormhole Tutorial Program**. 

## 💸 Earn Additional Prizes!

We’re offering a chance for you to earn more rewards by turning your hackathon projects into tutorials:

- **Tutorial Submission Reward**: Submit a tutorial based on your hackathon project and earn **$50** for each accepted tutorial.
- **Maximum Tutorials Accepted**: To ensure high-quality content, we will accept up to 5 tutorials per hackathon. This means a total of **$250** in additional prizes up for grabs! 🎯

## How to Submit Your Tutorial

To participate, please follow these guidelines to ensure your tutorial is clear, complete, and helpful to others.

### 1. **Tutorial Content**

Your tutorial should include the following sections:

- **Introduction**: Briefly describe your project from the specific Hackathon and its main objectives.
- **Setup Instructions**: Provide detailed steps to set up the project environment, including any dependencies.
- **Code Walkthrough**: Offer a clear explanation of key parts of your code.
- **Usage**: Instructions on how to use the project, including example commands or inputs.
- **Testing Locally**: Steps for running local tests and expected outcomes.
- **Deployment**: Instructions for deploying the project to a testnet or mainnet, if applicable.
- **Testing on Testnet**: How to test the deployed project on a testnet.
- **Additional Resources**: Links to relevant documentation, libraries, or tools used in your project.

### 2. **Format and Submission**

- **Format**: Submit your tutorial in Markdown format (.md). Ensure clarity and proper organization with headings and subheadings.
- **Repository**: Fork the [Wormhole Docs Repository](https://github.com/wormhole-foundation/docs.wormhole.com/tree/main) and add your tutorial as a new file in the `tutorials/quick-start` folder.
- **Naming Convention**: Name your file in the format `project-name-tutorial.md`. For example, if your project is named "CrossChainApp," name your file `crosschainapp-tutorial.md`.
- **Pull Request**: Create a Pull Request (PR) with your tutorial. In the PR description, include a brief summary of the tutorial and mention the hackathon it was developed at.

### 3. **Example Tutorial**

Here’s a brief example of how to structure your tutorial:

#### HelloToken

This tutorial demonstrates a Solidity contract that can be deployed on various EVM chains to create a cross-chain application. Users can request token transfers from one contract to an address on a different chain.

**Example Project**: Cross-Chain Token Transfer Dapp. Project developed during the Encode x Wormhole Hackathon 2024.

**Summary**: 
Included in this repository are:
- Example Solidity Code
- Example Forge local testing setup
- Testnet Deploy Scripts
- Example Testnet testing setup

**Environment Setup**:
- Node 16.14.1 or later, npm 8.5.0 or later: [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Forge 0.2.0 or later: [Install Forge](https://book.getfoundry.sh/getting-started/installation)

**Testing Locally**:
Clone the repository, navigate to it, build, and run unit tests:
```bash
git clone https://github.com/wormhole-foundation/hello-token.git
cd hello-token
npm run build
forge test
```
Expected output:
```
Running 1 test for test/HelloToken.t.sol:HelloTokenTest
[PASS] testCrossChainDeposit() (gas: 1338038)
Test result: ok. 1 passed; 0 failed; finished in 5.64s
```

**Deploying to Testnet**:
Ensure you have a wallet with at least 0.05 Testnet AVAX and 0.01 Testnet CELO. Obtain these tokens from the respective testnet faucets.

```bash
EVM_PRIVATE_KEY=your_wallet_private_key npm run deploy
```

**Testing on Testnet**:
Ensure you have a wallet with at least 0.02 Testnet AVAX. Also, ensure contracts are deployed on the testnet as described above.

To test sending and receiving a message on testnet:
```bash
EVM_PRIVATE_KEY=your_wallet_private_key npm run test
```

**Getting Started**:
Write a HelloToken contract that lets users send tokens to an address on another chain. Use the Wormhole TokenBridge for cross-chain transfers.

For detailed implementation, see the example provided in the `hello-token` repository.

### 4. **Review Process** 📝

- **Evaluation**: Tutorials will be reviewed for completeness, accuracy, and clarity.
- **Notification**: You will be notified upon acceptance or if further revisions are needed.
- **Payment**: Accepted tutorials will be rewarded with $50, and payments will be processed within 30 days.

### 5. **Additional Notes**

- Ensure your content is original and you have the rights to share any included code or resources.
- For any questions or assistance, please open an issue in this repository or contact us at [support@wormholeblockchain.org](mailto:support@wormholeblockchain.org).

Thank you for your contributions and for helping to expand the Wormhole Blockchain community. We look forward to your tutorials!

---

#### Conclusion

In closing, I want to highlight that the prize amounts, total number of acceptable tutorials, and payment timelines mentioned are hypothetical and open for adjustment based on Wormhole’s discretion.

This approach ensures that tutorials remain current with the latest hackathons and developments, providing new developers with a rich array of up-to-date examples. This not only fosters a vibrant community but also accelerates learning and innovation within the Wormhole ecosystem.

Thank you for considering this suggestion and for your ongoing support in enhancing the developer experience with Wormhole! 🚀
