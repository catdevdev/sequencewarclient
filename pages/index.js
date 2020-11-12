/* import */
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
/* UI */
import Container from '../components/Layout/Container'
import Header from '../components/Layout/Header'

/* components */
/* 0 */
import Window from '../components/UI/Window'
import WindowHeader from '../components/UI/Window/Header'
import Rooms from '../components/UI/Window/Rooms'
import Chat from '../components/UI/Window/Chat'
import Online from '../components/UI/Window/Online'
import Button from '../components/UI/Button'
/* 1 */
import MobileWindow from '../components/UI/Mobile/Window'
import MobileRooms from '../components/UI/Mobile/Window/Rooms'
import MobileChat from '../components/UI/Mobile/Chat'
/* 2 */
import Background from '../components/UI/Background'
import VerticalLine from '../components/UI/VerticalLine'
// import ModalInput from '../components/UI/ModalInput';
import Backdrop from '../components/UI/Backdrop'
/* socket */
import { socket } from '../components/Socket'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Background url={'images/background-mainmenu.jpg'}></Background>

      {/* <ModalInput message="Enter your nickname" submitText="Enter" /> ÷ */}
      {/* <MobileChat></MobileChat> */}

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
        <MobileWindow>
          <WindowHeader>
            <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: 1 }}>
              ACTIVE GAMES (4)
            </p>
          </WindowHeader>
          <div>
            <Button
              onClick={() => {
                socket.emit('createRoom')
              }}
              style={{ width: '80%', margin: '30px auto' }}
            >
              Create new game
            </Button>
          </div>
          <MobileRooms />
        </MobileWindow>
      </Container>
    </>
  )
}
