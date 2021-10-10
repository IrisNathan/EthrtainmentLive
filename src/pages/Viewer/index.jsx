import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { btn2, btn3, button, container } from './styles/viewer';

export default function View() {
  return (
    <>
      <div
        style={{
          paddingTop: '56px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#30989e',
          paddingBottom: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <iframe
          src={process.env.REACT_APP_EMBED_URL}
          width='1000px'
          height='500px'
          title='EthrtainmentLive'
          frameBorder='0'
          scrolling='auto'
          allowFullScreen
          style={{ marginLeft: '250px', marginBottom: '15px' }}
        ></iframe>
        <div style={container}>
          <Link to='/'>
            <Button style={button}>Back to Home</Button>
          </Link>
          <Button style={btn2}>Tip Streamer</Button>
          <Button style={btn3}>Buy Product</Button>
        </div>
      </div>
    </>
  );
}
