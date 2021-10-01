import React from "react";
import {  Row, Col, Container, Button } from "react-bootstrap";
import { container, rows, heading, ptag, button } from "./styles/events";


export default function Stream() {
  return (
    <>
      <div style={container}>
        <Container>
          <Row style={rows}>
            <Col style={heading}>Events Happening Now</Col>
            <p style={ptag}>
              We have a variety of events going on all the time! Check below to see what is
              streamming now!
            </p>
          </Row>
          
        </Container>
      </div>
    </>
  );
}
