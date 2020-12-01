import { Socket } from 'socket.io'
import { Room } from '../Server/Storage/Schemas/Room'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class LoadingGameProcessSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    /* logic */
    socket.on('loadingGameProcess', ({ idRoom, loadingStatus }) => {
      console.log(`${idRoom} - loadingGameProcess`)
      console.log(loadingStatus)

      const room = this.storage.Rooms.GetById(idRoom)

      room.Users.Users.map(({ Id }) => {
        io.to(Id).emit('loadingGameProcess', loadingStatus)
      })
    })
  }
}

export { LoadingGameProcessSocket }
