import axios from 'axios';
import { message } from 'antd';
import { getToken } from './auth'
const service = axios.create({
    baseURL: 'https://api.chogath.top/imenu-api',
    timeout: 5000,
})

service.interceptors.request.use(
    config => {
        if (config.url !== "/auth/UserLogin") {
            if (!getToken()) {
                // message.error('用户权限过期，请重新登录');
                return Promise.reject('用户权限过期，请重新登录')
            }
            config.headers['token'] = getToken();
        }
        return config
    }, error => {
        message.error('请求异常！');
        return Promise.reject(error)
    })


service.interceptors.response.use(
    response => {
        console.log(response, 'res')
        const res = response.data;
        if(res.code !== 200){
            return Promise.reject(new Error(res.message || 'Error'))
        }
        return res
    }, error => {
        message.error(error);
        return Promise.reject(error)
    })

export default service;