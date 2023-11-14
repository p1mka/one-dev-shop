import { Button, Icon, Input } from "../../../../../../../../components";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ProductEditPageContainer = ({
  className,
  product,
  onProductSave,
  onCancel,
}) => {
  const [editedProduct, setEditedProduct] = useState(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };
  const {
    title,
    description,
    img,
    price,
    discount = "0",
    amount,
  } = editedProduct;

  return (
    <div className={className}>
      <Icon id="la-times" size="24px" color="#eb4aae" onClick={onCancel} />
      <h3>Товар {product.title}</h3>
      <div className="product-info">
        <div className="image-and-save-button">
          <img src={img} alt="Здесь должна быть картинка" />
          <Button type="submit" onClick={() => onProductSave(editedProduct)}>
            Сохранить
          </Button>
        </div>

        <div className="rows-column">
          <div className="image-url">
            <label>URL изображения</label>
            <Input
              name="img"
              value={img}
              onChange={onInputChange}
              required={true}
            />
          </div>
          <div className="title">
            <label>Название: </label>
            <Input name="title" value={title} onChange={onInputChange} />
          </div>
          <div className="price-and-discount-and-amount">
            <div className="title">
              <label>Цена: </label>
              <Input name="price" value={price} onChange={onInputChange} />
              <label>₽</label>
            </div>
            <div className="title">
              <label>Скидка: </label>
              <Input
                name="discount"
                type="number"
                value={discount}
                onChange={onInputChange}
              />
              %
            </div>
            <div className="title">
              <label>Остаток: </label>
              <Input
                name="amount"
                type="number"
                value={amount}
                onChange={onInputChange}
              />
              <label>шт.</label>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <label>Описание</label>
        <textarea
          name="description"
          value={description}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};
export const ProductEditPage = styled(ProductEditPageContainer)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem;
  min-height: 30rem;
  border: 3px solid #2f9ca3;
  border-radius: 0.5rem;
  margin: 3rem 0;
  position: relative;

  & i {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer; /* Добавим курсор указывающий на то, что элемент можно нажать */
  }

  & .product-info {
    display: flex;
    gap: 3rem;
  }

  & .image-url {
    display: flex;
    flex-direction: column;
  }

  & .rows-column {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    flex-direction: column;
  }
  & .image-and-save-button {
    max-width: 250px;
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
  }
  & .image-and-save-button img {
    max-width: 250px;
    object-fit: cover;
  }
  & .title {
    display: flex;
    flex-direction: column;
  }
  & .price-and-discount-and-amount {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  & textarea {
    width: 100%;
    min-height: 8rem;
    margin: 1rem 0;
    padding: 0.5rem;
  }
`;
