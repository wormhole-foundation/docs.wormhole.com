# Glossary

<!-- Please make sure these are sorted  -->

An index of commonly used technical terms

## Delivery Provider

A Delivery Provider performs the service of watching for Wormhole Relayer delivery requests and performing the delivery to the intended target chain as instructed

## Emitter

The contract that calls the Wormhole Core contract. It's address is included in the message published and a sequence number for the message is tracked to provide a unique id.

## Finality

The Finality of a transaction is dependant on the blockchain properties. After a transaction is considered final, it can be assumed the state changes it caused won't be rolled back. 

## Guardian

A [Guardian](../guide/components/guardian.md) is one of the 19 parties running validators in the Guardian Network that contributes to the VAA multisig.

## Guardian Network

Validators that exist in their own P2P network that serve as Wormhole's oracle by observing activity on-chain and generating signed messages attesting to that activity.

## Guardian Set

The Guardian Set is a set of guardians that are responsible for validating a message emitted from the core contracts. Occasionally the members in the set will change through a governance action. 

## Observation

An Observation is the data structure that describes a message that was emitted by the Core Contract and noticed by the Guardian node.

## Relayer

A Relayer is any process which delivers VAAs to a destination.

## Sequence

A nonce, strictly increasing, tracked by the wormhole core contract and unique to emitter chain and address 

## Spy

A Spy is a daemon that eavesdrops on the messages passed between Guardians, typically to track VAAs as they get signed. 


## VAA

[Verifiable Action Approvals](../guide/components/vaa.md) (VAAs) are the base data structure in the Wormhole ecosystem, containing the messages emitted by xDapps along with information such as what contract emitted the message.

## Validator 

A daemon that is configured to monitor a blockchain node and observe messages emitted by the wormhole contracts.

## xChain

Term that refers to the full range of cross-blockchain interoperability.

## xAssets

Chain-and-path agnostic token that exists on a layer outside the blockchain ecosystem, which can be used to conduct transactions on any blockchain.

## xDapp

Decentralized application that enables users to create and/or use xData.

## xData

Data that exists in a layer outside of Layer 1 blockchains, which is accessible by all chains.