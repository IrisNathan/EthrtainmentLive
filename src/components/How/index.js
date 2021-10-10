import React from 'react';
import { container, heading, icons, rows, ptag, font } from './styles/how';
import { Container, Row, Col } from 'react-bootstrap';

export default function How() {
  return (
    <>
      <div style={container} id='how'>
        <Container>
          <Row style={rows}>
            <Col style={heading}>How EthrtainmentLive Works</Col>
            <p style={font}>
              Ehtrtainment streams content through the LivePeer Protocol and
              distributes the content through the IPFS network.
            </p>
          </Row>
          <Row style={rows}>
            <Col>
              <span>
                <i style={icons} class='fas fa-laptop'></i>
              </span>
              <br />
              <h5>Viewer Experience</h5>
              <p style={ptag}>
                By purchasing an NFT ticket for a live stream, viewers have the option to tip content creators directly or get
                paid to watch ads from sponsors.
              </p>
            </Col>
            <Col>
              <span>
                <i style={icons} class='fas fa-signal'></i>
              </span>
              <br />
              <h5>Streamer Experience</h5>
              <p style={ptag}>
                Easy to set up a live stream whether it's for a major event or
                you are a content creator.
              </p>
            </Col>
            <Col>
              <span>
                <i style={icons} class='fas fa-globe'></i>
              </span>
              <br />
              <h5>Decentralized Streaming Experience</h5>
              <p style={ptag}>
                Stream directly to viewers without big tech monetizing
                your content. 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
