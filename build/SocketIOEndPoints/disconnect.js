"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisconnectSocket = void 0;
var DisconnectSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function DisconnectSocket(socket, io, storage) {
        var _this = this;
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* logic */
        socket.on('disconnect', function () {
            console.log("disconnected user " + socket.id);
            _this.storage.Users.RemoveById(socket.id);
            _this.storage.Users.Users.map(function (_a) {
                var Id = _a.Id;
                io.to(Id).emit('users', _this.storage.Users.Users.map(function (_a) {
                    var Id = _a.Id, Name = _a.Name, FontColor = _a.FontColor;
                    return { id: Id, userName: Name, userColor: FontColor };
                }));
            });
        });
    }
    return DisconnectSocket;
}());
exports.DisconnectSocket = DisconnectSocket;
