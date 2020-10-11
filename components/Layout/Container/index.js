import styled from 'styled-components';

const StyledContainer = styled.div`
  display: block;

  width: ${({ width }) => (width ? width : '1300px')};

  width: 80%;
  @media (min-width: 1350px) {
    width: 1200px;
  }
  @media (max-width: 1350px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 800px) {
    width: 485px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }

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
