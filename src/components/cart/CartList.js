import React, { Component } from "react";
import { Container, Table, CloseButton } from "react-bootstrap";
class CartList extends Component {
  render() {
    return (
      <div>
        <Container>
          <Table size="sm">
            <tbody>
              <tr className="table-row ">
                <td className="table-block">
                  <img
                    className="cart-product-img"
                    src="http://wp.0effortthemes.com/themes/veggie/wp-content/uploads/2016/02/image-1-300x300.jpg"
                    alt="product"
                  />
                </td>
                <td className="table-block">
                  <span className="cart-product-name">Beautiful Almonds</span>
                </td>
                <td className="table-block">
                  <span className="cart-product-price">$30.00</span>
                </td>
                <td className="table-block">
                  <input
                    className="cart-product-count"
                    type="number"
                    id="number"
                  />
                </td>
                <td className="table-block">
                  <span className="cart-product-price">$30.00</span>
                </td>
                <td className="table-block">
                  <CloseButton
                    aria-label="Hide"
                    className="cart-product-close"
                  />
                </td>
              </tr>
              <tr>
                <td className="table-block" colSpan="10"></td>
              </tr>
              <tr className="table-row">
                <td className="table-block">
                  <img
                    className="cart-product-img"
                    src="http://wp.0effortthemes.com/themes/veggie/wp-content/uploads/2016/02/image-1-300x300.jpg"
                    alt="product"
                  />
                </td>
                <td className="table-block">
                  <span className="cart-product-name">Beautiful Almonds</span>
                </td>
                <td className="table-block">
                  <span className="cart-product-price">$30.00</span>
                </td>
                <td className="table-block">
                  <input
                    className="cart-product-count"
                    type="number"
                    id="number"
                  />
                </td>
                <td className="table-block">
                  <span className="cart-product-price">$30.00</span>
                </td>
                <td className="table-block">
                  <CloseButton
                    aria-label="Hide"
                    className="cart-product-close"
                  />
                </td>
              </tr>
              <tr>
                <td className="table-block" colSpan="10"></td>
              </tr>
              <tr className="table-row">
                <td className="table-block ">
                  <img
                    className="cart-product-img"
                    src="http://wp.0effortthemes.com/themes/veggie/wp-content/uploads/2016/02/image-1-300x300.jpg"
                    alt="product"
                  />
                </td>
                <td className="table-block">
                  <span className="cart-product-name">Beautiful Almonds</span>
                </td>
                <td className="table-block">
                  <span className="cart-product-price">$30.00</span>
                </td>
                <td className="table-block">
                  <input
                    className="cart-product-count"
                    type="number"
                    id="number"
                  />
                </td>
                <td className="table-block">
                  <span className="cart-product-price">$30.00</span>
                </td>
                <td className="table-block">
                  <CloseButton
                    aria-label="Hide"
                    className="cart-product-close"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default CartList;
