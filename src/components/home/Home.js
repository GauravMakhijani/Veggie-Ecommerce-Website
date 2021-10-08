import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container className="cont-margin">
          <Row className="hero-img-row">
            <Col>
              <h3 className="hero-img-h3">VEGGIE SUPPER MARKET</h3>
              <h1 className="hero-img-h1">it’s Organic</h1>
              <h6 className="hero-img-h6">
                The organic veggies and fruits from worlds finest frams
              </h6>
            </Col>
            <Col>
              <img
                className="hero-banner"
                src="http://wp.0effortthemes.com/themes/veggie/wp-content/uploads/2016/08/Untitled-10-min.png"
                alt="banner"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
