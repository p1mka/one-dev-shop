import { request } from "../../utils";
import { setOrders } from "./set-orders";

export const getUserOrdersAsync = () => (dispatch) => {
  request("/orders").then(({ error, data }) => dispatch(setOrders(data)));
};
