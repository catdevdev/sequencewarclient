import Head from "next/head";

import styled from "styled-components";

import Container from "../components/Layout/Container";

import Header from "../components/Layout/Header";
import Window from "../components/UI/Window";

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
      <Container>
        <Window></Window>
      </Container>
    </div>
  );
}
