import React from 'react';
import { Card, CardGroup, Row, Col} from 'react-bootstrap';
import {rows, heading, ptag} from './styles/events';

export default function Events() {
  return (
    <div>
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
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
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
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
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
    </div>
  );
}
