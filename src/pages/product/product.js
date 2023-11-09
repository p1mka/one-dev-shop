import { useLayoutEffect, useState } from "react";

import { Button, Loader, Rating } from "../../components";
import { useParams } from "react-router-dom";
import { getWordForm, request } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../store/selectors";
import styled from "styled-components";
import { setProduct } from "../../store/actions";
import { Reviews } from "./components/reviews/reviews";

const ProductContainer = ({ className }) => {
  const product = useSelector(selectProduct);
  const [isLoading, setIsLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const {
    id: productId,
    title = "123",
    description,
    price,
    rating,
    discount,
    img,
    reviews,
  } = product;
  const dispatch = useDispatch();
  const params = useParams();

  const discountAmount =
    Math.floor((Number(price) / 100) * Number(discount) * 100) / 100;

  const currentPrice = Number(price) - discountAmount;

  useLayoutEffect(() => {
    setIsLoading(true);
    request(`/products/${params.id}`)
      .then(({ error, data }) => {
        dispatch(setProduct(data));
      })
      .finally(() => setIsLoading(false));
  }, [params.id, dispatch]);

  const onAddInCartButtonClick = () => setIsInCart(!isInCart);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={className}>
      <div className="img-and-product-info">
        <img src={img} alt={"Картинка в пути..."} />
        {discount > 0 && <div className="discount-block">-{discount}%</div>}
        <div className="product-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="product-price">
            {discount > 0 ? (
              <>
                {currentPrice} ₽<div className="old-price">{price}</div>
              </>
            ) : (
              <>{price} ₽</>
            )}
          </div>
          <Button
            onClick={onAddInCartButtonClick}
            iconId={isInCart ? "la-cart-arrow-down" : "la-cart-plus"}
            iconSize="34px"
            background={isInCart ? "#EB4AAE" : "#2f9ca3"}
            width="10em"
            fontSize="18px"
          >
            {isInCart ? "В корзине!" : "В корзину"}
          </Button>
          <div className="rating">
            Рейтинг: <Rating value={rating} /> ({reviews.length}{" "}
            {getWordForm(reviews.length, "отзыв", "отзыва", "отзывов")})
          </div>
        </div>
      </div>
      <Reviews reviews={reviews} productId={productId} />
    </div>
  );
};

export const Product = styled(ProductContainer)`
  font-family: rubik;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);
  gap: 0.5rem;

  & .img-and-product-info {
    display: flex;
    position: relative;
  }
  & .discount-block {
    position: absolute;
    bottom: 1rem;
    left: 0.5rem;
    z-index: 100;
    display: flex;
    max-width: 3rem;
    border-radius: 0.25rem;
    background: #eb4aae;
    color: white;
    font-weight: 600;
    font-size: 20px;
    padding: 0.25rem 0.5rem;
  }
  & .product-info {
    padding: 1rem;
  }
  & .product-price {
    display: flex;
    justify-content: flex-start;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 150%;
    text-align: center;
    color: #eb4aae;
    font-size: 28px;
  }

  & .old-price {
    display: flex;
    text-decoration: line-through solid #2f9ca3;
    margin: 0 0 0 0.5rem;
    font-size: 0.9rem;
    color: #0000008c;
  }
  & .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & img {
    width: 30%;
  }
`;
