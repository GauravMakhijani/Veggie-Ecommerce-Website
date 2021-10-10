import productTypes from "./products.types";
import data from "../../data.json";
const INITIAL_STATE = {
  products: data.products,
  cart: data.cart,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case productTypes.ADD_TO_CART:
      var item = state.products.find((item) => item.id === action.id);
      // console.log("item", item);
      return {
        ...state,
        cart: [...state.cart, item],
      };
    default:
      return state;
  }
}
