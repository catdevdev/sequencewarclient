/* imports */
import styled from 'styled-components'
import { useRouter } from 'next/router'
/* redux */
import { useDispatch, useSelector } from 'react-redux'
import {
  showModalSettingsSpaceShip,
  showModalSettingsRoom,
} from '../../../../redux/actions/Modals'
import { addMessage } from '../../../../redux/actions/Chat'
/* components */
import Header from '../Header'
import Table from '../Table'
import MarginBlock from '../../../Layout/MarginBlock'
/* socketio */
import { socket } from '../../../Socket'

const StyledRooms = styled.div`
  position: relative;

  width: 100%;
  height: 60%;
  border-bottom: 1px solid #fff;
`
const Button = styled.button`
  position: absolute;

  background: rgba(255, 255, 255, 0.1);

  width: 200px;
  height: 45px;
  border: 2px solid #ffffff;
  border-radius: 8px;

  text-transform: uppercase;
  font-size: 16px;
`
const LobbyListContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  @media (max-width: 1350px) {
    width: 90%;
  }
`
const SettingsSpaceshipContainer = styled.div``

const dataPrimary = [
  {
    data: 'Username',
    center: true,
  },
  {
    data: 'Color',
  },
  {
    data: 'Team',
    center: true,
  },
  {
    data: 'Figure',
  },
]
const rowsData = [
  [
    {
      data: 'catdev',
      center: true,
    },
    {
      data: 'Infinity waves',
    },
    {
      data: '#1',
      center: true,
    },
    {
      colorSpaceship: 'rgb(0,255,0)',
    },
  ],
]

const Rooms = ({ dataPrimary, rowsData }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const configs = useSelector((state) => state.room.roomConfig)
  const youIsCreatorRoomCondition = useSelector(
    (state) => state.room.youIsCreatorRoom,
  )
  const youIsVisitorRoomCondition = useSelector(
    (state) => state.room.youIsVisitor,
  )
  const users = useSelector((state) => state.room.usersInRoom)

  const currentRoomId = useSelector((state) => state.room.currentRoom)
  const roomId = useSelector((state) => state.room.roomId)
  console.log('currentRoomId:')
  console.log(currentRoomId)

  console.log('users:')
  console.log(users)
  console.log(configs)
  return (
    <StyledRooms>
      <Header>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '2px',
            marginLeft: '22px',
          }}
        >
          NEW GAME
        </p>
      </Header>
      <LobbyListContainer>
        <Table
          lineEveryRow
          widthCells={[20, 20, 20, 35]}
          dataPrimary={dataPrimary}
          rowsData={rowsData}
        />
      </LobbyListContainer>
      {youIsCreatorRoomCondition && (
        <Button
          onClick={() => {
            socket.emit('leaveRoom', roomId)
          }}
          style={{
            width: '150px',
            left: '28px',
            bottom: '22px',
          }}
        >
          Remove room
        </Button>
      )}
      {youIsVisitorRoomCondition && (
        <Button
          onClick={() => {
            socket.emit('leaveRoom', currentRoomId.id)
          }}
          style={{
            width: '100px',
            left: '28px',
            bottom: '22px',
          }}
        >
          Leave
        </Button>
      )}
      <div
        style={{
          position: 'absolute',
          right: '28px',
          bottom: '22px',
        }}
      >
        {youIsCreatorRoomCondition ? (
          <Button
            onClick={() => {
              dispatch(showModalSettingsRoom())
            }}
            style={{
              position: 'static',
              marginRight: 12,
            }}
          >
            Room Configs
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(showModalSettingsSpaceShip())
            }}
            style={{
              position: 'static',
              marginRight: 12,
            }}
          >
            Setting Spaceship
          </Button>
        )}

        <Button
          onClick={() => {
            if (configs) {
              router.push('/game')
            } else {
              dispatch(
                addMessage({
                  userName: 'Room',
                  userColor: 'red',
                  message: 'Please, config room',
                  messageColor: 'red',
                }),
              )
            }
          }}
          style={{
            position: 'static',
          }}
        >
          Start game
        </Button>
      </div>
    </StyledRooms>
  )
}

export default Rooms
