import {
  SET_ISLOGIN_STATUS
} from '../constants/login'

const INITIAL_STATE = {
  isLogin: true,
}

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ISLOGIN_STATUS:
      return {
        ...state,
        isLogin: action.payload.isLogin
      }
    default:
      return state
  }
}