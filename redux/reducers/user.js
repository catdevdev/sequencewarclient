import { EMIT_USER, ON_USER } from '../actiontypes'

const initialState = {}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_USER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
