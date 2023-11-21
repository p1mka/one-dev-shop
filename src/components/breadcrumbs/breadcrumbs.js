import { useLocation, Link } from "react-router-dom";
import { Icon } from "../icon/icon";
import styled from "styled-components";

const BreadcrumbsContainer = ({ className }) => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    location.pathname !== "/" && (
      <div className={className}>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={pathname}>
              {!isLast && " Главная "}
              {/* <Icon id="la-arrow-right" /> */}
              <Link to={routeTo}>
                {pathname === "orders"
                  ? "Заказы"
                  : pathname === "product"
                  ? "Товар"
                  : pathname === "cart"
                  ? "Корзина"
                  : pathname === "cabinet"
                  ? "Кабинет пользователя"
                  : pathname === "my-profile"
                  ? "Мой профиль"
                  : pathname === "my-orders"
                  ? "Мои заказы"
                  : pathname === "administrate"
                  ? "Панель администратора"
                  : pathname === "categories"
                  ? "Категории"
                  : pathname === "authorize"
                  ? "Авторизация"
                  : pathname === "registration"
                  ? "Регистрация"
                  : pathname}
              </Link>{" "}
              <Icon id="la-arrow-right" />
            </span>
          );
        })}
      </div>
    )
  );
};

export const Breadcrumbs = styled(BreadcrumbsContainer)`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 6rem;
  font-family: rubik;

  & span {
    border-radius: 0.5rem;
    background: #fff;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
