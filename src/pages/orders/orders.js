import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectOrders } from "../../store/selectors";
import { Loader } from "../../components";
import styled from "styled-components";
import { OrderCard } from "./components/order-card/order-card";

const OrdersContainer = ({ className }) => {
  const isLoading = useSelector(selectIsLoading);
  const orders = useSelector(selectOrders);

  return isLoading ? (
    <Loader />
  ) : (
    <ul className={className}>
      <h1> Ваши заказы</h1>
      {orders.map(({ id: orderId, products, totalPrice, createdAt }) => (
        <OrderCard
          key={orderId}
          orderId={orderId}
          products={products}
          totalPrice={totalPrice}
          createdAt={createdAt}
        />
      ))}
    </ul>
  );
};

export const Orders = styled(OrdersContainer)`
  display: flex;
  flex-direction: column;
  font-family: rubik;
`;
