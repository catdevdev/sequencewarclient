"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
/* packages */
var express = require('express');
var http = require('http');
var shortID = require('shortid');
/* Classes */
var SocketIO_1 = require("../SocketIO");
var Storage_1 = require("./Storage/Storage");
var Server = /** @class */ (function () {
    // socketIO: SocketIO
    function Server(port) {
        var app = express();
        app.server = http.createServer(app);
        var io = require('socket.io')(app.server);
        var storage = new Storage_1.Storage();
        var socketIO = new SocketIO_1.SocketIO(io, storage);
        /*  */
        // socketIO.storage(storage)
        /*  */
        app.server.listen(port);
    }
    return Server;
}());
exports.Server = Server;
