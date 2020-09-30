import Head from 'next/head';

import styled from 'styled-components';

import Container from '../components/Layout/Container';

import Header from '../components/Layout/Header';

import Window from '../components/UI/Window';
import LobbyList from '../components/UI/Window/LobbyList';
import Chat from '../components/UI/Window/Chat';
import Online from '../components/UI/Window/Online';

import Background from '../components/UI/Background';
import VerticalLine from '../components/UI/VerticalLine';

const Lobby = () => {
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
              <LobbyList></LobbyList>

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
      </Container>
    </>
  );
};

export default Lobby;
