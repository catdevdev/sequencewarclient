"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
/* Classes */
var Users_1 = require("./Schemas/Users");
var Rooms_1 = require("./Schemas/Rooms");
var Storage = /** @class */ (function () {
    function Storage() {
        this._users = new Users_1.Users();
        this._rooms = new Rooms_1.Rooms();
    }
    Object.defineProperty(Storage.prototype, "Users", {
        get: function () {
            return this._users;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Storage.prototype, "Rooms", {
        get: function () {
            return this._rooms;
        },
        enumerable: false,
        configurable: true
    });
    return Storage;
}());
exports.Storage = Storage;
