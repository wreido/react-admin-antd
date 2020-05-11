import axios from 'axios'
import { message } from 'antd'

const $fetch = function fetch(url, data = {}, options = { timeout: 5000, config: {} }) {
  // if (data.constructor !== Object) return showErrorMsg('参数非法')
  if (options.constructor !== Object) return showErrorMsg('配置非法')

  const ops = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      userId: options.userId,
    },
    timeout: options.timeout,
    url,
    method: options.method ? options.method : 'POST',
    [(!options.method || options.method === 'POST') ? 'data' : 'params']: data,
    ...options.config // axios其他配置
  }

  return new Promise((resolve, reject) => {
    const instance = axios.create()

    instance(ops)
      .then(response => {
        console.warn(response)

        // 拦截非200业务状态
        if (response.data.status !== 200) {
          showErrorMsg(response.data.msg)
          reject(response)
        }

        resolve(response.data)
      })
      .catch(error => {
        console.error('请求失败', error)
        showErrorMsg()
        reject(error.response || {})
      })
  })
}

function showErrorMsg(msg = '系统异常，请稍后再试~~') {
  setTimeout(() => {
    message.error({
      content: msg,
      duration: 3
    })
  }, 32)
}

export default $fetch
export { default as $api } from './api'
