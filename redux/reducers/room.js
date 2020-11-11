import {
  WRITE_ROOM_ID,
  WRITE_ROOM_CONFIG,
  SET_YOU_IS_CREATOR_ROOM,
  SET_CURRENT_ROOM,
  SET_YOU_IS_VISITOR,
  SET_USERS_CURRENT_ROOM,
  ADD_USER_CURRENT_ROOM,
  REMOVE_USER_CURRENT_ROOM,
  RESET_CURRENT_ROOM,
  SET_LOADING_GAME_STATUS,
} from '../actiontypes'

const initialState = {
  youIsCreatorRoome: false,
  youIsVisitor: false,
  roomId: null,
  roomConfig: null,
  currentRoom: null,
  usersInRoom: [],
  loadingGameStatus: 0,
}

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_ROOM_ID:
      return { ...state, roomId: action.payload }
    case WRITE_ROOM_CONFIG:
      return { ...state, roomConfig: action.payload }
    case SET_YOU_IS_CREATOR_ROOM:
      return { ...state, youIsCreatorRoom: true }
    case SET_CURRENT_ROOM:
      return { ...state, currentRoom: action.payload }
    case SET_YOU_IS_VISITOR:
      return { ...state, youIsVisitor: true }
    case SET_USERS_CURRENT_ROOM:
      return { ...state, usersInRoom: action.payload }
    case ADD_USER_CURRENT_ROOM:
      return { ...state, usersInRoom: [...state.usersInRoom, action.payload] }
    case ADD_USER_CURRENT_ROOM:
      return { ...state, usersInRoom: [...state.usersInRoom, action.payload] }
    case REMOVE_USER_CURRENT_ROOM:
      return {
        ...state,
        usersInRoom: state.usersInRoom.filter(
          ({ id }) => id !== action.payload,
        ),
      }
    case RESET_CURRENT_ROOM:
      return {
        youIsCreatorRoome: false,
        youIsVisitor: false,
        roomId: null,
        roomConfig: null,
        currentRoom: null,
        usersInRoom: [],
      }
    case SET_LOADING_GAME_STATUS:
      return { ...state, loadingGameStatus: action.payload }
    /*  */

    default:
      return state
  }
}
