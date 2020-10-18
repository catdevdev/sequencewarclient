import styled from 'styled-components';

import HorizontalLine from '../../HorizontalLine';
import MarginBlock from '../../../Layout/MarginBlock';

import Row from './Row';

const ContainerTable = styled.div`
  width: 100%;
  height: 300px;
  overflow: auto;

  /* height: 10px; */
`;

const Table = ({ lineEveryRow, widthCells, dataPrimary, rowsData }) => {
  return (
    <ContainerTable>
      <MarginBlock height="30px"></MarginBlock>
      <Row primary widthCells={widthCells} dataPrimary={dataPrimary} />
      <HorizontalLine />
      {rowsData ? (
        rowsData.map((rowData, id) => (
          <Row
            lineEveryRow={lineEveryRow}
            key={id}
            widthCells={widthCells}
            rowData={rowData}
          />
        ))
      ) : (
        <div>No rooms :(</div>
      )}
    </ContainerTable>
  );
};

export default Table;
