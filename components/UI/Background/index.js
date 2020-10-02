import styled from 'styled-components';

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;

  background: url('${({ url }) => url}') ${({ color }) => color} no-repeat
    center;
  background-size: cover;
`;

const Background = ({ children, style, url, color }) => {
  return <StyledBackground url={url} color={color}></StyledBackground>;
};

export default Background;
