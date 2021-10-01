import React from "react";
import { container, heading, icons, rows, ptag } from "./styles/about";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div style={container}>
        <Container>
          <Row style={rows}>
            <Col style={heading}>How EthrtainmentLive works</Col>
            <p>The Substratum Network is a worldwide collection of nodes that securely delivers content without the need of a VPN or Tor. Here’s how it works:</p>
          </Row>
          <Row style={rows}>
            <Col >
              <br/>
            <span>
                <i style={icons} class="fas fa-laptop"></i>
              </span>
              <br/>
              User Experience
              <p style={ptag}>Anyone can host websites or applications using Substratum Host, paying network users to serve content.</p>
            </Col>
            <Col>
              <span>
                <i style={icons} class="fas fa-signal"></i>
              </span>
              <br/>
              Streamer Experience
              <p style={ptag}>Nodes forward content from hosts to web users. Everyone who runs a node gets paid in our cryptocurrency to forward content.</p>
            </Col>
            <Col>
              <span>
                <i style={icons} class="fas fa-globe"></i>
              </span>
              <br/>
              Decentralized Streaming Experience
              <p style={ptag}>Anyone viewing Substratum-hosted content can see it in their regular web browser with no censorship blocks.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
