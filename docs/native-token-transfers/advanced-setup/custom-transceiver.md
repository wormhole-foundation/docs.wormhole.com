## Custom Transceiver

Custom attestation introduces additional layers of verification which can enhance security and transaction integrity. By incorporating custom verifiers, integrators can define specific criteria for transaction validation, offering an added assurance beyond the Wormhole guardian network, catering to specific security or compliance needs, and adding in custom transfer logic.

Custom verifiers are implemented as `Transceiver` contracts and can be protocol-specific or provided by third-party attestors. This verifier performs checks based on predefined criteria to ensure transactions meet specific requirements. Protocols can configure the threshold of attestations required to validate a token transfer, for example 2-of-2, 2-of-3, or 3-of-5, ensuring the system has flexibility and scalability to adapt to changing needs.
    
Important trade-offs to note are **cost** and **liveness**. More verifiers increase gas costs for users initiating transfers due to additional message relays. In addition, more verifiers can lead to liveness risk. For instance, in a 2-of-2 setup, the system is down if one verifier goes down. Ensure redundancy and reliability in your verifier setup.

![Custom Attestation Architecture](https://images.ctfassets.net/n8aw1cra6v98/gR9UaleOCChELDo0qXgSi/8a250958517a7fa253d703141875caee/Graph-1.webp)

{% hint style="info" %} 
NTT supports custom verification models through custom transceivers. For more details, contact Wormhole core contributors 
{% endhint %} 

### Implementation

#### On-Chain
    
*    **Deploy Custom Transceivers**: Deploy custom transceiver contracts on each chain. These contracts define logic for sending and receiving messages.
*    **Interact with Managers:** The custom transceiver notifies the `NttManager` when a message is delivered, coordinating actions between the transceiver and the NTT system.

#### Off-Chain

*    **Custom Attestation:** The integrator's off-chain process listens for the message and adds custom attestation, which may include additional data or signatures required by the integrator's logic.
*    **Relaying the Attestation:** After custom attestation is completed, it is passed to the integrator’s custom transceiver contract on the destination chain. Ensure to implement quoting logic for message deliveries and return the correct message delivery price in your `_quoteDeliveryPrice` implementation.

### Important Considerations

*   **Verifier Selection:** Choose reputable verifiers capable of providing reliable and secure verification services.
*   **Criteria Definition:** Clearly define verification criteria to align with security requirements and objectives. Ensure it captures the custom verification logic and interfaces with the NTT system to handle transfer requests and send approvals or rejections.
*   **Implementation Testing:** Thoroughly test the custom attestation process in a controlled environment before deploying it to production.
*   **NTT Threshold Configuration:** Ensure threshold values are set correctly. For example, with 3 transceivers and a 2-of-3 threshold, set the threshold value to 2.

By following these guidelines, integrators can implement a robust custom attestation process, enhancing the security and integrity of cross-chain token transfers.