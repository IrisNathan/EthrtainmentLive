# Ethrtainment LIVE

## Table of contents

* [About](#about)

* [Tech](#Tech)

* [Sponsors](#sponsors)

* [Architechture](#architecture)

* [Setup](#setup)

## About

This project will be a platform where you can view major (and creator) events that are live streamed. The event streamer will sell NFTs as proof of purchase for entry to view the livestream. We imagine major sports events, gaming events, concerts, festivals, conferences, e-learning, and the creator community utilizing the platform. We feel this will help attract a wider audience even if some of the events are in person as well. The NFTs as tickets diminishes counterfeit ticket sales since the NFT is secure on the blockchain. 

## Tech

* [React](https://reactjs.org/)

* [Solidity](https://docs.soliditylang.org/en/latest/)

* [Hardhat](https://hardhat.org/)

* [Ethers](https://docs.ethers.io/v5/)

* [Infura](https://infura.io/)

* [Open Zeppelin](https://openzeppelin.com/contracts/)

## Sponsors

* [IPFS](https://ipfs.io/)

* [Livepeer](https://livepeer.org/)

## Architecture

![Architecture](assets/EthertainmentLive.jpg)

## Setup

Clone repo

``` bash
git clone git@github.com:IrisNathan/EthrtainmentLive.git
```

Change into directory

``` bash
cd EthrTainmentLive
```

Install project dependecies

``` bash
npm i
```

Create .env for connecting to testnet/mainnet

Deploy contract to testnet/mainnet with hardhat

``` bash
npx hardhat run scripts/deploy.js --network <testnet/mainnet>
```

Get contract address for interaction from the front end

In a separate terminal, start the server for React

``` bash
npm start
```
