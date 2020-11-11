/* imports */
import styled from 'styled-components'

const BarContainer = styled.div`
  width: 80%;
  height: 20px;

  border-radius: 100px;
  background: #484848;
`

const BarFill = styled.div`
  width: ${({ loadingStatus }) => loadingStatus}%;
  height: 20px;

  border-radius: 100px;
  background: #e1e1e1;

  transition: 0.3s ease all;
`

const LoadingStatus = ({ loadingStatus }) => {
  return (
    <BarContainer>
      <BarFill loadingStatus={loadingStatus * 100}></BarFill>
    </BarContainer>
  )
}

export default LoadingStatus
