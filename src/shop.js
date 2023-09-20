import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { Authorize, Registration } from "./pages";
import styled from "styled-components";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Page = styled.div`
  display: flex;
  flex: 1 0 auto;
  padding: 1% 10%;
`;

function Shop() {
  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/authorize" element={<Authorize />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  );
}

export default Shop;
