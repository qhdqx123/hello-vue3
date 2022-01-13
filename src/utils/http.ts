import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

const http = axios.create({
  baseURL: '',
  timeout: 10 * 3000
})

// request拦截器
http.interceptors.request.use(config => {
  return config
})
// response拦截器
http.interceptors.response.use(res => {
  if (res.status === 200) {
    console.log('success')
  } else {
    console.log('error')
  }
})

export default http
