import { Routes, Route } from "react-router-dom";
import { DropDownMenu, Footer, Header, ModalWindow } from "./components";
import {
  Authorize,
  Cabinet,
  Cart,
  Main,
  Orders,
  Product,
  Registration,
} from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuVisible } from "./store/selectors";
import { useLayoutEffect } from "react";
import { getUserOrdersAsync, setUser } from "./store/actions";
import { updateCart } from "./store/actions/update-cart";
import { Order } from "./pages/cart/components";
import styled from "styled-components";
import { AdminPage, UserProfile } from "./pages/cabinet/components";

const AppColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Page = styled.div`
  display: flex;
  flex: 1 0 auto;
  padding: 0 10%;
  margin-top: 6rem;
`;

function Shop() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const currentUserJSON = sessionStorage.getItem("user");
    if (!currentUserJSON) {
      return;
    }

    const userData = JSON.parse(currentUserJSON);
    dispatch(setUser(userData));
    dispatch(getUserOrdersAsync());
  }, [dispatch]);

  useLayoutEffect(() => {
    const cartJSON = localStorage.getItem("cart");
    if (!cartJSON) {
      return;
    }
    const cart = JSON.parse(cartJSON);
    dispatch(updateCart(cart));
  }, [dispatch]);

  const isMenuVisible = useSelector(selectIsMenuVisible);

  return (
    <AppColumn>
      <Header />
      {isMenuVisible && <DropDownMenu />}

      <Page>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<ModalWindow />}>
              <Route path="authorize" element={<Authorize />} />
              <Route path="registration" element={<Registration />} />
            </Route>
          </Route>
          <Route path="/products" element={<div>Продукты</div>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />}>
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="/orders" element={<Orders />} />
          <Route path="/cabinet" element={<Cabinet />}>
            <Route path="my-orders" element={<Orders />} />
            <Route path="my-profile" element={<UserProfile />} />
            <Route path="administrate" element={<AdminPage />} />
          </Route>
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  );
}

export default Shop;
