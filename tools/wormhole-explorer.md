# Wormhole Explorer

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

A useful tool for debugging transactions is the Wormhole Explorer. By plugging in the transaction ID from the source chain, you can check to see if it was seen by the Guardian network and if a VAA was signed. You’ll also be able to see useful information like a summary of the message, raw message data, the payload, and the signed VAA.

Because messages will only show up AFTER they’ve been observed by the Guardian network, some chains, like Polygon, which have high finality thresholds (512 blocks or about 15 minutes as of this writing) will take until their finality guarantee to show up on the explorer and on the Wormhole network.

You can check it out at [Wormhole Explorer](https://wormholenetwork.com/explorer)
