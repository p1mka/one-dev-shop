import { UserBar, Logo, Menu, Search } from "./components";
import styled from "styled-components";

export const HeaderContainer = ({ className }) => {
  return (
    <header className={className}>
      <div className="header-components">
        <Logo />
        <Menu />
        <Search />
        <UserBar />
      </div>
    </header>
  );
};

export const Header = styled(HeaderContainer)`
  height: 4.5rem;
  width: 100%;

  & .header-components {
    height: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0 10%;
  }
`;
