import {
  ADD_MESSAGE,
  ON_MESSAGES,
} from '../actiontypes';

const initialState = {
  messages: [],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case ON_MESSAGES:
      return action.payload;

    default:
      return state;
  }
};
