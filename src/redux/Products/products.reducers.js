import productTypes from "./products.types";
import data from "../../data.json";
const INITIAL_STATE = {
  products: data.products,
  cart: data.cart,
  cartTotalPrice: 0,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case productTypes.ADD_TO_CART:
      var item = state.products.find((item) => item.id === action.id);
      var findincart = state.cart.find((item) => item.id === action.id);
      if (findincart === undefined) {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      } else {
        const elementsIndex = state.cart.findIndex(
          (element) => element.id === action.id
        );
        let newArray = [...state.cart];
        newArray[elementsIndex] = {
          ...newArray[elementsIndex],
          qty: state.cart[elementsIndex].qty + 1,
        };
        return {
          ...state,
          cart: newArray,
        };
      }

    case productTypes.REMOVE_FROM_CART:
      const updatedCart = state.cart.filter((item) => item.id !== action.id);

      return {
        ...state,
        cart: updatedCart,
      };

    case productTypes.INCREASE_QTY:
      const elementsIndex = state.cart.findIndex(
        (element) => element.id === action.id
      );
      let newArray = [...state.cart];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        qty: state.cart[elementsIndex].qty + 1,
      };
      return {
        ...state,
        cart: newArray,
      };

    case productTypes.DECREASE_QTY:
      const elementIndex = state.cart.findIndex(
        (element) => element.id === action.id
      );
      if (state.cart[elementIndex].qty <= 1) {
        return state;
      }
      let newCart = [...state.cart];
      newCart[elementIndex] = {
        ...newCart[elementIndex],
        qty: state.cart[elementIndex].qty - 1,
      };
      return {
        ...state,
        cart: newCart,
      };
    case productTypes.CART_TOTAL:
      let total = 0;
      state.cart.forEach((product) => {
        total += product.qty * product.price;
      });
      // console.log("total", total);
      return {
        ...state,
        cartTotalPrice: total,
      };

    default:
      return state;
  }
}
