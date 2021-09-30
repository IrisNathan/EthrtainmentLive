import React from 'react';
import { bodyImg, container } from './styles/home';
import backgroundPic from '../../photos/pexels-luis-quintero-2014773.jpeg';

export default function Home() {
  return (
    <>
      <div className="scene" 
      style={{backgroundImage: `url(${backgroundPic})`,
      backgroundSize: "cover",
      height: "100vh",
      color: 'white'
    }}>
        <div style={container}>
          <p>
            <strong>WE ARE</strong>
          </p>
          <h1>
            <strong>THE FOUNDATION OF THE DECENTRALIZED WEB</strong>
          </h1>
          <p>
            <strong>
              Substratum is an open-source network that allows anyone to
              allocate spare computing resources to make the internet a free and
              fair place for the entire world.
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
