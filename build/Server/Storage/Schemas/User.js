"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, fontColor) {
        this._id = id;
        this._name = name;
        this._fontColor = fontColor;
        this._team = 1;
        this._colorSpaceship = 'green';
    }
    Object.defineProperty(User.prototype, "Id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "FontColor", {
        get: function () {
            return this._fontColor;
        },
        set: function (value) {
            this._fontColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Team", {
        get: function () {
            return this._team;
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "ColorSpaceship", {
        get: function () {
            return this._colorSpaceship;
        },
        set: function (value) {
            this._colorSpaceship = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
