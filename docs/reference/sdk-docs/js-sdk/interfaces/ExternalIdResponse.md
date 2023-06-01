[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / ExternalIdResponse

# Interface: ExternalIdResponse

## Table of contents

### Properties

- [token\_id](ExternalIdResponse.md#token_id)

## Properties

### token\_id

• **token\_id**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Bank?` | { `denom`: `string`  } |
| `Bank.denom` | `string` |
| `Contract?` | { `ForeignToken?`: { `chain_id`: `string` ; `foreign_address`: `string`  } ; `NativeCW20?`: { `contract_address`: `string`  }  } |
| `Contract.ForeignToken?` | { `chain_id`: `string` ; `foreign_address`: `string`  } |
| `Contract.ForeignToken.chain_id` | `string` |
| `Contract.ForeignToken.foreign_address` | `string` |
| `Contract.NativeCW20?` | { `contract_address`: `string`  } |
| `Contract.NativeCW20.contract_address` | `string` |

#### Defined in

[src/cosmwasm/address.ts:43](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/cosmwasm/address.ts#L43)
