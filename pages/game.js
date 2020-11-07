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

import Unity, { UnityContext } from 'react-unity-webgl'
// const
//   Unity= dynamic(() => import('react-unity-webgl'), { ssr: false })

// const unityContext = new UnityContext(
//   'test-build-for-react/Build/test-build-for-react.json',
//   'test-build-for-react/Build/UnityLoader.js',
// )

// const unityContext = new UnityContext({
//   loaderUrl: 'build/Build/UnityLoader.js',
//   dataUrl: 'build/Build/build.unityweb',
//   frameworkUrl: 'build/Build/build.framework.unityweb',
//   codeUrl: 'build/Build/build.wasm',
//   // streamingAssetsUrl: 'build/streamingAssets/',
// })

// this.unityContext = new UnityContext({
//   loaderUrl: "build/myunityapp.loader.js",
//   dataUrl: "build/myunityapp.data",
//   frameworkUrl: "build/myunityapp.framework.js",
//   codeUrl: "build/myunityapp.wasm"
// });

const unityContent = new UnityContext({
  loaderUrl: "build/myunityapp.loader.js",
  dataUrl: "build/myunityapp.data",
  frameworkUrl: "build/myunityapp.framework.js",
  codeUrl: "build/myunityapp.wasm",
})

const Game = () => {
  return (
    <Background>
      <Text>Game</Text>
      <Unity unityContext={unityContent}></Unity>
    </Background>
  )
}

export default Game
