import { combineReducers } from 'redux';
import app from './app';// 系统相关
import login from './login';// 登录相关
import test from './test';

export default combineReducers({
  app,
  login,
  test,
});
