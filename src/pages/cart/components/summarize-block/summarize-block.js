import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserRole } from "../../../../store/selectors";
import { ROLES } from "../../../../constants";

const { Button } = require("../../../../components");
const { getWordForm } = require("../../../../utils");
const {
  getSumWithoutDiscount,
  getSummaryDiscount,
  getSummaryPrice,
  getSummaryCountOfProducts,
} = require("../../utils");

const SummarizeBlockContainer = ({ className, productsInCart }) => {
  const userRole = useSelector(selectUserRole);

  const priceWithoutDiscount = getSumWithoutDiscount(productsInCart);
  const summaryDiscount = getSummaryDiscount(productsInCart);
  const summaryPrice = getSummaryPrice(productsInCart);
  const summaryCountOfProducts = getSummaryCountOfProducts(productsInCart);

  const onCheckoutButtonClick = () => {
    if (userRole === ROLES.GUEST) {
      console.log("Надобэ зарегаться....");
    }
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
        <h3>Итог</h3>
        <h2>{summaryPrice.toFixed(2)} ₽</h2>
      </div>
      <Button iconId="la-check" onClick={onCheckoutButtonClick}>
        Оформить заказ
      </Button>
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
