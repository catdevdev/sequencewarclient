import {
  SHOW_MODAL_INPUT_USER,
  HIDE_MODAL_INPUT_USER,
  SHOW_MODAL_MOBILE_CHAT,
  HIDE_MODAL_MOBILE_CHAT,
  SHOW_MODAL_SETTINGS_SPACESHIP,
  HIDE_MODAL_SETTINGS_SPACESHIP,
  SHOW_MODAL_SETTINGS_ROOM,
  HIDE_MODAL_SETTINGS_ROOM,
} from '../actiontypes';

const initialState = {
  showInputUser: false,
  showMobilechat: false,
  showSettingsSpaceship: false,
  showSettingsRoom: false,
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

    case SHOW_MODAL_SETTINGS_SPACESHIP:
      return { ...state, showSettingsSpaceship: true };
    case HIDE_MODAL_SETTINGS_SPACESHIP:
      return { ...state, showSettingsSpaceship: false };

    case SHOW_MODAL_SETTINGS_ROOM:
      return { ...state, showSettingsRoom: true };
    case HIDE_MODAL_SETTINGS_ROOM:
      return { ...state, showSettingsRoom: false };
    default:
      return state;
  }
};
