import React from 'react';
import { style1, style2, style3, style4 } from './styles/footer'

export default function Footer() {
  return (
    <div>
    <div className='container-fluid' style={style1}>
      <div>
        <ul style={style2}>
          <li>
            <a style={style3} href='#/'>
              Home
            </a>
          </li>
          <li>
            <a style={style3} href='#/'>
              Events
            </a>
          </li>
          <li>
            <a style={style3} href='#/'>
                Buy NFT Ticket
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul style={style2}>
          <li>
            <a style={style3} href='privacy'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a style={style3} href='Terms of Service'>
              Terms of Service
            </a>
          </li>
          <li>
            <a style={style3} href='Contact'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div style={style4} className="container-fluid">
      <p>EthrtainmentLive <small>Copyright 2021</small></p>
    </div>
    </div>

  );
}
