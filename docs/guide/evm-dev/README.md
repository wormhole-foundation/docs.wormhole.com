

If you're working with the EVM exclusively, a number of simplifying architectural decisions can be made.  

With EVM only cross chain applications:

1) You can take advantage of a service that will [automatically relay](./automatic-relayer.md) the [VAAs](../components/vaa.md) to the target chain for you. 
2) You can take advantage of testing tools like Forge's [fork testing](https://book.getfoundry.sh/forge/fork-testing) to ease the development cycle.
3) You can use other features restricted to EVM only environments, like [forwarding](#forwarding) to compose more complex application logic.


## Setup

## ..

## Forwarding

Ever get an email from your grandma that starts with `fwd: fwd: fwd:`? This is like that but different.

...

# See Also

Reference documentation for EVM chains is available [here](../../reference/environments/evm.md)