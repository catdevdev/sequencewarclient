import styled from 'styled-components';

import Header from '../Header';
import Records from '../Records';

const StyledLobbyList = styled.div`
  width: 100%;

  border-bottom: 1px solid #fff;

  /* overflow: auto; */
`;

const LobbyList = ({ dataPrimary, rowsData }) => {
  return (
    <StyledLobbyList>
      <Records dataPrimary={dataPrimary} rowsData={rowsData}></Records>
    </StyledLobbyList>
  );
};

export default LobbyList;
