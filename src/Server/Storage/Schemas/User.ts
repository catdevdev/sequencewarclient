/* imports */
import shortID from 'shortid'
/* Classes */
import { Modification } from '../../../Modification'

class User {
  private _id: string
  private _name: string
  private _fontColor: string
  private _team: number
  private _colorSpaceship: string

  constructor(id: string, name: string, fontColor: string) {
    this._id = id
    this._name = name
    this._fontColor = fontColor
    this._team = 1
    this._colorSpaceship = 'green'
  }  

  get Id(): string {
    return this._id
  }
  set Id(value: string) {
    this._id = value
  }

  get Name(): string {
    return this._name
  }
  set Name(value: string) {
    this._name = value
  }

  get FontColor(): string {
    return this._fontColor
  }
  set FontColor(value: string) {
    this._fontColor = value
  }

  get Team(): number {
    return this._team
  }
  set Team(value: number) {
    this._team = value
  }

  get ColorSpaceship(): string {
    return this._colorSpaceship
  }
  set ColorSpaceship(value: string) {
    this._colorSpaceship = value
  }
}

export { User }
