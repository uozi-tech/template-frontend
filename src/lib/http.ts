import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import router from '~/router'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
  transformRequest: [
    function (data, headers) {
      if (!headers || headers['Content-Type'] === 'multipart/form-data;charset=UTF-8')
      {return data}
      else {headers['Content-Type'] = 'application/json'}

      return JSON.stringify(data)
    },
  ],
})

instance.interceptors.request.use(
  config => {
    NProgress.start()

    return config
  },
  err => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  response => {
    NProgress.done()

    return Promise.resolve(response.data)
  },
  async error => {
    NProgress.done()

    switch (error.response.status) {
    case 401:
    case 403:
      await router.push('/login')
      break
    }

    return Promise.reject(error.response.data)
  },
)

const http = {
  get<T=any>(url: string, config: AxiosRequestConfig = {}) {
    return instance.get<T>(url, config)
  },
  post<T=any>(url: string, data: any = undefined, config: AxiosRequestConfig = {}) {
    return instance.post<T>(url, data, config)
  },
  put<T=any>(url: string, data: any = undefined, config: AxiosRequestConfig = {}) {
    return instance.put<T>(url, data, config)
  },
  delete<T=any>(url: string, config: AxiosRequestConfig = {}) {
    return instance.delete<T>(url, config)
  },
  patch<T=any>(url: string, config: AxiosRequestConfig = {}) {
    return instance.patch<T>(url, config)
  },
}

export default http
