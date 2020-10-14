import { ON_USERS } from '../actiontypes';

export function onUsers(users) {
  return {
    type: ON_USERS,
    payload: users,
  };
}
