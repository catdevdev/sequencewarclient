import styled from 'styled-components';

import Header from './Header';
import Rooms from './Rooms';
import VerticalLine from '../VerticalLine';
import Online from './Online';
import HorizontalLine from '../HorizontalLine';
import Chat from './Chat';

const StyledWindow = styled.div`
  position: relative;

  width: 100%;
  height: 700px;

  margin-top: 10px;

  border: solid 3px #fff;
  border-radius: 5px;

  box-shadow: 0 0 15px 7px rgba(255, 255, 255, 0.15);

  background: rgba(0, 0, 0, 0.6);

  @media (max-width: 800px) {
    display: none;
  }
`;

const Window = ({ style, children }) => {
  return <StyledWindow style={style}>{children}</StyledWindow>;
};

export default Window;
