/* Classes */
import { Modification } from '../../../Modification'
import { User } from '../Schemas/User'

class Users extends Modification {
  private users: User[] = []

  Add(user: User) {
    this.users.push(user)
  }

  RemoveById(id: string) {
    this.users.filter(() => this.users)
    const removeIndex = this.users.map((item) => item.Id).indexOf(id)
    this.users.splice(removeIndex, 1)
  }

  GetById(id: string) {
    return this.users.filter(({ Id }) => Id === id)[0]
  }

  get Users(): User[] {
    return this.users
  }

  set Users(value: User[]) {
    this.users = value
  }
}

export { Users }
