# Receiving Messages

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

When receving messages, the developer can either manually retrieve them from the Guardians or have them be submitted to their contracts via a Relayer.

Whichever way it gets to their contract, the next steps are to verify the VAA to make sure it’s a signed by the Guardians, and to make sure it’s not already been processed.
