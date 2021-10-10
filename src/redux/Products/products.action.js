import productTypes from "./products.types";

export function addToCart(id) {
  return {
    type: productTypes.ADD_TO_CART,
    id,
  };
}
