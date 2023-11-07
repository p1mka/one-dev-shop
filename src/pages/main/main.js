import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components";
import { ProductsCard } from "./components";
import { request } from "../../utils";
import { selectIsLoading } from "../../store/selectors";
import { setIsLoading } from "../../store/actions";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainContainer = ({ className }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    request("/products")
      .then(({ error, data }) => {
        return setProducts(data);
      })
      .finally(() => dispatch(setIsLoading(false)));
  }, [dispatch]);

  return (
    <div className={className}>
      <Outlet />
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export const Main = styled(MainContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
