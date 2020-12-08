import { Socket } from 'socket.io'
import { Room } from '../Server/Storage/Schemas/Room'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class CreatedRoomSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    /* logic */
    socket.on('createRoom', () => {
      const user = storage.Users.GetById(socket.id)
      storage.Rooms.Add(new Room(user))

      socket.emit(
        'createdRoom',
        storage.Rooms.Rooms[storage.Rooms.Rooms.length - 1].Id,
      )
    })
  }
}

export { CreatedRoomSocket }
