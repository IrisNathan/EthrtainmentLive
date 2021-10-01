import React from "react";
import { container, heading, icons } from "./styles/about";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div style={ container }>
        <Container>
        <Row >
            <Col style={heading}>How EthrtainmentLive works</Col>
            <p>fdsfdsfdsf</p>
        </Row>
          <Row >
            <i style={ icons} class="fas fa-laptop"></i>
            <Col >User Experience</Col>
            <i  style={ icons}class="fas fa-signal"></i>
          <Col >Streamer Experience</Col>
          <i style={ icons} class="fas fa-globe"></i>
          <Col >Decentralized Streaming Experience</Col>
        </Row>
        </Container>
      </div>
      
    </>
  );
}
