//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintEvent is ERC1155, Ownable {
  uint public constant ADMISSION = 0;
  uint public constant VIP = 1;
  uint public constant MVP = 2;

  constructor() ERC1155("") {
    _mint(msg.sender, ADMISSION,  100, "");
    _mint(msg.sender, VIP,  25, "");
    _mint(msg.sender, MVP,  0, "");
  }

  function mint(address account, uint id, uint amount) public onlyOwner {
    _mint(account, id, amount, "");
  }
  function burn (address account, uint id, uint amount) public {
    require(msg.sender == account);
    _burn(account, id, amount);
  }
}