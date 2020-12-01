"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRoom = void 0;
var LeaveRoom = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function LeaveRoom(socket, io, storage) {
        var _this = this;
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* logic */
        socket.on('leaveRoom', function (idRoom) {
            var room = _this.storage.Rooms.GetById(idRoom);
            room.RemoveUser(socket.id);
            if (room.Creator.Id === socket.id) {
                _this.storage.Rooms.RemoveById(idRoom);
                room.Users.Users.map(function (_a) {
                    var Id = _a.Id;
                    io.to(Id).emit('removeRoom', room.Id);
                });
                socket.emit('destroyRoom');
                room.Users.Users.map(function (_a) {
                    var Id = _a.Id;
                    io.to(Id).emit('leaveFromDestroyRoom', socket.id);
                });
            }
            else {
                socket.emit('leaveYourselfFromRoom');
                room.Users.Users.map(function (_a) {
                    var Id = _a.Id;
                    io.to(Id).emit('leaveUserFromRoom', socket.id);
                });
                socket.emit('showAlert', 'You are left from game!');
            }
        });
    }
    return LeaveRoom;
}());
exports.LeaveRoom = LeaveRoom;
