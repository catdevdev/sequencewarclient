/* Imports */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
/* Sockets */
import { socket } from '../../../Socket';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, onMessages } from '../../../../redux/actions/Chat';

const ChatContainer = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80%;
  @media (max-width: 1350px) {
    width: 90%;
  }
  /* height: 100%; */
  margin: 0 auto;
`;
const ChatArea = styled.div`
  height: 100%;
  overflow: auto;
`;
const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  margin: 10px 0;
`;
const Nickname = styled.p`
  font-weight: 700;
  font-size: 15px;

  color: ${({ userColor }) => userColor};
`;
const Message = styled.p`
  font-weight: 700;
  font-size: 15px;

  color: #fff;
  padding-left: 15px;
  color: ${({ messageColor }) => messageColor};
`;
const ChatInput = styled.input`
  width: 100%;
  height: 40px;

  background: transparent;
  border: 1px solid #fff;
  border-radius: 5px;

  font-family: 'Space Mono', sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);

  padding-left: 20px;

  outline: none;
`;
const ChatButton = styled.button`
  width: 70px;
  height: 40px;

  background: transparent;
  border: 1px solid #fff;
  border-radius: 5px;

  margin-left: 30px;
  color: #fff;
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
      <ChatArea>
        {messages.map(
          ({ message, userName, userColor, messageColor }, index) => (
            <MessageContainer key={index}>
              <Nickname userColor={userColor}>
                {userName}
                {'>'}
              </Nickname>
              <Message messageColor={messageColor}>{message}</Message>
            </MessageContainer>
          )
        )}
      </ChatArea>
      <div
        style={{
          width: '100%',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ChatInput
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ChatButton onClick={sendMessageHandler}>ENTER</ChatButton>
      </div>
    </ChatContainer>
  );
};

export default Chat;
