/* components */
import Container from '../Container'
import MarginBlock from '../MarginBlock'
/* imports */
import styled from 'styled-components'
import Link from 'next/link'
/* redux */
import { useDispatch, useSelector } from 'react-redux'
import { showModalMobileChat } from '../../../redux/actions/Modals'
const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 500px) {
    padding: 0 15px;
  }
`
const CurrentRoute = styled.div`
  font-size: 22px;
  font-weight: 400;
  @media (max-width: 800px) {
    display: none;
  }
`
const ChatIcon = styled.div`
  position: relative;
  background: url('/images/terminal-icon.svg') no-repeat center;
  background-size: center;

  width: 37px;
  height: 37px;
  @media (min-width: 801px) {
    display: none;
  }
  cursor: pointer;
`
const Messages = styled.div`
  width: 18px;
  height: 18px;
  background: #ff0000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  top: -8px;
  right: -10px;
  position: absolute;
`
const InnerText = styled.div`
  font-size: 8px;
`
const LeftContainer = styled.div``

const Header = ({ currentRoute }) => {
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.chat.messages)
  return (
    <Container>
      <MarginBlock height="45px"></MarginBlock>
      <StyledHeader>
        <LeftContainer>
          <h1 style={{ fontSize: '16px', fontWeight: '400' }}>Sequilize War</h1>
          <p style={{ fontSize: '16px', fontWeight: '700' }}>LIVE</p>
        </LeftContainer>
        <CurrentRoute>{currentRoute}</CurrentRoute>

        <ChatIcon
          onClick={() => dispatch(showModalMobileChat())}
          src="/images/terminal-icon.svg"
          alt="/images/terminal-icon.svg"
        >
          <Messages>
            <InnerText>{messages.length}</InnerText>
          </Messages>
        </ChatIcon>
      </StyledHeader>
    </Container>
  )
}

export default Header
