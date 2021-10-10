import React, { Component } from "react";

import { connect } from "react-redux";
import Banner from "./Banner";
import ProductList from "./ProductList";

class Shop extends Component {
  render() {
    return (
      <div>
        <Banner />
        <ProductList />
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
