import request from "utils/request.js"

export function get_medData(url){
    return request({
        url,
        method:'get',
    })
}

export function getPubCityData(url){
    return request({
        url,
        method:'get',
    })
}

export function getPubDistData(url){
    return request({
        url,
        method:'get',
    })
}