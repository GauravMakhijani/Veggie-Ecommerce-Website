// import { onSnapshot } from "firebase/firestore";
// import { collection } from "firebase/firestore";
import React, { Component } from "react";

import { fetchProducts } from "../../redux/Products/products.action";

import { connect } from "react-redux";
import db from "../../fbConfig";
class Shop extends Component {
  componentDidMount() {
    // this.props.dispatch(fetchProducts());
    console.log(this.props);
  }
  render() {
    return <div>shop</div>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Shop);

//  useEffect(() => {
//    onSnapshot(collection(db, "Products"), (snapshot) => {
//      console.log(snapshot.docs.map((doc) => doc.data()));
//    });
//  }, []);
