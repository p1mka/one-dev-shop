import styled from "styled-components";
import { Icon } from "../../../icon/icon";

const MenuContainer = ({ className }) => {
  return (
    <div className={className}>
      <button>
        <Icon id="la-bars" size="24px" />
        Каталог
      </button>
    </div>
  );
};

export const Menu = styled(MenuContainer)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 15%;
  margin-right: 1%;
  & button {
    width: 8rem;
    display: flex;
    padding: 0.2rem;
    align-items: center;
    gap: 1rem;
    border-radius: 0.25rem;
    border: none;
    background: #2f9ca3;
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
`;
