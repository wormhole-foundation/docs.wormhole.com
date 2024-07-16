## Custom Transceivers

NTT has the flexibility to support custom message verification in addition to Wormhole Guardian message verification. Custom verifiers are implemented as Transceiver contracts and can be protocol-specific or provided by other third-party attesters. Protocols can also configure the threshold of attestations required to mark a token transfer as valid — for example 2/2, 2/3, 3/5, etc.

![Custom Attestation with NTT](https://i.imgur.com/jrewju8.png)

The verifier performs checks based on predefined criteria and issues approval for transactions that meet these requirements. This approval is incorporated into the Wormhole message, ensuring that only transactions verified by both the Wormhole Guardian network and the additional verifier are processed. model incorporates an extra verifier(s) into the bridging process, enhancing security and providing an added assurance of transaction integrity.

For more details, to collaborate or see examples of custom transceivers, contact Wormhole contributors.
