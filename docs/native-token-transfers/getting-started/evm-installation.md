## EVM Installation

#### Installation
Install [**Foundry**](https://book.getfoundry.sh/getting-started/installation) which includes `forge`, `anvil` and `cast` CLI tools. Ensure you have the latest versions installed.

#### Build
Run the following command to install necessary dependencies and to build the smart contracts:

```shell
$ make build-evm 
``` 
    
#### Test
The test-suite includes unit tests, along with property-based fuzz tests, and integration-tests. To run the full EVM test suite run the following command:

```shell
$ make test-evm 
``` 
    
#### Format

To format the files run this command from the root directory:

```shell
$ make fix-fmt
```

#### Gas Snapshots

```shell
$ cd evm && forge snapshot
```

#### Cast

```shell
$ cast <subcommand>
```

#### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
