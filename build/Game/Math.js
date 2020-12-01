"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMath = void 0;
var GameMath = /** @class */ (function () {
    function GameMath() {
    }
    GameMath.randomNumberMinMax = function (minValue, maxValue) {
        return Math.random() * (maxValue - minValue) + minValue;
    };
    return GameMath;
}());
exports.GameMath = GameMath;
