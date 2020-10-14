/* packages */
const express = require('express');
const http = require('http');
/* initializations */
const app = express();
app.server = http.createServer(app);
const io = require('socket.io')(app.server);
/* utils */
const removeElementByName = require('./utils');
/* data */
let users = [];
const usersData = [];

io.on('connection', (socket) => {
  let currentUser;

  socket.on('user', (user) => {
    currentUser = user;
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

    console.log(users.map((el) => el.user));
    console.log(user);
  });

  socket.on('disconnect', () => {
    console.log(`disconnected user ${socket.id}`);
    users = users.filter((el) => el.id == !socket.id);
    console.log(users.map((el) => console.log(el.user)));
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
