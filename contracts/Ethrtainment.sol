//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

//import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "./MintEvent.sol";
import "hardhat/console.sol";

contract EthrtainmentLive is ERC1155 {  
  address payable ethrtainment;
  address payable content_creator;
  uint contentCreatorStreamFee = 0.006 ether;
  // uint majorEventStreamFee = 1 ether;
  // uint TICKET_PRICE_EVENT = 0.02 ether;
  // uint TICKET_PRICE_VIP = 0.12 ether;
  uint TICKET_PRICE_CCVIP = 0.008 ether;

// struct MajorEvents {
//   address payable event_company;
//   bytes16 streamName;
//   uint256 eventId;
//   address mintEventContract;
//   uint256 totalTickets;
//   uint256 sales;
//   bool isStreaming;
// }

  // address of buyer mapping to eventId and the number of NFTs in address
 

struct CreatorEvents {
  // hard code address to test
  
  bytes16 streamName;
  uint256 eventId;
  address mintEventContract;
  uint256 totalTickets;
  uint256 sales;
  bool isStreaming;
}

   mapping(address => mapping(uint256 => uint256)) buyers;

constructor() ERC1155(""){
  ethrtainment = payable(msg.sender);
 }

//  event LogTicketsPurchased(address buyer, uint256 ticketsPurchased);
//  event LogEndSale(address ethrtainment, uint256 valueTransfered);

// Check to see if view is a patreon and grants CCVIP access if true
function isCCVIP(uint256 _eventId) public view returns(bool) {
  uint _isCCVIP = buyers[msg.sender][_eventId];
  if( _isCCVIP > 0) {
    return true;
  }
}

// Allows viewer to tip content creator
function tipping(uint256 tip) payable public returns(uint256){
  // Verifies that the sender has enough funds before sending in Wei
  require(msg.sender.balance > tip, "Not enough funds to tip");
  payable(content_creator).transfer(tip); 
  return tip;
}




}

