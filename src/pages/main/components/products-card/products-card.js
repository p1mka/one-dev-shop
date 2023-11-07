import { Link } from "react-router-dom";
import { ProductCard } from "./product-card/product-card";
import { Icon } from "../../../../components";
import styled from "styled-components";

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
        {products.map(({ id, img, title, price, rating, discount }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              title={title}
              img={img}
              price={price}
              rating={rating}
              discount={discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export const ProductsCard = styled(ProductsCardContainer)`
  font-family: rubik;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);

  & .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 0.25rem;
    padding: 0 1rem;
    box-shadow: 0px 0px 6px 0px #767676;
  }

  & .products-row {
    overflow: scroll;
    display: flex;
    gap: 2rem;
    padding: 2rem 0 1rem 0;
  }

  & a {
    display: flex;
    align-items: center;
  }
`;
