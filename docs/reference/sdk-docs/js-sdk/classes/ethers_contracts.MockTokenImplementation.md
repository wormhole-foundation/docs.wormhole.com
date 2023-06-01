[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / [ethers\_contracts](../modules/ethers_contracts.md) / MockTokenImplementation

# Class: MockTokenImplementation

[ethers_contracts](../modules/ethers_contracts.md).MockTokenImplementation

## Hierarchy

- `BaseContract`

  ↳ **`MockTokenImplementation`**

## Table of contents

### Constructors

- [constructor](ethers_contracts.MockTokenImplementation.md#constructor)

### Properties

- [\_deployedPromise](ethers_contracts.MockTokenImplementation.md#_deployedpromise)
- [\_runningEvents](ethers_contracts.MockTokenImplementation.md#_runningevents)
- [\_wrappedEmits](ethers_contracts.MockTokenImplementation.md#_wrappedemits)
- [address](ethers_contracts.MockTokenImplementation.md#address)
- [callStatic](ethers_contracts.MockTokenImplementation.md#callstatic)
- [deployTransaction](ethers_contracts.MockTokenImplementation.md#deploytransaction)
- [estimateGas](ethers_contracts.MockTokenImplementation.md#estimategas)
- [filters](ethers_contracts.MockTokenImplementation.md#filters)
- [functions](ethers_contracts.MockTokenImplementation.md#functions)
- [interface](ethers_contracts.MockTokenImplementation.md#interface)
- [populateTransaction](ethers_contracts.MockTokenImplementation.md#populatetransaction)
- [provider](ethers_contracts.MockTokenImplementation.md#provider)
- [resolvedAddress](ethers_contracts.MockTokenImplementation.md#resolvedaddress)
- [signer](ethers_contracts.MockTokenImplementation.md#signer)

### Methods

- [DOMAIN\_SEPARATOR](ethers_contracts.MockTokenImplementation.md#domain_separator)
- [\_checkRunningEvents](ethers_contracts.MockTokenImplementation.md#_checkrunningevents)
- [\_deployed](ethers_contracts.MockTokenImplementation.md#_deployed)
- [\_wrapEvent](ethers_contracts.MockTokenImplementation.md#_wrapevent)
- [allowance](ethers_contracts.MockTokenImplementation.md#allowance)
- [approve](ethers_contracts.MockTokenImplementation.md#approve)
- [attach](ethers_contracts.MockTokenImplementation.md#attach)
- [balanceOf](ethers_contracts.MockTokenImplementation.md#balanceof)
- [burn](ethers_contracts.MockTokenImplementation.md#burn)
- [chainId](ethers_contracts.MockTokenImplementation.md#chainid)
- [connect](ethers_contracts.MockTokenImplementation.md#connect)
- [decimals](ethers_contracts.MockTokenImplementation.md#decimals)
- [decreaseAllowance](ethers_contracts.MockTokenImplementation.md#decreaseallowance)
- [deployed](ethers_contracts.MockTokenImplementation.md#deployed)
- [eip712Domain](ethers_contracts.MockTokenImplementation.md#eip712domain)
- [emit](ethers_contracts.MockTokenImplementation.md#emit)
- [fallback](ethers_contracts.MockTokenImplementation.md#fallback)
- [increaseAllowance](ethers_contracts.MockTokenImplementation.md#increaseallowance)
- [initialize](ethers_contracts.MockTokenImplementation.md#initialize)
- [listenerCount](ethers_contracts.MockTokenImplementation.md#listenercount)
- [listeners](ethers_contracts.MockTokenImplementation.md#listeners)
- [mint](ethers_contracts.MockTokenImplementation.md#mint)
- [name](ethers_contracts.MockTokenImplementation.md#name)
- [nativeContract](ethers_contracts.MockTokenImplementation.md#nativecontract)
- [nonces](ethers_contracts.MockTokenImplementation.md#nonces)
- [off](ethers_contracts.MockTokenImplementation.md#off)
- [on](ethers_contracts.MockTokenImplementation.md#on)
- [once](ethers_contracts.MockTokenImplementation.md#once)
- [owner](ethers_contracts.MockTokenImplementation.md#owner)
- [permit](ethers_contracts.MockTokenImplementation.md#permit)
- [queryFilter](ethers_contracts.MockTokenImplementation.md#queryfilter)
- [removeAllListeners](ethers_contracts.MockTokenImplementation.md#removealllisteners)
- [removeListener](ethers_contracts.MockTokenImplementation.md#removelistener)
- [symbol](ethers_contracts.MockTokenImplementation.md#symbol)
- [testNewImplementationActive](ethers_contracts.MockTokenImplementation.md#testnewimplementationactive)
- [totalSupply](ethers_contracts.MockTokenImplementation.md#totalsupply)
- [transfer](ethers_contracts.MockTokenImplementation.md#transfer)
- [transferFrom](ethers_contracts.MockTokenImplementation.md#transferfrom)
- [updateDetails](ethers_contracts.MockTokenImplementation.md#updatedetails)
- [getContractAddress](ethers_contracts.MockTokenImplementation.md#getcontractaddress)
- [getInterface](ethers_contracts.MockTokenImplementation.md#getinterface)
- [isIndexed](ethers_contracts.MockTokenImplementation.md#isindexed)

## Constructors

### constructor

• **new MockTokenImplementation**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`sender_`: `string`, `recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `updateDetails` | (`name_`: `string`, `symbol_`: `string`, `sequence_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:503

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`sender_`: `string`, `recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateDetails` | (`name_`: `string`, `symbol_`: `string`, `sequence_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:666

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

src/ethers-contracts/MockTokenImplementation.d.ts:628

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`sender_`: `string`, `recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateDetails` | (`name_`: `string`, `symbol_`: `string`, `sequence_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:252

___

### interface

• **interface**: `MockTokenImplementationInterface`

#### Overrides

BaseContract.interface

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:250

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
| `testNewImplementationActive` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`sender_`: `string`, `recipient_`: `string`, `amount_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateDetails` | (`name_`: `string`, `symbol_`: `string`, `sequence_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:779

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

src/ethers-contracts/MockTokenImplementation.d.ts:383

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

src/ethers-contracts/MockTokenImplementation.d.ts:385

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

src/ethers-contracts/MockTokenImplementation.d.ts:391

___

### attach

▸ **attach**(`addressOrName`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.attach

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:211

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

src/ethers-contracts/MockTokenImplementation.d.ts:397

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

src/ethers-contracts/MockTokenImplementation.d.ts:399

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

src/ethers-contracts/MockTokenImplementation.d.ts:405

___

### connect

▸ **connect**(`signerOrProvider`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.connect

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:210

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

src/ethers-contracts/MockTokenImplementation.d.ts:407

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

src/ethers-contracts/MockTokenImplementation.d.ts:409

___

### deployed

▸ **deployed**(): `Promise`<[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)\>

#### Returns

`Promise`<[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:212

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

src/ethers-contracts/MockTokenImplementation.d.ts:415

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

src/ethers-contracts/MockTokenImplementation.d.ts:429

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

src/ethers-contracts/MockTokenImplementation.d.ts:435

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

src/ethers-contracts/MockTokenImplementation.d.ts:214

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

src/ethers-contracts/MockTokenImplementation.d.ts:237

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

src/ethers-contracts/MockTokenImplementation.d.ts:446

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

src/ethers-contracts/MockTokenImplementation.d.ts:452

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

src/ethers-contracts/MockTokenImplementation.d.ts:454

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

src/ethers-contracts/MockTokenImplementation.d.ts:459

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

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

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:217

▸ **off**(`eventName`, `listener`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.off

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:238

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

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

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:221

▸ **on**(`eventName`, `listener`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.on

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:239

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

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

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:225

▸ **once**(`eventName`, `listener`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.once

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:240

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

src/ethers-contracts/MockTokenImplementation.d.ts:461

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

src/ethers-contracts/MockTokenImplementation.d.ts:466

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

src/ethers-contracts/MockTokenImplementation.d.ts:244

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

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

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:233

▸ **removeAllListeners**(`eventName?`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:242

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

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

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:229

▸ **removeListener**(`eventName`, `listener`): [`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTokenImplementation`](ethers_contracts.MockTokenImplementation.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:241

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

src/ethers-contracts/MockTokenImplementation.d.ts:477

___

### testNewImplementationActive

▸ **testNewImplementationActive**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/ethers-contracts/MockTokenImplementation.d.ts:501

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

src/ethers-contracts/MockTokenImplementation.d.ts:479

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

src/ethers-contracts/MockTokenImplementation.d.ts:481

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

src/ethers-contracts/MockTokenImplementation.d.ts:487

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

src/ethers-contracts/MockTokenImplementation.d.ts:494

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
