/*
 * @Author: hackrabbit
 * @Date: 2022-05-11 14:35:36
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-11 16:55:40
 * @Description: 
 */
import Axios, { AxiosRequestConfig } from "axios";

console.log(localStorage.getItem("token"))

Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
)

Axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  }
)

export default Axios;