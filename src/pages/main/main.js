import { useEffect, useState } from "react";
import { Loader } from "../../components";
import { ProductsCard } from "./components";
import styled from "styled-components";

const PRODUCTS_MOCK = [
  {
    id: "001",
    img: "https://loremflickr.com/cache/resized/7288_28199796685_7757ee2460_n_280_150_nofilter.jpg",
    title: "Товар 0",
    description: "Описание товара",
    price: "999,99 ",
    rating: "5",
  },
  {
    id: "002",
    img: "https://loremflickr.com/cache/resized/65535_52682151570_91793b7a9a_n_280_150_nofilter.jpg",
    title: "Товар 1",
    description: "Описание товара",
    price: "999,99 ",
    rating: "3",
  },
  {
    id: "003",
    img: "https://loremflickr.com/cache/resized/65535_52700336072_7c9b11af70_n_280_150_nofilter.jpg",
    title: "Товар 2",
    description: "Описание товара",
    price: "999,99 ",
    rating: "1",
  },
  {
    id: "004",
    img: "https://loremflickr.com/cache/resized/65535_52264054596_faf342d6f3_n_280_150_nofilter.jpg",
    title: "Товар 3",
    description: "Описание товара",
    price: "999,99 ",
    rating: "0",
  },
  {
    id: "005",
    img: "https://loremflickr.com/cache/resized/65535_52313481544_4bf829068e_z_280_150_nofilter.jpg",
    title: "Товар 4",
    description: "Описание товара",
    price: "999,99 ",
    rating: "4",
  },
];

const MainContainer = ({ className }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ json: () => PRODUCTS_MOCK });
      }, 1500);
    })
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => setProducts(loadedProducts))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={className}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductsCard products={products} header={"Товары"} />
          <ProductsCard products={products} header={"Акции"} />
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
