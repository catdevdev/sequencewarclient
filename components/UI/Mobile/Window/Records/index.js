import styled from 'styled-components';

import Record from './Record';

const ContainerRecord = styled.div`
  width: 100%;
  padding: 0 24px;
`;

const Records = ({ dataPrimary, rowsData }) => {
  return (
    <ContainerRecord>
      {rowsData &&
        rowsData.map((rowData, index) => {
          return (
            <Record key={index} record={rowData} dataPrimary={dataPrimary} />
          );
        })}
    </ContainerRecord>
  );
};

export default Records;
