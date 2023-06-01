# Relaying

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

After the guardians have signed the Wormhole message it’s considered a VAA, or Verifiable Action Approval. This VAA sits in a mailbox with the Guardians that is accessible via the Guardian RPC endpoints.

These VAAs can be picked up by anyone, including the original user and submitted to the target chain. In some cases, we have automatic relayers that pick up and submit transactions for a fee charged to the user that initiated the message.
