/* packages */
const express = require('express');
const http = require('http');
const shortID = require('shortid');
/* initializations */
const app = express();
app.server = http.createServer(app);
const io = require('socket.io')(app.server);
/* utils */
const removeElementByName = require('./utils');
/* data */
let users = [];
let chatMessages = [];

let rooms = [];

io.on('connection', (socket) => {
  socket.on('user', (user) => {
    console.log(`Connection Made! id: ${socket.id} `);
    socket.user = user;
    users.push(socket);

    socket.emit('user', user);

    users.map(({ id }) => {
      io.to(id).emit(
        'users',
        users.map((el) => el.user)
      );
    });
  });

  socket.on('message', (message) => {
    // find sender message

    const user = users.filter((el) => el.id === socket.id)[0];

    users.map(({ id }) => {
      io.to(id).emit('message', { ...user.user, message });
    });
  });

  socket.on('createRoom', () => {
    rooms.push({
      id: shortID.generate(),
      creator: socket.id,
      activated: false,
      configs: { limitPlayers: null, message: null, mode: null },
      users: [],
    });
    socket.emit('createdRoom', rooms[rooms.length - 1].id);
  });

  socket.on('activateRoom', ({ roomId, limitPlayers, message, mode }) => {
    let room;
    let index;
    for (let i = 0; i < rooms.length; i++) {
      if (roomId === rooms[i].id) {
        rooms[i].configs = { limitPlayers, message, mode };
        rooms[i].activated = true;
        room = rooms[i];
        index = i;
      }
    }

    // const room = rooms.filter((el) => roomId === el.id)[0];
    console.log(room);
  });

  socket.emit('rooms', rooms);

  socket.on('joinRoom', (indexRoom) => {
      
  });

  socket.on('disconnect', () => {
    console.log(`disconnected user ${socket.id}`);
    users = users.filter((el) => el.id !== socket.id);
    // console.log(users.map((el) => el.user));
    users.map(({ id }) => {
      io.to(id).emit(
        'users',
        users.map((el) => el.user)
      );
    });
  });
});

app.server.listen(3000);

console.log('Server has started');
