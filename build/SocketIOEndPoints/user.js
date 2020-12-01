"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSocket = void 0;
var User_1 = require("../Server/Storage/Schemas/User");
var UserSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function UserSocket(socket, io, storage) {
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        // storage.Users.Get()
        // storage.Users.
        /* logic */
        socket.on('user', function (user) {
            storage.Users.Add(new User_1.User(socket.id, user.userName, user.userColor));
            socket.emit('user', __assign({ id: socket.id }, user));
            socket.emit('rooms', storage.Rooms.GetRoomsByActivated().map(function (room) {
                return {
                    id: room.Id,
                    creator: {
                        id: room.Creator.Id,
                        user: {
                            userName: room.Creator.Name,
                            userColor: room.Creator.FontColor,
                        },
                    },
                    activate: room.Activated,
                    configs: {
                        limitPlayers: room.Configs.limitPlayers,
                        message: room.Configs.message,
                        mode: room.Configs.mode,
                    },
                };
            }));
            storage.Users.Users.map(function (_a) {
                var Id = _a.Id;
                io.to(Id).emit('users', storage.Users.Users.map(function (_a) {
                    var Id = _a.Id, Name = _a.Name, FontColor = _a.FontColor;
                    return { id: Id, userName: Name, userColor: FontColor };
                }));
            });
            console.log("User created nickname: " + socket.id + " ");
        });
    }
    return UserSocket;
}());
exports.UserSocket = UserSocket;
