import React, { Component } from "react";
import { Container, Table, CloseButton } from "react-bootstrap";
import { connect } from "react-redux";
class CartList extends Component {
  render() {
    const { cart } = this.props.products;
    console.log("cart", cart);
    return (
      <div>
        <Container>
          <Table size="sm">
            <tbody>
              {cart.map((product) => (
                <tr className="table-row">
                  <td className="table-block">
                    <img
                      className="cart-product-img"
                      src={product.img}
                      alt="product"
                    />
                  </td>
                  <td className="table-block">
                    <span className="cart-product-name">{product.name}</span>
                  </td>
                  <td className="table-block">
                    <span className="cart-product-price">
                      ${product.price}.00
                    </span>
                  </td>
                  <td className="table-block">
                    <input
                      className="cart-product-count"
                      type="number"
                      id="number"
                      defaultValue={product.qty}
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
              ))}

              {/* <tr className="table-row">
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
              </tr> */}
            </tbody>
          </Table>
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
export default connect(mapStateToProps)(CartList);
