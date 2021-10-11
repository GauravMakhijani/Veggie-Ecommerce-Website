import React, { Component } from "react";
import { Container, Table, CloseButton } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/Products/products.action";
class CartList extends Component {
  handleClose(id) {
    const { dispatch } = this.props;
    dispatch(removeFromCart(id));
  }
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
                      onClick={() => this.handleClose(product.id)}
                    />
                  </td>
                </tr>
              ))}
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
