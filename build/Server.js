"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
/* packages */
var express = require('express');
var http = require('http');
var shortID = require('shortid');
/* Classes */
var SocketIO_1 = require("./SocketIO");
var Server = /** @class */ (function () {
    function Server(port) {
        var app = express();
        app.server = http.createServer(app);
        var io = require('socket.io')(app.server);
        this.socketIO = new SocketIO_1.SocketIO(io);
        /*  */
        this.socketIO.
            /*  */
            app.server.listen(port);
    }
    return Server;
}());
exports.Server = Server;
