//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

//import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "./MintEvent.sol";
import "hardhat/console.sol";

contract EthrtainmentLive is ERC1155 {  
  address payable ethrtainment;
  uint contentCreatorStreamFee = 0.006 ether;
  uint majorEventStreamFee = 1 ether;
  uint TICKET_PRICE_EVENT = 0.02 ether;
  uint TICKET_PRICE_VIP = 0.12 ether;
  uint TICKET_PRICE_CCVIP = 0.008 ether;

struct MajorEvents {
  address payable event_company;
  bytes16 streamName;
  uint256 eventId;
  address mintEventContract;
  uint256 totalTickets;
  uint256 sales;
  // address of buyer mapping to eventId and the number of NFTs in address
  mapping(address => mapping(uint256 => uint256)) buyers;
  bool isStreaming;
}


struct CreatorEvents {
  // hard code address to test
  address payable content_creator;
  bytes16 streamName;
  uint256 eventId;
  address mintEventContract;
  uint256 totalTickets;
  uint256 sales;
  // address of buyer mapping to eventId and the number of NFTs in address
  mapping(address => mapping(uint256 => uint256)) buyers;
  bool isStreaming;
}

constructor() {
  ethrtainment = payable(msg.sender);
 }

 event LogTicketsPurchased(address buyer, uint256 ticketsPurchased);
 event LogEndSale(address ethrtainment, uint256 valueTransfered);

function isCCVIP () public view returns () {
  if
} 

}

