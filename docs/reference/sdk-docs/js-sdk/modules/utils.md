[@certusone/wormhole-sdk](../README.md) / [Exports](../modules.md) / utils

# Namespace: utils

## Table of contents

### Type Aliases

- [ChainContracts](utils.md#chaincontracts)
- [ChainId](utils.md#chainid)
- [ChainIdToName](utils.md#chainidtoname)
- [ChainName](utils.md#chainname)
- [Contracts](utils.md#contracts)
- [CosmWasmChainId](utils.md#cosmwasmchainid)
- [CosmWasmChainName](utils.md#cosmwasmchainname)
- [EVMChainId](utils.md#evmchainid)
- [EVMChainName](utils.md#evmchainname)
- [Network](utils.md#network)
- [SolanaChainName](utils.md#solanachainname)
- [TerraChainId](utils.md#terrachainid)
- [TerraChainName](utils.md#terrachainname)

### Variables

- [APTOS\_DEPLOYER\_ADDRESS](utils.md#aptos_deployer_address)
- [APTOS\_DEPLOYER\_ADDRESS\_DEVNET](utils.md#aptos_deployer_address_devnet)
- [APTOS\_TOKEN\_BRIDGE\_EMITTER\_ADDRESS](utils.md#aptos_token_bridge_emitter_address)
- [CHAINS](utils.md#chains)
- [CHAIN\_ID\_ACALA](utils.md#chain_id_acala)
- [CHAIN\_ID\_ALGORAND](utils.md#chain_id_algorand)
- [CHAIN\_ID\_APTOS](utils.md#chain_id_aptos)
- [CHAIN\_ID\_ARBITRUM](utils.md#chain_id_arbitrum)
- [CHAIN\_ID\_AURORA](utils.md#chain_id_aurora)
- [CHAIN\_ID\_AVAX](utils.md#chain_id_avax)
- [CHAIN\_ID\_BASE](utils.md#chain_id_base)
- [CHAIN\_ID\_BSC](utils.md#chain_id_bsc)
- [CHAIN\_ID\_BTC](utils.md#chain_id_btc)
- [CHAIN\_ID\_CELO](utils.md#chain_id_celo)
- [CHAIN\_ID\_ETH](utils.md#chain_id_eth)
- [CHAIN\_ID\_FANTOM](utils.md#chain_id_fantom)
- [CHAIN\_ID\_GNOSIS](utils.md#chain_id_gnosis)
- [CHAIN\_ID\_INJECTIVE](utils.md#chain_id_injective)
- [CHAIN\_ID\_KARURA](utils.md#chain_id_karura)
- [CHAIN\_ID\_KLAYTN](utils.md#chain_id_klaytn)
- [CHAIN\_ID\_MOONBEAM](utils.md#chain_id_moonbeam)
- [CHAIN\_ID\_NEAR](utils.md#chain_id_near)
- [CHAIN\_ID\_NEON](utils.md#chain_id_neon)
- [CHAIN\_ID\_OASIS](utils.md#chain_id_oasis)
- [CHAIN\_ID\_OPTIMISM](utils.md#chain_id_optimism)
- [CHAIN\_ID\_OSMOSIS](utils.md#chain_id_osmosis)
- [CHAIN\_ID\_POLYGON](utils.md#chain_id_polygon)
- [CHAIN\_ID\_PYTHNET](utils.md#chain_id_pythnet)
- [CHAIN\_ID\_SEI](utils.md#chain_id_sei)
- [CHAIN\_ID\_SEPOLIA](utils.md#chain_id_sepolia)
- [CHAIN\_ID\_SOLANA](utils.md#chain_id_solana)
- [CHAIN\_ID\_SUI](utils.md#chain_id_sui)
- [CHAIN\_ID\_TERRA](utils.md#chain_id_terra)
- [CHAIN\_ID\_TERRA2](utils.md#chain_id_terra2)
- [CHAIN\_ID\_TO\_NAME](utils.md#chain_id_to_name)
- [CHAIN\_ID\_UNSET](utils.md#chain_id_unset)
- [CHAIN\_ID\_WORMCHAIN](utils.md#chain_id_wormchain)
- [CHAIN\_ID\_XPLA](utils.md#chain_id_xpla)
- [CONTRACTS](utils.md#contracts-1)
- [MAX\_VAA\_DECIMALS](utils.md#max_vaa_decimals)
- [METADATA\_REPLACE](utils.md#metadata_replace)
- [TERRA\_REDEEMED\_CHECK\_WALLET\_ADDRESS](utils.md#terra_redeemed_check_wallet_address)
- [WSOL\_ADDRESS](utils.md#wsol_address)
- [WSOL\_DECIMALS](utils.md#wsol_decimals)

### Functions

- [assertChain](utils.md#assertchain)
- [assertEVMChain](utils.md#assertevmchain)
- [callFunctionNear](utils.md#callfunctionnear)
- [chunks](utils.md#chunks)
- [coalesceChainId](utils.md#coalescechainid)
- [coalesceChainName](utils.md#coalescechainname)
- [coalesceCosmWasmChainId](utils.md#coalescecosmwasmchainid)
- [coalesceModuleAddress](utils.md#coalescemoduleaddress)
- [createNonce](utils.md#createnonce)
- [deriveCollectionHashFromTokenId](utils.md#derivecollectionhashfromtokenid)
- [deriveResourceAccountAddress](utils.md#deriveresourceaccountaddress)
- [deriveTokenHashFromTokenId](utils.md#derivetokenhashfromtokenid)
- [ensureHexPrefix](utils.md#ensurehexprefix)
- [generateSignAndSubmitEntryFunction](utils.md#generatesignandsubmitentryfunction)
- [generateSignAndSubmitScript](utils.md#generatesignandsubmitscript)
- [getAssetFullyQualifiedType](utils.md#getassetfullyqualifiedtype)
- [getExternalAddressFromType](utils.md#getexternaladdressfromtype)
- [getForeignAssetAddress](utils.md#getforeignassetaddress)
- [getTokenIdFromTokenHash](utils.md#gettokenidfromtokenhash)
- [getTypeFromExternalAddress](utils.md#gettypefromexternaladdress)
- [hashAccount](utils.md#hashaccount)
- [hashLookup](utils.md#hashlookup)
- [hex](utils.md#hex)
- [hexToNativeAssetString](utils.md#hextonativeassetstring)
- [hexToNativeString](utils.md#hextonativestring)
- [hexToUint8Array](utils.md#hextouint8array)
- [isChain](utils.md#ischain)
- [isCosmWasmChain](utils.md#iscosmwasmchain)
- [isEVMChain](utils.md#isevmchain)
- [isHexNativeTerra](utils.md#ishexnativeterra)
- [isTerraChain](utils.md#isterrachain)
- [isValidAptosType](utils.md#isvalidaptostype)
- [keccak256](utils.md#keccak256)
- [logNearGas](utils.md#logneargas)
- [nativeTerraHexToDenom](utils.md#nativeterrahextodenom)
- [nativeToHexString](utils.md#nativetohexstring)
- [parseNFTPayload](utils.md#parsenftpayload)
- [parseSmartContractStateResponse](utils.md#parsesmartcontractstateresponse)
- [parseTransferPayload](utils.md#parsetransferpayload)
- [queryExternalIdInjective](utils.md#queryexternalidinjective)
- [registerAccount](utils.md#registeraccount)
- [safeBigIntToNumber](utils.md#safebiginttonumber)
- [textToHexString](utils.md#texttohexstring)
- [textToUint8Array](utils.md#texttouint8array)
- [toChainId](utils.md#tochainid)
- [toChainName](utils.md#tochainname)
- [toCosmWasmChainId](utils.md#tocosmwasmchainid)
- [tryHexToNativeAssetString](utils.md#tryhextonativeassetstring)
- [tryHexToNativeString](utils.md#tryhextonativestring)
- [tryHexToNativeStringNear](utils.md#tryhextonativestringnear)
- [tryNativeToHexString](utils.md#trynativetohexstring)
- [tryNativeToUint8Array](utils.md#trynativetouint8array)
- [tryUint8ArrayToNative](utils.md#tryuint8arraytonative)
- [uint8ArrayToHex](utils.md#uint8arraytohex)
- [uint8ArrayToNative](utils.md#uint8arraytonative)

## Type Aliases

### ChainContracts

Ƭ **ChainContracts**: { [chain in ChainName]: Contracts }

#### Defined in

[src/utils/consts.ts:84](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L84)

___

### ChainId

Ƭ **ChainId**: typeof [`CHAINS`](utils.md#chains)[[`ChainName`](utils.md#chainname)]

#### Defined in

[src/utils/consts.ts:38](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L38)

___

### ChainIdToName

Ƭ **ChainIdToName**: { -readonly [key in keyof typeof CHAINS as typeof CHAINS[key]]: key }

#### Defined in

[src/utils/consts.ts:683](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L683)

___

### ChainName

Ƭ **ChainName**: keyof typeof [`CHAINS`](utils.md#chains)

#### Defined in

[src/utils/consts.ts:37](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L37)

___

### Contracts

Ƭ **Contracts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `core` | `string` \| `undefined` |
| `nft_bridge` | `string` \| `undefined` |
| `token_bridge` | `string` \| `undefined` |

#### Defined in

[src/utils/consts.ts:78](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L78)

___

### CosmWasmChainId

Ƭ **CosmWasmChainId**: typeof [`CHAINS`](utils.md#chains)[[`CosmWasmChainName`](utils.md#cosmwasmchainname)]

#### Defined in

[src/utils/consts.ts:700](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L700)

___

### CosmWasmChainName

Ƭ **CosmWasmChainName**: ``"terra"`` \| ``"terra2"`` \| ``"injective"`` \| ``"xpla"`` \| ``"sei"``

#### Defined in

[src/utils/consts.ts:70](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L70)

___

### EVMChainId

Ƭ **EVMChainId**: typeof [`CHAINS`](utils.md#chains)[[`EVMChainName`](utils.md#evmchainname)]

All the EVM-based chain ids that Wormhole supports

#### Defined in

[src/utils/consts.ts:698](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L698)

___

### EVMChainName

Ƭ **EVMChainName**: ``"ethereum"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"base"`` \| ``"sepolia"``

All the EVM-based chain names that Wormhole supports

#### Defined in

[src/utils/consts.ts:44](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L44)

___

### Network

Ƭ **Network**: ``"MAINNET"`` \| ``"TESTNET"`` \| ``"DEVNET"``

#### Defined in

[src/utils/consts.ts:88](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L88)

___

### SolanaChainName

Ƭ **SolanaChainName**: ``"solana"`` \| ``"pythnet"``

All the Solana-based chain names that Wormhole supports

#### Defined in

[src/utils/consts.ts:68](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L68)

___

### TerraChainId

Ƭ **TerraChainId**: typeof [`CHAINS`](utils.md#chains)[[`TerraChainName`](utils.md#terrachainname)]

#### Defined in

[src/utils/consts.ts:702](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L702)

___

### TerraChainName

Ƭ **TerraChainName**: ``"terra"`` \| ``"terra2"``

#### Defined in

[src/utils/consts.ts:76](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L76)

## Variables

### APTOS\_DEPLOYER\_ADDRESS

• `Const` **APTOS\_DEPLOYER\_ADDRESS**: ``"0108bc32f7de18a5f6e1e7d6ee7aff9f5fc858d0d87ac0da94dd8d2a5d267d6b"``

#### Defined in

[src/utils/consts.ts:859](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L859)

___

### APTOS\_DEPLOYER\_ADDRESS\_DEVNET

• `Const` **APTOS\_DEPLOYER\_ADDRESS\_DEVNET**: ``"277fa055b6a73c42c0662d5236c65c864ccbf2d4abd21f174a30c8b786eab84b"``

#### Defined in

[src/utils/consts.ts:861](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L861)

___

### APTOS\_TOKEN\_BRIDGE\_EMITTER\_ADDRESS

• `Const` **APTOS\_TOKEN\_BRIDGE\_EMITTER\_ADDRESS**: ``"0000000000000000000000000000000000000000000000000000000000000001"``

#### Defined in

[src/utils/consts.ts:863](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L863)

___

### CHAINS

• `Const` **CHAINS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acala` | ``12`` |
| `algorand` | ``8`` |
| `aptos` | ``22`` |
| `arbitrum` | ``23`` |
| `aurora` | ``9`` |
| `avalanche` | ``6`` |
| `base` | ``30`` |
| `bsc` | ``4`` |
| `btc` | ``29`` |
| `celo` | ``14`` |
| `ethereum` | ``2`` |
| `fantom` | ``10`` |
| `gnosis` | ``25`` |
| `injective` | ``19`` |
| `karura` | ``11`` |
| `klaytn` | ``13`` |
| `moonbeam` | ``16`` |
| `near` | ``15`` |
| `neon` | ``17`` |
| `oasis` | ``7`` |
| `optimism` | ``24`` |
| `osmosis` | ``20`` |
| `polygon` | ``5`` |
| `pythnet` | ``26`` |
| `sei` | ``32`` |
| `sepolia` | ``10002`` |
| `solana` | ``1`` |
| `sui` | ``21`` |
| `terra` | ``3`` |
| `terra2` | ``18`` |
| `unset` | ``0`` |
| `wormchain` | ``3104`` |
| `xpla` | ``28`` |

#### Defined in

[src/utils/consts.ts:1](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L1)

___

### CHAIN\_ID\_ACALA

• `Const` **CHAIN\_ID\_ACALA**: ``12``

#### Defined in

[src/utils/consts.ts:660](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L660)

___

### CHAIN\_ID\_ALGORAND

• `Const` **CHAIN\_ID\_ALGORAND**: ``8``

#### Defined in

[src/utils/consts.ts:656](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L656)

___

### CHAIN\_ID\_APTOS

• `Const` **CHAIN\_ID\_APTOS**: ``22``

#### Defined in

[src/utils/consts.ts:670](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L670)

___

### CHAIN\_ID\_ARBITRUM

• `Const` **CHAIN\_ID\_ARBITRUM**: ``23``

#### Defined in

[src/utils/consts.ts:671](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L671)

___

### CHAIN\_ID\_AURORA

• `Const` **CHAIN\_ID\_AURORA**: ``9``

#### Defined in

[src/utils/consts.ts:657](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L657)

___

### CHAIN\_ID\_AVAX

• `Const` **CHAIN\_ID\_AVAX**: ``6``

#### Defined in

[src/utils/consts.ts:654](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L654)

___

### CHAIN\_ID\_BASE

• `Const` **CHAIN\_ID\_BASE**: ``30``

#### Defined in

[src/utils/consts.ts:677](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L677)

___

### CHAIN\_ID\_BSC

• `Const` **CHAIN\_ID\_BSC**: ``4``

#### Defined in

[src/utils/consts.ts:652](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L652)

___

### CHAIN\_ID\_BTC

• `Const` **CHAIN\_ID\_BTC**: ``29``

#### Defined in

[src/utils/consts.ts:676](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L676)

___

### CHAIN\_ID\_CELO

• `Const` **CHAIN\_ID\_CELO**: ``14``

#### Defined in

[src/utils/consts.ts:662](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L662)

___

### CHAIN\_ID\_ETH

• `Const` **CHAIN\_ID\_ETH**: ``2``

#### Defined in

[src/utils/consts.ts:650](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L650)

___

### CHAIN\_ID\_FANTOM

• `Const` **CHAIN\_ID\_FANTOM**: ``10``

#### Defined in

[src/utils/consts.ts:658](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L658)

___

### CHAIN\_ID\_GNOSIS

• `Const` **CHAIN\_ID\_GNOSIS**: ``25``

#### Defined in

[src/utils/consts.ts:673](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L673)

___

### CHAIN\_ID\_INJECTIVE

• `Const` **CHAIN\_ID\_INJECTIVE**: ``19``

#### Defined in

[src/utils/consts.ts:667](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L667)

___

### CHAIN\_ID\_KARURA

• `Const` **CHAIN\_ID\_KARURA**: ``11``

#### Defined in

[src/utils/consts.ts:659](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L659)

___

### CHAIN\_ID\_KLAYTN

• `Const` **CHAIN\_ID\_KLAYTN**: ``13``

#### Defined in

[src/utils/consts.ts:661](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L661)

___

### CHAIN\_ID\_MOONBEAM

• `Const` **CHAIN\_ID\_MOONBEAM**: ``16``

#### Defined in

[src/utils/consts.ts:664](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L664)

___

### CHAIN\_ID\_NEAR

• `Const` **CHAIN\_ID\_NEAR**: ``15``

#### Defined in

[src/utils/consts.ts:663](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L663)

___

### CHAIN\_ID\_NEON

• `Const` **CHAIN\_ID\_NEON**: ``17``

#### Defined in

[src/utils/consts.ts:665](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L665)

___

### CHAIN\_ID\_OASIS

• `Const` **CHAIN\_ID\_OASIS**: ``7``

#### Defined in

[src/utils/consts.ts:655](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L655)

___

### CHAIN\_ID\_OPTIMISM

• `Const` **CHAIN\_ID\_OPTIMISM**: ``24``

#### Defined in

[src/utils/consts.ts:672](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L672)

___

### CHAIN\_ID\_OSMOSIS

• `Const` **CHAIN\_ID\_OSMOSIS**: ``20``

#### Defined in

[src/utils/consts.ts:668](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L668)

___

### CHAIN\_ID\_POLYGON

• `Const` **CHAIN\_ID\_POLYGON**: ``5``

#### Defined in

[src/utils/consts.ts:653](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L653)

___

### CHAIN\_ID\_PYTHNET

• `Const` **CHAIN\_ID\_PYTHNET**: ``26``

#### Defined in

[src/utils/consts.ts:674](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L674)

___

### CHAIN\_ID\_SEI

• `Const` **CHAIN\_ID\_SEI**: ``32``

#### Defined in

[src/utils/consts.ts:678](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L678)

___

### CHAIN\_ID\_SEPOLIA

• `Const` **CHAIN\_ID\_SEPOLIA**: ``10002``

#### Defined in

[src/utils/consts.ts:680](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L680)

___

### CHAIN\_ID\_SOLANA

• `Const` **CHAIN\_ID\_SOLANA**: ``1``

#### Defined in

[src/utils/consts.ts:649](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L649)

___

### CHAIN\_ID\_SUI

• `Const` **CHAIN\_ID\_SUI**: ``21``

#### Defined in

[src/utils/consts.ts:669](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L669)

___

### CHAIN\_ID\_TERRA

• `Const` **CHAIN\_ID\_TERRA**: ``3``

#### Defined in

[src/utils/consts.ts:651](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L651)

___

### CHAIN\_ID\_TERRA2

• `Const` **CHAIN\_ID\_TERRA2**: ``18``

#### Defined in

[src/utils/consts.ts:666](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L666)

___

### CHAIN\_ID\_TO\_NAME

• `Const` **CHAIN\_ID\_TO\_NAME**: [`ChainIdToName`](utils.md#chainidtoname)

#### Defined in

[src/utils/consts.ts:686](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L686)

___

### CHAIN\_ID\_UNSET

• `Const` **CHAIN\_ID\_UNSET**: ``0``

#### Defined in

[src/utils/consts.ts:648](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L648)

___

### CHAIN\_ID\_WORMCHAIN

• `Const` **CHAIN\_ID\_WORMCHAIN**: ``3104``

#### Defined in

[src/utils/consts.ts:679](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L679)

___

### CHAIN\_ID\_XPLA

• `Const` **CHAIN\_ID\_XPLA**: ``28``

#### Defined in

[src/utils/consts.ts:675](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L675)

___

### CONTRACTS

• `Const` **CONTRACTS**: `Object`

Contracts addresses on testnet and mainnet

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DEVNET` | { `acala`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `algorand`: { `core`: `string` = "4"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "6" } ; `aptos`: { `core`: `string` = "0xde0036a9600559e295d5f6802ef6f3f802f510366e0c23912b0655d972166017"; `nft_bridge`: `string` = "0x46da3d4c569388af61f951bdd1153f4c875f90c2991f6b2d0a38e2161a40852c"; `token_bridge`: `string` = "0x84a5f374d29fc77e370014dce4fd6a55b58ad608de8074b0be5571701724da31" } ; `arbitrum`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `aurora`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `avalanche`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `base`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `bsc`: { `core`: `string` = "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550"; `nft_bridge`: `string` = "0x26b4afb60d6c903165150c6f0aa14f8016be4aec"; `token_bridge`: `string` = "0x0290FB167208Af455bB137780163b7B7a9a10C16" } ; `btc`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `celo`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `ethereum`: { `core`: `string` = "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550"; `nft_bridge`: `string` = "0x26b4afb60d6c903165150c6f0aa14f8016be4aec"; `token_bridge`: `string` = "0x0290FB167208Af455bB137780163b7B7a9a10C16" } ; `fantom`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `gnosis`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `injective`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `karura`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `klaytn`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `moonbeam`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `near`: { `core`: `string` = "wormhole.test.near"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "token.test.near" } ; `neon`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `oasis`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `optimism`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `osmosis`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `polygon`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `pythnet`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `sei`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `sepolia`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `solana`: { `core`: `string` = "Bridge1p5gheXUvJ6jGWGeCsgPKgnE3YgdGKRVCMY9o"; `nft_bridge`: `string` = "NFTWqJR8YnRVqPDvTJrYuLrQDitTG5AScqbeghi4zSA"; `token_bridge`: `string` = "B6RHG3mfcckmrYN1UhmJzyS1XX3fZKbkeUcpJe9Sy3FE" } ; `sui`: { `core`: `string` = "0x5a5160ca3c2037f4b4051344096ef7a48ebf4400b3f385e57ea90e1628a8bde0"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "0xa6a3da85bbe05da5bfd953708d56f1a3a023e7fb58e5a824a3d4de3791e8f690" } ; `terra`: { `core`: `string` = "terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5"; `nft_bridge`: `string` = "terra1plju286nnfj3z54wgcggd4enwaa9fgf5kgrgzl"; `token_bridge`: `string` = "terra10pyejy66429refv3g35g2t7am0was7ya7kz2a4" } ; `terra2`: { `core`: `string` = "terra14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9ssrc8au"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrquka9l6" } ; `unset`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `wormchain`: { `core`: `string` = "wormhole1ap5vgur5zlgys8whugfegnn43emka567dtq0jl"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "wormhole1zugu6cajc4z7ue29g9wnes9a5ep9cs7yu7rn3z" } ; `xpla`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined }  } |
| `DEVNET.acala` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.acala.core` | `undefined` |
| `DEVNET.acala.nft_bridge` | `undefined` |
| `DEVNET.acala.token_bridge` | `undefined` |
| `DEVNET.algorand` | { `core`: `string` = "4"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "6" } |
| `DEVNET.algorand.core` | `string` |
| `DEVNET.algorand.nft_bridge` | `undefined` |
| `DEVNET.algorand.token_bridge` | `string` |
| `DEVNET.aptos` | { `core`: `string` = "0xde0036a9600559e295d5f6802ef6f3f802f510366e0c23912b0655d972166017"; `nft_bridge`: `string` = "0x46da3d4c569388af61f951bdd1153f4c875f90c2991f6b2d0a38e2161a40852c"; `token_bridge`: `string` = "0x84a5f374d29fc77e370014dce4fd6a55b58ad608de8074b0be5571701724da31" } |
| `DEVNET.aptos.core` | `string` |
| `DEVNET.aptos.nft_bridge` | `string` |
| `DEVNET.aptos.token_bridge` | `string` |
| `DEVNET.arbitrum` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.arbitrum.core` | `undefined` |
| `DEVNET.arbitrum.nft_bridge` | `undefined` |
| `DEVNET.arbitrum.token_bridge` | `undefined` |
| `DEVNET.aurora` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.aurora.core` | `undefined` |
| `DEVNET.aurora.nft_bridge` | `undefined` |
| `DEVNET.aurora.token_bridge` | `undefined` |
| `DEVNET.avalanche` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.avalanche.core` | `undefined` |
| `DEVNET.avalanche.nft_bridge` | `undefined` |
| `DEVNET.avalanche.token_bridge` | `undefined` |
| `DEVNET.base` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.base.core` | `undefined` |
| `DEVNET.base.nft_bridge` | `undefined` |
| `DEVNET.base.token_bridge` | `undefined` |
| `DEVNET.bsc` | { `core`: `string` = "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550"; `nft_bridge`: `string` = "0x26b4afb60d6c903165150c6f0aa14f8016be4aec"; `token_bridge`: `string` = "0x0290FB167208Af455bB137780163b7B7a9a10C16" } |
| `DEVNET.bsc.core` | `string` |
| `DEVNET.bsc.nft_bridge` | `string` |
| `DEVNET.bsc.token_bridge` | `string` |
| `DEVNET.btc` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.btc.core` | `undefined` |
| `DEVNET.btc.nft_bridge` | `undefined` |
| `DEVNET.btc.token_bridge` | `undefined` |
| `DEVNET.celo` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.celo.core` | `undefined` |
| `DEVNET.celo.nft_bridge` | `undefined` |
| `DEVNET.celo.token_bridge` | `undefined` |
| `DEVNET.ethereum` | { `core`: `string` = "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550"; `nft_bridge`: `string` = "0x26b4afb60d6c903165150c6f0aa14f8016be4aec"; `token_bridge`: `string` = "0x0290FB167208Af455bB137780163b7B7a9a10C16" } |
| `DEVNET.ethereum.core` | `string` |
| `DEVNET.ethereum.nft_bridge` | `string` |
| `DEVNET.ethereum.token_bridge` | `string` |
| `DEVNET.fantom` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.fantom.core` | `undefined` |
| `DEVNET.fantom.nft_bridge` | `undefined` |
| `DEVNET.fantom.token_bridge` | `undefined` |
| `DEVNET.gnosis` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.gnosis.core` | `undefined` |
| `DEVNET.gnosis.nft_bridge` | `undefined` |
| `DEVNET.gnosis.token_bridge` | `undefined` |
| `DEVNET.injective` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.injective.core` | `undefined` |
| `DEVNET.injective.nft_bridge` | `undefined` |
| `DEVNET.injective.token_bridge` | `undefined` |
| `DEVNET.karura` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.karura.core` | `undefined` |
| `DEVNET.karura.nft_bridge` | `undefined` |
| `DEVNET.karura.token_bridge` | `undefined` |
| `DEVNET.klaytn` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.klaytn.core` | `undefined` |
| `DEVNET.klaytn.nft_bridge` | `undefined` |
| `DEVNET.klaytn.token_bridge` | `undefined` |
| `DEVNET.moonbeam` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.moonbeam.core` | `undefined` |
| `DEVNET.moonbeam.nft_bridge` | `undefined` |
| `DEVNET.moonbeam.token_bridge` | `undefined` |
| `DEVNET.near` | { `core`: `string` = "wormhole.test.near"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "token.test.near" } |
| `DEVNET.near.core` | `string` |
| `DEVNET.near.nft_bridge` | `undefined` |
| `DEVNET.near.token_bridge` | `string` |
| `DEVNET.neon` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.neon.core` | `undefined` |
| `DEVNET.neon.nft_bridge` | `undefined` |
| `DEVNET.neon.token_bridge` | `undefined` |
| `DEVNET.oasis` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.oasis.core` | `undefined` |
| `DEVNET.oasis.nft_bridge` | `undefined` |
| `DEVNET.oasis.token_bridge` | `undefined` |
| `DEVNET.optimism` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.optimism.core` | `undefined` |
| `DEVNET.optimism.nft_bridge` | `undefined` |
| `DEVNET.optimism.token_bridge` | `undefined` |
| `DEVNET.osmosis` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.osmosis.core` | `undefined` |
| `DEVNET.osmosis.nft_bridge` | `undefined` |
| `DEVNET.osmosis.token_bridge` | `undefined` |
| `DEVNET.polygon` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.polygon.core` | `undefined` |
| `DEVNET.polygon.nft_bridge` | `undefined` |
| `DEVNET.polygon.token_bridge` | `undefined` |
| `DEVNET.pythnet` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.pythnet.core` | `undefined` |
| `DEVNET.pythnet.nft_bridge` | `undefined` |
| `DEVNET.pythnet.token_bridge` | `undefined` |
| `DEVNET.sei` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.sei.core` | `undefined` |
| `DEVNET.sei.nft_bridge` | `undefined` |
| `DEVNET.sei.token_bridge` | `undefined` |
| `DEVNET.sepolia` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.sepolia.core` | `undefined` |
| `DEVNET.sepolia.nft_bridge` | `undefined` |
| `DEVNET.sepolia.token_bridge` | `undefined` |
| `DEVNET.solana` | { `core`: `string` = "Bridge1p5gheXUvJ6jGWGeCsgPKgnE3YgdGKRVCMY9o"; `nft_bridge`: `string` = "NFTWqJR8YnRVqPDvTJrYuLrQDitTG5AScqbeghi4zSA"; `token_bridge`: `string` = "B6RHG3mfcckmrYN1UhmJzyS1XX3fZKbkeUcpJe9Sy3FE" } |
| `DEVNET.solana.core` | `string` |
| `DEVNET.solana.nft_bridge` | `string` |
| `DEVNET.solana.token_bridge` | `string` |
| `DEVNET.sui` | { `core`: `string` = "0x5a5160ca3c2037f4b4051344096ef7a48ebf4400b3f385e57ea90e1628a8bde0"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "0xa6a3da85bbe05da5bfd953708d56f1a3a023e7fb58e5a824a3d4de3791e8f690" } |
| `DEVNET.sui.core` | `string` |
| `DEVNET.sui.nft_bridge` | `undefined` |
| `DEVNET.sui.token_bridge` | `string` |
| `DEVNET.terra` | { `core`: `string` = "terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5"; `nft_bridge`: `string` = "terra1plju286nnfj3z54wgcggd4enwaa9fgf5kgrgzl"; `token_bridge`: `string` = "terra10pyejy66429refv3g35g2t7am0was7ya7kz2a4" } |
| `DEVNET.terra.core` | `string` |
| `DEVNET.terra.nft_bridge` | `string` |
| `DEVNET.terra.token_bridge` | `string` |
| `DEVNET.terra2` | { `core`: `string` = "terra14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9ssrc8au"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrquka9l6" } |
| `DEVNET.terra2.core` | `string` |
| `DEVNET.terra2.nft_bridge` | `undefined` |
| `DEVNET.terra2.token_bridge` | `string` |
| `DEVNET.unset` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.unset.core` | `undefined` |
| `DEVNET.unset.nft_bridge` | `undefined` |
| `DEVNET.unset.token_bridge` | `undefined` |
| `DEVNET.wormchain` | { `core`: `string` = "wormhole1ap5vgur5zlgys8whugfegnn43emka567dtq0jl"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "wormhole1zugu6cajc4z7ue29g9wnes9a5ep9cs7yu7rn3z" } |
| `DEVNET.wormchain.core` | `string` |
| `DEVNET.wormchain.nft_bridge` | `undefined` |
| `DEVNET.wormchain.token_bridge` | `string` |
| `DEVNET.xpla` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `DEVNET.xpla.core` | `undefined` |
| `DEVNET.xpla.nft_bridge` | `undefined` |
| `DEVNET.xpla.token_bridge` | `undefined` |
| `MAINNET` | { `acala`: { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `string` = "0xb91e3638F82A1fACb28690b37e3aAE45d2c33808"; `token_bridge`: `string` = "0xae9d7fe007b3327AA64A32824Aaac52C42a6E624" } ; `algorand`: { `core`: `string` = "842125965"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "842126029" } ; `aptos`: { `core`: `string` = "0x5bc11445584a763c1fa7ed39081f1b920954da14e04b32440cba863d03e19625"; `nft_bridge`: `string` = "0x1bdffae984043833ed7fe223f7af7a3f8902d04129b14f801823e64827da7130"; `token_bridge`: `string` = "0x576410486a2da45eee6c949c995670112ddf2fbeedab20350d506328eefc9d4f" } ; `arbitrum`: { `core`: `string` = "0xa5f208e072434bC67592E4C49C1B991BA79BCA46"; `nft_bridge`: `string` = "0x3dD14D553cFD986EAC8e3bddF629d82073e188c8"; `token_bridge`: `string` = "0x0b2402144Bb366A632D14B83F244D2e0e21bD39c" } ; `aurora`: { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `string` = "0x6dcC0484472523ed9Cdc017F711Bcbf909789284"; `token_bridge`: `string` = "0x51b5123a7b0F9b2bA265f9c4C8de7D78D52f510F" } ; `avalanche`: { `core`: `string` = "0x54a8e5f9c4CbA08F9943965859F6c34eAF03E26c"; `nft_bridge`: `string` = "0xf7B6737Ca9c4e08aE573F75A97B73D7a813f5De5"; `token_bridge`: `string` = "0x0e082F06FF657D94310cB8cE8B0D9a04541d8052" } ; `base`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `bsc`: { `core`: `string` = "0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B"; `nft_bridge`: `string` = "0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE"; `token_bridge`: `string` = "0xB6F6D86a8f9879A9c87f643768d9efc38c1Da6E7" } ; `btc`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `celo`: { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `string` = "0xA6A377d75ca5c9052c9a77ED1e865Cc25Bd97bf3"; `token_bridge`: `string` = "0x796Dff6D74F3E27060B71255Fe517BFb23C93eed" } ; `ethereum`: { `core`: `string` = "0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B"; `nft_bridge`: `string` = "0x6FFd7EdE62328b3Af38FCD61461Bbfc52F5651fE"; `token_bridge`: `string` = "0x3ee18B2214AFF97000D974cf647E7C347E8fa585" } ; `fantom`: { `core`: `string` = "0x126783A6Cb203a3E35344528B26ca3a0489a1485"; `nft_bridge`: `string` = "0xA9c7119aBDa80d4a4E0C06C8F4d8cF5893234535"; `token_bridge`: `string` = "0x7C9Fc5741288cDFdD83CeB07f3ea7e22618D79D2" } ; `gnosis`: { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `injective`: { `core`: `string` = "inj17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9l2q74d"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "inj1ghd753shjuwexxywmgs4xz7x2q732vcnxxynfn" } ; `karura`: { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `string` = "0xb91e3638F82A1fACb28690b37e3aAE45d2c33808"; `token_bridge`: `string` = "0xae9d7fe007b3327AA64A32824Aaac52C42a6E624" } ; `klaytn`: { `core`: `string` = "0x0C21603c4f3a6387e241c0091A7EA39E43E90bb7"; `nft_bridge`: `string` = "0x3c3c561757BAa0b78c5C025CdEAa4ee24C1dFfEf"; `token_bridge`: `string` = "0x5b08ac39EAED75c0439FC750d9FE7E1F9dD0193F" } ; `moonbeam`: { `core`: `string` = "0xC8e2b0cD52Cf01b0Ce87d389Daa3d414d4cE29f3"; `nft_bridge`: `string` = "0x453cfbe096c0f8d763e8c5f24b441097d577bde2"; `token_bridge`: `string` = "0xb1731c586ca89a23809861c6103f0b96b3f57d92" } ; `near`: { `core`: `string` = "contract.wormhole\_crypto.near"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "contract.portalbridge.near" } ; `neon`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `oasis`: { `core`: `string` = "0xfE8cD454b4A1CA468B57D79c0cc77Ef5B6f64585"; `nft_bridge`: `string` = "0x04952D522Ff217f40B5Ef3cbF659EcA7b952a6c1"; `token_bridge`: `string` = "0x5848C791e09901b40A9Ef749f2a6735b418d7564" } ; `optimism`: { `core`: `string` = "0xEe91C335eab126dF5fDB3797EA9d6aD93aeC9722"; `nft_bridge`: `string` = "0xfE8cD454b4A1CA468B57D79c0cc77Ef5B6f64585"; `token_bridge`: `string` = "0x1D68124e65faFC907325e3EDbF8c4d84499DAa8b" } ; `osmosis`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `polygon`: { `core`: `string` = "0x7A4B5a56256163F07b2C80A7cA55aBE66c4ec4d7"; `nft_bridge`: `string` = "0x90BBd86a6Fe93D3bc3ed6335935447E75fAb7fCf"; `token_bridge`: `string` = "0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE" } ; `pythnet`: { `core`: `string` = "H3fxXJ86ADW2PNuDDmZJg6mzTtPxkYCpNuQUTgmJ7AjU"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `sei`: { `core`: `string` = "sei1gjrrme22cyha4ht2xapn3f08zzw6z3d4uxx6fyy9zd5dyr3yxgzqqncdqn"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "sei1smzlm9t79kur392nu9egl8p8je9j92q4gzguewj56a05kyxxra0qy0nuf3" } ; `sepolia`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `solana`: { `core`: `string` = "worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth"; `nft_bridge`: `string` = "WnFt12ZrnzZrFZkt2xsNsaNWoQribnuQ5B5FrDbwDhD"; `token_bridge`: `string` = "wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb" } ; `sui`: { `core`: `string` = "0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "0xc57508ee0d4595e5a8728974a4a93a787d38f339757230d441e895422c07aba9" } ; `terra`: { `core`: `string` = "terra1dq03ugtd40zu9hcgdzrsq6z2z4hwhc9tqk2uy5"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra10nmmwe8r3g99a9newtqa7a75xfgs2e8z87r2sf" } ; `terra2`: { `core`: `string` = "terra12mrnzvhx3rpej6843uge2yyfppfyd3u9c3uq223q8sl48huz9juqffcnhp"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra153366q50k7t8nn7gec00hg66crnhkdggpgdtaxltaq6xrutkkz3s992fw9" } ; `unset`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `wormchain`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `xpla`: { `core`: `string` = "xpla1jn8qmdda5m6f6fqu9qv46rt7ajhklg40ukpqchkejcvy8x7w26cqxamv3w"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "xpla137w0wfch2dfmz7jl2ap8pcmswasj8kg06ay4dtjzw7tzkn77ufxqfw7acv" }  } |
| `MAINNET.acala` | { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `string` = "0xb91e3638F82A1fACb28690b37e3aAE45d2c33808"; `token_bridge`: `string` = "0xae9d7fe007b3327AA64A32824Aaac52C42a6E624" } |
| `MAINNET.acala.core` | `string` |
| `MAINNET.acala.nft_bridge` | `string` |
| `MAINNET.acala.token_bridge` | `string` |
| `MAINNET.algorand` | { `core`: `string` = "842125965"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "842126029" } |
| `MAINNET.algorand.core` | `string` |
| `MAINNET.algorand.nft_bridge` | `undefined` |
| `MAINNET.algorand.token_bridge` | `string` |
| `MAINNET.aptos` | { `core`: `string` = "0x5bc11445584a763c1fa7ed39081f1b920954da14e04b32440cba863d03e19625"; `nft_bridge`: `string` = "0x1bdffae984043833ed7fe223f7af7a3f8902d04129b14f801823e64827da7130"; `token_bridge`: `string` = "0x576410486a2da45eee6c949c995670112ddf2fbeedab20350d506328eefc9d4f" } |
| `MAINNET.aptos.core` | `string` |
| `MAINNET.aptos.nft_bridge` | `string` |
| `MAINNET.aptos.token_bridge` | `string` |
| `MAINNET.arbitrum` | { `core`: `string` = "0xa5f208e072434bC67592E4C49C1B991BA79BCA46"; `nft_bridge`: `string` = "0x3dD14D553cFD986EAC8e3bddF629d82073e188c8"; `token_bridge`: `string` = "0x0b2402144Bb366A632D14B83F244D2e0e21bD39c" } |
| `MAINNET.arbitrum.core` | `string` |
| `MAINNET.arbitrum.nft_bridge` | `string` |
| `MAINNET.arbitrum.token_bridge` | `string` |
| `MAINNET.aurora` | { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `string` = "0x6dcC0484472523ed9Cdc017F711Bcbf909789284"; `token_bridge`: `string` = "0x51b5123a7b0F9b2bA265f9c4C8de7D78D52f510F" } |
| `MAINNET.aurora.core` | `string` |
| `MAINNET.aurora.nft_bridge` | `string` |
| `MAINNET.aurora.token_bridge` | `string` |
| `MAINNET.avalanche` | { `core`: `string` = "0x54a8e5f9c4CbA08F9943965859F6c34eAF03E26c"; `nft_bridge`: `string` = "0xf7B6737Ca9c4e08aE573F75A97B73D7a813f5De5"; `token_bridge`: `string` = "0x0e082F06FF657D94310cB8cE8B0D9a04541d8052" } |
| `MAINNET.avalanche.core` | `string` |
| `MAINNET.avalanche.nft_bridge` | `string` |
| `MAINNET.avalanche.token_bridge` | `string` |
| `MAINNET.base` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.base.core` | `undefined` |
| `MAINNET.base.nft_bridge` | `undefined` |
| `MAINNET.base.token_bridge` | `undefined` |
| `MAINNET.bsc` | { `core`: `string` = "0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B"; `nft_bridge`: `string` = "0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE"; `token_bridge`: `string` = "0xB6F6D86a8f9879A9c87f643768d9efc38c1Da6E7" } |
| `MAINNET.bsc.core` | `string` |
| `MAINNET.bsc.nft_bridge` | `string` |
| `MAINNET.bsc.token_bridge` | `string` |
| `MAINNET.btc` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.btc.core` | `undefined` |
| `MAINNET.btc.nft_bridge` | `undefined` |
| `MAINNET.btc.token_bridge` | `undefined` |
| `MAINNET.celo` | { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `string` = "0xA6A377d75ca5c9052c9a77ED1e865Cc25Bd97bf3"; `token_bridge`: `string` = "0x796Dff6D74F3E27060B71255Fe517BFb23C93eed" } |
| `MAINNET.celo.core` | `string` |
| `MAINNET.celo.nft_bridge` | `string` |
| `MAINNET.celo.token_bridge` | `string` |
| `MAINNET.ethereum` | { `core`: `string` = "0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B"; `nft_bridge`: `string` = "0x6FFd7EdE62328b3Af38FCD61461Bbfc52F5651fE"; `token_bridge`: `string` = "0x3ee18B2214AFF97000D974cf647E7C347E8fa585" } |
| `MAINNET.ethereum.core` | `string` |
| `MAINNET.ethereum.nft_bridge` | `string` |
| `MAINNET.ethereum.token_bridge` | `string` |
| `MAINNET.fantom` | { `core`: `string` = "0x126783A6Cb203a3E35344528B26ca3a0489a1485"; `nft_bridge`: `string` = "0xA9c7119aBDa80d4a4E0C06C8F4d8cF5893234535"; `token_bridge`: `string` = "0x7C9Fc5741288cDFdD83CeB07f3ea7e22618D79D2" } |
| `MAINNET.fantom.core` | `string` |
| `MAINNET.fantom.nft_bridge` | `string` |
| `MAINNET.fantom.token_bridge` | `string` |
| `MAINNET.gnosis` | { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.gnosis.core` | `string` |
| `MAINNET.gnosis.nft_bridge` | `undefined` |
| `MAINNET.gnosis.token_bridge` | `undefined` |
| `MAINNET.injective` | { `core`: `string` = "inj17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9l2q74d"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "inj1ghd753shjuwexxywmgs4xz7x2q732vcnxxynfn" } |
| `MAINNET.injective.core` | `string` |
| `MAINNET.injective.nft_bridge` | `undefined` |
| `MAINNET.injective.token_bridge` | `string` |
| `MAINNET.karura` | { `core`: `string` = "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"; `nft_bridge`: `string` = "0xb91e3638F82A1fACb28690b37e3aAE45d2c33808"; `token_bridge`: `string` = "0xae9d7fe007b3327AA64A32824Aaac52C42a6E624" } |
| `MAINNET.karura.core` | `string` |
| `MAINNET.karura.nft_bridge` | `string` |
| `MAINNET.karura.token_bridge` | `string` |
| `MAINNET.klaytn` | { `core`: `string` = "0x0C21603c4f3a6387e241c0091A7EA39E43E90bb7"; `nft_bridge`: `string` = "0x3c3c561757BAa0b78c5C025CdEAa4ee24C1dFfEf"; `token_bridge`: `string` = "0x5b08ac39EAED75c0439FC750d9FE7E1F9dD0193F" } |
| `MAINNET.klaytn.core` | `string` |
| `MAINNET.klaytn.nft_bridge` | `string` |
| `MAINNET.klaytn.token_bridge` | `string` |
| `MAINNET.moonbeam` | { `core`: `string` = "0xC8e2b0cD52Cf01b0Ce87d389Daa3d414d4cE29f3"; `nft_bridge`: `string` = "0x453cfbe096c0f8d763e8c5f24b441097d577bde2"; `token_bridge`: `string` = "0xb1731c586ca89a23809861c6103f0b96b3f57d92" } |
| `MAINNET.moonbeam.core` | `string` |
| `MAINNET.moonbeam.nft_bridge` | `string` |
| `MAINNET.moonbeam.token_bridge` | `string` |
| `MAINNET.near` | { `core`: `string` = "contract.wormhole\_crypto.near"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "contract.portalbridge.near" } |
| `MAINNET.near.core` | `string` |
| `MAINNET.near.nft_bridge` | `undefined` |
| `MAINNET.near.token_bridge` | `string` |
| `MAINNET.neon` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.neon.core` | `undefined` |
| `MAINNET.neon.nft_bridge` | `undefined` |
| `MAINNET.neon.token_bridge` | `undefined` |
| `MAINNET.oasis` | { `core`: `string` = "0xfE8cD454b4A1CA468B57D79c0cc77Ef5B6f64585"; `nft_bridge`: `string` = "0x04952D522Ff217f40B5Ef3cbF659EcA7b952a6c1"; `token_bridge`: `string` = "0x5848C791e09901b40A9Ef749f2a6735b418d7564" } |
| `MAINNET.oasis.core` | `string` |
| `MAINNET.oasis.nft_bridge` | `string` |
| `MAINNET.oasis.token_bridge` | `string` |
| `MAINNET.optimism` | { `core`: `string` = "0xEe91C335eab126dF5fDB3797EA9d6aD93aeC9722"; `nft_bridge`: `string` = "0xfE8cD454b4A1CA468B57D79c0cc77Ef5B6f64585"; `token_bridge`: `string` = "0x1D68124e65faFC907325e3EDbF8c4d84499DAa8b" } |
| `MAINNET.optimism.core` | `string` |
| `MAINNET.optimism.nft_bridge` | `string` |
| `MAINNET.optimism.token_bridge` | `string` |
| `MAINNET.osmosis` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.osmosis.core` | `undefined` |
| `MAINNET.osmosis.nft_bridge` | `undefined` |
| `MAINNET.osmosis.token_bridge` | `undefined` |
| `MAINNET.polygon` | { `core`: `string` = "0x7A4B5a56256163F07b2C80A7cA55aBE66c4ec4d7"; `nft_bridge`: `string` = "0x90BBd86a6Fe93D3bc3ed6335935447E75fAb7fCf"; `token_bridge`: `string` = "0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE" } |
| `MAINNET.polygon.core` | `string` |
| `MAINNET.polygon.nft_bridge` | `string` |
| `MAINNET.polygon.token_bridge` | `string` |
| `MAINNET.pythnet` | { `core`: `string` = "H3fxXJ86ADW2PNuDDmZJg6mzTtPxkYCpNuQUTgmJ7AjU"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.pythnet.core` | `string` |
| `MAINNET.pythnet.nft_bridge` | `undefined` |
| `MAINNET.pythnet.token_bridge` | `undefined` |
| `MAINNET.sei` | { `core`: `string` = "sei1gjrrme22cyha4ht2xapn3f08zzw6z3d4uxx6fyy9zd5dyr3yxgzqqncdqn"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "sei1smzlm9t79kur392nu9egl8p8je9j92q4gzguewj56a05kyxxra0qy0nuf3" } |
| `MAINNET.sei.core` | `string` |
| `MAINNET.sei.nft_bridge` | `undefined` |
| `MAINNET.sei.token_bridge` | `string` |
| `MAINNET.sepolia` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.sepolia.core` | `undefined` |
| `MAINNET.sepolia.nft_bridge` | `undefined` |
| `MAINNET.sepolia.token_bridge` | `undefined` |
| `MAINNET.solana` | { `core`: `string` = "worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth"; `nft_bridge`: `string` = "WnFt12ZrnzZrFZkt2xsNsaNWoQribnuQ5B5FrDbwDhD"; `token_bridge`: `string` = "wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb" } |
| `MAINNET.solana.core` | `string` |
| `MAINNET.solana.nft_bridge` | `string` |
| `MAINNET.solana.token_bridge` | `string` |
| `MAINNET.sui` | { `core`: `string` = "0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "0xc57508ee0d4595e5a8728974a4a93a787d38f339757230d441e895422c07aba9" } |
| `MAINNET.sui.core` | `string` |
| `MAINNET.sui.nft_bridge` | `undefined` |
| `MAINNET.sui.token_bridge` | `string` |
| `MAINNET.terra` | { `core`: `string` = "terra1dq03ugtd40zu9hcgdzrsq6z2z4hwhc9tqk2uy5"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra10nmmwe8r3g99a9newtqa7a75xfgs2e8z87r2sf" } |
| `MAINNET.terra.core` | `string` |
| `MAINNET.terra.nft_bridge` | `undefined` |
| `MAINNET.terra.token_bridge` | `string` |
| `MAINNET.terra2` | { `core`: `string` = "terra12mrnzvhx3rpej6843uge2yyfppfyd3u9c3uq223q8sl48huz9juqffcnhp"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra153366q50k7t8nn7gec00hg66crnhkdggpgdtaxltaq6xrutkkz3s992fw9" } |
| `MAINNET.terra2.core` | `string` |
| `MAINNET.terra2.nft_bridge` | `undefined` |
| `MAINNET.terra2.token_bridge` | `string` |
| `MAINNET.unset` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.unset.core` | `undefined` |
| `MAINNET.unset.nft_bridge` | `undefined` |
| `MAINNET.unset.token_bridge` | `undefined` |
| `MAINNET.wormchain` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `MAINNET.wormchain.core` | `undefined` |
| `MAINNET.wormchain.nft_bridge` | `undefined` |
| `MAINNET.wormchain.token_bridge` | `undefined` |
| `MAINNET.xpla` | { `core`: `string` = "xpla1jn8qmdda5m6f6fqu9qv46rt7ajhklg40ukpqchkejcvy8x7w26cqxamv3w"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "xpla137w0wfch2dfmz7jl2ap8pcmswasj8kg06ay4dtjzw7tzkn77ufxqfw7acv" } |
| `MAINNET.xpla.core` | `string` |
| `MAINNET.xpla.nft_bridge` | `undefined` |
| `MAINNET.xpla.token_bridge` | `string` |
| `TESTNET` | { `acala`: { `core`: `string` = "0x4377B49d559c0a9466477195C6AdC3D433e265c0"; `nft_bridge`: `string` = "0x96f1335e0AcAB3cfd9899B30b2374e25a2148a6E"; `token_bridge`: `string` = "0xebA00cbe08992EdD08ed7793E07ad6063c807004" } ; `algorand`: { `core`: `string` = "86525623"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "86525641" } ; `aptos`: { `core`: `string` = "0x5bc11445584a763c1fa7ed39081f1b920954da14e04b32440cba863d03e19625"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "0x576410486a2da45eee6c949c995670112ddf2fbeedab20350d506328eefc9d4f" } ; `arbitrum`: { `core`: `string` = "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e"; `nft_bridge`: `string` = "0xEe3dB83916Ccdc3593b734F7F2d16D630F39F1D0"; `token_bridge`: `string` = "0x23908A62110e21C04F3A4e011d24F901F911744A" } ; `aurora`: { `core`: `string` = "0xBd07292de7b505a4E803CEe286184f7Acf908F5e"; `nft_bridge`: `string` = "0x8F399607E9BA2405D87F5f3e1B78D950b44b2e24"; `token_bridge`: `string` = "0xD05eD3ad637b890D68a854d607eEAF11aF456fba" } ; `avalanche`: { `core`: `string` = "0x7bbcE28e64B3F8b84d876Ab298393c38ad7aac4C"; `nft_bridge`: `string` = "0xD601BAf2EEE3C028344471684F6b27E789D9075D"; `token_bridge`: `string` = "0x61E44E506Ca5659E6c0bba9b678586fA2d729756" } ; `base`: { `core`: `string` = "0x23908A62110e21C04F3A4e011d24F901F911744A"; `nft_bridge`: `string` = "0xF681d1cc5F25a3694E348e7975d7564Aa581db59"; `token_bridge`: `string` = "0xA31aa3FDb7aF7Db93d18DDA4e19F811342EDF780" } ; `bsc`: { `core`: `string` = "0x68605AD7b15c732a30b1BbC62BE8F2A509D74b4D"; `nft_bridge`: `string` = "0xcD16E5613EF35599dc82B24Cb45B5A93D779f1EE"; `token_bridge`: `string` = "0x9dcF9D205C9De35334D646BeE44b2D2859712A09" } ; `btc`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `celo`: { `core`: `string` = "0x88505117CA88e7dd2eC6EA1E13f0948db2D50D56"; `nft_bridge`: `string` = "0xaCD8190F647a31E56A656748bC30F69259f245Db"; `token_bridge`: `string` = "0x05ca6037eC51F8b712eD2E6Fa72219FEaE74E153" } ; `ethereum`: { `core`: `string` = "0x706abc4E45D419950511e474C7B9Ed348A4a716c"; `nft_bridge`: `string` = "0xD8E4C2DbDd2e2bd8F1336EA691dBFF6952B1a6eB"; `token_bridge`: `string` = "0xF890982f9310df57d00f659cf4fd87e65adEd8d7" } ; `fantom`: { `core`: `string` = "0x1BB3B4119b7BA9dfad76B0545fb3F531383c3bB7"; `nft_bridge`: `string` = "0x63eD9318628D26BdCB15df58B53BB27231D1B227"; `token_bridge`: `string` = "0x599CEa2204B4FaECd584Ab1F2b6aCA137a0afbE8" } ; `gnosis`: { `core`: `string` = "0xE4eacc10990ba3308DdCC72d985f2a27D20c7d03"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `injective`: { `core`: `string` = "inj1xx3aupmgv3ce537c0yce8zzd3sz567syuyedpg"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "inj1q0e70vhrv063eah90mu97sazhywmeegp7myvnh" } ; `karura`: { `core`: `string` = "0xE4eacc10990ba3308DdCC72d985f2a27D20c7d03"; `nft_bridge`: `string` = "0x0A693c2D594292B6Eb89Cb50EFe4B0b63Dd2760D"; `token_bridge`: `string` = "0xd11De1f930eA1F7Dd0290Fe3a2e35b9C91AEFb37" } ; `klaytn`: { `core`: `string` = "0x1830CC6eE66c84D2F177B94D544967c774E624cA"; `nft_bridge`: `string` = "0x94c994fC51c13101062958b567e743f1a04432dE"; `token_bridge`: `string` = "0xC7A13BE098720840dEa132D860fDfa030884b09A" } ; `moonbeam`: { `core`: `string` = "0xa5B7D85a8f27dd7907dc8FdC21FA5657D5E2F901"; `nft_bridge`: `string` = "0x98A0F4B96972b32Fcb3BD03cAeB66A44a6aB9Edb"; `token_bridge`: `string` = "0xbc976D4b9D57E57c3cA52e1Fd136C45FF7955A96" } ; `near`: { `core`: `string` = "wormhole.wormhole.testnet"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "token.wormhole.testnet" } ; `neon`: { `core`: `string` = "0x268557122Ffd64c85750d630b716471118F323c8"; `nft_bridge`: `string` = "0x66E5BcFD45D2F3f166c567ADa663f9d2ffb292B4"; `token_bridge`: `string` = "0xEe3dB83916Ccdc3593b734F7F2d16D630F39F1D0" } ; `oasis`: { `core`: `string` = "0xc1C338397ffA53a2Eb12A7038b4eeb34791F8aCb"; `nft_bridge`: `string` = "0xC5c25B41AB0b797571620F5204Afa116A44c0ebA"; `token_bridge`: `string` = "0x88d8004A9BdbfD9D28090A02010C19897a29605c" } ; `optimism`: { `core`: `string` = "0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35"; `nft_bridge`: `string` = "0x23908A62110e21C04F3A4e011d24F901F911744A"; `token_bridge`: `string` = "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e" } ; `osmosis`: { `core`: `string` = "osmo1hggkxr0hpw83f8vuft7ruvmmamsxmwk2hzz6nytdkzyup9krt0dq27sgyx"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `polygon`: { `core`: `string` = "0x0CBE91CF822c73C2315FB05100C2F714765d5c20"; `nft_bridge`: `string` = "0x51a02d0dcb5e52F5b92bdAA38FA013C91c7309A9"; `token_bridge`: `string` = "0x377D55a7928c046E18eEbb61977e714d2a76472a" } ; `pythnet`: { `core`: `string` = "EUrRARh92Cdc54xrDn6qzaqjA77NRrCcfbr8kPwoTL4z"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `sei`: { `core`: `string` = "sei1nna9mzp274djrgzhzkac2gvm3j27l402s4xzr08chq57pjsupqnqaj0d5s"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "sei1jv5xw094mclanxt5emammy875qelf3v62u4tl4lp5nhte3w3s9ts9w9az2" } ; `sepolia`: { `core`: `string` = "0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78"; `nft_bridge`: `string` = "0x6a0B52ac198e4870e5F3797d5B403838a5bbFD99"; `token_bridge`: `string` = "0xDB5492265f6038831E89f495670FF909aDe94bd9" } ; `solana`: { `core`: `string` = "3u8hJUVTA4jH1wYAyUur7FFZVQ8H635K3tSHHF4ssjQ5"; `nft_bridge`: `string` = "2rHhojZ7hpu1zA91nvZmT8TqWWvMcKmmNBCr2mKTtMq4"; `token_bridge`: `string` = "DZnkkTmCiFWfYTfT41X3Rd1kDgozqzxWaHqsw6W4x2oe" } ; `sui`: { `core`: `string` = "0x31358d198147da50db32eda2562951d53973a0c0ad5ed738e9b17d88b213d790"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "0x6fb10cdb7aa299e9a4308752dadecb049ff55a892de92992a1edbd7912b3d6da" } ; `terra`: { `core`: `string` = "terra1pd65m0q9tl3v8znnz5f5ltsfegyzah7g42cx5v"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra1pseddrv0yfsn76u4zxrjmtf45kdlmalswdv39a" } ; `terra2`: { `core`: `string` = "terra19nv3xr5lrmmr7egvrk2kqgw4kcn43xrtd5g0mpgwwvhetusk4k7s66jyv0"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra1c02vds4uhgtrmcw7ldlg75zumdqxr8hwf7npseuf2h58jzhpgjxsgmwkvk" } ; `unset`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `wormchain`: { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } ; `xpla`: { `core`: `string` = "xpla1upkjn4mthr0047kahvn0llqx4qpqfn75lnph4jpxfn8walmm8mqsanyy35"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "xpla1kek6zgdaxcsu35nqfsyvs2t9vs87dqkkq6hjdgczacysjn67vt8sern93x" }  } |
| `TESTNET.acala` | { `core`: `string` = "0x4377B49d559c0a9466477195C6AdC3D433e265c0"; `nft_bridge`: `string` = "0x96f1335e0AcAB3cfd9899B30b2374e25a2148a6E"; `token_bridge`: `string` = "0xebA00cbe08992EdD08ed7793E07ad6063c807004" } |
| `TESTNET.acala.core` | `string` |
| `TESTNET.acala.nft_bridge` | `string` |
| `TESTNET.acala.token_bridge` | `string` |
| `TESTNET.algorand` | { `core`: `string` = "86525623"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "86525641" } |
| `TESTNET.algorand.core` | `string` |
| `TESTNET.algorand.nft_bridge` | `undefined` |
| `TESTNET.algorand.token_bridge` | `string` |
| `TESTNET.aptos` | { `core`: `string` = "0x5bc11445584a763c1fa7ed39081f1b920954da14e04b32440cba863d03e19625"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "0x576410486a2da45eee6c949c995670112ddf2fbeedab20350d506328eefc9d4f" } |
| `TESTNET.aptos.core` | `string` |
| `TESTNET.aptos.nft_bridge` | `undefined` |
| `TESTNET.aptos.token_bridge` | `string` |
| `TESTNET.arbitrum` | { `core`: `string` = "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e"; `nft_bridge`: `string` = "0xEe3dB83916Ccdc3593b734F7F2d16D630F39F1D0"; `token_bridge`: `string` = "0x23908A62110e21C04F3A4e011d24F901F911744A" } |
| `TESTNET.arbitrum.core` | `string` |
| `TESTNET.arbitrum.nft_bridge` | `string` |
| `TESTNET.arbitrum.token_bridge` | `string` |
| `TESTNET.aurora` | { `core`: `string` = "0xBd07292de7b505a4E803CEe286184f7Acf908F5e"; `nft_bridge`: `string` = "0x8F399607E9BA2405D87F5f3e1B78D950b44b2e24"; `token_bridge`: `string` = "0xD05eD3ad637b890D68a854d607eEAF11aF456fba" } |
| `TESTNET.aurora.core` | `string` |
| `TESTNET.aurora.nft_bridge` | `string` |
| `TESTNET.aurora.token_bridge` | `string` |
| `TESTNET.avalanche` | { `core`: `string` = "0x7bbcE28e64B3F8b84d876Ab298393c38ad7aac4C"; `nft_bridge`: `string` = "0xD601BAf2EEE3C028344471684F6b27E789D9075D"; `token_bridge`: `string` = "0x61E44E506Ca5659E6c0bba9b678586fA2d729756" } |
| `TESTNET.avalanche.core` | `string` |
| `TESTNET.avalanche.nft_bridge` | `string` |
| `TESTNET.avalanche.token_bridge` | `string` |
| `TESTNET.base` | { `core`: `string` = "0x23908A62110e21C04F3A4e011d24F901F911744A"; `nft_bridge`: `string` = "0xF681d1cc5F25a3694E348e7975d7564Aa581db59"; `token_bridge`: `string` = "0xA31aa3FDb7aF7Db93d18DDA4e19F811342EDF780" } |
| `TESTNET.base.core` | `string` |
| `TESTNET.base.nft_bridge` | `string` |
| `TESTNET.base.token_bridge` | `string` |
| `TESTNET.bsc` | { `core`: `string` = "0x68605AD7b15c732a30b1BbC62BE8F2A509D74b4D"; `nft_bridge`: `string` = "0xcD16E5613EF35599dc82B24Cb45B5A93D779f1EE"; `token_bridge`: `string` = "0x9dcF9D205C9De35334D646BeE44b2D2859712A09" } |
| `TESTNET.bsc.core` | `string` |
| `TESTNET.bsc.nft_bridge` | `string` |
| `TESTNET.bsc.token_bridge` | `string` |
| `TESTNET.btc` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `TESTNET.btc.core` | `undefined` |
| `TESTNET.btc.nft_bridge` | `undefined` |
| `TESTNET.btc.token_bridge` | `undefined` |
| `TESTNET.celo` | { `core`: `string` = "0x88505117CA88e7dd2eC6EA1E13f0948db2D50D56"; `nft_bridge`: `string` = "0xaCD8190F647a31E56A656748bC30F69259f245Db"; `token_bridge`: `string` = "0x05ca6037eC51F8b712eD2E6Fa72219FEaE74E153" } |
| `TESTNET.celo.core` | `string` |
| `TESTNET.celo.nft_bridge` | `string` |
| `TESTNET.celo.token_bridge` | `string` |
| `TESTNET.ethereum` | { `core`: `string` = "0x706abc4E45D419950511e474C7B9Ed348A4a716c"; `nft_bridge`: `string` = "0xD8E4C2DbDd2e2bd8F1336EA691dBFF6952B1a6eB"; `token_bridge`: `string` = "0xF890982f9310df57d00f659cf4fd87e65adEd8d7" } |
| `TESTNET.ethereum.core` | `string` |
| `TESTNET.ethereum.nft_bridge` | `string` |
| `TESTNET.ethereum.token_bridge` | `string` |
| `TESTNET.fantom` | { `core`: `string` = "0x1BB3B4119b7BA9dfad76B0545fb3F531383c3bB7"; `nft_bridge`: `string` = "0x63eD9318628D26BdCB15df58B53BB27231D1B227"; `token_bridge`: `string` = "0x599CEa2204B4FaECd584Ab1F2b6aCA137a0afbE8" } |
| `TESTNET.fantom.core` | `string` |
| `TESTNET.fantom.nft_bridge` | `string` |
| `TESTNET.fantom.token_bridge` | `string` |
| `TESTNET.gnosis` | { `core`: `string` = "0xE4eacc10990ba3308DdCC72d985f2a27D20c7d03"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `TESTNET.gnosis.core` | `string` |
| `TESTNET.gnosis.nft_bridge` | `undefined` |
| `TESTNET.gnosis.token_bridge` | `undefined` |
| `TESTNET.injective` | { `core`: `string` = "inj1xx3aupmgv3ce537c0yce8zzd3sz567syuyedpg"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "inj1q0e70vhrv063eah90mu97sazhywmeegp7myvnh" } |
| `TESTNET.injective.core` | `string` |
| `TESTNET.injective.nft_bridge` | `undefined` |
| `TESTNET.injective.token_bridge` | `string` |
| `TESTNET.karura` | { `core`: `string` = "0xE4eacc10990ba3308DdCC72d985f2a27D20c7d03"; `nft_bridge`: `string` = "0x0A693c2D594292B6Eb89Cb50EFe4B0b63Dd2760D"; `token_bridge`: `string` = "0xd11De1f930eA1F7Dd0290Fe3a2e35b9C91AEFb37" } |
| `TESTNET.karura.core` | `string` |
| `TESTNET.karura.nft_bridge` | `string` |
| `TESTNET.karura.token_bridge` | `string` |
| `TESTNET.klaytn` | { `core`: `string` = "0x1830CC6eE66c84D2F177B94D544967c774E624cA"; `nft_bridge`: `string` = "0x94c994fC51c13101062958b567e743f1a04432dE"; `token_bridge`: `string` = "0xC7A13BE098720840dEa132D860fDfa030884b09A" } |
| `TESTNET.klaytn.core` | `string` |
| `TESTNET.klaytn.nft_bridge` | `string` |
| `TESTNET.klaytn.token_bridge` | `string` |
| `TESTNET.moonbeam` | { `core`: `string` = "0xa5B7D85a8f27dd7907dc8FdC21FA5657D5E2F901"; `nft_bridge`: `string` = "0x98A0F4B96972b32Fcb3BD03cAeB66A44a6aB9Edb"; `token_bridge`: `string` = "0xbc976D4b9D57E57c3cA52e1Fd136C45FF7955A96" } |
| `TESTNET.moonbeam.core` | `string` |
| `TESTNET.moonbeam.nft_bridge` | `string` |
| `TESTNET.moonbeam.token_bridge` | `string` |
| `TESTNET.near` | { `core`: `string` = "wormhole.wormhole.testnet"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "token.wormhole.testnet" } |
| `TESTNET.near.core` | `string` |
| `TESTNET.near.nft_bridge` | `undefined` |
| `TESTNET.near.token_bridge` | `string` |
| `TESTNET.neon` | { `core`: `string` = "0x268557122Ffd64c85750d630b716471118F323c8"; `nft_bridge`: `string` = "0x66E5BcFD45D2F3f166c567ADa663f9d2ffb292B4"; `token_bridge`: `string` = "0xEe3dB83916Ccdc3593b734F7F2d16D630F39F1D0" } |
| `TESTNET.neon.core` | `string` |
| `TESTNET.neon.nft_bridge` | `string` |
| `TESTNET.neon.token_bridge` | `string` |
| `TESTNET.oasis` | { `core`: `string` = "0xc1C338397ffA53a2Eb12A7038b4eeb34791F8aCb"; `nft_bridge`: `string` = "0xC5c25B41AB0b797571620F5204Afa116A44c0ebA"; `token_bridge`: `string` = "0x88d8004A9BdbfD9D28090A02010C19897a29605c" } |
| `TESTNET.oasis.core` | `string` |
| `TESTNET.oasis.nft_bridge` | `string` |
| `TESTNET.oasis.token_bridge` | `string` |
| `TESTNET.optimism` | { `core`: `string` = "0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35"; `nft_bridge`: `string` = "0x23908A62110e21C04F3A4e011d24F901F911744A"; `token_bridge`: `string` = "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e" } |
| `TESTNET.optimism.core` | `string` |
| `TESTNET.optimism.nft_bridge` | `string` |
| `TESTNET.optimism.token_bridge` | `string` |
| `TESTNET.osmosis` | { `core`: `string` = "osmo1hggkxr0hpw83f8vuft7ruvmmamsxmwk2hzz6nytdkzyup9krt0dq27sgyx"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `TESTNET.osmosis.core` | `string` |
| `TESTNET.osmosis.nft_bridge` | `undefined` |
| `TESTNET.osmosis.token_bridge` | `undefined` |
| `TESTNET.polygon` | { `core`: `string` = "0x0CBE91CF822c73C2315FB05100C2F714765d5c20"; `nft_bridge`: `string` = "0x51a02d0dcb5e52F5b92bdAA38FA013C91c7309A9"; `token_bridge`: `string` = "0x377D55a7928c046E18eEbb61977e714d2a76472a" } |
| `TESTNET.polygon.core` | `string` |
| `TESTNET.polygon.nft_bridge` | `string` |
| `TESTNET.polygon.token_bridge` | `string` |
| `TESTNET.pythnet` | { `core`: `string` = "EUrRARh92Cdc54xrDn6qzaqjA77NRrCcfbr8kPwoTL4z"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `TESTNET.pythnet.core` | `string` |
| `TESTNET.pythnet.nft_bridge` | `undefined` |
| `TESTNET.pythnet.token_bridge` | `undefined` |
| `TESTNET.sei` | { `core`: `string` = "sei1nna9mzp274djrgzhzkac2gvm3j27l402s4xzr08chq57pjsupqnqaj0d5s"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "sei1jv5xw094mclanxt5emammy875qelf3v62u4tl4lp5nhte3w3s9ts9w9az2" } |
| `TESTNET.sei.core` | `string` |
| `TESTNET.sei.nft_bridge` | `undefined` |
| `TESTNET.sei.token_bridge` | `string` |
| `TESTNET.sepolia` | { `core`: `string` = "0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78"; `nft_bridge`: `string` = "0x6a0B52ac198e4870e5F3797d5B403838a5bbFD99"; `token_bridge`: `string` = "0xDB5492265f6038831E89f495670FF909aDe94bd9" } |
| `TESTNET.sepolia.core` | `string` |
| `TESTNET.sepolia.nft_bridge` | `string` |
| `TESTNET.sepolia.token_bridge` | `string` |
| `TESTNET.solana` | { `core`: `string` = "3u8hJUVTA4jH1wYAyUur7FFZVQ8H635K3tSHHF4ssjQ5"; `nft_bridge`: `string` = "2rHhojZ7hpu1zA91nvZmT8TqWWvMcKmmNBCr2mKTtMq4"; `token_bridge`: `string` = "DZnkkTmCiFWfYTfT41X3Rd1kDgozqzxWaHqsw6W4x2oe" } |
| `TESTNET.solana.core` | `string` |
| `TESTNET.solana.nft_bridge` | `string` |
| `TESTNET.solana.token_bridge` | `string` |
| `TESTNET.sui` | { `core`: `string` = "0x31358d198147da50db32eda2562951d53973a0c0ad5ed738e9b17d88b213d790"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "0x6fb10cdb7aa299e9a4308752dadecb049ff55a892de92992a1edbd7912b3d6da" } |
| `TESTNET.sui.core` | `string` |
| `TESTNET.sui.nft_bridge` | `undefined` |
| `TESTNET.sui.token_bridge` | `string` |
| `TESTNET.terra` | { `core`: `string` = "terra1pd65m0q9tl3v8znnz5f5ltsfegyzah7g42cx5v"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra1pseddrv0yfsn76u4zxrjmtf45kdlmalswdv39a" } |
| `TESTNET.terra.core` | `string` |
| `TESTNET.terra.nft_bridge` | `undefined` |
| `TESTNET.terra.token_bridge` | `string` |
| `TESTNET.terra2` | { `core`: `string` = "terra19nv3xr5lrmmr7egvrk2kqgw4kcn43xrtd5g0mpgwwvhetusk4k7s66jyv0"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "terra1c02vds4uhgtrmcw7ldlg75zumdqxr8hwf7npseuf2h58jzhpgjxsgmwkvk" } |
| `TESTNET.terra2.core` | `string` |
| `TESTNET.terra2.nft_bridge` | `undefined` |
| `TESTNET.terra2.token_bridge` | `string` |
| `TESTNET.unset` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `TESTNET.unset.core` | `undefined` |
| `TESTNET.unset.nft_bridge` | `undefined` |
| `TESTNET.unset.token_bridge` | `undefined` |
| `TESTNET.wormchain` | { `core`: `undefined` = undefined; `nft_bridge`: `undefined` = undefined; `token_bridge`: `undefined` = undefined } |
| `TESTNET.wormchain.core` | `undefined` |
| `TESTNET.wormchain.nft_bridge` | `undefined` |
| `TESTNET.wormchain.token_bridge` | `undefined` |
| `TESTNET.xpla` | { `core`: `string` = "xpla1upkjn4mthr0047kahvn0llqx4qpqfn75lnph4jpxfn8walmm8mqsanyy35"; `nft_bridge`: `undefined` = undefined; `token_bridge`: `string` = "xpla1kek6zgdaxcsu35nqfsyvs2t9vs87dqkkq6hjdgczacysjn67vt8sern93x" } |
| `TESTNET.xpla.core` | `string` |
| `TESTNET.xpla.nft_bridge` | `undefined` |
| `TESTNET.xpla.token_bridge` | `string` |

#### Defined in

[src/utils/consts.ts:642](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L642)

___

### MAX\_VAA\_DECIMALS

• `Const` **MAX\_VAA\_DECIMALS**: ``8``

#### Defined in

[src/utils/consts.ts:857](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L857)

___

### METADATA\_REPLACE

• `Const` **METADATA\_REPLACE**: `RegExp`

#### Defined in

[src/utils/parseVaa.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/parseVaa.ts#L4)

___

### TERRA\_REDEEMED\_CHECK\_WALLET\_ADDRESS

• `Const` **TERRA\_REDEEMED\_CHECK\_WALLET\_ADDRESS**: ``"terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v"``

#### Defined in

[src/utils/consts.ts:866](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L866)

___

### WSOL\_ADDRESS

• `Const` **WSOL\_ADDRESS**: ``"So11111111111111111111111111111111111111112"``

#### Defined in

[src/utils/consts.ts:855](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L855)

___

### WSOL\_DECIMALS

• `Const` **WSOL\_DECIMALS**: ``9``

#### Defined in

[src/utils/consts.ts:856](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L856)

## Functions

### assertChain

▸ **assertChain**(`chain`): asserts chain is "unset" \| "solana" \| "ethereum" \| "terra" \| "bsc" \| "polygon" \| "avalanche" \| "oasis" \| "algorand" \| "aurora" \| "fantom" \| "karura" \| "acala" \| "klaytn" \| "celo" \| "near" \| "moonbeam" \| "neon" \| "terra2" \| "injective" \| "osmosis" \| "sui" \| "aptos" \| "arbitrum" \| "optimism" \| "gnosis" \| "pythnet" \| "xpla" \| "btc" \| "base" \| "sei" \| "wormchain" \| "sepolia" \| ChainId

Asserts that the given number or string is a valid chain, and throws otherwise.
After calling this function, the type of chain will be narrowed to
[[ChainId]] or [[ChainName]] thanks to the type assertion in the return type.

A typical use-case might look like
```typescript
// c has type 'string'
assertChain(c)
// c now has type 'ChainName'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | `string` \| `number` |

#### Returns

asserts chain is "unset" \| "solana" \| "ethereum" \| "terra" \| "bsc" \| "polygon" \| "avalanche" \| "oasis" \| "algorand" \| "aurora" \| "fantom" \| "karura" \| "acala" \| "klaytn" \| "celo" \| "near" \| "moonbeam" \| "neon" \| "terra2" \| "injective" \| "osmosis" \| "sui" \| "aptos" \| "arbitrum" \| "optimism" \| "gnosis" \| "pythnet" \| "xpla" \| "btc" \| "base" \| "sei" \| "wormchain" \| "sepolia" \| ChainId

#### Defined in

[src/utils/consts.ts:735](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L735)

___

### assertEVMChain

▸ **assertEVMChain**(`chain`): asserts chain is EVMChainName \| EVMChainId

Asserts that the given chain id or chain name is an EVM chain, and throws otherwise.
After calling this function, the type of chain will be narrowed to
[[EVMChainId]] or [[EVMChainName]] thanks to the type assertion in the return type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

asserts chain is EVMChainName \| EVMChainId

#### Defined in

[src/utils/consts.ts:847](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L847)

___

### callFunctionNear

▸ **callFunctionNear**(`provider`, `accountId`, `methodName`, `args?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `accountId` | `string` |
| `methodName` | `string` |
| `args?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/utils/near.ts:79](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/near.ts#L79)

___

### chunks

▸ **chunks**<`T`\>(`array`, `size`): `T`[][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `size` | `number` |

#### Returns

`T`[][]

#### Defined in

[src/utils/array.ts:324](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L324)

___

### coalesceChainId

▸ **coalesceChainId**(`chain`): [`ChainId`](utils.md#chainid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

[`ChainId`](utils.md#chainid)

#### Defined in

[src/utils/consts.ts:771](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L771)

___

### coalesceChainName

▸ **coalesceChainName**(`chain`): [`ChainName`](utils.md#chainname)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

[`ChainName`](utils.md#chainname)

#### Defined in

[src/utils/consts.ts:777](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L777)

___

### coalesceCosmWasmChainId

▸ **coalesceCosmWasmChainId**(`chain`): [`CosmWasmChainId`](utils.md#cosmwasmchainid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`CosmWasmChainName`](utils.md#cosmwasmchainname) \| [`CosmWasmChainId`](utils.md#cosmwasmchainid) |

#### Returns

[`CosmWasmChainId`](utils.md#cosmwasmchainid)

#### Defined in

[src/utils/consts.ts:761](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L761)

___

### coalesceModuleAddress

▸ **coalesceModuleAddress**(`str`): `string`

Returns module address from given fully qualified type/module address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | FQT or module address |

#### Returns

`string`

Module address

#### Defined in

[src/utils/aptos.ts:243](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L243)

___

### createNonce

▸ **createNonce**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[src/utils/createNonce.ts:1](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/createNonce.ts#L1)

___

### deriveCollectionHashFromTokenId

▸ **deriveCollectionHashFromTokenId**(`tokenId`): `Promise`<`Uint8Array`\>

Get a hash that uniquely identifies a collection on Aptos.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `TokenId` |

#### Returns

`Promise`<`Uint8Array`\>

Collection hash

#### Defined in

[src/utils/aptos.ts:281](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L281)

___

### deriveResourceAccountAddress

▸ **deriveResourceAccountAddress**(`nftBridgeAddress`, `originChain`, `originAddress`): `Promise`<``null`` \| `string`\>

The NFT bridge creates resource accounts, which in turn create a collection
and mint a single token for each transferred NFT. This method derives the
address of that resource account from the given origin chain and address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftBridgeAddress` | `string` |  |
| `originChain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |  |
| `originAddress` | `Uint8Array` | External address of NFT on origin chain |

#### Returns

`Promise`<``null`` \| `string`\>

Address of resource account

#### Defined in

[src/utils/aptos.ts:256](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L256)

___

### deriveTokenHashFromTokenId

▸ **deriveTokenHashFromTokenId**(`tokenId`): `Promise`<`Uint8Array`\>

Get a hash that uniquely identifies a token on Aptos.

Native tokens in Aptos are uniquely identified by a hash of creator address,
collection name, token name, and property version. This hash is converted to
a bigint in the `tokenId` field in NFT transfer VAAs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `TokenId` |

#### Returns

`Promise`<`Uint8Array`\>

Token hash identifying the token

#### Defined in

[src/utils/aptos.ts:302](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L302)

___

### ensureHexPrefix

▸ **ensureHexPrefix**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/array.ts:346](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L346)

___

### generateSignAndSubmitEntryFunction

▸ **generateSignAndSubmitEntryFunction**(`client`, `sender`, `payload`, `opts?`): `Promise`<`UserTransaction$1`\>

Generate, sign, and submit a transaction calling the given entry function with the given
arguments. Prevents transaction submission and throws if the transaction fails.

This is separated from `generateSignAndSubmitScript` because it makes use of `AptosClient`'s
`generateTransaction` which pulls ABIs from the node and uses them to encode arguments
automatically.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `AptosClient` | Client used to transfer data to/from Aptos node |
| `sender` | `AptosAccount` | Account that will submit transaction |
| `payload` | `EntryFunctionPayload` | Payload containing unencoded fully qualified entry function, types, and arguments |
| `opts?` | `Partial`<`SubmitTransactionRequest`\> | Override default transaction options |

#### Returns

`Promise`<`UserTransaction$1`\>

Data from transaction after is has been successfully submitted to mempool

#### Defined in

[src/utils/aptos.ts:35](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L35)

___

### generateSignAndSubmitScript

▸ **generateSignAndSubmitScript**(`client`, `sender`, `payload`, `opts?`): `Promise`<`Transaction$1`\>

Generate, sign, and submit a transaction containing given bytecode. Prevents transaction
submission and throws if the transaction fails.

Unlike `generateSignAndSubmitEntryFunction`, this function must construct a `RawTransaction`
manually because `generateTransaction` does not have support for scripts for which there are
no corresponding on-chain ABIs. Type/argument encoding is left to the caller.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `AptosClient` | Client used to transfer data to/from Aptos node |
| `sender` | `AptosAccount` | Account that will submit transaction |
| `payload` | `TransactionPayloadScript` | Payload containing compiled bytecode and encoded types/arguments |
| `opts?` | `Partial`<`SubmitTransactionRequest`\> | Override default transaction options |

#### Returns

`Promise`<`Transaction$1`\>

Data from transaction after is has been successfully submitted to mempool

#### Defined in

[src/utils/aptos.ts:66](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L66)

___

### getAssetFullyQualifiedType

▸ **getAssetFullyQualifiedType**(`tokenBridgeAddress`, `originChain`, `originAddress`): ``null`` \| `string`

Derives the fully qualified type of the asset defined by the given origin chain and address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenBridgeAddress` | `string` | Address of token bridge (32 bytes) |
| `originChain` | [`ChainId`](utils.md#chainid) | Chain ID of chain that original asset is from |
| `originAddress` | `string` | Native address of asset; if origin chain ID is 22 (Aptos), this is the asset's fully qualified type |

#### Returns

``null`` \| `string`

The fully qualified type on Aptos for the given asset

#### Defined in

[src/utils/aptos.ts:108](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L108)

___

### getExternalAddressFromType

▸ **getExternalAddressFromType**(`fullyQualifiedType`): `string`

Hashes the given type. Because fully qualified types are a concept unique to Aptos, this
output acts as the address on other chains.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullyQualifiedType` | `string` | Fully qualified type on Aptos |

#### Returns

`string`

External address corresponding to given type

#### Defined in

[src/utils/aptos.ts:182](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L182)

___

### getForeignAssetAddress

▸ **getForeignAssetAddress**(`tokenBridgeAddress`, `originChain`, `originAddress`): ``null`` \| `string`

Derive the module address for an asset defined by the given origin chain and address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenBridgeAddress` | `string` | Address of token bridge (32 bytes) |
| `originChain` | [`ChainId`](utils.md#chainid) | Chain ID of chain that original asset is from |
| `originAddress` | `string` | Native address of asset |

#### Returns

``null`` \| `string`

The module address for the given asset

#### Defined in

[src/utils/aptos.ts:142](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L142)

___

### getTokenIdFromTokenHash

▸ **getTokenIdFromTokenHash**(`client`, `nftBridgeAddress`, `tokenHash`): `Promise`<`TokenId`\>

Get creator address, collection name, token name, and property version from
a token hash. Note that this method is meant to be used for native tokens
that have already been registered in the NFT bridge.

The token hash is stored in the `tokenId` field of NFT transfer VAAs and
is calculated by the operations in `deriveTokenHashFromTokenId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `AptosClient` |  |
| `nftBridgeAddress` | `string` |  |
| `tokenHash` | `Uint8Array` | Token hash |

#### Returns

`Promise`<`TokenId`\>

Token ID

#### Defined in

[src/utils/aptos.ts:330](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L330)

___

### getTypeFromExternalAddress

▸ **getTypeFromExternalAddress**(`client`, `tokenBridgeAddress`, `fullyQualifiedTypeHash`): `Promise`<`string` \| ``null``\>

Given a hash, returns the fully qualified type by querying the corresponding TypeInfo.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `AptosClient` | Client used to transfer data to/from Aptos node |
| `tokenBridgeAddress` | `string` | Address of token bridge |
| `fullyQualifiedTypeHash` | `string` | Hash of fully qualified type |

#### Returns

`Promise`<`string` \| ``null``\>

The fully qualified type associated with the given hash

#### Defined in

[src/utils/aptos.ts:196](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L196)

___

### hashAccount

▸ **hashAccount**(`provider`, `tokenBridge`, `account`): `Promise`<{ `accountHash`: `string` ; `isRegistered`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `tokenBridge` | `string` |
| `account` | `string` |

#### Returns

`Promise`<{ `accountHash`: `string` ; `isRegistered`: `boolean`  }\>

#### Defined in

[src/utils/near.ts:31](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/near.ts#L31)

___

### hashLookup

▸ **hashLookup**(`provider`, `tokenBridge`, `hash`): `Promise`<{ `found`: `boolean` ; `value`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `tokenBridge` | `string` |
| `hash` | `string` |

#### Returns

`Promise`<{ `found`: `boolean` ; `value`: `string`  }\>

#### Defined in

[src/utils/near.ts:50](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/near.ts#L50)

___

### hex

▸ **hex**(`x`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`Buffer`

#### Defined in

[src/utils/array.ts:339](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L339)

___

### hexToNativeAssetString

▸ **hexToNativeAssetString**(`h`, `c`): `undefined` \| `string`

Convert an address in a wormhole's 32-byte hex representation into a chain's native
string representation.

**`Deprecated`**

since 0.3.0, use [[tryHexToNativeString]] instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `undefined` \| `string` |
| `c` | [`ChainId`](utils.md#chainid) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/utils/array.ts:164](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L164)

___

### hexToNativeString

▸ **hexToNativeString**(`h`, `c`): `undefined` \| `string`

Convert an address in a wormhole's 32-byte hex representation into a chain's native
string representation.

**`Deprecated`**

since 0.3.0, use [[tryHexToNativeString]] instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `undefined` \| `string` |
| `c` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/utils/array.ts:197](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L197)

___

### hexToUint8Array

▸ **hexToUint8Array**(`h`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[src/utils/array.ts:69](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L69)

___

### isChain

▸ **isChain**(`chain`): chain is "unset" \| "solana" \| "ethereum" \| "terra" \| "bsc" \| "polygon" \| "avalanche" \| "oasis" \| "algorand" \| "aurora" \| "fantom" \| "karura" \| "acala" \| "klaytn" \| "celo" \| "near" \| "moonbeam" \| "neon" \| "terra2" \| "injective" \| "osmosis" \| "sui" \| "aptos" \| "arbitrum" \| "optimism" \| "gnosis" \| "pythnet" \| "xpla" \| "btc" \| "base" \| "sei" \| "wormchain" \| "sepolia" \| ChainId

Returns true when called with a valid chain, and narrows the type in the
"true" branch to [[ChainId]] or [[ChainName]] thanks to the type predicate in
the return type.

A typical use-case might look like
```typescript
foo = isChain(c) ? doSomethingWithChainId(c) : handleInvalidCase()
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | `string` \| `number` |

#### Returns

chain is "unset" \| "solana" \| "ethereum" \| "terra" \| "bsc" \| "polygon" \| "avalanche" \| "oasis" \| "algorand" \| "aurora" \| "fantom" \| "karura" \| "acala" \| "klaytn" \| "celo" \| "near" \| "moonbeam" \| "neon" \| "terra2" \| "injective" \| "osmosis" \| "sui" \| "aptos" \| "arbitrum" \| "optimism" \| "gnosis" \| "pythnet" \| "xpla" \| "btc" \| "base" \| "sei" \| "wormchain" \| "sepolia" \| ChainId

#### Defined in

[src/utils/consts.ts:714](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L714)

___

### isCosmWasmChain

▸ **isCosmWasmChain**(`chain`): chain is CosmWasmChainName \| CosmWasmChainId

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

chain is CosmWasmChainName \| CosmWasmChainId

#### Defined in

[src/utils/consts.ts:820](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L820)

___

### isEVMChain

▸ **isEVMChain**(`chain`): chain is EVMChainName \| EVMChainId

Returns true when called with an [[EVMChainId]] or [[EVMChainName]], and false otherwise.
Importantly, after running this check, the chain's type will be narrowed to
either the EVM subset, or the non-EVM subset thanks to the type predicate in
the return type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

chain is EVMChainName \| EVMChainId

#### Defined in

[src/utils/consts.ts:790](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L790)

___

### isHexNativeTerra

▸ **isHexNativeTerra**(`h`): `boolean`

Returns true iff the hex string represents a native Terra denom.

Native assets on terra don't have an associated smart contract address, just
like eth isn't an ERC-20 contract on Ethereum.

The difference is that the EVM implementations of Portal don't support eth
directly, and instead require swapping to an ERC-20 wrapped eth (WETH)
contract first.

The Terra implementation instead supports Terra-native denoms without
wrapping to CW-20 token first. As these denoms don't have an address, they
are encoded in the Portal payloads by the setting the first byte to 1.  This
encoding is safe, because the first 12 bytes of the 32-byte wormhole address
space are not used on Terra otherwise, as cosmos addresses are 20 bytes wide.

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/array.ts:58](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L58)

___

### isTerraChain

▸ **isTerraChain**(`chain`): chain is TerraChainName \| TerraChainId

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

chain is TerraChainName \| TerraChainId

#### Defined in

[src/utils/consts.ts:833](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L833)

___

### isValidAptosType

▸ **isValidAptosType**(`str`): `boolean`

Test if given string is a valid fully qualified type of moduleAddress::moduleName::structName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String to test |

#### Returns

`boolean`

Whether or not given string is a valid type

#### Defined in

[src/utils/aptos.ts:173](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/aptos.ts#L173)

___

### keccak256

▸ **keccak256**(`data`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike` |

#### Returns

`Buffer`

#### Defined in

[src/utils/keccak.ts:3](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/keccak.ts#L3)

___

### logNearGas

▸ **logNearGas**(`result`, `comment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |
| `comment` | `string` |

#### Returns

`void`

#### Defined in

[src/utils/near.ts:6](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/near.ts#L6)

___

### nativeTerraHexToDenom

▸ **nativeTerraHexToDenom**(`h`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/array.ts:63](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L63)

___

### nativeToHexString

▸ **nativeToHexString**(`address`, `chain`): ``null`` \| `string`

Convert an address in a chain's native representation into a 32-byte hex string
understood by wormhole.

**`Deprecated`**

since 0.3.0, use [[tryNativeToHexString]] instead.

**`Throws`**

if address is a malformed string for the given chain id

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `undefined` \| `string` |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

``null`` \| `string`

#### Defined in

[src/utils/array.ts:288](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L288)

___

### parseNFTPayload

▸ **parseNFTPayload**(`payload`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `originAddress` | `string` |
| `originChain` | `number` |
| `symbol` | `string` |
| `targetAddress` | `string` |
| `targetChain` | `number` |
| `tokenId` | `BigNumber` |
| `uri` | `string` |

#### Defined in

[src/utils/parseVaa.ts:16](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/parseVaa.ts#L16)

___

### parseSmartContractStateResponse

▸ **parseSmartContractStateResponse**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `QuerySmartContractStateResponse` |

#### Returns

`any`

#### Defined in

[src/utils/injective.ts:4](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/injective.ts#L4)

___

### parseTransferPayload

▸ **parseTransferPayload**(`payload`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `amount` | `bigint` |
| `fee` | `undefined` \| `bigint` |
| `fromAddress` | `undefined` \| `string` |
| `originAddress` | `string` |
| `originChain` | `number` |
| `targetAddress` | `string` |
| `targetChain` | `number` |

#### Defined in

[src/utils/parseVaa.ts:36](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/parseVaa.ts#L36)

___

### queryExternalIdInjective

▸ **queryExternalIdInjective**(`client`, `tokenBridgeAddress`, `externalTokenId`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChainGrpcWasmApi` |
| `tokenBridgeAddress` | `string` |
| `externalTokenId` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/utils/injective.ts:9](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/injective.ts#L9)

___

### registerAccount

▸ **registerAccount**(`account`, `tokenBridge`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `tokenBridge` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `args` | { `account`: `string`  } |
| `args.account` | `string` |
| `attachedDeposit` | `BN` |
| `contractId` | `string` |
| `gas` | `BN` |
| `methodName` | `string` |

#### Defined in

[src/utils/near.ts:69](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/near.ts#L69)

___

### safeBigIntToNumber

▸ **safeBigIntToNumber**(`b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `bigint` |

#### Returns

`number`

#### Defined in

[src/utils/bigint.ts:1](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/bigint.ts#L1)

___

### textToHexString

▸ **textToHexString**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/array.ts:331](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L331)

___

### textToUint8Array

▸ **textToUint8Array**(`name`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[src/utils/array.ts:335](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L335)

___

### toChainId

▸ **toChainId**(`chainName`): [`ChainId`](utils.md#chainid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` |

#### Returns

[`ChainId`](utils.md#chainid)

#### Defined in

[src/utils/consts.ts:747](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L747)

___

### toChainName

▸ **toChainName**(`chainId`): [`ChainName`](utils.md#chainname)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | [`ChainId`](utils.md#chainid) |

#### Returns

[`ChainName`](utils.md#chainname)

#### Defined in

[src/utils/consts.ts:751](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L751)

___

### toCosmWasmChainId

▸ **toCosmWasmChainId**(`chainName`): [`CosmWasmChainId`](utils.md#cosmwasmchainid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | [`CosmWasmChainName`](utils.md#cosmwasmchainname) |

#### Returns

[`CosmWasmChainId`](utils.md#cosmwasmchainid)

#### Defined in

[src/utils/consts.ts:755](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/consts.ts#L755)

___

### tryHexToNativeAssetString

▸ **tryHexToNativeAssetString**(`h`, `c`): `string`

Convert an address in a wormhole's 32-byte hex representation into a chain's native
string representation.

**`Throws`**

if address is not the right length for the given chain

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `string` |
| `c` | [`ChainId`](utils.md#chainid) |

#### Returns

`string`

#### Defined in

[src/utils/array.ts:151](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L151)

___

### tryHexToNativeString

▸ **tryHexToNativeString**(`h`, `c`): `string`

Convert an address in a wormhole's 32-byte hex representation into a chain's native
string representation.

**`Throws`**

if address is not the right length for the given chain

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `string` |
| `c` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

`string`

#### Defined in

[src/utils/array.ts:185](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L185)

___

### tryHexToNativeStringNear

▸ **tryHexToNativeStringNear**(`provider`, `tokenBridge`, `address`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `tokenBridge` | `string` |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/array.ts:132](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L132)

___

### tryNativeToHexString

▸ **tryNativeToHexString**(`address`, `chain`): `string`

Convert an address in a chain's native representation into a 32-byte hex string
understood by wormhole.

**`Throws`**

if address is a malformed string for the given chain id

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

`string`

#### Defined in

[src/utils/array.ts:219](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L219)

___

### tryNativeToUint8Array

▸ **tryNativeToUint8Array**(`address`, `chain`): `Uint8Array`

Convert an address in a chain's native representation into a 32-byte array
understood by wormhole.

**`Throws`**

if address is a malformed string for the given chain id

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

`Uint8Array`

#### Defined in

[src/utils/array.ts:305](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L305)

___

### tryUint8ArrayToNative

▸ **tryUint8ArrayToNative**(`a`, `chain`): `string`

Convert an address in a wormhole's 32-byte array representation into a chain's
native string representation.

**`Throws`**

if address is not the right length for the given chain

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Uint8Array` |
| `chain` | ``"unset"`` \| ``"solana"`` \| ``"ethereum"`` \| ``"terra"`` \| ``"bsc"`` \| ``"polygon"`` \| ``"avalanche"`` \| ``"oasis"`` \| ``"algorand"`` \| ``"aurora"`` \| ``"fantom"`` \| ``"karura"`` \| ``"acala"`` \| ``"klaytn"`` \| ``"celo"`` \| ``"near"`` \| ``"moonbeam"`` \| ``"neon"`` \| ``"terra2"`` \| ``"injective"`` \| ``"osmosis"`` \| ``"sui"`` \| ``"aptos"`` \| ``"arbitrum"`` \| ``"optimism"`` \| ``"gnosis"`` \| ``"pythnet"`` \| ``"xpla"`` \| ``"btc"`` \| ``"base"`` \| ``"sei"`` \| ``"wormchain"`` \| ``"sepolia"`` \| [`ChainId`](utils.md#chainid) |

#### Returns

`string`

#### Defined in

[src/utils/array.ts:82](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L82)

___

### uint8ArrayToHex

▸ **uint8ArrayToHex**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[src/utils/array.ts:66](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L66)

___

### uint8ArrayToNative

▸ **uint8ArrayToNative**(`a`, `chainId`): `undefined` \| `string`

Convert an address in a chain's native representation into a 32-byte hex string
understood by wormhole.

**`Deprecated`**

since 0.3.0, use [[tryUint8ArrayToNative]] instead.

**`Throws`**

if address is a malformed string for the given chain id

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Uint8Array` |
| `chainId` | [`ChainId`](utils.md#chainid) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/utils/array.ts:321](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/utils/array.ts#L321)
