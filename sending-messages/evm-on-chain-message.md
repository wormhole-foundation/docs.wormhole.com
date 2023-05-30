# EVM On Chain Message

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

In this example we’ll cover how to send a message from an EVM contract to the Wormhole network.

First, we’ll need the Wormhole Contract interfaces somewhere in our project. There’s two interfaces we need, Structs.sol and IWormhole.sol

You can fetch them here:

* [https://github.com/certusone/wormhole/blob/dev.v2/ethereum/contracts/Structs.sol](https://github.com/certusone/wormhole/blob/dev.v2/ethereum/contracts/Structs.sol)
* [https://github.com/certusone/wormhole/blob/dev.v2/ethereum/contracts/interfaces/IWormhole.sol](https://github.com/certusone/wormhole/blob/dev.v2/ethereum/contracts/interfaces/IWormhole.sol)

You might need to modify the import of IWormhole.sol of “.../Structs.sol” to point to wherever you placed the Structs.sol file.

Then we can create a simple Messenger contract that is instanced with the Core Bridge address. You can find the testnet and mainnet addresses for the chains that Wormhole supports [here](https://www.notion.so/Contracts-RPC-Nodes-cd51c55ff7ae428ea2c143d22421b4a6).

Then we have a function, sendStr() that takes in a bytes array and a nonce (random number) that will call the Wormhole SDK and submit the message. In the publishMessage() function, the arguments are

* Nonce: A random number
* Bytes: An array of bytes that can hold any data
* Finality: How many blocks to wait on the source chain to consider it safe that the message won’t roll back. For testing we can use 1 to test fast, but in production we generally use \~15 blocks.

```rust
// contracts/Messenger.sol
// SPDX-License-Identifier: Apache 2

pragma solidity ^0.8.0;

import "./interfaces/IWormhole.sol";

contract Messenger {
    // Hardcode the Wormhole Core Bridge contract address
    // In a real contract, we would set this in a constructor or Setup
    address a = address(0xC89Ce4735882C9F0f0FE26686c53074E09B0D550);
    IWormhole _wormhole = IWormhole(a);

    function sendStr(bytes memory str, uint32 nonce) public returns (uint64 sequence) {
        sequence = _wormhole.publishMessage(nonce, str, 1);
        return sequence;
    }
    function wormhole() public view returns (IWormhole) {
        return _wormhole;
    }
}
```
