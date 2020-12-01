/* imports */
import { Socket } from 'socket.io'
/* Classes */
import { SocketIOEndPoints } from './SocketIOEndPoints'
import { Storage } from './Server/Storage/Storage'

class SocketIO {
  constructor(private io: SocketIO.Server, private storage: Storage) {
    /* init socketIO */
    io.on('connection', (socket: Socket) => {
      const socketIOEndPoints = new SocketIOEndPoints(socket, io, storage)
    })
  }
}

export { SocketIO }
