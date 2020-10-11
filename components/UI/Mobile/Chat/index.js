import styled from 'styled-components';

import Backdrop from '../../Backdrop';
import Button from '../../Button';

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
`;

const MessagesWindow = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 55vh;

  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: scroll; /* Add vertical scrollbar */
`;

const MessageContainer = styled.div``;

const Sender = styled.em`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #00fff0;
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
  return (
    <ChatContainer>
      <Backdrop>
        <ChatWrapper>
          <Cross src="/images/cancel.svg" alt="cross-icon" />
          <MessagesWindow>
            <MessageContainer>
              <Message>
                <Sender>vladvkus{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
              <Message>
                <Sender>kitty{'>'}</Sender> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. earum.
              </Message>
            </MessageContainer>
          </MessagesWindow>
          <Input />
          <Button style={{ width: '100%', height: 40 }}>SEND</Button>
        </ChatWrapper>
      </Backdrop>
    </ChatContainer>
  );
};

export default Chat;
