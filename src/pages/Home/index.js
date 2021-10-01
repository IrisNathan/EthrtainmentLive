import React from 'react';
import { container } from './styles/home';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundPic from '../../photos/pexels-luis-quintero-2014773.jpeg';

export default function Home() {
  return (
    <>
      <div
        className='scene'
        style={{
          backgroundImage: `url(${backgroundPic})`,
          backgroundSize: 'cover',
          height: '100vh',
          color: 'white',
          opacity: '0.7',
        }}
      >
        
        <div>
          <Container style={container}>
          <Row>
          <Col><p><strong>WE ARE</strong></p></Col>
          <h1><strong>THE FOUNDATION OF THE DECENTRALIZED WEB</strong></h1>
          <p>
            <strong>
              Substratum is an open-source network that allows anyone to
              allocate spare computing resources to make the internet a free and
              fair place for the entire world.
            </strong>
          </p>
          </Row>
          </Container>
        </div>    
      </div>
    </>
  );
}
