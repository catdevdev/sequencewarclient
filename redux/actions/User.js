import { EMIT_USER, ON_USER } from '../actiontypes';

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
