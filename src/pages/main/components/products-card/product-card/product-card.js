import { useState } from "react";
import { Rating } from "../rating/rating";
import styled from "styled-components";
import { Button } from "../../../../../components";

const ProductCardContainer = ({ className, id, img, title, price, rating }) => {
  const [stars, setStars] = useState(rating);

  const onRatingChange = (value) => {
    return setStars(value); //dispatch
  };

  return (
    <div className={className}>
      <img src={img} alt={id} />
      <div className="product-content">
        <div className="product-price">{price}₽</div>
        <div> {title}</div>
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
  );
};

export const ProductCard = styled(ProductCardContainer)`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.1);

  & .product-price {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
  }
  & .product-content {
    padding: 0.5rem;
    margin: 0.5rem;
  }
  & img {
    border-radius: 0.25rem 0.25rem 0 0;
  }
`;
