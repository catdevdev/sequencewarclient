import styled from "styled-components";
import Container from "../../../Layout/Container";
import HorizontalLine from "../../HorizontalLine";
import Header from "../Header";
import Table from "./Table";

import MarginBlock from "../../../Layout/MarginBlock";

const StyledRooms = styled.div`
  width: 100%;
  height: 60%;
  border-bottom: 1px solid #fff;
`;

const Rooms = ({}) => {
  const dataPrimary = [
    {
      data: "Players",
      center: true,
    },
    {
      data: "Mode",
    },
    {
      data: "User",
    },
    {
      data: "Message",
    },
    {
      data: "test",
    },
  ];

  const rowsData = [
    [
      {
        data: "1/20",
        center: true,
      },
      {
        data: "Infinity waves",
      },
      {
        data: "CATDEV",
      },
      {
        data: "Заходите все сюда!!!!! Noobs only!",
      },
      {
        button: true,
        data: "Join",
        center: true,
      },
    ],
    [
      {
        data: "1/∞",
        center: true,
      },
      {
        data: "Scores",
      },
      {
        data: "Ania33",
      },
      {
        data: "Go 500 players",
      },
      {
        button: true,
        data: "Join",
        center: true,
      },
    ],
    [
      {
        data: "1/∞",
        center: true,
      },
      {
        data: "Scores",
      },
      {
        data: "Ania33",
      },
      {
        data: "Go 500 players",
      },
      {
        button: true,
        data: "Join",
        center: true,
      },
    ],
    [
      {
        data: "1/∞",
        center: true,
      },
      {
        data: "Scores",
      },
      {
        data: "Ania33",
      },
      {
        data: "Go 500 players",
      },
      {
        button: true,
        data: "Join",
        center: true,
      },
    ],
    [
      {
        data: "1/∞",
        center: true,
      },
      {
        data: "Scores",
      },
      {
        data: "Ania33",
      },
      {
        data: "Go 500 players",
      },
      {
        button: true,
        data: "Join",
        center: true,
      },
    ],
  ];

  return (
    <StyledRooms>
      <Header>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "2px",
            marginLeft: "22px",
          }}
        >
          ACTIVE GAMES (4)
        </p>
      </Header>
      <Container width="80%">
        <MarginBlock height="30px"></MarginBlock>
        <Table
          widthCells={[15, 20, 10, 45, 5]}
          dataPrimary={dataPrimary}
          rowsData={rowsData}
        />
      </Container>
    </StyledRooms>
  );
};

export default Rooms;
