# Specialized Relayer

![Specialized Relayer](../../.gitbook/assets/specialized-relayer.png)

Wormhole is compatible with many [ecosystems](../../reference/ecosystem/) and integration is straight forward.

## On Chain

In order to send and receive messages between chains, some [on chain components](../../explore-wormhole/components.md#on-chain-components) are important to understand.

### Sending a message

To send a message, regardless of the environment or chain, the core contract is invoked with a message argument from an [emitter](../../reference/glossary.md#emitter).

This `emitter` may be your contract or an existing application such as the [Token Bridge](https://github.com/wormhole-foundation/wormhole/blob/main/whitepapers/0003\_token\_bridge.md), or [NFT Bridge](https://github.com/wormhole-foundation/wormhole/blob/main/whitepapers/0006\_nft\_bridge.md).

{% tabs %}
{% tab title="EVM" %}
Using the `IWormhole` interface ([source](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/interfaces/IWormhole.sol)), we can publish a message directly to the [core contract](../../explore-wormhole/core-contracts.md).

```solidity
// ...

IWormhole wormhole = IWormhole(wormholeAddr);

// Get the fee for publishing a message
uint256 wormholeFee = wormhole.messageFee();

// ... fee/value checks

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

More details in [Example Source](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/evm/src/01\_hello\_world/HelloWorld.sol)
{% endtab %}

{% tab title="Solana" %}
Using the `wormhole_anchor_sdk::wormhole` module and given the wormhole program account, we can pass a message directly to the core contract.

```rust
// ...

let fee = ctx.accounts.wormhole_bridge.fee();
// ... fee check/send

let config = &ctx.accounts.config;
let payload: Vec<u8> = HelloWorldMessage::Hello { message }.try_to_vec()?;

// Invoke `wormhole::post_message`.
wormhole::post_message(
    CpiContext::new_with_signer(
        ctx.accounts.wormhole_program.to_account_info(),
        wormhole::PostMessage {
            // ... set fields
        },
        &[
            // ... set seeds
        ],
    ),
    config.batch_id,
    payload,
    config.finality.into(),
)?;

// ...
```

More details in [Example Source](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/solana/programs/01\_hello\_world/src/lib.rs)
{% endtab %}
{% endtabs %}

Once the message is emitted from the core contract, the [Guardian Network](../../explore-wormhole/guardian.md) will observe the message and sign the digest of an Attestation ([VAA](../../explore-wormhole/vaa.md)). We'll discuss this in more depth in the [Off Chain](specialized-relayer.md#off-chain) section below.

{% hint style="info" %}
By default, VAAs are [multicast](../../explore-wormhole/core-contracts.md#multicast). This means there is no default **target chain** for a given message. It's up to the application developer to decide on the format of the message and its treatment on receipt.
{% endhint %}

### Receiving a message

The way a message may be received depends on the environment.

{% tabs %}
{% tab title="EVM" %}
On EVM chains, the message passed is the raw VAA encoded as binary.

It has _not_ been verified by the core contract and should be treated as untrusted input until `parseAndVerifyVM` has been called.

```solidity
function receiveMessage(bytes memory encodedMessage) public {
    // call the Wormhole core contract to parse and verify the encodedMessage
    (
        IWormhole.VM memory wormholeMessage,
        bool valid,
        string memory reason
    ) = wormhole().parseAndVerifyVM(encodedMessage);

    // ... safety checks

    // decode the message payload into the HelloWorldMessage struct
    HelloWorldMessage memory parsedMessage = decodeMessage(
        wormholeMessage.payload
    );

    // ... do something cool
}
```

More details in [Example Source](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/evm/src/01\_hello\_world/HelloWorld.sol)
{% endtab %}

{% tab title="Solana" %}
On Solana, the VAA is first posted and verified by the core contract, after which it can be read by the receiving contract and action taken.

```rust
pub fn receive_message(ctx: Context<ReceiveMessage>, vaa_hash: [u8; 32]) -> Result<()> {
    let posted_message = &ctx.accounts.posted;

    if let HelloWorldMessage::Hello { message } = posted_message.data() {
        // ... check message
        // ... do something cool 
        // Done
        Ok(())
    } else {
        Err(HelloWorldError::InvalidMessage.into())
    }
}

```

More details in [Example Source](https://github.com/wormhole-foundation/wormhole-scaffolding/blob/main/solana/programs/01\_hello\_world/src/lib.rs)
{% endtab %}
{% endtabs %}

In addition to environment specific checks that should be performed, a contract should take care to check other [fields in the body](../../explore-wormhole/vaa.md#body) such as:

* **Emitter**: Is this coming from an emitter address and chain id I expect? Typically contracts will provide a method to register a new emitter and check the incoming message against the set of emitters it trusts.
* **Sequence**: Is this the sequence number I expect? How should I handle out of order deliveries?
* **Consistency Level**: For the chain this message came from, is the [consistency level](../../explore-wormhole/core-contracts.md#consistencylevel) enough to guarantee the transaction wont be reverted after I take some action?

Outside of body of the VAA, but also relevant, is the digest of the VAA which can be used for replay protection by checking if the digest has already been seen.

Since the payload itself is application specific, there may be other elements to check to ensure safety.

## Off Chain

In order to shuttle messages between chains, some [off chain processes](../../explore-wormhole/components.md#off-chain-components) are involved. The [Guardians](../../explore-wormhole/guardian.md) observe the events from the core contract and sign a [VAA](../../explore-wormhole/vaa.md).

After enough Guardians have signed the message (at least `2/3 + 1` or 13 of 19 guardians), the VAA is available to be delivered to a target chain.

Once the VAA is available, a [Relayer](../../explore-wormhole/relayer.md) may deliver it in a properly formatted transaction to the target chain.

### Specialized Relayer

A relayer is needed to deliver the VAA containing the message to the target chain. When the relayer is written specifically for a custom application, it's referred to as a [Specialized Relayer](specialized-relayer.md)

A specialized relayer might be as simple as an in browser process that polls the [API](../../reference/api-docs/) for the availability of a VAA after submitting a transaction and delivers it to the target chain. It might also be implemented with a [Spy](../../explore-wormhole/spy.md) coupled with some daemon listening for VAAs from a relevant `chainID` and `emitter` then taking action when one is observed.

#### Simple Relayer

Regardless of the environment, in order to get the VAA we intend to relay, we need:

1. The `emitter` address
2. The `sequence` id of the message we're interested in
3. The `chainId` for the chain that emitted the message

With these three components, we're able to uniquely identify a VAA and fetch it from the [API](../../reference/api-docs/).

**Fetching the VAA**

Using the `getSignedVAAWithRetry` function provided in the [SDK](../../reference/sdk-docs/), we're able to poll the Guardian RPC until the signed VAA is ready.

```ts
import { 
    getSignedVAAWithRetry, 
    parseVAA, 
    CHAIN_ID_SOLANA,
    CHAIN_ID_ETH,
} from "@certusone/wormhole-sdk";


const RPC_HOSTS = [ /* ...*/ ]

async function getVAA(emitter: string, sequence: string, chainId: number): Promise<Uint8Array> {
    // Wait for the VAA to be ready and fetch it from 
    // the guardian network
    const {vaaBytes} = await getSignedVAAWithRetry(
        RPC_HOSTS,
        chainId,
        emitter,
        sequence
    )
    return vaaBytes
}

const vaaBytes = await getVAA('0xdeadbeef', 1, CHAIN_ID_ETH);
```

Once we have the VAA, the delivery method is chain dependent.

{% tabs %}
{% tab title="EVM" %}
On EVM chains, the bytes for the VAA can be passed directly as an argument to an ABI method.

```ts
// setup eth wallet
const ethProvider = new ethers.providers.StaticJsonRpcProvider(ETH_HOST);
const ethWallet = new ethers.Wallet(WALLET_PRIVATE_KEY, ethProvider);

// create client to interact with our target app
const ethHelloWorld = HelloWorld__factory.connect(
    '0xbeefdead',
    ethWallet
);

// invoke the receiveMessage on the ETH contract
// and wait for confirmation
const receipt = await ethHelloWorld
    .receiveMessage(vaaBytes)
    .then((tx: ethers.ContractTransaction) => tx.wait())
    .catch((msg: any) => {
        console.error(msg);
        return null;
    });
```
{% endtab %}

{% tab title="Solana" %}
```ts

import {CONTRACTS} from '@certusone/wormhole-sdk'

export const WORMHOLE_CONTRACTS = CONTRACTS[NETWORK];
export const CORE_BRIDGE_PID = new PublicKey(WORMHOLE_CONTRACTS.solana.core);

// First, post the VAA to the core bridge
await postVaaSolana(
    connection,
    wallet.signTransaction,
    CORE_BRIDGE_PID,
    wallet.key(),
    vaaBytes 
);

const program = createHelloWorldProgramInterface(connection, programId);
const parsed = isBytes(wormholeMessage)
    ? parseVaa(wormholeMessage)
    : wormholeMessage;

const ix = program.methods
    .receiveMessage([...parsed.hash])
    .accounts({
        payer: new PublicKey(payer),
        config: deriveConfigKey(programId),
        wormholeProgram: new PublicKey(wormholeProgramId),
        posted: derivePostedVaaKey(wormholeProgramId, parsed.hash),
        foreignEmitter: deriveForeignEmitterKey(programId, parsed.emitterChain),
        received: deriveReceivedKey(
        programId,
        parsed.emitterChain,
        parsed.sequence
        ),
    })
    .instruction();

const transaction = new Transaction().add(ix);
const { blockhash } = await connection.getLatestBlockhash(commitment);
transaction.recentBlockhash = blockhash;
transaction.feePayer = new PublicKey(payerAddress);

const signed = await wallet.signTxn(transaction);
const txid = await connection.sendRawTransaction(signed);

await connection.confirmTransaction(txid);

```
{% endtab %}
{% endtabs %}

See the [Specialized Relayer Tutorial](../../tutorials/app-integration/specialized-relayer.md) for a detailed walkthrough.

## Reference

Read more about the architecture and core components [here](../../explore-wormhole/components.md)
