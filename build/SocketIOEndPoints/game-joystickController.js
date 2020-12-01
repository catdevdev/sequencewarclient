"use strict";
// socket.on('game-joystickController1', ({ jsonData, idRoom }) => {
//   const room = rooms.filter(({ id }) => id === idRoom)[0]
//   io.to(room.creator.id).emit('game-joystickController1', jsonData)
// })
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameJoystickControllerSocket = void 0;
var GameJoystickControllerSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function GameJoystickControllerSocket(socket, io, storage) {
        var _this = this;
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* logic */
        socket.on('game-joystickController1', function (_a) {
            var jsonData = _a.jsonData, idRoom = _a.idRoom;
            var room = _this.storage.Rooms.GetById(idRoom);
            io.to(room.Creator.Id).emit('game-joystickController1', jsonData);
        });
        socket.on('game-joystickController2', function (_a) {
            var jsonData = _a.jsonData, idRoom = _a.idRoom;
            var room = _this.storage.Rooms.GetById(idRoom);
            io.to(room.Creator.Id);
        });
    }
    return GameJoystickControllerSocket;
}());
exports.GameJoystickControllerSocket = GameJoystickControllerSocket;
