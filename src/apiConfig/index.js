import axios from 'axios'
import { Toast } from 'antd-mobile'
import { baseURL } from '../apiConfig/config'

//添加请求拦截器
axios.interceptors.request.use( (config) => {
    //在发送请求之前做些什么
    return config;
}, (error) => {
    //对请求错误做些什么
    return Promise.reject(error);
})

//添加响应拦截器
axios.interceptors.response.use( (response) => {
    //对响应数据做些什么
    return response;
}, (error) => {
    //对响应错误做些什么
    return Promise.reject(error);
})


//封装axios请求
const api = (method, url, params) => {
    let config = {
        url: url,
        method: method,
        baseURL: baseURL,
        params: method === 'GET' || method === 'DELETE' ? params : null
    }
}



