import styled from "styled-components";

const StyledContainer = styled.div`
  display: block;

  width: 1300px;

  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default Container;
