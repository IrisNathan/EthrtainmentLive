import React from 'react';
import { container, ptag, hOne } from './styles/hero';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundPic from '../../photos/pexels-luis-quintero-2014773.jpeg';

export default function Hero() {
  return (
    <>
      <div
        className='scene' id='home'
        style={{
          backgroundImage: `url(${backgroundPic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          color: 'white',
          opacity: '0.9',
        }}
      >
        <section className='intro'>
          <Container style={container}>
            <Row>
              <Col>
                <p style={ptag}>  
                  <strong>WE ARE</strong>
                </p>
              </Col>
              <h1 style={hOne}>
                <strong>THE FOUNDATION OF THE DECENTRALIZED WEB</strong>
              </h1>
              <p style={ptag}>
                <strong>
                  Substratum is an open-source network that allows anyone to
                  allocate spare computing resources to make the internet a free
                  and fair place for the entire world.
                </strong>
              </p>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
