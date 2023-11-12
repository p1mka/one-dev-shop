export const getSummaryDiscount = (products) =>
  products.reduce((acc, product) => {
    const discountAmount =
      (Math.floor(
        (Number(product.price) / 100) * Number(product.discount) * 100
      ) /
        100) *
      product.productCount;
    return (acc += discountAmount);
  }, 0);
