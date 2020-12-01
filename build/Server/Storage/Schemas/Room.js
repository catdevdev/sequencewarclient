"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
/* imports */
var shortid_1 = __importDefault(require("shortid"));
var Users_1 = require("./Users");
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["infinity"] = 0] = "infinity";
})(UserResponse || (UserResponse = {}));
var Room = /** @class */ (function () {
    //   id: shortID.generate(),
    //   creator: { id: socket.id, user },
    //   activated: false,
    //   configs: { limitPlayers: null, message: null, mode: null },
    //   users: [],
    function Room(creator) {
        this._configs = { limitPlayers: null, message: null, mode: null };
        this._users = new Users_1.Users();
        this._id = shortid_1.default.generate();
        this._creator = creator;
        this._activated = false;
    }
    Room.prototype.AddUser = function (user) {
        // this._users.push(user)
    };
    Room.prototype.RemoveUser = function (id) { };
    Object.defineProperty(Room.prototype, "Id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "Creator", {
        get: function () {
            return this._creator;
        },
        set: function (value) {
            this._creator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "Activated", {
        get: function () {
            return this._activated;
        },
        set: function (value) {
            this._activated = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "Configs", {
        get: function () {
            return this._configs;
        },
        set: function (value) {
            this._configs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "Users", {
        get: function () {
            return this._users;
        },
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    return Room;
}());
exports.Room = Room;
