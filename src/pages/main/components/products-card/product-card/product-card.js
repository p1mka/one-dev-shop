import { useState } from "react";

import styled from "styled-components";
import { Button, Rating } from "../../../../../components";
import { Link } from "react-router-dom";

const ProductCardContainer = ({
  className,
  id,
  img,
  discount,
  title,
  price,
  rating,
}) => {
  const [stars, setStars] = useState(rating);

  const onRatingChange = (value) => setStars(value); //dispatch

  const discountAmount =
    Math.floor((Number(price) / 100) * Number(discount) * 100) / 100;

  const currentPrice = Number(price) - discountAmount;

  return (
    <div className={className}>
      <div className="product-image">
        <Link to={`product/${id}`}>
          <img src={img} alt="Картинка в пути..." />
        </Link>
        {discount > 0 && <div className="discount-block">-{discount}%</div>}
      </div>
      <div className="product-content">
        <div className="product-price">
          {discount > 0 ? (
            <>
              {currentPrice} ₽<div className="old-price">{price}</div>
            </>
          ) : (
            <>{price} ₽</>
          )}
        </div>
        <div className="product-info-and-button">
          <Link to={`product/${id}`}>{title}</Link>
          <Rating value={stars} onChange={onRatingChange} />
          <Button
            includeIcon={false}
            width="100%"
            padding=".5rem"
            border="2px solid #2f9ca3"
            background="#fff"
            color="#2f9ca3"
            fontSize="18px"
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = styled(ProductCardContainer)`
  min-width: 280px;
  width: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 5px 3px 6px 0px rgba(0, 0, 0, 0.1);
  font-family: rubik;

  & .product-image {
    position: relative;
    min-width: 100%;
    height: 150px;
    display: flex;
  }

  & .discount-block {
    position: absolute;
    top: 7rem;
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
  & .product-price {
    display: flex;
    justify-content: flex-start;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 150%;
    text-align: center;
  }
  & .old-price {
    display: flex;
    text-decoration: line-through solid #2f9ca3;
    margin: 0 0 0 0.5rem;
    font-size: 0.9rem;
    color: #0000008c;
  }
  & .product-content {
    padding: 0.5rem;
    margin: 0.5rem;
  }
  & .product-info-and-button {
    margin: 1.5rem 0 0 0;
  }
`;
