import { ON_USERS } from '../actiontypes';

const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_USERS:
      // return state;
      return action.payload;

    default:
      return state;
  }
};
