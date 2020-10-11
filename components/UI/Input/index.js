import styled from 'styled-components';

const InputContainer = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding-left: 15px;
  font-size: 16px;
`;



const Input = ({ style }) => {
  return <InputContainer style={style} />;
};

export default Input;
