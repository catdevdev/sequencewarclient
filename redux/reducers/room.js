import {
  EMIT_CREATED_ROOM,
  ON_CREATED_ROOM,
  EMIT_ENTER_IN_ROOM,
  ON_ENTER_IN_ROOM,
  EMIT_LEAVE_FROM_ROOM,
  ON_LEAVE_FROM_ROOM,
  EMIT_START_GAME,
  ON_START_GAME,
} from '../actiontypes';

const initialState = {};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
