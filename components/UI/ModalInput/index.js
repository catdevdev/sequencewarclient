import styled from 'styled-components';

const Window = styled.div`
  position: fixed;

  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 100;

  width: 400px;
  height: 220px;

  border: solid 3px #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px 7px rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Message = styled.p`
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  background: transparent;
  padding-left: 20px;
  color: #42ff00;
  font-size: 16px;
`;

const Submit = styled.button`
  display: block;
  margin: 20px auto;
  width: 85px;
  height: 45px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  background: transparent;
  font-size: 18px;
`;

const ModalInput = ({ message, submitText }) => {
  return (
    <Window>
      <Container>
        <Message>{message}</Message>
        <Input />
        <Submit>{submitText}</Submit>
      </Container>
    </Window>
  );
};

export default ModalInput;
