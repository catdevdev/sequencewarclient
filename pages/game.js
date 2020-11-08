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
import dynamic from 'next/dynamic'

// import Unity, {  } from 'react-unity-webgl'
import Unity, { UnityContext } from 'react-unity-webgl'
// import Unity, { UnityContent } from 'react-unity-webgl'

// const
//   Unity= dynamic(() => import('react-unity-webgl'), { ssr: false })

// const unityContext = new UnityContext(
//   'test-build-for-react/Build/test-build-for-react.json',
//   'test-build-for-react/Build/UnityLoader.js',
// )

const Game = () => {
  const unityContext = new UnityContext({
    dataUrl: 'test6/Build/test6.data',
    frameworkUrl: 'test6/Build/test6.framework.js',
    loaderUrl: 'test6/Build/test6.loader.js',
    codeUrl: 'test6/Build/test6.wasm',
  })

  return (
    <Background>
      <Text>Game</Text>
      <Unity unityContext={unityContext}></Unity>
    </Background>
  )
}

export default Game
