/* Classes */
import { Users } from './Schemas/Users'
import { Rooms } from './Schemas/Rooms'

class Storage {
  private _users: Users = new Users()
  private _rooms: Rooms = new Rooms()

  get Users(): Users {
    return this._users
  }

  get Rooms(): Rooms {
    return this._rooms
  }
}

export { Storage }
