"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rooms = void 0;
/* Classes */
var Modification_1 = require("../../../Modification");
var Rooms = /** @class */ (function (_super) {
    __extends(Rooms, _super);
    function Rooms() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rooms = [];
        return _this;
    }
    Rooms.prototype.Add = function (room) {
        this._rooms.push(room);
    };
    Rooms.prototype.RemoveById = function (id) {
        var _this = this;
        this._rooms.filter(function () { return _this._rooms; });
        var removeIndex = this._rooms.map(function (_a) {
            var Id = _a.Id;
            return Id;
        }).indexOf(id);
        this._rooms.splice(removeIndex, 1);
    };
    Rooms.prototype.GetById = function (id) {
        return this._rooms.filter(function (_a) {
            var Id = _a.Id;
            return Id === id;
        })[0];
    };
    Rooms.prototype.SetById = function (id, room) {
        this._rooms.filter(function (_a) {
            var Id = _a.Id;
            Id === id;
        })[0] = room;
    };
    Rooms.prototype.GetRoomsByActivated = function () {
        return this._rooms.filter(function (_a) {
            var Activated = _a.Activated;
            return Activated;
        });
    };
    Object.defineProperty(Rooms.prototype, "Rooms", {
        get: function () {
            return this._rooms;
        },
        set: function (value) {
            this._rooms = value;
        },
        enumerable: false,
        configurable: true
    });
    return Rooms;
}(Modification_1.Modification));
exports.Rooms = Rooms;
