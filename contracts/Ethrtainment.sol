//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

import "hardhat/console.sol";

contract EthrtainmentLive is ERC1155 {  
  address payable ethrtainment;
  address payable event_company;
  // hard code address to test
  address payable content_creator;
  uint contentCreatorStreamFee = 0.006 ether;
  uint majorEventStreamFee = 1 ether;
  uint TICKET_PRICE_EVENT = 0.02 ether;
  uint TICKET_PRICE_VIP = 0.12 ether;
  uint TICKET_PRICE_CCVIP = 0.008 ether;

struct Events {
  bytes16 streamName;
  uint256 eventId;
  uint256 totalTickets;
  uint256 sales;
  // address of buyer mapping to eventId and the number of NFTs in address
  mapping(address => mapping(uint256 => uint256)) buyers;
  bool isStreaming;
}

Events streamEvent;

constructor() {
  ethrtainment = payable(msg.sender);
 }
}
