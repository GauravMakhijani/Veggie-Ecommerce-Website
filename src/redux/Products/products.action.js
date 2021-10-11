import productTypes from "./products.types";

export function addToCart(id) {
  return {
    type: productTypes.ADD_TO_CART,
    id,
  };
}

export function removeFromCart(id) {
  return {
    type: productTypes.REMOVE_FROM_CART,
    id,
  };
}
