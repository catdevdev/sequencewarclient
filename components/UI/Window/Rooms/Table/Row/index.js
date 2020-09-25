import styled from "styled-components";

const RowContainer = styled.div`
  width: 100%;
  height: 25px;
  /* height: ${({ primary }) => primary}; */

  display: flex;
  justify-content: flex-start;
`;

const Cell = styled.div`
  width: ${({ width }) => width}%;
  height: 100%;

  display: flex;
  justify-content: ${({ center }) => center && "center"};
  align-items: center;
`;

const Data = styled.div`
  font-size: 12px;

  font-weight: 700;
  letter-spacing: 2px;
`;

const Button = styled.button`
  display: block;

  border: none;
  outline: none;

  border-radius: 100px;

  width: 100%;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 6px;
  color: #fff;
`;

const Row = ({ primary, dataPrimary, widthCells, rowData }) => {
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
          <RowContainer>
            {rowData.map(({ data, button, center }, index) => {
              if (data && !button)
                return (
                  <Cell key={index} width={widthCells[index]} center={center}>
                    <Data>{data}</Data>
                  </Cell>
                );
              else if (data && button) {
                return (
                  <Cell key={index} width={widthCells[index]} center={center}>
                    <Button>{data}</Button>
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
