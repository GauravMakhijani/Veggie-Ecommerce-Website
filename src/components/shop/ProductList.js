import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Container fluid="md">
          <Row sm={1} lg={3} md={2} xl={4} className="g-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Row>
        </Container>
      </div>
    );
  }
}
