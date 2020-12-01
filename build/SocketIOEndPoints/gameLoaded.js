"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLoadedSocket = void 0;
var shortid_1 = __importDefault(require("shortid"));
/* static Classes */
var GameArea_1 = require("../Game/GameArea");
var GameLoadedSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function GameLoadedSocket(socket, io, storage) {
        var _this = this;
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* logic */
        socket.on('gameLoaded', function (idRoom) {
            console.log('!!!GAME IS CONNECTED TO SERVER!!!');
            var room = _this.storage.Rooms.GetById(idRoom);
            room.Users.Users.map(function (_a) {
                var Id = _a.Id;
                io.to(Id).emit('gameStart');
            });
            var jsonDataUsers = JSON.stringify({
                spawns: room.Users.Users.map(function (_a) {
                    var Id = _a.Id, Name = _a.Name, Team = _a.Team, ColorSpaceship = _a.ColorSpaceship;
                    return {
                        typeCall: 'spawn',
                        instantiate: {
                            entityData: {
                                type: 'playerJoystick',
                                id: Id,
                                entityName: 'arrow',
                                nickName: Name,
                                team: Team,
                                color: ColorSpaceship,
                            },
                        },
                        positionData: {
                            position: {
                                posX: GameArea_1.GameArea.randomPositionOnArea().xPos,
                                posY: GameArea_1.GameArea.randomPositionOnArea().yPos,
                            },
                            rotate: { deg: GameArea_1.GameArea.randomDegree() },
                        },
                    };
                }),
            });
            var bots = [
                { id: shortid_1.default.generate(), team: 0 },
                { id: shortid_1.default.generate(), team: 0 },
                { id: shortid_1.default.generate(), team: 0 },
            ];
            var jsonDataBots = JSON.stringify({
                spawns: bots.map(function (_a) {
                    var id = _a.id, team = _a.team;
                    return {
                        typeCall: 'spawn',
                        instantiate: {
                            entityData: {
                                type: 'playerBot',
                                id: id,
                                entityName: 'arrow',
                                nickName: "bot-" + id,
                                team: team,
                                color: 'red',
                            },
                        },
                        positionData: {
                            position: {
                                posX: GameArea_1.GameArea.randomPositionOnArea().xPos,
                                posY: GameArea_1.GameArea.randomPositionOnArea().yPos,
                            },
                            rotate: { deg: GameArea_1.GameArea.randomDegree() },
                        },
                    };
                }),
            });
            setTimeout(function () {
                socket.emit('game-MultipleSpawn', jsonDataUsers);
            }, 3000);
            setInterval(function () {
                socket.emit('game-MultipleSpawn', jsonDataBots);
            }, 10000);
            // const movementCall = {
            //   id: 3424323
            //   posX: 50,
            //   posY: 30,
            // }
        });
    }
    return GameLoadedSocket;
}());
exports.GameLoadedSocket = GameLoadedSocket;
