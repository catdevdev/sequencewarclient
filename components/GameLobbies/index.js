import styled from "styled-components";

const StyledGameLobbies = styled.div``;

const GameLobby = styled.div``;

const GameLobbies = () => {
  const testData = [
    {
      id: 0,
      name: "Заходите братаны!!",
      gameMode: "Infinity",
      ping: 10,
      persons: 10,
    },
    {
      id: 1,
      name: "Заходите братаны!!",
      gameMode: "Infinity",
      ping: 10,
      persons: 10,
    },
    {
      id: 2,
      name: "Заходите братаны!!",
      gameMode: "Infinity",
      ping: 10,
      persons: 10,
    },
  ];
  return (
    <StyledGameLobbies>
      {testData.map(({ id, name, gameMode, ping, persons }) => {
        return <GameLobby></GameLobby>;
      })}
    </StyledGameLobbies>
  );
};

export default GameLobbies;
