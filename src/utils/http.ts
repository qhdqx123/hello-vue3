import axios from 'axios'
// import qs from 'qs'
import store from '@/store'

const http = axios.create({
  baseURL: '',
  timeout: 10 * 3000
})

// request拦截器
http.interceptors.request.use(config => {
  const { user } = store.state
  if (user && user.token) {
    config.headers.token = user.token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// response拦截器
http.interceptors.response.use(res => {
  if (res.status === 200) {
    console.log('success')
  } else {
    console.log('error')
  }
}, error => {
  return Promise.reject(error)
})

export default http
