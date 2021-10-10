import productTypes from "./products.types";
import data from "../../data.json";
const INITIAL_STATE = {
  products: data.products,
  cart: data.cart,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
