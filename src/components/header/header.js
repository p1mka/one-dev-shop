import { UserBar, Logo, Menu, Search } from "./components";
import styled from "styled-components";

export const HeaderContainer = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <Menu />
      <Search />
      <UserBar />
    </header>
  );
};

export const Header = styled(HeaderContainer)`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 1rem 10%;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);
`;
