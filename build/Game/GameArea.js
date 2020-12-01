"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameArea = void 0;
var Math_1 = require("./Math");
var GameArea = /** @class */ (function () {
    function GameArea() {
    }
    GameArea.randomPositionOnArea = function () {
        return {
            xPos: Math_1.GameMath.randomNumberMinMax(-this.width / 2, this.width / 2),
            yPos: Math_1.GameMath.randomNumberMinMax(-this.height / 2, this.height / 2),
        };
    };
    GameArea.randomDegree = function () {
        return Math_1.GameMath.randomNumberMinMax(0, 360);
    };
    GameArea.width = 14;
    GameArea.height = 6;
    return GameArea;
}());
exports.GameArea = GameArea;
