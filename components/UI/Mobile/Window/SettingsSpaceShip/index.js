import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { HuePicker } from 'react-color';
import Hue from '../../../Hue';

const SettingsSpaceShipContainer = styled.div`
  width: 90%;
  margin: 8px auto 0;
  ${({ pcVersion }) => !pcVersion && 'border: 2px solid #ffffff'};
  border-radius: 10px;
`;

const PointerColorPicker = styled.div`
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
  transform: translate(-12.5px, 2.5px);
`;

const ContainerConfig = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ContainerData = styled.div`
  display: flex;
  align-items: center;
`;

const Key = styled.div`
  width: 80px;
  text-align: right;
  font-size: 18px;
  font-weight: 700;
  color: #00fff0;
  padding: 20px 16px 16px 0;
  border-right: 2px solid #fff;
`;

const TextData = styled.p`
  font-weight: 700;
  font-size: 18px;
  padding: 16px 0 16px 16px;
`;

const ColorData = styled.div`
  width: 60%;
  height: 28px;
  margin: 16px auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  background: ${({ color }) => color};
`;

const Triangle = styled.div`
  margin: 10px 20px;
  width: 0;
  height: 0;
  border-top: 35px solid transparent;
  border-left: 65px solid ${({ color }) => color};
  border-bottom: 35px solid transparent;
`;

const SettingsSpaceShip = ({ pcVersion }) => {
  const [color, setColor] = useState({ hex: '#fff' });

  return (
    <>
      <p
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: '#FFC700',
          textAlign: 'center',
          letterSpacing: 1,
          marginTop: pcVersion && 30,
        }}
      >
        Your spaceship:
      </p>
      <SettingsSpaceShipContainer pcVersion={pcVersion}>
        <p
          style={{
            margin: '8px 0 14px',
            fontSize: 16,
            fontWeight: 700,
            textAlign: 'center',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          settings
        </p>
        <Hue
          width="100%"
          height="30px"
          pointer={PointerColorPicker}
          color={color}
          onChange={(color) => {
            setColor(color);
          }}
          style={{ marginBottom: 15 }}
        ></Hue>
        <ContainerConfig>
          <ContainerData>
            <Key>Color</Key>
            <ColorData color={color.hex}></ColorData>
          </ContainerData>
          <ContainerData>
            <Key>Team</Key>
            <TextData>#1</TextData>
          </ContainerData>
          <ContainerData>
            <Key>Figure</Key>
            <Triangle color={color.hex} />
          </ContainerData>
        </ContainerConfig>
      </SettingsSpaceShipContainer>
    </>
  );
};

export default SettingsSpaceShip;
