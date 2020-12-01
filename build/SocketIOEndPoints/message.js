"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSocket = void 0;
var MessageSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function MessageSocket(socket, io, storage) {
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        // storage.Users.Get()
        // storage.Users.
        /* logic */
        socket.on('message', function (message) {
            var user = storage.Users.GetById(socket.id);
            console.log(user);
            console.log(storage.Users.Users);
            //   const user = users.filter((el) => el.id === socket.id)[0]
            storage.Users.Users.map(function (_a) {
                var Id = _a.Id;
                io.to(Id).emit('message', {
                    userName: user.Name,
                    userColor: user.FontColor,
                    message: message,
                });
            });
            //   users.map(({ id }) => {
            //     io.to(id).emit('message', { ...user.user, message })
            //   })
        });
    }
    return MessageSocket;
}());
exports.MessageSocket = MessageSocket;
