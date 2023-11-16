import { Button, Loader, Table, TableHead } from "../../../../../../components";
import { useEffect, useRef, useState } from "react";
import {
  addProductAsync,
  removeProductAsync,
  setIsLoading,
  setProducts,
  updateProductAsync,
} from "../../../../../../store/actions";
import { request } from "../../../../../../utils";
import { ProductEditPage, ProductRow } from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectProducts,
} from "../../../../../../store/selectors";
import styled from "styled-components";

const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const [isProductEditing, setIsProductEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const editRef = useRef(null);

  const initialProduct = {
    id: "",
    img: "",
    title: "",
    description: "",
    category: "",
    price: 0,
    rating: 0,
    amount: 0,
    reviews: [],
  };

  useEffect(() => {
    setIsLoading(true);
    request("/products")
      .then(({ error, data }) => {
        dispatch(setProducts(data));
      })
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  const onProductCreate = () => {
    setIsProductEditing(true);
    setSelectedProduct(initialProduct);
    setTimeout(() => {
      editRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const onProductEdit = (product) => {
    setIsProductEditing(true);
    setSelectedProduct(product);

    setTimeout(() => {
      editRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const onProductSave = async (updatedProduct) => {
    dispatch(setIsLoading(true));
    updatedProduct.id
      ? dispatch(updateProductAsync(updatedProduct))
      : dispatch(addProductAsync(updatedProduct));
    dispatch(setIsLoading(false));
    setIsProductEditing(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onProductRemove = async (productId, title) => {
    const confirmDelete = window.confirm(`Удалить ${title}?`);
    if (confirmDelete) {
      dispatch(setIsLoading(true));
      await dispatch(removeProductAsync(productId));
      dispatch(setIsLoading(false));
    }
  };

  const onCancel = () => {
    setIsProductEditing(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <ProductsHeader>
        <h2>Список товаров магазина</h2>
        <Button
          includeIcon={false}
          background="#fff"
          color="#414141"
          onClick={onProductCreate}
        >
          Добавить товар
        </Button>
      </ProductsHeader>
      <Table>
        <thead>
          <tr>
            <TableHead></TableHead>
            <TableHead>Название</TableHead>
            <TableHead>Категория</TableHead>
            <TableHead>Изображение</TableHead>
            <TableHead>Цена</TableHead>
            <TableHead>Скидка</TableHead>
            <TableHead>Количество</TableHead>
            <TableHead>Рейтинг</TableHead>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow
              key={product.id}
              product={product}
              index={index}
              onProductEdit={() => onProductEdit(product)}
              onProductRemove={() => onProductRemove(product.id, product.title)}
            />
          ))}
        </tbody>
      </Table>
      {isProductEditing && (
        <ProductEditPage
          editRef={editRef}
          product={selectedProduct}
          onProductSave={(updatedProduct) => onProductSave(updatedProduct)}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};
