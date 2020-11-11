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
    dataUrl: 'test6/Build/test6.data',
    frameworkUrl: 'test6/Build/test6.framework.js',
    loaderUrl: 'test6/Build/test6.loader.js',
    codeUrl: 'test6/Build/test6.wasm',
  })

  unityContext.on('progress', (loadingStatus) => {
    socket.emit('loadingGameProcess', { idRoom: roomId, loadingStatus })
    console.log(`${loadingStatus} - loading...`)
  })

  return (
    <Background>
      <Text>Game</Text>
      <Unity unityContext={unityContext}></Unity>
    </Background>
  )
}

export default Game
