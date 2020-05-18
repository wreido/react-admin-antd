/*
* 系统相关
*/
import {
  SET_CONFIG_ENV,
  SET_IS_COLLAPSED,
  SET_CRUMBS_LIST,
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

// 设置面包屑
export const setCrumbs = (type, crumbsItem) => {
  return {
    type: SET_CRUMBS_LIST,
    payload: { type, crumbsItem },
  };
};
