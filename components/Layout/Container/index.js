import styled from 'styled-components';

const StyledContainer = styled.div`
  display: block;

  width: ${({ width }) => (width ? width : '1300px')};

  margin: 0 auto;
`;

const Container = ({ children, width, style }) => {
  return (
    <StyledContainer style={style} width={width}>
      {children}
    </StyledContainer>
  );
};
export default Container;
