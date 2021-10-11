import React, { Component } from "react";
import Header from "../shop/Header";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../shop/Banner";
import CheckoutForm from "./CheckoutForm";
import OrderDetails from "./OrderDetails";
class Checkout extends Component {
  render() {
    return (
      <div>
        <Banner heading="Checkout" />
        <Header heading="Checkout" />
        <Container className="mt-5">
          <Row>
            <Col>
              <CheckoutForm />
            </Col>
            <Col>
              <OrderDetails />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Checkout;
