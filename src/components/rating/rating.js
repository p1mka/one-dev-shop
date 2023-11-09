import styled from "styled-components";
import { Icon } from "../icon/icon";

const RatingContainer = ({ className, value, onChange }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Icon
        key={i}
        id={`la-star  ${i <= value ? "las" : "filled"}`}
        color="#EB4AAE"
        onClick={() => (onChange ? onChange(i) : null)}
      />
    );
  }

  return <div className={className}>{stars}</div>;
};

export const Rating = styled(RatingContainer)`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  & .filled {
    color: gray;
  }
  & .filled:hover {
    // color: #eb4aae;
    cursor: ${({ onChange }) => (onChange ? "pointer" : "default")};
  }
`;
