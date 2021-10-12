import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
class OrderDetails extends Component {
  render() {
    const { cart } = this.props.products;
    const total = this.props.products.cartTotalPrice;

    return (
      <Container>
        <h3 className="cart-h3">Your order</h3>
        <Table>
          <thead>
            <tr className="table-row">
              <th className="total-heading">PRODUCT</th>
              <td className="total-price">TOTAL</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr className="table-row" key={product.id}>
                <th className="total-heading">
                  <span>{product.name}</span> x {product.qty}
                </th>
                <td className="total-price">
                  ${product.qty * product.price}.00
                </td>
              </tr>
            ))}

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
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(OrderDetails);
