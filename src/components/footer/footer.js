import styled from "styled-components";
import { Contacts, ShopInfo, Weather } from "./components";

export const FooterContainer = ({ className }) => {
  return (
    <footer className={className}>
      <Weather />
      <ShopInfo />
      <Contacts />
    </footer>
  );
};

export const Footer = styled(FooterContainer)`
  height: 4.5rem;
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 10%;
  box-shadow: 0px -3px 7px 0px rgba(0, 0, 0, 0.25);
`;
