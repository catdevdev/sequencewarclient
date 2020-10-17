import {
  WRITE_ROOM_ID,
  WRITE_ROOM_CONFIG,
  SET_YOU_IS_CREATOR_ROOM,
  ON_CREATED_ROOM,
  ON_ENTER_IN_ROOM,
  ON_LEAVE_FROM_ROOM,
  ON_START_GAME,
} from '../actiontypes';

const initialState = {
  youIsCreatorRoom: false,
  roomId: null,
  roomConfig: null,
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_ROOM_ID:
      return { ...state, roomId: action.payload };
    case WRITE_ROOM_CONFIG:
      return { ...state, roomConfig: action.payload };
    case SET_YOU_IS_CREATOR_ROOM:
      return { ...state, youIsCreatorRoom: true };
    default:
      return state;
  }
};
