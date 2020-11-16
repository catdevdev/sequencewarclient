/* imports */
import React, { Component } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
/* redux */
import { useSelector } from 'react-redux'
/* socketio */
import { socket } from '../components/Socket'
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
`
const Text = styled.div``
/* unity webgl */

import Unity, { UnityContext } from 'react-unity-webgl'

const Game = () => {
  const roomId = useSelector((state) => state.room.roomConfig.roomId)

  const unityContext = new UnityContext({
    dataUrl: 'test4/Build/test4.data',
    frameworkUrl: 'test4/Build/test4.framework.js',
    loaderUrl: 'test4/Build/test4.loader.js',
    codeUrl: 'test4/Build/test4.wasm',
  })

  unityContext.on('progress', (loadingStatus) => {
    socket.emit('loadingGameProcess', { idRoom: roomId, loadingStatus })
    console.log(`${loadingStatus} - loading...`)
  })

  unityContext.on('loaded', () => {
    socket.emit('gameLoaded', roomId)
  })

  socket.on('game-MultipleSpawn', (jsonData) => {
    unityContext.send('[ SpawnMultiple ]', 'Call', jsonData)
    console.log(jsonData)
  })

  socket.on('game-joystickController1', (jsonData) => {
    const { id } = JSON.parse(jsonData)
    console.log(jsonData)
    unityContext.send(`playerJoystick-${id}`, 'Call', jsonData)
  })

  return (
    <Background>
      <Unity width="70%" unityContext={unityContext}></Unity>
    </Background>
  )
}

export default Game
