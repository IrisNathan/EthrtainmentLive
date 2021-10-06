import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Viewer() {
  return (
    <>
      <div className='container'>
        <Card style={{ width: '95rem' , height: '60rem'}}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Click to start</Button>
            <Button variant='primary'>Click to leave</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
