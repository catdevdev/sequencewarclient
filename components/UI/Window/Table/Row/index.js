import styled from 'styled-components';

const RowContainer = styled.div`
  width: 100%;

  /* height: ${({ primary }) => primary}; */

  display: flex;
  justify-content: flex-start;

  ${({ lineEveryRow }) => lineEveryRow && 'border-top: 1px solid #fff'};
`;

const Cell = styled.div`
  width: ${({ width }) => width}%;
  height: 100%;

  display: flex;
  justify-content: ${({ center }) => center && 'center'};
  align-items: center;
`;

const Data = styled.div`
  font-size: 12px;

  font-weight: 700;
  letter-spacing: 2px;
`;

const Button = styled.button`
  display: inline-block;

  border: none;
  outline: none;

  border-radius: 100px;

  width: 80px;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  text-transform: uppercase;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #fff;
`;

const Triangle = styled.div`
  margin: 10px 0;
  width: 0;
  height: 0;
  border-top: 35px solid transparent;
  border-left: 65px solid ${({ color }) => color};
  border-bottom: 35px solid transparent;
`;

const Row = ({ lineEveryRow, primary, dataPrimary, widthCells, rowData }) => {
  return (
    <>
      {primary ? (
        <>
          <RowContainer>
            {dataPrimary.map(({ data, center }, index) => {
              if (data)
                return (
                  <Cell key={index} width={widthCells[index]} center={center}>
                    <Data>{data}</Data>
                  </Cell>
                );
            })}
          </RowContainer>
        </>
      ) : (
        <>
          <RowContainer lineEveryRow={lineEveryRow}>
            {rowData.map(({ data, button, colorSpaceship, center }, index) => {
              if (data && !button)
                return (
                  <Cell key={index} width={widthCells[index]} center={center}>
                    <Data>{data}</Data>
                  </Cell>
                );
              else if (button) {
                return (
                  <Cell key={index} width={widthCells[index]} center={center}>
                    <Button>{data}</Button>
                  </Cell>
                );
              } else if (colorSpaceship) {
                return (
                  <Cell key={index} width={widthCells[index]} center={center}>
                    <Triangle color={colorSpaceship} />
                  </Cell>
                );
              }
            })}
          </RowContainer>
        </>
      )}
    </>
  );
};

export default Row;
