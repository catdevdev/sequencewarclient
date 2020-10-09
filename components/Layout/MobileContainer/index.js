import styled from 'styled-components';

const StyledMobileContainer = styled.div`
  margin: 0 auto;

  width: 100%;

  @media (max-width: 800px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const MobileContainer = ({ children, width, style }) => {
  return (
    <StyledMobileContainer style={style} width={width}>
      {children}
    </StyledMobileContainer>
  );
};
export default MobileContainer;
