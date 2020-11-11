/* imports */
import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import ReactNipple from 'react-nipple'
/* components */
import Background from '../components/UI/Background'
import Bar from '../components/UI/Joystick/Bar'
import LoadingStatusBar from '../components/UI/Joystick/LoadingStatusBar'
/* redux */
import { useSelector, useDispatch } from 'react-redux'

const Joystick = () => {
  const handleEvent = (evt, data) => {
    // console.log(evt.target.box);
    console.log(data.instance.frontPosition)
  }

  const loadingGameStatus = useSelector((state) => state.room.loadingGameStatus)

  const [loadingStatus, setLoadingStatus] = useState()

  const LoadingStatusJSX = (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <LoadingStatusBar loadingStatus={loadingGameStatus}></LoadingStatusBar>
      </div>
    </>
  )

  const JoystickJSX = (
    <>
      <div
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <Bar
          name="HP"
          alignLeft
          fillColor="#FF0000"
          maxValue="1000"
          value="600"
        />
        <Bar
          name="ARMOR"
          alignRight
          fillColor="#FFA800"
          maxValue="1000"
          value="50"
        />
      </div>
      <div style={{ position: 'fixed', bottom: 100, left: 100 }}>
        <ReactNipple
          options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
          onMove={(evt, data) => console.log(evt, data)}
          onMove={handleEvent}
        />
      </div>
      <div style={{ position: 'fixed', bottom: 100, right: 100 }}>
        <ReactNipple
          options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
          onMove={(evt, data) => console.log(evt, data)}
          onMove={handleEvent}
        />
      </div>
    </>
  )

  return (
    <>
      <Background color="#313131" />
      <Head>
        <title>Game Lobby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {JoystickJSX} */}
      {LoadingStatusJSX}
    </>
  )
}

export default Joystick
