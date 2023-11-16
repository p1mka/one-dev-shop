import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setProducts } from "../../store/actions";
import { getWordForm, request } from "../../utils";
import { useParams } from "react-router-dom";
import { selectIsLoading, selectProducts } from "../../store/selectors";
import { Loader } from "../../components";
import { SortingProductsBar } from "./components/sorting-products-bar/sorting-products-bar";
import styled from "styled-components";

const ProductsByCategoryContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    request(`/products?category=${params.id}`)
      .then(({ error, data }) => {
        dispatch(setProducts(data));
      })
      .finally(() => dispatch(setIsLoading(false)));
  }, [dispatch, params.id]);

  const products = useSelector(selectProducts);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={className}>
      {!products.length ? (
        <h2>В этой категории товары временно отсутствуют...</h2>
      ) : (
        <>
          <div className="header">
            <h1>{products[0].category.name}</h1>
            <h2>
              {products.length}{" "}
              {getWordForm(products.length, "товар", "товара", "товаров")}
            </h2>
          </div>
          <SortingProductsBar products={products} />
        </>
      )}
    </div>
  );
};

export const ProductsByCategory = styled(ProductsByCategoryContainer)`
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  font-family: rubik;
  padding: 2rem 0;

  & .header {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  & .products-list {
    flex-wrap: wrap;
    display: flex;
    gap: 1rem;
    margin-left: 250px;
  }
`;
