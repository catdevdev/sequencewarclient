// socket.on('game-joystickController1', ({ jsonData, idRoom }) => {
//   const room = rooms.filter(({ id }) => id === idRoom)[0]
//   io.to(room.creator.id).emit('game-joystickController1', jsonData)
// })

// socket.on('game-joystickController2', ({ jsonData, idRoom }) => {
//   const room = rooms.filter(({ id }) => id === idRoom)[0]
//   io.to(room.creator.id)
// })

import shortID from 'shortid'
import { Socket } from 'socket.io'
import { Room } from '../Server/Storage/Schemas/Room'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'
/* static Classes */
import { GameArea } from '../Game/GameArea'

class GameJoystickControllerSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    /* logic */
    socket.on('game-joystickController1', ({ jsonData, idRoom }) => {
      const room = this.storage.Rooms.GetById(idRoom)
      io.to(room.Creator.Id).emit('game-joystickController1', jsonData)
    })

    socket.on('game-joystickController2', ({ jsonData, idRoom }) => {
      const room = this.storage.Rooms.GetById(idRoom)
      io.to(room.Creator.Id)
    })
  }
}

export { GameJoystickControllerSocket }
