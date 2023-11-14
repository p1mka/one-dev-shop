import { useState } from "react";
import { Button } from "../../../../components";
import { ProductsPage, UsersPage } from "./components";
import styled from "styled-components";

const AdminPageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Sidebar = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: 200px;
  background-color: #f3f3f3;
  padding: 1rem 1rem;
  transition: width 0.3s ease;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 20px;
  border-left: 2px solid #2f9ca3;
  min-height: 10rem;
`;

export const AdminPage = () => {
  const [selectedPage, setSelectedPage] = useState("products");
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const onSideBarOpen = () => setSidebarIsOpen(!sidebarIsOpen);

  const onPageChange = (page) => {
    setSelectedPage(page);
    setSidebarIsOpen(false);
  };

  return (
    <AdminPageContainer>
      <Sidebar style={{ width: sidebarIsOpen ? 200 : 30 }}>
        <Button
          iconId={sidebarIsOpen ? "la-angle-double-left" : "la-bars"}
          iconSize="18px"
          onClick={onSideBarOpen}
        />
        {sidebarIsOpen && (
          <>
            <Button
              background="#fff"
              color="#000"
              includeIcon={false}
              onClick={() => onPageChange("products")}
            >
              Все товары
            </Button>
            <Button
              background="#fff"
              color="#000"
              includeIcon={false}
              onClick={() => onPageChange("users")}
            >
              Пользователи
            </Button>
            <Button
              background="#fff"
              color="#000"
              includeIcon={false}
              onClick={() => onPageChange("orders")}
            >
              Заказы
            </Button>
          </>
        )}
      </Sidebar>
      <Content>
        {selectedPage === "products" && <ProductsPage />}
        {selectedPage === "users" && <UsersPage />}
      </Content>
    </AdminPageContainer>
  );
};
