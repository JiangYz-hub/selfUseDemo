import request from '../utils/request';

export function upload(formData) {
    return request({
        url: '/upload',
        method: 'post',
        formData,
    })
}

export function download() {
    return request({
        url: '/download',
        method: 'get',
    })
}
