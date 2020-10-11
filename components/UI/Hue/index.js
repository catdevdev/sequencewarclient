import styled from 'styled-components';
import { HuePicker } from 'react-color';

const PointerColorPicker = styled.div`
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
  transform: translate(-12.5px, 2.5px);
`;

const Hue = ({ onChange, color, style }) => {
  return (
    <div style={style}>
      <HuePicker
        onChange={onChange}
        width="100%"
        height="30px"
        pointer={PointerColorPicker}
        color={color}
      />
    </div>
  );
};

export default Hue;
