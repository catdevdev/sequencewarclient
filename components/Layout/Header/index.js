import Container from '../Container';
import MarginBlock from '../MarginBlock';

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LeftContainer = styled.div``;

const Header = ({ currentRoute }) => {
  return (
    <Container>
      <MarginBlock height="45px"></MarginBlock>
      <StyledHeader>
        <LeftContainer>
          <h1 style={{ fontSize: '16px', fontWeight: '400' }}>Sequilize War</h1>
          <p style={{ fontSize: '16px', fontWeight: '700' }}>LIVE</p>
        </LeftContainer>
        <p style={{ fontSize: '22px', fontWeight: '400' }}>{currentRoute}</p>
      </StyledHeader>
    </Container>
  );
};

export default Header;
