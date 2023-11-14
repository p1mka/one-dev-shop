import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components";
import { ProductsCard } from "./components";
import { selectIsLoading, selectProducts } from "../../store/selectors";

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useLayoutEffect } from "react";
import { setIsLoading, setProducts } from "../../store/actions";
import { request } from "../../utils";

const MainContainer = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  useLayoutEffect(() => {
    dispatch(setIsLoading(true));
    request("/products")
      .then(({ error, data }) => {
        return dispatch(setProducts(data));
      })
      .finally(() => dispatch(setIsLoading(false)));
  }, [dispatch]);

  return (
    <div className={className}>
      <Outlet />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="products-cards">
          <ProductsCard
            products={products.filter((product) => product.rating > 2)}
            header={"Лучшее"}
          />
          <ProductsCard
            products={products.filter((product) => product.discount > 0)}
            header={"Скидки"}
          />
          <ProductsCard products={products} header={"Новинки"} />
          <ProductsCard products={products} header={"Коты"} />
        </div>
      )}
    </div>
  );
};

export const Main = styled(MainContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & .products-cards {
    width: 100%;
  }
`;
