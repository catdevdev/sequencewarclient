import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  width: 100%;
  height: 48px;

  background: rgba(255, 255, 255, 0.1);

  border: 2px solid #fff;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Button = ({ onClick, children, style, width, height }) => {
  return (
    <StyledButton onClick={onClick} width={width} height={height} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
