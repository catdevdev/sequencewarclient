"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinRoomSocket = void 0;
var JoinRoomSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function JoinRoomSocket(socket, io, storage) {
        var _this = this;
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* logic */
        socket.on('joinRoom', function (idRoom) {
            //   const userInRoom = {
            //     id: users.filter((el) => el.id === socket.id)[0].id,
            //     user: users.filter((el) => el.id === socket.id)[0].user,
            //     team: 1,
            //     colorSpaceship: 'green',
            //   }
            var room = _this.storage.Rooms.GetById(idRoom);
            var user = _this.storage.Users.GetById(socket.id);
            user.Team = 1;
            user.ColorSpaceship = 'green';
            room.Users.Add(user);
            _this.storage.Rooms.SetById(idRoom, room);
            room.Users.Users.map(function (_a) {
                var Id = _a.Id;
                io.to(Id).emit('addUserInRoom', {
                    id: _this.storage.Users.GetById(socket.id).Id,
                    user: _this.storage.Users.GetById(socket.id).Name,
                    team: 1,
                    colorSpaceship: 'green',
                });
            });
            io.to(room.Creator.Id).emit('addUserInRoom', {
                id: _this.storage.Users.GetById(socket.id).Id,
                user: _this.storage.Users.GetById(socket.id).Name,
                team: 1,
                colorSpaceship: 'green',
            });
            socket.emit('confirmJoinRoom', {
                id: room.Id,
                creator: {
                    id: room.Creator.Id,
                    user: {
                        userName: room.Creator.Name,
                        userColor: room.Creator.FontColor,
                    },
                },
                activated: true,
                configs: {
                    limitPlayers: null,
                    message: null,
                    mode: null,
                },
                users: room.Users.Users.map(function (el) {
                    return {
                        user: { id: el.Id, userName: el.Name, userColor: el.FontColor },
                        team: el.Team,
                        colorSpaceship: el.ColorSpaceship,
                    };
                }),
            });
        });
    }
    return JoinRoomSocket;
}());
exports.JoinRoomSocket = JoinRoomSocket;
