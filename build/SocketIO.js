"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIO = void 0;
/* Classes */
var SocketIOEndPoints_1 = require("./SocketIOEndPoints");
var SocketIO = /** @class */ (function () {
    function SocketIO(io, storage) {
        this.io = io;
        this.storage = storage;
        /* init socketIO */
        io.on('connection', function (socket) {
            var socketIOEndPoints = new SocketIOEndPoints_1.SocketIOEndPoints(socket, io, storage);
        });
    }
    return SocketIO;
}());
exports.SocketIO = SocketIO;
