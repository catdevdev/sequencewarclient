import {
  SHOW_MODAL_INPUT_USER,
  HIDE_MODAL_INPUT_USER,
  SHOW_MODAL_MOBILE_CHAT,
  HIDE_MODAL_MOBILE_CHAT,
} from '../actiontypes';

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
