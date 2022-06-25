/*
 * @Author: Marshall
 * @Date: 2022-06-13 13:54:42
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-13 13:54:43
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/utils/request.ts
 */
/*
 * @Author: Marshall
 * @Date: 2022-04-28 10:59:49
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-17 17:33:39
 * @Description: 
 * @FilePath: /apollo-admin/src/utils/request.ts
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { useUserStore } from '@/store'
import {APP_API_TIMEOUT, APP_API_CONTENT_TYPE, APP_API_HEADER_TOKEY_TYPE, APP_API_SUCCESS_CODE} from '@config/constant'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: APP_API_TIMEOUT,
  headers: {
    'Content-Type': APP_API_CONTENT_TYPE
  }
}); // Request interceptors

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const userStore = useUserStore()
    // 在这个位置需要统一的去注入token
    if (userStore.accessToken) {
      // 如果token存在 注入token
      config.headers.Authorization = userStore.accessToken
    }
    // 配置接口国际化
    config.headers.tokenType = APP_API_HEADER_TOKEY_TYPE
    return config // 必须返回配置
  },
  (error: any) => {
    Promise.reject(error);
  },
); // Response interceptors

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    const { code, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    // 操作正常Code数组
    const codeVerificationArray = Array.isArray(APP_API_SUCCESS_CODE)
      ? [...APP_API_SUCCESS_CODE]
      : [...[APP_API_SUCCESS_CODE]]
    if (codeVerificationArray.includes(code)) {
      return data
    } else {
      // 业务错误
      // ElMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

export default service;
