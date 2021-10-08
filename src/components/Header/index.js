import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button } from 'react-bootstrap';
import WalletConnectProvider from '@walletconnect/web3-provider';
import BurnerConnectProvider from '@burner-wallet/burner-connect-provider';
import Fortmatic from 'fortmatic';
import { providers } from 'ethers';
import Web3Modal from 'web3modal';
import logo from '../../photos/EthrLogo-removebg.png';
import { button, navBar } from './styles/header';

export default function Header() {
  
  async function connect() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: 'process.env.REACT_APP_INFURA_ID', // required
        },
      },
      burnerconnect: {
        package: BurnerConnectProvider, // required
        options: {
          defaultNetwork: '100',
        },
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: 'FORTMATIC_KEY', // required
        },
      },
    };

    const web3Modal = new Web3Modal({
      providerOptions,
      theme: 'dark',
    });

    const provider = await web3Modal.connect();
    new providers.Web3Provider(provider);
  }

  return (
    <>
      <div className='container'>
        <nav
          className='navbar navbar-expand-lg'
          // style={{background: 'rgba(204, 204, 204, 0.5)'}}>
          style={navBar}
        >
          <div className='container-fluid'>
            <Link className='navbar-brand' style={{color:'black'}} smooth to='#home'>
              <img
                src={logo}
                width='110px'
                style={{ fontSize: '22px', fontWeight: 'bold' }}
                alt='Ethrtainment'
              />
              EthrtainmentLive
            </Link>
            <ul className='nav justify-content-center'>
              <li className='nav-item'>
                <Link smooth to='#home' className='nav-link'  style={{color: 'black'}}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link smooth to='#how' className='nav-link' style={{color: 'black'}}>
                  How It Works
                </Link>
              </li>
              <li className='nav-item'>
                <Link smooth to='#events' className='nav-link' style={{color: 'black'}}>
                  Events
                </Link>
              </li>
              <li className='nav-item'>
                <Link smooth to='#stream' className='nav-link' style={{color: 'black'}}>
                  Streaming
                </Link>
              </li>
              <li className='nav-item'>
                <Link smooth to='#contact' className='nav-link' style={{color: 'black'}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Button style={button} onClick={connect}>
            Connect
          </Button>
        </nav>
      </div>
    </>
  );
}
