import { request } from "../../utils";
import { removeReview } from "./remove-review";
import { setProductRating } from "./set-product-rating";

export const removeReviewAsync = (productId, reviewId) => (dispatch) => {
  request(`/products/${productId}/reviews/${reviewId}`, "DELETE").then(
    ({ error, data }) => {
      dispatch(removeReview(reviewId));
      dispatch(setProductRating(data));
    }
  );
};
