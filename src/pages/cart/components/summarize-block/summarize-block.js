import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";

const { Button } = require("../../../../components");
const { getWordForm } = require("../../../../utils");
const {
  getSumWithoutDiscount,
  getSummaryDiscount,
  getSummaryPrice,
  getSummaryCountOfProducts,
} = require("../../utils");

const SummarizeBlockContainer = ({ className, productsInCart }) => {
  const navigate = useNavigate();
  const match = useMatch("/cart");

  const priceWithoutDiscount = getSumWithoutDiscount(productsInCart);
  const summaryDiscount = getSummaryDiscount(productsInCart);
  const summaryPrice = getSummaryPrice(productsInCart);
  const summaryCountOfProducts = getSummaryCountOfProducts(productsInCart);

  const onCheckoutButtonClick = () => {
    navigate("order");
  };

  return (
    <div className={className}>
      <div className="total-products-and-price">
        <p>
          {summaryCountOfProducts}{" "}
          {getWordForm(summaryCountOfProducts, "товар", "товара", "товаров")}
        </p>
        <h4>{priceWithoutDiscount.toFixed(2)} ₽</h4>
      </div>
      {summaryDiscount !== 0 && (
        <div className="total-discount ">
          <p>Скидка</p>
          <h4>- {summaryDiscount.toFixed(2)} ₽</h4>
        </div>
      )}
      <div className="total-products-and-price">
        <h2>Итог</h2>
        <h2>{summaryPrice.toFixed(2)} ₽</h2>
      </div>
      {match ? (
        <Button iconId="la-check" onClick={onCheckoutButtonClick}>
          Оформить заказ
        </Button>
      ) : (
        <Button type="submit" form="user-form" iconId="la-handshake">
          Подтвердить заказ!
        </Button>
      )}
    </div>
  );
};

export const SummarizeBlock = styled(SummarizeBlockContainer)`
  width: 200px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  & .total-products-and-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #2f9ca3;
  }
  & .total-discount {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .total-discount h4 {
    color: #eb4aae;
  }
  & h4 {
    margin: 0;
  }
`;
