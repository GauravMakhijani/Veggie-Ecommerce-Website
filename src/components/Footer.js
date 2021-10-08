import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Nav>
              <Navbar.Text>
                © <a href="/">VEGGIE</a> made with love by Gaurav.
              </Navbar.Text>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
