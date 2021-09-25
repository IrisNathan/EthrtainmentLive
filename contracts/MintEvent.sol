//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

contract MintEvent is ERC1155, Ownable {
  uint public constant EVENT_ADMISSION = 0;
  uint public constant VIP_TICKET = 1;
  // Content Creator viewers that pay for special privilidges
  uint public constant CCVIP_PATRONS = 2;

  constructor() ERC1155("") {
    _mint(msg.sender, EVENT_ADMISSION,  100, "");
    _mint(msg.sender, VIP_TICKET,  25, "");
    _mint(msg.sender, CCVIP_PATRONS,  0, "");
  }

  function mint(address account, uint id, uint amount) public onlyOwner {
    _mint(account, id, amount, "");
  }
  function burn (address account, uint id, uint amount) public {
    require(msg.sender == account);
    _burn(account, id, amount);
  }
}