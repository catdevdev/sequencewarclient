import styled from "styled-components";

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  background: url("${({ url }) => url}") no-repeat center;
  background-size: cover;
`;

const Background = ({ children, style, url }) => {
  return <StyledBackground url={url}></StyledBackground>;
};

export default Background;
