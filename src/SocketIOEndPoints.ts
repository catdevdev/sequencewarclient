/* imports */
import { Socket } from 'socket.io'
/* Classes */
import { Storage } from './Server/Storage/Storage'
/* SocketIO Endpoints */
import { UserSocket } from './SocketIOEndPoints/user'
import { MessageSocket } from './SocketIOEndPoints/message'
import { CreatedRoomSocket } from './SocketIOEndPoints/createRoom'
import { ActivateRoom } from './SocketIOEndPoints/activateRoom'
import { JoinRoomSocket } from './SocketIOEndPoints/joinRoom'
import { StartGameSessionSocket } from './SocketIOEndPoints/startGameSession'
import { LoadingGameProcessSocket } from './SocketIOEndPoints/loadingGameProcess'
import { GameLoadedSocket } from './SocketIOEndPoints/gameLoaded'
import { GameJoystickControllerSocket } from './SocketIOEndPoints/game-joystickController'
import { LeaveRoom } from './SocketIOEndPoints/leaveRoom'
import { DisconnectSocket } from './SocketIOEndPoints/disconnect'

class SocketIOEndPoints {
  //   private socketIOEndPoints: SocketIOEndPoint[] = []
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {}
  /* init all socketEndPoints */
  /*  */
  user = new UserSocket(this.socket, this.io, this.storage)
  message = new MessageSocket(this.socket, this.io, this.storage)
  createRoom = new CreatedRoomSocket(this.socket, this.io, this.storage)
  activateRoom = new ActivateRoom(this.socket, this.io, this.storage)
  joinRoom = new JoinRoomSocket(this.socket, this.io, this.storage)
  startGameSession = new StartGameSessionSocket(
    this.socket,
    this.io,
    this.storage,
  )
  loadingGameProcessSession = new LoadingGameProcessSocket(
    this.socket,
    this.io,
    this.storage,
  )
  gameLoadedSession = new GameLoadedSocket(this.socket, this.io, this.storage)
  gameJoystickController = new GameJoystickControllerSocket(
    this.socket,
    this.io,
    this.storage,
  )
  leaveRoom = new LeaveRoom(this.socket, this.io, this.storage)
  disconnect = new DisconnectSocket(this.socket, this.io, this.storage)
}

export { SocketIOEndPoints }
