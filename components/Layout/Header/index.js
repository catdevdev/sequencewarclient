import Container from "../Container";

import styled from "styled-components";

const StyledHeader = styled.header``;

const LeftContainer = styled.div``;

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <LeftContainer>
          <h1 style={{ fontSize: "16px", fontWeight: "400" }}>Sequilize War</h1>
          <p style={{ fontSize: "16px", fontWeight: "700" }}>LIVE</p>
        </LeftContainer>
      </StyledHeader>
    </Container>
  );
};

export default Header;
