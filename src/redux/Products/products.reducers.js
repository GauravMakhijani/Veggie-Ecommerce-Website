import productTypes from "./products.types";

const INITIAL_STATE = {
  products: [],
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case productTypes.FETCH_PRODUCTS_START:
      return state;
    case productTypes.FETCH_PRODUCTS_SUCCESS:
      return state;

    case productTypes.FETCH_PRODUCTS_FAILURE:
      return state;

    default:
      return state;
  }
}
