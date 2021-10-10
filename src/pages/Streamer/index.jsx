import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Client } from '@livepeer/webrtmp-sdk';
import { Button } from 'react-bootstrap';
import { button, btn1, videobox, streambtn, streamer } from "./styles/streamer";

function Streamer() {
  const videoEl = useRef(null);
  const stream = useRef(null);

  const streamKey = process.env.REACT_APP_STREAM_KEY;

  useEffect(() => {
    (async () => {
      videoEl.current.volume = 0;

      stream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      videoEl.current.srcObject = stream.current;
      videoEl.current.play();
    })();
  });

  const onButtonClick = async () => {

    if (!stream.current) {
      alert('Video stream was not started.');
    }

    const client = new Client();

    const session = client.cast(stream.current, streamKey);

    session.on('open', () => {
      console.log('Stream started.');
      alert('Stream started; visit Livepeer Dashboard.');
    });

    session.on('close', () => {
      console.log('Stream stopped.');
    });

    session.on('error', (err) => {
      console.log('Stream error.', err.message);
    });
  };

  return (
    <div className='Streamer' style={streamer}>
      <video className='App-video' ref={ videoEl } style={videobox}/>
      <div style={streambtn}>
      <Button onClick={onButtonClick} style={btn1}>
        Start
      </Button>
      <Button style={btn1}>
        NFT Product Placement
      </Button>
      <Link to='/'>
        <Button style={button}>
          Back to Home
        </Button>
      </Link>
      </div>
    </div>
  );
}

export default Streamer;
