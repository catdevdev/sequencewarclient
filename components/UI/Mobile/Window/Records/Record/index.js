import styled from 'styled-components'

const RecordContainer = styled.div`
  width: 100%;
  margin: 30px 0;
`

const Row = styled.div`
  display: flex;
`

const Name = styled.div`
  width: 30%;
  border-right: 1px solid #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;

  text-align: right;

  padding: 10px 12px 0;

  color: ${({ color }) => color};
`

const Value = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  width: 70%;
  padding: 10px 0 0 20px;
  color: ${({ color }) => color};
`

const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;

  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
`

const Triangle = styled.div`
  margin: 10px 20px;
  width: 0;
  height: 0;
  border-top: 35px solid transparent;
  border-left: 65px solid ${({ color }) => color};
  border-bottom: 35px solid transparent;
`

const Record = ({ record, dataPrimary }) => {
  let rows = []

  for (let i = 0; i < record.length; i++) {
    if (record[i].button) {
      rows[i] = (
        <Row key={i}>
          <Button onClick={record[i].callback && record[i].callback}>
            {record[i].data}
          </Button>
        </Row>
      )
    } else if (record[i].data) {
      rows[i] = (
        <Row key={i}>
          <Name color={dataPrimary[i].color}>{dataPrimary[i].data}</Name>
          <Value color={record[i].color}>{record[i].data}</Value>
        </Row>
      )
    } else if (record[i].colorSpaceship) {
      console.log(2)
      rows[i] = (
        <Row key={i}>
          <Name color={dataPrimary[i].color}>{dataPrimary[i].data}</Name>
          <Triangle color={record[i].colorSpaceship} />
        </Row>
      )
    }
  }
  return <RecordContainer>{rows}</RecordContainer>
}

export default Record
