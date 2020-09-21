import Head from "next/head";

import styled from "styled-components";

import Header from "../components/Layout/Header";

import Button from "../components/UI/Button";
import Background from "../components/UI/Background";

export default function Home() {
  return (
    <div>
      <Background url={"images/background.jpg"}></Background>
      <Head>
        <title>Game Lobby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </div>
  );
}
