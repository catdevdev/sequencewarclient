import styled from 'styled-components';

const StyledWindow = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  margin-top: 24px;
  border: solid 3px #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px 7px rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.6);

  @media (min-width: 801px) {
    display: none;
  }
`;

const Window = ({ style, children }) => {
  return <StyledWindow style={style}>{children}</StyledWindow>;
};

export default Window;
