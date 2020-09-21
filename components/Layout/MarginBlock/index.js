import styled from "styled-components";

const StyledMarginBlock = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100px")};
`;

const MarginBlock = ({ width, height }) => {
  return <StyledMarginBlock width={width} height={height} />;
};

export default MarginBlock;
