class GameMath {
  static randomNumberMinMax(minValue: number, maxValue: number): number {
    return Math.random() * (maxValue - minValue) + minValue
  }
}

export { GameMath }
