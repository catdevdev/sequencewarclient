/* packages */
const express = require('express')
const http = require('http')
const shortID = require('shortid')
/* initializations */
const app = express()
app.server = http.createServer(app)
const io = require('socket.io')(app.server)
/* data */
let users = []
let chatMessages = []
let rooms = []
let gameSessions = []

function randomNum(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

io.on('connection', (socket) => {
  console.log('connection made')

  socket.on('user', (user) => {
    console.log(`Connection Made! id: ${socket.id} `)
    socket.user = user
    users.push(socket)
    socket.emit('user', { id: socket.id, ...user })
    socket.emit(
      'rooms',
      rooms.filter((room) => room.activated !== false),
    )

    users.map(({ id }) => {
      io.to(id).emit(
        'users',
        users.map((el) => el.user),
      )
    })
  })

  socket.on('message', (message) => {
    // find sender message

    const user = users.filter((el) => el.id === socket.id)[0]

    users.map(({ id }) => {
      io.to(id).emit('message', { ...user.user, message })
    })
  })

  socket.on('createRoom', () => {
    const { user } = users.filter((el) => el.id === socket.id)[0]

    rooms.push({
      id: shortID.generate(),
      creator: { id: socket.id, user },
      activated: false,
      configs: { limitPlayers: null, message: null, mode: null },
      users: [],
    })
    socket.emit('createdRoom', rooms[rooms.length - 1].id)
  })

  socket.on('activateRoom', ({ roomId, limitPlayers, message, mode }) => {
    let room
    let index
    for (let i = 0; i < rooms.length; i++) {
      if (roomId === rooms[i].id) {
        rooms[i].configs = { limitPlayers, message, mode }
        rooms[i].activated = true
        room = rooms[i]
        index = i
      }
    }
    socket.emit('addedRoom', room)
    users.map(({ id }) => {
      io.to(id).emit('addedRoom', room)
    })
  })

  socket.on('joinRoom', (idRoom) => {
    const userInRoom = {
      id: users.filter((el) => el.id === socket.id)[0].id,
      user: users.filter((el) => el.id === socket.id)[0].user,
      team: 1,
      colorSpaceship: 'green',
    }
    console.log('before')
    console.log(rooms)
    rooms = rooms.map((room) => {
      if (room.id === idRoom) {
        room.users = [...room.users, userInRoom]
      }
      return room
    })
    console.log('after')
    console.log(rooms)

    const room = rooms.filter(({ id }) => id === idRoom)[0]

    const usersInRoomAndCreator = [...room.users, room.creator]
    const usersWithoutYouInRoom = usersInRoomAndCreator.filter(
      ({ id }) => id !== socket.id,
    )

    console.log(usersInRoomAndCreator)

    usersWithoutYouInRoom.map(({ id }) => {
      io.to(id).emit('addUserInRoom', userInRoom)
    })

    // const users
    // console.log(usersWithoutYouInRoom);
    socket.emit('confirmJoinRoom', room)
  })

  socket.on('startGameSession', (idRoom) => {
    console.log('||| START GAME |||')
    console.log(`idRoom: ${idRoom}`)
    const room = rooms.filter(({ id }) => id === idRoom)[0]
    const users = room.users

    users.map(({ id }) => {
      io.to(id).emit('startGameSession')
    })
  })

  socket.on('loadingGameProcess', ({ idRoom, loadingStatus }) => {
    console.log(`${idRoom} - loadingGameProcess`)
    console.log(loadingStatus)
    const room = rooms.filter(({ id }) => id === idRoom)[0]
    const users = room.users

    users.map(({ id }) => {
      io.to(id).emit('loadingGameProcess', loadingStatus)
    })
  })

  socket.on('gameLoaded', (idRoom) => {
    console.log('!!!GAME IS CONNECTED TO SERVER!!!')
    const room = rooms.filter(({ id }) => id === idRoom)[0]
    const users = room.users
    console.log(users)
    users.map(({ id }) => {
      io.to(id).emit('gameStart')
    })
    // spawn users with joystick controller
    console.log(users)
    console.log(room)

    const jsonDataUsers = JSON.stringify({
      spawns: users.map(({ id, user: { username }, team, colorSpaceship }) => {
        return {
          typeCall: 'spawn',
          instantiate: {
            entityData: {
              type: 'playerJoystick',
              id,
              entityName: 'arrow',
              nickName: username,
              team,
              color: colorSpaceship,
            },
          },
          positionData: {
            position: { posX: randomNum(-7, 7), posY: randomNum(-3, 3) },
            rotate: { deg: randomNum(0, 360) },
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
            position: { posX: randomNum(-7, 7), posY: randomNum(-3, 3) },
            rotate: { deg: randomNum(0, 360) },
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

  socket.on('game-joystickController1', ({ jsonData, idRoom }) => {
    const room = rooms.filter(({ id }) => id === idRoom)[0]
    io.to(room.creator.id).emit('game-joystickController1', jsonData)
  })

  socket.on('game-joystickController2', ({ jsonData, idRoom }) => {
    const room = rooms.filter(({ id }) => id === idRoom)[0]
    io.to(room.creator.id)
  })

  /* spawns */
  const spawnCall = {
    spawns: [
      {
        typeCall: 'spawn',
        instantiate: {
          entityData: {
            type: 'playerJoystick',
            id: 'f4fjkd1dj3d4',
            entityName: 'arrow',
            nickName: 'lol228322',
            team: '1',
            color: '#aa23aa',
          },
          positionData: {
            position: { x: 1, y: 1 },
            rotate: { deg: 180 },
          },
        },
      },
      {
        typeCall: 'spawn',
        instantiate: {
          entityData: {
            type: 'playerJoystick',
            id: '32fjkd1dj3d4',
            entityName: 'arrow',
            nickName: 'test2',
            team: '1',
            color: '#a323aa',
          },
          positionData: {
            position: { x: 1, y: -1 },
            rotate: { deg: 45 },
          },
        },
      },
      {
        typeCall: 'spawn',
        instantiate: {
          entityData: {
            type: 'playerJoystick',
            id: '4afjkd1dj3d4',
            entityName: 'arrow',
            nickName: 'test3',
            team: '1',
            color: '#aa23aa',
          },
          positionData: {
            position: { x: -1, y: -1 },
            rotate: { deg: 34 },
          },
        },
      },
    ],
  }

  // (
  //   /* users */
  //   {
  //     id: 'Xciic7Bt6arpOz7oAAAS',
  //     user: { userName: 'asdfsdf', userColor: '#00ffb0' },
  //     team: 1,
  //     colorSpaceship: 'green',
  //   },
  //   {
  //     id: 'zQCupa0b5SCNnCmwAAAZ',
  //     user: { userName: 'asfsdf', userColor: '#fffe00' },
  //     team: 1,
  //     colorSpaceship: 'green',
  //   },
  // )

  socket.on('joystickData', () => {})

  socket.on('leaveRoom', (idRoom) => {
    rooms = rooms.map((room) => {
      if (room.id === idRoom) {
        room.users = room.users.filter(({ id }) => id !== socket.id)
        return room
      }
    })

    const room = rooms.filter(({ id }) => id === idRoom)[0]

    const user = users.filter(({ id }) => id === socket.id)
    console.log(room)

    const usersInRoomAndCreator = [...room.users, room.creator]
    const usersWithoutYouInRoom = usersInRoomAndCreator.filter(
      ({ id }) => id !== socket.id,
    )
    if (room.creator.id === socket.id) {
      rooms = rooms.filter(({ id }) => id !== idRoom)
      users.map(({ id }) => {
        io.to(id).emit('removeRoom', room.id)
      })
      socket.emit('destroyRoom')
      usersWithoutYouInRoom.map(({ id }) => {
        io.to(id).emit('leaveFromDestroyRoom', socket.id)
      })
    } else {
      socket.emit('leaveYourselfFromRoom')
      usersWithoutYouInRoom.map(({ id }) => {
        io.to(id).emit('leaveUserFromRoom', socket.id)
      })
      socket.emit('showAlert', 'You are left from game!')
    }

    // {
    //   id: '6lIYw2D86',
    //   creator: {
    //     id: 'LxLjuyikMCz5bPiJAAAH',
    //     user: { userName: 'asfasfasfasfasdf', userColor: '#ff0004' }
    //   },
    //   activated: true,
    //   configs: { limitPlayers: 'inf', message: '213', mode: 'INFINITY' },
    //   users: []
    // }
  })

  socket.on('disconnect', () => {
    console.log(`disconnected user ${socket.id}`)
    users = users.filter((el) => el.id !== socket.id)
    // console.log(users.map((el) => el.user));
    users.map(({ id }) => {
      io.to(id).emit(
        'users',
        users.map((el) => el.user),
      )
    })
  })
})

app.server.listen(3000)

console.log('Server has started')

// const movementCall = {
//   posX: 50,
//   posY: 30,
// }

// {
//   "typeCall": "spawn",
//   "Instantiate": {}

// }
