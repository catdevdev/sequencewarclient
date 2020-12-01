"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateRoom = void 0;
var ActivateRoom = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function ActivateRoom(socket, io, storage) {
        var _this = this;
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* logic */
        socket.on('activateRoom', function (_a) {
            var roomId = _a.roomId, limitPlayers = _a.limitPlayers, message = _a.message, mode = _a.mode;
            var room = _this.storage.Rooms.GetById(roomId);
            //   for (let i = 0; i < this.storage.Rooms.Rooms.length; i++) {
            //     if (roomId === rooms[i].id) {
            //       rooms[i].configs = { limitPlayers, message, mode }
            //       rooms[i].activated = true
            //       room = rooms[i]
            //       index = i
            //     }
            //   }
            room.Configs = { limitPlayers: limitPlayers, message: message, mode: mode };
            room.Activated = true;
            socket.emit('addedRoom', {
                id: room.Id,
                creator: {
                    user: {
                        userName: room.Creator.Name,
                        userColor: room.Creator.FontColor,
                    },
                },
                configs: {
                    limitPlayers: room.Configs.limitPlayers,
                    mode: room.Configs.mode,
                    message: room.Configs.message,
                },
            });
            _this.storage.Users.Users.map(function (_a) {
                var Id = _a.Id;
                io.to(Id).emit('addedRoom', {
                    id: room.Id,
                    creator: {
                        user: {
                            userName: room.Creator.Name,
                            userColor: room.Creator.FontColor,
                        },
                    },
                    configs: {
                        limitPlayers: room.Configs.limitPlayers,
                        mode: room.Configs.mode,
                        message: room.Configs.message,
                    },
                });
            });
        });
    }
    return ActivateRoom;
}());
exports.ActivateRoom = ActivateRoom;
