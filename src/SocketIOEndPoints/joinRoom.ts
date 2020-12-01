import { Socket } from 'socket.io'
import { Room } from '../Server/Storage/Schemas/Room'
import { User } from '../Server/Storage/Schemas/User'
import { Storage } from '../Server/Storage/Storage'

class JoinRoomSocket {
  //   socketIOEndPoint = new SocketIOEndPoint()
  constructor(
    private socket: Socket,
    private io: SocketIO.Server,
    private storage: Storage,
  ) {
    /* logic */
    socket.on('joinRoom', (idRoom: string) => {
      //   const userInRoom = {
      //     id: users.filter((el) => el.id === socket.id)[0].id,
      //     user: users.filter((el) => el.id === socket.id)[0].user,
      //     team: 1,
      //     colorSpaceship: 'green',
      //   }

      const room = this.storage.Rooms.GetById(idRoom)
      const user = this.storage.Users.GetById(socket.id)
      user.Team = 1
      user.ColorSpaceship = 'green'
      room.Users.Add(user)

      this.storage.Rooms.SetById(idRoom, room)

      room.Users.Users.map(({ Id }) => {
        io.to(Id).emit('addUserInRoom', {
          id: this.storage.Users.GetById(socket.id).Id,
          user: this.storage.Users.GetById(socket.id).Name,
          team: 1,
          colorSpaceship: 'green',
        })
      })

      io.to(room.Creator.Id).emit('addUserInRoom', {
        id: this.storage.Users.GetById(socket.id).Id,
        user: this.storage.Users.GetById(socket.id).Name,
        team: 1,
        colorSpaceship: 'green',
      })

      socket.emit('confirmJoinRoom', {
        id: room.Id,
        creator: {
          id: room.Creator.Id,
          user: {
            userName: room.Creator.Name,
            userColor: room.Creator.FontColor,
          },
        },
        activated: true,
        configs: {
          limitPlayers: null,
          message: null,
          mode: null,
        },
        users: room.Users.Users.map((el) => {
          return {
            user: { id: el.Id, userName: el.Name, userColor: el.FontColor },
            team: el.Team,
            colorSpaceship: el.ColorSpaceship,
          }
        }),
      })
    })
  }
}

export { JoinRoomSocket }
