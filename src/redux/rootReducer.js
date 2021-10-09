import { combineReducers } from "redux";
import products from "./Products/products.reducers";
// import productReducer from "./Products/products.reducers";
export default combineReducers({
  products,
});
