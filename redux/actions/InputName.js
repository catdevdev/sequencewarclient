import {
  SHOW_MODAL_INPUT_USER,
  HIDE_MODAL_INPUT_USER,
  EMIT_USER,
  ON_USER,
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

// user => {username: "catdev", color: "#fff"}
export function emitUser(user) {
  return {
    type: EMIT_USER,
    payload: user,
  };
}

export function onUser(user) {
  return {
    type: ON_USER,
    payload: user,
  };
}
