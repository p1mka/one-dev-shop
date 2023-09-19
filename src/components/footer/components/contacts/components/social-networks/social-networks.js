import styled from "styled-components";
import { Icon } from "../../../../../icon/icon";

const SocialNetworksContainer = ({ className }) => {
  return (
    <div className={className}>
      <Icon id="la-telegram" size="26px" social="true" />
      <Icon id="la-instagram" size="30px" social="true" />
      <Icon id="la-vk" size="30px" social="true" />
    </div>
  );
};

export const SocialNetworks = styled(SocialNetworksContainer)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
