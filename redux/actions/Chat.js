import {
  ADD_MESSAGE,
  ON_MESSAGES,
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

