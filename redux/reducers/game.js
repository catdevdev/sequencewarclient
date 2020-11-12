import { SET_LOADING_GAME_STATUS, SET_GAME_START } from '../actiontypes'

const initialState = {
  loadingGameStatus: 0,
  gameStart: false,
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_GAME_STATUS:
      return { ...state, loadingGameStatus: action.payload }
    case SET_GAME_START:
      return { ...state, gameStart: action.payload }
    /*  */
    default:
      return state
  }
}
