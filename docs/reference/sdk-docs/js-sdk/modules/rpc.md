[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / rpc

# Namespace: rpc

## Table of contents

### Functions

- [getGovernorIsVAAEnqueued](rpc.md#getgovernorisvaaenqueued)
- [getGovernorIsVAAEnqueuedWithRetry](rpc.md#getgovernorisvaaenqueuedwithretry)
- [getSignedBatchVAA](rpc.md#getsignedbatchvaa)
- [getSignedBatchVAAWithRetry](rpc.md#getsignedbatchvaawithretry)
- [getSignedVAA](rpc.md#getsignedvaa)
- [getSignedVAAWithRetry](rpc.md#getsignedvaawithretry)

## Functions

### getGovernorIsVAAEnqueued

▸ **getGovernorIsVAAEnqueued**(`host`, `emitterChain`, `emitterAddress`, `sequence`, `extraGrpcOpts?`): `Promise`<`GovernorIsVAAEnqueuedResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `emitterChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |
| `emitterAddress` | `string` |
| `sequence` | `string` |
| `extraGrpcOpts` | `Object` |

#### Returns

`Promise`<`GovernorIsVAAEnqueuedResponse`\>

#### Defined in

[src/rpc/getGovernorIsVAAEnqueued.ts:5](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/rpc/getGovernorIsVAAEnqueued.ts#L5)

___

### getGovernorIsVAAEnqueuedWithRetry

▸ **getGovernorIsVAAEnqueuedWithRetry**(`hosts`, `emitterChain`, `emitterAddress`, `sequence`, `extraGrpcOpts?`, `retryTimeout?`, `retryAttempts?`): `Promise`<`GovernorIsVAAEnqueuedResponse`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hosts` | `string`[] | `undefined` |
| `emitterChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) | `undefined` |
| `emitterAddress` | `string` | `undefined` |
| `sequence` | `string` | `undefined` |
| `extraGrpcOpts` | `Object` | `{}` |
| `retryTimeout` | `number` | `1000` |
| `retryAttempts?` | `number` | `undefined` |

#### Returns

`Promise`<`GovernorIsVAAEnqueuedResponse`\>

#### Defined in

[src/rpc/getGovernorIsVAAEnqueuedWithRetry.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/rpc/getGovernorIsVAAEnqueuedWithRetry.ts#L4)

___

### getSignedBatchVAA

▸ **getSignedBatchVAA**(`host`, `emitterChain`, `transactionId`, `nonce`, `extraGrpcOpts?`): `Promise`<`GetSignedBatchVAAResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `emitterChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |
| `transactionId` | `Uint8Array` |
| `nonce` | `number` |
| `extraGrpcOpts` | `Object` |

#### Returns

`Promise`<`GetSignedBatchVAAResponse`\>

#### Defined in

[src/rpc/getSignedBatchVAA.ts:5](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/rpc/getSignedBatchVAA.ts#L5)

___

### getSignedBatchVAAWithRetry

▸ **getSignedBatchVAAWithRetry**(`hosts`, `emitterChain`, `transactionId`, `nonce`, `extraGrpcOpts?`, `retryTimeout?`, `retryAttempts?`): `Promise`<`GetSignedBatchVAAResponse`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hosts` | `string`[] | `undefined` |
| `emitterChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) | `undefined` |
| `transactionId` | `Uint8Array` | `undefined` |
| `nonce` | `number` | `undefined` |
| `extraGrpcOpts` | `Object` | `{}` |
| `retryTimeout` | `number` | `1000` |
| `retryAttempts?` | `number` | `undefined` |

#### Returns

`Promise`<`GetSignedBatchVAAResponse`\>

#### Defined in

[src/rpc/getSignedBatchVAAWithRetry.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/rpc/getSignedBatchVAAWithRetry.ts#L4)

___

### getSignedVAA

▸ **getSignedVAA**(`host`, `emitterChain`, `emitterAddress`, `sequence`, `extraGrpcOpts?`): `Promise`<`GetSignedVAAResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `emitterChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |
| `emitterAddress` | `string` |
| `sequence` | `string` |
| `extraGrpcOpts` | `Object` |

#### Returns

`Promise`<`GetSignedVAAResponse`\>

#### Defined in

[src/rpc/getSignedVAA.ts:5](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/rpc/getSignedVAA.ts#L5)

___

### getSignedVAAWithRetry

▸ **getSignedVAAWithRetry**(`hosts`, `emitterChain`, `emitterAddress`, `sequence`, `extraGrpcOpts?`, `retryTimeout?`, `retryAttempts?`): `Promise`<`GetSignedVAAResponse`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hosts` | `string`[] | `undefined` |
| `emitterChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) | `undefined` |
| `emitterAddress` | `string` | `undefined` |
| `sequence` | `string` | `undefined` |
| `extraGrpcOpts` | `Object` | `{}` |
| `retryTimeout` | `number` | `1000` |
| `retryAttempts?` | `number` | `undefined` |

#### Returns

`Promise`<`GetSignedVAAResponse`\>

#### Defined in

[src/rpc/getSignedVAAWithRetry.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/rpc/getSignedVAAWithRetry.ts#L4)
