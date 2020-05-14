import { sessionStorage } from '@/utils/storage';
import {
  SET_CONFIG_ENV,
  SET_IS_COLLAPSED,
} from '../constants/app';

const INITIAL_STATE = {
  ENV: (sessionStorage.get('ENV') && JSON.parse(sessionStorage.get('ENV'))),
  isCollapsed: false,
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
    // 设置当前环境
    case SET_IS_COLLAPSED:
      return {
        ...state,
        isCollapsed: action.payload.isCollapsed,
      };
    default:
      return state;
  }
}
