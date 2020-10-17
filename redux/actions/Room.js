import {
  WRITE_ROOM_ID,
  WRITE_ROOM_CONFIG,
  SET_YOU_IS_CREATOR_ROOM,
} from '../actiontypes';

// user => {username: "catdev", color: "#fff"}
export function writeRoomId(id) {
  return {
    type: WRITE_ROOM_ID,
    payload: id,
  };
}

export function writeRoomConfig(config) {
  return {
    type: WRITE_ROOM_CONFIG,
    payload: config,
  };
}

export function setYouIsCreatorRoom() {
  return {
    type: SET_YOU_IS_CREATOR_ROOM,
  };
}
