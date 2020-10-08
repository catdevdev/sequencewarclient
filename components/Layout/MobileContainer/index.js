import styled from 'styled-components';

const StyledMobileContainer = styled.div`
  width: 100%;
`;

const MobileContainer = ({ children, width, style }) => {
  return (
    <StyledMobileContainer style={style} width={width}>
      {children}
    </StyledMobileContainer>
  );
};
export default MobileContainer;
