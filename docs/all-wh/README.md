Wormhole is compatible with many [ecosystems](../reference/ecosystem/README.md) and integration is straight forward.

# Tutorials

Follow tutorials to start building cross chain applications.

- [Message Passing](../tutorials/app-integration/message-passing.md)
    A tutorial that covers message passing across a range of ecosystems
- [Asset Transfer](../tutorials/app-integration/asset-transfer.md)
    A tutorial that covers message passing across a range of ecosystems
- [Specialized Relayer](../tutorials/app-integration/specialized-relayer.md)



# On Chain

In order to send and receive messages between chains, some [on chain components](../reference/components/README.md#on-chain-components) are important to understand. 

## Sending a message

To send a message, regardless of the environment or chain, the core contract is invoked with a message argument from an [emitter](../reference/glossary.md#emitter).

This `emitter` may be your custom logic or an existing application such as the [Token Bridge](../reference/protocols/token-bridge.md), or [NFT Bridge](../reference/protocols/nft-bridge.md).


{% tabs %}

{% tab title="EVM" %}

Using the `IWormhole` interface (available [here](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/interfaces/IWormhole.sol)), we can publish a message directly to the [core contract](../reference/components/core-contracts.md).

```solidity
// ...

IWormhole wormhole = IWormhole(wormholeAddr);

// Get the fee for publishing a message (currently 0)
uint256 wormholeFee = wormhole.messageFee();

// Confirm that the caller has sent enough value to pay for the Wormhole
// message fee.
require(msg.value == wormholeFee, "insufficient value");

// create the HelloWorldMessage struct
HelloWorldMessage memory parsedMessage = HelloWorldMessage({
    payloadID: uint8(1),
    message: helloWorldMessage
});

// encode the HelloWorldMessage struct into bytes
bytes memory encodedMessage = encodeMessage(parsedMessage);

// Send the HelloWorld message by calling publishMessage on the
// Wormhole core contract and paying the Wormhole protocol fee.
messageSequence = wormhole.publishMessage{value: wormholeFee}(
    0, // batchID
    encodedMessage,
    wormholeFinality()
);
```

[Example Source](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/evm/src/01_hello_world/HelloWorld.sol)

{% endtab %}
{% tab title="Solana" %}

```rust
// ...

let fee = ctx.accounts.wormhole_bridge.fee();
if fee > 0 {
    // ... transfer fee if required
}

// Invoke `wormhole::post_message`.
//
// `wormhole::post_message` requires two signers: one for the emitter
// and another for the wormhole message data. Both of these accounts
// are owned by this program.
//
//  To do this we generate a PDA. If we want some way to deserialize the message
//  data written by the Wormhole program, we can use an account
//  with an address derived by this program so we can use the PDA
//  to access and deserialize the message data.
//
let wormhole_emitter = &ctx.accounts.wormhole_emitter;
let config = &ctx.accounts.config;
let payload: Vec<u8> = HelloWorldMessage::Hello { message }.try_to_vec()?;

wormhole::post_message(
    CpiContext::new_with_signer(
        ctx.accounts.wormhole_program.to_account_info(),
        wormhole::PostMessage {
            config: ctx.accounts.wormhole_bridge.to_account_info(),
            message: ctx.accounts.wormhole_message.to_account_info(),
            emitter: wormhole_emitter.to_account_info(),
            sequence: ctx.accounts.wormhole_sequence.to_account_info(),
            payer: ctx.accounts.payer.to_account_info(),
            fee_collector: ctx.accounts.wormhole_fee_collector.to_account_info(),
            clock: ctx.accounts.clock.to_account_info(),
            rent: ctx.accounts.rent.to_account_info(),
            system_program: ctx.accounts.system_program.to_account_info(),
        },
        &[
            &[
                SEED_PREFIX_SENT,
                &ctx.accounts.wormhole_sequence.next_value().to_le_bytes()[..],
                &[*ctx
                    .bumps
                    .get("wormhole_message")
                    .ok_or(HelloWorldError::BumpNotFound)?],
            ],
            &[wormhole::SEED_PREFIX_EMITTER, &[wormhole_emitter.bump]],
        ],
    ),
    config.batch_id,
    payload,
    config.finality.into(),
)?;

// ...
```
[Example Source](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/solana/programs/01_hello_world/src/lib.rs)
{% endtab %}

{% endtabs %}


Once the message is emitted from the core contract, the [Guardian Network](../reference/components/guardian.md) will observe the message and sign the digest of an Attestation ([VAA](../reference/components/vaa.md)). We'll discuss this in more depth in the [Off Chain](#off-chain) section below.

{% hint style="info" %}
By default, VAAs are [multicast](../reference/components/core-contracts.md#multicast). This means there is not required to be a default target chain for a given message. It's up to the application developer to decide on the format of the message and it's treatment on receipt.
{% %}



## Receiving a message

<!-- TODO: do they need to implement an interface? -->
To receiving a message, any custom contract must implement an interface. 

{% tabs %}

{% tab title="EVM" %}

```solidity
function receiveMessage(bytes memory encodedMessage) public {
    // call the Wormhole core contract to parse and verify the encodedMessage
    (
        IWormhole.VM memory wormholeMessage,
        bool valid,
        string memory reason
    ) = wormhole().parseAndVerifyVM(encodedMessage);

    // confirm that the Wormhole core contract verified the message
    require(valid, reason);

    // verify that this message was emitted by a registered emitter
    require(verifyEmitter(wormholeMessage), "unknown emitter");

    // decode the message payload into the HelloWorldMessage struct
    HelloWorldMessage memory parsedMessage = decodeMessage(
        wormholeMessage.payload
    );

    /**
        * Check to see if this message has been consumed already. If not,
        * save the parsed message in the receivedMessages mapping.
        *
        * This check can protect against replay attacks in xDapps where messages are
        * only meant to be consumed once.
    */
    require(!isMessageConsumed(wormholeMessage.hash), "message already consumed");
    consumeMessage(wormholeMessage.hash, parsedMessage.message);
}
```

Note that on EVM, the message passed is the raw VAA encoded as binary. It has _not_ been verified by the core contract and should be treated as untrusted input until `parseAndVerifyVM` has been called. 

[Example Source](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/evm/src/01_hello_world/HelloWorld.sol)

{% endtab %}

{% tab title="Solana" %}

```rust
pub fn receive_message(ctx: Context<ReceiveMessage>, vaa_hash: [u8; 32]) -> Result<()> {
    let posted_message = &ctx.accounts.posted;

    if let HelloWorldMessage::Hello { message } = posted_message.data() {
        // HelloWorldMessage cannot be larger than the maximum size of the account.
        require!(
            message.len() <= MESSAGE_MAX_LENGTH,
            HelloWorldError::InvalidMessage,
        );

        // Save batch ID, keccak256 hash and message payload.
        let received = &mut ctx.accounts.received;
        received.batch_id = posted_message.batch_id();
        received.wormhole_message_hash = vaa_hash;
        received.message = message.clone();

        // Done
        Ok(())
    } else {
        Err(HelloWorldError::InvalidMessage.into())
    }
}

```

[Example Source](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/solana/programs/01_hello_world/src/lib.rs)

{% endtab %}
{% endtabs %}

In addition to environment specific checks that should be performed, a contract should take care to check other [fields in the body](../reference/components/vaa.md#body) such as:

- **Emitter**: Is this coming from an emitter address and chain id I expect? Typically contracts will provide a method to register a new emitter and check the incoming message against the set of emitters it trusts. 
- **Sequence**: Is this the sequence number I expect? How should I handle out of order deliveries? 
- **Consistency Level**: For the chain this message came from, is the [consistency level](../reference/components/core-contracts.md#consistencylevel) enough to guarantee the transaction wont be reverted after I take some action?

Outside of body of the VAA, but also relevant, is the digest of the VAA which can be used for replay protection by checking if the digest has already been seen.

Since the payload itself is application specific, there may be other elements to check to ensure safety.

## Sending an Asset

{% tabs %}
{% tab title="EVM" %}

```solidity
/**
* @notice Transfers specified tokens to any registered HelloToken contract
* by invoking the `transferTokensWithPayload` method on the Wormhole token
* bridge contract. `transferTokensWithPayload` allows the caller to send
* an arbitrary message payload along with a token transfer. In this case,
* the arbitrary message includes the transfer recipient's target-chain
* wallet address.
* @dev reverts if:
* - `token` is address(0)
* - `amount` is zero
* - `targetRecipient` is bytes32(0)
* - a registered HelloToken contract does not exist for the `targetChain`
* - caller doesn't pass enough value to pay the Wormhole network fee
* - normalized `amount` is zero
* @param token Address of `token` to be transferred
* @param amount Amount of `token` to be transferred
* @param targetChain Wormhole chain ID of the target blockchain
* @param batchId Wormhole message ID
* @param targetRecipient Address in bytes32 format (zero-left-padded if
* less than 20 bytes) of the recipient's wallet on the target blockchain.
* @return messageSequence Wormhole message sequence for the Wormhole token
* bridge contract. This sequence is incremented (per message) for each
* message emitter.
*/
function sendTokensWithPayload(
    address token,
    uint256 amount,
    uint16 targetChain,
    uint32 batchId,
    bytes32 targetRecipient
) public payable nonReentrant returns (uint64 messageSequence) {
    // sanity check function arguments
    require(token != address(0), "token cannot be address(0)");
    require(amount > 0, "amount must be greater than 0");
    require(
        targetRecipient != bytes32(0),
        "targetRecipient cannot be bytes32(0)"
    );

    /**
        * Compute the normalized amount to verify that it's nonzero.
        * The token bridge peforms the same operation before encoding
        * the amount in the `TransferWithPayload` message.
        */
    require(
        normalizeAmount(amount, getDecimals(token)) > 0,
        "normalized amount must be > 0"
    );

    // Cache the target contract address and verify that there
    // is a registered emitter for the specified targetChain.
    bytes32 targetContract = getRegisteredEmitter(targetChain);
    require(targetContract != bytes32(0), "emitter not registered");

    // Cache Wormhole fee value, and confirm that the caller has sent
    // enough value to pay for the Wormhole message fee.
    uint256 wormholeFee = wormhole().messageFee();
    require(msg.value == wormholeFee, "insufficient value");

    // transfer tokens from user to the this contract
    uint256 amountReceived = custodyTokens(token, amount);

    /**
        * Encode instructions (HelloTokenMessage) to send with the token transfer.
        * The `targetRecipient` address is in bytes32 format (zero-left-padded) to
        * support non-evm smart contracts that have addresses that are longer
        * than 20 bytes.
        */
    bytes memory messagePayload = encodePayload(
        HelloTokenMessage({
            payloadID: 1,
            targetRecipient: targetRecipient
        })
    );

    // cache TokenBridge instance
    ITokenBridge bridge = tokenBridge();

    // approve the token bridge to spend the specified tokens
    SafeERC20.safeApprove(
        IERC20(token),
        address(bridge),
        amountReceived
    );

    /**
        * Call `transferTokensWithPayload`method on the token bridge and pay
        * the Wormhole network fee. The token bridge will emit a Wormhole
        * message with an encoded `TransferWithPayload` struct (see the
        * ITokenBridge.sol interface file in this repo).
        */
    messageSequence = bridge.transferTokensWithPayload{value: wormholeFee}(
        token,
        amountReceived,
        targetChain,
        targetContract,
        batchId,
        messagePayload
    );
}

```
{% endtab %}
{% tab title="Solana" %}

```rust
pub fn send_native_tokens_with_payload(
    ctx: Context<SendNativeTokensWithPayload>,
    batch_id: u32,
    amount: u64,
    recipient_address: [u8; 32],
    recipient_chain: u16,
) -> Result<()> {
    // Token Bridge program truncates amounts to 8 decimals, so there will
    // be a residual amount if decimals of SPL is >8. We need to take into
    // account how much will actually be bridged.
    let truncated_amount = token_bridge::truncate_amount(amount, ctx.accounts.mint.decimals);
    require!(truncated_amount > 0, HelloTokenError::ZeroBridgeAmount);
    if truncated_amount != amount {
        msg!(
            "SendNativeTokensWithPayload :: truncating amount {} to {}",
            amount,
            truncated_amount
        );
    }

    require!(
        recipient_chain > 0
            && recipient_chain != wormhole::CHAIN_ID_SOLANA
            && !recipient_address.iter().all(|&x| x == 0),
        HelloTokenError::InvalidRecipient,
    );

    // These seeds are used to:
    // 1.  Sign the Sender Config's token account to delegate approval
    //     of truncated_amount.
    // 2.  Sign Token Bridge program's transfer_native instruction.
    // 3.  Close tmp_token_account.
    let config_seeds = &[
        SenderConfig::SEED_PREFIX.as_ref(),
        &[ctx.accounts.config.bump],
    ];

    // First transfer tokens from payer to tmp_token_account.
    anchor_spl::token::transfer(
        CpiContext::new(
            ctx.accounts.token_program.to_account_info(),
            anchor_spl::token::Transfer {
                from: ctx.accounts.from_token_account.to_account_info(),
                to: ctx.accounts.tmp_token_account.to_account_info(),
                authority: ctx.accounts.payer.to_account_info(),
            },
        ),
        truncated_amount,
    )?;

    // Delegate spending to Token Bridge program's authority signer.
    anchor_spl::token::approve(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            anchor_spl::token::Approve {
                to: ctx.accounts.tmp_token_account.to_account_info(),
                delegate: ctx.accounts.token_bridge_authority_signer.to_account_info(),
                authority: ctx.accounts.config.to_account_info(),
            },
            &[&config_seeds[..]],
        ),
        truncated_amount,
    )?;

    // Serialize HelloTokenMessage as encoded payload for Token Bridge
    // transfer.
    let payload = HelloTokenMessage::Hello {
        recipient: recipient_address,
    }
    .try_to_vec()?;

    // Bridge native token with encoded payload.
    token_bridge::transfer_native_with_payload(
        CpiContext::new_with_signer(
            ctx.accounts.token_bridge_program.to_account_info(),
            token_bridge::TransferNativeWithPayload {
                payer: ctx.accounts.payer.to_account_info(),
                config: ctx.accounts.token_bridge_config.to_account_info(),
                from: ctx.accounts.tmp_token_account.to_account_info(),
                mint: ctx.accounts.mint.to_account_info(),
                custody: ctx.accounts.token_bridge_custody.to_account_info(),
                authority_signer: ctx.accounts.token_bridge_authority_signer.to_account_info(),
                custody_signer: ctx.accounts.token_bridge_custody_signer.to_account_info(),
                wormhole_bridge: ctx.accounts.wormhole_bridge.to_account_info(),
                wormhole_message: ctx.accounts.wormhole_message.to_account_info(),
                wormhole_emitter: ctx.accounts.token_bridge_emitter.to_account_info(),
                wormhole_sequence: ctx.accounts.token_bridge_sequence.to_account_info(),
                wormhole_fee_collector: ctx.accounts.wormhole_fee_collector.to_account_info(),
                clock: ctx.accounts.clock.to_account_info(),
                sender: ctx.accounts.config.to_account_info(),
                rent: ctx.accounts.rent.to_account_info(),
                system_program: ctx.accounts.system_program.to_account_info(),
                token_program: ctx.accounts.token_program.to_account_info(),
                wormhole_program: ctx.accounts.wormhole_program.to_account_info(),
            },
            &[
                &config_seeds[..],
                &[
                    SEED_PREFIX_BRIDGED,
                    &ctx.accounts
                        .token_bridge_sequence
                        .next_value()
                        .to_le_bytes()[..],
                    &[*ctx
                        .bumps
                        .get("wormhole_message")
                        .ok_or(HelloTokenError::BumpNotFound)?],
                ],
            ],
        ),
        batch_id,
        truncated_amount,
        ctx.accounts.foreign_contract.address,
        recipient_chain,
        payload,
        &ctx.program_id.key(),
    )?;

    // Finish instruction by closing tmp_token_account.
    anchor_spl::token::close_account(CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
        anchor_spl::token::CloseAccount {
            account: ctx.accounts.tmp_token_account.to_account_info(),
            destination: ctx.accounts.payer.to_account_info(),
            authority: ctx.accounts.config.to_account_info(),
        },
        &[&config_seeds[..]],
    ))
}
```
{% endtab %}
{% endtabs %}

## Receiving an Asset

{% tabs %}
{% tab title="EVM" %}

```
/**
* @notice Consumes `TransferWithPayload` message which includes the additional
* `HelloTokenMessage` payload with additional transfer instructions.
* @dev The token bridge contract calls the Wormhole core endpoint to verify
* the `TransferWithPayload` message. The token bridge contract saves the message
* hash in storage to prevent `TransferWithPayload` messages from being replayed.
* @dev reverts if:
* - The token being transferred has not been attested yet. This means that a
* wrapped contract for the token does not exist.
* - The caller of the token bridge on the source chain is not a registered
* HelloToken contract.
* @param encodedTransferMessage Encoded `TransferWithPayload` message
*/
function redeemTransferWithPayload(bytes memory encodedTransferMessage) public {
    /**
    * parse the encoded Wormhole message
    *
    * SECURITY: This message not been verified by the Wormhole core layer yet.
    * The encoded payload can only be trusted once the message has been verified
    * by the Wormhole core contract. In this case, the message will be verified
    * by a call to the token bridge contract in subsequent actions.
    */
    IWormhole.VM memory parsedMessage = wormhole().parseVM(
        encodedTransferMessage
    );

    /**
    * Since this contract allows transfers for any token, it needs
    * to find the token address (on this chain) before redeeming the transfer
    * so that it can compute the balance change before and after redeeming
    * the transfer. The amount encoded in the payload could be incorrect,
    * since fee-on-transfer tokens are supported by the token bridge.
    *
    * NOTE: The token bridge truncates the encoded amount for any token
    * with decimals greater than 8. This is to support blockchains that
    * cannot handle transfer amounts exceeding max(uint64).
    */
    address localTokenAddress = fetchLocalAddressFromTransferMessage(
        parsedMessage.payload
    );

    // check balance before completing the transfer
    uint256 balanceBefore = getBalance(localTokenAddress);

    // cache the token bridge instance
    ITokenBridge bridge = tokenBridge();

    /**
        * Call `completeTransferWithPayload` on the token bridge. This
        * method acts as a reentrancy protection since it does not allow
        * transfers to be redeemed more than once.
        */
    bytes memory transferPayload = bridge.completeTransferWithPayload(
        encodedTransferMessage
    );

    // compute and save the balance difference after completing the transfer
    uint256 amountTransferred = getBalance(localTokenAddress) - balanceBefore;

    // parse the wormhole message payload into the `TransferWithPayload` struct
    ITokenBridge.TransferWithPayload memory transfer =
        bridge.parseTransferWithPayload(transferPayload);

    // confirm that the message sender is a registered HelloToken contract
    require(
        transfer.fromAddress == getRegisteredEmitter(parsedMessage.emitterChainId),
        "emitter not registered"
    );

    // parse the HelloToken payload from the `TransferWithPayload` struct
    HelloTokenMessage memory helloTokenPayload = decodePayload(
        transfer.payload
    );

    // compute the relayer fee in terms of the transferred token
    uint256 relayerFee = calculateRelayerFee(amountTransferred);

    // cache the recipient address
    address recipient = bytes32ToAddress(helloTokenPayload.targetRecipient);

    /**
    * If the caller is the `transferRecipient` (self redeem) or the relayer fee
    * is set to zero, send the full token amount to the recipient. Otherwise,
    * send the relayer the calculated fee and the recipient the remainder.
    */
    if (relayerFee == 0 || msg.sender == recipient) {
        // send the full amount to the recipient
        SafeERC20.safeTransfer(
            IERC20(localTokenAddress),
            recipient,
            amountTransferred
        );
    } else {
        // pay the relayer
        SafeERC20.safeTransfer(
            IERC20(localTokenAddress),
            msg.sender,
            relayerFee
        );

        // send the tokens (less relayer fees) to the recipient
        SafeERC20.safeTransfer(
            IERC20(localTokenAddress),
            recipient,
            amountTransferred - relayerFee
        );
    }
}
```

{% endtab %}
{% tab title="Solana" %}

```rust
pub fn send_native_tokens_with_payload(
    ctx: Context<SendNativeTokensWithPayload>,
    batch_id: u32,
    amount: u64,
    recipient_address: [u8; 32],
    recipient_chain: u16,
) -> Result<()> {
    // Token Bridge program truncates amounts to 8 decimals, so there will
    // be a residual amount if decimals of SPL is >8. We need to take into
    // account how much will actually be bridged.
    let truncated_amount = token_bridge::truncate_amount(amount, ctx.accounts.mint.decimals);
    require!(truncated_amount > 0, HelloTokenError::ZeroBridgeAmount);
    if truncated_amount != amount {
        msg!(
            "SendNativeTokensWithPayload :: truncating amount {} to {}",
            amount,
            truncated_amount
        );
    }

    require!(
        recipient_chain > 0
            && recipient_chain != wormhole::CHAIN_ID_SOLANA
            && !recipient_address.iter().all(|&x| x == 0),
        HelloTokenError::InvalidRecipient,
    );

    // These seeds are used to:
    // 1.  Sign the Sender Config's token account to delegate approval
    //     of truncated_amount.
    // 2.  Sign Token Bridge program's transfer_native instruction.
    // 3.  Close tmp_token_account.
    let config_seeds = &[
        SenderConfig::SEED_PREFIX.as_ref(),
        &[ctx.accounts.config.bump],
    ];

    // First transfer tokens from payer to tmp_token_account.
    anchor_spl::token::transfer(
        CpiContext::new(
            ctx.accounts.token_program.to_account_info(),
            anchor_spl::token::Transfer {
                from: ctx.accounts.from_token_account.to_account_info(),
                to: ctx.accounts.tmp_token_account.to_account_info(),
                authority: ctx.accounts.payer.to_account_info(),
            },
        ),
        truncated_amount,
    )?;

    // Delegate spending to Token Bridge program's authority signer.
    anchor_spl::token::approve(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            anchor_spl::token::Approve {
                to: ctx.accounts.tmp_token_account.to_account_info(),
                delegate: ctx.accounts.token_bridge_authority_signer.to_account_info(),
                authority: ctx.accounts.config.to_account_info(),
            },
            &[&config_seeds[..]],
        ),
        truncated_amount,
    )?;

    // Serialize HelloTokenMessage as encoded payload for Token Bridge
    // transfer.
    let payload = HelloTokenMessage::Hello {
        recipient: recipient_address,
    }
    .try_to_vec()?;

    // Bridge native token with encoded payload.
    token_bridge::transfer_native_with_payload(
        CpiContext::new_with_signer(
            ctx.accounts.token_bridge_program.to_account_info(),
            token_bridge::TransferNativeWithPayload {
                payer: ctx.accounts.payer.to_account_info(),
                config: ctx.accounts.token_bridge_config.to_account_info(),
                from: ctx.accounts.tmp_token_account.to_account_info(),
                mint: ctx.accounts.mint.to_account_info(),
                custody: ctx.accounts.token_bridge_custody.to_account_info(),
                authority_signer: ctx.accounts.token_bridge_authority_signer.to_account_info(),
                custody_signer: ctx.accounts.token_bridge_custody_signer.to_account_info(),
                wormhole_bridge: ctx.accounts.wormhole_bridge.to_account_info(),
                wormhole_message: ctx.accounts.wormhole_message.to_account_info(),
                wormhole_emitter: ctx.accounts.token_bridge_emitter.to_account_info(),
                wormhole_sequence: ctx.accounts.token_bridge_sequence.to_account_info(),
                wormhole_fee_collector: ctx.accounts.wormhole_fee_collector.to_account_info(),
                clock: ctx.accounts.clock.to_account_info(),
                sender: ctx.accounts.config.to_account_info(),
                rent: ctx.accounts.rent.to_account_info(),
                system_program: ctx.accounts.system_program.to_account_info(),
                token_program: ctx.accounts.token_program.to_account_info(),
                wormhole_program: ctx.accounts.wormhole_program.to_account_info(),
            },
            &[
                &config_seeds[..],
                &[
                    SEED_PREFIX_BRIDGED,
                    &ctx.accounts
                        .token_bridge_sequence
                        .next_value()
                        .to_le_bytes()[..],
                    &[*ctx
                        .bumps
                        .get("wormhole_message")
                        .ok_or(HelloTokenError::BumpNotFound)?],
                ],
            ],
        ),
        batch_id,
        truncated_amount,
        ctx.accounts.foreign_contract.address,
        recipient_chain,
        payload,
        &ctx.program_id.key(),
    )?;

    // Finish instruction by closing tmp_token_account.
    anchor_spl::token::close_account(CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
        anchor_spl::token::CloseAccount {
            account: ctx.accounts.tmp_token_account.to_account_info(),
            destination: ctx.accounts.payer.to_account_info(),
            authority: ctx.accounts.config.to_account_info(),
        },
        &[&config_seeds[..]],
    ))
}
```
{% endtab %}
{% endtabs %}


# Off Chain

In order to shuttle messages between chains, some [off chain processes](../reference/components/README.md#off-chain-components) are involved. The [Guardians](../reference/components/guardians) observe the events from the core contract and sign a [VAA](../reference/components/vaa.md). 

After enough Guardians have signed the message (at least `2/3 + 1` or currently 13/19 guardians), the VAA is available to be delivered to a target chain. 

Once the VAA is available, a [Relayer](../reference/components/relayer.md) may deliver it in a properly formatted transaction to the target chain. 

## Specialized Relayer

A relayer is needed to deliver the VAA containing the message to the target chain. When the relayer is written specifically for a custom application, it's referred to as a [Specialized Relayer](./specialized-relayer.md)

A specialized relayer might be as simple as an in browser process that polls the [API](../reference/api-docs/README.md) for the availability of a VAA after submitting a transaction and delivers it to the target chain. It might also be implemented with a [Spy](../reference/components/spy.md) and some daemon listening for VAAs from a relevant `chainID` and `emitter` then taking action when one is observed.



{% tabs %}

{% tab title="EVM" %}
```ts
// TODO: 
// getVaaWithRetry
// create transaction to submit VAA to target chain/contract
// send it/wait for confirmation
```
{% endtab %}

{% tab title="Solana" %}
```ts
// TODO: 
// getVaaWithRetry
// create transaction to submit VAA to target chain/contract
// send it/wait for confirmation
```
{% endtab %}

{% endtabs %}


# Reference

Read more about the architecture and core components [here](../reference/components/README.md)