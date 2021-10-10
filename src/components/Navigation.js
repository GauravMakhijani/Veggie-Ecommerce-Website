import { Container, Navbar, Nav } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
class Navigation extends Component {
  render() {
    const count = this.props.products.cart.length;
    console.log("count", count);
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Veggie</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="cart-div">
              <FontAwesomeIcon icon={faShoppingBag} className="cart-icon" />
              {count > 0 ? <span className="icon-span">{count}</span> : ""}
            </div>
          </Container>
        </Navbar>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Navigation);
