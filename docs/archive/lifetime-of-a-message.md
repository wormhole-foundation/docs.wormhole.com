# Lifetime of a Message

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

With the concepts now defined, we can illustrate what a full flow for a message passing between two chains looks like. The following stages demonstrate each stage of processing the wormhole network performs in order to route a message.

*   **1: A message is emitted by a contract running on chain A.**

    Messages can be emitted by any contract, and the guardians are programmed to observe all chains for these events. Here, the guardians are represented as a single entity to simplify the graphics but the obesrvation of the message must be performed individually by each of the 19 guardians



![Guardians observing Message in block 3 on Chain A.](.gitbook/assets/archive/image.png)

*   **2: Signatures are aggregated.**

    Guardians independently observe and sign the message. Once enough guardians have signed the message, the collection of signatures are combined with the message and metadata to produce a VAA.

![A Conceptual VAA: Guardians aggregating signatures for the Payload in question.](<../.gitbook/assets/archive/image (13).png>)

*   **3: VAA submitted to target chain.**

    The VAA acts as proof that the guardians have collectively attested the existence of the message payload, in order to complete the final step, the VAA itself is submitted to the target chain to be processed by a receiving contract.

    _<mark style="color:blue;">Note: Anyone can submit the VAA to the target chain. The guardians typically do not perform this step to avoid transaction fees. Instead, applications built on top of wormhole can acquire the VAA via the guardian RPC and do the submission in a separate flow.</mark>_

![VAA produced by the guardians being submitted to Chain B.](<../.gitbook/assets/archive/image (4).png>)

### Finality

A sharp observer might notice that in the previous example, the message observed on chain A is submitted to chain B on its very next block. This raises an important question regarding chain forks. What happens if the message on Chain A ends up in an orphaned fork? This would result in a signed VAA on Chain B for state that has been invalidated on Chain A.

To solve for this, the guardians wait for a message to become sufficiently final before signing an observation. Rather than dictate a fixed waiting period, Wormhole allows message emitters to choose how long the guardians will wait on a per-message basis.

Thus in a real application a message is emitted along with a wait time:

![Guardian flow for a message with a wait period. Guardians do not accept the message until 3 blocks later. The VAA is submitted to Chain B in a later block.](<../.gitbook/assets/archive/image (8).png>)

Wormhole adopts this model so that application developers can decide themselves what level of security they wish to use. A token bridge might require a much higher wait period to prevent token theft, whereas a cross-chain oracle may only need single block confirmations.
