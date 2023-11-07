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
  <button type="button" className={className} {...props}>
    {includeIcon ? <Icon id={iconId} size={iconSize} /> : null}
    {children}
  </button>
);

export const Button = styled(ButtonContainer)`
  font-family: rubik;
  width: ${({ width }) => width};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin = "0" }) => margin};
  padding: ${({ padding = "0.2rem 1rem;" }) => padding};
  gap: ${({ gap }) => (gap ? gap : "1rem")};
  border-radius: 0.25rem;
  border: ${({ border = "1px solid #2f9ca3" }) => border};
  background: ${({ disabled, background }) =>
    disabled ? "#2f9ca385" : background ? background : "#2f9ca3"};
  color: ${({ color = "white" }) => color};
  font-size: ${({ fontSize = "14px" }) => fontSize};
  font-weight: ${({ bold, fontWeight = "400" }) =>
    bold ? "bold" : fontWeight};

  &:hover {
    background: ${({ nohover, disabled }) =>
      nohover ? "default" : disabled ? "default" : "#eb4aae"};
    color: ${({ nohover, disabled }) =>
      nohover ? "default" : disabled ? "default" : "#000"};
    border: ${({ nohover, disabled }) =>
      nohover || disabled ? "default" : "1px solid #eb4aae"};
  }
`;
