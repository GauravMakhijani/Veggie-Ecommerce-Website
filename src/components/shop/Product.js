import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class Product extends Component {
  render() {
    return (
      <div>
        <Card className="card">
          <Card.Img
            variant="top"
            src="http://wp.0effortthemes.com/themes/veggie/wp-content/uploads/2016/02/image-6-300x300.jpg"
          />
          <Card.Body className="card-body">
            <Card.Title classNAme="card-title">Fresh Tomato</Card.Title>
            <Card.Text classNAme="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              accumsan semper mi, nec tincidunt orc...
            </Card.Text>
            <h3 className="card-price">$60.00</h3>
            <Button className="card-button mt-3 mb-2">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
