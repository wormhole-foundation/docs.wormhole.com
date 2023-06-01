[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / ParsedGovernanceVaa

# Interface: ParsedGovernanceVaa

## Hierarchy

- [`ParsedVaa`](ParsedVaa.md)

- [`Governance`](Governance.md)

  ↳ **`ParsedGovernanceVaa`**

  ↳↳ [`ParsedNftBridgeRegisterChainVaa`](ParsedNftBridgeRegisterChainVaa.md)

  ↳↳ [`ParsedNftBridgeUpgradeContractVaa`](ParsedNftBridgeUpgradeContractVaa.md)

  ↳↳ [`ParsedTokenBridgeRegisterChainVaa`](ParsedTokenBridgeRegisterChainVaa.md)

  ↳↳ [`ParsedTokenBridgeUpgradeContractVaa`](ParsedTokenBridgeUpgradeContractVaa.md)

## Table of contents

### Properties

- [action](ParsedGovernanceVaa.md#action)
- [chain](ParsedGovernanceVaa.md#chain)
- [consistencyLevel](ParsedGovernanceVaa.md#consistencylevel)
- [emitterAddress](ParsedGovernanceVaa.md#emitteraddress)
- [emitterChain](ParsedGovernanceVaa.md#emitterchain)
- [guardianSetIndex](ParsedGovernanceVaa.md#guardiansetindex)
- [guardianSignatures](ParsedGovernanceVaa.md#guardiansignatures)
- [hash](ParsedGovernanceVaa.md#hash)
- [module](ParsedGovernanceVaa.md#module)
- [nonce](ParsedGovernanceVaa.md#nonce)
- [orderPayload](ParsedGovernanceVaa.md#orderpayload)
- [payload](ParsedGovernanceVaa.md#payload)
- [sequence](ParsedGovernanceVaa.md#sequence)
- [timestamp](ParsedGovernanceVaa.md#timestamp)
- [version](ParsedGovernanceVaa.md#version)

## Properties

### action

• **action**: `number`

#### Inherited from

[Governance](Governance.md).[action](Governance.md#action)

#### Defined in

[src/vaa/governance.ts:5](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L5)

___

### chain

• **chain**: `number`

#### Inherited from

[Governance](Governance.md).[chain](Governance.md#chain)

#### Defined in

[src/vaa/governance.ts:6](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L6)

___

### consistencyLevel

• **consistencyLevel**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[consistencyLevel](ParsedVaa.md#consistencylevel)

#### Defined in

[src/vaa/wormhole.ts:19](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L19)

___

### emitterAddress

• **emitterAddress**: `Buffer`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[emitterAddress](ParsedVaa.md#emitteraddress)

#### Defined in

[src/vaa/wormhole.ts:17](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L17)

___

### emitterChain

• **emitterChain**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[emitterChain](ParsedVaa.md#emitterchain)

#### Defined in

[src/vaa/wormhole.ts:16](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L16)

___

### guardianSetIndex

• **guardianSetIndex**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[guardianSetIndex](ParsedVaa.md#guardiansetindex)

#### Defined in

[src/vaa/wormhole.ts:12](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L12)

___

### guardianSignatures

• **guardianSignatures**: [`GuardianSignature`](GuardianSignature.md)[]

#### Inherited from

[ParsedVaa](ParsedVaa.md).[guardianSignatures](ParsedVaa.md#guardiansignatures)

#### Defined in

[src/vaa/wormhole.ts:13](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L13)

___

### hash

• **hash**: `Buffer`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[hash](ParsedVaa.md#hash)

#### Defined in

[src/vaa/wormhole.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L21)

___

### module

• **module**: `string`

#### Inherited from

[Governance](Governance.md).[module](Governance.md#module)

#### Defined in

[src/vaa/governance.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L4)

___

### nonce

• **nonce**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[nonce](ParsedVaa.md#nonce)

#### Defined in

[src/vaa/wormhole.ts:15](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L15)

___

### orderPayload

• **orderPayload**: `Buffer`

#### Inherited from

[Governance](Governance.md).[orderPayload](Governance.md#orderpayload)

#### Defined in

[src/vaa/governance.ts:7](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L7)

___

### payload

• **payload**: `Buffer`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[payload](ParsedVaa.md#payload)

#### Defined in

[src/vaa/wormhole.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L20)

___

### sequence

• **sequence**: `bigint`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[sequence](ParsedVaa.md#sequence)

#### Defined in

[src/vaa/wormhole.ts:18](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L18)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[timestamp](ParsedVaa.md#timestamp)

#### Defined in

[src/vaa/wormhole.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L14)

___

### version

• **version**: `number`

#### Inherited from

[ParsedVaa](ParsedVaa.md).[version](ParsedVaa.md#version)

#### Defined in

[src/vaa/wormhole.ts:11](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L11)
