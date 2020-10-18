/* imports */
import Head from 'next/head';
import styled from 'styled-components';
/* components */
import Container from '../components/Layout/Container';
import Header from '../components/Layout/Header';
import Window from '../components/UI/Window';
import WindowHeader from '../components/UI/Window/Header';
import LobbyList from '../components/UI/Window/LobbyList';
import Chat from '../components/UI/Window/Chat';
import Online from '../components/UI/Window/Online';
import MobileWindow from '../components/UI/Mobile/Window';
import MobileLobbyList from '../components/UI/Mobile/Window/LobbyList';
import MobileChat from '../components/UI/Mobile/Chat';
import SettingsSpaceShip from '../components/UI/Mobile/Window/SettingsSpaceShip';
import Background from '../components/UI/Background';
import VerticalLine from '../components/UI/VerticalLine';
import Button from '../components/UI/Button';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
// import {
//   showModalSettingsSpaceShip,
//   showModalSettingsRoom,
// } from '../../../../redux/actions/Modals';

// import { addMessage } from '../../../../redux/actions/Chat';

const dataPrimary = [
  {
    data: 'Username',
    center: true,
  },
  {
    data: 'Color',
  },
  {
    data: 'Team',
    center: true,
  },
  {
    data: 'Figure',
  },
];

const rowsData = [
  [
    {
      data: 'catdev',
      color: 'green',
      center: true,
    },
    {
      colorBlock: 'green',
    },
    {
      data: '#1',
      center: true,
    },
    {
      colorSpaceship: 'rgb(0,255,0)',
    },
  ],
];

const Lobby = () => {
  // {
  //   "user": {
  //     "userName": "фыаыфва",
  //     "userColor": "#00fff3"
  //   },
  //   "team": 1,
  //   "colorSpaceship": "green"
  // }

  const usersInRoom = useSelector((state) => state.room.usersInRoom);

  const rowsData = usersInRoom.map(
    ({ user: { userName, userColor }, team, colorSpaceship }) => [
      {
        data: userName,
        color: userColor,
        center: true,
      },
      { colorBlock: colorSpaceship },
      {
        data: team,
        center: true,
      },
      {
        colorSpaceship,
        center: true,
      },
    ]
  );
  return (
    <>
      <Background url={'images/background-lobby.jpg'}></Background>
      <Head>
        <title>Game Lobby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header currentRoute="LOBBY"></Header>
      <Container>
        <Window>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <div
              style={{
                width: '75%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <LobbyList dataPrimary={dataPrimary} rowsData={rowsData} />

              <Chat></Chat>
            </div>
            <div
              style={{
                width: '25%',

                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Online></Online>
            </div>
          </div>
        </Window>
        <MobileWindow>
          <WindowHeader>
            <p
              style={{
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Заходите все сюда!!!!! Noobs only!
            </p>
          </WindowHeader>
          <Button style={{ width: '90%', margin: '10px auto' }}>
            wait for the game to start
          </Button>
          <Button style={{ width: '90%', margin: '10px auto' }}>
            settings
          </Button>
          <Button style={{ width: '90%', margin: '10px auto' }}>
            START GAME
          </Button>
          <SettingsSpaceShip></SettingsSpaceShip>
          <MobileLobbyList dataPrimary={dataPrimary} rowsData={rowsData} />
        </MobileWindow>
      </Container>
    </>
  );
};

export default Lobby;
