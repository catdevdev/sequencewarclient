/* Imports */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
/* Sockets */
import { socket } from '../../../Socket';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, onMessages } from '../../../../redux/actions/Chat';
import { onUser } from '../../../../redux/actions/User';
import { onUsers } from '../../../../redux/actions/Users';

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

  color: ${({ textColor }) => textColor};
`;

const Message = styled.p`
  font-weight: 700;
  font-size: 15px;

  color: #fff;
  padding-left: 15px;
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

let newMessageArray = [];

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessageHandler = () => {
    socket.emit('message', message);
    setMessage('');
    console.log(1);
  };

  useEffect(() => {
    socket.on('message', (message) => {
      // let newArray = [...messages];
      // console.log(newArray);
      // newArray.push(message);
      // console.log(newArray);
      // setMessages(newArray);
      let tempArr = [...messages];
      tempArr.push(message);
      setMessages(tempArr);
    });
    // console.log(messages);
  }, []);

  return (
    <ChatContainer>
      <ChatArea>
        {messages.map(({ message, userName, textColor }, index) => (
          <MessageContainer key={index}>
            <Nickname textColor={textColor}>
              {userName}
              {'>'}
            </Nickname>
            <Message>{message}</Message>
          </MessageContainer>
        ))}
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
        ></ChatInput>
        <ChatButton onClick={sendMessageHandler}>ENTER</ChatButton>
      </div>
    </ChatContainer>
  );
};

export default Chat;
