"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIOEndPoints = void 0;
/* SocketIO Endpoints */
var user_1 = require("./SocketIOEndPoints/user");
var message_1 = require("./SocketIOEndPoints/message");
var createRoom_1 = require("./SocketIOEndPoints/createRoom");
var activateRoom_1 = require("./SocketIOEndPoints/activateRoom");
var joinRoom_1 = require("./SocketIOEndPoints/joinRoom");
var startGameSession_1 = require("./SocketIOEndPoints/startGameSession");
var loadingGameProcess_1 = require("./SocketIOEndPoints/loadingGameProcess");
var gameLoaded_1 = require("./SocketIOEndPoints/gameLoaded");
var game_joystickController_1 = require("./SocketIOEndPoints/game-joystickController");
var leaveRoom_1 = require("./SocketIOEndPoints/leaveRoom");
var disconnect_1 = require("./SocketIOEndPoints/disconnect");
var SocketIOEndPoints = /** @class */ (function () {
    //   private socketIOEndPoints: SocketIOEndPoint[] = []
    function SocketIOEndPoints(socket, io, storage) {
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* init all socketEndPoints */
        /*  */
        this.user = new user_1.UserSocket(this.socket, this.io, this.storage);
        this.message = new message_1.MessageSocket(this.socket, this.io, this.storage);
        this.createRoom = new createRoom_1.CreatedRoomSocket(this.socket, this.io, this.storage);
        this.activateRoom = new activateRoom_1.ActivateRoom(this.socket, this.io, this.storage);
        this.joinRoom = new joinRoom_1.JoinRoomSocket(this.socket, this.io, this.storage);
        this.startGameSession = new startGameSession_1.StartGameSessionSocket(this.socket, this.io, this.storage);
        this.loadingGameProcessSession = new loadingGameProcess_1.LoadingGameProcessSocket(this.socket, this.io, this.storage);
        this.gameLoadedSession = new gameLoaded_1.GameLoadedSocket(this.socket, this.io, this.storage);
        this.gameJoystickController = new game_joystickController_1.GameJoystickControllerSocket(this.socket, this.io, this.storage);
        this.leaveRoom = new leaveRoom_1.LeaveRoom(this.socket, this.io, this.storage);
        this.disconnect = new disconnect_1.DisconnectSocket(this.socket, this.io, this.storage);
    }
    return SocketIOEndPoints;
}());
exports.SocketIOEndPoints = SocketIOEndPoints;
