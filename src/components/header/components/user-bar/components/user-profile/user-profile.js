import { Link } from "react-router-dom";
import { Button, Icon } from "../../../../../../components";
import styled from "styled-components";

const UserProfileContainer = ({ className }) => {
  const userName = "Гость";

  return (
    <div className={className}>
      <Icon id="la-user-circle" size="40px" />
      <div className="authorize-block">
        {userName}
        <Link to="/authorize">
          <Button includeIcon={false}>Вход</Button>
        </Link>
      </div>
    </div>
  );
};

export const UserProfile = styled(UserProfileContainer)`
  display: flex;
  align-items: center;
  margin-left: 10%;
  font-weight: bold;

  & a {
    text-decoration: none;
  }

  & .authorize-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
