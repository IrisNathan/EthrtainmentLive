import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardGroup, Row, Col, Container, Button } from 'react-bootstrap';
import { container, rows, heading, ptag, button } from './styles/events';
import { ethers } from 'ethers';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { mintEventAddress, ethrtainAddress } from '../../config';
import MintEvent from '../../artifacts/contracts/MintEvent.sol/MintEvent.json';
import Ethrtainment from '../../artifacts/contracts/Ethrtainment.sol/Ethrtainment.json';
import event1 from '../../photos/event1.jpeg';
import event2 from '../../photos/event2.jpeg';
import event3 from '../../photos/event3.jpeg';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');
var url;

export default function Events() {
  async function buyTicket() {
  const data = (
    'event',
    'event1' 
  )

  try {
    const added = await client.add(data);
    url = `https://ipfs.infura.io/ipfs/${added.path}`;

  } catch (error) {
    console.log('Error uploading file: ', error);
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get account of wallet
    const signer = provider.getSigner();
    // Calling ehtrtainment contract from the blockchain
    let contract = new ethers.Contract(
      mintEventAddress,
      MintEvent.abi,
      signer
    );
    let transaction = await contract.createNFT(url);
    let tx = await transaction.wait();

    let event = tx.events[0];
    let value = event.args[1];
    let tokenId = value
 
    contract = new ethers.Contract(
      ethrtainAddress,
      Ethrtainment.abi,
      signer
    );

    let eventPrice = ethers.utils.parseUnits('0.005', 'ether')
    transaction = await contract.createEventTickets(
      mintEventAddress, tokenId, eventPrice
    )

    // wait for transaction to succeed
    await transaction.wait();
}
  const [nfts, setNfts] = useState([]);
  const history = useHistory();
  async function checkTicket() {
    // give user wallet options to select
    const web3Modal = new Web3Modal();
    // wait for user to select a wallet of their choice
    const connection = await web3Modal.connect();
    // Connect to the selected wallet
    const provider = new ethers.providers.Web3Provider(connection);
    // access the account / address of the user's wallet
    const signer = provider.getSigner();

    const ethrContract = new ethers.Contract(
      ethrtainAddress,
      Ethrtainment.abi,
      signer
    );
    const tokenContract = new ethers.Contract(
      mintEventAddress,
      MintEvent.abi,
      provider
    ); // read only
    const data = await ethrContract.checkForTicket();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        await axios.get(tokenUri);
        let item = {
          tokenId: i.tokenId.toNumber(),
        };
        return item;
      })
    );
    setNfts(items);
    if (nfts.length > 0) return;
    history.push('/viewer');
  }

  return (
    <>
      <div style={container} id='events'>
        <Container>
          <Row style={rows}>
            <Col style={heading}>Events Happening Now</Col>
            <p style={ptag}>
              We have a variety of events going on all the time! Check below to
              see what is streaming now!
            </p>
          </Row>
          <CardGroup>
            <Card>
              <Card.Img variant='top' src={event1} />
              <Card.Body>
                <Card.Title>Concert</Card.Title>
                <Card.Text>
                  Major concerts and festivals happening now!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Stream date Oct 29th </small>
                <div>
                  <Button 
                  onClick={buyTicket}
                  style={button} href='#'>
                    Buy NFT
                  </Button>

                  <Button onClick={checkTicket} style={button}>
                    Watch
                  </Button>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src={event2} />
              <Card.Body>
                <Card.Title>Hot Air Balloon Festival</Card.Title>
                <Card.Text>
                  Outdoor events ready for viewing.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Stream date Nov. 7th</small>
                <div>
                  <Button style={button} href='#'>
                    Buy NFT
                  </Button>
                  <Link to='/viewer'>
                    <Button style={button}>Watch</Button>
                  </Link>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src={event3} />
              <Card.Body>
                <Card.Title>Horse Derby</Card.Title>
                <Card.Text>
                  Watch ZED RUN digital horse racing or the Kentucky Derby. BET BIG or GO HOME 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Stream date May 12th</small>
                <div>
                  <Button style={button} href='#'>
                    Buy NFT
                  </Button>
                  <Link to='/viewer'>
                    <Button style={button}>Watch</Button>
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Container>
      </div>
    </>
  );
}
