import { request } from "../../utils";
import { setIsLoading } from "./set-is-loading";
import { setOrders } from "./set-orders";

export const getUserOrdersAsync = () => (dispatch) => {
  dispatch(setIsLoading(true));
  request("/orders")
    .then(({ error, data }) => dispatch(setOrders(data)))
    .finally(() => dispatch(setIsLoading(false)));
};
