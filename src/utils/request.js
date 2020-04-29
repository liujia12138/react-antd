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
        const res = response.data;
        console.log(response,"response11")
        if(response.status !== 200){
            // message.error(error);
            return Promise.reject(new Error(res.message || 'Error'))
        }
        return res
    }, error => {
        //接口返回的data在error.response.data里
        if (error.response) {
            message.error(error.response.data.message);
        } else if (error.request) {
        } else {
        }
        return Promise.reject(error.response.data);
    })

export default service;