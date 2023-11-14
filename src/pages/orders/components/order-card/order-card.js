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

  const totalCountOfProducts = products.reduce(
    (acc, product) => (acc += product.productCount),
    0
  );

  const onProductImageClick = (productId) => navigate(`/product/${productId}`);

  return (
    <li className={className}>
      <h3>
        Заказ {orderId} от {createdAt}
      </h3>{" "}
      <div className="order">
        <div className="images">
          {products.map(({ id: productId, img, title }) => (
            <div
              key={productId || Date.now()}
              className="order-image"
              title={title}
            >
              <img
                src={img}
                alt="Картинка..."
                onClick={
                  productId ? () => onProductImageClick(productId) : null
                }
              ></img>
            </div>
          ))}
        </div>
        <div className="order-info">
          <h4>Количество товаров: {totalCountOfProducts}</h4>
          <h4>Сумма заказа: {totalPrice} ₽</h4>
          <h4>Статус: Выполняется</h4>
        </div>
      </div>
    </li>
  );
};
export const OrderCard = styled(OrderCardContainer)`
  width: 100%;

  & .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 0.5rem;
    padding: 2rem;
  }
  & .images {
    display: flex;
  }
  & .order-image img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 0.25rem;
    cursor: pointer;
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
