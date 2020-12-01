import { Socket } from 'socket.io'
import { Room } from '../Server/Storage/Schemas/Room'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class LeaveRoom {
  //   socketIOEndPoint = new SocketIOEndPoint()
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    /* logic */
    socket.on('leaveRoom', (idRoom) => {
      const room = this.storage.Rooms.GetById(idRoom)
      room.RemoveUser(socket.id)

      if (room.Creator.Id === socket.id) {
        this.storage.Rooms.RemoveById(idRoom)
        room.Users.Users.map(({ Id }) => {
          io.to(Id).emit('removeRoom', room.Id)
        })
        socket.emit('destroyRoom')
        room.Users.Users.map(({ Id }) => {
          io.to(Id).emit('leaveFromDestroyRoom', socket.id)
        })
      } else {
        socket.emit('leaveYourselfFromRoom')
        room.Users.Users.map(({ Id }) => {
          io.to(Id).emit('leaveUserFromRoom', socket.id)
        })
        socket.emit('showAlert', 'You are left from game!')
      }
    })
  }
}

export { LeaveRoom }
