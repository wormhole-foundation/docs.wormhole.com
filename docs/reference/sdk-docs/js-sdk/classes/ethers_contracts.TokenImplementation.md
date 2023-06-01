[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / TokenImplementation

# Class: TokenImplementation

[ethers_contracts](../modules/ethers_contracts.md).TokenImplementation

## Hierarchy

- `BaseContract`

  ↳ **`TokenImplementation`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.TokenImplementation.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.TokenImplementation.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.TokenImplementation.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.TokenImplementation.md#_wrappedemits)
- [address](ethers_contracts.TokenImplementation.md#address)
- [callStatic](ethers_contracts.TokenImplementation.md#callstatic)
- [deployTransaction](ethers_contracts.TokenImplementation.md#deploytransaction)
- [estimateGas](ethers_contracts.TokenImplementation.md#estimategas)
- [filters](ethers_contracts.TokenImplementation.md#filters)
- [functions](ethers_contracts.TokenImplementation.md#functions)
- [interface](ethers_contracts.TokenImplementation.md#interface)
- [populateTransaction](ethers_contracts.TokenImplementation.md#populatetransaction)
- [provider](ethers_contracts.TokenImplementation.md#provider)
- [resolvedAddress](ethers_contracts.TokenImplementation.md#resolvedaddress)
- [signer](ethers_contracts.TokenImplementation.md#signer)

### Methods

- [DOMAIN\_SEPARATOR](ethers_contracts.TokenImplementation.md#domain_separator)
- [\_checkRunningEvents](ethers_contracts.TokenImplementation.md#_checkrunningevents)
- [\_deployed](ethers_contracts.TokenImplementation.md#_deployed)
- [\_wrapEvent](ethers_contracts.TokenImplementation.md#_wrapevent)
- [allowance](ethers_contracts.TokenImplementation.md#allowance)
- [approve](ethers_contracts.TokenImplementation.md#approve)
- [attach](ethers_contracts.TokenImplementation.md#attach)
- [balanceOf](ethers_contracts.TokenImplementation.md#balanceof)
- [burn](ethers_contracts.TokenImplementation.md#burn)
- [chainId](ethers_contracts.TokenImplementation.md#chainid)
- [connect](ethers_contracts.TokenImplementation.md#connect)
- [decimals](ethers_contracts.TokenImplementation.md#decimals)
- [decreaseAllowance](ethers_contracts.TokenImplementation.md#decreaseallowance)
- [deployed](ethers_contracts.TokenImplementation.md#deployed)
- [eip712Domain](ethers_contracts.TokenImplementation.md#eip712domain)
- [emit](ethers_contracts.TokenImplementation.md#emit)
- [fallback](ethers_contracts.TokenImplementation.md#fallback)
- [increaseAllowance](ethers_contracts.TokenImplementation.md#increaseallowance)
- [initialize](ethers_contracts.TokenImplementation.md#initialize)
- [listenerCount](ethers_contracts.TokenImplementation.md#listenercount)
- [listeners](ethers_contracts.TokenImplementation.md#listeners)
- [mint](ethers_contracts.TokenImplementation.md#mint)
- [name](ethers_contracts.TokenImplementation.md#name)
- [nativeContract](ethers_contracts.TokenImplementation.md#nativecontract)
- [nonces](ethers_contracts.TokenImplementation.md#nonces)
- [off](ethers_contracts.TokenImplementation.md#off)
- [on](ethers_contracts.TokenImplementation.md#on)
- [once](ethers_contracts.TokenImplementation.md#once)
- [owner](ethers_contracts.TokenImplementation.md#owner)
- [permit](ethers_contracts.TokenImplementation.md#permit)
- [queryFilter](ethers_contracts.TokenImplementation.md#queryfilter)
- [removeAllListeners](ethers_contracts.TokenImplementation.md#removealllisteners)
- [removeListener](ethers_contracts.TokenImplementation.md#removelistener)
- [symbol](ethers_contracts.TokenImplementation.md#symbol)
- [totalSupply](ethers_contracts.TokenImplementation.md#totalsupply)
- [transfer](ethers_contracts.TokenImplementation.md#transfer)
- [transferFrom](ethers_contracts.TokenImplementation.md#transferfrom)
- [updateDetails](ethers_contracts.TokenImplementation.md#updatedetails)
- [getContractAddress](ethers_contracts.TokenImplementation.md#getcontractaddress)
- [getInterface](ethers_contracts.TokenImplementation.md#getinterface)
- [isIndexed](ethers_contracts.TokenImplementation.md#isindexed)

## Constructors

### constructor

• **new TokenImplementation**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | `ContractInterface` |
| `signerOrProvider?` | `Signer` \| `Provider` |

#### Inherited from

BaseContract.constructor

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:107

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `allowance` | (`owner_`: `string`, `spender_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`account_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decreaseAllowance` | (`spender_`: `string`, `subtractedValue_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `eip712Domain` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`, `string`, `BigNumber`, `string`, `string`, `BigNumber`[]] & { `domainChainId`: `BigNumber` ; `domainExtensions`: `BigNumber`[] ; `domainFields`: `string` ; `domainName`: `string` ; `domainSalt`: `string` ; `domainVerifyingContract`: `string` ; `domainVersion`: `string`  }\> |
| `increaseAllowance` | (`spender_`: `string`, `addedValue_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `initialize` | (`name_`: `string`, `symbol_`: `string`, `decimals_`: `BigNumberish`, `sequence_`: `BigNumberish`, `owner_`: `string`, `chainId_`: `BigNumberish`, `nativeContract_`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mint` | (`account_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nativeContract` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nonces` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `permit` | (`owner_`: `string`, `spender_`: `string`, `value_`: `BigNumberish`, `deadline_`: `BigNumberish`, `v_`: `BigNumberish`, `r_`: `BytesLike`, `s_`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`sender_`: `string`, `recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `updateDetails` | (`name_`: `string`, `symbol_`: `string`, `sequence_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:490

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance` | (`owner_`: `string`, `spender_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`account_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decreaseAllowance` | (`spender_`: `string`, `subtractedValue_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `eip712Domain` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`spender_`: `string`, `addedValue_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`name_`: `string`, `symbol_`: `string`, `decimals_`: `BigNumberish`, `sequence_`: `BigNumberish`, `owner_`: `string`, `chainId_`: `BigNumberish`, `nativeContract_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint` | (`account_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nativeContract` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner_`: `string`, `spender_`: `string`, `value_`: `BigNumberish`, `deadline_`: `BigNumberish`, `v_`: `BigNumberish`, `r_`: `BytesLike`, `s_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`sender_`: `string`, `recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateDetails` | (`name_`: `string`, `symbol_`: `string`, `sequence_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:651

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `owner`: `string` ; `spender`: `string` ; `value`: `BigNumber`  }\> |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `owner`: `string` ; `spender`: `string` ; `value`: `BigNumber`  }\> |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TypedEventFilter`<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |

#### Overrides

BaseContract.filters

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:613

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `allowance` | (`owner_`: `string`, `spender_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `burn` | (`account_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decreaseAllowance` | (`spender_`: `string`, `subtractedValue_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `eip712Domain` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`, `string`, `BigNumber`, `string`, `string`, `BigNumber`[]] & { `domainChainId`: `BigNumber` ; `domainExtensions`: `BigNumber`[] ; `domainFields`: `string` ; `domainName`: `string` ; `domainSalt`: `string` ; `domainVerifyingContract`: `string` ; `domainVersion`: `string`  }\> |
| `increaseAllowance` | (`spender_`: `string`, `addedValue_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`name_`: `string`, `symbol_`: `string`, `decimals_`: `BigNumberish`, `sequence_`: `BigNumberish`, `owner_`: `string`, `chainId_`: `BigNumberish`, `nativeContract_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint` | (`account_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nativeContract` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nonces` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `permit` | (`owner_`: `string`, `spender_`: `string`, `value_`: `BigNumberish`, `deadline_`: `BigNumberish`, `v_`: `BigNumberish`, `r_`: `BytesLike`, `s_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`sender_`: `string`, `recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateDetails` | (`name_`: `string`, `symbol_`: `string`, `sequence_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:243

___

### interface

• **interface**: `TokenImplementationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:241

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`owner_`: `string`, `spender_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burn` | (`account_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `chainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance` | (`spender_`: `string`, `subtractedValue_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `eip712Domain` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance` | (`spender_`: `string`, `addedValue_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`name_`: `string`, `symbol_`: `string`, `decimals_`: `BigNumberish`, `sequence_`: `BigNumberish`, `owner_`: `string`, `chainId_`: `BigNumberish`, `nativeContract_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`account_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nativeContract` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner_`: `string`, `spender_`: `string`, `value_`: `BigNumberish`, `deadline_`: `BigNumberish`, `v_`: `BigNumberish`, `r_`: `BytesLike`, `s_`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`sender_`: `string`, `recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateDetails` | (`name_`: `string`, `symbol_`: `string`, `sequence_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:762

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### DOMAIN\_SEPARATOR

▸ **DOMAIN_SEPARATOR**(`overrides?`): `Promise`<`string`\>

See {IERC20Permit-DOMAIN_SEPARATOR}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:474

___

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

### allowance

▸ **allowance**(`owner_`, `spender_`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `spender_` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:407

___

### approve

▸ **approve**(`spender_`, `amount_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender_` | `string` |
| `amount_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:413

___

### attach

▸ **attach**(`addressOrName`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:202

___

### balanceOf

▸ **balanceOf**(`account_`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account_` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:399

___

### burn

▸ **burn**(`account_`, `amount_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account_` | `string` |
| `amount_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:444

___

### chainId

▸ **chainId**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:395

___

### connect

▸ **connect**(`signerOrProvider`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:201

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:391

___

### decreaseAllowance

▸ **decreaseAllowance**(`spender_`, `subtractedValue_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender_` | `string` |
| `subtractedValue_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:432

___

### deployed

▸ **deployed**(): `Promise`<[`TokenImplementation`](ethers_contracts.TokenImplementation.md)\>

#### Returns

`Promise`<[`TokenImplementation`](ethers_contracts.TokenImplementation.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:203

___

### eip712Domain

▸ **eip712Domain**(`overrides?`): `Promise`<[`string`, `string`, `string`, `BigNumber`, `string`, `string`, `BigNumber`[]] & { `domainChainId`: `BigNumber` ; `domainExtensions`: `BigNumber`[] ; `domainFields`: `string` ; `domainName`: `string` ; `domainSalt`: `string` ; `domainVerifyingContract`: `string` ; `domainVersion`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `string`, `string`, `BigNumber`, `string`, `string`, `BigNumber`[]] & { `domainChainId`: `BigNumber` ; `domainExtensions`: `BigNumber`[] ; `domainFields`: `string` ; `domainName`: `string` ; `domainSalt`: `string` ; `domainVerifyingContract`: `string` ; `domainVersion`: `string`  }\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:476

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:115

___

### increaseAllowance

▸ **increaseAllowance**(`spender_`, `addedValue_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender_` | `string` |
| `addedValue_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:426

___

### initialize

▸ **initialize**(`name_`, `symbol_`, `decimals_`, `sequence_`, `owner_`, `chainId_`, `nativeContract_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_` | `string` |
| `symbol_` | `string` |
| `decimals_` | `BigNumberish` |
| `sequence_` | `BigNumberish` |
| `owner_` | `string` |
| `chainId_` | `BigNumberish` |
| `nativeContract_` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:374

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

___

### listeners

▸ **listeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter?`): `TypedListener`<`EventArgsArray`, `EventArgsObject`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

`TypedListener`<`EventArgsArray`, `EventArgsObject`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:205

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:228

___

### mint

▸ **mint**(`account_`, `amount_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account_` | `string` |
| `amount_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:438

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:385

___

### nativeContract

▸ **nativeContract**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:397

___

### nonces

▸ **nonces**(`owner_`, `overrides?`): `Promise`<`BigNumber`\>

See {IERC20Permit-nonces}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:372

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:208

▸ **off**(`eventName`, `listener`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:229

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:212

▸ **on**(`eventName`, `listener`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:230

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:216

▸ **once**(`eventName`, `listener`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:231

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:389

___

### permit

▸ **permit**(`owner_`, `spender_`, `value_`, `deadline_`, `v_`, `r_`, `s_`, `overrides?`): `Promise`<`ContractTransaction`\>

See {IERC20Permit-permit}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `spender_` | `string` |
| `value_` | `BigNumberish` |
| `deadline_` | `BigNumberish` |
| `v_` | `BigNumberish` |
| `r_` | `BytesLike` |
| `s_` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:460

___

### queryFilter

▸ **queryFilter**<`EventArgsArray`, `EventArgsObject`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TypedEvent`<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TypedEvent`<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:235

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:224

▸ **removeAllListeners**(`eventName?`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:233

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:220

▸ **removeListener**(`eventName`, `listener`): [`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TokenImplementation`](ethers_contracts.TokenImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:232

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:387

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:393

___

### transfer

▸ **transfer**(`recipient_`, `amount_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient_` | `string` |
| `amount_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:401

___

### transferFrom

▸ **transferFrom**(`sender_`, `recipient_`, `amount_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender_` | `string` |
| `recipient_` | `string` |
| `amount_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:419

___

### updateDetails

▸ **updateDetails**(`name_`, `symbol_`, `sequence_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_` | `string` |
| `symbol_` | `string` |
| `sequence_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/ethers-contracts/TokenImplementation.d.ts:450

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | `BigNumberish` |

#### Returns

`string`

#### Inherited from

BaseContract.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:108

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

BaseContract.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

BaseContract.isIndexed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:118
