import { EMIT_USER, ON_USER } from '../actiontypes';



export function onUser(user) {
  return {
    type: ON_USER,
    payload: user,
  };
}
