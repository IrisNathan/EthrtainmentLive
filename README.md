# Ethrtainment LIVE

## Table of contents

* [About](#about)

* [Tech](#Tech)

* [Sponsors](#sponsors)

* [Architechture](#architecture)

* [Setup](#setup)

## About

A Decentralized live streaming platform

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
