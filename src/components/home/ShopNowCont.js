import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ShopNowCont extends Component {
  render() {
    return (
      <div className="cont-margin shop-now-cont">
        <Container className="cont-pd">
          <Row className="row ">
            <Col>
              <img
                className=""
                src="http://wp.0effortthemes.com/themes/veggie/wp-content/uploads/2016/02/veg-rack.png"
                alt="rack"
              />
            </Col>
            <Col className="p-6">
              <h1 className="shop-now-h1">Why veggie super market?</h1>
              <p className="shop-now-p mt-4">
                We shorten the time between the farm and your table. Our motto
                is to deliver the local food which is better, fresher and
                tastier. The wholesale prices that farmers get for their
                products are low, often near the cost of production. It is an
                investment in the future. By supporting local farmers today, we
                are helping to ensure that there will be farms in our community
                tomorrow!
              </p>
              <p className="shop-now-p">
                We have 6 points quality control system that ensures that each
                piece of fruits and vegetables should match Grade A Quality. Our
                Logistics chain ensure each fruits and vegetables reaches your
                doorsteps within 24 hours of plucking and harvesting.
              </p>
              <Link to="/shop">
                <Button className="shop-now-button mt-4">PURCHASE NOW</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
