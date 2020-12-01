import shortID from 'shortid'

class Room {
  id: string = shortID.generate()
  // creator: User =
}

// {
//     id: shortID.generate(),
//     creator: { id: socket.id, user },
//     activated: false,
//     configs: { limitPlayers: null, message: null, mode: null },
//     users: [],
// }

export { Room }
