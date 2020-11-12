import {
  WRITE_ROOM_ID,
  WRITE_ROOM_CONFIG,
  SET_YOU_IS_CREATOR_ROOM,
  SET_CURRENT_ROOM,
  SET_USERS_CURRENT_ROOM,
  SET_YOU_IS_VISITOR,
  ADD_USER_CURRENT_ROOM,
  REMOVE_USER_CURRENT_ROOM,
  RESET_CURRENT_ROOM,
  SET_LOADING_GAME_STATUS,
} from '../actiontypes'

// user => {username: "catdev", color: "#fff"}
export function writeRoomId(id) {
  return {
    type: WRITE_ROOM_ID,
    payload: id,
  }
}

export function writeRoomConfig(config) {
  return {
    type: WRITE_ROOM_CONFIG,
    payload: config,
  }
}

export function setYouIsCreatorRoom() {
  return {
    type: SET_YOU_IS_CREATOR_ROOM,
  }
}

export function setCurrentRoom(room) {
  return {
    type: SET_CURRENT_ROOM,
    payload: room,
  }
}

export function setUsersCurrentRoom(room) {
  return {
    type: SET_USERS_CURRENT_ROOM,
    payload: room,
  }
}

export function setYouIsVisitor() {
  return {
    type: SET_YOU_IS_VISITOR,
  }
}

export function addUserCurrentRoom(user) {
  return {
    type: ADD_USER_CURRENT_ROOM,
    payload: user,
  }
}

export function removeUserCurrentRoom(id) {
  return {
    type: REMOVE_USER_CURRENT_ROOM,
    payload: id,
  }
}

export function resetCurrentRoom() {
  return {
    type: RESET_CURRENT_ROOM,
  }
}

