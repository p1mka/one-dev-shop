import styled from "styled-components";
import { Icon } from "../../../../../../components";

const UserToolsContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="elements-column">
        <Icon id="la-heart" size="24px" fill={true} />

        <span>Избранное</span>
      </div>
      <div className="elements-column">
        <Icon id="la-handshake" size="24px" />
        <span>Заказы</span>
      </div>
      <div className="elements-column">
        <Icon id="la-shopping-cart" size="24px" />
        <span>Корзина</span>
      </div>
    </div>
  );
};

export const UserTools = styled(UserToolsContainer)`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  & .elements-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .elements-column > span {
    font-size: 12px;
  }
`;
