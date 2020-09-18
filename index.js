const server = require("http").createServer();
const io = require("socket.io")(server);

// io.on('connection', client => {
//   client.on('event', data => { /* … */ });
//   client.on('disconnect', () => { /* … */ });
// });

server.listen(5000);

console.log("server");
