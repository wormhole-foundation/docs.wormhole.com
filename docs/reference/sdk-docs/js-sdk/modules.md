[@certusone/wormhole-sdk](README.md) / Exports

# @certusone/wormhole-sdk

## Table of contents

### References

- [APTOS\_DEPLOYER\_ADDRESS](modules.md#aptos_deployer_address)
- [APTOS\_DEPLOYER\_ADDRESS\_DEVNET](modules.md#aptos_deployer_address_devnet)
- [APTOS\_TOKEN\_BRIDGE\_EMITTER\_ADDRESS](modules.md#aptos_token_bridge_emitter_address)
- [CHAINS](modules.md#chains)
- [CHAIN\_ID\_ACALA](modules.md#chain_id_acala)
- [CHAIN\_ID\_ALGORAND](modules.md#chain_id_algorand)
- [CHAIN\_ID\_APTOS](modules.md#chain_id_aptos)
- [CHAIN\_ID\_ARBITRUM](modules.md#chain_id_arbitrum)
- [CHAIN\_ID\_AURORA](modules.md#chain_id_aurora)
- [CHAIN\_ID\_AVAX](modules.md#chain_id_avax)
- [CHAIN\_ID\_BASE](modules.md#chain_id_base)
- [CHAIN\_ID\_BSC](modules.md#chain_id_bsc)
- [CHAIN\_ID\_BTC](modules.md#chain_id_btc)
- [CHAIN\_ID\_CELO](modules.md#chain_id_celo)
- [CHAIN\_ID\_ETH](modules.md#chain_id_eth)
- [CHAIN\_ID\_FANTOM](modules.md#chain_id_fantom)
- [CHAIN\_ID\_GNOSIS](modules.md#chain_id_gnosis)
- [CHAIN\_ID\_INJECTIVE](modules.md#chain_id_injective)
- [CHAIN\_ID\_KARURA](modules.md#chain_id_karura)
- [CHAIN\_ID\_KLAYTN](modules.md#chain_id_klaytn)
- [CHAIN\_ID\_MOONBEAM](modules.md#chain_id_moonbeam)
- [CHAIN\_ID\_NEAR](modules.md#chain_id_near)
- [CHAIN\_ID\_NEON](modules.md#chain_id_neon)
- [CHAIN\_ID\_OASIS](modules.md#chain_id_oasis)
- [CHAIN\_ID\_OPTIMISM](modules.md#chain_id_optimism)
- [CHAIN\_ID\_OSMOSIS](modules.md#chain_id_osmosis)
- [CHAIN\_ID\_POLYGON](modules.md#chain_id_polygon)
- [CHAIN\_ID\_PYTHNET](modules.md#chain_id_pythnet)
- [CHAIN\_ID\_SEI](modules.md#chain_id_sei)
- [CHAIN\_ID\_SEPOLIA](modules.md#chain_id_sepolia)
- [CHAIN\_ID\_SOLANA](modules.md#chain_id_solana)
- [CHAIN\_ID\_SUI](modules.md#chain_id_sui)
- [CHAIN\_ID\_TERRA](modules.md#chain_id_terra)
- [CHAIN\_ID\_TERRA2](modules.md#chain_id_terra2)
- [CHAIN\_ID\_TO\_NAME](modules.md#chain_id_to_name)
- [CHAIN\_ID\_UNSET](modules.md#chain_id_unset)
- [CHAIN\_ID\_WORMCHAIN](modules.md#chain_id_wormchain)
- [CHAIN\_ID\_XPLA](modules.md#chain_id_xpla)
- [CONTRACTS](modules.md#contracts)
- [ChainContracts](modules.md#chaincontracts)
- [ChainId](modules.md#chainid)
- [ChainIdToName](modules.md#chainidtoname)
- [ChainName](modules.md#chainname)
- [Contracts](modules.md#contracts-1)
- [CosmWasmChainId](modules.md#cosmwasmchainid)
- [CosmWasmChainName](modules.md#cosmwasmchainname)
- [EVMChainId](modules.md#evmchainid)
- [EVMChainName](modules.md#evmchainname)
- [MAX\_VAA\_DECIMALS](modules.md#max_vaa_decimals)
- [METADATA\_REPLACE](modules.md#metadata_replace)
- [Network](modules.md#network)
- [SolanaChainName](modules.md#solanachainname)
- [TERRA\_REDEEMED\_CHECK\_WALLET\_ADDRESS](modules.md#terra_redeemed_check_wallet_address)
- [TerraChainId](modules.md#terrachainid)
- [TerraChainName](modules.md#terrachainname)
- [WSOL\_ADDRESS](modules.md#wsol_address)
- [WSOL\_DECIMALS](modules.md#wsol_decimals)
- [WormholeWrappedInfo](modules.md#wormholewrappedinfo)
- [approveEth](modules.md#approveeth)
- [assertChain](modules.md#assertchain)
- [assertEVMChain](modules.md#assertevmchain)
- [attestFromAlgorand](modules.md#attestfromalgorand)
- [attestFromAptos](modules.md#attestfromaptos)
- [attestFromEth](modules.md#attestfrometh)
- [attestFromInjective](modules.md#attestfrominjective)
- [attestFromSolana](modules.md#attestfromsolana)
- [attestFromSui](modules.md#attestfromsui)
- [attestFromTerra](modules.md#attestfromterra)
- [attestFromXpla](modules.md#attestfromxpla)
- [attestNearFromNear](modules.md#attestnearfromnear)
- [attestTokenFromNear](modules.md#attesttokenfromnear)
- [callFunctionNear](modules.md#callfunctionnear)
- [chunks](modules.md#chunks)
- [coalesceChainId](modules.md#coalescechainid)
- [coalesceChainName](modules.md#coalescechainname)
- [coalesceCosmWasmChainId](modules.md#coalescecosmwasmchainid)
- [coalesceModuleAddress](modules.md#coalescemoduleaddress)
- [createNonce](modules.md#createnonce)
- [createWrappedOnAlgorand](modules.md#createwrappedonalgorand)
- [createWrappedOnAptos](modules.md#createwrappedonaptos)
- [createWrappedOnEth](modules.md#createwrappedoneth)
- [createWrappedOnInjective](modules.md#createwrappedoninjective)
- [createWrappedOnNear](modules.md#createwrappedonnear)
- [createWrappedOnSolana](modules.md#createwrappedonsolana)
- [createWrappedOnSui](modules.md#createwrappedonsui)
- [createWrappedOnSuiPrepare](modules.md#createwrappedonsuiprepare)
- [createWrappedOnTerra](modules.md#createwrappedonterra)
- [createWrappedOnXpla](modules.md#createwrappedonxpla)
- [createWrappedTypeOnAptos](modules.md#createwrappedtypeonaptos)
- [deriveCollectionHashFromTokenId](modules.md#derivecollectionhashfromtokenid)
- [deriveResourceAccountAddress](modules.md#deriveresourceaccountaddress)
- [deriveTokenHashFromTokenId](modules.md#derivetokenhashfromtokenid)
- [ensureHexPrefix](modules.md#ensurehexprefix)
- [generateSignAndSubmitEntryFunction](modules.md#generatesignandsubmitentryfunction)
- [generateSignAndSubmitScript](modules.md#generatesignandsubmitscript)
- [getAllowanceEth](modules.md#getallowanceeth)
- [getAssetFullyQualifiedType](modules.md#getassetfullyqualifiedtype)
- [getClaimAddressSolana](modules.md#getclaimaddresssolana)
- [getEmitterAddressAlgorand](modules.md#getemitteraddressalgorand)
- [getEmitterAddressEth](modules.md#getemitteraddresseth)
- [getEmitterAddressInjective](modules.md#getemitteraddressinjective)
- [getEmitterAddressNear](modules.md#getemitteraddressnear)
- [getEmitterAddressSolana](modules.md#getemitteraddresssolana)
- [getEmitterAddressTerra](modules.md#getemitteraddressterra)
- [getEmitterAddressXpla](modules.md#getemitteraddressxpla)
- [getExternalAddressFromType](modules.md#getexternaladdressfromtype)
- [getForeignAssetAddress](modules.md#getforeignassetaddress)
- [getForeignAssetAlgorand](modules.md#getforeignassetalgorand)
- [getForeignAssetAptos](modules.md#getforeignassetaptos)
- [getForeignAssetEth](modules.md#getforeignasseteth)
- [getForeignAssetInjective](modules.md#getforeignassetinjective)
- [getForeignAssetNear](modules.md#getforeignassetnear)
- [getForeignAssetSolana](modules.md#getforeignassetsolana)
- [getForeignAssetSui](modules.md#getforeignassetsui)
- [getForeignAssetTerra](modules.md#getforeignassetterra)
- [getForeignAssetXpla](modules.md#getforeignassetxpla)
- [getGovernorIsVAAEnqueued](modules.md#getgovernorisvaaenqueued)
- [getGovernorIsVAAEnqueuedWithRetry](modules.md#getgovernorisvaaenqueuedwithretry)
- [getIsTransferCompletedAlgorand](modules.md#getistransfercompletedalgorand)
- [getIsTransferCompletedAptos](modules.md#getistransfercompletedaptos)
- [getIsTransferCompletedEth](modules.md#getistransfercompletedeth)
- [getIsTransferCompletedInjective](modules.md#getistransfercompletedinjective)
- [getIsTransferCompletedNear](modules.md#getistransfercompletednear)
- [getIsTransferCompletedSolana](modules.md#getistransfercompletedsolana)
- [getIsTransferCompletedSui](modules.md#getistransfercompletedsui)
- [getIsTransferCompletedTerra](modules.md#getistransfercompletedterra)
- [getIsTransferCompletedTerra2](modules.md#getistransfercompletedterra2)
- [getIsTransferCompletedXpla](modules.md#getistransfercompletedxpla)
- [getIsWrappedAssetAlgorand](modules.md#getiswrappedassetalgorand)
- [getIsWrappedAssetAptos](modules.md#getiswrappedassetaptos)
- [getIsWrappedAssetEth](modules.md#getiswrappedasseteth)
- [getIsWrappedAssetInjective](modules.md#getiswrappedassetinjective)
- [getIsWrappedAssetNear](modules.md#getiswrappedassetnear)
- [getIsWrappedAssetSol](modules.md#getiswrappedassetsol)
- [getIsWrappedAssetSolana](modules.md#getiswrappedassetsolana)
- [getIsWrappedAssetSui](modules.md#getiswrappedassetsui)
- [getIsWrappedAssetTerra](modules.md#getiswrappedassetterra)
- [getOriginalAssetAlgorand](modules.md#getoriginalassetalgorand)
- [getOriginalAssetAptos](modules.md#getoriginalassetaptos)
- [getOriginalAssetCosmWasm](modules.md#getoriginalassetcosmwasm)
- [getOriginalAssetEth](modules.md#getoriginalasseteth)
- [getOriginalAssetInjective](modules.md#getoriginalassetinjective)
- [getOriginalAssetNear](modules.md#getoriginalassetnear)
- [getOriginalAssetSol](modules.md#getoriginalassetsol)
- [getOriginalAssetSolana](modules.md#getoriginalassetsolana)
- [getOriginalAssetSui](modules.md#getoriginalassetsui)
- [getOriginalAssetTerra](modules.md#getoriginalassetterra)
- [getOriginalAssetXpla](modules.md#getoriginalassetxpla)
- [getSignedBatchVAA](modules.md#getsignedbatchvaa)
- [getSignedBatchVAAWithRetry](modules.md#getsignedbatchvaawithretry)
- [getSignedVAA](modules.md#getsignedvaa)
- [getSignedVAAHash](modules.md#getsignedvaahash)
- [getSignedVAAWithRetry](modules.md#getsignedvaawithretry)
- [getTokenIdFromTokenHash](modules.md#gettokenidfromtokenhash)
- [getTypeFromExternalAddress](modules.md#gettypefromexternaladdress)
- [hashAccount](modules.md#hashaccount)
- [hashLookup](modules.md#hashlookup)
- [hex](modules.md#hex)
- [hexToNativeAssetString](modules.md#hextonativeassetstring)
- [hexToNativeString](modules.md#hextonativestring)
- [hexToUint8Array](modules.md#hextouint8array)
- [isChain](modules.md#ischain)
- [isCosmWasmChain](modules.md#iscosmwasmchain)
- [isEVMChain](modules.md#isevmchain)
- [isHexNativeTerra](modules.md#ishexnativeterra)
- [isTerraChain](modules.md#isterrachain)
- [isValidAptosType](modules.md#isvalidaptostype)
- [keccak256](modules.md#keccak256)
- [logNearGas](modules.md#logneargas)
- [nativeTerraHexToDenom](modules.md#nativeterrahextodenom)
- [nativeToHexString](modules.md#nativetohexstring)
- [parseNFTPayload](modules.md#parsenftpayload)
- [parseSequenceFromLogAlgorand](modules.md#parsesequencefromlogalgorand)
- [parseSequenceFromLogAptos](modules.md#parsesequencefromlogaptos)
- [parseSequenceFromLogEth](modules.md#parsesequencefromlogeth)
- [parseSequenceFromLogInjective](modules.md#parsesequencefromloginjective)
- [parseSequenceFromLogNear](modules.md#parsesequencefromlognear)
- [parseSequenceFromLogSolana](modules.md#parsesequencefromlogsolana)
- [parseSequenceFromLogSui](modules.md#parsesequencefromlogsui)
- [parseSequenceFromLogTerra](modules.md#parsesequencefromlogterra)
- [parseSequenceFromLogXpla](modules.md#parsesequencefromlogxpla)
- [parseSequencesFromLogEth](modules.md#parsesequencesfromlogeth)
- [parseSequencesFromLogSolana](modules.md#parsesequencesfromlogsolana)
- [parseSequencesFromLogTerra](modules.md#parsesequencesfromlogterra)
- [parseSmartContractStateResponse](modules.md#parsesmartcontractstateresponse)
- [parseTransferPayload](modules.md#parsetransferpayload)
- [postVaaSolana](modules.md#postvaasolana)
- [postVaaSolanaWithRetry](modules.md#postvaasolanawithretry)
- [queryExternalIdInjective](modules.md#queryexternalidinjective)
- [redeemAndUnwrapOnSolana](modules.md#redeemandunwraponsolana)
- [redeemOnAlgorand](modules.md#redeemonalgorand)
- [redeemOnAptos](modules.md#redeemonaptos)
- [redeemOnEth](modules.md#redeemoneth)
- [redeemOnEthNative](modules.md#redeemonethnative)
- [redeemOnInjective](modules.md#redeemoninjective)
- [redeemOnNear](modules.md#redeemonnear)
- [redeemOnSolana](modules.md#redeemonsolana)
- [redeemOnSui](modules.md#redeemonsui)
- [redeemOnTerra](modules.md#redeemonterra)
- [redeemOnXpla](modules.md#redeemonxpla)
- [registerAccount](modules.md#registeraccount)
- [safeBigIntToNumber](modules.md#safebiginttonumber)
- [submitVAAOnInjective](modules.md#submitvaaoninjective)
- [textToHexString](modules.md#texttohexstring)
- [textToUint8Array](modules.md#texttouint8array)
- [toChainId](modules.md#tochainid)
- [toChainName](modules.md#tochainname)
- [toCosmWasmChainId](modules.md#tocosmwasmchainid)
- [transferFromAlgorand](modules.md#transferfromalgorand)
- [transferFromAptos](modules.md#transferfromaptos)
- [transferFromEth](modules.md#transferfrometh)
- [transferFromEthNative](modules.md#transferfromethnative)
- [transferFromInjective](modules.md#transferfrominjective)
- [transferFromSolana](modules.md#transferfromsolana)
- [transferFromSui](modules.md#transferfromsui)
- [transferFromTerra](modules.md#transferfromterra)
- [transferFromXpla](modules.md#transferfromxpla)
- [transferNativeSol](modules.md#transfernativesol)
- [transferNearFromNear](modules.md#transfernearfromnear)
- [transferTokenFromNear](modules.md#transfertokenfromnear)
- [tryHexToNativeAssetString](modules.md#tryhextonativeassetstring)
- [tryHexToNativeString](modules.md#tryhextonativestring)
- [tryHexToNativeStringNear](modules.md#tryhextonativestringnear)
- [tryNativeToHexString](modules.md#trynativetohexstring)
- [tryNativeToUint8Array](modules.md#trynativetouint8array)
- [tryUint8ArrayToNative](modules.md#tryuint8arraytonative)
- [uint8ArrayToHex](modules.md#uint8arraytohex)
- [uint8ArrayToNative](modules.md#uint8arraytonative)
- [updateWrappedOnAlgorand](modules.md#updatewrappedonalgorand)
- [updateWrappedOnAptos](modules.md#updatewrappedonaptos)
- [updateWrappedOnEth](modules.md#updatewrappedoneth)
- [updateWrappedOnInjective](modules.md#updatewrappedoninjective)
- [updateWrappedOnNear](modules.md#updatewrappedonnear)
- [updateWrappedOnSolana](modules.md#updatewrappedonsolana)
- [updateWrappedOnSui](modules.md#updatewrappedonsui)
- [updateWrappedOnTerra](modules.md#updatewrappedonterra)
- [updateWrappedOnXpla](modules.md#updatewrappedonxpla)

### Namespaces

- [algorand](modules/algorand.md)
- [bridge](modules/bridge.md)
- [cosmos](modules/cosmos.md)
- [ethers\_contracts](modules/ethers_contracts.md)
- [nft\_bridge](modules/nft_bridge.md)
- [rpc](modules/rpc.md)
- [solana](modules/solana.md)
- [sui](modules/sui.md)
- [terra](modules/terra.md)
- [token\_bridge](modules/token_bridge.md)
- [utils](modules/utils.md)

### Enumerations

- [NftBridgeGovernanceAction](enums/NftBridgeGovernanceAction.md)
- [NftBridgePayload](enums/NftBridgePayload.md)
- [TokenBridgeGovernanceAction](enums/TokenBridgeGovernanceAction.md)
- [TokenBridgePayload](enums/TokenBridgePayload.md)

### Interfaces

- [AssetMeta](interfaces/AssetMeta.md)
- [CoreContractUpgrade](interfaces/CoreContractUpgrade.md)
- [ExternalIdResponse](interfaces/ExternalIdResponse.md)
- [Governance](interfaces/Governance.md)
- [GuardianSetUpgrade](interfaces/GuardianSetUpgrade.md)
- [GuardianSignature](interfaces/GuardianSignature.md)
- [NFTBridgeTransfer](interfaces/NFTBridgeTransfer.md)
- [NftBridgeUpgradeContract](interfaces/NftBridgeUpgradeContract.md)
- [NftRegisterChain](interfaces/NftRegisterChain.md)
- [NftTransfer](interfaces/NftTransfer.md)
- [Other](interfaces/Other.md)
- [ParsedAssetMetaVaa](interfaces/ParsedAssetMetaVaa.md)
- [ParsedGovernanceVaa](interfaces/ParsedGovernanceVaa.md)
- [ParsedNftBridgeRegisterChainVaa](interfaces/ParsedNftBridgeRegisterChainVaa.md)
- [ParsedNftBridgeUpgradeContractVaa](interfaces/ParsedNftBridgeUpgradeContractVaa.md)
- [ParsedNftTransferVaa](interfaces/ParsedNftTransferVaa.md)
- [ParsedTokenBridgeRegisterChainVaa](interfaces/ParsedTokenBridgeRegisterChainVaa.md)
- [ParsedTokenBridgeUpgradeContractVaa](interfaces/ParsedTokenBridgeUpgradeContractVaa.md)
- [ParsedTokenTransferVaa](interfaces/ParsedTokenTransferVaa.md)
- [ParsedVaa](interfaces/ParsedVaa.md)
- [PortalContractUpgrade](interfaces/PortalContractUpgrade.md)
- [PortalRegisterChain](interfaces/PortalRegisterChain.md)
- [Signature](interfaces/Signature.md)
- [TokenBridgeAttestMeta](interfaces/TokenBridgeAttestMeta.md)
- [TokenBridgeRegisterChain](interfaces/TokenBridgeRegisterChain.md)
- [TokenBridgeTransfer](interfaces/TokenBridgeTransfer.md)
- [TokenBridgeTransferWithPayload](interfaces/TokenBridgeTransferWithPayload.md)
- [TokenBridgeUpgradeContract](interfaces/TokenBridgeUpgradeContract.md)
- [TokenTransfer](interfaces/TokenTransfer.md)
- [VAA](interfaces/VAA.md)

### Type Aliases

- [ContractUpgrade](modules.md#contractupgrade)
- [Encoding](modules.md#encoding)
- [ParsedAttestMetaVaa](modules.md#parsedattestmetavaa)
- [Payload](modules.md#payload)
- [SignedVaa](modules.md#signedvaa)

### Functions

- [assertKnownPayload](modules.md#assertknownpayload)
- [buildTokenId](modules.md#buildtokenid)
- [encode](modules.md#encode)
- [encodeString](modules.md#encodestring)
- [impossible](modules.md#impossible)
- [isBytes](modules.md#isbytes)
- [isNativeCosmWasmDenom](modules.md#isnativecosmwasmdenom)
- [isNativeDenomInjective](modules.md#isnativedenominjective)
- [isNativeDenomXpla](modules.md#isnativedenomxpla)
- [parse](modules.md#parse)
- [parseAttestMetaPayload](modules.md#parseattestmetapayload)
- [parseAttestMetaVaa](modules.md#parseattestmetavaa)
- [parseEnvelope](modules.md#parseenvelope)
- [parseGovernancePayload](modules.md#parsegovernancepayload)
- [parseGovernanceVaa](modules.md#parsegovernancevaa)
- [parseNftBridgeRegisterChainGovernancePayload](modules.md#parsenftbridgeregisterchaingovernancepayload)
- [parseNftBridgeRegisterChainVaa](modules.md#parsenftbridgeregisterchainvaa)
- [parseNftBridgeUpgradeContractGovernancePayload](modules.md#parsenftbridgeupgradecontractgovernancepayload)
- [parseNftBridgeUpgradeContractVaa](modules.md#parsenftbridgeupgradecontractvaa)
- [parseNftTransferPayload](modules.md#parsenfttransferpayload)
- [parseNftTransferVaa](modules.md#parsenfttransfervaa)
- [parseTokenBridgeRegisterChainGovernancePayload](modules.md#parsetokenbridgeregisterchaingovernancepayload)
- [parseTokenBridgeRegisterChainVaa](modules.md#parsetokenbridgeregisterchainvaa)
- [parseTokenBridgeUpgradeContractGovernancePayload](modules.md#parsetokenbridgeupgradecontractgovernancepayload)
- [parseTokenBridgeUpgradeContractVaa](modules.md#parsetokenbridgeupgradecontractvaa)
- [parseTokenTransferPayload](modules.md#parsetokentransferpayload)
- [parseTokenTransferVaa](modules.md#parsetokentransfervaa)
- [parseVaa](modules.md#parsevaa)
- [queryExternalId](modules.md#queryexternalid)
- [serialiseVAA](modules.md#serialisevaa)
- [sign](modules.md#sign)
- [typeWidth](modules.md#typewidth)
- [vaaDigest](modules.md#vaadigest)

## References

### APTOS\_DEPLOYER\_ADDRESS

Re-exports [APTOS_DEPLOYER_ADDRESS](modules/utils.md#aptos_deployer_address)

___

### APTOS\_DEPLOYER\_ADDRESS\_DEVNET

Re-exports [APTOS_DEPLOYER_ADDRESS_DEVNET](modules/utils.md#aptos_deployer_address_devnet)

___

### APTOS\_TOKEN\_BRIDGE\_EMITTER\_ADDRESS

Re-exports [APTOS_TOKEN_BRIDGE_EMITTER_ADDRESS](modules/utils.md#aptos_token_bridge_emitter_address)

___

### CHAINS

Re-exports [CHAINS](modules/utils.md#chains)

___

### CHAIN\_ID\_ACALA

Re-exports [CHAIN_ID_ACALA](modules/utils.md#chain_id_acala)

___

### CHAIN\_ID\_ALGORAND

Re-exports [CHAIN_ID_ALGORAND](modules/utils.md#chain_id_algorand)

___

### CHAIN\_ID\_APTOS

Re-exports [CHAIN_ID_APTOS](modules/utils.md#chain_id_aptos)

___

### CHAIN\_ID\_ARBITRUM

Re-exports [CHAIN_ID_ARBITRUM](modules/utils.md#chain_id_arbitrum)

___

### CHAIN\_ID\_AURORA

Re-exports [CHAIN_ID_AURORA](modules/utils.md#chain_id_aurora)

___

### CHAIN\_ID\_AVAX

Re-exports [CHAIN_ID_AVAX](modules/utils.md#chain_id_avax)

___

### CHAIN\_ID\_BASE

Re-exports [CHAIN_ID_BASE](modules/utils.md#chain_id_base)

___

### CHAIN\_ID\_BSC

Re-exports [CHAIN_ID_BSC](modules/utils.md#chain_id_bsc)

___

### CHAIN\_ID\_BTC

Re-exports [CHAIN_ID_BTC](modules/utils.md#chain_id_btc)

___

### CHAIN\_ID\_CELO

Re-exports [CHAIN_ID_CELO](modules/utils.md#chain_id_celo)

___

### CHAIN\_ID\_ETH

Re-exports [CHAIN_ID_ETH](modules/utils.md#chain_id_eth)

___

### CHAIN\_ID\_FANTOM

Re-exports [CHAIN_ID_FANTOM](modules/utils.md#chain_id_fantom)

___

### CHAIN\_ID\_GNOSIS

Re-exports [CHAIN_ID_GNOSIS](modules/utils.md#chain_id_gnosis)

___

### CHAIN\_ID\_INJECTIVE

Re-exports [CHAIN_ID_INJECTIVE](modules/utils.md#chain_id_injective)

___

### CHAIN\_ID\_KARURA

Re-exports [CHAIN_ID_KARURA](modules/utils.md#chain_id_karura)

___

### CHAIN\_ID\_KLAYTN

Re-exports [CHAIN_ID_KLAYTN](modules/utils.md#chain_id_klaytn)

___

### CHAIN\_ID\_MOONBEAM

Re-exports [CHAIN_ID_MOONBEAM](modules/utils.md#chain_id_moonbeam)

___

### CHAIN\_ID\_NEAR

Re-exports [CHAIN_ID_NEAR](modules/utils.md#chain_id_near)

___

### CHAIN\_ID\_NEON

Re-exports [CHAIN_ID_NEON](modules/utils.md#chain_id_neon)

___

### CHAIN\_ID\_OASIS

Re-exports [CHAIN_ID_OASIS](modules/utils.md#chain_id_oasis)

___

### CHAIN\_ID\_OPTIMISM

Re-exports [CHAIN_ID_OPTIMISM](modules/utils.md#chain_id_optimism)

___

### CHAIN\_ID\_OSMOSIS

Re-exports [CHAIN_ID_OSMOSIS](modules/utils.md#chain_id_osmosis)

___

### CHAIN\_ID\_POLYGON

Re-exports [CHAIN_ID_POLYGON](modules/utils.md#chain_id_polygon)

___

### CHAIN\_ID\_PYTHNET

Re-exports [CHAIN_ID_PYTHNET](modules/utils.md#chain_id_pythnet)

___

### CHAIN\_ID\_SEI

Re-exports [CHAIN_ID_SEI](modules/utils.md#chain_id_sei)

___

### CHAIN\_ID\_SEPOLIA

Re-exports [CHAIN_ID_SEPOLIA](modules/utils.md#chain_id_sepolia)

___

### CHAIN\_ID\_SOLANA

Re-exports [CHAIN_ID_SOLANA](modules/utils.md#chain_id_solana)

___

### CHAIN\_ID\_SUI

Re-exports [CHAIN_ID_SUI](modules/utils.md#chain_id_sui)

___

### CHAIN\_ID\_TERRA

Re-exports [CHAIN_ID_TERRA](modules/utils.md#chain_id_terra)

___

### CHAIN\_ID\_TERRA2

Re-exports [CHAIN_ID_TERRA2](modules/utils.md#chain_id_terra2)

___

### CHAIN\_ID\_TO\_NAME

Re-exports [CHAIN_ID_TO_NAME](modules/utils.md#chain_id_to_name)

___

### CHAIN\_ID\_UNSET

Re-exports [CHAIN_ID_UNSET](modules/utils.md#chain_id_unset)

___

### CHAIN\_ID\_WORMCHAIN

Re-exports [CHAIN_ID_WORMCHAIN](modules/utils.md#chain_id_wormchain)

___

### CHAIN\_ID\_XPLA

Re-exports [CHAIN_ID_XPLA](modules/utils.md#chain_id_xpla)

___

### CONTRACTS

Re-exports [CONTRACTS](modules/utils.md#contracts-1)

___

### ChainContracts

Re-exports [ChainContracts](modules/utils.md#chaincontracts)

___

### ChainId

Re-exports [ChainId](modules/utils.md#chainid)

___

### ChainIdToName

Re-exports [ChainIdToName](modules/utils.md#chainidtoname)

___

### ChainName

Re-exports [ChainName](modules/utils.md#chainname)

___

### Contracts

Re-exports [Contracts](modules/utils.md#contracts)

___

### CosmWasmChainId

Re-exports [CosmWasmChainId](modules/utils.md#cosmwasmchainid)

___

### CosmWasmChainName

Re-exports [CosmWasmChainName](modules/utils.md#cosmwasmchainname)

___

### EVMChainId

Re-exports [EVMChainId](modules/utils.md#evmchainid)

___

### EVMChainName

Re-exports [EVMChainName](modules/utils.md#evmchainname)

___

### MAX\_VAA\_DECIMALS

Re-exports [MAX_VAA_DECIMALS](modules/utils.md#max_vaa_decimals)

___

### METADATA\_REPLACE

Re-exports [METADATA_REPLACE](modules/utils.md#metadata_replace)

___

### Network

Re-exports [Network](modules/utils.md#network)

___

### SolanaChainName

Re-exports [SolanaChainName](modules/utils.md#solanachainname)

___

### TERRA\_REDEEMED\_CHECK\_WALLET\_ADDRESS

Re-exports [TERRA_REDEEMED_CHECK_WALLET_ADDRESS](modules/utils.md#terra_redeemed_check_wallet_address)

___

### TerraChainId

Re-exports [TerraChainId](modules/utils.md#terrachainid)

___

### TerraChainName

Re-exports [TerraChainName](modules/utils.md#terrachainname)

___

### WSOL\_ADDRESS

Re-exports [WSOL_ADDRESS](modules/utils.md#wsol_address)

___

### WSOL\_DECIMALS

Re-exports [WSOL_DECIMALS](modules/utils.md#wsol_decimals)

___

### WormholeWrappedInfo

Re-exports [WormholeWrappedInfo](interfaces/token_bridge.WormholeWrappedInfo.md)

___

### approveEth

Re-exports [approveEth](modules/token_bridge.md#approveeth)

___

### assertChain

Re-exports [assertChain](modules/utils.md#assertchain)

___

### assertEVMChain

Re-exports [assertEVMChain](modules/utils.md#assertevmchain)

___

### attestFromAlgorand

Re-exports [attestFromAlgorand](modules/token_bridge.md#attestfromalgorand)

___

### attestFromAptos

Re-exports [attestFromAptos](modules/token_bridge.md#attestfromaptos)

___

### attestFromEth

Re-exports [attestFromEth](modules/token_bridge.md#attestfrometh)

___

### attestFromInjective

Re-exports [attestFromInjective](modules/token_bridge.md#attestfrominjective)

___

### attestFromSolana

Re-exports [attestFromSolana](modules/token_bridge.md#attestfromsolana)

___

### attestFromSui

Re-exports [attestFromSui](modules/token_bridge.md#attestfromsui)

___

### attestFromTerra

Re-exports [attestFromTerra](modules/token_bridge.md#attestfromterra)

___

### attestFromXpla

Re-exports [attestFromXpla](modules/token_bridge.md#attestfromxpla)

___

### attestNearFromNear

Re-exports [attestNearFromNear](modules/token_bridge.md#attestnearfromnear)

___

### attestTokenFromNear

Re-exports [attestTokenFromNear](modules/token_bridge.md#attesttokenfromnear)

___

### callFunctionNear

Re-exports [callFunctionNear](modules/utils.md#callfunctionnear)

___

### chunks

Re-exports [chunks](modules/utils.md#chunks)

___

### coalesceChainId

Re-exports [coalesceChainId](modules/utils.md#coalescechainid)

___

### coalesceChainName

Re-exports [coalesceChainName](modules/utils.md#coalescechainname)

___

### coalesceCosmWasmChainId

Re-exports [coalesceCosmWasmChainId](modules/utils.md#coalescecosmwasmchainid)

___

### coalesceModuleAddress

Re-exports [coalesceModuleAddress](modules/utils.md#coalescemoduleaddress)

___

### createNonce

Re-exports [createNonce](modules/utils.md#createnonce)

___

### createWrappedOnAlgorand

Re-exports [createWrappedOnAlgorand](modules/token_bridge.md#createwrappedonalgorand)

___

### createWrappedOnAptos

Re-exports [createWrappedOnAptos](modules/token_bridge.md#createwrappedonaptos)

___

### createWrappedOnEth

Re-exports [createWrappedOnEth](modules/token_bridge.md#createwrappedoneth)

___

### createWrappedOnInjective

Re-exports [createWrappedOnInjective](modules/token_bridge.md#createwrappedoninjective)

___

### createWrappedOnNear

Re-exports [createWrappedOnNear](modules/token_bridge.md#createwrappedonnear)

___

### createWrappedOnSolana

Re-exports [createWrappedOnSolana](modules/token_bridge.md#createwrappedonsolana)

___

### createWrappedOnSui

Re-exports [createWrappedOnSui](modules/token_bridge.md#createwrappedonsui)

___

### createWrappedOnSuiPrepare

Re-exports [createWrappedOnSuiPrepare](modules/token_bridge.md#createwrappedonsuiprepare)

___

### createWrappedOnTerra

Re-exports [createWrappedOnTerra](modules/token_bridge.md#createwrappedonterra)

___

### createWrappedOnXpla

Re-exports [createWrappedOnXpla](modules/token_bridge.md#createwrappedonxpla)

___

### createWrappedTypeOnAptos

Re-exports [createWrappedTypeOnAptos](modules/token_bridge.md#createwrappedtypeonaptos)

___

### deriveCollectionHashFromTokenId

Re-exports [deriveCollectionHashFromTokenId](modules/utils.md#derivecollectionhashfromtokenid)

___

### deriveResourceAccountAddress

Re-exports [deriveResourceAccountAddress](modules/utils.md#deriveresourceaccountaddress)

___

### deriveTokenHashFromTokenId

Re-exports [deriveTokenHashFromTokenId](modules/utils.md#derivetokenhashfromtokenid)

___

### ensureHexPrefix

Re-exports [ensureHexPrefix](modules/utils.md#ensurehexprefix)

___

### generateSignAndSubmitEntryFunction

Re-exports [generateSignAndSubmitEntryFunction](modules/utils.md#generatesignandsubmitentryfunction)

___

### generateSignAndSubmitScript

Re-exports [generateSignAndSubmitScript](modules/utils.md#generatesignandsubmitscript)

___

### getAllowanceEth

Re-exports [getAllowanceEth](modules/token_bridge.md#getallowanceeth)

___

### getAssetFullyQualifiedType

Re-exports [getAssetFullyQualifiedType](modules/utils.md#getassetfullyqualifiedtype)

___

### getClaimAddressSolana

Re-exports [getClaimAddressSolana](modules/bridge.md#getclaimaddresssolana)

___

### getEmitterAddressAlgorand

Re-exports [getEmitterAddressAlgorand](modules/bridge.md#getemitteraddressalgorand)

___

### getEmitterAddressEth

Re-exports [getEmitterAddressEth](modules/bridge.md#getemitteraddresseth)

___

### getEmitterAddressInjective

Re-exports [getEmitterAddressInjective](modules/bridge.md#getemitteraddressinjective)

___

### getEmitterAddressNear

Re-exports [getEmitterAddressNear](modules/bridge.md#getemitteraddressnear)

___

### getEmitterAddressSolana

Re-exports [getEmitterAddressSolana](modules/bridge.md#getemitteraddresssolana)

___

### getEmitterAddressTerra

Re-exports [getEmitterAddressTerra](modules/bridge.md#getemitteraddressterra)

___

### getEmitterAddressXpla

Re-exports [getEmitterAddressXpla](modules/bridge.md#getemitteraddressxpla)

___

### getExternalAddressFromType

Re-exports [getExternalAddressFromType](modules/utils.md#getexternaladdressfromtype)

___

### getForeignAssetAddress

Re-exports [getForeignAssetAddress](modules/utils.md#getforeignassetaddress)

___

### getForeignAssetAlgorand

Re-exports [getForeignAssetAlgorand](modules/token_bridge.md#getforeignassetalgorand)

___

### getForeignAssetAptos

Re-exports [getForeignAssetAptos](modules/token_bridge.md#getforeignassetaptos)

___

### getForeignAssetEth

Re-exports [getForeignAssetEth](modules/token_bridge.md#getforeignasseteth)

___

### getForeignAssetInjective

Re-exports [getForeignAssetInjective](modules/token_bridge.md#getforeignassetinjective)

___

### getForeignAssetNear

Re-exports [getForeignAssetNear](modules/token_bridge.md#getforeignassetnear)

___

### getForeignAssetSolana

Re-exports [getForeignAssetSolana](modules/token_bridge.md#getforeignassetsolana)

___

### getForeignAssetSui

Re-exports [getForeignAssetSui](modules/token_bridge.md#getforeignassetsui)

___

### getForeignAssetTerra

Re-exports [getForeignAssetTerra](modules/token_bridge.md#getforeignassetterra)

___

### getForeignAssetXpla

Re-exports [getForeignAssetXpla](modules/token_bridge.md#getforeignassetxpla)

___

### getGovernorIsVAAEnqueued

Re-exports [getGovernorIsVAAEnqueued](modules/rpc.md#getgovernorisvaaenqueued)

___

### getGovernorIsVAAEnqueuedWithRetry

Re-exports [getGovernorIsVAAEnqueuedWithRetry](modules/rpc.md#getgovernorisvaaenqueuedwithretry)

___

### getIsTransferCompletedAlgorand

Re-exports [getIsTransferCompletedAlgorand](modules/token_bridge.md#getistransfercompletedalgorand)

___

### getIsTransferCompletedAptos

Re-exports [getIsTransferCompletedAptos](modules/token_bridge.md#getistransfercompletedaptos)

___

### getIsTransferCompletedEth

Re-exports [getIsTransferCompletedEth](modules/token_bridge.md#getistransfercompletedeth)

___

### getIsTransferCompletedInjective

Re-exports [getIsTransferCompletedInjective](modules/token_bridge.md#getistransfercompletedinjective)

___

### getIsTransferCompletedNear

Re-exports [getIsTransferCompletedNear](modules/token_bridge.md#getistransfercompletednear)

___

### getIsTransferCompletedSolana

Re-exports [getIsTransferCompletedSolana](modules/token_bridge.md#getistransfercompletedsolana)

___

### getIsTransferCompletedSui

Re-exports [getIsTransferCompletedSui](modules/token_bridge.md#getistransfercompletedsui)

___

### getIsTransferCompletedTerra

Re-exports [getIsTransferCompletedTerra](modules/token_bridge.md#getistransfercompletedterra)

___

### getIsTransferCompletedTerra2

Re-exports [getIsTransferCompletedTerra2](modules/token_bridge.md#getistransfercompletedterra2)

___

### getIsTransferCompletedXpla

Re-exports [getIsTransferCompletedXpla](modules/token_bridge.md#getistransfercompletedxpla)

___

### getIsWrappedAssetAlgorand

Re-exports [getIsWrappedAssetAlgorand](modules/token_bridge.md#getiswrappedassetalgorand)

___

### getIsWrappedAssetAptos

Re-exports [getIsWrappedAssetAptos](modules/token_bridge.md#getiswrappedassetaptos)

___

### getIsWrappedAssetEth

Re-exports [getIsWrappedAssetEth](modules/token_bridge.md#getiswrappedasseteth)

___

### getIsWrappedAssetInjective

Re-exports [getIsWrappedAssetInjective](modules/token_bridge.md#getiswrappedassetinjective)

___

### getIsWrappedAssetNear

Re-exports [getIsWrappedAssetNear](modules/token_bridge.md#getiswrappedassetnear)

___

### getIsWrappedAssetSol

Re-exports [getIsWrappedAssetSol](modules/token_bridge.md#getiswrappedassetsol)

___

### getIsWrappedAssetSolana

Re-exports [getIsWrappedAssetSolana](modules/token_bridge.md#getiswrappedassetsolana)

___

### getIsWrappedAssetSui

Re-exports [getIsWrappedAssetSui](modules/token_bridge.md#getiswrappedassetsui)

___

### getIsWrappedAssetTerra

Re-exports [getIsWrappedAssetTerra](modules/token_bridge.md#getiswrappedassetterra)

___

### getOriginalAssetAlgorand

Re-exports [getOriginalAssetAlgorand](modules/token_bridge.md#getoriginalassetalgorand)

___

### getOriginalAssetAptos

Re-exports [getOriginalAssetAptos](modules/token_bridge.md#getoriginalassetaptos)

___

### getOriginalAssetCosmWasm

Re-exports [getOriginalAssetCosmWasm](modules/token_bridge.md#getoriginalassetcosmwasm)

___

### getOriginalAssetEth

Re-exports [getOriginalAssetEth](modules/token_bridge.md#getoriginalasseteth)

___

### getOriginalAssetInjective

Re-exports [getOriginalAssetInjective](modules/token_bridge.md#getoriginalassetinjective)

___

### getOriginalAssetNear

Re-exports [getOriginalAssetNear](modules/token_bridge.md#getoriginalassetnear)

___

### getOriginalAssetSol

Re-exports [getOriginalAssetSol](modules/token_bridge.md#getoriginalassetsol)

___

### getOriginalAssetSolana

Re-exports [getOriginalAssetSolana](modules/token_bridge.md#getoriginalassetsolana)

___

### getOriginalAssetSui

Re-exports [getOriginalAssetSui](modules/token_bridge.md#getoriginalassetsui)

___

### getOriginalAssetTerra

Re-exports [getOriginalAssetTerra](modules/token_bridge.md#getoriginalassetterra)

___

### getOriginalAssetXpla

Re-exports [getOriginalAssetXpla](modules/token_bridge.md#getoriginalassetxpla)

___

### getSignedBatchVAA

Re-exports [getSignedBatchVAA](modules/rpc.md#getsignedbatchvaa)

___

### getSignedBatchVAAWithRetry

Re-exports [getSignedBatchVAAWithRetry](modules/rpc.md#getsignedbatchvaawithretry)

___

### getSignedVAA

Re-exports [getSignedVAA](modules/rpc.md#getsignedvaa)

___

### getSignedVAAHash

Re-exports [getSignedVAAHash](modules/bridge.md#getsignedvaahash)

___

### getSignedVAAWithRetry

Re-exports [getSignedVAAWithRetry](modules/rpc.md#getsignedvaawithretry)

___

### getTokenIdFromTokenHash

Re-exports [getTokenIdFromTokenHash](modules/utils.md#gettokenidfromtokenhash)

___

### getTypeFromExternalAddress

Re-exports [getTypeFromExternalAddress](modules/utils.md#gettypefromexternaladdress)

___

### hashAccount

Re-exports [hashAccount](modules/utils.md#hashaccount)

___

### hashLookup

Re-exports [hashLookup](modules/utils.md#hashlookup)

___

### hex

Re-exports [hex](modules/utils.md#hex)

___

### hexToNativeAssetString

Re-exports [hexToNativeAssetString](modules/utils.md#hextonativeassetstring)

___

### hexToNativeString

Re-exports [hexToNativeString](modules/utils.md#hextonativestring)

___

### hexToUint8Array

Re-exports [hexToUint8Array](modules/utils.md#hextouint8array)

___

### isChain

Re-exports [isChain](modules/utils.md#ischain)

___

### isCosmWasmChain

Re-exports [isCosmWasmChain](modules/utils.md#iscosmwasmchain)

___

### isEVMChain

Re-exports [isEVMChain](modules/utils.md#isevmchain)

___

### isHexNativeTerra

Re-exports [isHexNativeTerra](modules/utils.md#ishexnativeterra)

___

### isTerraChain

Re-exports [isTerraChain](modules/utils.md#isterrachain)

___

### isValidAptosType

Re-exports [isValidAptosType](modules/utils.md#isvalidaptostype)

___

### keccak256

Re-exports [keccak256](modules/utils.md#keccak256)

___

### logNearGas

Re-exports [logNearGas](modules/utils.md#logneargas)

___

### nativeTerraHexToDenom

Re-exports [nativeTerraHexToDenom](modules/utils.md#nativeterrahextodenom)

___

### nativeToHexString

Re-exports [nativeToHexString](modules/utils.md#nativetohexstring)

___

### parseNFTPayload

Re-exports [parseNFTPayload](modules/utils.md#parsenftpayload)

___

### parseSequenceFromLogAlgorand

Re-exports [parseSequenceFromLogAlgorand](modules/bridge.md#parsesequencefromlogalgorand)

___

### parseSequenceFromLogAptos

Re-exports [parseSequenceFromLogAptos](modules/bridge.md#parsesequencefromlogaptos)

___

### parseSequenceFromLogEth

Re-exports [parseSequenceFromLogEth](modules/bridge.md#parsesequencefromlogeth)

___

### parseSequenceFromLogInjective

Re-exports [parseSequenceFromLogInjective](modules/bridge.md#parsesequencefromloginjective)

___

### parseSequenceFromLogNear

Re-exports [parseSequenceFromLogNear](modules/bridge.md#parsesequencefromlognear)

___

### parseSequenceFromLogSolana

Re-exports [parseSequenceFromLogSolana](modules/bridge.md#parsesequencefromlogsolana)

___

### parseSequenceFromLogSui

Re-exports [parseSequenceFromLogSui](modules/bridge.md#parsesequencefromlogsui)

___

### parseSequenceFromLogTerra

Re-exports [parseSequenceFromLogTerra](modules/bridge.md#parsesequencefromlogterra)

___

### parseSequenceFromLogXpla

Re-exports [parseSequenceFromLogXpla](modules/bridge.md#parsesequencefromlogxpla)

___

### parseSequencesFromLogEth

Re-exports [parseSequencesFromLogEth](modules/bridge.md#parsesequencesfromlogeth)

___

### parseSequencesFromLogSolana

Re-exports [parseSequencesFromLogSolana](modules/bridge.md#parsesequencesfromlogsolana)

___

### parseSequencesFromLogTerra

Re-exports [parseSequencesFromLogTerra](modules/bridge.md#parsesequencesfromlogterra)

___

### parseSmartContractStateResponse

Re-exports [parseSmartContractStateResponse](modules/utils.md#parsesmartcontractstateresponse)

___

### parseTransferPayload

Re-exports [parseTransferPayload](modules/utils.md#parsetransferpayload)

___

### postVaaSolana

Re-exports [postVaaSolana](modules/solana.md#postvaasolana)

___

### postVaaSolanaWithRetry

Re-exports [postVaaSolanaWithRetry](modules/solana.md#postvaasolanawithretry)

___

### queryExternalIdInjective

Re-exports [queryExternalIdInjective](modules/utils.md#queryexternalidinjective)

___

### redeemAndUnwrapOnSolana

Re-exports [redeemAndUnwrapOnSolana](modules/token_bridge.md#redeemandunwraponsolana)

___

### redeemOnAlgorand

Re-exports [redeemOnAlgorand](modules/token_bridge.md#redeemonalgorand)

___

### redeemOnAptos

Re-exports [redeemOnAptos](modules/token_bridge.md#redeemonaptos)

___

### redeemOnEth

Re-exports [redeemOnEth](modules/token_bridge.md#redeemoneth)

___

### redeemOnEthNative

Re-exports [redeemOnEthNative](modules/token_bridge.md#redeemonethnative)

___

### redeemOnInjective

Re-exports [redeemOnInjective](modules/token_bridge.md#redeemoninjective)

___

### redeemOnNear

Re-exports [redeemOnNear](modules/token_bridge.md#redeemonnear)

___

### redeemOnSolana

Re-exports [redeemOnSolana](modules/token_bridge.md#redeemonsolana)

___

### redeemOnSui

Re-exports [redeemOnSui](modules/token_bridge.md#redeemonsui)

___

### redeemOnTerra

Re-exports [redeemOnTerra](modules/token_bridge.md#redeemonterra)

___

### redeemOnXpla

Re-exports [redeemOnXpla](modules/token_bridge.md#redeemonxpla)

___

### registerAccount

Re-exports [registerAccount](modules/utils.md#registeraccount)

___

### safeBigIntToNumber

Re-exports [safeBigIntToNumber](modules/utils.md#safebiginttonumber)

___

### submitVAAOnInjective

Re-exports [submitVAAOnInjective](modules/token_bridge.md#submitvaaoninjective)

___

### textToHexString

Re-exports [textToHexString](modules/utils.md#texttohexstring)

___

### textToUint8Array

Re-exports [textToUint8Array](modules/utils.md#texttouint8array)

___

### toChainId

Re-exports [toChainId](modules/utils.md#tochainid)

___

### toChainName

Re-exports [toChainName](modules/utils.md#tochainname)

___

### toCosmWasmChainId

Re-exports [toCosmWasmChainId](modules/utils.md#tocosmwasmchainid)

___

### transferFromAlgorand

Re-exports [transferFromAlgorand](modules/token_bridge.md#transferfromalgorand)

___

### transferFromAptos

Re-exports [transferFromAptos](modules/token_bridge.md#transferfromaptos)

___

### transferFromEth

Re-exports [transferFromEth](modules/token_bridge.md#transferfrometh)

___

### transferFromEthNative

Re-exports [transferFromEthNative](modules/token_bridge.md#transferfromethnative)

___

### transferFromInjective

Re-exports [transferFromInjective](modules/token_bridge.md#transferfrominjective)

___

### transferFromSolana

Re-exports [transferFromSolana](modules/token_bridge.md#transferfromsolana)

___

### transferFromSui

Re-exports [transferFromSui](modules/token_bridge.md#transferfromsui)

___

### transferFromTerra

Re-exports [transferFromTerra](modules/token_bridge.md#transferfromterra)

___

### transferFromXpla

Re-exports [transferFromXpla](modules/token_bridge.md#transferfromxpla)

___

### transferNativeSol

Re-exports [transferNativeSol](modules/token_bridge.md#transfernativesol)

___

### transferNearFromNear

Re-exports [transferNearFromNear](modules/token_bridge.md#transfernearfromnear)

___

### transferTokenFromNear

Re-exports [transferTokenFromNear](modules/token_bridge.md#transfertokenfromnear)

___

### tryHexToNativeAssetString

Re-exports [tryHexToNativeAssetString](modules/utils.md#tryhextonativeassetstring)

___

### tryHexToNativeString

Re-exports [tryHexToNativeString](modules/utils.md#tryhextonativestring)

___

### tryHexToNativeStringNear

Re-exports [tryHexToNativeStringNear](modules/utils.md#tryhextonativestringnear)

___

### tryNativeToHexString

Re-exports [tryNativeToHexString](modules/utils.md#trynativetohexstring)

___

### tryNativeToUint8Array

Re-exports [tryNativeToUint8Array](modules/utils.md#trynativetouint8array)

___

### tryUint8ArrayToNative

Re-exports [tryUint8ArrayToNative](modules/utils.md#tryuint8arraytonative)

___

### uint8ArrayToHex

Re-exports [uint8ArrayToHex](modules/utils.md#uint8arraytohex)

___

### uint8ArrayToNative

Re-exports [uint8ArrayToNative](modules/utils.md#uint8arraytonative)

___

### updateWrappedOnAlgorand

Re-exports [updateWrappedOnAlgorand](modules/token_bridge.md#updatewrappedonalgorand)

___

### updateWrappedOnAptos

Re-exports [updateWrappedOnAptos](modules/token_bridge.md#updatewrappedonaptos)

___

### updateWrappedOnEth

Re-exports [updateWrappedOnEth](modules/token_bridge.md#updatewrappedoneth)

___

### updateWrappedOnInjective

Re-exports [updateWrappedOnInjective](modules/token_bridge.md#updatewrappedoninjective)

___

### updateWrappedOnNear

Re-exports [updateWrappedOnNear](modules/token_bridge.md#updatewrappedonnear)

___

### updateWrappedOnSolana

Re-exports [updateWrappedOnSolana](modules/token_bridge.md#updatewrappedonsolana)

___

### updateWrappedOnSui

Re-exports [updateWrappedOnSui](modules/token_bridge.md#updatewrappedonsui)

___

### updateWrappedOnTerra

Re-exports [updateWrappedOnTerra](modules/token_bridge.md#updatewrappedonterra)

___

### updateWrappedOnXpla

Re-exports [updateWrappedOnXpla](modules/token_bridge.md#updatewrappedonxpla)

## Type Aliases

### ContractUpgrade

Ƭ **ContractUpgrade**: [`CoreContractUpgrade`](interfaces/CoreContractUpgrade.md) \| [`PortalContractUpgrade`](interfaces/PortalContractUpgrade.md)<``"TokenBridge"``\> \| [`PortalContractUpgrade`](interfaces/PortalContractUpgrade.md)<``"NFTBridge"``\>

#### Defined in

[src/vaa/generic.ts:74](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L74)

___

### Encoding

Ƭ **Encoding**: ``"uint8"`` \| ``"uint16"`` \| ``"uint32"`` \| ``"uint64"`` \| ``"uint128"`` \| ``"uint256"`` \| ``"bytes32"`` \| ``"address"``

#### Defined in

[src/vaa/generic.ts:817](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L817)

___

### ParsedAttestMetaVaa

Ƭ **ParsedAttestMetaVaa**: [`ParsedAssetMetaVaa`](interfaces/ParsedAssetMetaVaa.md)

#### Defined in

[src/vaa/tokenBridge.ts:102](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L102)

___

### Payload

Ƭ **Payload**: [`GuardianSetUpgrade`](interfaces/GuardianSetUpgrade.md) \| [`CoreContractUpgrade`](interfaces/CoreContractUpgrade.md) \| [`PortalContractUpgrade`](interfaces/PortalContractUpgrade.md)<``"TokenBridge"``\> \| [`PortalContractUpgrade`](interfaces/PortalContractUpgrade.md)<``"NFTBridge"``\> \| [`PortalRegisterChain`](interfaces/PortalRegisterChain.md)<``"TokenBridge"``\> \| [`PortalRegisterChain`](interfaces/PortalRegisterChain.md)<``"NFTBridge"``\> \| [`TokenBridgeTransfer`](interfaces/TokenBridgeTransfer.md) \| [`TokenBridgeTransferWithPayload`](interfaces/TokenBridgeTransferWithPayload.md) \| [`TokenBridgeAttestMeta`](interfaces/TokenBridgeAttestMeta.md) \| [`NFTBridgeTransfer`](interfaces/NFTBridgeTransfer.md)

#### Defined in

[src/vaa/generic.ts:62](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L62)

___

### SignedVaa

Ƭ **SignedVaa**: `Uint8Array` \| `Buffer`

#### Defined in

[src/vaa/wormhole.ts:24](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L24)

## Functions

### assertKnownPayload

▸ **assertKnownPayload**(`vaa`): asserts vaa is VAA<Payload\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`VAA`](interfaces/VAA.md)<[`Other`](interfaces/Other.md) \| [`Payload`](modules.md#payload)\> |

#### Returns

asserts vaa is VAA<Payload\>

#### Defined in

[src/vaa/generic.ts:107](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L107)

___

### buildTokenId

▸ **buildTokenId**(`chain`, `address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | ``18`` \| ``19`` \| ``28`` \| ``32`` \| ``"terra2"`` \| ``"injective"`` \| ``"xpla"`` \| ``"sei"`` |
| `address` | `string` |

#### Returns

`string`

#### Defined in

[src/cosmwasm/address.ts:29](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/cosmwasm/address.ts#L29)

___

### encode

▸ **encode**(`type`, `val`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Encoding`](modules.md#encoding) |
| `val` | `any` |

#### Returns

`string`

#### Defined in

[src/vaa/generic.ts:850](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L850)

___

### encodeString

▸ **encodeString**(`str`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Buffer`

#### Defined in

[src/vaa/generic.ts:862](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L862)

___

### impossible

▸ **impossible**(`a`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `never` |

#### Returns

`any`

#### Defined in

[src/vaa/generic.ts:810](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L810)

___

### isBytes

▸ **isBytes**(`value`): value is Bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Bytes

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:27

___

### isNativeCosmWasmDenom

▸ **isNativeCosmWasmDenom**(`chainId`, `address`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | [`CosmWasmChainId`](modules/utils.md#cosmwasmchainid) |
| `address` | `string` |

#### Returns

`boolean`

#### Defined in

[src/cosmwasm/address.ts:18](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/cosmwasm/address.ts#L18)

___

### isNativeDenomInjective

▸ **isNativeDenomInjective**(`denom`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `denom` | `string` |

#### Returns

`boolean`

#### Defined in

[src/cosmwasm/address.ts:15](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/cosmwasm/address.ts#L15)

___

### isNativeDenomXpla

▸ **isNativeDenomXpla**(`denom`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `denom` | `string` |

#### Returns

`boolean`

#### Defined in

[src/cosmwasm/address.ts:16](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/cosmwasm/address.ts#L16)

___

### parse

▸ **parse**(`buffer`): [`VAA`](interfaces/VAA.md)<[`Payload`](modules.md#payload) \| [`Other`](interfaces/Other.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

[`VAA`](interfaces/VAA.md)<[`Payload`](modules.md#payload) \| [`Other`](interfaces/Other.md)\>

#### Defined in

[src/vaa/generic.ts:79](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L79)

___

### parseAttestMetaPayload

▸ **parseAttestMetaPayload**(`payload`): [`AssetMeta`](interfaces/AssetMeta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

[`AssetMeta`](interfaces/AssetMeta.md)

#### Defined in

[src/vaa/tokenBridge.ts:81](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L81)

___

### parseAttestMetaVaa

▸ **parseAttestMetaVaa**(`vaa`): [`ParsedAssetMetaVaa`](interfaces/ParsedAssetMetaVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedAssetMetaVaa`](interfaces/ParsedAssetMetaVaa.md)

#### Defined in

[src/vaa/tokenBridge.ts:104](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L104)

___

### parseEnvelope

▸ **parseEnvelope**(`buffer`): [`VAA`](interfaces/VAA.md)<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

[`VAA`](interfaces/VAA.md)<`Buffer`\>

#### Defined in

[src/vaa/generic.ts:117](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L117)

___

### parseGovernancePayload

▸ **parseGovernancePayload**(`payload`): [`Governance`](interfaces/Governance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

[`Governance`](interfaces/Governance.md)

#### Defined in

[src/vaa/governance.ts:20](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L20)

___

### parseGovernanceVaa

▸ **parseGovernanceVaa**(`vaa`): [`ParsedGovernanceVaa`](interfaces/ParsedGovernanceVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedGovernanceVaa`](interfaces/ParsedGovernanceVaa.md)

#### Defined in

[src/vaa/governance.ts:12](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/governance.ts#L12)

___

### parseNftBridgeRegisterChainGovernancePayload

▸ **parseNftBridgeRegisterChainGovernancePayload**(`payload`): [`NftRegisterChain`](interfaces/NftRegisterChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

[`NftRegisterChain`](interfaces/NftRegisterChain.md)

#### Defined in

[src/vaa/nftBridge.ts:75](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L75)

___

### parseNftBridgeRegisterChainVaa

▸ **parseNftBridgeRegisterChainVaa**(`vaa`): [`ParsedNftBridgeRegisterChainVaa`](interfaces/ParsedNftBridgeRegisterChainVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedNftBridgeRegisterChainVaa`](interfaces/ParsedNftBridgeRegisterChainVaa.md)

#### Defined in

[src/vaa/nftBridge.ts:81](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L81)

___

### parseNftBridgeUpgradeContractGovernancePayload

▸ **parseNftBridgeUpgradeContractGovernancePayload**(`payload`): [`NftBridgeUpgradeContract`](interfaces/NftBridgeUpgradeContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

[`NftBridgeUpgradeContract`](interfaces/NftBridgeUpgradeContract.md)

#### Defined in

[src/vaa/nftBridge.ts:96](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L96)

___

### parseNftBridgeUpgradeContractVaa

▸ **parseNftBridgeUpgradeContractVaa**(`vaa`): [`ParsedNftBridgeUpgradeContractVaa`](interfaces/ParsedNftBridgeUpgradeContractVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedNftBridgeUpgradeContractVaa`](interfaces/ParsedNftBridgeUpgradeContractVaa.md)

#### Defined in

[src/vaa/nftBridge.ts:106](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L106)

___

### parseNftTransferPayload

▸ **parseNftTransferPayload**(`payload`): [`NftTransfer`](interfaces/NftTransfer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

[`NftTransfer`](interfaces/NftTransfer.md)

#### Defined in

[src/vaa/nftBridge.ts:32](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L32)

___

### parseNftTransferVaa

▸ **parseNftTransferVaa**(`vaa`): [`ParsedNftTransferVaa`](interfaces/ParsedNftTransferVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedNftTransferVaa`](interfaces/ParsedNftTransferVaa.md)

#### Defined in

[src/vaa/nftBridge.ts:62](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/nftBridge.ts#L62)

___

### parseTokenBridgeRegisterChainGovernancePayload

▸ **parseTokenBridgeRegisterChainGovernancePayload**(`payload`): [`TokenBridgeRegisterChain`](interfaces/TokenBridgeRegisterChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

[`TokenBridgeRegisterChain`](interfaces/TokenBridgeRegisterChain.md)

#### Defined in

[src/vaa/tokenBridge.ts:117](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L117)

___

### parseTokenBridgeRegisterChainVaa

▸ **parseTokenBridgeRegisterChainVaa**(`vaa`): [`ParsedTokenBridgeRegisterChainVaa`](interfaces/ParsedTokenBridgeRegisterChainVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedTokenBridgeRegisterChainVaa`](interfaces/ParsedTokenBridgeRegisterChainVaa.md)

#### Defined in

[src/vaa/tokenBridge.ts:132](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L132)

___

### parseTokenBridgeUpgradeContractGovernancePayload

▸ **parseTokenBridgeUpgradeContractGovernancePayload**(`payload`): [`TokenBridgeUpgradeContract`](interfaces/TokenBridgeUpgradeContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

[`TokenBridgeUpgradeContract`](interfaces/TokenBridgeUpgradeContract.md)

#### Defined in

[src/vaa/tokenBridge.ts:151](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L151)

___

### parseTokenBridgeUpgradeContractVaa

▸ **parseTokenBridgeUpgradeContractVaa**(`vaa`): [`ParsedTokenBridgeUpgradeContractVaa`](interfaces/ParsedTokenBridgeUpgradeContractVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedTokenBridgeUpgradeContractVaa`](interfaces/ParsedTokenBridgeUpgradeContractVaa.md)

#### Defined in

[src/vaa/tokenBridge.ts:164](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L164)

___

### parseTokenTransferPayload

▸ **parseTokenTransferPayload**(`payload`): [`TokenTransfer`](interfaces/TokenTransfer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Buffer` |

#### Returns

[`TokenTransfer`](interfaces/TokenTransfer.md)

#### Defined in

[src/vaa/tokenBridge.ts:30](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L30)

___

### parseTokenTransferVaa

▸ **parseTokenTransferVaa**(`vaa`): [`ParsedTokenTransferVaa`](interfaces/ParsedTokenTransferVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedTokenTransferVaa`](interfaces/ParsedTokenTransferVaa.md)

#### Defined in

[src/vaa/tokenBridge.ts:64](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/tokenBridge.ts#L64)

___

### parseVaa

▸ **parseVaa**(`vaa`): [`ParsedVaa`](interfaces/ParsedVaa.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`SignedVaa`](modules.md#signedvaa) |

#### Returns

[`ParsedVaa`](interfaces/ParsedVaa.md)

#### Defined in

[src/vaa/wormhole.ts:26](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/wormhole.ts#L26)

___

### queryExternalId

▸ **queryExternalId**(`client`, `tokenBridgeAddress`, `externalTokenId`): `Promise`<`undefined` \| ``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `LCDClient` \| `LCDClient` |
| `tokenBridgeAddress` | `string` |
| `externalTokenId` | `string` |

#### Returns

`Promise`<`undefined` \| ``null`` \| `string`\>

#### Defined in

[src/cosmwasm/address.ts:59](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/cosmwasm/address.ts#L59)

___

### serialiseVAA

▸ **serialiseVAA**(`vaa`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`VAA`](interfaces/VAA.md)<[`Payload`](modules.md#payload)\> |

#### Returns

`string`

#### Defined in

[src/vaa/generic.ts:169](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L169)

___

### sign

▸ **sign**(`signers`, `vaa`): [`Signature`](interfaces/Signature.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `signers` | `string`[] |
| `vaa` | [`VAA`](interfaces/VAA.md)<[`Payload`](modules.md#payload)\> |

#### Returns

[`Signature`](interfaces/Signature.md)[]

#### Defined in

[src/vaa/generic.ts:258](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L258)

___

### typeWidth

▸ **typeWidth**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Encoding`](modules.md#encoding) |

#### Returns

`number`

#### Defined in

[src/vaa/generic.ts:827](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L827)

___

### vaaDigest

▸ **vaaDigest**(`vaa`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaa` | [`VAA`](interfaces/VAA.md)<[`Other`](interfaces/Other.md) \| [`Payload`](modules.md#payload)\> |

#### Returns

`string`

#### Defined in

[src/vaa/generic.ts:180](https://github.com/wormhole-foundation/wormhole/blob/7bc96a1e/sdk/js/src/vaa/generic.ts#L180)
