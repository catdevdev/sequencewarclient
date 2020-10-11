import styled from 'styled-components';

import Header from '../Header';
import Records from '../Records';

const dataPrimary = [
  {
    data: 'Players',
    center: true,
    color: '#ffc700',
  },
  {
    data: 'Mode',
    color: '#ffc700',
  },
  {
    data: 'User',
    color: '#ffc700',
  },
  {
    data: 'Message',
    color: '#ffc700',
  },
  {
    data: 'test',
    color: '#ffc700',
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
      color: '#00ffc2',
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
      color: '#eb00ff',
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
      color: '#00ffc2',
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
      data:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci corrupti totam recusandae harum nostrum omnis alias ea necessitatibus aspernatur natus. Enim excepturi esse, quisquam minus nostrum illum corporis quibusdam. Veritatis eveniet facilis ipsam ex officia iste minus eius ab nihil exercitationem et quam laborum, inventore, ipsa dolorum rerum maiores deserunt.',
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

const StyledRooms = styled.div`
  width: 100%;
  
  border-bottom: 1px solid #fff;

  /* overflow: auto; */
`;

const Rooms = () => {
  return (
    <StyledRooms>

      <Records dataPrimary={dataPrimary} rowsData={rowsData} />
    </StyledRooms>
  );
};

export default Rooms;
