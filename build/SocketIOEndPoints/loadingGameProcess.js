"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingGameProcessSocket = void 0;
var LoadingGameProcessSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function LoadingGameProcessSocket(socket, io, storage) {
        var _this = this;
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* logic */
        socket.on('loadingGameProcess', function (_a) {
            var idRoom = _a.idRoom, loadingStatus = _a.loadingStatus;
            console.log(idRoom + " - loadingGameProcess");
            console.log(loadingStatus);
            var room = _this.storage.Rooms.GetById(idRoom);
            room.Users.Users.map(function (_a) {
                var Id = _a.Id;
                io.to(Id).emit('loadingGameProcess', loadingStatus);
            });
        });
    }
    return LoadingGameProcessSocket;
}());
exports.LoadingGameProcessSocket = LoadingGameProcessSocket;
