import React, { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";

class CartTotal extends Component {
  render() {
    return (
      <div>
        <Container>
          <h3 className="cart-h3">Cart totals</h3>
          <Table>
            <tbody>
              <tr className="table-row">
                <th className="total-heading">SUBTOTAL</th>
                <td className="total-price">$51.00</td>
              </tr>
              <tr className="table-row">
                <th className="total-heading">SHIPPING</th>
                <td className="total-price">Calculate Shipping</td>
              </tr>
              <tr className="table-row">
                <th className="total-heading">TOTAL</th>
                <td className="total-price">$51.00</td>
              </tr>
            </tbody>
          </Table>
          <div className="button-div">
            <Button className="cart-button">Proceed to checkout</Button>
          </div>
        </Container>
      </div>
    );
  }
}
export default CartTotal;
