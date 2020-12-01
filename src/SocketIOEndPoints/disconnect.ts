import { Socket } from 'socket.io'
import { Room } from '../Server/Storage/Schemas/Room'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class DisconnectSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    /* logic */
    socket.on('disconnect', () => {
      console.log(`disconnected user ${socket.id}`)
      this.storage.Users.RemoveById(socket.id)

      this.storage.Users.Users.map(({ Id }) => {
        io.to(Id).emit(
          'users',
          this.storage.Users.Users.map(({ Id, Name, FontColor }) => {
            return { id: Id, userName: Name, userColor: FontColor }
          }),
        )
      })
    })
  }
}

export { DisconnectSocket }
