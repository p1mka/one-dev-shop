import { Link } from "react-router-dom";
import { ProductCard } from "./product-card/product-card";
import styled from "styled-components";
import { Icon } from "../../../../components";

const ProductsCardContainer = ({ className, products, header }) => {
  return (
    <div className={className}>
      <div className="header-row">
        <h1>{header}</h1>
        <Link to="/products">
          Все {header.toLowerCase()} <Icon id="la-angle-right" />
        </Link>
      </div>
      <div className="products-row">
        {products.map(({ id, img, title, price, rating }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              title={title}
              img={img}
              price={price}
              rating={rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export const ProductsCard = styled(ProductsCardContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  cursor: pointer;

  & .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .products-row {
    overflow: scroll;
    display: flex;
    gap: 2rem;
  }

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;
