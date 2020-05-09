import {
  SET_ISLOGIN_STATUS
} from '../constants/login'

export const setIsLogin = (isLogin) => {
  return {
    type: SET_ISLOGIN_STATUS,
    payload: { isLogin }
  }
}