import React from "react";

import styled from "styled-components";

const ChatContainer = styled.div`
  height: 40%;
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

  color: #39de00;
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

  font-family: "Space Mono", sans-serif;
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
  return (
    <ChatContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "80%",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <ChatArea>
          <MessageContainer>
            <Nickname>vladvkus{">"}</Nickname>
            <Message>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              dolorum eius nisi qui numquam dolor.
            </Message>
          </MessageContainer>
          <MessageContainer>
            <Nickname>ruslan{">"}</Nickname>
            <Message>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              doloremque?
            </Message>
          </MessageContainer>
          <MessageContainer>
            <Nickname>hi576{">"}</Nickname>
            <Message>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              doloremque?
            </Message>
          </MessageContainer>
        </ChatArea>
        <div
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChatInput></ChatInput>
          <ChatButton>ENTER</ChatButton>
        </div>
      </div>
    </ChatContainer>
  );
};

export default Chat;
