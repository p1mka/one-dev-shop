import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../button/button";
import { useNavigate } from "react-router-dom";

const CartNotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 250px;
  position: fixed;
  top: 6rem;
  right: 1rem;
  background-color: #fff;
  color: #414141;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 999;
  font-family: rubik;
  & p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  & p label {
    font-weight: bold;
    float: left;
  }
  & p img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;

export const CartNotification = ({ productName, productImage, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  const onButtonClick = () => navigate("/cart");

  return (
    <CartNotificationContainer>
      <p>
        <img src={productImage} alt="" />
        <label>{productName}</label> добавлен в корзину
      </p>
      <Button
        includeIcon={false}
        background="#fff"
        padding="1rem "
        color="#000"
        fontSize="16px"
        onClick={onButtonClick}
      >
        Перейти в корзину
      </Button>
    </CartNotificationContainer>
  );
};
