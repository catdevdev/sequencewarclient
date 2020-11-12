import { SET_LOADING_GAME_STATUS, SET_GAME_START } from '../actiontypes'

export function setLoadingGameStatus(progress) {
  return {
    type: SET_LOADING_GAME_STATUS,
    payload: progress,
  }
}

export function setGameStart(payload) {
  return {
    type: SET_GAME_START,
    payload,
  }
}
