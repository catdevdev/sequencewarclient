import { Socket } from 'socket.io'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class UserSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()

  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    // storage.Users.Get()
    // storage.Users.
    /* logic */
    socket.on('user', (user) => {
      
      storage.Users.Add(new User(socket.id, user.userName, user.userColor))
      socket.emit('user', { id: socket.id, ...user })
      socket.emit(
        'rooms',
        storage.Rooms.GetRoomsByActivated().map((room) => {
          return {
            id: room.Id,
            creator: {
              id: room.Creator.Id,
              user: {
                userName: room.Creator.Name,
                userColor: room.Creator.FontColor,
              },
            },
            activate: room.Activated,
            configs: {
              limitPlayers: room.Configs.limitPlayers,
              message: room.Configs.message,
              mode: room.Configs.mode,
            },
          }
        }),
        // storage.Rooms.GetRoomsByActivated()
      )

      storage.Users.Users.map(({ Id }) => {
        io.to(Id).emit(
          'users',
          storage.Users.Users.map(({ Id, Name, FontColor }) => {
            return { id: Id, userName: Name, userColor: FontColor }
          }),
        )
      })
      console.log(`User created nickname: ${socket.id} `)
    })
  }
}
export { UserSocket }
