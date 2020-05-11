import {
  SET_CONFIG_ENV,
} from '../constants/app';

// 设置当前环境
export const setConfigEnv = (ENV) => {
  return {
    type: SET_CONFIG_ENV,
    payload: { ENV },
  };
};
