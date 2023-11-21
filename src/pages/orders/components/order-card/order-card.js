import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OrderCardContainer = ({
  className,
  orderId,
  products,
  totalPrice,
  createdAt,
}) => {
  const navigate = useNavigate();
  console.log(products);

  const totalCountOfProducts = products.reduce(
    (acc, product) => (acc += product.productCount),
    0
  );

  const onProductImageClick = (productId) => navigate(`/product/${productId}`);

  return (
    <li className={className}>
      <h3>
        Заказ {orderId.slice(0, 9)} от {createdAt}
      </h3>{" "}
      <div className="order">
        <div className="images">
          {products.map(({ id: productId, img, title, productCount }) => (
            <div key={productId || Date.now()} className="order-img-and-count">
              <div className="order-image" title={title}>
                <img
                  src={img}
                  alt="Картинка в пути..."
                  onClick={
                    productId ? () => onProductImageClick(productId) : null
                  }
                />
              </div>
              {productCount} шт. в заказе
            </div>
          ))}
        </div>
        <div className="order-info">
          <h4>Количество товаров: {totalCountOfProducts}</h4>
          <h4>Сумма заказа: {totalPrice} ₽</h4>
        </div>
        <div className="status">Выполняется</div>
      </div>
    </li>
  );
};
export const OrderCard = styled(OrderCardContainer)`
  width: 100%;

  & .status {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 0.5rem;
    height: 2rem;
    border-radius: 0.25rem;
    background: #2f9ca3;
  }
  & .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 0.5rem;
    padding: 2rem;
    gap: 1.5rem;
  }

  & .order-img-and-count {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .images {
    display: flex;
    gap: 2rem;
  }

  & .order-image img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
  & .order-image img:hover {
    transform: scale(150%);
    transition: 0.1s ease-in;
  }

  & .order-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  & h4 {
    margin: 0.5rem;
    font-weight: 500;
  }
`;
