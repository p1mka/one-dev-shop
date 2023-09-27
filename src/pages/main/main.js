import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components";
import { ProductsCard } from "./components";
import { PRODUCTS_MOCK } from "../../products-mock";
import styled from "styled-components";
import { selectIsLoading } from "../../selectors";
import { setIsLoading } from "../../actions";

const MainContainer = ({ className }) => {
  const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ json: () => PRODUCTS_MOCK });
      }, 1500);
    })
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => setProducts(loadedProducts))
      .finally(() => dispatch(setIsLoading(false)));
  }, [dispatch]);

  return (
    <div className={className}>
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
