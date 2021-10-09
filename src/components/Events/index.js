import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardGroup, Row, Col, Container, Button } from 'react-bootstrap';
import { container, rows, heading, ptag, button } from './styles/events';
import { ethers } from 'ethers';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { mintEventAddress, ethrtainAddress } from '../../config';
import MintEvent from '../../artifacts/contracts/MintEvent.sol/MintEvent.json';
import Ethrtainment from '../../artifacts/contracts/Ethrtainment.sol/Ethrtainment.json';
import event1 from '../../photos/event1.jpeg';
import event2 from '../../photos/event2.jpeg';
import event3 from '../../photos/event3.jpeg';

export default function Events() {
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
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Stream date Oct 29th </small>
                <div>
                  <Button style={button} href='#'>
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
                  This card has supporting text below as a natural lead-in to
                  additional content.{' '}
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
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
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
