import { Room } from './Server/Storage/Schemas/Room'
import { User } from './Server/Storage/Schemas/User'

abstract class Modification {
  abstract Add(intance: User | Room): void
  abstract RemoveById(id: string): void
  abstract GetById(id: string): any
}

export { Modification }
