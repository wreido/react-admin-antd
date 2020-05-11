import {
  SET_ISLOGIN_STATUS,
} from '../constants/login';

// 设置登录状态
export const setIsLogin = (isLogin) => {
  return {
    type: SET_ISLOGIN_STATUS,
    payload: { isLogin },
  };
};
