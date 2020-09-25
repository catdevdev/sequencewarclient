import styled from "styled-components";

import Header from "../Header";

const StyledOnline = styled.div`
  width: 100%;
  height: 100%;

  border-left: 1px solid #fff;
`;

const Heading = styled.p`
  text-transform: uppercase;

  font-size: 16px;
  font-weight: 700;

  color: ${({ color }) => color};

  margin-bottom: 10px;
`;

const Nickname = styled.p`
  font-size: 14px;
  font-weight: 700;

  color: ${({ color }) => color};
`;

const Online = ({}) => {
  return (
    <StyledOnline>
      <Header>
        <p
          style={{
            width: "100%",
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          ONLINE (7)
        </p>
      </Header>
      <div style={{ width: "60%", margin: "15px auto", textAlign: "center" }}>
        <Heading color="#42FF00">Lobby (5)</Heading>
        <Nickname color="#39DE00">Vladislav22</Nickname>
        <Nickname color="#39DE00">ILoveDotahaha</Nickname>
        <Nickname color="#39DE00">Hoho465</Nickname>
        <Nickname color="#39DE00">Lol228322</Nickname>
        <Nickname color="#39DE00">hehe342</Nickname>
        <Nickname color="#39DE00">Ania33</Nickname>
        <Nickname color="#39DE00">WhatAreyouDoint342</Nickname>
      </div>

      <div style={{ width: "60%", margin: "15px auto", textAlign: "center" }}>
        <Heading color="#FFE600">In game (2)</Heading>
        <Nickname color="#FFE600">Joske333322</Nickname>
        <Nickname color="#FFE600">Jotaro444</Nickname>
      </div>
    </StyledOnline>
  );
};

export default Online;
