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

/* ModalInputUser */
export function showModalInputUser() {
  return {
    type: SHOW_MODAL_INPUT_USER,
  };
}

export function hideModalInputUser() {
  return {
    type: HIDE_MODAL_INPUT_USER,
  };
}

/* ModalMobileChat */
export function showModalMobileChat() {
  return {
    type: SHOW_MODAL_MOBILE_CHAT,
  };
}

export function hideModalMobileChat() {
  return {
    type: HIDE_MODAL_MOBILE_CHAT,
  };
}

/* ModalSettingsSpaceShip */
export function showModalSettingsSpaceShip() {
  return {
    type: SHOW_MODAL_SETTINGS_SPACESHIP,
  };
}

export function hideModalSettingsSpaceShip() {
  return {
    type: HIDE_MODAL_SETTINGS_SPACESHIP,
  };
}

/* ModalSettingsRoom */
export function showModalSettingsRoom() {
  return {
    type: SHOW_MODAL_SETTINGS_ROOM,
  };
}

export function hideModalSettingsRoom() {
  return {
    type: HIDE_MODAL_SETTINGS_ROOM,
  };
}
