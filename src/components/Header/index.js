import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import img from '../../photos/ethrLogoNoTxt.ico';

export default function Header() {
  async function connect() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: 'process.env.REACT_APP_INFURA_ID', // required
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
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
            src={img}
            width='65'
            height='65'
            className='d-inline-block align-top'
            alt='Logo'
            />
          </Navbar.Brand>
          <Navbar.Brand href='#home'>ETHRTAINMENTLive</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Button eventKey={2} href='#memes'>
                Dank memes
              </Nav.Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
