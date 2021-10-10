import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Client } from '@livepeer/webrtmp-sdk';
import { streampage, videobox, btn } from "./styles/streamer";

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
    <div className='Streamer' style={streampage}>
      <video className='App-video' ref={ videoEl } style={ videobox }/>
      <button className='App-button border p-2 h-1/2 rounded border-livepeer hover:bg-livepeer hover:text-white' onClick={onButtonClick} style={btn}>
        Start
      </button>
      <Link to='/'>
        <button className='border p-2 h-1/2 rounded border-livepeer hover:bg-livepeer hover:text-white' style={btn}>
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Streamer;
