import axios from "axios";
import { Message } from "element-ui";

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 500000000000000 // request timeout
})

// 响应拦截
service.interceptors.response.use(
  response => {
      const res = response.data
        if (res.code !== 0) {
            Message({
                message: res.msg || 'Error',
                type: 'error',
                duration: 3 * 1000
            })
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        Message({
            message: error,
            type: 'error',
            duration: 5 * 1000
        })
        // location.reload()
        return Promise.reject(error)
    }
)

export default service
