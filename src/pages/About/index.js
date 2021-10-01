import React from "react";
import { container } from "./styles/about";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div style={ container }>
        <Container>
        <Row>
          <Col>How EthrtainmentLive works</Col>
        </Row>
        <Row>
          <Col>User Experience</Col>
          <Col>Streamer Experience</Col>
          <Col>Decentralized Streaming Experience</Col>
        </Row>
        </Container>
      </div>
      
    </>
  );
}
