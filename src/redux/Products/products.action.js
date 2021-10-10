import productTypes from "./products.types";

export function fetchProductsStart() {
  return {
    type: productTypes.FETCH_PRODUCTS_START,
  };
}
