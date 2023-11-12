import { ACTION_TYPE } from "../actions";

export const localStorageMiddleware = (store) => (next) => (action) => {
  let result = next(action);
  if (
    action.type === ACTION_TYPE.SET_CART ||
    action.type === ACTION_TYPE.REMOVE_PRODUCT_FROM_CART
  ) {
    const updatedCart = store.getState().cart;
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  return result;
};
