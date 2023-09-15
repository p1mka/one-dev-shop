import styled from "styled-components";

const IconContainer = ({ className, id, fill = false, ...props }) => {
  const iconFill = fill ? "lar" : "las";
  return (
    <div className={className} {...props}>
      <i className={`${iconFill} ${id}`} />
    </div>
  );
};

export const Icon = styled(IconContainer)`
  font-size: ${({ size = "20px" }) => size};
  margin: ${({ margin = "0" }) => margin};
  color: ${({ color }) => color};
  transform: ${({ rotate }) => (rotate ? "rotate(270deg" : null)});

  & hover {
    cursor: pointer;
  }
`;
