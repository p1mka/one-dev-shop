import { Button } from "../../../../components";
import { useState } from "react";
import styled from "styled-components";

const MenuContainer = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onMenuClick = () => setIsVisible(!isVisible);
  return (
    <div className={className}>
      <Button bold="true" iconId="la-bars" onClick={onMenuClick}>
        Каталог
      </Button>
      {isVisible && (
        <div className="dropdown-block">МенюМенюМенюМенюМенюМеню</div>
      )}
    </div>
  );
};

export const Menu = styled(MenuContainer)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 15%;
  margin-right: 1%;

  & .dropdown-block {
    position: absolute;
    top: 2rem;
    left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 200px;
    overflow: hidden;
    height: auto;
    background: red;
  }
`;
