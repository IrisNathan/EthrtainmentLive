//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

import "hardhat/console.sol";

contract EthrtainmentLive is ReentrancyGuard, ERC1155 {
  uint public constant regTicket;
  uint public constant VIP;

  address payable ethrtainment;
  uint contentCreatorStreamFee = 0.025 ether;
  uint majorEventStreamFee = 1 ether;
  uint TICKET_PRICE;


constructor() ERC1155("https://ethrtainment.example/api/item/{id}.json){
  ethrtainment = payable(msg.sender);
  }
}