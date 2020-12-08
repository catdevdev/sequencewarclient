import { Socket } from 'socket.io'
/* packages */
const express = require('express')
const http = require('http')
const shortID = require('shortid')
/* Classes */
import { SocketIO } from '../SocketIO'
import { Storage } from './Storage/Storage'

class Server {
  // socketIO: SocketIO

  constructor(port: number) {
    const app = express()
    app.server = http.createServer(app)

    const io: SocketIO.Server = require('socket.io')(app.server)

    const storage = new Storage()
    
    const socketIO = new SocketIO(io, storage)

    app.server.listen(port)
  }
}

export { Server }
