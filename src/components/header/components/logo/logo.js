import styled from "styled-components";

const LogoContainer = ({ className }) => {
  return (
    <div className={className}>
      <h1>ODS</h1>
      <h4>one developer shop</h4>
    </div>
  );
};

export const Logo = styled(LogoContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15%;

  & h1 {
    margin: 0;
    color: #414141;
    text-align: center;
    text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 95%;
  }

  & h4 {
    margin: 0;
    color: #000;
    text-align: center;
    font-size: 0.7rem;
    font-style: normal;
    line-height: 0%;
    text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
  }
`;
