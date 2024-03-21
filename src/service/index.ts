import { BASE_URL, TIME_OUT } from './config'
import Http from './request'

const http = new Http({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default http
