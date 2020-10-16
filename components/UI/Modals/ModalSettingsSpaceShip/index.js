/* imports */
import { useState } from 'react';
import styled from 'styled-components';
/* components */
import Backdrop from '../../Backdrop';
import Button from '../../Button';
import SettingsSpaceShip from '../../Mobile/Window/SettingsSpaceShip';
// import Hue from '../../Hue';

const Window = styled.div`
  position: fixed;

  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 100;

  width: 450px;
  height: 490px;

  border: solid 3px #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px 7px rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.6);
`;

const ModalSettingsSpaceShip = () => {
  return (
    <>
      <Backdrop />
      <Window>
        <SettingsSpaceShip pcVersion />
        <Button style={{ width: '50%', margin: '30px auto' }}>enter</Button>
      </Window>
    </>
  );
};

export default ModalSettingsSpaceShip;
