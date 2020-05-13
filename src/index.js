/*
* 入口文件
*/
import React from 'react';
import ReactDOM from 'react-dom';
import store from '@/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import './index.css';
import zhCN from 'antd/es/locale/zh_CN';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
