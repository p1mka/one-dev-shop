import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../selectors";
import styled from "styled-components";
import { Loader } from "../../components";
import { PRODUCTS_MOCK } from "../../products-mock";
import { useParams } from "react-router-dom";

const ProductContainer = ({ className }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(product);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          json: () =>
            PRODUCTS_MOCK.filter((product) => product.id === params.id),
        });
      }, 1500);
    })
      .then((loadedData) => loadedData.json())
      .then((loadedProduct) => setProduct(...loadedProduct))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return (
    <div className={className}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {product.title} <img src={product.img} alt={product.img}></img>
          {product.description}
        </>
      )}
    </div>
  );
};

export const Product = styled(ProductContainer)``;
