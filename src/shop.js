import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import styled from "styled-components";

const AppColumn = styled.div``;

const Page = styled.div`
  padding: 5% 10%;
  border: 1px solid black;
`;

function Shop() {
  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>Главная</div>
                <div>Главная</div>
                <div>Главная</div>
                <div>Главная</div>
                <div>Главная</div>
                <div>Главная</div>
                <div>Главная</div>Главная
              </div>
            }
          />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Page>
    </AppColumn>
  );
}

export default Shop;
