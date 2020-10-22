import request from "./request"

export function login(data) {
    return request({
        url: '/blog-backend/login',
        method: 'get',
        data:data
    })
}
