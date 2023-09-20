import styled from "styled-components";
import { Button } from "../../../../components";

const MenuContainer = ({ className }) => {
  return (
    <div className={className}>
      <Button bold="true" iconId="la-bars">
        Каталог
      </Button>
    </div>
  );
};

export const Menu = styled(MenuContainer)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 15%;
  margin-right: 1%;
`;
