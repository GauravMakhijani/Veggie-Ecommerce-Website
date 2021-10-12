import { Container, Navbar, Nav } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    const count = this.props.products.cart.length;
    return (
      <div>
        <Navbar className="navbar" fixed="top" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className="link active" to="/">
                  Home
                </Link>
                <Link className="link" to="/shop">
                  Shop
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Link to="/" className="brand-logo">
              <img src="images/logo-1.png" alt="site logo" />
            </Link>
            <Link to="/cart">
              <div className="cart-div">
                <FontAwesomeIcon icon={faShoppingBag} className="cart-icon" />
                {count > 0 ? <span className="icon-span">{count}</span> : ""}
              </div>
            </Link>
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
