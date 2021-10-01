import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import WalletConnectProvider from "@walletconnect/web3-provider";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
import Fortmatic from "fortmatic";
import { providers } from "ethers";
import Web3Modal from "web3modal";
import img from "../../photos/ethrLogoNoTxt.ico";
import { button } from "./styles/header";

export default function Header() {
  async function connect() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "process.env.REACT_APP_INFURA_ID", // required
        },
      },
      burnerconnect: {
        package: BurnerConnectProvider, // required
        options: {
          defaultNetwork: "100",
        },
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: "FORTMATIC_KEY", // required
        },
      },
    };

    const web3Modal = new Web3Modal({
      providerOptions,
      theme: "dark",
    });

    const provider = await web3Modal.connect();
    new providers.Web3Provider(provider);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={img} width="65" height="65" className="d-inline-block align-top" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">ETHRTAINMENTLive</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">How It Works</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#streaming">Streaming</Nav.Link>
            </Nav>
            <Nav>
              <Button style={button} onClick={connect}>
                Connect
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
