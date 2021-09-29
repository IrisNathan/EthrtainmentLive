//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol"; // security control
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract Ethrtainment is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _eventId;
    Counters.Counter private _itemsSold;

    address payable owner;
    uint256 streamingFee = 0.0001 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    struct CreatorEvents {
        // hard code address to test
        uint256 eventId;
        uint256 tokenId;
        address mintEventContract;
        address payable seller;
        address payable buyer;
        uint256 eventPrice;
        bool isStreaming;
    }

    mapping(uint256 => CreatorEvents) private streamEvent;

    event EthrNFTCreated(
        uint256 indexed eventId,
        uint256 indexed tokenId,
        address indexed mintEventContract,
        address payable seller,
        address payable buyer,
        uint256 eventPrice,
        bool isStreaming
    );

    function getStreamingFee() public view returns (uint256) {
        return streamingFee;
    }

    function createEventTickets(
        address mintEventContract,
        uint256 tokenId,
        uint256 eventPrice
    ) public payable nonReentrant {
        require(msg.value >= streamingFee);
        require(eventPrice >= 0.0002 ether, "Price must be minimum 0.02 ether");
        _eventId.increment();
        uint256 eventId = _eventId.current();

        streamEvent[eventId] = CreatorEvents(
            eventId,
            tokenId,
            mintEventContract,
            payable(msg.sender), // seller
            payable(address(0)), // buyer
            eventPrice,
            true
        );

        streamEvent[eventId].eventPrice = eventPrice;

        IERC721(mintEventContract).transferFrom(
            msg.sender,
            address(this),
            tokenId
        );

        emit EthrNFTCreated(
            eventId,
            tokenId,
            mintEventContract,
            payable(msg.sender),
            payable(address(0)),
            eventPrice,
            true
        );
    }

    function ticketSales(address mintEventContract, uint256 eventId)
        public
        payable
        nonReentrant
    {
        uint256 eventPrice = streamEvent[eventId].eventPrice;
        uint256 tokenId = streamEvent[eventId].tokenId;
        require(
            msg.value == eventPrice,
            "Please submit the correct amount in order to complete purchase"
        );

        streamEvent[eventId].seller.transfer(msg.value);
        IERC721(mintEventContract).transferFrom(
            address(this),
            msg.sender,
            tokenId
        );
        streamEvent[eventId].buyer = payable(msg.sender);
        streamEvent[eventId].isStreaming = true;
        _itemsSold.increment();
        payable(owner).transfer(eventPrice);
    }

    function isEventStreaming() public view returns (CreatorEvents[] memory) {
        uint256 totalEventsStreaming = _eventId.current();
        uint256 eventCount = 0;
        uint256 currentIndex = 0;

        CreatorEvents[] memory show = new CreatorEvents[](eventCount);
        for (uint256 i = 0; i < totalEventsStreaming; i++) {
            if (streamEvent[i + 1].isStreaming == true) {
                uint256 currentEventId = i + 1;
                CreatorEvents storage currentEvent = streamEvent[
                    currentEventId
                ];
                show[currentIndex] = currentEvent;
                currentIndex += 1;
            }
        }
        return show;
    }
}
