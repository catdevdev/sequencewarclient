import styled from 'styled-components';
// import Container from '../../../Layout/Container';
import Header from '../Header';
import Table from '../Table';

import { useRouter } from 'next/router';

import MarginBlock from '../../../Layout/MarginBlock';

const StyledRooms = styled.div`
  position: relative;

  width: 100%;
  height: 60%;
  border-bottom: 1px solid #fff;
`;

const Button = styled.button`
  position: absolute;

  background: rgba(255, 255, 255, 0.1);

  width: 200px;
  height: 45px;
  border: 2px solid #ffffff;
  border-radius: 8px;

  text-transform: uppercase;
  font-size: 16px;
`;

const LobbyListContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  @media (max-width: 1350px) {
    width: 90%;
  }
`;

const SettingsSpaceshipContainer = styled.div``;

const Rooms = ({ dataPrimary, rowsData }) => {
  const router = useRouter();

  return (
    <StyledRooms>
      <Header>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '2px',
            marginLeft: '22px',
          }}
        >
          NEW GAME
        </p>
      </Header>
      <LobbyListContainer>        
        <Table
          lineEveryRow
          widthCells={[20, 20, 20, 35]}
          dataPrimary={dataPrimary}
          rowsData={rowsData}
        />
      </LobbyListContainer>
      <Button
        onClick={() => {
          router.push('/');
        }}
        style={{
          width: '100px',
          left: '28px',
          bottom: '22px',
        }}
      >
        Leave
      </Button>
      <Button
        onClick={() => {
          router.push('/lobby');
        }}
        style={{
          right: '28px',
          bottom: '22px',
        }}
      >
        Create new game
      </Button>
    </StyledRooms>
  );
};

export default Rooms;
