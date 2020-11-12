import {
  SHOW_MODAL_INPUT_USER,
  HIDE_MODAL_INPUT_USER,
  SHOW_MODAL_MOBILE_CHAT,
  HIDE_MODAL_MOBILE_CHAT,
  SHOW_MODAL_SETTINGS_SPACESHIP,
  HIDE_MODAL_SETTINGS_SPACESHIP,
  SHOW_MODAL_SETTINGS_ROOM,
  HIDE_MODAL_SETTINGS_ROOM,
  SHOW_MODAL_ALERT,
  HIDE_MODAL_ALERT,
} from '../actiontypes'

const initialState = {
  showInputUser: false,
  showMobileChat: false,
  showSettingsSpaceship: false,
  showSettingsRoom: false,
  alert: { show: false, text: null },
}

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_INPUT_USER:
      return { ...state, showInputUser: true }
    case HIDE_MODAL_INPUT_USER:
      return { ...state, showInputUser: false }

    case SHOW_MODAL_MOBILE_CHAT:
      return { ...state, showMobileChat: true }
    case HIDE_MODAL_MOBILE_CHAT:
      return { ...state, showMobileChat: false }

    case SHOW_MODAL_SETTINGS_SPACESHIP:
      return { ...state, showSettingsSpaceship: true }
    case HIDE_MODAL_SETTINGS_SPACESHIP:
      return { ...state, showSettingsSpaceship: false }

    case SHOW_MODAL_SETTINGS_ROOM:
      return { ...state, showSettingsRoom: true }
    case HIDE_MODAL_SETTINGS_ROOM:
      return { ...state, showSettingsRoom: false }
    case SHOW_MODAL_ALERT:
      return { ...state, alert: { show: true, text: action.payload } }
    case HIDE_MODAL_ALERT:
      return { ...state, alert: { show: false, text: null } }

    default:
      return state
  }
}
