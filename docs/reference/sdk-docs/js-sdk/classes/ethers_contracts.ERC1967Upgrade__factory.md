[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / ERC1967Upgrade\_\_factory

# Class: ERC1967Upgrade\_\_factory

[ethers_contracts](../modules/ethers_contracts.md).ERC1967Upgrade__factory

## Table of contents

### Constructors

- [constructor](ethers_contracts.ERC1967Upgrade__factory.md#constructor)

### Properties

- [abi](ethers_contracts.ERC1967Upgrade__factory.md#abi)

### Methods

- [connect](ethers_contracts.ERC1967Upgrade__factory.md#connect)
- [createInterface](ethers_contracts.ERC1967Upgrade__factory.md#createinterface)

## Constructors

### constructor

• **new ERC1967Upgrade__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "previousAdmin"; `type`: `string` = "address" }[] ; `name`: `string` = "AdminChanged"; `type`: `string` = "event" }[] = `_abi`

#### Defined in

src/ethers-contracts/factories/ERC1967Upgrade__factory.ts:61

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ERC1967Upgrade`](ethers_contracts.ERC1967Upgrade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ERC1967Upgrade`](ethers_contracts.ERC1967Upgrade.md)

#### Defined in

src/ethers-contracts/factories/ERC1967Upgrade__factory.ts:65

___

### createInterface

▸ `Static` **createInterface**(): `ERC1967UpgradeInterface`

#### Returns

`ERC1967UpgradeInterface`

#### Defined in

src/ethers-contracts/factories/ERC1967Upgrade__factory.ts:62
