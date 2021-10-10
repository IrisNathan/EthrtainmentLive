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
          paddingTop: '120px',
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
                <strong>ETHRTAINMENT LIVE DECENTRALIZED WEB STREAMING</strong>
              </h1>
              <p style={ptag}>
                <strong>
                  EthrtainementLive is a platform for live streaming utilizing blockchain technology by incorporating
                  protocols by LivePeer and IPFS. Decentralized video streaming gives creators control over their content.
                </strong>
              </p>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
