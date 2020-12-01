import { Socket } from 'socket.io'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class StartGameSessionSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()

  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    // storage.Users.Get()
    // storage.Users.
    /* logic */
    socket.on('startGameSession', (idRoom) => {
      console.log('||| START GAME |||')
      console.log(`idRoom: ${idRoom}`)

      const room = this.storage.Rooms.GetById(idRoom)

      room.Users.Users.map(({ Id }) => {
        io.to(Id).emit('startGameSession')
      })
    })
  }
}
export { StartGameSessionSocket }
