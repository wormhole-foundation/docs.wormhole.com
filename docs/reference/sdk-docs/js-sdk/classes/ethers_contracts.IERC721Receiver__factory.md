[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / IERC721Receiver\_\_factory

# Class: IERC721Receiver\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).IERC721Receiver__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.IERC721Receiver__factory.md#constructor)

### Properties

- [abi](ethers_contracts.IERC721Receiver__factory.md#abi)

### Methods

- [connect](ethers_contracts.IERC721Receiver__factory.md#connect)
- [createInterface](ethers_contracts.IERC721Receiver__factory.md#createinterface)

## Constructors

### constructor

• **new IERC721Receiver__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "operator"; `type`: `string` = "address" }[] ; `name`: `string` = "onERC721Received"; `outputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = ""; `type`: `string` = "bytes4" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/IERC721Receiver__factory.ts:50

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC721Receiver`](ethers_contracts.IERC721Receiver.md)

#### Defined in

src/ethers-contracts/factories/IERC721Receiver__factory.ts:54

___

### createInterface

▸ `Static` **createInterface**(): `IERC721ReceiverInterface`

#### Returns

`IERC721ReceiverInterface`

#### Defined in

src/ethers-contracts/factories/IERC721Receiver__factory.ts:51
