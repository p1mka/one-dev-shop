export const getSumWithoutDiscount = (product) =>
  product.reduce(
    (acc, product) => (acc + Number(product.price)) * product.productCount,
    0
  );
