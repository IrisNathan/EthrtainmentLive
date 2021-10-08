import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Viewer from "../../pages/Viewer/index";
import { Card, CardGroup, Row, Col, Container, Button } from "react-bootstrap";
import { container, rows, heading, ptag, button } from "./styles/events";
// import Routes from '../../router';
import event1 from "../../photos/event1.jpeg";
import event2 from "../../photos/event2.jpeg";
import event3 from "../../photos/event3.jpeg";

export default function Events() {
  return (
    <>
      <div style={container} id="events">
        <Container>
          <Row style={rows}>
            <Col style={heading}>Events Happening Now</Col>
            <p style={ptag}>
              We have a variety of events going on all the time! Check below to see what is
              streaming now!
            </p>
          </Row>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={event1} />
              <Card.Body>
                <Card.Title>Concert</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Stream date Oct 29th </small>
                <div>
                  <Button style={button} href="#">
                    Buy NFT
                  </Button>
                  <Router>
                    <Link to="/viewer">
                      <Button style={button}>Watch</Button>
                    </Link>
                    <Switch>
                      <Route path="/viewer"></Route>
                    </Switch>
                  </Router>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={event2} />
              <Card.Body>
                <Card.Title>Hot Air Balloon Festival</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Stream date Nov. 7th</small>
                <div>
                  <Button style={button} href="#">
                    Buy NFT
                  </Button>
                  <Button style={button} href="#">
                    Watch
                  </Button>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={event3} />
              <Card.Body>
                <Card.Title>Horse Derby</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This card has even longer content than the first to show that equal
                  height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Stream date May 12th</small>
                <div>
                  <Button style={button} href="#">
                    Buy NFT
                  </Button>
                  <Button style={button} href="#">
                    Watch
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Container>
      </div>
    </>
  );
}
