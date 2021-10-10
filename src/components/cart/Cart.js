import React, { Component } from "react";
import Banner from "../shop/Banner";
import Header from "../shop/Header";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
class Cart extends Component {
  render() {
    return (
      <div>
        <Banner heading="Cart" />
        <Header heading="Cart" />
        <CartList />
        <CartTotal />
      </div>
    );
  }
}

export default Cart;
