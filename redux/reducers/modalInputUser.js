import { SHOW_MODAL_INPUT_USER, HIDE_MODAL_INPUT_USER } from '../actiontypes';

const initialState = {
  show: false,
};

export const modalInputUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_INPUT_USER:
      return { ...state, show: true };
    case HIDE_MODAL_INPUT_USER:
      return { ...state, show: false };   
    default:
      return state;
  }
};
