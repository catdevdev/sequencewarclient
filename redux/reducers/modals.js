import {
  SHOW_MODAL_INPUT_USER,
  HIDE_MODAL_INPUT_USER,
  SHOW_MODAL_MOBILE_CHAT,
  HIDE_MODAL_MOBILE_CHAT,
} from '../actiontypes';

const initialState = {
  showInputUser: false,
  showMobilechat: false,
};

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_INPUT_USER:
      return { ...state, showInputUser: true };
    case HIDE_MODAL_INPUT_USER:
      return { ...state, showInputUser: false };
    case SHOW_MODAL_MOBILE_CHAT:
      return { ...state, showMobilechat: true };
    case HIDE_MODAL_MOBILE_CHAT:
      return { ...state, showMobilechat: false };
    default:
      return state;
  }
};
