import React, { Component } from "react";

import { connect } from "react-redux";
import Banner from "./Banner";
import Header from "./Header";
import ProductList from "./ProductList";

class Shop extends Component {
  render() {
    const { products } = this.props.products;
    console.log("cart", this.props.products.cart);
    return (
      <div>
        <Banner heading="Our Store" />
        <Header heading="Shop" />
        <ProductList products={products} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Shop);
