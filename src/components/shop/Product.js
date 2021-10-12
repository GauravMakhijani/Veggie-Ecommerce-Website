import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { addToCart } from "../../redux/Products/products.action";
import { connect } from "react-redux";
class Product extends Component {
  handleAddCart = () => {
    const { product, dispatch } = this.props;
    dispatch(addToCart(product.id));
  };
  render() {
    const { product } = this.props;
    return (
      <div>
        <Card className="card">
          <Card.Img variant="top" src={product.img} />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{product.name}</Card.Title>
            <Card.Text className="card-text">{product.description}</Card.Text>
            <h3 className="card-price">${product.price}.00</h3>
            <Button
              className="card-button mt-3 mb-2"
              onClick={this.handleAddCart}
            >
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Product);
