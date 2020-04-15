import request from '../utils/request'

export function mealLablesList(){
    return request({
        url: '/mealLables/all',
        method: 'get'
    })
}