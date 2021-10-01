import React from 'react';
import { Card, CardGroup, Row, Col, Container} from 'react-bootstrap';
import {container, rows, heading, ptag} from './styles/events';
import event1 from '../../photos/event1.jpeg';
import event2 from '../../photos/event2.jpeg';
import event3 from '../../photos/event3.jpeg';


export default function Events() {
  return (
    <>
    <div style={container}>
      <Container>
      <Row style={rows}>
            <Col style={heading}>Events Happening Now</Col>
            <p style={ptag}>
              The Substratum Network is a worldwide collection of nodes that
              securely delivers content without the need of a VPN or Tor. Here’s
              how it works:
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
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={event3} />
          <Card.Body>
            <Card.Title>Horse Derby</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </Container>
    </div>
    </>
  );
}
