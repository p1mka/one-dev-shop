import { forwardRef } from "react";
import styled from "styled-components";

const InputContainer = forwardRef(({ className, children, ...props }, ref) => (
  <input className={className} {...props} ref={ref}>
    {children}
  </input>
));

export const Input = styled(InputContainer)`
  height: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #2f9ca3;
  border-radius: 0.25rem;
  box-shadow: 0px 3px 10px 0px rgba(112, 192, 91, 0.2);
  font-size: 18px;
`;
