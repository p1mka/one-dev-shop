import { getPriceWithDiscount } from "../../../utils";

export const getSummaryPrice = (product) =>
  product.reduce((acc, product) => {
    return (acc +=
      Number(getPriceWithDiscount(product.price, product.discount)) *
      product.productCount);
  }, 0);
