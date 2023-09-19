import styled from "styled-components";
import { Icon } from "../../../icon/icon";

const SearchContainer = ({ className }) => {
  return (
    <div className={className}>
      <input placeholder="Поиск по названию"></input>
      <Icon id="la-search" size="24px" margin="0 0.2rem 0 0" rotate="true" />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  align-items: center;
  border: 2px solid #2f9ca3;
  border-radius: 0.25rem;
  width: 30%;
  & input {
    width: 90%;
    border: none;
    padding: 0.5rem;
    background: #fff;
  }
`;
