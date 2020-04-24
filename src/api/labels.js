import request from '../utils/request'

export function mealLabelList(){
    return request({
        url: '/mealLables/all',
        method: 'get'
    })
}