/* packages */
const express = require('express')
const http = require('http')
const shortID = require('shortid')
/* initializations */
const app = express()
app.server = http.createServer(app)
const io = require('socket.io')(app.server)
/* utils */
const removeElementByName = require('./utils')
/* data */
let users = []
let chatMessages = []

let rooms = []

io.on('connection', (socket) => {
  socket.on('user', (user) => {
    console.log(`Connection Made! id: ${socket.id} `)
    socket.user = user
    users.push(socket)

    socket.emit('user', user)
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
