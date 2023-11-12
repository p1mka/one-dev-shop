import { useSelector } from "react-redux";
import { selectProductsInCart } from "../../store/selectors";
import { ProductsTable, SummarizeBlock } from "./components";
import styled from "styled-components";

const CartContainer = ({ className }) => {
  const productsInCart = useSelector(selectProductsInCart);

  return (
    <div className={className}>
      <h1>Корзина товаров</h1>
      {!productsInCart.length ? (
        <h3>Товаров пока нет...</h3>
      ) : (
        <div className="cart">
          <table className="products-table">
            <thead>
              <tr>
                <th>Изображение</th>
                <th>Наименование</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {productsInCart.map(
                ({ id, title, price, discount, img, productCount }) => (
                  <ProductsTable
                    key={id}
                    productId={id}
                    title={title}
                    price={price}
                    discount={discount}
                    img={img}
                    productCount={productCount}
                  />
                )
              )}
            </tbody>
          </table>
          <SummarizeBlock productsInCart={productsInCart} />
        </div>
      )}
    </div>
  );
};

export const Cart = styled(CartContainer)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  font-family: rubik;
  gap: 2rem;

  & .cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .products-table {
    width: calc(100% - 200px);
    vertical-align: top;
  }

  & .products-table th {
    padding: 2rem 0;
  }
`;
