import styled from "styled-components";

const { useDispatch } = require("react-redux");
const { ProductPrice, Button } = require("../../../../components");
const {
  removeProductFromCart,
  increaseProductCount,
  decreaseProductCount,
} = require("../../../../store/actions");

const ProductsTableContainer = ({
  className,
  productId,
  price,
  discount,
  title,
  img,
  productCount,
}) => {
  const dispatch = useDispatch();

  const increaseCount = () => dispatch(increaseProductCount(productId));
  const decreaseCount = () => dispatch(decreaseProductCount(productId));

  const onDeleteButtonClick = () => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <tr className={className}>
      <td>
        <img className="product-image" src={img} alt=""></img>
      </td>
      <td className="product-title">
        <span>{title}</span>
      </td>
      <td>
        <ProductPrice
          price={price}
          discount={discount}
          fontSize="18px"
          color="#eb4aae"
        />
      </td>

      <td>
        <div className="product-count">
          <Button
            iconId="la-minus"
            iconSize="14px"
            onClick={decreaseCount}
            disabled={productCount === 1}
          />
          {productCount} шт
          <Button iconId="la-plus" iconSize="14px" onClick={increaseCount} />
        </div>
      </td>

      <td className="navigation">
        <Button
          onClick={onDeleteButtonClick}
          iconId="la-trash-alt"
          iconSize="24px"
          padding="0"
        />
      </td>
    </tr>
  );
};

export const ProductsTable = styled(ProductsTableContainer)`
  & tr {
    margin: 10rem;
  }

  & .product-image {
    display: flex;
    margin: 0 auto;
    object-fit: cover;
    max-width: 100px;
    max-height: 100px;
  }

  & .product-title {
    padding: 0 0 0 2rem;
    max-width: 10rem;
  }
  & .product-count {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  & .navigation {
    width: 15%;
    text-align: -webkit-center;
  }
`;
