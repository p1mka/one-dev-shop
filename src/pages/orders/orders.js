import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectOrders,
  selectUserRole,
} from "../../store/selectors";
import { Loader } from "../../components";
import { OrderCard } from "./components/order-card/order-card";
import { ROLES } from "../../constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OrdersContainer = ({ className }) => {
  const isLoading = useSelector(selectIsLoading);
  const orders = useSelector(selectOrders);
  const userRole = useSelector(selectUserRole);

  return isLoading ? (
    <Loader />
  ) : userRole === ROLES.GUEST ? (
    <h2>
      Для просмотра ваших заказов <Link to="/authorize">авторизуйтесь...</Link>
    </h2>
  ) : (
    <ul className={className}>
      <h1> Ваши заказы</h1>
      {orders.map(({ id: orderId, products, totalPrice, createdAt }) => (
        <OrderCard
          key={orderId || Date.now()}
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
