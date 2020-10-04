import Head from 'next/head';

import styled from 'styled-components';

import Container from '../components/Layout/Container';

import Header from '../components/Layout/Header';

import Window from '../components/UI/Window';
import Rooms from '../components/UI/Window/Rooms';
import Chat from '../components/UI/Window/Chat';
import Online from '../components/UI/Window/Online';

import Background from '../components/UI/Background';
import VerticalLine from '../components/UI/VerticalLine';

import ModalInput from '../components/UI/ModalInput';
import Backdrop from '../components/UI/Backdrop';

export default function Home() {
  return (
    <>
      <Background url={'images/background-mainmenu.jpg'}></Background>
      <ModalInput></ModalInput>
      <Backdrop></Backdrop>
      <Head>
        <title>Game Lobby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header currentRoute="MAIN MENU"></Header>
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
              <Rooms />

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
}
