const shortID = require('shortid');

const Vector2 = require('./Vector2');

module.exports = class Player {
  constructor() {
    this.userName;
    this.fontColor;
    this.id = shortID.generate();
    this.position = new Vector2();
  }
};
