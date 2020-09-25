import styled from "styled-components";

const StyledHorizontalLine = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: 1px;

  background: #fff;
`;

const HorizontalLine = ({ width }) => {
  return <StyledHorizontalLine width={width}></StyledHorizontalLine>;
};
export default HorizontalLine;
