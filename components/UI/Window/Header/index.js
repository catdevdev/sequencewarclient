import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 45px;

  background: rgb(66, 255, 0, 0.6);

  display: flex;
  align-items: center;
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
