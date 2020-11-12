/* imports */
import styled from 'styled-components'
/* components */
import Header from '../Header'
import Records from '../Records'
/* socketio */
import { socket } from '../../../../Socket'
/* redux */
import { useDispatch, useSelector } from 'react-redux'
import {
  showModalSettingsSpaceShip,
  hideModalSettingsSpaceShip,
} from '../../../../../redux/actions/Modals'
import {
  setYouIsCreatorRoom,
  writeRoomId,
} from '../../../../../redux/actions/Room'

const dataPrimary = [
  {
    data: 'Players',
    center: true,
    color: '#ffc700',
  },
  {
    data: 'Mode',
    color: '#ffc700',
  },
  {
    data: 'User',
    color: '#ffc700',
  },
  {
    data: 'Message',
    color: '#ffc700',
  },
  {
    data: 'test',
    color: '#ffc700',
  },
]

const StyledRooms = styled.div`
  width: 100%;

  border-bottom: 1px solid #fff;

  /* overflow: auto; */
`

const Rooms = () => {
  const rooms = useSelector((state) => state.rooms.rooms)
  const rowsData =
    rooms &&
    rooms.map(
      ({
        id,
        creator: {
          user: { userName, userColor },
        },
        configs: { limitPlayers, mode, message },
      }) => {
        return [
          {
            data: limitPlayers,
            center: true,
          },
          { data: mode },
          { data: userName, color: userColor },
          { data: message },
          {
            button: true,
            data: 'Join',
            center: true,
            callback: () => {
              socket.emit('joinRoom', id)
              console.log(id)
            },
          },
        ]
      },
    )
  return (
    <StyledRooms>
      <Records dataPrimary={dataPrimary} rowsData={rowsData} />
    </StyledRooms>
  )
}

export default Rooms
