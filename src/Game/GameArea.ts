import { GameMath } from './Math'

interface ICoordinates {
  xPos: number
  yPos: number
}

class GameArea {
  static width: number = 14
  static height: number = 6

  static randomPositionOnArea(): ICoordinates {
    return {
      xPos: GameMath.randomNumberMinMax(-this.width / 2, this.width / 2),
      yPos: GameMath.randomNumberMinMax(-this.height / 2, this.height / 2),
    }
  }
  static randomDegree(): number {
    return GameMath.randomNumberMinMax(0, 360)
  }
}

export { GameArea }
