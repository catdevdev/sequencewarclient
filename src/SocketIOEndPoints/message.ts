import { Socket } from 'socket.io'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class MessageSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()

  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    // storage.Users.Get()
    // storage.Users.
    /* logic */
    socket.on('message', (message) => {
      const user = storage.Users.GetById(socket.id)

      console.log(user)
      console.log(storage.Users.Users)
      //   const user = users.filter((el) => el.id === socket.id)[0]

      storage.Users.Users.map(({ Id }) => {
        io.to(Id).emit('message', {
          userName: user.Name,
          userColor: user.FontColor,
          message,
        })
      })

      //   users.map(({ id }) => {
      //     io.to(id).emit('message', { ...user.user, message })
      //   })
    })
  }
}
export { MessageSocket }
