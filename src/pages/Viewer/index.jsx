import React from 'react';
import { Link } from 'react-router-dom';


export default function View() {

  return (
    <>
      <div
        style={{
          paddingTop: '56p',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={ process.env.REACT_APP_EMBED_URL }
          width='1000px'
          height='500px'
          title='EthrtainmentLive'
          frameBorder='0'
          scrolling='auto'
          allowFullScreen
        ></iframe>
      </div>
      <Link to='/'>
        <button className='border p-2 h-1/2 rounded border-livepeer hover:bg-livepeer hover:text-white'>
          Back to Home
        </button>
      </Link>
    </>
  );
}
