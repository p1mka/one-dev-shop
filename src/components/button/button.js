import { Icon } from "../icon/icon";
import styled from "styled-components";

const ButtonContainer = ({
  className,
  children,
  includeIcon = true,
  iconId,
  iconSize = "24px",
  ...props
}) => (
  <button className={className} {...props}>
    {includeIcon ? <Icon id={iconId} size={iconSize} /> : null}
    {children}
  </button>
);

export const Button = styled(ButtonContainer)`
  width: ${({ width }) => width};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin = "0" }) => margin};
  padding: ${({ padding = "0.2rem 1rem;" }) => padding};
  gap: ${({ gap }) => (gap ? gap : "1rem")};
  border-radius: 0.25rem;
  border: ${({ border = "none" }) => border};
  background: ${({ disabled, background }) =>
    disabled ? "#2f9ca385" : background ? background : "#2f9ca3"};
  color: ${({ color = "white" }) => color};
  font-size: ${({ fontSize = "14px" }) => fontSize};
  font-weight: ${({ bold, fontWeight = "400" }) =>
    bold ? "bold" : fontWeight};
`;
