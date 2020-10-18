import { WRITE_ROOMS, ADD_ROOM } from '../actiontypes';

// user => {username: "catdev", color: "#fff"}
export function writeRooms(rooms) {
  return {
    type: WRITE_ROOMS,
    payload: rooms,
  };
}

export function addRoom(room) {
  return {
    type: ADD_ROOM,
    payload: room,
  };
}