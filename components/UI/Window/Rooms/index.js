import styled from 'styled-components';
import Container from '../../../Layout/Container';

import Header from '../Header';
import Table from '../Table';

import MarginBlock from '../../../Layout/MarginBlock';

import { useRouter } from 'next/router';

const StyledRooms = styled.div`
  position: relative;

  width: 100%;
  height: 60%;
  border-bottom: 1px solid #fff;

  /* overflow: auto; */
`;

const Button = styled.button`
  position: absolute;
  right: 28px;
  bottom: 22px;

  background: rgba(255, 255, 255, 0.1);

  width: 200px;
  height: 45px;
  border: 2px solid #ffffff;
  border-radius: 8px;

  text-transform: uppercase;
  font-size: 16px;
`;

const Rooms = ({}) => {
  const dataPrimary = [
    {
      data: 'Players',
      center: true,
    },
    {
      data: 'Mode',
    },
    {
      data: 'User',
    },
    {
      data: 'Message',
    },
    {
      data: 'test',
    },
  ];

  const rowsData = [
    [
      {
        data: '1/20',
        center: true,
      },
      {
        data: 'Infinity waves',
      },
      {
        data: 'CATDEV',
      },
      {
        data: 'Заходите все сюда!!!!! Noobs only!',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
    [
      {
        data: '1/∞',
        center: true,
      },
      {
        data: 'Scores',
      },
      {
        data: 'Ania33',
      },
      {
        data: 'Go 500 players',
      },
      {
        button: true,
        data: 'Join',
        center: true,
      },
    ],
  ];

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
          ACTIVE GAMES (4)
        </p>
      </Header>
      <Container width="80%">
        <Table
          widthCells={[15, 20, 10, 45, 5]}
          dataPrimary={dataPrimary}
          rowsData={rowsData}
        />
      </Container>
      <Button
        onClick={() => {
          router.push('/lobby');
        }}
      >
        Create new game
      </Button>
    </StyledRooms>
  );
};

export default Rooms;
