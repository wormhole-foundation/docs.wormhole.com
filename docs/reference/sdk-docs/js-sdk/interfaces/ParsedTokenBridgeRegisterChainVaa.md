[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / ParsedTokenBridgeRegisterChainVaa

# Interface: ParsedTokenBridgeRegisterChainVaa

## Hierarchy

- [`ParsedGovernanceVaa`](ParsedGovernanceVaa.md)

- [`TokenBridgeRegisterChain`](TokenBridgeRegisterChain.md)

  ↳ **`ParsedTokenBridgeRegisterChainVaa`**

## Table of contents

### Properties

- [action](ParsedTokenBridgeRegisterChainVaa.md#action)
- [chain](ParsedTokenBridgeRegisterChainVaa.md#chain)
- [consistencyLevel](ParsedTokenBridgeRegisterChainVaa.md#consistencylevel)
- [emitterAddress](ParsedTokenBridgeRegisterChainVaa.md#emitteraddress)
- [emitterChain](ParsedTokenBridgeRegisterChainVaa.md#emitterchain)
- [foreignAddress](ParsedTokenBridgeRegisterChainVaa.md#foreignaddress)
- [foreignChain](ParsedTokenBridgeRegisterChainVaa.md#foreignchain)
- [guardianSetIndex](ParsedTokenBridgeRegisterChainVaa.md#guardiansetindex)
- [guardianSignatures](ParsedTokenBridgeRegisterChainVaa.md#guardiansignatures)
- [hash](ParsedTokenBridgeRegisterChainVaa.md#hash)
- [module](ParsedTokenBridgeRegisterChainVaa.md#module)
- [nonce](ParsedTokenBridgeRegisterChainVaa.md#nonce)
- [orderPayload](ParsedTokenBridgeRegisterChainVaa.md#orderpayload)
- [payload](ParsedTokenBridgeRegisterChainVaa.md#payload)
- [sequence](ParsedTokenBridgeRegisterChainVaa.md#sequence)
- [timestamp](ParsedTokenBridgeRegisterChainVaa.md#timestamp)
- [version](ParsedTokenBridgeRegisterChainVaa.md#version)

## Properties

### action

• **action**: `number`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[action](ParsedGovernanceVaa.md#action)

#### Defined in

[src/vaa/governance.ts:5](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L5)

___

### chain

• **chain**: `number`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[chain](ParsedGovernanceVaa.md#chain)

#### Defined in

[src/vaa/governance.ts:6](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L6)

___

### consistencyLevel

• **consistencyLevel**: `number`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[consistencyLevel](ParsedGovernanceVaa.md#consistencylevel)

#### Defined in

[src/vaa/wormhole.ts:19](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L19)

___

### emitterAddress

• **emitterAddress**: `Buffer`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[emitterAddress](ParsedGovernanceVaa.md#emitteraddress)

#### Defined in

[src/vaa/wormhole.ts:17](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L17)

___

### emitterChain

• **emitterChain**: `number`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[emitterChain](ParsedGovernanceVaa.md#emitterchain)

#### Defined in

[src/vaa/wormhole.ts:16](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L16)

___

### foreignAddress

• **foreignAddress**: `Buffer`

#### Inherited from

[TokenBridgeRegisterChain](TokenBridgeRegisterChain.md).[foreignAddress](TokenBridgeRegisterChain.md#foreignaddress)

#### Defined in

[src/vaa/tokenBridge.ts:114](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L114)

___

### foreignChain

• **foreignChain**: `number`

#### Inherited from

[TokenBridgeRegisterChain](TokenBridgeRegisterChain.md).[foreignChain](TokenBridgeRegisterChain.md#foreignchain)

#### Defined in

[src/vaa/tokenBridge.ts:113](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L113)

___

### guardianSetIndex

• **guardianSetIndex**: `number`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[guardianSetIndex](ParsedGovernanceVaa.md#guardiansetindex)

#### Defined in

[src/vaa/wormhole.ts:12](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L12)

___

### guardianSignatures

• **guardianSignatures**: [`GuardianSignature`](GuardianSignature.md)[]

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[guardianSignatures](ParsedGovernanceVaa.md#guardiansignatures)

#### Defined in

[src/vaa/wormhole.ts:13](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L13)

___

### hash

• **hash**: `Buffer`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[hash](ParsedGovernanceVaa.md#hash)

#### Defined in

[src/vaa/wormhole.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L21)

___

### module

• **module**: `string`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[module](ParsedGovernanceVaa.md#module)

#### Defined in

[src/vaa/governance.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L4)

___

### nonce

• **nonce**: `number`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[nonce](ParsedGovernanceVaa.md#nonce)

#### Defined in

[src/vaa/wormhole.ts:15](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L15)

___

### orderPayload

• **orderPayload**: `Buffer`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[orderPayload](ParsedGovernanceVaa.md#orderpayload)

#### Defined in

[src/vaa/governance.ts:7](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L7)

___

### payload

• **payload**: `Buffer`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[payload](ParsedGovernanceVaa.md#payload)

#### Defined in

[src/vaa/wormhole.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L20)

___

### sequence

• **sequence**: `bigint`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[sequence](ParsedGovernanceVaa.md#sequence)

#### Defined in

[src/vaa/wormhole.ts:18](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L18)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[timestamp](ParsedGovernanceVaa.md#timestamp)

#### Defined in

[src/vaa/wormhole.ts:14](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L14)

___

### version

• **version**: `number`

#### Inherited from

[ParsedGovernanceVaa](ParsedGovernanceVaa.md).[version](ParsedGovernanceVaa.md#version)

#### Defined in

[src/vaa/wormhole.ts:11](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L11)
