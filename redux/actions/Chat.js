import {
  ADD_MESSAGE,
  ON_MESSAGES,
  SHOW_MODAL_MOBILE_CHAT,
  HIDE_MODAL_MOBILE_CHAT,
} from '../actiontypes';

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
}

export function onMessages(messages) {
  return {
    type: ON_MESSAGES,
    payload: messages,
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
