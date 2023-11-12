import { Link } from "react-router-dom";
import { ProductCard } from "./product-card/product-card";
import { Icon } from "../../../../components";
import styled from "styled-components";

const ProductsCardContainer = ({ className, products, header }) => {
  return (
    <div className={className}>
      <div className="header-row">
        <h2>{header}</h2>
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
      <hr />
    </div>
  );
};

export const ProductsCard = styled(ProductsCardContainer)`
  font-family: rubik;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  // box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);

  & .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
  }

  & .products-row {
    overflow: scroll;
    display: flex;
    gap: 2rem;
    padding: 2rem 0 1rem 0;
  }

  & h2 {
    margin: 0;
  }

  & hr {
    border: 1px solid #e5e5e5;
    width: 90%;
  }

  & a {
    display: flex;
    align-items: center;
  }
`;
