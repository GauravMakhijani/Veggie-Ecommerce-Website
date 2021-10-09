import productTypes from "./products.types";

export function fetchProductsStart() {
  return {
    type: productTypes.FETCH_PRODUCTS_START,
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: productTypes.FETCH_PRODUCTS_SUCCESS,
    products,
  };
}
export function fetchProductsFailure(error) {
  return {
    type: productTypes.FETCH_PRODUCTS_FAILURE,
    error,
  };
}

export function fetchProducts() {
  return (dispatch) => {
    // dispatch(fetchProductsStart());
    // const url = ""
    // fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       dispatch(fetchFriendsSuccess(data.data.friends));
    //       return;
    //     }
    //     dispatch(fetchFriendsFailure(data.message));
    // });
  };
}
