/* imports */
import { useState } from 'react';
import styled from 'styled-components';
/* components */
import Backdrop from '../../Backdrop';
import Button from '../../Button';
import Input from '../../Input';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { hideModalSettingsRoom } from '../../../../redux/actions/Modals';
import { writeRoomConfig } from '../../../../redux/actions/Room';
/* socket */
import { socket } from '../../../Socket';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  @media (min-width: 400px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 1200px) {
    width: 40%;
  }
`;
const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 74px;
`;
const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #bdff00;
`;

const ModalConfigGame = () => {
  const dispatch = useDispatch();

  const roomId = useSelector((state) => state.room.roomId);
  // const configs = useSelector((state) => state.room.roomConfig);

  const [message, setMessage] = useState('');

  return (
    <>
      <Backdrop>
        <Container>
          <Heading>configs</Heading>
          <div style={{ marginTop: 50 }}>
            <Text>MESSAGE (DESCRIPTION OF ROOM)</Text>
            <Input
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              style={{ margin: '20px auto' }}
            />
            <Text style={{ marginTop: 12 }}>LIMIT PLAYERS</Text>
            <Input
              style={{
                width: 180,
                margin: '20px auto',
                textAlign: 'center',
                padding: 0,
              }}
            />
            <Text style={{ marginTop: 12 }}>MODE</Text>
            <Text style={{ marginTop: 12, color: '#fff' }}>INFINITY</Text>
            <Button
              style={{
                width: '40%',
                position: 'absolute',
                bottom: '5%',
                left: '50%',
                transform: 'translate(-50%, 0)',
              }}
              onClick={() => {
                const configs = {
                  roomId,
                  limitPlayers: 'inf',
                  message,
                  mode: 'INFINITY',
                };
                dispatch(writeRoomConfig(configs));
                socket.emit('activateRoom', configs);
                dispatch(hideModalSettingsRoom());
              }}
            >
              Enter
            </Button>
          </div>
        </Container>
      </Backdrop>
    </>
  );
};

export default ModalConfigGame;
