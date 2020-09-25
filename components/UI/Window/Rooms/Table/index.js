import styled from "styled-components";

import HorizontalLine from "../../../HorizontalLine";

import Row from "./Row";

const ContainerTable = styled.div`
  width: 100%;
  /* height: 10px; */
`;

const Table = ({ widthCells, dataPrimary, rowsData }) => {
  return (
    <ContainerTable>
      <Row primary widthCells={widthCells} dataPrimary={dataPrimary} />
      <HorizontalLine />
      {rowsData.map((rowData, id) => (
        <Row key={id} widthCells={widthCells} rowData={rowData} />
      ))}
    </ContainerTable>
  );
};

export default Table;
