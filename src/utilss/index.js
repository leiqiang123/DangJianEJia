import axios from 'axios'

// const env = process.env.NODE_ENV  //在生产环境中被设置成production  在开发环境中被设置成development
// let baseURL = env == 'production' ? '/' : '/api'


var instance = axios.create({
    baseURL: 'http://211.67.177.56:8080/hhdj',
    timeout:15000
});

const qs = require('querystring')
instance.interceptors.request.use(function (config) {
    if(window.sessionStorage.vuex){
        let token = JSON.parse(window.sessionStorage.vuex).token
        config.headers.token = token
    }
    if(config.method == 'post'){
        // config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
    
},function (error) {
    return Promise.reject(error)
})

const Xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params:data}, config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.post(url, data, config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default Xhr