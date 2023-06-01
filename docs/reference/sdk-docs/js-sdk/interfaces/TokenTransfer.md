[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / TokenTransfer

# Interface: TokenTransfer

## Hierarchy

- **`TokenTransfer`**

  ↳ [`ParsedTokenTransferVaa`](ParsedTokenTransferVaa.md)

## Table of contents

### Properties

- [amount](TokenTransfer.md#amount)
- [fee](TokenTransfer.md#fee)
- [fromAddress](TokenTransfer.md#fromaddress)
- [payloadType](TokenTransfer.md#payloadtype)
- [to](TokenTransfer.md#to)
- [toChain](TokenTransfer.md#tochain)
- [tokenAddress](TokenTransfer.md#tokenaddress)
- [tokenChain](TokenTransfer.md#tokenchain)
- [tokenTransferPayload](TokenTransfer.md#tokentransferpayload)

## Properties

### amount

• **amount**: `bigint`

#### Defined in

[src/vaa/tokenBridge.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L20)

___

### fee

• **fee**: ``null`` \| `bigint`

#### Defined in

[src/vaa/tokenBridge.ts:25](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L25)

___

### fromAddress

• **fromAddress**: ``null`` \| `Buffer`

#### Defined in

[src/vaa/tokenBridge.ts:26](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L26)

___

### payloadType

• **payloadType**: [`Transfer`](../enums/TokenBridgePayload.md#transfer) \| [`TransferWithPayload`](../enums/TokenBridgePayload.md#transferwithpayload)

#### Defined in

[src/vaa/tokenBridge.ts:17](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L17)

___

### to

• **to**: `Buffer`

#### Defined in

[src/vaa/tokenBridge.ts:23](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L23)

___

### toChain

• **toChain**: `number`

#### Defined in

[src/vaa/tokenBridge.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L24)

___

### tokenAddress

• **tokenAddress**: `Buffer`

#### Defined in

[src/vaa/tokenBridge.ts:21](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L21)

___

### tokenChain

• **tokenChain**: `number`

#### Defined in

[src/vaa/tokenBridge.ts:22](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L22)

___

### tokenTransferPayload

• **tokenTransferPayload**: `Buffer`

#### Defined in

[src/vaa/tokenBridge.ts:27](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L27)
