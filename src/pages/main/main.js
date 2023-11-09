import { useSelector } from "react-redux";
import { Loader } from "../../components";
import { ProductsCard } from "./components";
import { selectIsLoading, selectProducts } from "../../store/selectors";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainContainer = ({ className }) => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

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
