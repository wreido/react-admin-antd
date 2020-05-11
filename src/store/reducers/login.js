import { sessionStorage } from '@/utils/storage'
import {
  SET_ISLOGIN_STATUS
} from '../constants/login'

const INITIAL_STATE = {
  isLogin: (sessionStorage.get('isLogin') && JSON.parse(sessionStorage.get('isLogin'))) || false,//是否登录
}

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    //设置登录状态
    case SET_ISLOGIN_STATUS:
      sessionStorage.set('isLogin', JSON.stringify(action.payload.isLogin))

      console.log(`${action.payload.isLogin}`)
      return {
        ...state,
        isLogin: action.payload.isLogin
      }
    default:
      return state
  }
}