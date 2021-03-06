import React, { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cartTotal } from "../../redux/Products/products.action";
class CartTotal extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(cartTotal());
  }
  render() {
    const total = this.props.products.cartTotalPrice;
    const { cart } = this.props.products;
    return (
      <div>
        <Container>
          <h3 className="cart-h3">Cart totals</h3>
          <Table>
            <tbody>
              <tr className="table-row">
                <th className="total-heading">SUBTOTAL</th>
                <td className="total-price">${total}.00</td>
              </tr>
              <tr className="table-row">
                <th className="total-heading">SHIPPING</th>
                <td className="total-price">Calculate Shipping</td>
              </tr>
              <tr className="table-row">
                <th className="total-heading">TOTAL</th>
                <td className="total-price">${total}.00</td>
              </tr>
            </tbody>
          </Table>
          {cart.length !== 0 && (
            <div className="button-div">
              <Link to="/checkout">
                <Button className="cart-button">Proceed to checkout</Button>
              </Link>
            </div>
          )}
        </Container>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(CartTotal);
