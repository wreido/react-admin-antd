/*
* 系统相关
*/
import { sessionStorage } from '@/utils/storage';
import {
  SET_CONFIG_ENV,
  SET_IS_COLLAPSED,
  SET_CRUMBS_LIST,
} from '../constants/app';

const INITIAL_STATE = {
  ENV: (sessionStorage.get('ENV') && JSON.parse(sessionStorage.get('ENV'))),
  isCollapsed: false,
  crumbsList: sessionStorage.get('crumbsList') || [],
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    // 设置当前环境
    case SET_CONFIG_ENV:
      sessionStorage.set('ENV', JSON.stringify(action.payload.ENV));
      return {
        ...state,
        ENV: action.payload.ENV,
      };
    // 设置menu收缩状态
    case SET_IS_COLLAPSED:
      return {
        ...state,
        isCollapsed: action.payload.isCollapsed,
      };
    // 设置面包屑
    case SET_CRUMBS_LIST:
      sessionStorage.set('crumbsList', action.payload.type === 'add' ? state.crumbsList.concat(action.payload.crumbsItem) : action.payload.crumbsItem);

      return {
        ...state,
        crumbsList: action.payload.type === 'add' ? state.crumbsList.concat(action.payload.crumbsItem) : action.payload.crumbsItem,
      };
    default:
      return state;
  }
}
