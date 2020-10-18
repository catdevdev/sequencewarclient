import { WRITE_ROOMS, ADD_ROOM } from '../actiontypes';

const initialState = {
  rooms: null,
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_ROOMS:
      return { ...state, rooms: action.payload };
    case ADD_ROOM:
      return { ...state, rooms: [...state.rooms, action.payload] };
    
    default:
      return state;
  }
};
