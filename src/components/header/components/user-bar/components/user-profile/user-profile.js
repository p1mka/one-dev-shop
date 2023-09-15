import { Icon } from "../../../../../../components";
import styled from "styled-components";
const UserProfileContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="elements-row">
        <Icon id="la-user-circle" size="40px" />
        <span>Имя пользователя</span>
      </div>
    </div>
  );
};

export const UserProfile = styled(UserProfileContainer)`
  display: flex;
  align-items: center;

  margin-left: 10%;

  & .elements-row > span {
    font-size: 14px;
  }
  & .elements-row {
    display: flex;
    align-items: center;
  }
`;
