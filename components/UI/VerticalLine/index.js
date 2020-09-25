import styled from "styled-components";

const StyledVerticalLine = styled.div`
  width: 1px;
  height: ${({ height }) => (height ? height : "100%")};
  background: #fff;
`;

const VerticalLine = ({ height }) => {
  return <StyledVerticalLine height={height}></StyledVerticalLine>;
};
export default VerticalLine;
