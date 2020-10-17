import styled from 'styled-components';

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
`;
const Text = styled.div``;

const Game = () => {
  return (
    <Background>
      <Text>Game</Text>
    </Background>
  );
};

export default Game;
