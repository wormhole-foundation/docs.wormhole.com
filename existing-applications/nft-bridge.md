# NFT Bridge

> :interrobang:Developing on Wormhole? Check out [the book](https://book.wormhole.com)! :book:

The mechanics behind the NFT bridge are nearly identical to the token bridge. However unlike with a transfer of normal tokens, an NFT requires the creation of only a single asset on the target chain. An amount is therefore not part of the payload. This also means an attestation is not required for an NFT transfer, as all relevant data is passed in the transfer itself.

The NFT bridge is ERC721 aware and translates the associated metadata from each chain's format to the format on the receiving side of a transfer message. Upon receipt of a transfer event, the NFT bridge will mint a token matching the target chains NFT standard.

The NFT transfer message is similar to the Token Bridge, and looks like so:

```rust
u8       payload_id = 1         TransferPayload
u8[32]   nft_address            Address on the origin chain.
u16      nft_chain              Numeric ID for the origin chain.
u8[32]   symbol                 UTF-8 Encoded NFT Symbol
u8[32]   name                   UTF-8 Encoded NFT Name.
u8[32]   token_id               32-byte Token ID
u8       url_length             URL Length
u8[]     url                    UTF-8 Encoded URL.
u8[32]   to                     Address on the destination chain.
u16      to_chain               Numeric ID for the destination chain.
```
