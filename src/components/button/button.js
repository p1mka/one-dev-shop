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
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: ${({ margin = 0 }) => margin};
  padding: ${({ padding = "0.2rem 1rem;" }) => padding};
  gap: ${({ gap }) => (gap ? gap : "1rem")};
  border-radius: 0.25rem;
  border: none;
  background: ${({ disabled }) => (disabled ? "#2f9ca385" : "#2f9ca3")};
  color: white;
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
