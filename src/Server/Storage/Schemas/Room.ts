/* imports */
import shortID from 'shortid'
/* Classes */
import { Modification } from '../../../Modification'
import { User } from './User'
import { Users } from './Users'

enum UserResponse {
  infinity = 0,
}

interface IConfig {
  limitPlayers: number | null
  message: string | null
  mode: UserResponse | null
}

class Room {
  private _id: string
  private _creator: User
  private _activated: boolean
  private _configs: IConfig = { limitPlayers: null, message: null, mode: null }
  private _users: Users = new Users()

  //   id: shortID.generate(),
  //   creator: { id: socket.id, user },
  //   activated: false,
  //   configs: { limitPlayers: null, message: null, mode: null },
  //   users: [],

  constructor(creator: User) {
    this._id = shortID.generate()
    this._creator = creator
    this._activated = false
  }

  // AddUser(user: User) {
  //   // this._users.push(user)
  // }
  // RemoveUser(id: string) {}

  get Id(): string {
    return this._id
  }
  set Id(value: string) {
    this._id = value
  }

  get Creator(): User {
    return this._creator
  }
  set Creator(value: User) {
    this._creator = value
  }

  get Activated(): boolean {
    return this._activated
  }
  set Activated(value: boolean) {
    this._activated = value
  }

  get Configs(): IConfig {
    return this._configs
  }
  set Configs(value: IConfig) {
    this._configs = value
  }

  get Users(): Users {
    return this._users
  }
  set Users(value: Users) {
    this._users = value
  }
}

export { Room }
