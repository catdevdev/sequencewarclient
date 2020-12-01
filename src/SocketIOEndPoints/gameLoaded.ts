import shortID from 'shortid'
import { Socket } from 'socket.io'
import { Room } from '../Server/Storage/Schemas/Room'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'
/* static Classes */
import { GameArea } from '../Game/GameArea'

class GameLoadedSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    /* logic */
    socket.on('gameLoaded', (idRoom) => {
      console.log('!!!GAME IS CONNECTED TO SERVER!!!')

      const room = this.storage.Rooms.GetById(idRoom)

      room.Users.Users.map(({ Id }) => {
        io.to(Id).emit('gameStart')
      })

      const jsonDataUsers = JSON.stringify({
        spawns: room.Users.Users.map(({ Id, Name, Team, ColorSpaceship }) => {
          return {
            typeCall: 'spawn',
            instantiate: {
              entityData: {
                type: 'playerJoystick',
                id: Id,
                entityName: 'arrow',
                nickName: Name,
                team: Team,
                color: ColorSpaceship,
              },
            },
            positionData: {
              position: {
                posX: GameArea.randomPositionOnArea().xPos,
                posY: GameArea.randomPositionOnArea().yPos,
              },
              rotate: { deg: GameArea.randomDegree() },
            },
          }
        }),
      })
      const bots = [
        { id: shortID.generate(), team: 0 },
        { id: shortID.generate(), team: 0 },
        { id: shortID.generate(), team: 0 },
      ]
      const jsonDataBots = JSON.stringify({
        spawns: bots.map(({ id, team }) => {
          return {
            typeCall: 'spawn',
            instantiate: {
              entityData: {
                type: 'playerBot',
                id,
                entityName: 'arrow',
                nickName: `bot-${id}`,
                team,
                color: 'red',
              },
            },
            positionData: {
              position: {
                posX: GameArea.randomPositionOnArea().xPos,
                posY: GameArea.randomPositionOnArea().yPos,
              },
              rotate: { deg: GameArea.randomDegree() },
            },
          }
        }),
      })
      setTimeout(() => {
        socket.emit('game-MultipleSpawn', jsonDataUsers)
      }, 3000)
      setInterval(() => {
        socket.emit('game-MultipleSpawn', jsonDataBots)
      }, 10000)

      // const movementCall = {
      //   id: 3424323
      //   posX: 50,
      //   posY: 30,
      // }
    })
  }
}

export { GameLoadedSocket }
