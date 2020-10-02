import styled from 'styled-components';

const Container = styled.div`
  width: 45%;
  display: inline-block;
`;

const Name = styled.p`
  font-size: 24px;

  ${({ alignLeft }) => alignLeft && 'text-align: left'};

  ${({ alignRight }) => alignRight && 'text-align: right'};
`;

const BarContainer = styled.div`
  height: 40px;
  background: rgba(177, 177, 177, 0.5);
  display: flex;

  ${({ alignLeft }) => alignLeft && 'justify-content: flex-start'}
  ${({ alignRight }) => alignRight && 'justify-content: flex-end'}
`;

const BarContainerFill = styled.div`
  width: ${({ maxValue, value }) => `${(value * 100) / maxValue}%`};

  height: 40px;

  background: ${({ fillColor }) => fillColor};
  box-shadow: 0 0 15px ${({ fillColor }) => `${fillColor}80`};

  transition: width 1s;
`;

const Bar = ({
  style,
  name,
  value,
  maxValue,
  fillColor,
  alignLeft,
  alignRight,
}) => {
  return (
    <Container style={style}>
      <Name alignLeft={alignLeft} alignRight={alignRight}>
        {name}
      </Name>
      <BarContainer alignLeft={alignLeft} alignRight={alignRight}>
        <BarContainerFill
          value={value}
          maxValue={maxValue}
          fillColor={fillColor}
        />
      </BarContainer>
    </Container>
  );
};

export default Bar;
