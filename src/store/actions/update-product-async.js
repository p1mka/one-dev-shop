import { request } from "../../utils";
import { setProducts } from "./set-products";

export const updateProductAsync = (updatedProduct) => async (dispatch) => {
  await request(`/products/${updatedProduct.id}`, "PATCH", {
    updatedProduct,
  }).then(({ error, data }) => {
    error && console.log(error);
    dispatch(setProducts(data));
  });
};
