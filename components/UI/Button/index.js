import styled from "styled-components";
/* display: block;

  width: 320px;
  height: 90px;

  border-radius: 5px;
  background: #00a9ce;

  color: #fff;
  font-size: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  border: none;
  outline: none; */
const StyledButton = styled.button`
  display: block;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background: rgba(1, 1, 1, 0.1);

  border: 2px solid #fff;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  
`;

const Button = ({ children, style, width, height }) => {
  return (
    <StyledButton width={width} height={height} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
