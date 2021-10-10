import React, { Component } from "react";

import { connect } from "react-redux";
class Shop extends Component {
  render() {
    console.log(this.props);
    return <div>shop</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Shop);
