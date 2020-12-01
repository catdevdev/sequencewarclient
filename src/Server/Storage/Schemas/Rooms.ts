/* Classes */
import { Modification } from '../../../Modification'
import { Room } from '../Schemas/Room'

class Rooms extends Modification {
  private _rooms: Room[] = []

  Add(room: Room) {
    this._rooms.push(room)
  }

  RemoveById(id: string) {
    this._rooms.filter(() => this._rooms)
    const removeIndex = this._rooms.map(({ Id }) => Id).indexOf(id)
    this._rooms.splice(removeIndex, 1)
  }

  GetById(id: string): Room {
    return this._rooms.filter(({ Id }) => Id === id)[0]
  }

  SetById(id: string, room: Room) {
    this._rooms.filter(({ Id }) => {
      Id === id
    })[0] = room
  }

  GetRoomsByActivated(): Room[] {
    return this._rooms.filter(({ Activated }) => Activated)
  }

  get Rooms(): Room[] {
    return this._rooms
  }
  set Rooms(value: Room[]) {
    this._rooms = value
  }
}

export { Rooms }
