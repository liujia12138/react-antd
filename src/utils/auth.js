import Cookie from 'js-cookie';

const TokenKey = 'auth-token';

export function setToken(token){
    return Cookie.set(TokenKey, token, { expires: 7 })
}

export function getToken(){
    return Cookie.get(TokenKey)
}

export function removeToken(){
    return Cookie.remove(TokenKey)
}