import { combineReducers } from "redux";
import products from "./Products/products.reducers";
// import { firestoreReducer } from "redux-firestore";
// import productReducer from "./Products/products.reducers";
export default combineReducers({
  products,
  // firestore: firestoreReducer,
});
