import { Socket } from 'socket.io'
import { Room } from '../Server/Storage/Schemas/Room'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class ActivateRoom {
  //   socketIOEndPoint = new SocketIOEndPoint()
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    /* logic */
    socket.on('activateRoom', ({ roomId, limitPlayers, message, mode }) => {
      const room = this.storage.Rooms.GetById(roomId)

      //   for (let i = 0; i < this.storage.Rooms.Rooms.length; i++) {
      //     if (roomId === rooms[i].id) {
      //       rooms[i].configs = { limitPlayers, message, mode }
      //       rooms[i].activated = true
      //       room = rooms[i]
      //       index = i
      //     }
      //   }
      room.Configs = { limitPlayers, message, mode }
      room.Activated = true

      socket.emit('addedRoom', {
        id: room.Id,
        creator: {
          user: {
            userName: room.Creator.Name,
            userColor: room.Creator.FontColor,
          },
        },
        configs: {
          limitPlayers: room.Configs.limitPlayers,
          mode: room.Configs.mode,
          message: room.Configs.message,
        },
      })
      this.storage.Users.Users.map(({ Id }) => {
        io.to(Id).emit('addedRoom', {
          id: room.Id,
          creator: {
            user: {
              userName: room.Creator.Name,
              userColor: room.Creator.FontColor,
            },
          },
          configs: {
            limitPlayers: room.Configs.limitPlayers,
            mode: room.Configs.mode,
            message: room.Configs.message,
          },
        })
      })
    })
  }
}

export { ActivateRoom }
