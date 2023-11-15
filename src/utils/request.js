import axios from 'axios'
import {config} from '@/config/index'

// 创建axios实例
const service = axios.create({
  baseURL: config.api, // api的base_url
  timeout: 8000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * status 可结合自己业务进行修改
  */
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
