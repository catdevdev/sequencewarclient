"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartGameSessionSocket = void 0;
var StartGameSessionSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function StartGameSessionSocket(socket, io, storage) {
        var _this = this;
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        // storage.Users.Get()
        // storage.Users.
        /* logic */
        socket.on('startGameSession', function (idRoom) {
            console.log('||| START GAME |||');
            console.log("idRoom: " + idRoom);
            var room = _this.storage.Rooms.GetById(idRoom);
            room.Users.Users.map(function (_a) {
                var Id = _a.Id;
                io.to(Id).emit('startGameSession');
            });
        });
    }
    return StartGameSessionSocket;
}());
exports.StartGameSessionSocket = StartGameSessionSocket;
