import {
  ADD_MESSAGE,
  ON_MESSAGES,
  SHOW_MODAL_MOBILE_CHAT,
  HIDE_MODAL_MOBILE_CHAT,
} from '../actiontypes';

const initialState = {
  messages: [],
  showMobileChat: false,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case ON_MESSAGES:
      return action.payload;
    case SHOW_MODAL_MOBILE_CHAT:
      return { ...state, showMobileChat: true };
    case HIDE_MODAL_MOBILE_CHAT:
      return { ...state, showMobileChat: false };
    default:
      return state;
  }
};
