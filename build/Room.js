"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var shortid_1 = __importDefault(require("shortid"));
var Room = /** @class */ (function () {
    function Room() {
        this.id = shortid_1.default.generate();
        // creator: User =
    }
    return Room;
}());
exports.Room = Room;
