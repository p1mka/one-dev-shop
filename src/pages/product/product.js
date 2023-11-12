/*TODO review ref, loader for reviews  */
import { useLayoutEffect, useState } from "react";
import { Button, Loader, ProductPrice, Rating } from "../../components";
import { Link, useMatch, useParams } from "react-router-dom";
import { getWordForm, request } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  selectProducts,
  selectProductsInCart,
} from "../../store/selectors";
import {
  removeProductFromCart,
  setCart,
  setProduct,
} from "../../store/actions";
import { Reviews } from "./components/reviews/reviews";
import { ProductsCard } from "../main/components";
import styled from "styled-components";

const ProductContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const match = useMatch(`product/${params.id}`);

  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    setIsLoading(true);
    request(`/products/${params.id}`)
      .then(({ error, data }) => {
        dispatch(setProduct(data));
      })
      .finally(() => setIsLoading(false));
  }, [params.id, dispatch]);

  const product = useSelector(selectProduct);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectProductsInCart);

  const {
    id: productId,
    title,
    description,
    price,
    rating,
    discount,
    img,
    reviews,
  } = product;

  const isInCart = cart.find((product) => product.id === productId);

  const onAddProductInCart = () => {
    dispatch(
      setCart({
        id: productId,
        img,
        discount,
        title,
        price,
        rating,
      })
    );
  };
  const onRemoveProductFromCart = () => {
    console.log(productId);
    dispatch(removeProductFromCart(productId));
  };

  return isLoading ? (
    <Loader />
  ) : match ? (
    <div className={className}>
      <div className="img-and-product-info">
        <img src={img} alt={"Картинка в пути..."} />
        {discount > 0 && <div className="discount-block">-{discount}%</div>}
        <div className="product-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <ProductPrice price={price} discount={discount} color="#eb4aae" />
          <Button
            onClick={isInCart ? onRemoveProductFromCart : onAddProductInCart}
            iconId={isInCart ? "la-cart-arrow-down" : "la-cart-plus"}
            iconSize="34px"
            background={isInCart ? "#EB4AAE" : "#2f9ca3"}
            width="10em"
            fontSize="18px"
          >
            {isInCart ? "В корзине!" : "В корзину"}
          </Button>
          <div className="rating">
            Рейтинг: <Rating value={rating} /> ({reviews.length}{" "}
            {getWordForm(reviews.length, "отзыв", "отзыва", "отзывов")})
          </div>
        </div>
      </div>
      <ProductsCard products={products} header="Похожие товары" />
      <Reviews reviews={reviews} productId={productId} />
    </div>
  ) : (
    <div className={className}>
      <div className="product-image">
        <Link to={`/product/${productId}`}>
          <img src={img} alt="Картинка в пути..." />
        </Link>
        {discount > 0 && <div className="discount-block">-{discount}%</div>}
      </div>
      <div className="product-content">
        <ProductPrice price={price} discount={discount} />
        <div className="product-info-and-button">
          <div className="title">
            <Link to={`/product/${productId}`}>{title}</Link>
          </div>
          <div>
            <Rating value={rating} />
            <Button
              onClick={isInCart ? onRemoveProductFromCart : onAddProductInCart}
              iconId={isInCart ? "la-cart-arrow-down" : "la-cart-plus"}
              iconSize="34px"
              background={isInCart ? "#EB4AAE" : "#fff"}
              color={isInCart ? "#fff" : "#000"}
              width="10em"
              fontSize="18px"
            >
              {isInCart ? "В корзине!" : "В корзину"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Product = styled(ProductContainer)`
  font-family: rubik;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);
  gap: 0.5rem;

  & .img-and-product-info {
    display: flex;
    position: relative;
  }
  & .discount-block {
    position: absolute;
    bottom: 1rem;
    left: 0.5rem;
    z-index: 100;
    display: flex;
    max-width: 3rem;
    border-radius: 0.25rem;
    background: #eb4aae;
    color: white;
    font-weight: 600;
    font-size: 20px;
    padding: 0.25rem 0.5rem;
  }
  & .product-info {
    padding: 1rem;
  }
  & .product-price {
    display: flex;
    justify-content: flex-start;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 150%;
    text-align: center;
    color: #eb4aae;
    font-size: 28px;
  }

  & .old-price {
    display: flex;
    text-decoration: line-through solid #2f9ca3;
    margin: 0 0 0 0.5rem;
    font-size: 0.9rem;
    color: #0000008c;
  }
  & .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & img {
    width: 30%;
  }
`;
