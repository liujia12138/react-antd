import request from '../utils/request'

export function mealLabelList(){
    return request({
        url: '/mealLables/all',
        method: 'get'
    })
}

export function mealLabelAdd(data){
    return request({
        url: '/mealLables/add',
        method: 'post',
        data
    })
}