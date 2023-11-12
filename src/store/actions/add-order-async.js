import { request } from "../../utils";
import { clearCart } from "./clear-cart";

export const addOrderAsync = (orderData) => (dispatch) => {
  request(`/orders`, "POST", orderData).then(({ error, data }) => {
    if (error) {
      return error;
    }
    dispatch(clearCart());

    //   dispatch(setOrders(data))
  });
};
