import axios from 'axios';
import useToken from '../stores/token'
import config from '../config'
import router from '../router'
import { showLoadingToast, showToast, closeToast} from 'vant'

const baseURL = config.baseURL 

const service = axios.create({ baseURL })

// 请求拦截器
service.interceptors.request.use(config => {
  const { token } = useToken() // 添加了一个JWT令牌到请求头中。
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner'
  })
  if (token) {
    config.headers.jwt = token
  }
  return config
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    closeToast()
    const { errno, data, errmsg } = response.data
    if (errno === 0) {
      if (errmsg !== '') {
        showToast({
          message: errmsg,
          type: 'success'
        })
      }
      return data || true
    }
    showToast({
      message: errmsg,
      type: 'error'
    })
    if (errno === 2) {
      router.push({ name: 'login' })
    }
    return false
  },
  error => {
    closeToast()
    showToast ({
      message: '请求失败',
      type: 'fail'
    })
    console.log(error)
  }
)

export default service
