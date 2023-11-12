import { request } from "../../utils";
import { clearCart } from "./clear-cart";
import { setOrders } from "./set-orders";

export const addOrderAsync = (orderData) => (dispatch) => {
  request(`/orders`, "POST", orderData).then(({ error, data }) => {
    if (error) {
      throw new Error("Ошибка сервера...");
    }
    dispatch(clearCart());
    dispatch(setOrders(data));
  });
};
