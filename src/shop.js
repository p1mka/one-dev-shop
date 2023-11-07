import { Routes, Route } from "react-router-dom";
import { DropDownMenu, Footer, Header, ModalWindow } from "./components";
import { Authorize, Main, Registration } from "./pages";
import { Product } from "./pages/product/product";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuVisible } from "./store/selectors";
import { useLayoutEffect } from "react";
import styled from "styled-components";
import { setUser } from "./store/actions";

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
  padding: 3rem 10%;
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
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  );
}

export default Shop;
