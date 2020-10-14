/* imports */
import { useState } from 'react';
import styled from 'styled-components';
/* component */
import Backdrop from '../../Backdrop';
import Button from '../../Button';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { hideModalMobileChat } from '../../../../redux/actions/Chat';
/* socket */
import { socket } from '../../../Socket';

const ChatContainer = styled.div`
  @media (min-width: 801px) {
    display: none;
  }
`;
const ChatWrapper = styled.div`
  padding: 0 24px;
  @media (min-width: 700px) {
    padding: 0 100px;
  }
`;
const Cross = styled.img`
  position: fixed;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;
const MessagesWindow = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 55vh;

  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: auto; /* Add vertical scrollbar */
`;
const MessageContainer = styled.div``;
const Sender = styled.em`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ textColor }) => textColor};
  line-height: 27px;
`;
const Message = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 15px;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;
  font-size: 18px;
  background: transparent;
  outline: none;
  border: 1px solid #fff;
  padding: 10px;
`;

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [message, setMessage] = useState('');

  const sendMessageHandler = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <ChatContainer>
      <Backdrop>
        <ChatWrapper>
          <Cross
            onClick={() => {
              dispatch(hideModalMobileChat());
            }}
            src="/images/cancel.svg"
            alt="cross-icon"
          />
          <MessagesWindow>
            <MessageContainer>
              {messages.map(({ message, userName, textColor }, index) => (
                <Message key={index}>
                  <Sender textColor={textColor}>
                    {userName}
                    {'>'}
                  </Sender>
                  {message}
                </Message>
              ))}
            </MessageContainer>
          </MessagesWindow>
          <Input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button
            onClick={sendMessageHandler}
            style={{ width: '100%', height: 40 }}
          >
            SEND
          </Button>
        </ChatWrapper>
      </Backdrop>
    </ChatContainer>
  );
};

export default Chat;
