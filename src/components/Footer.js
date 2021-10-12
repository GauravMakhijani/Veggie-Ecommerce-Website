import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <div className="mt-5">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Nav>
              <Navbar.Text>
                © <Link to="/">VEGGIE</Link> made with love by Gaurav.
              </Navbar.Text>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
