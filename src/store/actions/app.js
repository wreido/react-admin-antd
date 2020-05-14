import {
  SET_CONFIG_ENV,
  SET_IS_COLLAPSED,
} from '../constants/app';

// 设置当前环境
export const setConfigEnv = (ENV) => {
  return {
    type: SET_CONFIG_ENV,
    payload: { ENV },
  };
};

// 设置menu收缩状态
export const setCollapsed = (isCollapsed) => {
  return {
    type: SET_IS_COLLAPSED,
    payload: { isCollapsed },
  };
};
