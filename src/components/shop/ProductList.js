import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="mt-5">
        <Container fluid="md">
          <Row sm={1} lg={3} md={2} xl={4} className="g-4">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
